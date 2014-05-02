var Person = Ember.Object.extend({
    Name : "",
    lastName : "",
    email : "",
    message : ""
});

var ContactarRoute = Ember.Route.extend({
	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
    }
});

export default ContactarRoute;