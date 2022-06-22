// // practise questions from chapter2;
let num = 7;
// let squarepattern = "";

// for (let i = 0; i < num; i++) {
  
//     for (let j = 0; j < num; j++) {
//         squarepattern += "*";
       
//     }
//     squarepattern += "\n"
// }
// console.log(squarepattern)

let hollowSquareFunction = ""; 
for (let i = 0 ; i < num ; i ++){
    for( let j = 0 ; j < num ; j++){
        if(i ===0 ||i === num-1){
            hollowSquareFunction += "*"
        } else if(j===0 || j === num-1){
            hollowSquareFunction += "*"
        } else{
            hollowSquareFunction += " "
        }
    
    }
    hollowSquareFunction += "\n";
}
console.log(hollowSquareFunction)
// tringular shape using

let tringleShape = "";
for (let i = 1; i < num ; i ++ ){
    for (let j = 0 ; j < i; j++){
        tringleShape += "*";
         }
    tringleShape += "\n"
}
console.log(tringleShape)

let revTirngle = "";
for ( let i = )