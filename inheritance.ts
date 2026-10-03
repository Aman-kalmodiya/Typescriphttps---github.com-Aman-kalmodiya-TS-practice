// class Auth {
//     login(name:string,password:string){
        
//         if(name && password){
//             return "student is loged in"
//         }
//         else{
//             return "no student found"
//         }
//     }
// }

// class student extends Auth{
//     result(marks:number){

//         if(marks<33)
//         {
//             return "fail"
//         }
//         else {
//             return "Pass"
//         }
//     }
// }

// class teacher extends Auth{
//     subject(){
//         return "ML and DL"
//     }

// }

// var newStdent = new student();

// console.log(newStdent.result(32))

// var secStd = new student();

// console.log(secStd.login("aman","123"))

// var newTeacher = new teacher()
// console.log(newTeacher.subject())
interface clgBasics{
        clgName:string;
        location:string;
        fees:number;
}
class clgData implements clgBasics{

    Uname:string;
    clgName:string;
        location:string;
        fees:number;
    constructor(cName:string,clgName:string,
        location:string,
        fees:number){
        this.Uname=cName;
        this.clgName=location;
        this.location=location;
        this.fees=fees;
    } 
}

var clg1 = new clgData("IIT Bombay","IST","indore",150200,);

var clg2 = new clgData("SVVV","SVITS","indore",180000)
console.log(clg1,clg2)