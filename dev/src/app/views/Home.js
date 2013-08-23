
NS.View.Home = NS.View.Base.extend({

	id : "home",
	path : "home.html",
	
	initialize : function(data) {
		this.params.items = data.items.models;
	}
	
});