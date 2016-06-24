import Ember from 'ember';
const { computed } = Ember;
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

    if (this.store.peekRecord('schema', 'spacedogLog'))
      return;

    var logCredential = this.store.createRecord('schema', {
      id: 'spacedogLogCredential',
      fields: []
    });

    logCredential.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'type',
      type: 'enum',
      required: true,
      defaultValue: 'USER',
      enumSet: ['KEY', 'USER', 'OPERATOR', 'ADMIN', 'SUPER_ADMIN', 'SUPERDOG'],
      parentModel: logCredential
    }));

    logCredential.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'name',
      type: 'string',
      required: true,
      language: 'English',
      parentModel: logCredential
    }));

    logCredential.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'backendId',
      type: 'identifier',
      required: true,
      parentModel: logCredential
    }));

    var logSchema = this.store.createRecord('schema', {
      id: 'spacedogLog',
      fields: []
    });

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'method',
      type: 'enum',
      required: true,
      defaultValue: 'GET',
      enumSet: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      parentModel: logSchema
    }));

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'path',
      type: 'string',
      required: true,
      language: 'English',
      parentModel: logSchema
    }));

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'receivedAt',
      type: 'date',
      required: true,
      parentModel: logSchema
    }));

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'processedIn',
      type: 'integer',
      required: true,
      defaultValue: 0,
      parentModel: logSchema
    }));

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'status',
      type: 'integer',
      required: true,
      defaultValue: 200,
      parentModel: logSchema
    }));


    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'response',
      type: 'json',
      parentModel: logSchema
    }));

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'jsonContent',
      type: 'json',
      parentModel: logSchema
    }));

    logSchema.get('fields').pushObject(this.store.createRecord('schemafield', {
      name: 'credentials',
      type: 'belongsTo',
      relatedTo: 'spacedogLogCredential',
      parentModel: logSchema
    }));

    registerModel(Ember.getOwner(this), logCredential);
    registerModel(Ember.getOwner(this), logSchema);

    // return this.store.query('SpacedogLog', { from: 1000, size: 10 })
  }

});

/*
logType –– Optional. Valid values are [KEY, USER, OPERATOR, ADMIN, SUPER_ADMIN, SUPERDOG]. Returns logs with the specified credentials level or lower.
  minStatus –– Returns logs with the specified http response status code or higher.
  from –– Defaults to 0. The index of the first log to return from the latest to the oldest.
  size –– Defaults to 10. Number to logs to return. Maximum is 1000.
*/

/*
{"method": "PUT",
  "path": "/1/schema/cat",
  "receivedAt": "2016-06-22T05:19:39.755Z",
  "processedIn": 18,
  "credentials": {
  "backendId": "dezik",
    "type": "SUPER_ADMIN",
    "name": "dmp"
},
"jsonContent": {
  "cat": {
    "_id": "id",
      "_type": "object",
      "foo": {
      "_type": "text",
        "_required": false,
        "_extra": {
        "com.spacedog.tsygan::id": "e0866a15-126a-4841-98a8-6d38f560b56a",
          "com.spacedog.tsygan::parent": "cat",
          "com.spacedog.tsygan::default": null,
          "com.spacedog.tsygan::related": null
      },
      "_array": false,
        "_language": "english"
    },
    "id": {
      "_type": "string",
        "_required": true,
        "_array": false
    }
  }
},
"status": 200,
  "response": {
  "success": true,
    "status": 200,
    "id": "cat",
    "type": "schema",
    "location": "https://dezik.spacedog.io/1/schema/cat"
}
*/
