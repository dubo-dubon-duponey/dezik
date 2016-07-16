import Ember from 'ember';

export default Ember.Route.extend({
  spaceydog: Ember.inject.service('tsygan@spacedog'),

  // The login route: if we are all verified, move to index
  beforeModel: function() {
    if (!this.get('spaceydog.ready'))
      return;

    this.transitionTo('index');
  }

});
