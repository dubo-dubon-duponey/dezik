import Ember from 'ember';
const {observer} = Ember;

export default Ember.Route.extend({
  spaceydog: Ember.inject.service('tsygan@spacedog'),

  // If we notice a logout, move out to login
  changeObserver: observer('spaceydog.ready', function(){
    if (!this.get('spaceydog.ready'))
      this.transitionTo('login');
  }),

  // Restricted route. If we are not verified, move away to login
  beforeModel: function(transition) {
    if (this.get('spaceydog.ready'))
      return;
    // No id? Need to go authenticate first.
    var loginController = this.controllerFor('login');
    loginController.set('previousTransition', transition);
    this.transitionTo('login');
  }
});
