const calcForm = document.querySelector("#calc_form")
const result = document.querySelector("#calc_result")
const btns = document.querySelectorAll("#calc_body input")
let calc = ""
let btnId = ""

calcForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(result)
    for(let btn of btns){
        btnId = btn.id
        console.log(btnId)
    }
    // btnId.addEventListener("click",()=>{
    //     calc += btn.value
    // })
    result.innerHTML = calc
    // console.log(calc)
})