import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  tagName: 'table',
  classNames: ['table','table-striped','table-bordered','dataTable'],
  _tabler: '',
  
  initUplink: function() {
    this.set('_hook', this);
  }.on('willInsertElement'),

  initDataTable: function() {
    $.fn.dataTable.ext.errMode = 'none';
    this.set('_tabler', this.$().dataTable({
      ordering: true,
      info: true,
      autoWidth: true,
      search: {regex: true}/*,
      columns: [
        { name: "Method", data: "method" },
        { name: "Path", data: "path" },
        { name: "Received at", data: "receivedAt", type: "date", render: function(data){
          return '<span title="' + moment(data).format('MMMM Do YYYY, h:mm:ss a') + '">' + moment(data).fromNow() + '</span>';
        } },

        { name: "Processing time", data: "processedIn", type: "num" },
        { name: "Status", data: "status", type: "num" },
        { name: "Request body", data: "jsonContent", render: popover },
        { name: "Response", data: "response", render: popover},
        { name: "Name", data: "credentials.name"},
        { name: "Type", data: "credentials.type"},
      ]*/
//      data: model
    }));
  }.on('didInsertElement'),

  // XXX HERE BE SO MANY TERRIBLE TERRIBLE THINGS
  // This is wrong on so many levels:
  // - we can't redraw if we have pending operations on the store, since it will trash the DOM
  // - we also have to wait for the DOM to match the store state
  // I hate dataTables
  pending: 0,
  flushable: false,

  insertRow: function(file){
    this.incrementProperty('pending');
    var thisIsSoSoVeryWrongKitty = setInterval(function(){
      var tr = document.getElementById('share-id-' + file.get('id'));
      if(!tr)
        return;
      clearInterval(thisIsSoSoVeryWrongKitty);
      this.decrementProperty('pending');
      this.get('_tabler').api().row.add(tr);
      if(!this.get('pending') && this.get('flushable')){
        this.get('_tabler').api().draw();
      }
    }.bind(this), 100);
  },

  actions: {
    deleteRow: function(file){
      this.get('_tabler').api().row('#share-id-' + file.get('id')).remove().draw();
      // ... and actually delete it
      file.destroyRecord();
    }
  }
});
