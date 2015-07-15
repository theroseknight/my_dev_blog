import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  blogType: DS.attr('string'),
  webDevelopment: DS.attr('boolean'),
  gameDevelopment: DS.attr('boolean'),
  movieReview: DS.attr('boolean'),
  randomThought: DS.attr('boolean'),
  writing: DS.attr('boolean')
});
