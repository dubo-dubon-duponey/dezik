import Ember from 'ember';

export function momentFromNow(params/*, hash*/) {
  let value = params[0];
  return moment(value).fromNow();
}

export default Ember.Helper.helper(momentFromNow);
