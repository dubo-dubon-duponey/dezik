import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({
  kevinspacey: Ember.inject.service('tsygan@spacedog'),
  loggedIn: computed('kevinspacey.verified', function(){
    return this.get('kevinspacey.verified');
  }),
  loggedOut: computed('kevinspacey.verified', function(){
    return !this.get('kevinspacey.verified');
  }),
  pending: computed('kevinspacey.pending', function(){
    return this.get('kevinspacey.pending');
  }),
  actions: {
    login: function(){
      this.get('target').transitionTo('login');
    },
    logout: function(){
      this.get('kevinspacey').logout();
    }
  }
});
