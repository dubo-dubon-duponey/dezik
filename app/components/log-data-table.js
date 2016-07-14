/* global $:false, UAParser:false, moment:false */
import CkDataTable from 'closerkit/components/ck-data-table';

var x = 0;
var prefix = 'popover-response-';

// Pretty terrible shit here
var popover = function ( data, text, title ) {
  if (!data)
    return '';
  // XXX Pretty terrible
  setTimeout(function(idx){
    $(idx).popover({
      animation: true,
      title: title,
      html: true,
      content: JSON.htmlPrint(data, 2),
      placement: 'left',
      template: '<div class="popover" style="max-width: 800px" role="tooltip"><div class="arrow">' +
        '</div><h3 class="popover-title"></h3><div><pre class="popover-content"></pre></div></div>',
      trigger: 'focus'
    });
  }, 100, '#' + prefix + x);
  var node = '<a id="' + prefix + x + '" tabindex="0" class="btn btn-xs btn-info" role="button">' +
    text + '</a>';
  x++;
  return node;
};

export default CkDataTable.extend({
  // Free style dataTable options
  dataTableOptions: {
    oLanguage: {
      sSearch: 'Show status equal or above:'
    },
    columns: [
      { name: 'Method', data: 'method' },
      { name: 'Path', data: 'path' },
      // XXX SpaceDog not usable right now https://github.com/spacedog-io/services/issues/46
      { name: 'Query', data: 'query', render: function(/*data*/){
        /*if(!data)
         return '';
         return '<pre>' + Object.keys(data).map(function(key){
         return key + '=' + data[key];
         }).join('\n') + '</pre>';*/
      }},
      { name: 'User-agent', data: 'headers.User-agent', render: function(data){
        if (!data)
          return;
        var parser = new UAParser();
        parser.setUA(data);
        var result = parser.getResult();
        if (!result.browser.name)
          return result.ua;
        delete result.ua;
        return popover(result, result.browser.name + ' ' + result.browser.major, 'User-Agent');
      }},
      { name: 'Headers', data: 'headers', render: function(data){
        if (!data)
          return;
        var result = {};
        Object.keys(data).forEach(function(key){
          if (key !== 'User-agent')
            result[key] = data[key];
        });
        return popover(result, 'Show');
      }},
      { name: 'Received at', data: 'receivedAt', type: 'date', render: function(data){
        // XXX FIXME ordering won't work on this obviously
        return '<span title="' + moment(data).format('MMMM Do YYYY, h:mm:ss a') + '">' +
          moment(data).fromNow() + '</span>';
      } },

      { name: 'Processing time', data: 'processedIn', type: 'num' },
      { name: 'Status', data: 'status', type: 'num' },
      { name: 'Request body', data: 'jsonContent', render: function(data){
        return popover(data, 'Show');
      } },
      { name: 'Response', data: 'response', render: function(data){
        return popover(data, 'Show');
      } },
      { name: 'Name', data: 'credentials.name'},
      { name: 'Type', data: 'credentials.type'}
    ]
  }
});
