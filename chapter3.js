// //function as values
// let safeMode = true;
// let launchMissle = function(){
//     console.log("launch misslie System" ,future())
// };
// if(3-2 ==5  || safeMode){
//     launchMissle = function(){
//         console.log("this value is defined as the value is " ,future()) 

//     }
// }

// launchMissle()

// //Declare Notation
// console.log("the futur us" , future())

// function  future(){
//     return "i m goona be the best version of my coding self"
// }
// // arrow function

// // // the call stack  can run so commented
// // function egg(){
// //    // return chicken()
// // }
// // function chicken(){
// //     //return egg()
// // }
// // //console.log(egg()+ "who came first")

// // optional arugment

// function minus( a,b){
//     if( b ==undefined) return -a;
//     else return a-b;
// }
// console.log(minus(6,4))

// function power (base , expomnent = 2){
//     let result = 1;
//     for(let count = 0 ;count < expomnent ; count ++) {
//        result *= base;
//     }
//     return  result;
// }

// console.log(power( 7,10)) 


// function weekOfDay(today , tomorrow = 2){
//     let day = "sunday";
//     if(tomorrow === undefined){
//         return "value is not defined"
//     } else{
//         return  today = tomorrow;
//     }
// }
// console.log(weekOfDay("tuesday"))

// // closure
// // the ability to treat function as values are called as closures

// function multipleValue(n){

//     return  localVariable =>localVariable*n;
// }

// let value1 = multipleValue(3)
// console.log(value1(10))

// function multiplier(factor){
//     return number => number*factor;
// }

// let newValue = multiplier(2)
// console.log(newValue(5))
// // recursion
// //recursion the fucntion which keep callimg it self for multiple number of time are called as recursion function;

// function power1 (base ,exponment){
//     if(exponment == 0){
//         return 1
//     }else{
//         return base *power1(base ,exponment-1)
//     }
// }
// console.log(power1(4,3))
// // its basically goes from bottom where (5,0) = 1 then (5,1) =5  then (5,2) = 25 , (5,3)= 125
// //*** Running through a simple loop is generally cheaper than calling a function multiple times.

// function  countTheNumber(num){
//     console.log(num);
//     // decrsing the number
//     var newNumber = num-1;
//     if(newNumber > 0){
//         countTheNumber(newNumber)
//     }
// }

// console.log(countTheNumber(10))
// // for loop for pritning the solution numbers in the loop
// function count(num){
//     for(let i = num; i >= 1; i--){
//         console.log(i)
//     }


// }
// console.log(count(5))



// Chapter practise on other topics
// array Loops insted of for loop
let journal = ["ththht", "(rjhhh)", "love", "the tortose", "camel"]
for (let entry in journal) {
   // console.log(`${entry}`)
}

// let library = [
//     { books: ["fiftyshades", "the vertices", "the Numan", "fifty shades of freak"] ,author:"Emma"},
//     { books: ["started with frnds req", "password of my life", "the love", "fifty shades of freak"] ,author:"Ravinder singh"},
//     { story: ["godan", "Dhahej", "idgaha", "aprhan"] ,author:" premChnad"}
// ]

// function authorName(bookname){
//     for(let i = 0; i <library.length ; i++){
//         let entry = library[i] , index=0;
//         if(entry.books.includes(bookname)){
//             console.log(bookname)
//         }
//     }

// }

authorName()

