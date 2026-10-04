//  the kryOF keyword in TS used to get the keys of a type 
// as union string .
//  It is primarily used to for type safety when working with objects

type person = {
    name:string,
    age:number,
    isEmp:boolean
}

let personData :person ={
    name:"Aman",
    age:22,
    isEmp:true
}

type personX = keyof person
 let personXX:personX;

 personXX="name";                       