$(document).ready(() => {
    $(".sample_text").css("color", "red")
    $(".sample_text").css({
        "border-left": "3px solid #666",
        "padding-left": "5px",
        "font-weight": "bold",
        "font-size": "20px"
    })

    // console.log($(".sample_text").css("color"));

    let htmlStrings = $("div.demo-container").html("<p>All new content. <em>You bet!</em></p>");
    // console.log(htmlStrings);

    const search = $("#search").val("퇴물")
    // console.log(search);

    $("[type=submit").on("click dbclick", function(e){
        e.preventDefault()
        // console.log(e.type);
    })
    
    $(window).on("keydown", function(e){
        console.log(e.type)
    })

    $("#pop_up").hide()
    $("#btn").on("click", ()=>{
        $("#pop_up").show("fast").fadeOut()
    })


})