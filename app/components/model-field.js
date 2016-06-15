import Ember from 'ember';

const { Component, observer } = Ember;

var interval;

var setInter = function(cbk){
  // If there was something already, cancel and reset
  if (interval)
    clearTimeout(interval);
  interval = setTimeout(cbk, 1000);
};


export default Component.extend({
  typeOptions: SpaceDogEngine.transforms.type.dump(),
  languageOptions: SpaceDogEngine.languageOptions,
  field: null,
  changeObserver: observer('field.name', 'field.type', 'field.array', 'field.language', 'field.required', 'field.defaultValue', 'field.enumSet', 'field.relatedTo', function () {
    // Schedule an update dispatch
    setInter(function(){
      this.sendAction('update', this.get('field.parentModel.id'));
    }.bind(this));
  }),

  actions: {
    removeField(field) {
      const parentModel = field.get('parentModel');
      const removedId   = field.get('id');
      const fields      = parentModel.get('fields');

      field.destroyRecord();

      // have to iterate through the fields to delete the correct field from the hasMany relationship
      fields.forEach(function (field) {
        if (!field || field.get('id') === removedId) {
          fields.removeObject(field);
        }
      });

      this.sendAction('update', parentModel.get('id'));
    }
  }
});
