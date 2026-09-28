var value:any="anil";
value = 20;

value = ["aman",21]                  

function fruits(){
    let data=10;
    let type =   
    console.log()
}

function isVoid(){
    console.log("This is a VOID function , this function return nothing");
}

isVoid()


function complex():number|string{

    let name="Aman";
    let age = 22
    return name;
}

complex()


//  never in ts
//  jis function me loop ho or vo kabhi endpoint tk na pahuche 
//  usko data type never de skte he 

function nev():never{
    while(true)
    {
        console.log("nver end")
    }
}
