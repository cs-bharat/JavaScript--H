let myname = 'bharat   ';
// console.log(myname.trueLength);
console.log(myname.trim().length) // original length of string is printed.


//  -------------------------------------//

let myArray = [ 'hammar' , 'spider ' , 'saktiman'];
const superPower = {
    thor : "hammar",
    spider : "fly",
    saktiman : "speed in running",
}

// uper declared object me (method ko add karna he (custom method)..) //
// object ko hi power de-di hamne ki (addName ke usme method)//
// array,string,function  = (object) =  ---> null 
Object.prototype.addName = function(){
    console.log(`addName is present in all object sabhi ke pass power he  ... `);
}

// ---------------------------//
superPower.addName();
myArray.addName();

Array.prototype.hayBharat = function(){
    console.log(`hay bharat ye power only array ke pass hi he na ki dusro ke pass`);
}

myArray.hayBharat();
// superPower.hayBharat(); // error 


// ------ string prototype ------ //
let anotherUserName = "chaiorcode  "; 
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}


anotherUserName.trueLength();
// all string ke liye uper ka function run hoga or string ki actual length dega
"Bharat Prajapati".trueLength();


// __proto__ , ya fir (Object.setPrototypeOf(first,second)) ,,
// this syntax is prototype inheritance ,, he. //

/* multiple object create karo
   or ,, 1 object ki properties, 2nd object used kare ..
     (__proto__) ke throw..,, vahi he prototype inheritance ..
*/