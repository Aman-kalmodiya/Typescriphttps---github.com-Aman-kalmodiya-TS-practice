
interface person1{
    name:string,
    college:string,
    admissionYear :number
}

interface person2 {
    class:string,
    fees:number
}

type person3 = person1 & person2

var Aman :person3={
    name:"Aman",
    college:"Svvv",
    admissionYear:2022,
    class:"CSBS_TCS",
    fees:100000
}

type personA ={name:string}
type personB={age:number}
type personC= personA&personB

var userData1 :personC ={
    name:"Aman",
    age:22
}

var userData2 : personB={
    age:22
}

var userData : personA ={
    name:"Aman"
}

console.log(Aman)