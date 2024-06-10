let score = NaN
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/* conversions operations /
// "41" ==> 41
// "41abc" => NaN
// true => 1 , false ==> 0
// undefine => NaN
// NaN => NaN , but (typeof = Number)
*/


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
  1 => true, 0=>false 
  "" => false
  "bharat" => true
*/

let someNumber = 4
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

/*
  4 => 4 ,, typeof => string
 */

// ************************operations*********************
let value = 3
let negValues = -value
console.log(negValues);

// console.log(4%3)
// +,-,*,/,** all are operations //