import Restricted from './restricted';

export default Restricted.extend({
  model(params) {
    return this.store.findAll(params.data_schema);
  }
});
