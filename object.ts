// var userData:
//    {name:string,
//     age:number,
//     city:string}
// ={
//     name:"Aman",
//     age:22,
//     city:"Indore"
// }

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

var empData :{
    [key:string]:string|number|undefined|{}

}={
    name:"AMAN",
    age:21,
    company:"oracle",
    address:{
    name:"AMAN",
    age:21,
    company:"oracle",
    }
}

console.log(empData);

// output=>{
//   name: 'AMAN',
//   age: 21,
//   company: 'oracle',
//   address: { name: 'AMAN', age: 21, company: 'oracle' }
// }