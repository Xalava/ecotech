var vitesse ;
var linterval;

function majVitesse() {


	var displays = vitesse + "s"
	$( ".pointer" ).css({
		  "animation-duration": displays,
		  "animation-name": "spin",
		  "animation-iteration-count": "infinite",
		  "animation-timing-function": "linear",
	});


// $(".pointer").replaceWith($(".pointer").clone(true))

// element = document.getElementById("lePointeur");

//   element.offsetWidth = element.offsetWidth;


	vitesse = vitesse /2;

	  $(".pointer").removeClass("rotativ").addClass("rotativ");
	

	//$( ".pointer" ).css( " animation-duration:","*=2" );

}
Template.user.helpers({
	visiteur: function () {
    return participants.findOne(Session.get('cVisiteur'));
  },


});



Template.user.onRendered( function(){

var levisiteur = participants.findOne(Session.get('cVisiteur'));



	vitesse = 100 / (46930000 / (365*24*3600))*1;

	$( "#disp" ).html("Vitesse initiale"+ Math.floor(vitesse));

	Meteor.setInterval(function(){


	vitesse = vitesse /2;
	var displays = vitesse + "s";
	$( ".pointer" ).css({
		  "animation-duration": displays,
		  "animation-name": "spin",
		  "animation-iteration-count": "infinite",
		  "animation-timing-function": "linear",
	});



	}


		, 1000);
// majVitesse();

// };
$("[type='checkbox']").bootstrapSwitch({
	state: true,
	onColor: "danger",
	offColor: "success",
	size: "mini",
	offText	: " &nbsp; &nbsp;",
	onText : " &nbsp; &nbsp;"

});


});

// Template.user.destroyed = function() {
// Meteor.clearInterval(linterval);
// };


