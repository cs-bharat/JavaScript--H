// interview //
//------------1---------//
function calculateCartPrice1(num1){
    return num1;
}
console.log(calculateCartPrice1(400,300,220)); // 400

// ----------2----------//

function calculateCartPrice2(...num2){ // (rest(array me packed)/spread)
    return num2;
}
console.log(calculateCartPrice2(499,399,299,99)); // all return

//-----------3-------------//
function calculateCartPrice3(val1 , val2 , val3, ...num3){ // (rest(array me packed)/spread)
    return num3;
}
console.log(calculateCartPrice3(321,721,456,777,454)); // [777,454]


// ----- object ko function me kese passe karte he ---//
const userObject = {
    name: "Prajapati kumar",
    cource : "Frontend",
    price : 899, // prices ho to undefine hoga
} 

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and cource is ${anyObject.cource} and price ${anyObject.price}`);
}
handleObject(userObject); // complate userObject bhi pass kar sakte he

// ---------- array ko function me kese passe karte he ------ // 
const myNewArray = [200,300,400,500];
function handleArray(anyArray){
    return anyArray[1];
}
console.log(handleArray(myNewArray));