import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

var x = 0;

var popover = function ( data, type, full, meta ) {
  if(!data)
    return '';
  // XXX Pretty terrible
  setTimeout(function(idx){
    $(idx).popover({
      animation: true,
      title: "Body",
      html: true,
      content: JSON.htmlPrint(data, 2),
      placement: "left",
      template: '<div class="popover" style="max-width: 800px" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div><pre class="popover-content"></pre></div></div>',
      trigger: "focus"
    });
  }, 100, '#popover-response-' + x);
  var node = '<a id="popover-response-' + x + '" tabindex="0" class="btn btn-xs btn-info" role="button">Show</a>';
  x++;
  return node;
};

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table','table-striped','table-bordered','dataTable'],
  error: '',
  initDataTable: function() {
    $.fn.dataTable.ext.errMode = 'none';
    this.$().dataTable({
      ordering: true,
      info: true,
      processing: true,
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
    });
  }.on('didInsertElement')
});
