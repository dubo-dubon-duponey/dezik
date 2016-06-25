(function(){
  'use strict';

  // This file deals with normalization of SpaceDog answers

  var Normalizer = function(){
    // This will be called unless there is a specialized more method available
    var root = function(status, text){
      console.debug('com.spacedog.tsygan::normalizer->root <<>>', text);
      return JSON.parse(text);
    };

    root.log = function(status, payload){
      console.debug('com.spacedog.tsygan::normalizer->root::log <<' /*, payload*/);
      payload = JSON.parse(payload);
      var output = {
        data: [],
        meta: {
          took: payload.took,
          total: payload.total
        }
      };
      payload.results.forEach(function(item){
        Object.keys(item).forEach(function(key){
          var newKey = key.dasherize();
          if(newKey != key){
            item[newKey] = item[key];
            delete item[key];
          }
        });
        output.data.push({
          // XXX yeah, only way to get an id scheme that works
          id: SpaceDog.md5.crypt(JSON.stringify(item)),
          type: 'SpacedogLog',
          attributes: item,
          relationships: {}
        });
      });
      console.debug('com.spacedog.tsygan::normalizer->root::log >>', output);
      return output;
    };

    root.share = function(status, text){
      console.debug('com.spacedog.tsygan::normalizer->root::share <<>>', text);
      return JSON.parse(text);
    };

    root.share.delete = function(status, text, headers, options){
      console.debug('com.spacedog.tsygan::normalizer->root <<>>', text);
      var id = options.url.split('/');
      var fname = id.pop();
      id = id.pop() + '*' + decodeURIComponent(fname);
      return {
        data: {
          id: id,
          type: 'SpacedogShare'
        }
      };
    };

    root.share.get = function(status, payload, headers, options){
      console.debug('com.spacedog.tsygan::normalizer->root::share <<', payload);
      payload = JSON.parse(payload);
      var output = {
        data: [],
        meta: {
          took: payload.took,
          total: payload.total
        }
      };
      payload.results.forEach(function(item){
        Object.keys(item).forEach(function(key){
          var newKey = key.dasherize();
          if(newKey != key){
            item[newKey] = item[key];
            delete item[key];
          }
        });
        item.filename = item.path.split('/').pop();
        // XXX remap identifiers here
        var id = item.path.split('/');
        var fname = id.pop();
        id = id.pop() + '*' + fname;
        output.data.push({
          id: id,
          type: 'SpacedogShare',
          attributes: item,
          relationships: {}
        });
        // XXX brutal pascal
        item.path = options.url + item.path;
      });
      console.debug('com.spacedog.tsygan::normalizer->root::log >>', output);
      return output;
    };

    root.share.put = function(status, payload, headers, options){
      payload = JSON.parse(payload);
      var id = payload.path.split('/');
      var fname = id.pop();
      id = id.pop() + '*' + fname;
      var output = {
        data: {
          id: id,
          type: 'spacedog-share',
          attributes: payload
        }
      };
      var p = options.url.split('/');
      p.pop();
      payload.path  = p.join('/') + payload.path;
      return output;
    };


    root.schema = function(status, text){
      console.debug('com.spacedog.tsygan::normalizer->root::schema <<>>', text);
      return JSON.parse(text);
    };

    var schemafield = function(name, hash) {
      console.debug('com.spacedog.tsygan::normalizer->root::schemafield <<', name, hash);

      var json = {
        id: hash._extra['com.spacedog.tsygan::id'],
        type: 'schemafield',
        attributes: {
          name: name,
          type: hash._type,
          required: hash._required,
          language: hash._language,
          array: hash._array,
          'default-value': hash._extra['com.spacedog.tsygan::default'],
          'enum-set': hash._extra['com.spacedog.tsygan::enum']
        },
        relationships: {
          'parent-model': {
            data: {
              type: 'schema',
              id: hash._extra['com.spacedog.tsygan::parent']
            }
          }
        }
      };
      console.debug('com.spacedog.tsygan::normalizer->root::schemafield >>', JSON.stringify(json));
      return json;
    };

    root.schema.delete = function(status, text, headers, options){
      console.debug('com.spacedog.tsygan::normalizer->root::schema::delete <<', text);
      var json = {
        data: {
          // XXX this is dangerous, and necessary because of % (for eg) being allowed in urls
          id: decodeURIComponent(options.url.split('/').pop()),
          type: 'schema'
        }
      };
      console.debug('com.spacedog.tsygan::normalizer->root::schema::delete >>', JSON.stringify(json));
      return json;
    };

    root.schema.put = function(status, text, headers, options){
      console.debug('com.spacedog.tsygan::normalizer->root::schema::put <<', text);
      var payload = {meta: JSON.parse(text)};
      payload.data = {
        id: payload.meta.id,
        type: payload.meta.type
      };
      delete payload.meta.id;
      delete payload.meta.type;
      console.debug('com.spacedog.tsygan::normalizer->root::schema::put >>', payload);
      return payload;
    };

    // This will handle responses for all requests to the "/1/schema" endpoint, unless there is a more specialized one
    root.schema.get = function(status, text, headers, options){
      console.debug('com.spacedog.tsygan::normalizer->root->schema->get <<', text);

      var singular = options.url.split('/').length > 5;

      var payload = JSON.parse(text);

      var output = {
        data: [],
        meta: {}
      };

      var attrs = [];
      // Included records for the fields out of band
      output.included = attrs;

      // For each schema
      Object.keys(payload).forEach(function(schemaId, index) {
        // We will have relations to fields
        var ids = [];
        // And embedded fields as well
        output.data[index] = {
          // Ember id of the schema is the key/name
          id: schemaId,
          // Type is actually schema, but then
          type: 'schema',
          // Add the relationships ids to be linked
          relationships: {
            fields: {
              data: ids
            }
          }
        };

        // Remove useless/spurious attributes
        // Ignore these two entirely from SpaceDog
        delete payload[schemaId]._id;
        delete payload[schemaId]._type;
        // This is our own internal ids, that are fine, thank you
        delete payload[schemaId].id;
        // XXX no need for now
        // delete payload[schemaId].type;
        // Now, the remainder is actual fields


        Object.keys(payload[schemaId]).forEach(function(attrName){
          // So, this is the "short version"
          ids.push({
            id: payload[schemaId][attrName]._extra['com.spacedog.tsygan::id'],
            type: 'schemafield'
          });

          attrs.push(schemafield(attrName, payload[schemaId][attrName]));
        });
      });

      if(singular)
        output.data = output.data.pop();
      console.debug('com.spacedog.tsygan::normalizer->root->schema->get >>', output);
      return output;
    };

    return root;
  };

  this.normalize = new Normalizer();

}).apply(this.SpaceDog || (this.SpaceDog = {}));
