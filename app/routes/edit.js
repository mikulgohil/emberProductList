import Ember from 'ember';

export default Ember.Route.extend({
	productList: Ember.inject.service('product-list-service'),
	  model(params){
	  	console.log("A "+this.get('productList').getProductById(params.id));
	    return this.get('productList').getProductById(params.id);
	  },  
});
