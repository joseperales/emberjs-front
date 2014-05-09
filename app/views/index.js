var IndexView = Ember.View.extend({
 // elementId: "clinica",
  //classNameBindings: ['controller.isDrawerOpen'],
  didInsertElement: function() {
  // Ini Tabs Semantic
   // $('.filter.menu .item').tab();
    this._super();
	Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },
   afterRenderEvent: function() {
		$(window).resize(function() {
			//$('.card-list').height($(window).height() - 250);
		});

		$(window).trigger('resize');
	}
  
});

export default IndexView;