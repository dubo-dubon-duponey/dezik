(function() {
  'use strict';

  // A slightly messy spacedog core library (not ember-tainted)
  var GET     = 'GET';
  var POST    = 'POST';
  var DELETE  = 'DELETE';

  var getNormalizer = function(endpoint, method){
    // Get the processor
    var root = endpoint.split('/').shift();
    var meth = method.toLowerCase();
    var processor = SpaceDog.normalize;
    if(root in processor){
      processor = processor[root];
      if(meth in processor)
        processor = processor[meth];
    }
    return processor;
  };

  var getSerializer = function(endpoint, method){
    // Get the processor
    var root = endpoint.split('/').shift();
    var meth = method.toLowerCase();
    var processor = SpaceDog.serialize;
    if(root in processor){
      processor = processor[root];
      if(meth in processor)
        processor = processor[meth];
    }
    return processor;
  };


  // Dead silly XHR wrapper
  var X = function(app, success, failure, endpoint, method, data, headers) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(event) {
      if(this.readyState != 4)
        return;

      var resp = {
        responseText: this.responseText,
        error: 'Not JSON parsable!'
      };
      var process = getNormalizer(endpoint, method);
      try {
        resp = process(this.status, this.responseText, this.getAllResponseHeaders());
//        resp = JSON.parse(this.responseText);
        if (this.status < 200 || this.status >= 400)
          throw new Error('Backend error');

        success(this.status, resp, this.getAllResponseHeaders());
      }catch(e){
        console.warn('Failed! Input was:', this.responseText);
        failure(this.status, resp, this.getAllResponseHeaders(), xhr);
      }
    };
    // Open can fail in a number of circunstances
    xhr.open(method || GET, 'https://' + app + '.spacedog.io/1/' + endpoint, true);
    if (headers)
      for (var i in headers)
        if (headers.hasOwnProperty(i))
          xhr.setRequestHeader(i, headers[i]);

    // xhr.setRequestHeader('x-spacedog-debug', 'true');
    // Do we have a file by any chance?
    if (data && (typeof data == 'string') && (data.substr(0, 5) == 'data:'))
      data = dataURItoBlob(data);
    if(data && (typeof data == 'object')){
      var process = getSerializer(endpoint, method);
      data = JSON.stringify(process(data));
    }
    xhr.send(data);
  };

  var SpaceDogEngine = function(domain, user, pwd){
    var XT = X.bind({}, domain);
    // Call this to retrieve all schemas
    this.phone = function(success, failure, endpoint, id, method, data){
      XT(success, failure, endpoint + (id ? ('/' + id) : ''), method, data, {'Authorization': 'Basic ' + btoa(user + ':' + pwd)});
    };
  };

  this.SpaceDogEngine = SpaceDogEngine;

}).apply(this);


