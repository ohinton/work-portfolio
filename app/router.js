import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('connect');
  this.route('portfolio');
  this.route('resume');
});

export default Router;
