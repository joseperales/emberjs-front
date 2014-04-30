var ContactarController = Ember.Controller.extend({
	actions: {
		Contacto: function() {			
			var name = this.get('model.name');
			var lastName = this.get('model.lastName');
			var email = this.get('model.email');
			var message = this.get('model.message');
			$('#button-send').html('Enviando el E-Mail...');
			//event.preventDefault();

			$.ajax({
			type: 'POST',
			url: 'http://dev.nelibox.com/jose/nelibox.com/public/front/send_form_email.php',
			data: {'name':name, 'email':email, 'message':message},
			//dataType : "json",
			success: function(html) {
				//console.log('paso'),
				console.log(html);
				
				if(html.success === '1')
				{
					alert(44);
					$('#button-send').html('Send E-Mail');
					$('#success').show();
				}
				else
				{
					alert(33);
					$('#button-send').html('Send E-Mail');
					$('#error').show();
				}					
			},
			error: function(){
				alert(55);
				$('#button-send').html('Send E-Mail');
				$('#error').show();
			}
		});
		this.transitionTo('social');
			
		}
	}
});

export default ContactarController;

