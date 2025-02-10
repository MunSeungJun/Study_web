// let sum = 0

// function sumMulti(userInput1,userInput2){
//     if( userInput1 == userInput2) {
//         sum = userInput1 * userInput2
//     } else {
//         sum = userInput1 + userInput2
//     }
//     return sum
// }

// console.log(sumMulti(5,10))

let num1 = Number(prompt("첫번째"))
let num2 = Number(prompt("두번째"))

function valueCheck() {
    if(num1 > num2){
        value = num1
    } else {
        value = num2
    }
    return value
}

alert(valueCheck())