(function(){
  "use strict";

  // Just a helper to lookup maps of data both ways
  var mapper = function(mapping, canBeEmpty) {
    return {
      deserialize: function (serialized) {
        if (canBeEmpty && !serialized)
          return '';
        var ret;
        Object.keys(mapping).forEach(function (key) {
          if (serialized == mapping[key])
            ret = key;
        });
        if (!ret)
          throw new SpaceDog.Error(SpaceDog.Error.WRONG_ARGUMENTS, 'Unhandled data from SpaceDog service! (' + serialized + ')');
        return ret;
      },
      serialize: function (deserialized) {
        if (canBeEmpty && !deserialized)
          return '';
        if (deserialized in mapping)
          return mapping[deserialized];
        throw new SpaceDog.Error(SpaceDog.Error.WRONG_ARGUMENTS, 'You specified an unknown entity! (' + deserialized + ')');
      },
      dump: function () {
        return Object.keys(mapping);
      }
    };
  };

  // This is Elastic Search actual list of supported languages
  // Keys represent what Spacedog will accept, values represent human displayed version
  var languageMapping = {
    "Arabic": "arabic",
    "Armenian": "armenian",
    "Basque": "basque",
    "Brazilian": "brazilian",
    "Bulgarian": "bulgarian",
    "Catalan": "catalan",
    "Cjk": "cjk",
    "Czech": "czech",
    "Danish": "danish",
    "Dutch": "dutch",
    "English": "english",
    "Finnish": "finnish",
    "French": "french",
    "Galician": "galician",
    "German": "german",
    "Greek": "greek",
    "Hindi": "hindi",
    "Hungarian": "hungarian",
    "Indonesian": "indonesian",
    "Irish": "irish",
    "Italian": "italian",
    "Latvian": "latvian",
    "Lithuanian": "lithuanian",
    "Norwegian": "norwegian",
    "Persian": "persian",
    "Portuguese": "portuguese",
    "Romanian": "romanian",
    "Russian": "russian",
    "Sorani": "sorani",
    "Spanish": "spanish",
    "Swedish": "swedish",
    "Turkish": "turkish",
    "Thai": "thai"
  };

  // Our types on the left, and SpaceDog translation on the right
  var typeMapping = {

    // These are the only two useful numerical types
    "integer": "long",
    "number": "double",

    // This is the only useful time/date type
    "date": "timestamp",

    // Plain indexable text
    "string": "text",

    // Non indexable
    "identifier": "string",
    // "blob": "string",

    // Simple types
    "boolean": "boolean",
    "geocoordinates": "geopoint",

    "enum": "enum",
    "json": "stash",
    "belongsTo": "belongsTo",
    "hasMany": "hasMany"

    // 'ref': 'reference',
    /*,
     'file': 'file',
     'amount': 'amount'
     */
  };

/*  var spaceTypeMapping = {
    "text": "text",
    "string": "string",
    "boolean": "boolean",
    "geopoint": "geopoint",
    "long": "long",
    "double": "double",
    "integer": "integer",
    "float": "float",
    "enum": "enum",
    "date": "date",
    "time": "time",
    "timestamp": "timestamp",
    "stash": "stash",
    "object": "object",
//    "belongsTo": "belongsTo",
//    "hasMany": "hasMany"
    // 'ref': 'reference',
//     'file': 'file',
//     'amount': 'amount'
  };*/



  // Export these
  this.transforms = {
    language: mapper(languageMapping, 'canBeEmpty'),
    type: mapper(typeMapping)
  };

}).apply(this.SpaceDog || (this.SpaceDog = {}));
