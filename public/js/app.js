var BASE_URL = window.location.origin

var App = {};

App.init = function() {
	var source = $("#sticky-template").html();
	Sticky.fillTemplate = Handlebars.compile(source);

	App.loadStickies();
	App.listenForNewStickes();
};


App.appendSticky = function(sticky) {
	var newStickyHtml = Sticky.fillTemplate(sticky);
	$("#stickies").append(newStickyHtml);
	
	// Offset Sticky Note
	var marginOffset = 100;
	$("#stickies .sticky:last-child").last()
		.rotate(random(-5, 5))
		.css("margin-right", random(-1 * marginOffset, marginOffset))
		.css("margin-top", random(-1 * marginOffset, marginOffset));
}

App.appendStickies = function(stickies) {
	$.each(stickies, function(i, sticky) {
		App.appendSticky(sticky);
	});
};

App.loadStickies = function() {
	Sticky.fetchAll().done(function(stickies){
		App.appendStickies(stickies);
	})
}

App.listenForNewStickes = function() {
	$("#form").submit(function(e) {
		e.preventDefault();

		var input = $(this).find(".input");
		var message = input.val();
		input.val("");

		var params = {message: message};
		Sticky.create(params).done(function(sticky) {
			App.appendSticky(sticky);
			scrollToBottom();
		});
	})
}





$(document).ready(function() {
	App.init();
});

