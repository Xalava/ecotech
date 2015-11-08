


Template.charts.onRendered(function (){
    Chart.defaults.global.responsive = true;

    optionsChartjs = {

        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : false,

        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth : 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: false,

        //Boolean - Whether the line is curved between points
        bezierCurve : true,

        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.4,

        //Boolean - Whether to show a dot for each point
        pointDot : false,

            //Number - Radius of each point dot in pixels
            pointDotRadius : 1,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius : 20,

        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,

        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,

        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",



        //global
        // showScale: true,
        // scaleShowLabels: false,
        // responsive: true,
        // Exist pas: omitXLabels: true, 
          scaleLabel: "<%=value%>",
          showXAxisLabel:false,

              // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for multiple tooltips
        multiTooltipTemplate: "<%= value %>"

    };
    refreshTemp();
    var tempCtx = document.getElementById("tempChart").getContext("2d");
    window.tempChart = new Chart(tempCtx).Line(tempData);

    new Chartist.Line('.ct-chart', emissionsData,optionsChart);
});

Template.charts.helpers({
});



Template.charts.onCreated(function () {
});

Template.charts.events({
   "click #reloadgraphs": function (event) { 
      console.log('reloaded');
    new Chartist.Line('.ct-chart', emissionsData, optionsChart);
  }
});

 // myLiveChart.datasets[1].points[indexToUpdate].value = Math.random() * 100;
 // myLiveChart.update();

  // barDemo.removeData();
  // barDemo.addData([dData()], 'dD ' + index);



    optionsChart = {
      // Don't draw the line chart points
      showPoint: false,
      // Disable line smoothing
      lineSmooth: true,
      // X-Axis specific configuration
      axisX: {
        // We can disable the grid for this axis
        // showGrid: false,
        // and also don't show the label
        // showLabel: false
      },
      // Y-Axis specific configuration
      axisY: {
      //   // Lets offset the chart a bit from the labels
      //   offset: 60,
      //   // The label interpolation function enables you to modify the values
      //   // used for the labels on each axis. Here we are converting the
      //   // values into million pound.
         labelInterpolationFnc: function(value) {
         
           return value + ' Gt';
         }
      },
      // Low: 0,
      // showArea: true
    };



// code tootip

//     var $chart = $('.ct-chart');

// var $toolTip = $chart
//   .append('<div class="tooltip"></div>')
//   .find('.tooltip')
//   .hide();

// $chart.on('mouseenter', '.ct-point', function() {
//   var $point = $(this),
//     value = $point.attr('ct:value'),
//     seriesName = $point.parent().attr('ct:series-name');
//   $toolTip.html(seriesName + '<br>' + value).show();
// });

// $chart.on('mouseleave', '.ct-point', function() {
//   $toolTip.hide();
// });

// $chart.on('mousemove', function(event) {
//   $toolTip.css({
//     left: (event.offsetX || event.originalEvent.layerX) - $toolTip.width() / 2 - 10,
//     top: (event.offsetY || event.originalEvent.layerY) - $toolTip.height() - 40
//   });
// });
