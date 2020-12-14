$(function() {
    var color = 'Color was:rgb(215,102,107)';
    
    
    
    $("ul").append("<p>"+ color + "</p>");
    $('li').each(function() {
        $(this).css({
            "background-color": "#c5a996",
            "border-color": "white",
            "border-width": "1px",
            "border-style": "solid",
            "color": "black",
            "textShadow": "none",
            "font-family": "Georgia"

        });
    })


});