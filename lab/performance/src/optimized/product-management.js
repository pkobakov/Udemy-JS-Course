import { updateProducts } from './rendering';
import { products as prods} from './products';

let products = prods;



export function deleteProduct(prodId) {
  const updatedProducts = [];
  let deletedProd;
  for (const prod of products) {
    if (prod.id !== prodId) {
      updatedProducts.push(prod);
    } else {
      deletedProd = prod;
    }
  }
  products = updatedProducts;
  updateProducts(deletedProd, prodId, deleteProduct, false);
}

export function addProduct(event) {
  const titleEl = document.querySelector('#new-product #title');
  const priceEl = document.querySelector('#new-product #price');

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
