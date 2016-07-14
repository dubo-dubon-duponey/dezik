/* global Int8Array:false */
import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    deleteRow: function(file){
      // Kill the record
      file.destroyRecord();
    },

    receiveFile: function(file){
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      // reader.readAsBinaryString(file);
      reader.onload = function(e){
        // Create a record
        var asset = this.store.createRecord('tsygan@spacedog-share', {
          id: '',
          lastModified:  file.lastModified,
          filename: file.name,
          size: file.size,
          contentType: file.type,
          file: new Int8Array(e.target.result)
        });

        // Post
        asset.save();
      }.bind(this);
    }
  }
});
