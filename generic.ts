// generic => Generics in TS allows to create reusable components that 
//      works with a variety of data types while maintaining type safety

function fruit<T>(name:T):T{
        return name
}

let fruit1 = fruit("apple");
let fruitNUm = fruit(2);
let fruitFresh = fruit(true);

console.log(typeof fruit1,typeof fruitNUm,typeof fruitFresh);

function users99<T>(data:T):T {
return data 

}

let userCollection = users99(["anil","sam"])

let userIDcollection = users99([1,2,3,5])