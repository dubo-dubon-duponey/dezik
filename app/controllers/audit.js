import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    // Allow a dataTable to ask for a query on the dataStore
    query: function(options, callback){
      this.store.query('SpacedogLog', {
        from: options.start,
        size: options.length || 10,
        minStatus: parseInt(options.search.value, 10) || 100
      }).then(function(data){
        callback(data);
      }, function(/*jqXHR, textStatus, errorThrown*/){
        callback(undefined, 'Oups! Something went wrong. Sorry about that.');
      });
    }
  }
});
