// for loop

let sum = 0
let numBer = parseInt(prompt("몇까지 더할까요?"))

for(i = 1; i < numBer+1 ;i ++) {
    if(i % 3 === 0){
        document.write(`<span class="red">${i}</span><br>`)
        
    } else {
        document.write(`${i} <br>`)
    }
    sum += i
}
document.write(`<h2>1~${numBer}까지의 합은 ${sum}입니다</h2>`)