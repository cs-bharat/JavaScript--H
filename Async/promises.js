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
    console.log("promise consumed.");
})
// -------------------------------------//
// second way to creation and consumed promise //
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("async task two is completed");
        resolve()
    } , 1000)
}).then(function(){
    console.log("promise two consumed..")
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
            reject("somthing : want to error in DB");
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
            reject("Somthing: want rong js Error.");
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

