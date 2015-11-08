groupsInputs = new Meteor.Collection(null);

// Emission data in Data.js

// global Setting
groupsList = [
      {name: "China",color:"rgba(220,20,20,1)",order:0,strategie:"China said it would increase the share of non-fossil fuels as part of its primary energy consumption. In its document submitted to the UN, China said the outcomes of the negotiations in Paris “should take into account differentiated historical responsibilities”.However, according to the Climate Group, due to China’s massive economic development and taking into account emissions from 1990 to now, the country has almost caught up with the US’s total historical emissions."},
      {name:"USA",color:"rgba(151,187,205,1)",order:1,strategie:"Commitment of the United States, under Barack Obama’s presidency, to the fight against climate disruption. However any agreement needs to be ratified by the Senate, historicaly and politicaly adverse to binding agreements"},
      {name:"EU",color:"#003399",order:1,strategie:". By setting its level of climate ambition for 2030 ( reducing by 40% below 1990 level), the Commission indicates that the EU will also be able to engage actively in the on-going negotiations on the post-Kyoto global climate regime that should take effect in 2020. "},
      {name:"India",color:"#FDB45C",order:1,strategie:"blabla"},
      {name:"O. Developing",color:"#59922b",order:1,strategie:"Economic developpement, green fund, differentiated responsibilities"},
      {name:"O. Developed",color:"#453d3f",order:1,strategie:"blabal"},
      
      ];

MAXORDER = 3;

var yearLabels= ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
	yearLabelsSome = ["2015","","","","","","","","","","","","","","","2030","","","","","","","","","","","","","","","2045","","","","","","","","","","","","","","","2060","","","","","","","","","","","","","","","2075","","","","","","","","","","","","","","","2090","","","","","","","","","","","","","","","2105"]
	yearLabelsAll = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105]

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
emissionsData = {
  labels: yearLabelsSome,
  series: [ ]
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