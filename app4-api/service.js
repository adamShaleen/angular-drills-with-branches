angular.module('attempt3').service('service', function($http) {


this.getStarWarsData = function() {
return $http ({
    method: 'GET',
    url: "http://swapi.co/api/people/2/"
}).then(function(response) {
    console.log(response);
    return response.data;
});
};

// this.getStarWarsData();

});
