const marval_heros = ['spyderman' , 'irenMan' , 'superman' , 'hmbur']
const dc_heros = ['shaktiman' ,'balveer' , 'batman' , 'flignGat']

// console.log(marval_heros.push(dc_heros));

const all_heros = marval_heros.concat(dc_heros);
console.log(all_heros);

const all_new_heros = [...marval_heros , ...dc_heros] // spread method (felna)
console.log(all_new_heros); // both array in single array includes.


const another_array =[1,2,3,[5,6] ,6,5[4,3,5] ,[6,3],3]; 
const all_another_array = another_array.flat(Infinity); //depth dete he no me
console.log(all_another_array);

// flat() ,spread() , (isArray() , from() , of() => string ko array me convert ).

let scores1 = 100;
let scores2 = 200;
let scores3 = 300;

console.log(Array.of(scores1,scores2,scores3));

console.log(Array.from("hitesh")); // convert array
console.log(Array.from({name:"bharat"})); // empty

