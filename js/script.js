
$('.check-box').click(function() {
	if( !($(this).children().is(':visible')) ){
		$(this).children().css({display: 'block'});
	}
	else {
		$(this).children().css({display: 'none'});
	}
});	

$('#chk').click(function() {
	if( !($(this).children().is(':visible')) ){
		$(this).children().css({display: 'block'});
	}
	else {
		$(this).children().css({display: 'none'});
	}
});

$('#chk').click(function() {
	if( $(this).children().is(':visible') ){
		$(this).children().css({display: 'block'});
	}
	else {
		$(this).children().css({display: 'none'});
	}
});

//increment / decrement
$('.minus').click(function() {
	var txt = $(this).next('.tiv').text();
	if(txt != 0)
		$(this).next('.tiv').text(txt-1);
});

$('.plus').click(function() {
	var txt = $(this).prev('.tiv').text();
		$(this).prev('.tiv').text(Number(txt)+1);
});
