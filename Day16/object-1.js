// 1 객체 리터럴 : {}

const car = {
    maker: "현대",
    model: "그랜저",
    year: 2024,
    color: "흰색",
    cc: 2000,
    keyon: ()=>{
        console.log("시동을 겁니다")
    },
    keyoff: ()=>{
        console.log("시동을 끕니다")
    }
}

const user = {}

user.name = "홍길동"
user.age = 24
user.address = "광주광역시"
user.cart = () => {
    console.log("장바구니 이동")
}

// 2 생성자 : new Object()

const smartphone = new Object({
    brand: "android",
    model: ["S25", "S25 FE"],
    price: {
        max: 150,
        min: 144
    },
    call: () => {
        console.log("전화")
    }
})


