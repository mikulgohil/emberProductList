import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('product');
  this.route('add',{path:'product/add'});
  this.route('edit',{path:'product/edit/:id'});
});

export default Router;
