var users:string[] = ["aman",'vipin','satyam','ashvin'];
var marks:number[]=[12,12,14,15,16];
marks.push(20);

var collegeName:ReadonlyArray<string>=["IIM","IIT","NIT","SGSITS"];
//collegeName.push("SVVV") => yeh kaam nahi krega readyonly araay me add nhi kr skte 
console.log(marks);
