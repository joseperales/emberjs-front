import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION:    false,
  LOG_MODULE_RESOLVER:      false,
  LOG_TRANSITIONS:          false,
  LOG_TRANSITIONS_INTERNAL: false,
  LOG_VIEW_LOOKUPS:         false,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'appkit');
 
// ready: function() {
//    $('.filter.menu .item').tab();
//} 
   
export default App;
