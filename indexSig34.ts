// An index signature in TS allows you to define object 
//  with dynamic keys whhile specifying the tyoe of thei values

type userIndex ={
    name:string,
    id:number,
    sec:string,
   readonly [key:string]:number|string
}

// readonly lagane se object bananne k bad data 
// add nahi hoga ek bar jo object me likh diya 
// vahi rahega

// id , name, sec mandatory bna diya and baki dynamic he aay ya na aay no problem
let tcsStu :userIndex ={
    name:"aman",
    id:338,
    sec:"T",
    age:22,
    CGPA:8
}

let IBMstu:userIndex ={
    name:"Yash",
    id:5,
    sec:"I",
    mobile:7878
}