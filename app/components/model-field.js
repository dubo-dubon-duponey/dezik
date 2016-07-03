import Ember from 'ember';

const { Component, observer } = Ember;

import Constants from 'tsygan/constants';
const { types, languages } = Constants;

export default Component.extend({
  typeOptions: Object.keys(types).map(function(key){
    return key;
  }),
  languageOptions: Object.keys(languages).map(function(key){
    return key;
  }),
  modelList: null,
  field: null,
  changeObserver: observer('field.name', 'field.type', 'field.array', 'field.language', 'field.required', 'field.defaultValue', 'field.enumSet', 'field.relatedTo', function () {
    this.sendAction('update', this.get('field.parentModel.id'));
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
