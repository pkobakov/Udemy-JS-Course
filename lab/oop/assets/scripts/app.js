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
    constructor( renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
           this.render();
        }
    }

  render(){};  

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
        super(renderHookId, false);
        this.placeOrder = () => {
            console.log('Ordering...');
            console.log(this.items);
          }
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


        const orderButton = document.querySelector('button');
        orderButton.addEventListener('click',() => this.placeOrder());
        this.totalOutput = cartEl.querySelector('h2');
    }

}

class ProductItem extends Component {

    constructor(product, renderHookId) {
      super(renderHookId, false);  
      this.product = product;
      this.render();
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
    #products = [];
    constructor(renderHookId){
        super(renderHookId, false);
        this.render();
        this.fetchProducts();

    }

    fetchProducts() {
        this.#products = [new Product
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
        )];

        this.renderProducts();
    }

    renderProducts() {
        for (const product of this.#products) {
            new ProductItem(product, 'prodList-id');
    }
    }

    render() {
        
        this.createRootElement('ul', 'product-list', 
                [new ElementAttribute('id', 'prodList-id')]);
        if (this.#products && this.#products.length > 0) {
            this.renderProducts();
        }                       

  }
}

class Shop extends Component {

    constructor(){
        super();
    }
    render() {
        this.cart = new ShoppingCart('app');
        const list = new ProductList('app');
    };

}

class App {
    static cart; 

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();


