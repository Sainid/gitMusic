var app = app || {};

var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'about' : 'about',
		'signup' : 'signup',
		'upload' : 'upload',
		'download' : 'download',
		'login' : 'login'
	}
});

