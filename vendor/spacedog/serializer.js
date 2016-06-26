(function(){
  'use strict';

  // This receives JSONAPI compliant payloads, and depending on the endpoint / method, will transform it to spacedog lingo

  // This will be called unless there is a more specialized method available
  var serializer = function(jsonAPIData){
    console.debug('com.spacedog.tsygan::serializer->root <<>>', jsonAPIData);
    return jsonAPIData;
  };

  serializer.share = function(jsonAPIData) {
    console.debug('com.spacedog.tsygan::serializer->root::share <<>>');
    return jsonAPIData;
  };

  // How to serialize Schemas
  serializer.share.put = function(jsonAPIData) {
    console.debug('com.spacedog.tsygan::serializer->root::share::put <<>>', jsonAPIData.length);
    return jsonAPIData;
  };

  // How to serialize Schemas
  serializer.schema = function(jsonAPIData) {
    console.debug('com.spacedog.tsygan::serializer->root::schema <<>>', jsonAPIData);
    return JSON.stringify(jsonAPIData);
  };

  serializer.schema.put = function(jsonAPIData) {
    console.debug('com.spacedog.tsygan::serializer->root::schema::put <<', jsonAPIData);
    var data = jsonAPIData.data;

    var output = {};
    // Schema root
    output[data.id] = {
      _id: 'id',
      _type: 'object'
    };

    // Re-inject every individual field at the root
    // if('relationships' in data)
      data.fields.forEach(function(item){
        item = schemafield(item);
        var key = Object.keys(item).pop();
        output[data.id][key] = item[key];
      });

    // Spoof in the id field as well, unless it has been declared already
    if(!('id' in output[data.id]))
      output[data.id].id = {
        _type: 'string',
        _required: true,
        _array: false
      };

    console.debug('com.spacedog.tsygan::serializer->root::schema::put >>', output);
    return JSON.stringify(output);
  };

  // How to serialize SchemaFields (only called by schema serializer, since this does not exist independently in spacedog)
  var schemafield = serializer.schemafield = function(jsonAPIData) {
    console.debug('com.spacedog.tsygan::serializer->root::schemafield <<', jsonAPIData);
    var data = jsonAPIData.data;

    var type = data.attributes.type;
    var array = data.attributes.array;

    // References are represented as strings
    if (['belongsTo', 'hasMany'].indexOf(data.attributes.type) !== -1)
      type = 'string';

    // Has-many references is an array obviously
    if (['hasMany'].indexOf(data.attributes.type) !== -1)
      array = true;

    var output = {};
    output[data.attributes.name] = {
      _type: type,
      _required: data.attributes.required,
      _extra: {
        'com.spacedog.tsygan::id': data.id,
        'com.spacedog.tsygan::parent': data.relationships['parent-model'].data.id,
        'com.spacedog.tsygan::default': data.attributes['default-value'],
        'com.spacedog.tsygan::enum': data.attributes['enum-set'],
        'com.spacedog.tsygan::related': data.attributes['related-to']
      }
    };
    // XXX SpaceDog is very picky on arguments that can be there and when
    if (['stash'].indexOf(data.attributes.type) === -1)
      output[data.attributes.name]._array = array;

    if (['text'].indexOf(data.attributes.type) !== -1)
      output[data.attributes.name]._language = data.attributes.language;

    console.debug('com.spacedog.tsygan::serializer->root::schemafield >>', output);
    return output;
  };

  this.serialize = serializer;

}).apply(this.SpaceDog || (this.SpaceDog = {}));
