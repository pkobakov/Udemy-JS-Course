class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, description, price){

        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
}

const productList = {
    products: [
        new Product
        (
        'Bread', 
        'https://www.kingarthurbaking.com/sites/default/files/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg',
        2.56,
        'Fresh tasty bread')
    , 
       new Product
    (
        'Mozarella', 
        'https://cdn.shopify.com/s/files/1/2836/2982/products/mozzarella-cheese-recipe_grande.jpg',
        3.28,
        'Lovely Italian cheese'
    )], 

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



