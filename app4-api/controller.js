angular.module('attempt2').controller('controller', function($scope, service) {

$scope.displayStarWarsData = function() {
  service.getData().then(function(response) {
     $scope.data = response;
  });
};

$scope.displayStarWarsData();

});
