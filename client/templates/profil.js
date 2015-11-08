Template.profil.onRendered(function () {
    //creer l'user
});

Template.profil.events({

    "click #valider": function (event) {
        Router.go('/profile');
    },

    'submit .register': function (event) {
        event.preventDefault();
        // récupreation
        var prenom = event.target.prenom.value;
        var profil = event.target.profil.value;

        var conso = parseFloat(event.target.conso.value);
        var post = parseFloat(event.target.post.value);
        var storage = parseFloat(event.target.storage.value);

        var stockage = [];
        stockage[4] = storage*0.1;
        stockage[3] = stockage[4]/2;
        stockage[2] = stockage[3]/2;
        stockage[1] = stockage[2]/2;
        stockage[0] = stockage[1]/2;

        for (var i = 5; i <= 10; i++) {
            stockage[i] = stockage[i - 1]+post*0.001;
        };

        // inserer
        idparticipant = participants.insert({
            prenom: prenom,
            profil: profil,
            createdAt: new Date(), // current time

            conso: conso,
            post: post,
            stockage: stockage
        });
        Router.go('/global', idparticipant);
    }
});

