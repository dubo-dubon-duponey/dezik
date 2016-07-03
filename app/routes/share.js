import Restricted from './restricted';

export default Restricted.extend({
  model: function() {
    return this.get('store').findAll('tsygan@spacedog-share');
  }

});
