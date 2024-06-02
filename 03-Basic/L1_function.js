/* function basiclly vo concept he jab aapko koi kam jiyada bar 
karna ho to aapko vo kam function ke under likh kar uski compy ko kahi bhi use kar s
sakte he
*/

// ------- basic function ----------- //
function mySayName(){
    console.log('b');
    console.log('h');
    // console.log('a');
    // console.log('r');
    // console.log('a');
    // console.log('t');
}
mySayName();

// ---------- 1st function --------- //
// function ki defination ke under use => parameters
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

addTwoNumber(3,4); // 7
addTwoNumber(3,"4"); // 34
addTwoNumber(3,"a"); // 3a
addTwoNumber(4, null); // 4

let answer = addTwoNumber(4,9); // 13
console.log(answer); // undefined 
// result me value store karane ke liye other type of function declare
  // karna padega and than useko return karna hoga //

  //---------------- 2nd function -----------//
function addTwoNumber1 (number1,number2){
    // function scope
    let result = number1+number2;
    return result;
    /* return ke bad ko bhi chij execute nhi hogi */
}
// console.log(addTwoNumber1(4,4));

const result = addTwoNumber1(4,4); // global scope
console.log("result : ", result);

// ------------ 3rd function ------------------//
function loggedInUserMassege (username){
      // username === undefined some as (!username) //
    if(!username){
        console.log("please enter a username!");
        return
    }
      return `${username} just logged in.`
}

// loggedInUserMassege("bharat kumar");// kuch nhi print 
// console.log(loggedInUserMassege("bharat kumar"))
console.log(loggedInUserMassege());
console.log(loggedInUserMassege("Prajapati")); 
/*function ke parametor me username ki value define karenge to 
    massege me pass kya argument override hoga. => prajapati hi print hoga */


