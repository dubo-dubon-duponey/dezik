// v1
import Ember from 'ember';

export function momentify(params/*, hash*/) {
  let value = params.shift();
  let type = params.shift();
  switch(type){
    case "fromNow":
    default:
      return moment(value).fromNow();
      break;
    case "valueOf":
      return moment(value).valueOf();
      break;
  }
}

export default Ember.Helper.helper(momentify);
