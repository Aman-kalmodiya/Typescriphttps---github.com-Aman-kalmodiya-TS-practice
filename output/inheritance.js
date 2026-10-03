// class Auth {
//     login(name:string,password:string){
class clgData {
    Uname;
    clgName;
    location;
    fees;
    constructor(cName, clgName, location, fees) {
        this.Uname = cName;
        this.clgName = location;
        this.location = location;
        this.fees = fees;
    }
}
var clg1 = new clgData("IIT Bombay", "IST", "indore", 150200);
var clg2 = new clgData("SVVV", "SVITS", "indore", 180000);
console.log(clg1, clg2);
export {};
//# sourceMappingURL=inheritance.js.map