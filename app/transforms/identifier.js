import Transform from 'ember-data/transform';

export default Transform.extend({
  serialize: function (d) {
    return d;
  },
  deserialize: function (d) {
    return d;
  }
});
