var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var scrollToBottom = function() {
	$('html, body').animate({
	  scrollTop: $(document).height()
	}, 'slow');
}
