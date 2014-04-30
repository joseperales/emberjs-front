var ContactarController = Ember.Controller.extend({
      
      actions: {                                                                                                         
        addPerson: function() { 
         var validation = {isValid: false};
        // this.trigger('validate', validation);
         if(validation.isValid){
            //Validation passed. Do something here.
         }
        
       // alert(44);    
        console.log(this.get('model')); 
       // this.transitionToRoute('index');                                                                                 
        }                                                                                                                                                                                                               
	  }
});

export default ContactarController;

