import Transform from 'ember-data/transform';

export default Transform.extend({
  serialize: function (d) {
    if(!d)
      return;
    return d.latitude + ',' + d.longitude;
  },
  deserialize: function (d) {
    var c = d.split(',');
    return {
      latitude: parseFloat(c.pop()),
      longitude: parseFloat(c.pop())
    };
  }
});
