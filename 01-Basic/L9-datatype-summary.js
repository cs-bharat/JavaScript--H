/* data ko memory me kese rakna  jata he or access kiya jata he 
   us bases per data ka two part me divided he
    1-premitive , 2- non premitive */

 /* primitive 7 type he all (call by value) passes hote he
    memory me reference allocated nhi hota */   
 // number,string,boolean,null undefined,symbol,BigInt

 const score = 100
 const scoreValue = 100.2
 const Id = symbol('123')
 const anotherId = symbol('123')
 console.log(Id === anotherId); // false

 const bigInt = 23434254544n
 const isTemp = null
 const isLoggedIn = false;

 let userEmail;



 /* non primitive (reference) memory me reference allocated . */

 