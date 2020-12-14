$(function() {
	$('ul').before('<p> Just Updated </p>');
    $('li.hot').prepend('+ ');
    var list = '<li> gluten-free soy sauce </li>';
    $('ul li:last').after(list);
	
	

});