Template.groupsList.helpers({
	 groups: function () {
	  return participants.find({}, {sort: {order: 1}});

   }
});