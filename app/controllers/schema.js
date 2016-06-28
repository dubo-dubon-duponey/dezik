import Ember from 'ember';

const { Controller, computed, observer } = Ember;

export default Controller.extend({
  creatingNewModel: false,

  list: computed('items.[]', function(){
    return this.get('items').map(function(item){
      return item.id;
    });
  }),

  items: Ember.computed('model.[]', function(){
    return this.get('model').filter(function(item){
      return !item.get('id').match(/^Spacedog/i);
    })
  }),


  // Actions
  actions: {
    // Add a new model
    newModel(modelId) {
      // XXX This may fail here if record id already exist (for example)
      const model = this.store.createRecord('SpacedogSchema', {
        // XXX SpaceDog damnit! https://github.com/spacedog-io/services/issues/34
        id: modelId.toLowerCase().replace(/[\\/*?"<>|\s]/g, '')
      });

      // this.send('newField', model);
      model.save();
      this.set('model', this.store.peekAll('SpacedogSchema'));
      // this.model.pushObjects(model);
    },

    // Add a new field
    newField(model) {
      const currentFields = model.get('fields');

      currentFields.then((data) => {
        const newField = this.store.createRecord('SpacedogSchemafield', {
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
      var model = this.store.peekRecord('SpacedogSchema', modelId);
      model.set('dirty', true);
      // model.save();
    }
  }
});
