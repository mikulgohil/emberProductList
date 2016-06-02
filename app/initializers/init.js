export function initialize(app) {
  // application.inject('route', 'foo', 'service:foo');
   //app.inject('component', 'productData', 'service:productData');
     app.inject('add-product', 'add', 'router:add');

}

export default {
  name: 'init',
  initialize
};

