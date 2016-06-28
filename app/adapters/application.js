import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';

var domain = 'dezik';
var user = 'dmp';
var pwd = 'v4whZw4XZBUBpA';

var route = function(options){
  // Depluralize all leading endpoints
  options.url = options.url.replace(/^(\/[^\/]+)(s)($|\/)/, '$1$3');

  // Accomodate SpaceDog method oddities
  switch(options.type){
    // Record modification uses PUT instead of PATCH
    case 'PATCH':
      options.type = 'PUT';
      break;
  }


  // Now, vary on the first segment path
  var root = options.url.split('/');
  root.shift();
  var secondary = root.shift().split('-');
  root = secondary.shift();

  switch(root){
    // Endpoints prefixed with spacedog- are used as a trick to reforward to a different endpoint
    case 'spacedog':
      // console.warn('foooo', options.url);
      options.url = options.url.replace(/^\/spacedog-([^/]+)/, '/$1');
      switch(secondary.shift()){
        case 'shares':
        case 'share':
          switch(options.type) {
            // Share creation gymnastic
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
              // Trick to get back the full /id/filename from /id*filename (embedded as an actual object id)
              options.url = options.url.replace(/([/][^/*]+)([*])/, "$1/");
              break;
          }
          break;
        case 'schema':
          switch(options.type){
            // Schema creation (non-existent) reroutes to schema updat
            case 'POST':
              options.type = 'PUT';
              options.url += '/' + options.data.data.id;
              break;
          }
          break;
        case 'schemafields':
        case 'schemafield':
          switch(options.type){
            case 'DELETE':
              console.warn('gonna fake it');
              options.fakeIt = true;
              break;
          }
          break;

      }
      break;

    default:
      console.warn('THAT MUST BE DATA');
      break;
  }
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
  SpaceDog.serialize(options);
/*
  if (['POST', 'PUT', 'PATCH'].indexOf(options.type) !== -1)
    options.data = SpaceDog.serialize(options.url, options.type, options.data);
  else{
    // Process data options for methods without body
    var data = Object.getOwnPropertyNames(options.data || {}).map(function(key){
      return key + '=' + options.data[key];
    }).join('&');
    delete options.data;
    if (data)
      options.url += '?' + data;
  }
*/

  /*if (options.data === '{}')
    options.data = '';*/

  // Map to the appropriate domain
  options.url = 'https://' + domain + '.spacedog.io/1' + options.url;

  // Authenticate
  options.headers = options.headers || {};
  options.headers.Authorization = 'Basic ' + btoa(user + ':' + pwd);

  var defer = options.success;
  // Normalize payload before passing it down
  options.success = function (payload, textStatus, jqXHR) {
    payload = SpaceDog.normalize(options.url, options.type, jqXHR.responseText);
    defer.apply(options, [payload, textStatus, jqXHR]);
  };
  if (!options.fakeIt)
    Ember.$.ajax(options);
  else
    setTimeout(options.success, 1,
      undefined, 200, {
        status: 200,
        responseText: '{"data": {"id": "' + decodeURIComponent(options.url.split('/').pop()) + '", "type": "spacedog-schemafield"}}',
        getAllResponseHeaders: function(){
          return 'Content-Type: application/json;charset=UTF-8';
        }
      });
};


export default JSONAPIAdapter.extend({
  _ajaxRequest: function(options) {
    // Hijack the error handler to be able to send an alert on the data store
    var originalOnError = options.error;
    options.error = function (jqXHR, textStatus, errorThrown) {
      Ember.getOwner(this).lookup('service:store').createRecord('alert', {
        type: 'danger',
        title: 'SpaceDog service erroring out!',
        message: 'Status: ' + (textStatus || 'NOTHING!') + ' - ErrorThrown: ' + (errorThrown || 'Service is tits-up with no specific error thrown!'),
        destruct: 0
      });

      Ember.getOwner(this).lookup('service:store').createRecord('alert', {
        type: 'warning',
        title: 'Failed on:',
        message: options.url,
        destruct: 0
      });

      // Continue with the downstream error handler
      originalOnError.apply(options, [jqXHR, textStatus, errorThrown]);
    }.bind(this);

    // Defer to our own, framework generic JSONAPI compatible implementation of ajax to hide away SpaceDog service specifics
    spacedogAjax(options);
  },

  ajaxOptions(url, type, options) {
    // The REST implementation forces stringification of the request body, regardless of what it is (doesn't work for files, obviously)
    // So, lie about it (and don't pay the perf penaly either) :)
    var d;
    if(options){
      d = options.data;
      delete options.data;
    }
    var ret = this._super(...arguments);
    ret.data = d;
    return ret;
  },

  // Default id generator in case no id is specified
  generateIdForRecord: function(store, inputProperties) {
    console.warn('com.spacedog.tsygan::generateIdForRecord', inputProperties);
    return SpaceDog.uuid.generate();
  }

});
