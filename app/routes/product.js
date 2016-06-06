import Ember from 'ember';

export default Ember.Route.extend({
  productList: Ember.inject.service('product-list-service'),
  model(){
    return this.get('productList').init();
  },  
});
