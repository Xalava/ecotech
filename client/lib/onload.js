groupsInputs = new Meteor.Collection(null);

// Emission data in Data.js

// global Setting

var yearLabels= ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
tempData = {
    labels: yearLabels,
    datasets: [
        {
            label: "projection",
            fillColor: "rgba(220,20,20,0.2)",
            strokeColor: "rgba(220,20,20,1)",
            pointColor: "rgba(220,20,20,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    ]
};

Meteor.startup(function() {
	// Set up for each country group
	for (var i = groupsList.length - 1; i >= 0; i--) {
	    var group = groupsList[i].name;
	    var groupID = groupsInputs.insert({groupName: group});
	    // TODO:referencer emissions par année
	    // groupsInputs.update(groupID,{$set : {data : emReference[group] }});
	    groupsInputs.update(groupID,{$set : {order : i }});
      groupsInputs.update(groupID,{$set : {color : groupsList[i].color }});
      groupsInputs.update(groupID,{$set : {yearStabilization : 2105 }});
      groupsInputs.update(groupID,{$set : {yearReduction : 2105 }});
      groupsInputs.update(groupID,{$set : {percentageReduction : 0 }});
      groupsInputs.update(groupID,{$set : {strategie : groupsList[i].strategie }});
      emissionsData.series[i] = emReference[group].slice(0);

	    // emData.datasets[i] = {
	    //         label: groupsList[i].name,
	    //         fillColor: "rgba(220,220,220,0.1)",
	    //         strokeColor: groupsList[i].color,
	    //         pointColor: groupsList[i].color,
	    //         pointStrokeColor: "#fff",
	    //         pointHighlightFill: "#fff",
	    //         pointHighlightStroke: "rgba(220,220,220,1)",
	    //         data: [""]
	            
	    //     };
	    // set for chart
	    // emData.datasets[i].data = groupsInputs.findOne({number: i}).data;

	    //uCharts(i);

	}
});