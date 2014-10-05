
var BASE_URL = "http://localhost:3000"

var Care = {};
var Sticky = {};


$(document).ready(function() {

	Care.init = function() {
		Care.fetchAndDisplayStickies();
		
		var source = $("#sticky-template").html();
		Sticky.fillTemplate = Handlebars.compile(source);

		$("#form").submit(function(e) {
			e.preventDefault();

			var input = $(this).find(".input");
			var message = input.val();
			input.val("");
			var params = {message: message};
			Sticky.create(params).done(function(sticky) {
				Sticky.data.push(sticky);
				Care.appendSticky(sticky);
				debugger
			});
		})
	};

	Care.appendStickies = function(stickies) {
		$.each(stickies, function(i, sticky) {
			Care.appendSticky(sticky);
		});
	};

	Care.appendSticky = function(sticky) {
		var newStickyHtml = Sticky.fillTemplate(sticky);
		$("#stickies").append(newStickyHtml);
	}

	Care.fetchAndDisplayStickies = function() {
		$.ajax({
		  url: BASE_URL + "/wishes",
		}).done(function(data) {
		  	Sticky.data = data;
		  	Care.appendStickies(Sticky.data);
		  });
	};

	Sticky.create = function(params) {
		return $.ajax({
			type: "POST",
			url: BASE_URL + "/wishes",
			data: params
		})
	}

	Care.init();


});
