(function(){
  'use strict';
  (function(){

    this.boolean = {
      _deserializer(item) {
        return !!item;
      },

      _serializer(item) {
        return !!item;
      }
    };

  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))
