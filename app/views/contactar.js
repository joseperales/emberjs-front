var ContactarView = Ember.View.extend({
	username: null,
	    password: null,
	
	    submitLogin: function() {
	        var username = this.get('login');
	        var password = this.get('password');
	        console.log('Login: ' + login + ' Password: ' + password);
	
	        // do the login, probably by $.post()ing to your login page
	    },
});

export default ContactarView;