import Ember from 'ember';

const { Controller, computed, observer } = Ember;

export default Controller.extend({
  creatingNewModel: false,

  // Contains only the user defined schemas (excluding "SpaceDog" models)
  items: Ember.computed('model.[]', function(){
    return this.get('model').filter(function(item){
      // Recomputing everything - very ineficient, but not time for fancy shit
      var isUserDefined = !item.get('id').match(/^tsygan@/i);
      // XXX double registration doesn't work obviously
      // console.warn('---', item.get('id'), isUserDefined);
      if(isUserDefined)
        SpaceDog.register(Ember.getOwner(this), item);
      return isUserDefined;
    }, this)
  }),

  // List of ids
  list: computed('items.[]', function(){
    return this.get('items').map(function(item){
      return item.id;
    });
  }),



  // Actions
  actions: {
    // Add a new model
    newModel(modelId) {
      // XXX This may fail here if record id already exist (for example)
      const model = this.store.createRecord('tsygan@spacedog-schema', {
        // XXX SpaceDog damnit! https://github.com/spacedog-io/services/issues/34
        id: modelId.toLowerCase().replace(/[\\/*?"<>|\s]/g, '')
      });

      // this.send('newField', model);
      model.save();
      this.set('model', this.store.peekAll('tsygan@spacedog-schema'));
      // this.model.pushObjects(model);
    },

    // Add a new field
    newField(model) {
      const currentFields = model.get('fields');

      currentFields.then((data) => {
        const newField = this.store.createRecord('tsygan@spacedog-schemafield', {
          parentModel: model,
          type: 'string',
          dirty: true
        });

        data.addObject(newField);
      });
    },

    // Remove a model
    removeModel(model) {
      const fields = model.get('fields');

      // iterate through fields and delete those records
      fields.forEach((field) => {
        if (field) {
          field.destroyRecord();
        }
      });

      model.destroyRecord();

    },

    saveModel(model) {
      model.save();
      model.set('dirty', false);
      const fields = model.get('fields');
      // iterate through fields and delete those records
      fields.forEach((field) => {
        field.set('dirty', false);
      });
    },

    // Triggered when fields are updated - change the state to not saved
    updateFields(modelId) {
      var model = this.store.peekRecord('tsygan@spacedog-schema', modelId);
      model.set('dirty', true);
      // model.save();
    }
  }
});
