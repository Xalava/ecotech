// var currentVisiteur;

Template.profil.onRendered(function () {
    //creer l'user
});

Template.profil.events({

    "click #valider": function (event) {
        Router.go('/profile');
    },

    'submit .register': function (event) {

        event.preventDefault();
        // recuperation
        var prenom = event.target.prenom.value;
        var avatar = event.target.avatar.value;
        var couleur = event.target.couleur.value;

        var conso = parseFloat(event.target.conso.value);
        var post = parseFloat(event.target.post.value);
        var jeu = parseFloat(event.target.jeu.value);
        var video = parseFloat(event.target.video.value);

        var total = conso+ post/20 + jeu + video*2;

        // //initialisation
        // var stockage = [];
        // stockage[4] = storage*0.1; // 0.1 c'était pour l'échelle du graph?
        // stockage[3] = stockage[4]/1.4;
        // stockage[2] = stockage[3]/1.4;
        // stockage[1] = stockage[2]/1.4;
        // stockage[0] = stockage[1];

        // for (var i = 5; i <= 10; i++) {
        //     stockage[i] = stockage[i - 1]+post*0.001;
        // };

        // inserer
        currentVisiteur = participants.insert({
            prenom: prenom,
            avatar: avatar,
            couleur:couleur,
            createdAt: new Date(), // current time

            conso: conso,
            post: post,
            jeu: jeu,
            video: video,

            total: total
        });
        console.log("Submit", currentVisiteur);
        // Router.go('/global',{_id: currentVisiteur} );
        Session.set("cVisiteur",currentVisiteur)
        Router.go("/global");
    }


});
