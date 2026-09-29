// enum => A data type allows you to define a set of named constant
var member;
(function (member) {
    member["student"] = "Aman";
    member["post"] = "teacher ";
    member["facultyName"] = "dilip";
    member["driver"] = "mahesh";
})(member || (member = {}));
var name = member.student;
var post = member.post;
console.log(name, post);
var roles;
(function (roles) {
    //  eshko console krne pr yeh number dega start from 0
    roles[roles["frontend_developer"] = 0] = "frontend_developer";
    roles[roles["backend_developer"] = 1] = "backend_developer";
    roles[roles["QA"] = 2] = "QA";
    roles[roles["software_developer"] = 3] = "software_developer";
})(roles || (roles = {}));
console.log(roles.QA);
export {};
//# sourceMappingURL=enum.js.map