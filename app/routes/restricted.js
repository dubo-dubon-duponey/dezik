import Ember from 'ember';
const {observer} = Ember;

export default Ember.Route.extend({
  kevinspacey: Ember.inject.service('tsygan@spacedog'),

  changeObserver: observer('kevinspacey.verified', function(){
    if(!this.get('kevinspacey.verified'))
      this.transitionTo('login');
  }),

  beforeModel: function(transition) {
    // No id? Need to go authenticate.
    if(!this.get('kevinspacey.verified')){
      // Tag along
      var loginController = this.controllerFor('login');
      loginController.set('previousTransition', transition);
      this.transitionTo('login');
    }
    // Ok, good to go, let's have the user in
  }
});
