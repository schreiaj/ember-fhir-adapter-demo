import DS from 'ember-data';

export default DS.Model.extend({
  birthDate: DS.attr("date"),
  name: DS.hasMany('human-name', {embedded: true}),
  gender: DS.attr("string"),
  text: DS.belongsTo("text", {embedded: true}),
  conditions: DS.hasMany("condition", {async: true, searchBy: "patient"}),

  fullName: (function(){
    return this.get('name').get('firstObject');
  }).property('name')
});
