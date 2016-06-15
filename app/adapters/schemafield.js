import DS from 'ember-data';

export default DS.Adapter.extend({

  generateIdForRecord: function(store, inputProperties) {
    console.warn('com.spacedog.tsygan::schemaField->generateIdForRecord', inputProperties);
    return SpaceDogEngine.uuid();
  },

  deleteRecord: function(){
    console.warn('com.spacedog.tsygan::schemaField->deleteRecord');
    return new Ember.RSVP.Promise(function (resolve/*, reject*/) {
      return Ember.run(null, resolve, {status: 200});
    });
  }
});


