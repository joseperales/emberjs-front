var ContactarView = Ember.View.extend({
	submit: function (event) {
		event.preventDefault();
		Ember.Logger.log("submit form");
		this.get('controller').create();
	}
//didInsertElement: function() {
   // alert(33);
   /* validationRules = {
        Email: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      };
  }	*/
  
  
 /* didInsertElement : function(){
   // this._super();
   // Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
   Ember.run.next(this, function() {
   
    //alert(22);
        validationRules = {
        Email: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    });
  },
 /* afterRenderEvent : function(){
    // implement this hook in your own subclasses and run your jQuery logic there
  alert(33);
   
 
    // will be called when when an instance's
    // rendered element is clicked
 

     
  }*/

  
 //Cambia el tag para el view
 // tagName: 'em',
 // classNames: ['vistahero', 'vistaheromas'],
 // classNameBindings: ['hovered'],
 // hovered: false, 
});

export default ContactarView;

Ember.View.reopen({
  didInsertElement : function(){
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    this.$().focus();
  },
  afterRenderEvent : function(){
  // implement this hook in your own subclasses and run your jQuery logic there
   
  // click: function(event) {
    // will be called when when an instance's
    // rendered element is clicked

      
    //  } 
  }
});