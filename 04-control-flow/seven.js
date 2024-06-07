const myNumber = [1,2,3,4,5,6,7,8,9,10];
// const newNums =  myNumber.map( (num) => num+10);

const newNums =  myNumber
// chenning of map //
                 .map((num) => num*10)
                 .map((num) => num + 2)
                 .filter((num) => num>34)
               
// console.log(newNums);


const number = [1,2,3,4,5]

const numTotal  = number.reduce( function (accumulator , currValue) {
 //   console.log(`accumulator : ${accumulator} , currValue:${currValue}`);
    return accumulator + currValue;
},0) // 0 is initial value to store accumulator me


//// ------------------- both are some ------------------- //
const number2 = [2,3,4,5]
const numTotal2  = number2.reduce( (accu , currValue) => accu + currValue ,0)
console.log(numTotal2);

//  real life me -- reduce ka used => shopping 🛒 cart ke liye karte he.//