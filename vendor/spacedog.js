(function() {
  'use strict';

  // A slightly messy spacedog core library (not ember-tainted)
  var GET     = 'GET';
  var POST    = 'POST';
  var DELETE  = 'DELETE';

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
      try {
        resp = JSON.parse(this.responseText);
        if (this.status < 200 || this.status >= 400)
          throw new Error('Backend error');
        success(this.status, resp, this.getAllResponseHeaders());
      }catch(e){
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
    if(data && (typeof data == 'object'))
      data = JSON.stringify(data);
    xhr.send(data);
  };

  var typeMapping = {
    'text': 'string', // *
    'timestamp': 'date', //  *
    'boolean': 'boolean', // *
    'float': 'number', // *
    'integer': 'integer', // +
    'string': 'identifier',
    'stash': 'json',
    // 'ref': 'reference',
    'geopoint': 'geocoordinates',
    'enum': 'enum'/*,
    'file': 'file',
    'amount': 'amount'*/
  };

  // This is Elastic Search actual list of supported languages
  var sourceLn = {
    "ar": "Arabic",
    "hy": "Armenian",
    "eu": "Basque",
    "pt": "Brazilian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "ja": "Cjk",
    "zh": "Cjk",
    "ko": "Cjk",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "fi": "Finnish",
    "fr": "French",
    "gl": "Galician",
    "de": "German",
    "el": "Greek",
    "hi": "Hindi",
    "hu": "Hungarian",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "no": "Norwegian",
    "fa": "Persian",
    "pt": "Portuguese",
    "ro": "Romanian",
    "ru": "Russian",
    "ku": "Sorani",
    "es": "Spanish",
    "sv": "Swedish",
    "tr": "Turkish",
    "th": "Thai"
  };

  // Flat it
  var belln = {};
  var lnoptions = [];
  Object.keys(sourceLn).forEach(function(key){
    belln[sourceLn[key].toLowerCase()] = sourceLn[key];
    lnoptions.push(sourceLn[key]);
  });

  var lnLup = Mingus.grammar.iso639.fork(belln);

    // Pre-existing: string number boolean date
  var transforms = {
    type: {
      deserialize: function(serialized){
        if(serialized in typeMapping)
          return typeMapping[serialized];
        throw new Error('Unnhandled spacedog service field type');
      },
      serialize: function(deserialized){
        var ret;
        Object.keys(typeMapping).forEach(function(key){
          if (deserialized == typeMapping[key])
            ret = key;
        });
        if (!ret)
          throw new Error('Unnhandled locally defined field type');
        return ret;
      },
      dump: function(){
        return Object.keys(typeMapping).map(function(key) {
          return typeMapping[key];
        });
      }
    },
    integer: {
      deserialize: function(serialized) {
        return parseInt(serialized, 10);
      },

      serialize: function(deserialized) {
        return deserialized;
      }
    },
    language: {
      deserialize: function(serialized) {
        if(!serialized)
          return '';// 'English';
        var ret = lnLup.decode(serialized);
        if(!ret)
          throw new Error('Unsupported dog language stored on backend!');
        return ret;
      },

      serialize: function(deserialized) {
        if(!deserialized)
          return '';// 'english';
        var ret = lnLup.encode(deserialized);
        if(!ret)
          throw new Error('Unsupported dog language specified! Can\'t save this: ' + deserialized);
        return ret;
      }
    }
  };

  var SpaceDogEngine = function(domain, user, pwd){
    var XT = X.bind({}, domain);
    // Call this to retrieve all schemas
    this.phone = function(success, failure, endpoint, id, method, data){
      XT(success, failure, endpoint + (id ? ('/' + id) : ''), method, data, {'Authorization': 'Basic ' + btoa(user + ':' + pwd)});
    };
  };

  SpaceDogEngine.transforms = transforms;

  SpaceDogEngine.uuid = Mingus.grammar.uuid.generate;

  SpaceDogEngine.languageOptions = lnoptions;

  this.SpaceDogEngine = SpaceDogEngine;

}).apply(this);
