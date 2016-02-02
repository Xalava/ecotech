var vitesse ;
var levisiteur;
var effort;



// 	var displays = vitesse + "s"
// 	$( ".pointer" ).css({
// 		  "animation-duration": displays,
// 		  "animation-name": "spin",
// 		  "animation-iteration-count": "infinite",
// 		  "animation-timing-function": "linear",
// 	});


// // $(".pointer").replaceWith($(".pointer").clone(true))

// // element = document.getElementById("lePointeur");

// //   element.offsetWidth = element.offsetWidth;


// 	vitesse = vitesse /2;

// 	  $(".pointer").removeClass("rotativ").addClass("rotativ");
	

// 	//$( ".pointer" ).css( " animation-duration:","*=2" );

// }
Template.user.helpers({
	visiteur: function () {
    return participants.findOne(Session.get('cVisiteur'))||participants.findOne({"prenom": "Visiteur"});
  },


});



Template.user.onRendered( function(){

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



	// init
	levisiteur = participants.findOne(Session.get('cVisiteur'))||participants.findOne({"prenom": "Visiteur"});
	effort = 1;
	tempscycle = 30/levisiteur.total;

// todo si pas user, backup

		var displays = tempscycle + "s";
		$( ".pointer" ).css({
			  "animation-duration": displays,
			  "animation-name": "spin",
			  "animation-iteration-count": "infinite",
			  "animation-timing-function": "linear",
		});

		$(".pointer").replaceWith($(".pointer").clone(true));

	// librarie affichage
	$("[type='checkbox']").bootstrapSwitch({
		state: true,
		onColor: "danger",
		offColor: "success",
		size: "mini",
		offText	: " &nbsp; &nbsp;",
		onText : " &nbsp; &nbsp;"

	});


	$('input[type="checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
		console.log(this); // DOM element
		console.log(event); // jQuery event
		console.log(state); // true | false
		
		if (!state) {
			effort = effort * 1.2;
		}else {
			effort = effort / 1.2;
		}

		var displays = tempscycle * effort + "s";
		$( ".pointer" ).css({
			  "animation-duration": displays,
			  "animation-name": "spin",
			  "animation-iteration-count": "infinite",
			  "animation-timing-function": "linear",
		});

		$(".pointer").replaceWith($(".pointer").clone(true));

		
	});





    Chart.defaults.global.responsive = true;

    var dactx = document.getElementById("consoChart").getContext("2d");


    var data = [
	    {
	        value: levisiteur.conso/3,
	        color:"#46BFBD",
	        label: "Surf"
	    },
	    {
	        value: levisiteur.post/50,
	        color: "#e84436",
	        label: "Messages"
	    },
	    {
	        value: levisiteur.video,
	        color: "#3bbff0",
	        label: "Videos"
	    },
	   	{
	        value: levisiteur.jeu,
	        color: "#575756",
	        label: "Jeu"
	    }
	];

   optionsChartjs = {



              // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%><%}%>",



    };





	var myDoughnutChart = new Chart(dactx).Doughnut(data, optionsChartjs);







});

// Template.user.destroyed = function() {
// Meteor.clearInterval(linterval);
// };

Template.user.events({

  // 'click input[type=checkbox]': function(e) {
		// effort = effort  + 0.4;
		// var displays = tempscycle / effort + "s";
		// $( ".pointer" ).css({
		// 	  "animation-duration": displays,
		// 	  "animation-name": "spin",
		// 	  "animation-iteration-count": "infinite",
		// 	  "animation-timing-function": "linear",
		// });

		// $(".pointer").replaceWith($(".pointer").clone(true));

  // }
});
