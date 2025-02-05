let memNum = prompt("입장객은 몇 명인가요?")
        let colNum = prompt("한줄에 몇 명씩?")
        let rowNum = 0
        if (memNum % colNum === 0) {
            rowNum = memNum / colNum
        } else {
            rowNum = parseInt(memNum / colNum) + 1
        }
        document.write(`<h2>필요한 줄은 ${rowNum}입니다</h2>`)