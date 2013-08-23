var app = app || {};

// The Application

// Our overall **AppView** is the top-level piece of UI.
app.AppView = Backbone.View.extend({
	
	// Instead of generating a new element, bind to the existing skeleton
	// of the App already present in the HTML.
	el: '#todoapp',

	// Our template for the line of statistics at the bottom of the app.
	statsTemplate: _.template( $('#stats-template').html() ),

	// At initialization we bind to the relevant events on the `Todos`
	// collection, when items are added or changed. Kick things off by loading
	// any prexisting todos that might be saved in *localStorage*.
	intialize: function() {
		this.input = this.$('#new-todo');
		this.allCheckbox = this.$('#toggle-all')[0];
		this.$footer = this.$('#footer');
		this.$main = this.$('#main');

		window.app.Todos.on( 'add', this.addOne, this );
		window.app.Todos.on( 'reset', this.addAll, this );
		window.app.Todos.on( 'all', this.render, this );

		app.Todos.fetch();
	},

	// Re-rendering the App just means refreshing the statistics --
	// the rest of the app doesn't change.
	render: function() {
		var completed = app.Todos.completed().length;
		var remaining = app.Todos.remaining().length;

		if(app.Todos.length) {
			this.$main.show();
			this.$footer.show();

			this.$footer.html(this.statsTemplate({
				completed: completed,
				remaining: remaining
			}));

		} else {
			this.$main.hide();
			this.$footer.hide();
		}

		this.allCheckbox.checked = !remaining;
	},

	// Add a single todo item to the list by creating a view for it, and 
	// appending its element to the `<ul>`.
	addOne: function(todo) {
		var view = new app.TodoView({model: todo});
		$('#todo-list').append( view.render().el );
	},

	// Add all items in the **Todos** collection at once.
	addAll: function() {
		this.$('#todo-list').html('');
		app.Todos.each(this.addOne, this);
	}



});