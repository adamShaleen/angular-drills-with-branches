angular.module('attempt6').service('service', function() {

var friends = [{name: 'Adam'}, {name: 'Scott'}, {name: 'Eric'}];

this.getData = function() {
  return friends;
};


this.addUser = function(name) {
    friends.push(name);
};






});
