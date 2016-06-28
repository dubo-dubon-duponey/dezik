(function(){
  'use strict';
  (function(){

    this.json = {
      _deserializer(item) {
        return item;// JSON.parse(item);
      },

      _serializer(item) {
        return item;// JSON.stringify(item);
      }
    };

  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))
