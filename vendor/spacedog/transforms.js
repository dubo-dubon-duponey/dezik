(function(){
  "use strict";

  // Just a helper to lookup maps of data both ways
  var mapper = function(mapping, canBeEmpty) {
    return {
      deserialize: function (serialized) {
        if (canBeEmpty && !serialized)
          return '';
        if (serialized in mapping)
          return mapping[serialized];
        throw new SpaceDog.Error(SpaceDog.Error.WRONG_ARGUMENTS, 'Unhandled data from SpaceDog service! (' + serialized + ')');
      },
      serialize: function (deserialized) {
        if (canBeEmpty && !deserialized)
          return '';
        var ret;
        Object.keys(mapping).forEach(function (key) {
          if (deserialized == mapping[key])
            ret = key;
        });
        if (!ret)
          throw new SpaceDog.Error(SpaceDog.Error.WRONG_ARGUMENTS, 'You specified an unknown entity! (' + deserialized + ')');
        return ret;
      },
      dump: function () {
        return Object.keys(mapping).map(function (key) {
          return mapping[key];
        });
      }
    };
  };

  // This is Elastic Search actual list of supported languages
  // Keys represent what Spacedog will accept, values represent human displayed version
  var languageMapping = {
    "arabic": "Arabic",
    "armenian": "Armenian",
    "basque": "Basque",
    "brazilian": "Brazilian",
    "bulgarian": "Bulgarian",
    "catalan": "Catalan",
    "cjk": "Cjk",
    "czech": "Czech",
    "danish": "Danish",
    "dutch": "Dutch",
    "english": "English",
    "finnish": "Finnish",
    "french": "French",
    "galician": "Galician",
    "german": "German",
    "greek": "Greek",
    "hindi": "Hindi",
    "hungarian": "Hungarian",
    "indonesian": "Indonesian",
    "irish": "Irish",
    "italian": "Italian",
    "latvian": "Latvian",
    "lithuanian": "Lithuanian",
    "norwegian": "Norwegian",
    "persian": "Persian",
    "portuguese": "Portuguese",
    "romanian": "Romanian",
    "russian": "Russian",
    "sorani": "Sorani",
    "spanish": "Spanish",
    "swedish": "Swedish",
    "turkish": "Turkish",
    "thai": "Thai"
  };

  var typeMapping = {
    'text': 'string', // *
    'timestamp': 'date', //  *
    'boolean': 'boolean', // *
    'float': 'number', // *
    'integer': 'integer', // +
    'string': 'identifier',
    'stash': 'json',
    // 'ref': 'reference',
    'geopoint': 'geocoordinates',
    'belongsTo': 'belongsTo',
    'hasMany': 'hasMany',
    'enum': 'enum'/*,
     'file': 'file',
     'amount': 'amount'*/
  };

  var integer = {
    deserialize: function(serialized) {
      return parseInt(serialized, 10);
    },

    serialize: function(deserialized) {
      return deserialized;
    }
  };

  // Export these
  this.transforms = {
    language: mapper(languageMapping, 'canBeEmpty'),
    type: mapper(typeMapping),
    integer: integer
  };

}).apply(this.SpaceDog || (this.SpaceDog = {}));
