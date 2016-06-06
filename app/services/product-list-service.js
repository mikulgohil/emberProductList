import Ember from 'ember';

export default Ember.Service.extend({
  product : [
      {
      id:0, 
        productTitle: "LG Tv",
        productImg : "http://dummyimage.com/150x150/fff/000",
        productDetail: "Lorem ipsum Voluptate dolor veniam adipisicing anim aliqua ullamco exercitation ad commodo consectetur occaecat quis sunt tempor."
         },
      { 
        id:1, 
        productTitle: "Sony Mobile",
        productImg : "http://dummyimage.com/150x150/fff/000",
        productDetail: "adipisicing anim aliqua ullamco exercitation ad commodo consectetur occaecat quis sunt tempor."
         },
     { 
      id:2, 
        productTitle: "Samsung Watch",
        productImg : "http://dummyimage.com/150x150/eee/ccc",
        productDetail: "Lorem ipsum Voluptate dolor "
         },    
    ],
	init(){
		return this.product;
	},
  getListCount(){
    return this.product.length;
  },
  add(item){
    this.product.pushObject(item);
  },
  getProductById(item){
    var obj = this.product;
        for (var i = 0; i < obj.length; i++) {
          if(obj[i].id == item){
            return obj[i];
          }
        }
  },

  title : "Helllo From service"
});
