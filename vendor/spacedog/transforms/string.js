(function(){
  'use strict';
  (function(){
    this.string = {
      _deserializer(item) {
        return item.toString();
      },

      _serializer(item) {
        return item.toString();
      }
    };
  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))
