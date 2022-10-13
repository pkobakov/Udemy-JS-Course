import { updateProducts } from './rendering';
import { products } from './products';

const titleEl = document.getElementById('title');
  const priceEl = document.getElementById('price');



export function deleteProduct(prodId) {
  const deletedProdIndex = products.findIndex( prod => prod.id === prodId);
  const deletedProd = products[deletedProdIndex];
  products.splice(deletedProdIndex, 1);
  updateProducts(deletedProd, prodId, deleteProduct, false);
}

export function addProduct(event) {
  

  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert('Please enter some valid input values for title and price.');
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price
  };

  products.unshift(newProduct);
  updateProducts(newProduct, newProduct.id, deleteProduct, true);
}
