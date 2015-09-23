Template.groupsList.helpers({

	 groups: function () {
	 	// TODO replace with groupsList et byby mongo
  return groupsInputs.find({}, {sort: {order: 1}});

   }




});