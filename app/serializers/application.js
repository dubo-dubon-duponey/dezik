import SpaceDogSerializer from './spacedog';

// This is the data specialized adapter derived from base Space
var ApplicationSerializer = SpaceDogSerializer.extend({

  serialize: function(snapshot, options) {
    console.warn('com.spacedog.tsygan::application->serialize', snapshot, options);
    var json = this._super(...arguments);

    var output = {};
    output = json.data;
    Object.keys(json.data.attributes).forEach(function(key){
      output[key] = json.data.attributes[key];
    });
    delete output.attributes;
    return output;
  },

  normalizeArrayResponse: function(store, primaryModelClass, payload, id, requestType){
    console.warn('com.spacedog.tsygan::application->normalizeArrayResponse', payload, id);
    // /1/data/dog paginated results go here, and so does /1/search/
    payload.data = payload.results;
    payload.data.forEach(function(item, key){
      // XXX shouldn't this be delegated to the per-record normalizer?
      payload.data[key] = {
        id: item.id,
        type: primaryModelClass.toString().match(/([^:]+):$/).pop(),
        attributes: item,
        meta: item.meta
      };
      delete item.id;
      delete item.meta;
    });
    payload.meta = {
      took: payload.took,
      total: payload.total
    };
    delete payload.took;
    delete payload.total;
    delete payload.results;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});

export default ApplicationSerializer;
