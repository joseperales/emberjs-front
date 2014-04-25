var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.route('caracteristicas');
  this.route('detalles');
  this.route("blog", { path: "/blog" });
  this.route('contactar');
  //this.route("favorites", { path: "/favs" });
  this.route('todos');
  this.route('clinica');
  this.route('rayosx');
  this.route('farmacia');
  this.route('lab');
  this.route('consultas');
  
  //this.resource('posts', function() {
  //this.route('new');
  //});
  
});
//Router.reopen({
//  location: 'none'
//});
// No muestra #
Router.reopen({
  location: 'history'
});

Ember.Route.reopen({
  render: function(controller, model) {
    this._super();
    window.scrollTo(0,0);
  }
});

export default Router;
