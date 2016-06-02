import Ember from 'ember';

export default Ember.Service.extend({
  product : [
      { 
        productTitle: "LG Tv",
        productImg : "http://dummyimage.com/150x150/fff/000",
        productDetail: "Lorem ipsum Voluptate dolor veniam adipisicing anim aliqua ullamco exercitation ad commodo consectetur occaecat quis sunt tempor."
         },
      { 
        productTitle: "Sony Mobile",
        productImg : "http://dummyimage.com/150x150/fff/000",
        productDetail: "adipisicing anim aliqua ullamco exercitation ad commodo consectetur occaecat quis sunt tempor."
         },
     { 
        productTitle: "Samsung Watch",
        productImg : "http://dummyimage.com/150x150/eee/ccc",
        productDetail: "Lorem ipsum Voluptate dolor "
         },    
    ],
	init(){
		return this.get('product')
	},
  add(item){
    this.get('product').pushObject(item);
  },

  title : "Helllo From service"
});
