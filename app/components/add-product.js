import Ember from 'ember';

export default Ember.Component.extend({
	productList: Ember.inject.service('product-list-service'),
	demoText : "Hello I am fine",
	actions: {
		addProduct: function(){
			
			if(confirm("Are you sure you want to add this to product list ?")){

				var saveData =  {
					"productTitle" : this.get('d.productTitle'),
					"productDetail" : this.get('d.productDetail'),
					"productImg" : this.get('d.productImg'),	
					"id": this.get('productList').getListCount()+1,

				};

				// Save data to productList
				this.get('productList').add(saveData);  

				// Rest the form data
				this.set('d.productTitle','');
				this.set('d.productDetail','');
				this.set('d.productImg','');
				localStorage.clear();

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
	      this.set('d.productImg', file.dataURL);
	    },
	}	
});
