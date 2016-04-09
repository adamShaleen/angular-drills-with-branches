angular.module('attempt5').service('service', function($http) {


this.getStarWarsData = function() {
  return $http ({
      method: 'GET',
      url: "http://swapi.co/api/people/"
  }).then(function(response) {
    //   console.log(response);
      return response.data;
  });
};

// this.getStarWarsData();

});
