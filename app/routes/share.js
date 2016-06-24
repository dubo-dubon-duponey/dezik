import Ember from 'ember';
import attr from 'ember-data/attr';
import Model from 'ember-data/model';

var registerModel = function(application, schema){
  var cfg = {};
  var modelName = schema.get('id');
  schema.get('fields').forEach(function(item){
    var name = item.get('name');
    var type = item.get('type');
    cfg[name] = attr();/*computed('_' + name, {
     get: function(key){
     var current = this.get('_' + name);
     if(current !== undefined)
     return current;
     // If undefined, one last chance with the defaultValue, otherwise, die hard
     if(item.get('required')){
     if(item.get('defaultValue'))
     return item.get('defaultValue');
     throw new SpaceDog.Error(SpaceDog.Error.NOT_INITIALIZED, 'Property ' + name + ' is required but unset with no default value.');
     }
     },
     set: function(key, value){
     console.warn('ARG', arguments);
     if (value !== undefined)
     return this.set('_' + name, value);
     if(item.get('required')){
     if(item.get('defaultValue'))
     return this.set('_' + name, 'defaultValue');
     throw new SpaceDog.Error(SpaceDog.Error.WRONG_ARGUMENTS, 'Setting ' + name + ' to `undefined` but is required, with no default value.');
     }
     }
     });*/
  });
  // application[modelName.capitalize() + 'Model'] =
  var mod = Model.extend(cfg);
  application.register('model:' + modelName.capitalize(), mod);// application[modelName.capitalize() + 'Model']);
};


export default Ember.Route.extend({

  model: function() {
    // let config = this.container.lookup('config:environment');

    if (this.store.peekRecord('schema', 'spacedogShare'))
      return;

    var share = this.store.createRecord('schema', {
      id: 'spacedogShare',
      fields: []
    });

    share.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'contentType',
      type: 'string',
      defaultValue: 'application/octet-stream',
      parentModel: share
    }));

    share.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'path',
      type: 'string',
      parentModel: share
    }));

    share.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'size',
      type: 'integer',
      parentModel: share
    }));

    share.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'lastModified',
      type: 'date',
      defaultValue: Date.now(),
      parentModel: share
    }));

    share.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'filename',
      type: 'identifier',
      defaultValue: 'woof',
      parentModel: share
    }));

    share.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'etag',
      type: 'identifier',
      parentModel: share
    }));

    registerModel(Ember.getOwner(this), share);
    return this.get('store').findAll('spacedogShare');
  }

});
