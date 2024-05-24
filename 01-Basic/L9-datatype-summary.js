/* data ko memory me kese rakna  jata he or access kiya jata he 
   us bases per data ka two part me divided he
    1-premitive , 2- non premitive */

 /* primitive 7 type he all (call by value) passes hote he
    memory me reference allocated nhi hota */   
 // number,string,boolean,null undefined,symbol,BigInt

 const score = 100
 const scoreValue = 100.2

//  const Id = symbol('123')
//  const anotherId = symbol('123')
//  console.log(Id === anotherId); // false

 const bigInt = 23434254544n
 console.log(typeof bigInt);
 const isLoggedIn = false;


 const isTemp = null
console.log(typeof isTemp);//object

 let userEmail;



 /* non primitive (reference) memory me reference allocated . */

 // array , object, function

 const heros = ['shaktiman' , 'marvals' , 'spyder man' , 'balveer'];
 console.log(typeof heros);

 const myObj = {
   name: 'bharat',
   age : 19,
 }
 console.log(typeof myObj);

 const myfunction = function(){
   console.log("Welcome to my function");
 }
 console.log(typeof myfunction);


 // typeof se data type fined karne per .
 /*
  number => number
  undefine => undefine
  string  => string
  object => object
  // imp -..//
  null => object 
  bigInt => false

  // non-premitive ka retrun typeof -- object hi aata he //
 */