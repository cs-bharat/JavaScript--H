// object literals or constructors' 
/* 
    1- object literals declared -> singleton nhi hoto he.
    2- object constructors' declared -> singleton hote he.
*/
 
//+++++++++++ (object literals')  ++++++++++++++++//

// symbol declared//
const mysym = Symbol("key1");

// object create //

const JsUser ={
    name: "bharat",
    age : 18,
    isLoggedIn : false,
    location: "shirohi",
    email:"bharat@k8866gmail.com",
    lastLoggedInDay : ['monday','sunday'],
    "full name": "Bharat kumar prajapati",

    // symbol  use and acces in objects //
    [mysym] : "mykey1", // key -> square breket use
}

// access object value.//
console.log(JsUser.name);
console.log(JsUser["name"]); // second way to access value in object (imp-interview)

// full name ki value accesses karni ho tab .//
console.log(JsUser["full name"]); // right way
// console.log(JsUser.full name); // error throw.


console.log(JsUser[mysym]);
// console.log(JsUser);  // mysym=> mykey1 => symbol he

// changess on key value.
JsUser.email = "bharat@google.com"
// Object.freeze(JsUser); // no changes on key values.
// console.log(JsUser);


// greeting //
JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
    console.log(`Hello Js user, ${this.name}`);
}

// console.log(JsUser.greeting); // function(anonymous) only return function reference
console.log(JsUser.greeting()); // undefined
console.log(JsUser.greeting2());
