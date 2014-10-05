var Sticky = {};

Sticky.fetchAll = function() {
	return $.ajax({
		type: "GET",
		url: BASE_URL + "/wishes"
	})
		.done(function(stickies) {
			Sticky.data = stickies;
			return stickies;
		})
}


Sticky.create = function(params) {
	return $.ajax({
		type: "POST",
		url: BASE_URL + "/wishes",
		data: params
	})
		.done(function(sticky){
			Sticky.data.push(sticky);
			return sticky;
		})
}
