import JSONAPISerializer from 'ember-data/serializers/json-api';

// This is the default generic serializer for SpaceDog
var SpaceDogSerializer = JSONAPISerializer.extend({
  // We use id as primary keys
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

  normalizeCreateRecordResponse: function (store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::spacedog->normalizeCreateRecordResponse', payload, id);
    payload = {meta: payload};
    payload.data = {
      id: payload.meta.id,
      type: payload.meta.type
    };
    delete payload.meta.id;
    delete payload.meta.type;

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeUpdateRecordResponse: function (store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::spacedog->normalizeUpdateRecordResponse', payload, id);
    payload = {meta: payload};
    payload.data = {
      id: payload.meta.id,
      type: payload.meta.type
    };
    delete payload.meta.id;
    delete payload.meta.type;
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeDeleteRecordResponse: function (store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::spacedog->normalizeDeleteResponse', payload, id);
    payload.data = {
      id: id,
      type: primaryModelClass.toString().match(/([^:]+):$/).pop()
    };
    return this._super(...arguments);
  },

  /*
   normalizeFindAllResponse: function(store, primaryModelClass, payload, id, requestType){
   },*/

  /*
   normalizeQueryResponse: function(store, primaryModelClass, payload, id, requestType) {

   },*/

  /*
   normalize: function(modelClass, resourceHash) {
   },*/

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::spacedog->normalizeResponse', payload, id);
    delete payload.status;
    delete payload.success;
    return this._super(...arguments);
  }

});

export default SpaceDogSerializer;
