
var BASE_URL = "http://localhost:3000"
var Care = {}

$(document).ready(function() {

	Care.init = function() {
		Care.loadStickies();
		// Care.generateStickies();
	}

	Care.loadStickies = function() {
		Care.Stickies =

		$.ajax({
		  url: BASE_URL + "/wishes",
		})
		  .done(function( data ) {
		  	Care.Cares = data;
		  });
	}


	Care.init();


});

