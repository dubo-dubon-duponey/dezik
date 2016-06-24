import Transform from 'ember-data/transform';

export default Transform.extend({
  serialize: function (d) {
    return JSON.stringify(d);
  },
  deserialize: function (d) {
    return JSON.parse(d || '[]');
  }
});
