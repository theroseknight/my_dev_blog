import Ember from 'ember';


var formatDateTwo = Ember.Handlebars.makeBoundHelper(function(date) {
  console.log(date)
  console.log(moment(date))
  return moment().format('LL');
});


export default formatDateTwo;
