"use strict";
// var userData:
//    {name:string,
//     age:number,
//     city:string}
// ={
//     name:"Aman",
//     age:22,
//     city:"Indore"
// }
Object.defineProperty(exports, "__esModule", { value: true });
//agar fix naho konsi konsi value aa skti he to 
// var userData :{
//     [key:string]:string|number|undefined
// }
// ={
//     Name:"aman",
//     age:22,
//     company:"IBM",
//     salary:65000
// }
// nested Data 
var empData = {
    name: "AMAN",
    age: 21,
    company: "oracle",
    address: {
        name: "AMAN",
        age: 21,
        company: "oracle",
    }
};
console.log(empData);
// output=>{
//   name: 'AMAN',
//   age: 21,
//   company: 'oracle',
//   address: { name: 'AMAN', age: 21, company: 'oracle' }
// }
//# sourceMappingURL=object.js.map