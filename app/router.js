import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Home
  this.route('index', {path: '/'});
  // Logs
  this.route('audit');
  // Schema editor
  this.route('schema');
  // Shares editor
  this.route('share');
  // Login
  this.route('login');
  // Data management
  this.route('data', { path: '/data/:data_schema' });
});

export default Router;
