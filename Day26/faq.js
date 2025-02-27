$(document).ready(()=>{
    $(".answer").hide()
    $(".question button").on("click",(e)=>{
        $(e.target).parent().siblings().slideToggle("fast")
    })
})