//var ContactarController = Ember.Controller.extend({
export default Ember.ObjectController.extend(Ember.Validations.Mixin,{
	actions: {
		Contacto: function() {	
 
			//$('.massive.rocket.icon').transition('scale');
				
			var name = this.get('model.Name');
			var lastName = this.get('model.lastName');
			var email = this.get('model.email');
			var message = this.get('model.message');
			$.ajax({
			type: 'POST',
			url: '/front/send_form_email.php',
			data: {'name':name, 'email':email, 'message':message},
			dataType : "json",
			success: function(html) {
				if(html.success === '1')
				{
					$('#button-send').html('Send E-Mail');
					$('#success').show();
				}
				else
				{
					$('#button-send').html('Send E-Mail');
					$('#error').show();
				}					
			},
			error: function(){
				$('#button-send').html('Send E-Mail');
				$('#error').show();
			}
		});
		this.transitionToRoute('social');
		}
	},
	validations: {
		name: {
			presence: { message: "Field is required." },
			length: { minimum: 3, messages: { tooShort: "Must be at least 3 characters." } }
		} 
      //property1: {
		//	format: { with: /^([A-Z]|\d)+$/, allowBlank: true, message: 'Value must comprise of capital letters and numbers only.'  }
	//	}
		/*, property2: {
			length: { minimum: 2, messages: { tooShort: "Value must be at least 2 characters." } },
			evilValidator: true
		}
		, property3: {
			valueIsUnique: true
		}*/
		/*, property4: {
			presence: { message: "Field is required." },
			length: { minimum: 3, messages: { tooShort: "Must be at least 3 characters." } }
		}
		, property5: {
			presence: { message: "Field is required." }
		}*/
	},

	/*create: function () {
		Ember.Logger.log("Send thing to server: ", this.get("model"));
	},*/

	debuggingErrors: function () {
		var errors = this.get("errors");
		var flattenedArray = [];
		var properties = Ember.keys(errors);
		//var messages;
		//var modifiedMessages;

		properties.forEach(function (property) {
		var	messages = errors.get(property);
		var	modifiedMessages = messages.map(function (message) {
				return "%@: %@".fmt(property, message);
			});

			flattenedArray.pushObjects(modifiedMessages);
		});

		return flattenedArray.sort();
	}.property("errors.name.@each"
		//, "errors.property1.@each"
		//, "errors.property2.@each"
		//, "errors.property3.@each"
		//, "errors.property4.@each"
		//, "errors.property5.@each"
	)
	
});
//export default ContactarController;



//});