(function(){
  'use strict';

  // Serialization occurs just after Ember is done preparing the payloads to be sent.
  // Ember output is JSONAPI compliant, and we turn it into SpaceDog lingo.
  // The engine looks up specific serialization methods, based on the endpoint, and the method.
  // Example: for a POST query to the /1/schema endpoint, the following serialization functions will be looked-up, and
  // the last existing one will be used:
  // - SpaceDog.serialize
  // - SpaceDog.serialize.schema
  // - SpaceDog.serialize.schema.post
  // At the very least, we... do nothing

  var defaultSerializer = function(jsonAPIData){
    console.warn('com.spacedog.tsygan::serializer->root <<>>', jsonAPIData);
    return jsonAPIData;
  };

  this.serialize = function(url, method, data){
    // Urls at that point resemble "/service/identifier/foo/bar/baz"
    var service = url.split('/');
    service.shift();
    var processor = this.serialize[service.shift()] || defaultSerializer;
    return (processor[method.toLowerCase()] || processor)(data);
  };

}).apply(this.SpaceDog || (this.SpaceDog = {}));
