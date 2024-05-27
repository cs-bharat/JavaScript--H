const myArry = [0,1,2,3,4,5];
// console.log(myArry);


const myArray = new Array(1,2,3,4,5) // other way to create array

// myArry.push(6);
// myArray.pop();
// myArray.unshift(9); // array me first index per add 

// myArray.shift();
// console.log(myArray); // first index se shift (hoga) remove element


// includes(true,false return),indexOf(element ka index return) two method in array.

const newArry =  myArry.join() // convert array=> string me 
// console.log(newArry);


//-------- slice and splice me difference
   // both last index ko include nhi karte . ------- //

console.log("A " , myArry);
const myN1 = myArry.slice(0,3); // original array no changed. 3 elemnet remove.
console.log(myN1);
console.log("B " , myArry);

const myN2 = myArry.splice(0,3); // original array ko manupulate karta he. 3 element remove.
console.log(myN2);
console.log("C" , myArry); 
