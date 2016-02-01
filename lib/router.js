Router.configure({
	layoutTemplate: 'galLayout',
	// loadingTemplate: 'loading',
});



Router.route('/', function () {
  this.render('home', {
    data: {
      
    }
  });
});

Router.route('/profil', function () {
  this.render('profil', {
    data: {
      
    }
  });
});


Router.route('/global', function () {
	this.render("global");
});
