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
      console.warn('newField------>');
      window.BLA = this.store;
      const currentFields = model.get('fields');

      currentFields.then((data) => {
        const newField = this.store.createRecord('schemafield', {
//          id: '',
          parentModel: model,
          type: 'string'
        });

        data.addObject(newField);
        // model.save();
      });
    },

    // Remove a model
    removeModel(model) {
      console.warn('removeModel------>');
      const fields = model.get('fields');

      // iterate through fields and delete those records
      fields.forEach((field) => {
        if (field) {
          field.destroyRecord();
        }
      });

      model.destroyRecord();

      // trigger an update of the json,etc.
      // this does a mock ajax call or something, so it needs a timeout to work correctly
      Ember.run.later(() => {
        // getModelInfo(this);
      }, 100);
    },

    // Triggered when fields are updated
    updateFields(modelId) {
      var model = this.store.peekRecord('schema', modelId);
      Ember.run.once(this, function(){
        model.save();
      });
    }
  }
});
