(function(){
  'use strict';
  (function(){
    this.integer = {
      // Send undefined, not NaN
      _serializer: function(item) {
        return isNaN(item) ? undefined : item;
      },

      _deserializer: function(item) {
        item = parseInt(item, 10);
        if (isNaN(item))
          item = undefined;
        return item;
      }

    }
  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}));
