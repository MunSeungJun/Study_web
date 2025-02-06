let calcForm = document.querySelector("#calc_form")
let memNum = document.querySelector("#mem_num")
let colNum = document.querySelector("#col_num")
let resultArticle = document.querySelector("#result_article")
let result = document.querySelector("#result")
let count = 0
let rows = 0
let htmlTags = ""
window.addEventListener("DOMContentLoaded", () =>{
    calcForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (memNum.value != "" && colNum.value != "") {
            if(memNum.value % colNum.value ===0){
                rows = memNum.value / colNum.value
            } else {
                rows = parseInt(memNum.value / colNum.value) + 1
            }
        } else {
            alert("숫자를 입력하세요")
            memNum.focus();
        }
        if( memNum.value % colNum.value == 0) {
            for(let i = 1; i <= rows; i++){
                // htmlTags += `<div class = d-flex>`
                for(let j = 1; j <= colNum.value; j++){
                    count++
                    htmlTags += `<div class="box text-center"> ${count}</div>`
                }
                // htmlTags += `</div>`
            }
        } else {
            for(let i = 1; i <= rows; i++){
                // htmlTags += `<div class = d-flex>`
                if(i != rows){
                    for(let j = 1; j <= colNum.value; j++){
                        count++
                        htmlTags += `<div class="box text-center"> ${count}</div>`
                    }
                } else {
                    for(let j = 1; j <= memNum.value % colNum.value ; j++){
                        count++
                        htmlTags += `<div class="box text-center"> ${count}</div>`
                }

                }
                // htmlTags += `</div>`
            }

        }
        result.innerHTML = htmlTags
        result.style.gridTemplateColumns = `repeat(${colNum.value}, 5rem)`
        resultArticle.classList.remove("d-none")
    })
})

calcForm.addEventListener("reset", ()=> {
    htmlTags = ""
    result.innerHTML = htmlTags
    count = 0
    resultArticle.classList.add("d-none")
    memNum.focus()
})