(function(){
  'use strict';
  (function(){

    this.number = {
      // Send undefined, not NaN
      _serializer: function(item) {
        return isNaN(item) ? undefined : item;
      },

      _deserializer: function(item) {
        item = parseFloat(item);
        if (isNaN(item))
          item = undefined;
        return item;
      }
    };

  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))
