const ddayForm = document.querySelector("#d_day_form")
const now = new Date()
const toNow = now.getTime()
let dday = 0



ddayForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    const inputDate = document.querySelector("#input_date").value
    const inputValue =  inputDate ? new Date(inputDate) : ""
    if ( inputValue == ""){
        alert("날짜를 입력해주세요")
    } else {
        dday = Math.round((inputValue.getTime() - toNow) / (1000*60*60*24))
        alert(`D-${dday}일 남았습니다`)
     }
})