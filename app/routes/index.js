var Person = Ember.Object.extend({
    name : "",
    lastName : "",
    email : "",
    message : ""
});
export default Person;

var IndexRoute = Ember.Route.extend({

	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
    }
});

export default IndexRoute;