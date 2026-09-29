// enum => A data type allows you to define a set of named constant

enum member {
     student = "Aman",
     post = "teacher ",
     facultyName = "dilip",
     driver = "mahesh"
}

var name :member = member.student;
var post :member =member.post

console.log(name,post);

enum roles{
//  eshko console krne pr yeh number dega start from 0
    frontend_developer ,
    backend_developer,
    QA,
    software_developer
}

console.log(roles.QA)