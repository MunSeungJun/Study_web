let now = new Date()

let year = now.getFullYear()
let month = now.getMonth() + 1;
let date = now.getDate()
let day = ""
switch(now.getDay()){
    case 0 : day = "일"
    break; 
    case 1 : day = "월"
    break; 
    case 2 : day = "화"
    break; 
    case 3 : day = "수"
    break; 
    case 4 : day = "목"
    break; 
    case 5 : day = "금"
    break; 
    case 6 : day = "토"
    break; 
}
let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()

console.log(year ,typeof year)
console.log(`오늘은 ${year}년 ${month}월 ${date}일 ${day}요일 ${hour}시 ${minute}분 ${second}초 입니다`)