import EmbeddedRecordsMixin from 'ember-data/serializers/embedded-records-mixin';

import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend(EmbeddedRecordsMixin, {
  // Embed fields into the record
  primaryKey: 'id',
  attrs: {
    fields: { embedded: 'always' }/*,
     _acl: { embedded: 'always' },
     _triggers: { embedded: 'always' }*/
  }
});
