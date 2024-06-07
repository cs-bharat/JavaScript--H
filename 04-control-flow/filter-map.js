const coding  = ['js' , 'react' , 'nextJs' , 'Backend' , 'tailwind'];

// forEach loop koi bhi values return nhi karta he // 
const storValues = coding.forEach( (items) => {
    // console.log(items);
    return items 
})
// console.log(storValues); // undefined

const mynums  = [1,2,3,4,5,6,7,8,9,10];

// const storeNum =  mynums.filter( (number) => number>5)

const storeNum = mynums.filter((number) => {
    // number>5 // empty array aayga
    // scopre {} start kar diya he to (return) likhna hi padega
    return number>5
})
console.log(storeNum); // [6,7,8,9,10]


// some work ko forEach se karna he jo ki return kuch bhi nhi karta tab.
const storeNum2 = []
mynums.forEach( (number) => {
     if(number > 5){
        storeNum2.push(number); // [6,7,8,9,10]
     }

})
console.log(storeNum2);

