// stack and heap memory //
// primitive - stack memory milti he by pass value //
let myYoutubeName = 'bharatprajapati'
let anotherYoutubeName = myYoutubeName // by passe value

anotherYoutubeName = 'viswapatel' // changed
console.log(myYoutubeName);
console.log(anotherYoutubeName);


// non-primitive - heap memory used karta he by reference //
let userOne = {
    id : "userone@12google.com",
    upi : "userone@ubi"
}

let userTwo = userOne

userTwo.id = 'userTwo@23facebook.com'
console.log(userOne.id);
console.log(userTwo.id);