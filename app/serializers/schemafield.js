import JSONAPISerializer from 'ember-data/serializers/json-api';

// A specialized serializer for schema fields - does NOT inherit SpaceDog serializer (too messy)
var Serializer = JSONAPISerializer.extend({
  primaryKey: 'id',

  keyForAttribute: function (attr) {
    return Ember.String.underscore(attr);
  },

  keyForRelationship: function(key, relationship, method) {
    return Ember.String.underscore(key);
  },

  modelNameFromPayloadKey: function(key){
    return key;
  },

  payloadKeyFromModelName: function(key){
    return key;
  },

  serialize: function() {
    var json = this._super(...arguments);
    console.warn('com.spacedog.tsygan::schemaField->serialize JSON', json);
    var output = {};
    output[json.data.attributes.name] = {
      _type: json.data.attributes.type,
      _required: json.data.attributes.required,
      _extra: {
        'com.spacedog.tsygan::id': json.data.id,
        'com.spacedog.tsygan::parent': json.data.relationships.parent_model.data.id,
        'com.spacedog.tsygan::default': json.data.attributes.default_value
      }
    };
    // XXX SpaceDog is very picky on arguments that can be there and when
    if (['stash'].indexOf(json.data.attributes.type) === -1)
      output[json.data.attributes.name]._array = json.data.attributes.array;

    if (['text'].indexOf(json.data.attributes.type) !== -1)
      output[json.data.attributes.name]._language = json.data.attributes.language;

    console.warn('                                 ... to SpaceDog', output);
    return output;
  },

  /*normalizeResponse: function(store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::schemaField->normalizeResponse', payload);
    var json = this._super(...arguments);
    return json;
  },*/

  normalize: function(modelClass, resourceHash) {
    console.warn('com.spacedog.tsygan::schemaField->normalize', resourceHash);
    var fieldName = Object.keys(resourceHash).shift();
    var hash = resourceHash[fieldName];
    var json = {
      id: hash._extra['com.spacedog.tsygan::id'],
      type: 'schemafield',
      attributes: {
        name: fieldName,
        type: hash._type,
        required: hash._required,
        language: hash._language,
        array: hash._array,
        default_value: hash._extra['com.spacedog.tsygan::default']
      },
      relationships: {
        parent_model: {
          data: {
            type: 'schema',
            id: hash._extra['com.spacedog.tsygan::parent']
          }
        }
      }
    };
    console.warn('...  JSON', json);
    return this._super(modelClass, json);
  }

  /*
  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::schemaField->normalizeArrayResponse', payload);
    var ret = this._super(...arguments);
    return ret;
  }
  */

});

export default Serializer;
