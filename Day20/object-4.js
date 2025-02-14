let now = new Date()
let firstDay = new Date("2025-01-01")

let toNow = now.getTime()
let toFirst = firstDay.getTime()

let passedTime = toNow -toFirst

let passedDay = Math.round(passedTime / (1000*60*60*24))
document.querySelector("#result").innerHTML = passedDay