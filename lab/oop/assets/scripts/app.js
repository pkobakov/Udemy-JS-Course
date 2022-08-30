class Product {

    constructor(title, imageUrl, price, description){

        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        
    }
}

class ShoppingCart {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: ${this.totalAmount.toFixed(2)} \$</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, currentItem) => prevValue + currentItem.price, 0);
        return sum;
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;


    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: ${0} \$</h2>
        <button>Order Now</h2>`;
        
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }

}

class ProductItem {
    constructor(product) {
      this.product = product;
    }

    addToCart() {

        App.addProductToCart(this.product);

    } 

    render() {
        const productEl = document.createElement('li');
        productEl.className = 'product-item';
        productEl.innerHTML = `
        <div>
           <img src="${this.product.imageUrl}" alt="${this.product.title}"/>
           <div class="product-item__content">
             <h2>${this.product.title}</h2>
             <h3>${this.product.price} \$</h3>
             <p>${this.product.description}</p>
             <button>Add to Card</button>
           </div>
        </div>`;

        const addCartButton = productEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return productEl;
    }
} 



class ProductList {
    products = [
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
    )
   ];
    constructor(){}

    render() {
        
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for (const product of this.products) {

            const productItem = new ProductItem(product);
            const productEl = productItem.render();
        
            prodList.append(productEl);
    }

    return prodList;
  }
}

class Shop {

    render() {
        const renderHook = document.getElementById('app');
        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const prodList = new ProductList();
        const prodListEl = prodList.render();

        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    };

}

class App {
    static cart; 

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();


