import DS from 'ember-data';

export default DS.Model.extend({
  birthDate: DS.attr("date"),
  name: DS.hasMany('human-name'),

  fullName: (function(){
    return this.get('name').get('firstObject')
  }).property('name')
});
