import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // Get all schemas
    // window.sdstore = this.store;
    return this.store.findAll('schema');
  }
});
