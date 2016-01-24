Template.profil.onRendered(function () {
    //creer l'user
});

Template.profil.events({

    "click #valider": function (event) {
        Router.go('/profile');
    },

    'submit .register': function (event) {
        console.log("Submit");

        event.preventDefault();
        // recuperation
        var prenom = event.target.prenom.value;
        var avatar = event.target.avatar.value;
        var couleur = event.target.couleur.value;

        var conso = parseFloat(event.target.conso.value);
        var post = parseFloat(event.target.post.value);
        var storage = parseFloat(event.target.storage.value);

        //initialisation
        var stockage = [];
        stockage[4] = storage*0.1; // 0.1 c'était pour l'échelle du graph?
        stockage[3] = stockage[4]/1.4;
        stockage[2] = stockage[3]/1.4;
        stockage[1] = stockage[2]/1.4;
        stockage[0] = stockage[1];

        for (var i = 5; i <= 10; i++) {
            stockage[i] = stockage[i - 1]+post*0.001;
        };

        // inserer
        idparticipant = participants.insert({
            prenom: prenom,
            avatar: avatar,
            couleur:couleur,
            createdAt: new Date(), // current time

            conso: conso,
            post: post,
            stockage: stockage
        });
        Router.go('/global', idparticipant);
    },

    'change #consoSlider': function (event) {

        var collectedValue = Number( $(event.target).val() );
        document.querySelector('#conso').value = collectedValue;
    },
    'change #postSlider': function (event) {

        var collectedValue = Number( $(event.target).val() );
        document.querySelector('#post').value = collectedValue;
    },
    'change #storageSlider': function (event) {

        var collectedValue = Number( $(event.target).val() );
        document.querySelector('#storage').innerHTML = collectedValue;
    },



});

