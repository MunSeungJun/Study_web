const count = document.querySelector("#count")
const priceSpan = document.querySelector("#price")
const pointSpan = document.querySelector("#point")
const nameSpan = document.querySelector("#name")
const priceTotal = document.querySelector("#price_total")
const mainImg = document.querySelector("#main_img")
const subImgs = document.querySelector("#sub_imgs")
const coffee = {
    name: "에디오피아 게뎁",
    price: 9000,
    img: [
        "https://picsum.photos/id/1/1000/1000",
        "https://picsum.photos/id/19/1000/1000",
        "https://picsum.photos/id/100/1000/1000"
    ]
}

window.addEventListener("DOMContentLoaded", () => {
    nameSpan.innerText = coffee.name
    priceSpan.innerText = coffee.price
    pointSpan.innerText = coffee.price * 0.02
    priceTotal.innerText = coffee.price * count.value
    mainImg.innerHTML = `<img src="${coffee.img[0]}" alt="" class="img-fluid" />`
    subImgs.innerHTML = `<div class="col p-0"><img src="${coffee.img[0]}" alt="" class="img-fluid" />
                        </div>
                        <div class="col p-0"><img src="${coffee.img[1]}" alt="" class="img-fluid" />
                        </div>
                        <div class="col p-0"><img src="${coffee.img[2]}" alt="" class="img-fluid" />
                        </div>`
                        
    const subImg = document.querySelectorAll("#sub_imgs > div > img")
    // const imgs =  [...subImg]
    // imgs.unshift(document.querySelector("#main_img img"))
    subImg.forEach((v, k) => {
        v.addEventListener("mouseover", () => {
            // let temp = document.querySelector("#main_img img").src
            document.querySelector("#main_img img").src = subImg[k].src
            // imgs[k].src = temp
        })
    })
})

count.addEventListener("change", () => {
    pointSpan.innerText = coffee.price * 0.02 * count.value

    let real_price = price * count.value
    priceSpan.innerText = real_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})

const myModal = document.querySelector('#exampleModal')
myModal.addEventListener('show.bs.modal', () => {
    document.querySelector("#item_name").innerText = coffee.name
    document.querySelector("#item_price").innerText = coffee.price
    document.querySelector("#item_count").innerText = count.value

    let real_price = coffee.price * count.value
    document.querySelector("#item_price_total").innerText = real_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

})