Router.configure({
	layoutTemplate: 'galLayout',
	// loadingTemplate: 'loading',
	// waitOn: function() {return Meteor.subscribe('coevents');}
});

Router.route('/', {
    template: 'home'
});

Router.route('/profile', {
	name:"route",
    template: 'profile'
});

Router.route('/global', {
    template: 'global'
});

Router.route('/conso', {
    template: 'conso'
});

// Router.before(function() { clearErrors() });


// Meteor.Router.filters({
//   'clearErrors': function(page) {
//     clearErrors();
//     return page;
//   }
// });

// Meteor.Router.filter('clearErrors');