import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

var domain = 'dezik';
var user = 'dmp';
var pwd = 'v4whZw4XZBUBpA';

var route = function(options){
  console.warn('Routing interceptor patrol', options.data, options.url, options.type);
  // Depluralize all leading endpoints
  options.url = options.url.replace(/^(\/[^\/]+)(s)($|\/)/, '$1$3');

  // Now, vary on the first segment path
  var root = options.url.split('/');
  root.shift();
  var secondary = root.shift().split('-');
  root = secondary.shift();
  switch(root){
    // Endpoints prefixed with spacedog- are used as a trick to reforward to a different endpoint
    case 'spacedog':
      switch(secondary.shift()){
        case 'logs':
        case 'log':
          var data = [];
          Object.getOwnPropertyNames(options.data).forEach(function(key){
            data.push(key + '=' + options.data[key]);
          });
          data = data.join('&');
          delete options.data;
          options.url = options.url.replace(/spacedog-[^/]+/, 'log');
          options.url += '?' + data;
          break;
        case 'shares':
        case 'share':
          options.url = options.url.replace(/spacedog-[^/]+/, 'share');
          switch(options.type) {
            // Schema creation (non-existent) reroutes to schema update
            case 'POST':
              options.type = 'PUT';
              options.url += '/' + options.data.data.attributes.filename;
              options.headers = options.headers || {};
              options.headers['Content-type'] = options.data.data.attributes['content-type'];
              // options.headers['Content-type'] = 'text/plain; charset=x-user-defined-binary';
              options.data = options.data.data.attributes.file;
              options.processData = false;
              options.contentType = false;
              break;
            case 'DELETE':
              options.url = options.url.replace(/([/][^/*]+)([*])/, "$1/");
              break;
          }
          break;
      }
      break;
    case 'schema':
      switch(options.type){
        // Schema creation (non-existent) reroutes to schema update
        case 'POST':
          options.type = 'PUT';
          options.url += '/' + options.data.data.id;
          break;
        // Schema update uses PUT
        case 'PATCH':
          options.type = 'PUT';
          break;
      }
      break;
    case 'schemafield':
      switch(options.type){
        case 'DELETE':
          options.fakeIt = true;
          break;
      }
      break;
  }
};

/*return new Ember.RSVP.Promise(function (resolve, reject) {
 return Ember.run(null, resolve, {status: 200});
 });*/


// Resolver that finds the most specialized serializer for any given operation (eg: /schema PUT, or /data GET)
var serialize = function(options){
  var root = options.url.split('/');
  root.shift();
  root = root.shift();
  var meth = options.type.toLowerCase();
  var processor = SpaceDog.serialize;
  if(root in processor){
    processor = processor[root];
    if(meth in processor)
      processor = processor[meth];
  }
  options.data = processor(options.data);
};

var normalize = function(options, status, response, headers){
  var root = options.url.split('/');
  root = root[4].split('?').shift();
  var meth = options.type.toLowerCase();
  var processor = SpaceDog.normalize;
  if(root in processor){
    processor = processor[root];
    if(meth in processor)
      processor = processor[meth];
  }
  return processor(status, response, headers, options);
};

var spacedogAjax = SpaceDog.ajax = function(options){
  // Reopen data
  try{
    options.data = JSON.parse(options.data);
  }catch(e){
  }
  // Translate JSONAPI calls to SpaceDog inhouse routing transparently
  route(options);
  // Serialize payload if there is one
  if (['POST', 'PUT', 'PATCH'].indexOf(options.type) !== -1)
    serialize(options);

  if (options.data === '{}')
    options.data = '';

  // Map to the appropriate domain
  options.url = 'https://' + domain + '.spacedog.io/1' + options.url;

  // Authenticate
  options.headers = options.headers || {};
  options.headers.Authorization = 'Basic ' + btoa(user + ':' + pwd);

  var defer = options.success;
  // Normalize payload before passing it down
  options.success = function (payload, textStatus, jqXHR) {
    payload = normalize(options, jqXHR.status, jqXHR.responseText, jqXHR.getAllResponseHeaders());
    defer.apply(options, [payload, textStatus, jqXHR]);
  };
  if (!options.fakeIt)
    Ember.$.ajax(options);
  else
    setTimeout(options.success, 1,
      undefined, 200, {
        responseText: '{"data": {"id": "' + decodeURIComponent(options.url.split('/').pop()) + '", "type": "schemafield"}}',
        getAllResponseHeaders: function(){
          return {'Content-Type':'application/json;charset=UTF-8'};
        }
      });
};


export default JSONAPIAdapter.extend({
  _ajaxRequest: function(options) {
    // Hijack the error handler to be able to send an alert on the data store
    var dferr = options.error;
    options.error = function (jqXHR, textStatus, errorThrown) {
      Ember.getOwner(this).lookup('service:store').createRecord('alert', {
        type: 'danger',
        title: 'SpaceDog service erroring out!',
        message: 'Status: ' + (textStatus || 'FATAL') + ' - ErrorThrown: ' + (errorThrown || 'Service is tits-up with no specific error!'),
        destruct: 0
      });

      Ember.getOwner(this).lookup('service:store').createRecord('alert', {
        type: 'warning',
        title: 'Failed on:',
        message: options.url,
        destruct: 0
      });

      // Continue with the downstream error handler
      dferr.apply(options, [jqXHR, textStatus, errorThrown]);
    }.bind(this);

    // Defer to our own, framework generic JSONAPI compatible implementation of ajax to hide away SpaceDog service specifics
    spacedogAjax(options);
  },

  ajaxOptions(url, type, options) {
    // Stupidly, this super forces stringification of data payload, which is a $``.??!!$.
    // So, lie!
    var d;
    if(options){
      var d = options.data;
      delete options.data;
    }
    var ret = this._super(...arguments);
    ret.data = d;
    return ret;
  },



  generateIdForRecord: function(store, inputProperties) {
    console.warn('com.spacedog.tsygan::generateIdForRecord', inputProperties);
    return SpaceDog.uuid.generate();
  }

});
