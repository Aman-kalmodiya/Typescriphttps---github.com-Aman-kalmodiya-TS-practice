interface info{
    name:string,
    age:number,
    college:string,
}

interface teacherinfo extends info {
     salary:number,
     post:string
}

let teacher:teacherinfo={
    name:"Anil",
    age:40,
    college:"SVVV",
    salary:39520,
    post:"ass prof",
}

let student:info={
     name:"Aman",
    age:22,
    college:"SVVV",
}
