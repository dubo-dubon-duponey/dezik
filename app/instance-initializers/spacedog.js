import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Transform from 'ember-data/transform';
import { belongsTo, hasMany } from 'ember-data/relationships';

var registerModel = function(application, schema, additions){
  var cfg = {};
  schema.get('fields').forEach(function(item){
    // Declare a field from the schemafield name, of type prefixed by spacedog_, passing the serialized field as an option to transforms
    var type = item.get('type');
    switch(type){
      case 'hasMany':
        cfg[item.get('name')] = hasMany(item.get('relatedTo'));
        break;
      case 'belongsTo':
        cfg[item.get('name')] = belongsTo(item.get('relatedTo'));
        break;
      default:
        cfg[item.get('name')] = attr('tsygan-' + type, item.serialize().data.attributes);
        break;
    }
  });

  // A dirty trick to allow decoy types
  (additions || []).forEach(function(item){
    cfg[item.name] = attr('tsygan-' + item.type, {});
  });

  var modelName = schema.get('id').capitalize();
  application.register('model:' + modelName, Model.extend(cfg));
};

var baseTranform = Transform.extend(SpaceDog.transforms.tsygan);

export function initialize(application) {
  // Register all tsygan transforms
  Object.keys(SpaceDog.transforms).forEach(function(name){
    if(name == 'tsygan')
      return;
    application.register('transform:tsygan-' + name, baseTranform.extend(SpaceDog.transforms[name]))
  });

  // application.inject('route', 'foo', 'service:foo');
  // Generate the model for shares

  var store = application.lookup('service:store');
  window.dezik = application;

  var share = store.createRecord('SpacedogSchema', {
    id: 'SpacedogShare',
    fields: []
  });

  share.get('fields').pushObjects([
    store.createRecord('SpacedogSchemafield', {
      name: 'contentType',
      type: 'string',
      required: true,
      defaultValue: 'application/octet-stream',
      parentModel: share
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'path',
      type: 'identifier',
      parentModel: share
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'size',
      type: 'integer',
      required: true,
      parentModel: share
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'lastModified',
      type: 'date',
      defaultValue: new Date(),
      parentModel: share
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'filename',
      type: 'identifier',
      required: true,
      parentModel: share
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'etag',
      type: 'identifier',
      parentModel: share
    })/*,

    store.createRecord('SpacedogSchemafield', {
      name: 'file',
      type: 'binary',
      parentModel: share
    })*/
  ]);

  var shareFile = [{
    name: 'file',
    type: 'binary',
    parentModel: share
  }];

  var logCredential = store.createRecord('SpacedogSchema', {
    id: 'SpacedogLogCredential',
    fields: []
  });

  logCredential.get('fields').pushObjects([
    store.createRecord('SpacedogSchemafield', {
      name: 'type',
      type: 'enum',
      required: true,
      defaultValue: 'USER',
      enumSet: ['KEY', 'USER', 'OPERATOR', 'ADMIN', 'SUPER_ADMIN', 'SUPERDOG'],
      parentModel: logCredential
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'name',
      type: 'string',
      required: true,
      language: 'English',
      parentModel: logCredential
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'backendId',
      type: 'identifier',
      required: true,
      parentModel: logCredential
    })
  ]);

  var logSchema = store.createRecord('SpacedogSchema', {
    id: 'SpacedogLog',
    fields: []
  });

  logSchema.get('fields').pushObjects([
    store.createRecord('SpacedogSchemafield', {
      name: 'method',
      type: 'enum',
      required: true,
      defaultValue: 'GET',
      enumSet: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS', 'HEAD'],
      parentModel: logSchema
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'path',
      type: 'string',
      required: true,
      language: 'English',
      parentModel: logSchema
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'receivedAt',
      type: 'date',
      required: true,
      parentModel: logSchema
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'processedIn',
      type: 'integer',
      required: true,
      defaultValue: 0,
      parentModel: logSchema
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'status',
      type: 'integer',
      required: true,
      defaultValue: 200,
      parentModel: logSchema
    }),


    store.createRecord('SpacedogSchemafield', {
      name: 'response',
      type: 'json',
      parentModel: logSchema
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'jsonContent',
      type: 'json',
      parentModel: logSchema
    }),

    store.createRecord('SpacedogSchemafield', {
      name: 'credentials',
      type: 'belongsTo',
      relatedTo: 'SpacedogLogCredential',
      parentModel: logSchema
    })
  ]);

  registerModel(application, logCredential);
  registerModel(application, logSchema);
  registerModel(application, share, shareFile);
};

export default {
  name: 'spacedog',
  initialize
};
