import Ember from 'ember';

const { Component, observer } = Ember;

import Constants from 'tsygan/constants';
const { languages } = Constants;

export default Component.extend({
  languageOptions: Object.keys(languages).map(function(key){
    return key;
  }),
  modelList: null,
  field: null,
  changeObserver: observer(
    'field.name', 'field.type', 'field.array',
    'field.required', 'field.defaultValue',
    'field.enumSet',
    'field.relatedTo',
    'field.language',
    'field.lt', 'field.lte', 'field.gt', 'field.gte', 'field.step',
    'field.examples',
    function () {
      this.sendAction('update', this.get('field.parentModel.id'));
    }),

  actions: {
    removeField(field) {
      const parentModel = field.get('parentModel');
      const removedId   = field.get('id');
      const fields      = parentModel.get('fields');

      field.destroyRecord();

      // have to iterate through the fields to delete the correct field from the hasMany relationship
      fields.forEach(function(item) {
        if (!item || item.get('id') === removedId) {
          fields.removeObject(item);
        }
      });

      this.sendAction('update', parentModel.get('id'));
    }
  }
});
