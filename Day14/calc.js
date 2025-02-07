const calcForm = document.querySelector("#calc_form")
const calcResult = document.querySelector("#calc_result")
const btns = document.querySelectorAll("#calc_body input")
let calcString = ""
let calcNumber = []
let calcOper = []
let sum = 0

function numberAdd() {
    sum = Number(calcNumber[0])+Number(calcNumber[1])
    calcNumber.shift()
    calcNumber[0] = `${sum}`
    calcOper.shift()
    
}
function numberSub() {
    sum = Number(calcNumber[0])-Number(calcNumber[1])
    calcNumber.shift()
    calcNumber[0] = `${sum}`
    calcOper.shift()
}
function numberMul() {
    sum = Number(calcNumber[0])*Number(calcNumber[1])
    calcNumber.shift()
    calcNumber[0] = `${sum}`
    calcOper.shift()
}
function numberDiv() {
    sum = Number(calcNumber[0])/Number(calcNumber[1])
    calcNumber.shift()
    calcNumber[0] = `${sum}`
    calcOper.shift()
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.dataset.value != "=") {
            calcString += btn.dataset.value
        }
        calcResult.value = calcString
        if (btn.dataset.value == "+") {
            calcOper.push("+")
        } else if (btn.dataset.value == "-") {
            calcOper.push("-")
        } else if (btn.dataset.value == "*") {
            calcOper.push("*") 
        } else if (btn.dataset.value == "%") {
            calcOper.push("%")
        }
        calcNumber = calcString.split(/\+|\-|\*|\%/)
    })
})

calcForm.addEventListener("submit", (e) => {
    e.preventDefault()
    while( calcOper.length != 0)
    if (calcOper[0] == "+") {
        numberAdd();
    } else if (calcOper[0] == "-") {
        numberSub();
    } else if (calcOper[0] == "*") {
        numberMul();
    } else if (calcOper[0] == "%") {
        numberDiv();
    }
    calcResult.value = sum
})