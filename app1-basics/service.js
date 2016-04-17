angular.module('attempt10').service('service', function($http) {


this.friends = [{name: 'Scott', age: 30}, {name: 'Eric', age: 32}, {name: 'David', age: 29}, {name: 'Chris', age: 30}];

this.getFriends = function() {
    return this.friends;
};

this.getStarWarsData = function() {
    return $http ({
        method: 'GET',
        url: "http://swapi.co/api/people/1/"
    }).then(function(response) {
        console.log(response);
        return response.data;
    });
};

// this.getStarWarsData();



});
