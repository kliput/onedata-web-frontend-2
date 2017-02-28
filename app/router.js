import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('onedata', function() {
    this.route('sidebar', { path: ':type' }, function() {
      this.route('content', { path: ':resourceId' });
    });
    this.route('providers');
  });
});

export default Router;
