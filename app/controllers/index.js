// import Constants from '../utils/constants';
// import getModelInfo from '../utils/get-model-info';
import Ember from 'ember';

const { Controller, computed, observer } = Ember;

export default Controller.extend({
  creatingNewModel: false,

  // Actions
  actions: {

    // Add a new model
    newModel(modelId) {
      console.warn('newModel------>');
      const model = this.store.createRecord('schema', {
        // XXX SpaceDog!
        id: modelId.toLowerCase() // Ember.String.classify(modelId)
      });

      // this.send('newField', model);
      model.save();
    },

    // Add a new field
    newField(model) {
      const currentFields = model.get('fields');

      currentFields.then((data) => {
        const newField = this.store.createRecord('schemafield', {
          parentModel: model,
          type: 'string'
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

    // Triggered when fields are updated
    updateFields(modelId) {
      var model = this.store.peekRecord('schema', modelId);
      model.save();
    }
  }
});
