import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;
const { Model, belongsTo, attr } = DS;

export default Model.extend({
  // Name of the field
  name:             attr('string'),// , {defaultValue: 'My New Field'}
  // Type of the field (see transforms for full list)
  type:             attr('type', {defaultValue: 'string'}),
  // Links back to the parent model this schema belong to
  parentModel:      belongsTo('schema'),
  // Whether the field should be required - if it is, a defaultValue can be specified
  required:         attr('boolean', {defaultValue: false}),
  // Default value, in case the field is required
  defaultValue:     attr('string', {defaultValue: undefined}),
  // Whether the field is an array of things
  array:            attr('boolean', {defaultValue: false}),
  // In case the field type is a string, what language is that (see transforms)
  language:         attr('language', {defaultValue: 'English'}),
  // jsonPropertyName: attr('string'),

  // XXX relate to references
  relatedTo:        attr('string', {defaultValue: null}),
  hasRelation:      computed('type', function () {
    const currentType = this.get('type');
    return (currentType === 'hasMany' || currentType === 'belongsTo');
  }),

  // Computed properties to help templates decide what to display
  hasArray:         computed('type', function(){
    const currentType = this.get('type');
    return (currentType !== 'json');
  }),
  hasLanguage:         computed('type', function(){
    const currentType = this.get('type');
    return (currentType === 'string');
  })

  /*, XXX non functional shit
  defaultJSON:        computed('defaultValue', {
    get(key) {
      return JSON.stringify(this.get('defaultValue'));
    },
    set(key, value) {
      try{
        value = JSON.parse(value.toString());
      }catch(e){
        console.warn('Fail to parse', value, '. Will use it as a string');
      }
      console.warn('Setting to', value);
      return this.set('defaultValue', value);
    }
  })*/
});
