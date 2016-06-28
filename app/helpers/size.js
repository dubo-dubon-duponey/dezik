import Ember from 'ember';

export function sizeify(params/*, hash*/) {
  let value = parseInt(params.shift(), 10);
  value = ['B', 'K', 'M', 'G', 'T'].some(function(item){
    if(!(Math.floor(value / 1024))){
      value = Math.floor(value * 10) / 10 + ' ' + item;
      return true;
    }
    value /= 1024;
  }) && value || Math.floor(value * 1024 * 10) / 10 + ' T';
  return value;
}

export default Ember.Helper.helper(sizeify);
