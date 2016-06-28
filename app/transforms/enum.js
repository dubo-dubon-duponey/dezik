import Transform from 'ember-data/transform';

export default Transform.extend({
  serialize: function (d, options) {
    return JSON.stringify(d);
  },
  deserialize: function (d, options) {
    return JSON.parse(d || '[]');
  }
});
