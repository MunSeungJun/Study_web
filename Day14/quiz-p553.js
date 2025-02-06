let quizForm = document.querySelector("#quiz_form")
let userInput = document.querySelector("#user_input")
let result = document.querySelector("#result")

quizForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(userInput.value % 4 == 0){
        result.value = "맞아"
    } else {
        result.value = "아니야"
    }
})