(function(){
  'use strict';
  (function(){
    this.enum = {
      _deserializer(item, options) {
        console.warn('enum');
        if((options['enum-set'] || []).indexOf(item) === -1)
          item = undefined;
        return item;
      },

      _serializer(item, options) {
        console.warn('enum');
        if((options['enum-set'] || []).indexOf(item) === -1)
          item = undefined;
        return item;
      }
    };
  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))

