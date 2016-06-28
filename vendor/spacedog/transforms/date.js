(function(){
  'use strict';
  (function(){
    this.date = {
      _deserializer(item) {
        return new Date(item);
      },

      _serializer(item) {
        if(!item.toISOString)
          item = new Date(item);
        return item.toISOString();
      }
    };
  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))

