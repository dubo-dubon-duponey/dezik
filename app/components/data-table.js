/* global $:false, UAParser:false, moment:false */
import Ember from 'ember';

var x = 0;

var popover = function ( data, text, title ) {
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
  var node = '<a id="popover-response-' + x + '" tabindex="0" class="btn btn-xs btn-info" role="button">' + text + '</a>';
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
      oLanguage: {
        sSearch: "Show status equal or above:"
      },
      ordering: false,
      info: true,
      processing: true,
      autoWidth: false,
      serverSide: true,
      search: {regex: true},
      columns: [
        { name: "Method", data: "method" },
        { name: "Path", data: "path" },
        // XXX SpaceDog not usable right now https://github.com/spacedog-io/services/issues/46
        { name: "Query", data: "query", render: function(data){
          return '';
          if(!data)
            return '';
          return '<pre>' + Object.keys(data).map(function(key){
              return key + '=' + data[key];
            }).join('\n') + '</pre>';
        }},
        { name: "User-agent", data: "headers.User-agent", render: function(data){
          if(!data)
            return;
          var parser = new UAParser();
          parser.setUA(data);
          var result = parser.getResult();
          if(!result.browser.name)
            return result.ua;
          delete result.ua;
          return popover(result, result.browser.name + ' ' + result.browser.major, data);
        }},
        { name: "Headers", data: "headers", render: function(data){
          if(!data)
            return;
          var result = {};
          Object.keys(data).forEach(function(key){
            if(key != 'User-agent')
              result[key] = data[key];
          });
          return popover(result, 'Show');
        }},
        { name: "Received at", data: "receivedAt", type: "date", render: function(data){
          // XXX FIXME ordering won't work on this obviously
          return '<span title="' + moment(data).format('MMMM Do YYYY, h:mm:ss a') + '">' + moment(data).fromNow() + '</span>';
        } },

        { name: "Processing time", data: "processedIn", type: "num" },
        { name: "Status", data: "status", type: "num" },
        { name: "Request body", data: "jsonContent", render: function(data){
          return popover(data, 'Show');
        } },
        { name: "Response", data: "response", render: function(data){
          return popover(data, 'Show');
        } },
        { name: "Name", data: "credentials.name"},
        { name: "Type", data: "credentials.type"}
      ],
      ajax: function (options, callback/*, settings*/) {
        this.sendAction('query', options, function(data, errorTitle, errorMessage) {
          if(errorTitle)
            this.set('error', errorTitle, errorMessage);
          callback({
            recordsTotal: data ? data.get('meta.total') : 0,
            draw: options.draw,
            // error: error,
            recordsFiltered: data ? data.get('meta.total') : 0,
            data: data ? data.getEach('data') : []
          });
        }.bind(this));
      }.bind(this)
    });
  }.on('didInsertElement')
});
