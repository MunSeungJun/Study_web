const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const plate = document.querySelector("#plate")
const greenPlate = document.querySelector("#green_plate")
const orangePlate = document.querySelector("#orange_plate")
const purplePlate = document.querySelector("#purple_plate")

function chageColor(color) {
    plate.style.backgroundColor = `${color}`
}

btn1.addEventListener("click", () => {
    greenPlate.classList.add("top")    
    orangePlate.classList.remove("top")
    purplePlate.classList.remove("top")
})
btn2.addEventListener("click", ()=>{
    orangePlate.classList.add("top")
    greenPlate.classList.remove("top")
    purplePlate.classList.remove("top")
})
btn3.addEventListener("click", ()=>{
    purplePlate.classList.add("top")
    orangePlate.classList.remove("top")
    greenPlate.classList.remove("top")
})
