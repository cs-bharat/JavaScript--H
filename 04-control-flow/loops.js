// for,while,do-while basic loops to same a //
// but (for in) , (for of ) loops to mainly used. in javascript

const arr = [1,2,3,4,5,6]
for(const num of arr){
    //console.log(num);
}


const map  = new Map()
map.set("IN" , "India");
map.set("USA" , "United state of america");
map.set("Fr" , "France");
map.set("IN" , "India"); // map same entry print nhi karta.and order form me hi print karta he

// console.log(map);

// loops in map
   // => array distracting 
for (const [key,value] of map) {
    // console.log(key, ":-" , value);
}

// object per (for-of) loops use nhi kar sakte //
const myObject1 = {
    name:"bharat",
    age:20,
    gender :"👨",
}

// console.log(myObject1);
// for (const [keys,value] of myObject1) {
//     //   console.log(keys , ":-" , value);     => not execute error - myobject1 is not iterable.
// }


// object per loops ke liye ( for-in ) prefer 
 for (const keys in myObject1) {
    //    console.log(keys);
    console.log(`${keys} detailed  in ${myObject1[keys]}`);
}

// array me for in loop
const programming  = ["js" , "next.js" , "backend" , "tailwind"];
for (const key in programming) {
//    console.log(key); // index return karega
   console.log(programming[key]); // value return 
}

//  map per (for in) loops use karenge tab hamare pass koi output print nhi hoga.
const map2  = new Map()
map.set("IN" , "India");
map.set("US" , "united state");

for (const key in map2) {
   console.log(key); // no output 👎
}

