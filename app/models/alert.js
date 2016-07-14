// v1
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  type: attr('string', {defaultValue: 'danger'}),
  title: attr('string'),
  message: attr('string'),
  destructIn: attr('number', {defaultValue: 5})
});
