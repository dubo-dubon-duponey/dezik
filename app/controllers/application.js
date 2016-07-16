import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({
  spaceydog: Ember.inject.service('tsygan@spacedog'),
  loggedIn: computed('spaceydog.ready', function(){
    return this.get('spaceydog.ready');
  }),

  loggedOut: computed('spaceydog.ready', function(){
    return !this.get('spaceydog.ready');
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
