var Person = Ember.Object.extend({
    firstName : "",
    lastName : "",
    email : ""
});


var ContactarRoute = Ember.Route.extend({
	actions: {
    processAPI: function () {
      // Do your AJAX here
      console.log(this.get('model'));
      window.alert('It worked.');
    }
  },
	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
    }
});

export default ContactarRoute;