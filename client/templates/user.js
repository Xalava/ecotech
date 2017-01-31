var vitesse ;
var levisiteur;
var effort;

var myTotalChart;


Template.user.onCreated( function(){
	levisiteur = participants.findOne(Session.get('cVisiteur'))||participants.findOne({"prenom": "Lambda"});
	Session.set("effort", 1);
	tempscycle = 30/levisiteur.total;
});


Template.user.helpers({
	visiteur: function () {
    return participants.findOne(Session.get('cVisiteur'))||participants.findOne({"prenom": "Lambda"});
  },
  	percentage: function () {
  	return 100/Session.get("effort");
  },
  barcolor:function() {
	  	if (100/Session.get("effort")>75) {
	  		return "progress-bar-danger"
		} else if (100/Session.get("effort")>40) {
			return "progress-bar-warning";
		} else {
			return "progress-bar-success"
		}
  }

});


Template.user.onRendered( function(){

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })



	// init


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

	// si changement update
	$('input[type="checkbox"]').on('switchChange.bootstrapSwitch', function(event, state) {
		// console.log(this); // DOM element
		// console.log(event); // jQuery event
		// console.log(state); // true | false
		
		if (!state) {
			Session.set("effort", Session.get("effort") * 1.2);
		}else {
			Session.set("effort", Session.get("effort") / 1.2);
		}

		var displays = tempscycle * Session.get("effort") + "s";
		$( ".pointer" ).css({
			  "animation-duration": displays,
			  "animation-name": "spin",
			  "animation-iteration-count": "infinite",
			  "animation-timing-function": "linear",
		});

		$(".pointer").replaceWith($(".pointer").clone(true));

		//dataTotal.datasets[0].data[0] = levisiteur.total / effort;
		//myTotalChart.update();
	});





    Chart.defaults.global.responsive = true;

    var ctxRepart = document.getElementById("consoChart").getContext("2d");
    // var ctxTotal = document.getElementById("totalChart").getContext("2d");


    var dataRepart = [
	    {
	        value: levisiteur.conso,
	        color:"#46BFBD",
	        label: "Navigation"
	    },
	    {
	        value: levisiteur.post/20,
	        color: "#e84436",
	        label: "Messages"
	    },
	    {
	        value: levisiteur.video*2,
	        color: "#3bbff0",
	        label: "Videos"
	    },
	   	{
	        value: levisiteur.jeu,
	        color: "#575756",
	        label: "Jeu"
	    }
	];

   optionsChartRepart = {
              // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%><%}%>",
    };



	var myDoughnutChart = new Chart(ctxRepart).Doughnut(dataRepart, optionsChartRepart);



	// var dataTotal = {
	//     labels: [""],
	//     datasets: [
	//         {
	//             label: "Consommation totale",
	//             fillColor: "rgba(20,20,20,0.9)",
	//             // strokeColor: "rgba(220,220,220,1)",
	//             // pointColor: "rgba(220,220,220,1)",
	//             // pointStrokeColor: "#fff",
	//             // pointHighlightFill: "#fff",
	//             pointHighlightStroke: "rgba(220,220,220,1)",
	//             data: [levisiteur.total],
	//         }
	//     ]
	// };


 //   optionsChartTotal = {
 //        scaleShowGridLines : false,
 //    	barShowStroke : false,
 //    //Boolean - Whether to show horizontal lines (except X axis)
 //    scaleShowHorizontalLines: false,

 //    //Boolean - Whether to show vertical lines (except Y axis)
 //    scaleShowVerticalLines: false,

 //    legendTemplate : "",


 //    };


	// myTotalChart = new Chart(ctxTotal).Bar(dataTotal, optionsChartTotal);



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
