var GraciasView = Ember.View.extend({
  customFunctions: function() {
        // Custom Semantic UI logic with DOM targeting here
        $('.ui.dropdown').dropdown({
            // Dropdown stuff, etc
        });
        //Facebook
        (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];
        if (	d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));
        /*twitter*/
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
        if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
        js.src="//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);}}
        (document,"script","twitter-wjs");
        /*Plus*/
        window.___gcfg = {lang: 'es-419'};(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://apis.google.com/js/platform.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();}.on('didInsertElement')
});
export default GraciasView;