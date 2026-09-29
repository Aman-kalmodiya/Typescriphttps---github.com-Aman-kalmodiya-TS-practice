class Product{
    name:string;
    price:number;
    pId:number;
    inCart=false;
    isOrdered=false;
    constructor(name:string,price:number,pId:number){
        this.name=name;
        this.price=price;
        this.pId=pId
       
    }
    addToCart():void{
        this.inCart=true;
    }
    orderProduct():string{
        if(this.inCart==true){
             return `product ${this.name} is added in cart at price of ${this.price}`
        }
        else {return `cart is empty`}
    }
}

var myProduct = new Product("samsung",10000,23568);
myProduct.addToCart()
console.log(myProduct.orderProduct());


