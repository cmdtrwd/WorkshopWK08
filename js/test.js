$(document).ready(function(){
    $("#title").click(function(){
        $(this).html("Hello Bank");
    });
});

$(document).ready(function(){   
    $(".button").click(function(){
        $("#title").css({"backgroundColor": "blue", "color": "white"});
    });
});