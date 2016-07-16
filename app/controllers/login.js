import Ember from 'ember';
const { computed, observer } = Ember;

// Model is passed on in "model" by route
export default Ember.Controller.extend({
  spaceydomain: Ember.inject.service('tsygan@domain'),
  spaceydog: Ember.inject.service('tsygan@spacedog'),

  domainReady: computed('spaceydomain.ready', function(){
    return this.get('spaceydomain.ready');
  }),

  domainError: computed('spaceydomain.error', function(){
    return this.get('spaceydomain.error');
  }),

  previousTransition: '',

  user: '',
  password: '',
  domain: '',

  domainStatus: computed('domainReady', 'domainError', function(){
    if (this.get('domainReady')){
      // If it's verified, we can now try to login
      this.set('spaceydog.password', this.get('password'));
      this.set('spaceydog.user', this.get('user'));
      return 'has-feedback has-success';
    }
    if (this.get('spaceydomain.error'))
      return 'has-feedback has-error';
    return '';
  }),

  passwordStatus: computed('spaceydog.ready', 'spaceydog.error', 'password', function(){
    if (this.get('spaceydog.ready'))
      return 'has-feedback has-success';
    if (this.get('spaceydog.error'))
      return 'has-feedback has-error';
    if (this.get('password') && this.get('password').length < 6)
      return 'has-feedback has-warning';
    return '';
  }),

  loginStatus: computed('spaceydog.ready', 'spaceydog.error', 'user', function(){
    if (this.get('spaceydog.ready'))
      return 'has-feedback has-success';
    if (this.get('spaceydog.error'))
      return 'has-feedback has-error';
    if (this.get('user') && this.get('user').length < 3)
      return 'has-feedback has-warning';
    return '';
  }),

  pending: computed('spaceydog.pending', 'spaceydomain.pending', function(){
    return this.get('spaceydog.pending') || this.get('spaceydomain.pending');
  }),

  disabled: computed('pending', 'user', 'password', 'domain', function(){
    return !this.get('user') || !this.get('password') || !this.get('domain') || this.get('pending');
  }),

  error: computed('spaceydog.error', 'domainError', function(){
    if (!this.get('spaceydog.error') && !this.get('domainError'))
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

  message: computed('pending', function(){
    return this.get('pending') ? 'Logging in...' : 'Login';
  }),

  changeObserver: observer('spaceydog.ready', function () {
    if (this.get('spaceydog.ready')){
      var previousTransition = this.get('previousTransition');
      if (previousTransition) {
        this.set('previousTransition', '');
        return previousTransition.retry();
      }
      this.transitionToRoute('index');
    }
  }),

  init: function(){
    this._super(...arguments);
    this.set('domain', this.get('spaceydomain.domain'));
  },

  actions: {
    signIn: function () {
      this.set('spaceydomain.domain', this.get('domain'));
      this.set('spaceydog.password', this.get('password'));
      this.set('spaceydog.user', this.get('user'));
    }
  }
});
