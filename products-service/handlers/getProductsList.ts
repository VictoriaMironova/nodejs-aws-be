import { Products } from './products';

export const getProductsList = async (event) => {
  console.log('Lambda invocation with event: ', event);
  let products = Products;
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(products),
  };
}