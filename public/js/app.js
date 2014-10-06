(function(App) {

	App.BASE_URL = window.location.origin
	var $stickies = $("#stickies");

	App.init = function() {
		var source = $("#sticky-template").html();
		App.Sticky.fillTemplate = Handlebars.compile(source);

		loadStickies();
		enforceMaxLength();
		listenForNewStickes();
	};

	var appendSticky = function(sticky) {
		var newStickyHtml = App.Sticky.fillTemplate(sticky);
		$stickies.append(newStickyHtml);
		
		// Offset Sticky Note
		var marginOffset = 50; // Set via guess and check...
		$stickies.find(".sticky").last()
			.rotate(App.Helpers.random(-5, 5))
			.css("margin-right", App.Helpers.random(-1 * marginOffset, marginOffset))
			.css("margin-top", App.Helpers.random(-1 * marginOffset, marginOffset))
			.draggable();
	}

	var appendStickies = function(stickies) {
		$.each(stickies, function(i, sticky) {
			appendSticky(sticky);
		});
	};

	var loadStickies = function() {
		App.Sticky.fetchAll().done(function(stickies){
			App.ArrayHelpers.shuffle(stickies);
			appendStickies(stickies);
		})
	}

	var enforceMaxLength = function() {
		$(".input").keyup(function(){  
	    var limit = 130; // to prevent text from overflowing on the sticky note
	    var text = $(this).val();  
	    var chars = text.length;  
		
	    if(chars > limit){  
	      var newText = text.substr(0, limit);  
	      $(this).val(newText);  
	    }  
		});
	}

	var listenForNewStickes = function() {
		$("#form").submit(function(e) {
			e.preventDefault();

			var input = $(this).find(".input");
			var message = input.val();
			input.val("");

			var params = {message: message};
			App.Sticky.create(params).done(function(sticky) {
				appendSticky(sticky);
				scrollToBottom();
			});
		})
	}

	$(document).ready(function() {
		App.init();
	});


})(window.App = window.App || {});


