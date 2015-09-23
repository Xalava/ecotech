
Template.group.events({
 "change #yearStabilization": function (event) { 
      // Really basic validation graphical feedback
      groupsInputs.update(this._id,{$set: {validation: ""}});

  var collectedValue = Number( $(event.target).val() );
      console.log("Collected",collectedValue);

  if (collectedValue >= 2015 && collectedValue < 2106){

    // if !(collectedValue <= this.yearReduction ) {

      groupsInputs.update(this._id,{$set: {yearStabilization: collectedValue}});

      console.log("yearStabilization",collectedValue, this.order);

      refreshData(this.order,this.groupName,collectedValue,this.yearReduction,this.percentageReduction);

      // } else {
      //   console.log("inf to reduction year");
      // }
 
    } else {
      if (collectedValue==0) {
              refreshData(this.order,this.groupName,2105,this.yearReduction,this.percentageReduction);

      }else {
      console.log("yearStabilization incorrect");
      groupsInputs.update(this._id,{$set: {validation: "has-error"}});

      }
    }
    

    return false;


  },

 "change #yearReduction": function (event) { 
      groupsInputs.update(this._id,{$set: {validation: ""}});

    var collectedValue = Number($(event.target).val());

    if (collectedValue >= 2015 && collectedValue < 2106 ){
      groupsInputs.update(this._id,{$set: {yearReduction: collectedValue}});
      console.log("yearReduction",collectedValue, this.order);
      refreshData(this.order,this.groupName,this.yearStabilization,collectedValue,this.percentageReduction);
    } else {
      if(collectedValue == 0){
              refreshData(this.order,this.groupName,this.yearStabilization,2105,this.percentageReduction);

      }else {
      console.log("yearReduction incorrect");
      groupsInputs.update(this._id,{$set: {validation: "has-error"}});

      }
    }
    // Prevent default form submit
    return false;
  },

 "change #percentageReduction": function (event) { 
        groupsInputs.update(this._id,{$set: {validation: ""}});

  //TODO gérer 0,1 et 0.1 
    var collectedValue = Number($(event.target).val());
    if (collectedValue >= 0 && collectedValue < 101 ){
      groupsInputs.update(this._id,{$set: {percentageReduction: collectedValue}});
      console.log("percentageReduction",collectedValue, this.order);
      refreshData(this.order,this.groupName,this.yearStabilization,this.yearReduction,collectedValue);
    } else {
      if (collectedValue == 0){
              refreshData(this.order,this.groupName,this.yearStabilization,this.yearReduction,0);

      }else {
      console.log("percentageReduction incorrect");
      groupsInputs.update(this._id,{$set: {validation: "has-error"}});
      // event.target.value = "";
      // event.target.class =""


      }
    }
    // Prevent default form submit
    return false;
  },


});

Template.group.helpers({



  

});


refreshData = function(order,groupName,yearStabilization,yearReduction, percentageReduction){
  console.log('refreshing data of',groupName,'with:', yearStabilization,yearReduction,percentageReduction);
     var stab  = Math.min(yearStabilization,yearReduction,2105) - 2015;
     var redux = Math.max(stab,yearReduction,2015) - 2015;
     console.log(" stab ",stab," redux ",redux);
  //Repopulate base data from 0 to stab
  for (var i = 0; i < stab; i++) {
      emissionsData.series[order][i]= emReference[groupName][i];

  };

  // iterate stap to redux
  for (var j = stab ; j <= redux ; j++) {
    emissionsData.series[order][j]= emReference[groupName][stab];
  };


  //iterate redux to end
  // !! we start following year
 for (var k = redux+1; k < 91 ; k++) {
    emissionsData.series[order][k]= emissionsData.series[order][k-1]*(1-(percentageReduction / 100 ));
  };




  refreshTemp();

  refreshCharts();



  console.log("refreshed! (",i,j,k,")");
  return false;
  

};

refreshCharts = function(){
  new Chartist.Line('.ct-chart', emissionsData, optionsChart);
  // new Chartist.Line('.ct-chart2', emissionsData, optionsChart);
  // var graphTemp=Session.get('chartTemp');
  // tempData.handle.update();


  var tempCtx = document.getElementById("tempChart").getContext("2d");
  new Chart(tempCtx).Line(tempData,{animationSteps: 5});
  // window.tempChar.update();
};


refreshTemp = function(){
  //refreshing temp summing up prior temp + CO2 for prior 15 years
  // start at 2 step
 for (var i = 1; i <= 6; i++) {
    var SumCO= 0;
    // TODO: maxorder devrait etre une variable
    for (var j = MAXORDER; j >= 0; j--) {
      for (var k = (i-1)*15; k < i*15; k++) {
        SumCO = emissionsData.series[j][k] + SumCO;
      };
      
    };
  
  tempData.datasets[0].data[i]=tempData.datasets[0].data[i-1]+(SumCO/1200);

 };


};