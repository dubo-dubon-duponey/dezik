// v1
/* global moment:false */
import Ember from 'ember';

export function momentify(params/*, hash*/) {
  let value = params.shift();
  let type = params.shift();
  switch (type){
    case 'fromNow':
    default:
      return moment(value).fromNow();
    case 'valueOf':
      return moment(value).valueOf();
  }
}

export default Ember.Helper.helper(momentify);
