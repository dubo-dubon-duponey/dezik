import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    // Get all schemas
    return this.store.findAll('schema');
  }
});
