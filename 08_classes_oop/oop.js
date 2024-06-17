const user = {
    username: "Bharat prajapati",
    isLoggedIn : true,
    age : 19,
     getUserDetail: function(){
        console.log(this); // current context all print 
        console.log(this.isLoggedIn);
      }
}

// console.log(user.username); // bharat prajapati
// console.log(user.getUserDetail());


// function banaynge (new) keyword ke understand ke liye //

function Client(name , age , city){
  this.name  = name
  this.age = age
  this.city = city 
   
  return this ;
} 

const store1 = Client("Ritesh" , 22 , "Ahmedabad");
const store2 = Client("Hitesh" , 18 , "Ahmedabad"); 
// first client data override ho jayga  es liye (new) keyword required .
console.log(store1);

