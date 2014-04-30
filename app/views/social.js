var SocialView = Ember.View.extend({
 /* elementId: "clinica",
  //classNameBindings: ['controller.isDrawerOpen'],
  didInsertElement: function() {
    $('.filter.menu .item').tab();
  }*/
  
  templateName: 'social',
  customFunctions: function() {
        // Custom Semantic UI logic with DOM targeting here
        $('.ui.dropdown').dropdown({
            // Dropdown stuff, etc
        });
    }.on('didInsertElement')
  
});

export default SocialView;