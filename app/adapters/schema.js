import SpaceDogAdapter from './spacedog'

export default SpaceDogAdapter.extend({
  // Override base to null - that way the endpoint resolution still returns the model type (eg: `schema`)
  base: '',

  // XXX there is no create endpoint for schemas, only update
  createRecord: function(store, type, snapshot) {
    console.warn('com.spacedog.tsygan::schema->createRecord', type, snapshot);
    return this.updateRecord(...arguments);
  },

  // Need to delete before update, because of XXX https://github.com/spacedog-io/services/issues/32
  // Some update operations may be permitted, some other won't
  updateRecord: function(store, type, snapshot) {
    console.warn('com.spacedog.tsygan::schema->updateRecord', type, snapshot);
    var deref = this._super.bind(this);
    var doIt = function(){
      return deref(store, type, snapshot);
    };
    return this.deleteRecord(...arguments).then(doIt, doIt);
  },

  // Find deviates since it's not on the search endpoint
  findAll: function(store, type, sinceToken) {
    console.warn('com.spacedog.tsygan::schema->findAll', type, sinceToken);
    var endpoint = type.toString().match(/([^:]+):$/).pop();

    endpoint = this.get('base') + endpoint;
    var id = '?size=10000' + (sinceToken ? '&since=' + sinceToken : '');

    return new Ember.RSVP.Promise(function (resolve, reject) {
      this.engine.phone(function (status, data/*, headers*/) {
        // XXX Unfortunately, have to do this because of https://github.com/spacedog-io/services/issues/30
        // Empty payload will get caught by EmberData as an assert error
        if (Object.keys(data).length === 0)
          data = {data: {}};
        Ember.run(null, resolve, data);
      }, function (status, data, headers, x) {
        Ember.run(null, reject, x);
      }, endpoint, id, 'GET', '');
    }.bind(this));
  }

});
