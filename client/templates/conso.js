
Template.conso.onRendered(function (){

  //creer l'user


});

Template.conso.events({

  "click #valider": function (event) {
    Router.go('/profile');
  },

  'submit .register': function(event){
    event.preventDefault();
     console.log(event);

     // récupreation
    var prenom = event.target.prenom.value;

    var streaming = event.target.streaming.value;
    var telechargements = event.target.telechargements.value;
    var postPhotos = event.target.postPhotos.value;
    var postVideos = event.target.postVideos.value;
    var usage = event.target.usage.value;
    var coul = event.target.coul.value;

    // calscul
    var consultation;

      if (usage == "telephone") {
        consultation = streaming + telechargements; 
      } else {
        consultation = (streaming + telechargements)*3  ; 
      }
        

    var posts = postVideos + postPhotos;

    var donnees = [];// pabo
     donnees[0]= 0;

      for (var i = 1; i <= 100; i++) {
        donnees[i] = donnees[i-1]+ postPhotos * 10 + postVideos *1000;
      };

    var couleur;
    if (coul == "vert") {
      couleur = "green";
    } else if (coul == "rouge") {
      couleur = "red";
    } else {
      couleur = "black";
    }
    console.log("calculs termines");




    // inserer
    idparticipant = participants.insert({
        prenom: prenom,
        createdAt: new Date(), // current time

        consultation:consultation,
        posts:posts,
        donnees:donnees,
        color: couleur
      });


    Router.go('/global', idparticipant);
  }


});

