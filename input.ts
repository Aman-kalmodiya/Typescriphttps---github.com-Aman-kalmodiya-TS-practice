function getInfo(){
        console.log("getting info...");

        const nameInput = document.getElementById('username') as HTMLInputElement
        const name:string=nameInput.value;

        const ageInput =document.getElementById("age") as HTMLInputElement
        const age:number |string=ageInput.value

        const emailInput =document.getElementById("email") as HTMLInputElement
        const email:string = emailInput.value

        console.log(name,age,email);
        
}
