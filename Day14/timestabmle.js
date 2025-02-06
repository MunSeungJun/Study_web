// break 문으로 구구단 4단까지만 출력하기
let select = prompt("몇단까지 출력할까요")
let gugu = document.querySelector("#gugu")
let sum = 0
let gu = ""
for(let i = 2; i < 10; i++){
    gu += `<div class="box p-2">`
    for(let j = 1; j < 10; j++){
        sum += i * j
        gu += `${i} * ${j} = ${i * j} <br>`
    }
    gu += `<p class="mb-2">--------------</p>${i}단 총합은 ${sum}<p class="mt-1">--------------</p></div>`
    if( i == select) {
        break;
    }
}
gugu.innerHTML = gu