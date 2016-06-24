import Ember from 'ember';

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

export default Ember.Component.extend({
  isCreating: false,
  modelId: '',

  keyDown(event) {
    if (event.keyCode === RETURN_KEY) {
      event.preventDefault();
      this.attrs.save(this.get('modelId'));
      this.set('modelId', '');
      this.set('isCreating', false);
      return false;
    }
    else if (event.keyCode === ESCAPE_KEY) {
      event.preventDefault();
      this.set('isCreating', false);
    }
  },

  actions: {
    addModel() {
      this.set('isCreating', true);
      Ember.run.next(this, () => {
        this.$('.form-control').focus();
      });
    }
  }
});
