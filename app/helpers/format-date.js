//import Ember from 'ember';

//export function formatDate(params/*, hash*/) {
  //return params;
//}

//export default Ember.HTMLBars.makeBoundHelper(formatDate);


import Ember from 'ember';


var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {  
        return moment(date).fromNow();
});


export default formatDate; 
