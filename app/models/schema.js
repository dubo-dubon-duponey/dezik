import DS from 'ember-data';

const { Model, hasMany } = DS;

// A schema is very simply something that has many fields
// Note that id does not have to be defined (ember-implicit)
export default Model.extend({
  fields: hasMany('schemafield')
});
