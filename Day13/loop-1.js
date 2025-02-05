// for loop

let sum = 0
let numBer = parseInt(prompt("몇까지 더할까요?"))

for(i = 1; i < numBer+1 ;i ++) {
    sum += i
}
document.write(`<h2>1~${numBer}까지의 합은 ${sum}입니다</h2>`)