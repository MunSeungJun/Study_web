let calcForm = document.querySelector("#calc_form")
let memNum = document.querySelector("#mem_num")
let colNum = document.querySelector("#col_num")
let resultArticle = document.querySelector("#result_article")
let result = document.querySelector("#result")
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
        for(let i = 1; i <= rows; i++){
            // htmlTags += `<div class = d-flex>`
            for(let j = 1; j <= colNum.value; j++){
                htmlTags += `<div class="box">${i}-${j}</div>`
            }
            htmlTags += `</div>`
        }
        result.innerHTML = htmlTags
        result.style.gridTemplateColumns = `repeat(${colNum.value}, 65px)`
        resultArticle.classList.remove("d-none")
    })
})