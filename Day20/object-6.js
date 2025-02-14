const gameForm = document.querySelector("#game_form")

gameForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const apply = Number(document.querySelector("#apply").value)
    if( apply <= 1) {
        alert("1보다 큰 수를 입력해주세요")
    } else {
        const result = Math.floor((Math.random() * apply) + 1)   
        const winner = document.querySelector("#winner")
        winner.value = result
    }
})