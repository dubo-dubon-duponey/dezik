import Ember from 'ember';

export default Ember.Route.extend({
  kevinspacey: Ember.inject.service('tsygan@spacedog'),

  beforeModel: function(transition) {
    if(!this.get('kevinspacey.verified'))
      return;

    this.transitionTo('index');
  }

});
