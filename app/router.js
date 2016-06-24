import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('schema');
  this.route('data', { path: '/data/:data_schema' });
  this.route('index', {path: '/'});
  this.route('audit');
  this.route('share');
});

export default Router;
