import Ember from 'ember';

export default Ember.Component.extend({
  classNames:['side-panel'],
  linkObjects:[
    {label:"All Posts",filter:"returnAll"},
    {label:"Web Development",filter:"webDevelopment"},
    {label:"Game Development",filter:"gameDevelopment"},
    {label:"Movie/Show Reviews",filter:"movieReview"},
    {label:"Random Thoughts",filter:"randomThought"},
    {label:"Writings",filter:"writing"},
  ],
  actions:{
    newFilterSelected:function(params){
      this.sendAction('action',params)
    }
  }
});
