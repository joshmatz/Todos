
// Create Namespace
var NS = window.NS || {};

/* EVENT MANAGER */
NS.EventManager = NS.EventManager || $({});

/* COLLECTIONS */
NS.Collection = NS.Collection || {};

/* MODELS */
NS.Model = NS.Model || {};

/* VIEWS */
NS.View = NS.View || {};

/* DATA */
NS.Data = NS.Data || {};

/* LOCATIONS */
NS.Locations = NS.Locations || {};
NS.Locations.Templates = '/templates/';
NS.Locations.JSON = '/data/';

/*
 * EVENTS
 */
NS.Events = {
	APP_LOADING : "APP_LOADING",
    SHOW_HOME : "SHOW_HOME"
};

$(window).ready(function(){
	
	NS.AppRouter = new NS.Router();
	Backbone.history.start({ pushState : true });

});