import Ember from 'ember';

var IndexController = Ember.ArrayController.extend({
  filterText: '',

  filteredContent: function(){
    var filter = this.get('filterText');
    var rx = new RegExp(filter, 'gi');
    var patients = this.get('content');
//debugger;

    return patients.filter(function(patient) {
      return patient.get('fullName').toString().match(rx);
    });

  }.property('model', 'filterText')
});


export default IndexController;
