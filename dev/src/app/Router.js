
NS.Router = Backbone.Router.extend({
	
	/*
	 * controller
	 * @private
	 */
	controller : null,

	/*
	 * initialize
	 * @private
	 */
	initialize : function() {

		this.controller = new NS.Controller();
	},

	/*
	 * routes
	 */
	routes : {
		"*actions" : "_defaultAction"
	},
	
	/*
	 * defaultAction
	 * @private
	 */
	_defaultAction : function () {
		this.controller.displayPage( NS.Events.SHOW_HOME, true );
	}

});
