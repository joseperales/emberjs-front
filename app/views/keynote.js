var KeynoteView = Ember.View.extend({
  templateName: 'caracteristicas',
  tagName: 'iframe',
  attributeBindings: ['src'],
  src: "http://dev.nelibox.com/jose/nelibox.com.ve/keynote/"
});
export default KeynoteView;