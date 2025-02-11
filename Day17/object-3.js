// Array()

let numbers = ["one", "two", "three", "four"]

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

// Array() 메소드

// 1. concat()
let nums = [1, 2, 3]
let chars = ['a', 'b', 'c']
let result = chars.concat(chars)
console.log(result)

// 2. join()
let string1 = nums.join('-')
let string2 = chars.join('/')
console.log(string1, typeof string1)
console.log(string2, typeof string2)

// 3. push(), unshift()
nums.push(chars[0])
nums.unshift(chars[1])
console.log(nums, typeof nums)

// 4. pop(), shift()
let pop1 = chars.pop()
let shift1 = chars.shift()
console.log(chars, typeof chars)
console.log(pop1, typeof pop1)
console.log(shift1, typeof shift1)

// 5. splice()
let study = ["html", 'css', 'javascript', 'jquery', 'nodejs']
let js = study.splice(1, 1)
console.log(`반환값 ${js}`);
console.log(`원본 ${study}`)

// 6. slice()
let colors = ['red', 'green', 'blue', 'white', 'black']
color = colors.slice(1, 2)
console.log(`슬라이스${color}`)
console.log(`원본${colors}`)

// 7. every()
let array1 = [1, 30, 39, 29, 10, 13];

const isBelowThreshold = (value) => {
    return value < 40
}
console.log(array1.every(isBelowThreshold))

// 8. filter() 
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const filtering = words.filter((word) => word.length > 6);
console.log(filtering);

// 9. foreach()
const array2 = ['a', 'b', 'c'];
array2.forEach((element) => console.log(element));

// 10. indexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));

// 11. reverse()
const array3 = ['one', 'two', 'three'];
console.log('array3:', array3);

const reversed = array3.reverse();
console.log('reversed:', reversed);

console.log('array3:', array3);

// 12. sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

// 13. toString()
const array4 = [1, 2, 'a', '1a'];

console.log(array4.toString());