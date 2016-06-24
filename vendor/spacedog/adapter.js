(function(){
  'use strict';

  var adapter = function(){
    this.createRecord = function(type, data) {
      console.warn('com.spacedog.tsygan::application->createRecord', type, snapshot);
      var endpoint = this.resolveEndpoint(snapshot);
      // Always embed ids into records, since we make them mandatory on spacedog side
      var data = this.serialize(snapshot, { includeId: true });
      return carry(this.get('base') + endpoint, '', 'POST', data);
    };

    // delete is fairly straight-forward
    this.deleteRecord = function(store, type, snapshot){
      console.warn('com.spacedog.tsygan::application->deleteRecord', type, snapshot);
      var endpoint = this.resolveEndpoint(snapshot);
      return carry(this.get('base') + endpoint, snapshot.id, 'DELETE');
    };

    this.updateRecord = function(store, type, snapshot){
      console.warn('com.spacedog.tsygan::application->updateRecord', type, snapshot);
      var endpoint = this.resolveEndpoint(snapshot);
      var data = this.serialize(snapshot, { includeId: true });
      return carry(this.get('base') + endpoint, snapshot.id, 'PUT', data);
    };

    // Records that don't explicit an id at creation time will get such a UUID
    /*this.generateIdForRecord = function(store, inputProperties) {
      console.warn('com.spacedog.tsygan::application->generateIdForRecord', inputProperties);
      return SpaceDogEngine.uuid();
    };*/

    this.findAll = function(store, type, sinceToken) {
      console.warn('com.spacedog.tsygan::application->findAll', type, sinceToken);
      // XXX endpoint resolution slightly differs here
      var endpoint = type.toString().match(/([^:]+):$/).pop();
      return carry(this.get('base') + endpoint, '?size=10000' + (sinceToken ? '&since=' + sinceToken : ''));
    };

  };

// This is the actual adapter

    // Required by hack in schema on empty schema list return (see listAll on schemaAdapter)
    engine: engine,

    // Default endpoints
    base: 'data/',
    search: 'search/',

    // By default, conflate the model name to the endpoint
    resolveEndpoint: function(snapshot){
      return snapshot.modelName.match(/([a-z0-9]+)$/).pop();
    },


    /* // Optional
     findMany: function(){
     console.warn('FIND MANY', arguments);
     },*/

    /*findRecord: function(){
     console.warn('FIND RECORD XXXX', arguments);
     },*/

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


  }).apply(this.SpaceDog || (this.SpaceDog = {}));

