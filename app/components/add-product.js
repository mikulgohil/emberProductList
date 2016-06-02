import Ember from 'ember';

export default Ember.Component.extend({
	productList: Ember.inject.service('product-list-service'),
	actions: {
		addProduct: function(){
			
			if(confirm("Hello Woring")){

				var saveData =  {
					"productTitle" : this.get('d.productTitle'),
					"productDetail" : this.get('d.productDetail'),
					"productImg" : this.get('d.productImg'),	

				};

				// Save data to productList
				this.get('productList').add(saveData);  

				// Rest the form data
				this.set('d.productTitle','');
				this.set('d.productDetail','');
				this.set('d.productImg','');
				localStorage.clear();
				 this.get('route').transitionTo('product');

			}
		},

		updateStorage: function(){

			// Update the localStorage on keyup Input
			localStorage["productTitle"] = this.get('d.productTitle');
			localStorage["productDetail"] = this.get('d.productDetail');
		},
		fileSelectionChanged: function(file) {
			// Update local Storage for image
	    	localStorage["productImg"] = file.dataURL;
	      this.set('d.productImg', file.dataURL)
	    },
	}	
});
