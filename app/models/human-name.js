import DS from 'ember-data';

export default DS.Model.extend({
  use: DS.attr('string'),
  text: DS.attr('string'),
  family: DS.attr('string'),
  given: DS.attr('string'),
  prefix: DS.attr('string'),
  suffix: DS.attr('string'),

  toString: (function(){
    return this.get('family') + ', ' + this.get('given');
  })
});
