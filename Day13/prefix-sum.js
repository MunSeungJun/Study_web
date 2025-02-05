const prefixSumForm = document.querySelector("#prefix_sum_form")
let userInput = document.querySelector("#user_input")
let result = document.querySelector("#result")
let sum = 0
prefixSumForm.addEventListener("submit", function(e){
    e.preventDefault()
    for( i = 1; i < Number(userInput.value)+1; i++){
        sum += i
    }
    result.value = sum
    // result.classList.add("d-none")
})