const colors = ["yellow", "green", "red", "blue", "orange"]
const colorIndex = 0

$(document).ready(function(){
    $("#box_wrap li").on("click", (e)=>{
        const selectColor = $(e.target).css("background-color")
        console.log(toString(selectColor));
        
        $("body").css({"background-color":selectColor})
    })
    
   
})