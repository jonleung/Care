(function(App) {

	App.Sticky = {};

	App.Sticky.data = [];

	App.Sticky.fetchAll = function() {
		return $.ajax({
			type: "GET",
			url: App.BASE_URL + "/wishes"
		})
			.done(function(stickies) {
				App.Sticky.data = stickies;
				return stickies;
			})
	}


	App.Sticky.create = function(params) {
		return $.ajax({
			type: "POST",
			url: App.BASE_URL + "/wishes",
			data: params
		})
			.done(function(sticky){
				App.Sticky.data.push(sticky);
				return sticky;
			})
	}

})(window.App = window.App || {});