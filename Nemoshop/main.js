const inputId = document.querySelector(".input_id");
        const userId = inputId.querySelector("#user_id")
        const idLabel = inputId.querySelector(".id_label")
        
        userId.addEventListener("focus", () => {
            idLabel.style.fontSize = "0.5rem";
            idLabel.style.marginTop = "0.5rem";
            userId.style.borderColor = "rgb(3, 199, 90)";
        })
        userId.addEventListener("blur", () => {
            idLabel.style.fontSize = "1rem";
            idLabel.style.marginTop = "1.25rem";
            userId.style.borderColor = "#666";
        })
        
        const inputPw = document.querySelector(".input_pw");
        const userPw = inputPw.querySelector("#user_pw")
        const pwLabel = inputPw.querySelector(".pw_label")
        
        userPw.addEventListener("focus", () => {
            pwLabel.style.fontSize = "0.5rem";
            pwLabel.style.marginTop = "0.5rem";
            userPw.style.borderColor = "rgb(3, 199, 90)";
        })
        userPw.addEventListener("blur", () => {
            pwLabel.style.fontSize = "1rem";
            pwLabel.style.marginTop = "1.25rem";
            userPw.style.borderColor = "#666";
        })