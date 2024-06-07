// high order function ==> ( forEach ) //
const coding = ["js" , "react" , "nextJs" , "Backend" , "UI/Ux"]

// 1st way
coding.forEach( function language(items) {
    //    console.log(items);
})

// 2nd way
coding.forEach( (items) => {
    //  console.log(items);
})

// 3rd way
function print(value){
    // console.log(value);
}
coding.forEach(print);

// rth way 
// multiple parameters bhi forEach loops me pass kar sakte he //
coding.forEach( (values , index , arr) => {
    // console.log(values , index , arr);
})

  //  --------------------------- //
// mostly used  ==> backend me  //
// (array) ke under (object) or uske under (property ) ko access karna he //
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "ReactJs",
        languageFileName : "React"   
    },
    {
         languageName : "NextJs",
        languageFileName : "Next"
    }
]

myCoding.forEach( (accessValue) =>{ 
          console.log(accessValue);
         console.log(accessValue.languageName);
          console.log(accessValue.languageFileName);
})