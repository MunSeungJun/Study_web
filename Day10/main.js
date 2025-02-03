const heading = document.querySelector("#heading")
// heading.onclick = function(){
//     asdasd           
// } 이벤트 핸들러 방식 > 한번에 한개씩만 처리 가능한 단점
heading.addEventListener("click", () => {
    heading.style.color = "red"
})