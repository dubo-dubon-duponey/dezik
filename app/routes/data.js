import Restricted from './restricted';

export default Restricted.extend({
  model: function(params) {
    return this.store.findAll(params.data_schema);
  }
});
