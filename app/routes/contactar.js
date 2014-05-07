var Person = Ember.Object.extend({
    Name : "",
    lastName : "",
    email : "",
    message : ""
});

var ThingModel = Ember.Object.extend({
	name: ""
	//property1: "",
	//property2: "",
	//property3: "",
	//property4: ""
	//property5: ""
});

var ContactarRoute = Ember.Route.extend({
	model: function(){
      return Person.create();
	},
    setupController : function(controller, model){
        controller.set("model", model);
        controller.set("model", ThingModel.create());
    }//,
	//setupController: function (controller/*, model*/) {
	//controller.set("model", ThingModel.create());
	//}
});

export default ContactarRoute;