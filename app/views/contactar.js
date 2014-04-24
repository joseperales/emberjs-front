var ContactarView = Ember.View.extend({

  jumpToLogin : function(){
    $('html, body').animate({
        scrollTop: $("#login").offset().top
    }, 2000);
  }
});

export default ContactarView;