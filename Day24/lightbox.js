const pics = document.querySelectorAll(".pic")
const lightboxImage = document.querySelector(".lightbox-image")
const modal = document.querySelector("#modal")
const closeBtn = document.querySelector("#close_btn")
const prevBtn = document.querySelector("#prev_btn")
const nextvBtn = document.querySelector("#next_btn")

const bigImages = [
    {
        src: "images/big-image1.png",
        title: "title1",
        text: "text1"
    },
    {
        src: "images/big-image2.png",
        title: "title2",
        text: "text2"
    },
    {
        src: "images/big-image3.png",
        title: "title3",
        text: "text3"
    },
    {
        src: "images/big-image4.png",
        title: "title4",
        text: "text4"
    },
    {
        src: "images/big-image5.png",
        title: "title5",
        text: "text5"
    },
    {
        src: "images/big-image6.png",
        title: "title6",
        text: "text6"
    }
  ];

let imageIndex = 0
pics.forEach( (pic, i) =>{
    pic.addEventListener("click", ()=>{
        lightboxImage.src = pic.dataset.src
        imageIndex = i
        modal.classList.remove("d-none")
    })
})

closeBtn.addEventListener("click", ()=>{
    modal.classList.add("d-none")
})

prevBtn.addEventListener("click",()=>{
    if(imageIndex == 0) {
        imageIndex = bigImages.length - 1
    } else {
        imageIndex--
    }
    lightboxImage.src = bigImages[imageIndex].src
})