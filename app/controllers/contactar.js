var ContactarController = Ember.Controller.extend({
	actions: {
		Contacto: function() {			
			var name = this.get('model.Name');
			var lastName = this.get('model.lastName');
			var email = this.get('model.email');
			var message = this.get('model.message');
			$('#button-send').html('Enviando el E-Mail...');
			event.preventDefault();
			
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
		this.transitionTo('social');
		}
	}
});
export default ContactarController;