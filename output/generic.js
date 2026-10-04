// generic => Generics in TS allows to create reusable components that 
//      works with a variety of data types while maintaining type safety
function fruit(name) {
    return name;
}
let fruit1 = fruit("apple");
let fruitNUm = fruit(2);
let fruitFresh = fruit(true);
console.log(typeof fruit1, typeof fruitNUm, typeof fruitFresh);
function users99(data) {
    return data;
}
let userCollection = users99(["anil", "sam"]);
let userIDcollection = users99([1, 2, 3, 5]);
export {};
//# sourceMappingURL=generic.js.map