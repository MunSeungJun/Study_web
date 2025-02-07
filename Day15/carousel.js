const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")
const pages = document.querySelector("#pager")
const plates = document.querySelector(".plates")

let num = 0

btnNext.addEventListener("click",()=>{
    if ( num >= 2) {
        num =0 
    }else {
        ++num
    }
    pages.innerHTML = `${num + 1} / 3`
    let platesX = -1 * 500 * num
    plates.style.left = `${platesX}px`
})

btnPrev.addEventListener("click", ()=>{
    if ( num <= 0 ){
        num =2
    }else{
        --num
    }
    pages.innerHTML = `${num + 1} / 3`
    let platesX = -1 * 500 * num
    plates.style.left = `${platesX}px`
})