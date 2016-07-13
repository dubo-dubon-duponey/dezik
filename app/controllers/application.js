import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({
  spaceydog: Ember.inject.service('tsygan@spacedog'),
  loggedIn: computed('spaceydog.verified', function(){
    return this.get('spaceydog.verified');
  }),
  loggedOut: computed('spaceydog.verified', function(){
    return !this.get('spaceydog.verified');
  }),
  pending: computed('spaceydog.pending', function(){
    return this.get('spaceydog.pending');
  }),
  actions: {
    login: function(){
      this.get('target').transitionTo('login');
    },
    logout: function(){
      this.get('spaceydog').logout();
    }
  }
});
