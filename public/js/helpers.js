(function(App) {

	App.Helpers = {};
	App.ArrayHelpers = {};

	App.scrollToBottom = function() {
		$('html, body').animate({
		  scrollTop: $(document).height()
		}, 'slow');
	}

	App.Helpers.random = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	App.ArrayHelpers.shuffle = function(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}


})(window.App = window.App || {});