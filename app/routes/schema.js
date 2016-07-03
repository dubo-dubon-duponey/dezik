import Restricted from './restricted';

export default Restricted.extend({
  model() {
    return this.store.findAll('tsygan@spacedog-schema');
  }
});
