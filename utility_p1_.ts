// utility types are build in types that help transform
//  or manupulates other types in a convenient way

interface clg{
    name:string,
    student:number,
    location:string,
    branch:string
}

// Partial => Data optional ho jata he 
let clg3:Partial <clg>={
    name:"SVVV",
    student:1200,
    // location:"indore"
}

// required => reqired me sabhi propety mandatory he 

let reqClg :Required<clg>={
    name:"IIT",
    student:22,
    location:"Indore",
    branch:"CS"
}

// Readonly => can not be change after creation or can not define

//Pick=> pick any property from interface 

let reqClg5:Pick<clg ,'name'|'location' >={
    name:"IIT",
    location:"Indore"
}

// omit => jisko nikalna he usko nikal skte he 

let clg5:Omit<clg,'branch'> ={
    name:"SGSITS",
    location:"indore",
    student:1212,
    
}

// Exclude => 
