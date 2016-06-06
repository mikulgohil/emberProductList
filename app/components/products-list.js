import Ember from 'ember';

export default Ember.Component.extend({
	productList: Ember.inject.service('product-list-service'),
	actions: {
		deleteItem : function(index){
			alert("Work in progress Clicked index " + index); 
		}
	}
});
