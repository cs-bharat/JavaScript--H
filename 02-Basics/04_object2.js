// +++++++ (object constructors'(singleton)) ++++++++++++ //

const teanderUser1 = new Object(); // singleton
const teanderUser2 = {} // non- singleton

// {} empty object print //
console.log(teanderUser1);
console.log(teanderUser2);

// object nesting is also posibble //

const regularuser ={
    fullnameuser:{
        username:{
            firstname : "vishwa",
            lastname : "patel",
        }
    }
}

console.log(regularuser.fullnameuser.username.firstname);

// merge two object in sinle object //
const obj1 = {1:"a" , 2:"b" ,3:"c"};
const obj2 = {4:"a", 5:"b" , 6:"c"};

// const obj3 = {obj1,obj2}; // not proper way 
const obj3 = Object.assign({} , obj1,obj2); // proper way to merge object 
/*  {} -> optional he but garenty all values combine 
    {} = target memory me empty object ke under - obj1,obj2,obj3 ki value ja rahi he
    {} = eske bad all are source
     Object.assign({target} , source); 
*/
console.log(obj3);

// some as array concept spread operator used //
const obj5 = {1:"a",2:"b" ,3:"c"}
const obj6 = {4:"a" , 5:"b" , 6:"c"}

// spread //
const obj9 = {...obj5 , ...obj6}
console.log(obj9); 


// database to deal than used mostly //
const Users  = {
    id:"123@",
    name:"akash",
    city:"sirohi",
    contact:9999988899,
}

console.log(Object.keys(Users)); // find keys in object - array form me return
console.log(Object.values(Users)); // find vales in object - and array form me return
console.log(Object.entries(Users)); // array - array/ return properties.