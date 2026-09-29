interface info{
    name:string,
    age:number,
    college:string,
}

interface teacherinfo extends info {
     salary:number,
     post:string,
     promotionDate:number
}

let teacher:teacherinfo={
    name:"Anil",
    age:40,
    college:"SVVV",
    salary:39520,
    post:"ass prof",
    promotionDate:25
}

let student:info={
     name:"Aman",
    age:22,
    college:"Svvv",
}
