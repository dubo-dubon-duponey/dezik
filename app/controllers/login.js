import Ember from 'ember';
const { computed, observer } = Ember;

// Model is passed on in "model" by route
export default Ember.Controller.extend({
  spaceydomain: Ember.inject.service('tsygan@domain'),
  spaceydog: Ember.inject.service('tsygan@spacedog'),
  previousTransition: '',

  user: '',
  password: '',
  domain: '',

  pending: computed('spaceydog.pending', function(){
    return this.get('spaceydog.pending');
  }),

  error: computed('spaceydog.error', function(){
    if (!this.get('spaceydog.error'))
      return;
    this.set('password', '');
    switch (this.get('spaceydog.error')){
      case 401:
        return 'Invalid credentials';
      case 500:
        return 'SpaceDog is tits-up!';
      default:
        return 'Unknown error ' + this.get('spaceydog.error');
    }
  }),

  triggerState: computed('spaceydog.pending', function(){
    return this.get('spaceydog.pending') ? 'loading' : 'reset';
  }),

  changeObserver: observer('spaceydog.verified', function () {
    var verified = this.get('spaceydog.verified');
    if (verified){
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', '');
        return previousTransition.retry();
      }
      this.transitionToRoute('index');
    }
  }),

  actions: {
    signIn: function () {
      this.set('spaceydog.password', this.get('password'));
      this.set('spaceydog.user', this.get('user'));
      this.set('spaceydomain.domain', this.get('domain'));

      console.warn(this.get('spaceydog.login'));
      this.get('spaceydog').login();
    }
  }
});
