define([
  'marionette',
  'hbs!templates/index'
],
function(Marionette, template) {
  console.log(Marionette);
  $('body').html(template());
});