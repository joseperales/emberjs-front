var IndexView = Ember.View.extend({
 // elementId: "clinica",
  //classNameBindings: ['controller.isDrawerOpen'],
  didInsertElement: function() {
    $('.filter.menu .item').tab();
  }
});

export default IndexView;