import { products } from './products';
import { renderProducts } from './rendering';

function addProduct(event) {
    event.preventDefault();
    import('./product-management.js').then(mod => {
      mod.addProduct(event); 
    });
}

function deleteProduct(productId) {
  import('./product-management.js').then(mod => {
    mod.deleteProduct(productId);
  })
}

export function initProducts() {
  renderProducts(products, deleteProduct);
}

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
