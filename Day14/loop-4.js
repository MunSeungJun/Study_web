//break

// let select = prompt("입력하세요")

// switch(select){
//     case "a": document.write("오소리");
//     break;
//     case "w": document.write("부엉이");
//     break;
//     case "d": document.write("강아지");
//     default: alert("입력 오류")
//     // location.reload()
// }
// console.dir(window)

while (true) {
    let select = prompt("무엇을 하시겠습니까")
    if (select == "i") {
        let math = Number(prompt("수학점수는?"))
        let eng = Number(prompt("영어점수는?"))
        let kor = Number(prompt("국어점수는?"))
        let average = parseInt((math + eng + kor) / 3)

        if (average >= 91) {
            alert(`<p>a학점 입니다</p>`)
        } else if (average >= 81 && average < 91) {
            alert(`<p>b학점 입니다</p>`)
        } else if (average >= 71 && average < 81) {
            alert(`<p>c학점 입니다</p>`)
        } else {
            alert(`<p>d학점 입니다</p>`)
        }
    } else if ( select == "q") {
        alert("프로그램 종료");
        break;
    } else {
        alert("제대로 입력해주세요")
    }
}



