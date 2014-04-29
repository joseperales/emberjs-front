var ContactarController = Ember.Controller.extend({
      submitAction : function(){
        // here you could perform your actions like persisting to the server or so
        console.log(this.get('model'));
    }
});

export default ContactarController;