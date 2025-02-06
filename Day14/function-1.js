// 1. 함수 선언식

// 2. 익명 함수 

// welcome()
// let welcome = function() {
//     alert("웰컴")
// }

// 3. 화살표 함수

// const addNumber = (a, b) => {
//     alert(a + b)
// }

let num1 = 0;
let num2 = 0;
const inputNumber = () => {
    num1 = Number(prompt("첫번째 숫자"));
    num2 = Number(prompt("두번째 숫자"));
}

const addNumber = (a, b) => {
    inputNumber();
    alert(`${a + b}`); 
}
const subNumber = (a, b) => {
    inputNumber()
    alert(`${a - b}`);
}
const mulNumber = (a, b) => {
    inputNumber()
    alert(`${a * b}`);
}
const divNumber = (a, b) => {
    inputNumber()
    alert(`${parseInt(a / b)}`); 
}

while(true) {
    let select = prompt("동작을 선택하십쇼")
    if ( select == "a") {
        addNumber()
    } else if ( select == "s") {
        subNumber()
    } else if ( select == "m") {
        mulNumberNumber()
    } else if ( select == "d") {
        divNumber()
    } else {
        alert("제대로 입력하세요")
    }
}
