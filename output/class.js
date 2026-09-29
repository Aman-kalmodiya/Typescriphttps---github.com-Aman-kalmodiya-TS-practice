class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
    orderProduct() {
        if (this.inCart == true) {
            return `product ${this.name} is added in cart at price of ${this.price}`;
        }
        else {
            return `cart is empty`;
        }
    }
}
var myProduct = new Product("samsung", 10000, 23568);
myProduct.addToCart();
console.log(myProduct.orderProduct());
export {};
//# sourceMappingURL=class.js.map