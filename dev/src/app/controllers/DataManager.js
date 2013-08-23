
NS.DataManager = NS.DataManager || {

	currentEvent : null,
	currentSlug : null,

	itemsLoaded : false,

	check : function ( e, slug ) {

		var self = this;
		self.currentEvent = e;
		self.currentSlug = slug;

		switch ( self.currentEvent ) {
			
			case NS.Events.SHOW_HOME :

				if ( !self.itemsLoaded ) {
					self.getItems();
				} else {
					NS.EventManager.trigger( self.currentEvent, self.currentSlug );
				}
			break;

		}
	},

	getItems : function ( ) {

		var self = this;
		NS.Data.Item = new NS.Collection.ItemCollection();
		NS.Data.Item.fetch({
			success : function() {
				self.itemsLoaded = true;
				self.check( self.currentEvent, self.currentSlug );
			}
		});
	}
};

