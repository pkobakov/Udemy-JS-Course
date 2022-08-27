const productList = {
    products: [{
        title: 'Bread', 
        imageUrl: 'https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg',
        price: 2.56,
        description: 'Fresh tasty bread'
    }, 

    {
        title: 'Mozarella', 
        imageUrl: 'https://cdn.shopify.com/s/files/1/2836/2982/products/mozzarella-cheese-recipe_grande.jpg',
        price: 3.28,
        description: 'Lovely Italian cheese'
    }], 

    renderProducts() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const product of this.products) {
            const productEl = document.createElement('li');
            productEl.className = 'product-item';
            productEl.innerHTML = `
            <div>
               <img src="${product.imageUrl}" alt="${product.title}"/>
               <div class="product-item__content">
                 <h2>${product.title}</h2>
                 <h3>${product.price} \$</h3>
                 <p>${product.description}</p>
                 <button>Add to Card</botton>
               </div>
            </div>`
            prodList.append(productEl);
        }
        renderHook.append(prodList);
    }
};

productList.renderProducts();



