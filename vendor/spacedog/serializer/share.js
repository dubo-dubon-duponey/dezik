(function(){
  'use strict';
  (function(){

    var LOG_PREFIX = 'com.spacedog.tsygan::serializer->share::';

    this.share = function(jsonAPIData) {
      console.warn(LOG_PREFIX + 'default <<>>', jsonAPIData);
      return jsonAPIData;
    };

    // How to serialize Schemas
    this.share.put = function(jsonAPIData) {
      console.debug(LOG_PREFIX + 'put <<>>', jsonAPIData.length);
      return jsonAPIData;
    };

  }).apply(this.serialize || (this.serialize = {}));
}).apply(this.SpaceDog || (this.SpaceDog = {}));
