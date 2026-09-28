"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalPrice(item) {
    let price = 10;
    console.log(price * item);
}
totalPrice(20);
function userListed(price, item, text) {
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
userListed(50, 50);
//# sourceMappingURL=functionParams.js.map