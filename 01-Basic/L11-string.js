const country = 'India'
const state = 'Rajasthan'
console.log(`Hello welcome to ${country} and best state in india is ${state}`)

// another way to create string //
const city  = new String('Udaipur-rajasthan-india')
console.log(city[0]);
console.log(city.length);

// prototypes ke under ki method used //
console.log(city.toUpperCase());
console.log(city.indexOf('p'));


const anotherCity = city.substring(0,7) // last se one latter skip.
console.log(anotherCity);

const anotherCity2 = city.slice(0,4) 
console.log(anotherCity2);

const anotherCity3 = city.slice(-16,-4);// negative value also posible
console.log(anotherCity3);

const newStringCity  = '   space    ' 
console.log(newStringCity);
console.log(newStringCity.trim()); // string  aage or piche ke space ko remove kar deta he

const url = 'https://hitesh.com/bharat%20kumar'
console.log(url.replace('%20' , '-'))
console.log(url.includes("india")); 

// split method 
console.log(city.split("-")); // string ko array me convert