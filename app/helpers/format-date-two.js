import Ember from 'ember';


var formatDateTwo = Ember.Handlebars.makeBoundHelper(function(date) {
  return moment().format('LL');
});


export default formatDateTwo;
