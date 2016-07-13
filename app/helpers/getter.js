// v1
import Ember from 'ember';

export function getter(params/*, hash*/) {
  return params[0].get(params[1]);
}

export default Ember.Helper.helper(getter);
