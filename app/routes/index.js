var Person = Ember.Object.extend({
    firstName : "",
    lastName : "",
    email : ""
});

var IndexRoute = Ember.Route.extend({

	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
    }
});

export default IndexRoute;