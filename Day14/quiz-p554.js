let quizForm = document.querySelector("#quiz_form")
let userInput = document.querySelector("#user_input")
let result = document.querySelector("#result")
let htmlTag = ""
let count = 0
quizForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    for(let i = 1; i <= userInput.value; i++){
        if( i % 3 == 0) {
            htmlTag += `${i}, `
            count++
        } else {
            continue;
        }
    }
    result.innerHTML = `<div>${htmlTag}</div>`
    result.innerHTML += `<div>${userInput.value}까지 3의 배수의 개수는 ${count}</div>
    <button type="button" id="close_btn">닫기</button>`
    result.classList.remove("d-none")
    
    let closeBtn = document.querySelector("#close_btn")
    closeBtn.addEventListener("click",()=>{
        result.classList.add("d-none")
        htmlTag = ""
        count = 0
        userInput.value = ""
        userInput.focus()
    })
})