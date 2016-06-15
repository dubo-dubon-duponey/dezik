/* globals console:false, Ember:false */
'use strict';

import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

import JSONAPISerializer from 'ember-data/serializers/json-api';

var Serializer = JSONAPISerializer.extend(EmbeddedRecordsMixin, {
  primaryKey: 'id',

  keyForAttribute: function (attr) {
    return Ember.String.underscore(attr);
  },

  keyForRelationship: function(key/*, relationship, method*/) {
    return Ember.String.underscore(key);
  },

  modelNameFromPayloadKey: function(key){
    return key;
  },

  payloadKeyFromModelName: function(key){
    return key;
  },

  // Embed fields into the record
  attrs: {
    fields: { embedded: 'always' }/*,
     _acl: { embedded: 'always' },
     _triggers: { embedded: 'always' }*/
  },

  serialize: function(snapshot, options) {
    var json = this._super(...arguments);
    console.warn('com.spacedog.tsygan::schema->serialize JSON', json);

    var output = {};
    // Schema root
    output[json.data.id] = {
      _id: 'id',
      _type: 'object'
    };

    // Re-inject every individual field at the root
    json.data.fields.forEach(function(item){
      var key = Object.keys(item).pop();
      output[json.data.id][key] = item[key];
    });

    // Spoof in the id field unless it's declared
    if(!('id' in output[json.data.id]))
      output[json.data.id].id = {
        _type: 'string',
        _required: true,
        _array: false
      };

    console.warn('                             ... to SpaceDog', output);
    return output;
/*
    if(!('type' in output[json.data.id]))
      output[json.data.id].type = {
        _type: 'string',
        _required: false
        // _array: false
      };*/

  },

  /*normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    console.warn('com.spacedog.tsygan::schema->normalize JSON', JSON.stringify(payload, null, 2));
    return this._super(...arguments);
  },*/

  // As-is from SpaceDog adapter
  normalizeUpdateRecordResponse: function (store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::schema->normalizeUpdateRecordResponse', payload);

    payload = {meta: payload};
    payload.data = {
      id: payload.meta.id,
      type: payload.meta.type
    };
    delete payload.meta.id;
    delete payload.meta.type;
    console.warn('... actual payload', payload);
    return this._super(store, primaryModelClass, payload, id, requestType);
  },


  normalizeCreateRecordResponse: function (store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::schema->normalizeCreateRecordResponse', payload);
    return this.normalizeUpdateRecordResponse(...arguments);
  },

  // As-is from SpaceDog adapter
  normalizeDeleteRecordResponse: function (store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::schema->normalizeDeleteRecordResponse', payload);
    payload.data = {
      id: id,
      type: primaryModelClass.toString().match(/([^:]+):$/).pop()
    };
    return this._super(...arguments);
  },

  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::schema->normalizeArrayResponse', payload);
    // XXX this has to happen when an empty payload gets back (we spoof in an empty data), so get rid of it
    delete payload.data;

    var output = {
      data: [],
      meta: {}
    };

    var attrs = [];
    // Included records for the fields out of band
    output.included = attrs;

    // For each schema
    Object.keys(payload).forEach(function(schemaId, index) {
      // We will have relations to fields
      var ids = [];
      // And embedded fields as well
      output.data[index] = {
        // Ember id of the schema is the key/name
        id: schemaId,
        // Type is actually schema, but then
        type: primaryModelClass.toString().match(/([^:]+):$/).pop(),
        // Add the relationships ids to be linked
        relationships: {
          fields: {
            data: ids
          }
        }
      };

      // Remove useless/spurious attributes
      // Ignore these two entirely from SpaceDog
      delete payload[schemaId]._id;
      delete payload[schemaId]._type;
      // This is our own internal ids, that are fine, thank you
      delete payload[schemaId].id;
      // XXX no need for now
      // delete payload[schemaId].type;
      // Now, the remainder is actual fields


      Object.keys(payload[schemaId]).forEach(function(attrName){
        var foo = {};
        // So, this is the "short version"
        foo[attrName] = payload[schemaId][attrName];
        ids.push(foo);

        // This is the "long version" to be looked up by find record
        foo = {};
        foo[attrName] = payload[schemaId][attrName];
        foo.id = payload[schemaId][attrName]._extra['com.spacedog.tsygan::id'];
        foo.type = 'schemafield';

        attrs.push(foo);
      });
    });

    console.warn('... JSON', output);
    return this._super(store, primaryModelClass, output, id, requestType);
  }

});

export default Serializer;
