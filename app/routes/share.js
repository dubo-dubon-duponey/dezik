import Ember from 'ember';
import attr from 'ember-data/attr';
import Model from 'ember-data/model';

export default Ember.Route.extend({

  model: function() {
    return this.get('store').findAll('SpacedogShare');
  }

});
