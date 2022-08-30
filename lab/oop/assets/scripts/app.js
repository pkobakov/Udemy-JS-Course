class Product {

    constructor(title, imageUrl, price, description){

        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor( renderHookId) {
        this.hookId = renderHookId;
    }

  createRootElement(tag, cssClasses, attributes){
    const rootElement = document.createElement(tag);

    if (cssClasses) {
        rootElement.className = cssClasses;
    }

    if (attributes && attributes.length > 0) {
        for (const attr of attributes ) {
            rootElement.setAttribute(attr.name, attr.value);
        }
    }

    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }  

}

class ShoppingCart  extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        console.log(value);
        this.totalOutput.innerHTML = `<h2>Total: ${this.totalAmount.toFixed(2)} \$</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, currentItem) => prevValue + currentItem.price, 0);
        return sum;
    }


    constructor(renderHookId){
        super(renderHookId);
    }
    

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;


    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
        <h2>Total: ${0} \$</h2>
        <button>Order Now</h2>`;
        
        this.totalOutput = cartEl.querySelector('h2');
    }

}

class ProductItem extends Component {

    constructor(product, renderHookId) {
      super(renderHookId);  
      this.product = product;
    }

    addToCart() {

        App.addProductToCart(this.product);

    } 

    render() {
        const productEl = this.createRootElement('li', 'product-item');
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
    }
} 



class ProductList extends Component {
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
    constructor(renderHookId){
        super(renderHookId);
    }

    render() {
        
        this.createRootElement('ul', 'product-list', 
                               [new ElementAttribute('id', 'prodList-id')]);
        for (const product of this.products) {
            const productItem = new ProductItem(product, 'prodList-id');
            productItem.render();
    }
  }
}

class Shop {

    render() {
        this.cart = new ShoppingCart('app');
        this.cart.render();
        const prodList = new ProductList('app');
        prodList.render();
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


