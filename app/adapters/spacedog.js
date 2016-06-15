import DS from 'ember-data';
import config from '../config/environment';

// Stop here if not configured
if(!config.APP.SPACEDOG_DOMAIN)
  throw new Error('CONFIG_ERROR', 'A SpaceDog domain is mandatory!');

// Instanciate the engine
var engine = new SpaceDogEngine(config.APP.SPACEDOG_DOMAIN, config.APP.SPACEDOG_USER, config.APP.SPACEDOG_PWD);

// Simple helper to carry a request using the SpaceDogEngine
var carry = function(endpoint, id, method, data) {
  return new Ember.RSVP.Promise(function (resolve, reject) {
    engine.phone(function (status, data/*, headers*/) {
      Ember.run(null, resolve, data);
    }, function (status, data, headers, x) {
      Ember.run(null, reject, x);
    }, endpoint, id || '', method || 'GET', data || '');
  });
};

// This is the actual adapter
var SpaceDogAdapter = DS.Adapter.extend({

  // Required by hack in schema on empty schema list return (see listAll on schemaAdapter)
  engine: engine,

  // Default endpoints
  base: 'data/',
  search: 'search/',

  // By default, conflate the model name to the endpoint
  resolveEndpoint: function(snapshot){
    return snapshot.modelName.match(/([a-z0-9]+)$/).pop();
  },

  // By default, record creation (overrided by schema, since schema doesn't support creation
  createRecord: function(store, type, snapshot) {
    console.warn('com.spacedog.tsygan::application->createRecord', type, snapshot);
    var endpoint = this.resolveEndpoint(snapshot);
    // Always embed ids into records, since we make them mandatory on spacedog side
    var data = this.serialize(snapshot, { includeId: true });
    return carry(this.get('base') + endpoint, '', 'POST', data);
  },

  // delete is fairly straight-forward
  deleteRecord: function(store, type, snapshot){
    console.warn('com.spacedog.tsygan::application->deleteRecord', type, snapshot);
    var endpoint = this.resolveEndpoint(snapshot);
    return carry(this.get('base') + endpoint, snapshot.id, 'DELETE');
  },

  // findAll is data specific, overriden by schema
  findAll: function(store, type, sinceToken) {
    console.warn('com.spacedog.tsygan::application->findAll', type, sinceToken);
    // XXX endpoint resolution slightly differs here
    var endpoint = type.toString().match(/([^:]+):$/).pop();
    return carry(this.get('base') + endpoint, '?size=10000' + (sinceToken ? '&since=' + sinceToken : ''));
  },

  /* // Optional
   findMany: function(){
   console.warn('FIND MANY', arguments);
   },*/

  /*findRecord: function(){
    console.warn('FIND RECORD XXXX', arguments);
  },*/

  // Records that don't explicit an id at creation time will get such a UUID
  generateIdForRecord: function(store, inputProperties) {
    console.warn('com.spacedog.tsygan::application->generateIdForRecord', inputProperties);
    return SpaceDogEngine.uuid();
  },

  /* // Optional
   groupRecordsForFindMany: function(){
   console.warn('groupRecordsForFindMany', arguments);
   },
   */

  query: function(store, type, query/*, recordArray*/){
    console.warn('com.spacedog.tsygan::application->query', type, query);
    var endpoint = type.toString().match(/([^:]+):$/).pop();

    var cond = [];
    Object.keys(query.filter).forEach(function(key){
      var match = {};
      match[key] = query.filter[key];
      cond.push({"match": match});
    });
    var data = {
      "query": {
        "bool": {
          "must": cond
        }
      }
    };
    return carry(this.get('search') + endpoint, '', 'POST', data);
  },

  /* // Optional
   queryRecord: function(){
   console.warn('queryRecord', arguments);
   },


   serialize: function(){
   console.warn('serialize', arguments);
   },
   */

  // Fairly straight-forward updateRecord
  updateRecord: function(store, type, snapshot){
    console.warn('com.spacedog.tsygan::application->updateRecord', type, snapshot);
    var endpoint = this.resolveEndpoint(snapshot);
    var data = this.serialize(snapshot, { includeId: true });
    return carry(this.get('base') + endpoint, snapshot.id, 'PUT', data);
  }
});

export default SpaceDogAdapter;


/*
 * createRecord
 * deleteRecord
 * findAll
 o findMany
 * findRecord
 * generateIdForRecord
 o groupRecordsForFindMany
 * query
 o queryRecord
 o serialize
 i shouldBackgroundReloadAll
 i shouldBackgroundReloadRecord
 i shouldReloadAll
 i shouldReloadRecord
 * updateRecord
 */
