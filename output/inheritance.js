class Auth {
    login(name, password) {
        if (name && password) {
            return "student is loged in";
        }
        else {
            return "no student found";
        }
    }
}
class student extends Auth {
    result(marks) {
        if (marks < 33) {
            return "fail";
        }
        else {
            return "Pass";
        }
    }
}
class teacher extends Auth {
    subject() {
        return "ML and DL";
    }
}
var newStd = new student();
console.log(newStd.result(32));
var secStd = new student();
console.log(secStd.login("aman", "123"));
var newTeacher = new teacher();
console.log(newTeacher.subject());
export {};
//# sourceMappingURL=inheritance.js.map