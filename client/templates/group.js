Template.group.events({
    "click .delete": function (event) {
        // var coevent = coevents.findOne(coevId);
        // if (coevent.private && coevent.owner !== Meteor.userId()) {
        //   // If the task is private, make sure only the owner can delete it
        //   throw new Meteor.Error("not-authorized");
        // } else {
        participants.remove(this._id);
    }
});

refreshTemp = function () {
    //refreshing temp summing up prior temp + CO2 for prior 15 years
    // start at 2 step
    var list = participants.find().fetch();

    var color= {0: "rgba(232,68,53,1)", 1: "rgba(58,191,240,1)", 2: "rgba(255,242,112,1)"};

    for (i = 0, j = list[i]; i < list.length; j = list[++i]) {
        var dataset =
        {
            label: "projection",
            fillColor: "rgba(220,20,20,0.2)",
            strokeColor: "rgba(220,20,20,1)",
            pointColor: "rgba(220,20,20,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };
        dataset.data = j.stockage;
        dataset.fillColor = color[i%3].replace(',1)',',0.2)');
        dataset.strokeColor = color[i%3];
        dataset.pointColor = color[i%3];
        dataset.pointHighlightStroke = color[i%3];
        tempData.datasets[i] = dataset;
        console.log(dataset)
    }
    console.log(tempData)
};