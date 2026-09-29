//  type defines custom data types for object ,function etc 
//  it is similar to interface but interface never allowas to use union |
//  type allows to use | union

type a ={name:string , age:number}
type b={salary:number,department:string}

interface person {name:string}

var abhi : a | b ={
    name:"Abhishek ",
    age:20
}

var pavan :a|b={
    salary:25000,
    department:"safety"
}