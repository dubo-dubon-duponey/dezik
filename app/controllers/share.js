import Ember from 'ember';

export default Ember.Controller.extend({
  _table: '',
  _pending: 0,
  actions:{
    receiveFile: function(file){

      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      // reader.readAsBinaryString(file);
      reader.onload = function(e){
        // Prevent dataTables from redrawing anything
        this.get('_table').set('flushable', false);
        // Increment our counter since we have a new record with no id
        this.incrementProperty('_pending');

        // Create a record
        var asset = this.store.createRecord('spacedogShare', {
          id: '',
          lastModified:  file.lastModified,
          filename: file.name,
          size: file.size,
          contentType: file.type,
          file: new Int8Array(e.target.result)
        });

        // Post
        asset.save();

        // Watch for the save to complete and the id to be there before notifying dataTables of its existence
        var dt = function(){
          // id are immutable (save first set), so technically this is not necessary
          asset.removeObserver('id', dt);
          // Decrement the counter - we are done with this one
          this.decrementProperty('_pending');
          this.get('_table').insertRow(asset);
          // If that was the last one, unlock dataTable
          if(!this.get('_pending'))
            this.get('_table').set('flushable', true);
        }.bind(this);
        asset.addObserver('id', dt);

      }.bind(this);
    }
  }
});
