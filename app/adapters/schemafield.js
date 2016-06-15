import DS from 'ember-data';

export default DS.Adapter.extend({

  deleteRecord: function(){
    console.warn('com.spacedog.tsygan::schemaField->deleteRecord');
    return new Ember.RSVP.Promise(function (resolve/*, reject*/) {
      Ember.run(null, resolve, {data: {}});
    });
  }
});


