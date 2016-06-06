import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return (function(){
			//var data;
			var data = {
				"productTitle" : localStorage["productTitle"] || "",
				"productImage" : localStorage["productImage"] || "",
				"productDetail" : localStorage["productDetail"] || "",
				"productImg" : localStorage["productImg"] || "",	

			};
        console.log('Data '+ data);
        return data;
    })();
    	// console.log('Add Product ' + this.get('productTitle'));
    	// this.set('productTitle',"I have added");
    	// return {'title':"Setting Title"}
  },

  actions:{
  	submitHelp:function(){
  		console.log("Submit happend");
  	}
  }


});
