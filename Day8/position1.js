const closeBtn = document.querySelector("#close_btn")
        const popup = document.getElementById("popup")
        closeBtn.addEventListener("click", function() {
            popup.style.display = "none"
        })
        const topBtn = document.querySelector("#go_top")
        topBtn.addEventListener("click", () =>{
            window.scrollTo({
                top:0,
                behavior: "smooth"
            })
        })