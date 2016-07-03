import Ember from 'ember';
const { computed, observer } = Ember;

// Model is passed on in "model" by route
export default Ember.Controller.extend({
  kevinspacey: Ember.inject.service('tsygan@spacedog'),
  previousTransition: '',

  user: '',
  password: '',
  domain: '',

  pending: computed('kevinspacey.pending', function(){
    return this.get('kevinspacey.pending');
  }),

  error: computed('kevinspacey.error', function(){
    if(!this.get('kevinspacey.error'))
      return;
    this.set('password', '');
    switch (this.get('kevinspacey.error')){
      case 401:
        return 'Invalid credentials';
        break;
      case 500:
        return 'SpaceDog is tits-up!';
        break;
      default:
        return 'Unknown error ' + this.get('kevinspacey.error');
        break;
    }
  }),

  triggerState: computed('kevinspacey.pending', function(){
    return this.get('kevinspacey.pending') ? 'loading' : 'reset';
  }),

  changeObserver: observer('kevinspacey.verified', function () {
    var verified = this.get('kevinspacey.verified');
    if(verified){
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
      this.set('kevinspacey.password', this.get('password'));
      this.set('kevinspacey.user', this.get('user'));
      this.set('kevinspacey.domain', this.get('domain'));

      console.warn(this.get('kevinspacey.login'));
      this.get('kevinspacey').login();
    }
  }
});
