var randa;
var randb; 

Template.unvisiteur.onCreated(function () {

    randa = Math.random()*1000;
    randb = Math.random()*400;
});


Template.unvisiteur.helpers({

	randx: function () {
  return randa;

   },
  randy: function () {
  return randb;

   },

   diam: function () {
    if (isNaN(this.total)){
      return 50*Math.random();
    } else {
      return this.total*2;
    }

   },





});