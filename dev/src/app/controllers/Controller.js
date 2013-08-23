
NS.Controller = function() {

	var
		eventHandlers = [],

		currentView = null,

		loadingView = null,
		homeView = null,
		
		/*
		 * init
		 * @private
		 */
		init = function() {

			_initEventHandlers();
			_initNav();
		},

		/*
		 * init event handler
		 * @private
		 */
		_initEventHandlers = function() {

			_.each( NS.Events, function(customEvent) {
				eventHandlers[customEvent] = _show;
			});
			
			NS.EventManager.bind(eventHandlers);
		},
		
		/*
		 * init navigation links
		 * @private
		 */
		_initNav = function() {

			$("body").delegate('a[rel=nav], nav a:not(.external)', "click", function(e){
				e.preventDefault();
				NS.AppRouter.navigate($(this).attr("href"), true);
			});
		},
		
		/*
		 * display Page
		 * @private
		 */
		displayPage = function ( callbackEvent, slug, hideFirst ) {

			if ( currentView && hideFirst ) {
				
				currentView.hide( function() {
					displayPage(callbackEvent, slug, false);
				});

			} else {

				NS.EventManager.trigger( NS.Events.APP_LOADING );
				NS.DataManager.check( callbackEvent, slug );
			}
		},

		/*
		 * show the page
		 * @private
		 */
		_show = function ( e /*, slug*/ ) {

			var view;
			
			switch ( e.type ) {
				
				case NS.Events.APP_LOADING :
					if ( !loadingView ) loadingView = new NS.View.Loading();
					view = loadingView;
				break;
				
				case NS.Events.SHOW_HOME :
					if ( !homeView ) {
						homeView = new NS.View.Home({
							items : NS.Data.Item
						});
					}
					view = homeView;
				break;

			}
			
			view.render();
			currentView = view;

		};

	init();
	return {
		displayPage : displayPage
	};
};
