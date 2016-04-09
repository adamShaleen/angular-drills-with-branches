angular.module('attempt5').controller('controller', function($scope, service) {

$scope.displayStarWarsData = function() {
  service.getStarWarsData().then(function(response) {
      $scope.data = response;
      console.log(response);
  });
};

$scope.displayStarWarsData();

});
