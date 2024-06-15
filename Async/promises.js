// promises 2 chij per depend he , => (creation,conjuption)
/* promise new keyword se create karke useke under (call back pass kiya)
   jata he or (callback hell ) ko reduce bhi karta he ..

   promise ke 2 part he ==> ( resolve , reject ) 
*/


// creation promise is done
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async tast one is compeleted");
        resolve();
    } , 1000)
})

// consumed promise //
promiseOne.then(function(){
    console.log("promise consumed. promiseOne");
})
// -------------------------------------//
// second way to creation and consumed promise //
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task two is completed");
        resolve()
    } , 1000)
}).then(function(){
    console.log("promise two consumed..  promiseTwo")
})

// ----------- third promise --------------------//
const promiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){
        // resolve-> object,array,function kuch bhi pass kar sakte he ..//
        resolve({username:"code" , email:"code@32gmail.com"});
    } , 1000)
})

promiseThree.then(function(userData){
       console.log(userData); // promiseThree  ka data access .
})

//------------ four promise ----------------- //
const promiseFour = new Promise(function(resolve , reject) {
    setTimeout(function(){
        // database se data lane per error ya no error tab //
        let error = true; // false try it
        if(!error){ // noError tab
            resolve({username:"Hitesh Choudhury" ,  age:"37" , password:"232"})
        }else{ // error
            reject("somthing : want to error in DB promiseFour");
        }
    } , 2000);
})

promiseFour
.then((user)=>{
console.log(user);
// username,age,password thino mese kuch bhi return karna hota tab .//
return user.username;
})

.then((username)=>{
    console.log(username);
 })

.catch((error) =>{
    console.log(error);
})
.finally(() => console.log("The promise is either resolved and rejected"));


// ---------------------- five promise ----------- // 
const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
          let Error = true;
          if(!Error){
            resolve({username:"Javascript" , password:"41"});
          }else{
            reject("Somthing: want rong js Error. promiseFive");
          }
    },3000)
});

// consumed (async,await) se karenge //

async function promiseFiveConsumed(){
    try{
        const response =  await promiseFive;
        console.log(response);
    }catch(err){
    console.log(err);
    }
}

promiseFiveConsumed();


// fetch method se data access using then and catch //

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//  return response.json();
// })
// .then((data)=> {
//   console.log(data);
// })
// .catch((error)=>{
//  console.log(error);
// })


// async ,await use function  se bhi data acces (try,catch block) //
async function AllUserData(){
    try{
        // fetch me data ko json me convert karna hi padta he ..//
        /* async work he to fecth method or usei fetch ko jis variable me store 
          kiya hoga useko bhi await karvana compalsory he .. */
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

AllUserData();

// fetch network based request he jo ki resource ko network se lane me
// help karta he ..
/* interview
  fetch method error code(400) return kare to vo bhi aak
   response hi he jo ki resolve ho kar error code (400) return kar raha he .
 */ 

   /*
   global variable (response)
   fetch 2 step me kam karta he 
   1) data ke liye memory me space reserved karna (onfulfield , onrejection)
   2) web browser thorw network request karna or vase response lana .
         or memory me create data variable me store karna .
         and then  global variable me assign karna .
   */