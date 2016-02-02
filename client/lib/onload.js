groupsInputs = new Meteor.Collection(null);

// Emission data in Data.js


var yearLabels= ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
tempData = {
    labels: yearLabels,
    datasets: [
        {
            label: "projection",
            fillColor: "rgba(220,20,20,0.0)",
            strokeColor: "rgba(220,20,20,0)",
            pointColor: "rgba(220,20,20,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,0)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            label: "projection",
            fillColor: "rgba(220,20,20,0)",
            strokeColor: "rgba(220,20,20,0)",
            pointColor: "rgba(220,20,20,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,0)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            label: "projection",
            fillColor: "rgba(220,20,20,0)",
            strokeColor: "rgba(220,20,20,0)",
            pointColor: "rgba(220,20,20,0)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,0)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
};

Meteor.startup(function() {
	

    // levisiteur = participants.findOne({"prenom": "Visiteur"}).fetch()._id
});