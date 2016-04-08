angular.module('attempt1').controller('controller', function($scope, service) {

// $scope.displayData = service.returnData();

$scope.displayStarWarsData = function() {
  service.getStarWarsData().then(function(response) {
      $scope.response = response;
      console.log(response);
  });
};


$scope.displayStarWarsData();

});  // closing controller tag;
