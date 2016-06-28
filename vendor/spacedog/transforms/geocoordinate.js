(function(){
  'use strict';
  (function(){
    this.geocoordinates = {

      _deserializer(item) {
        item = item.split(',');
        return {
          latitude: parseFloat(item.pop()),
          longitude: parseFloat(item.pop())
        };
      },

      _serializer(item) {
        return item.latitude + ',' + item.longitude;
      }
    };
  }).apply(this.transforms || (this.transforms = {}))
}).apply(this.SpaceDog || (this.SpaceDog = {}))

