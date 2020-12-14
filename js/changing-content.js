$(function() {

    $('li#two').text('almonds');
    $("li.hot").each(function() {
        var id = $(this).text();
        $(this).html("<em> " + id + "</em>")
    });
	$('li#one').remove();
	
	

});