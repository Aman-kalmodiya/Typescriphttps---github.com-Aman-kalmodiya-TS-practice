function totalPrice(item:number){
 let price = 10;
 console.log(price*item)
}
totalPrice(20);

function userListed(price:number,item:number,text?:string){
   
    if(text){
         console.log(text +price*item)
    }else{
         console.log(price*item)
    }
}
userListed(50,50)