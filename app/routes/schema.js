import Restricted from './restricted';

export default Restricted.extend({
  model: function() {
    return this.store.peekAll('tsygan@spacedog-schema');
  }
});
