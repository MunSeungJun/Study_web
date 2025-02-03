let adBtn = document.querySelector("#adbtn")
let hideBtn = document.querySelector("#hidebtn")
let modal = document.querySelector("#ad")
adBtn.addEventListener("click", function() {
    modal.style.display = "block"
})
hideBtn.addEventListener("click", () => {
    modal.style.display = "none"
})