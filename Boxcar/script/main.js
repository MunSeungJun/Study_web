window.addEventListener("DOMContentLoaded",()=>{
    const sideBar = document.querySelector("#side_bar")
    const compare = document.querySelector(".compare")
    const nowcountSpan = document.querySelector("#now_count")
    const closeBtn = document.querySelector("#close_btn")
    const sidebarList = document.querySelector(".side_bar_list")
    let side_bar_item = ""
    const bookmark = document.querySelectorAll(".bookmark")
    const prevBtn = document.querySelector("#prev_btn")
    const nextBtn = document.querySelector("#next_btn")
    const countSpan = document.querySelector(".count")
    const popularCarTabsItem = document.querySelectorAll(".popular_car_tabs_item")
    let nowCount = 0
    let count = 1
    let index = 0


    compare.addEventListener("click",()=>{
        sideBar.classList.add("visible")
    })
    closeBtn.addEventListener("click",()=>{
        sideBar.classList.remove("visible")
    })

    bookmark.forEach((v, i)=>{
        v.addEventListener("click",()=>{
            if( nowCount != 5){
                let src = v.nextSibling.nextSibling.src
                if( v.classList.contains("bookmark_add") != true ){
                    v.classList.add("bookmark_add")
                    nowCount++
                    nowcountSpan.innerText = nowCount
                    side_bar_item += `
                    <li id="side_bar_img_id_${i}"><img src="${src}"></img></li>
                    `
                    sidebarList.innerHTML = side_bar_item

                } else{
                    v.classList.remove("bookmark_add")
                    nowCount--
                    nowcountSpan.innerText = nowCount
                }
            } else {
                alert("더 이상 추가할 수 없습니다")
            }
        })
    })

    prevBtn.addEventListener("click",()=>{
        if(count == 1){
            count = 4
        } else {
            count--
        }
        countSpan.innerText = count
        popularCarTabsItem.forEach((v)=>{
            v.classList.remove("active")
            if(v.dataset.index == count - 1){
                v.classList.add("active")
            }
        })
        

    })
    nextBtn.addEventListener("click",()=>{
        if(count == 4){
            count = 1
        } else {
            count++
        }
        countSpan.innerText = count
        popularCarTabsItem.forEach((v)=>{
            v.classList.remove("active")
            if(v.dataset.index == count - 1){
                v.classList.add("active")
            }
        })
    })
})