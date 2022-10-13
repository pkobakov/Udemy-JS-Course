const productListEl = document.getElementById('product-list');

function createElement (product, prodId, deleteProductFn) {
  const newListEl = document.createElement('li');

  newListEl.innerHTML = `
   <h2>${product.title}</h2>
   <p>${product.productListEl}</p>
  `;
    const prodDeleteButtonEl = document.createElement('button');
    prodDeleteButtonEl.textContent = 'DELETE';

    newListEl.id = prodId;

    prodDeleteButtonEl.addEventListener(
      'click',
      deleteProductFn.bind(null, prodId)
    );

    newListEl.appendChild(prodDeleteButtonEl);

    return newListEl;

}

export function renderProducts(products, deleteProductFn) {
 
  productListEl.innerHTML = '';
  products.forEach(product => {
    
  const newListEl = createElement(product, product.id, deleteProductFn);
  productListEl.appendChild(newListEl);
  });
}

export function updateProducts( product, prodId, deleteProductfn, isAdding ) {
  if (isAdding) {
    const newProdEl =  createElement(product, prodId, deleteProductfn );
    productListEl.insertAdjacentElement('afterbegin', newProdEl);
    
  } else {
    const prodEl = document.getElementById(prodId);
    prodEl.remove();

  }
}
