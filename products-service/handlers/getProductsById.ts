import { Products } from './products';

export const getProductsById = async (event) => {
  console.log('Lambda invocation with event: ', event);
  let products = Products;
  let product = products.find(item => item.id == event.pathParameters.id);
  console.log('Products', products);
  console.log('ID', event.pathParameters.id);
  console.log('Product', product);
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(product),
  };
}