angular.module('attempt3').controller('controller', function($scope, service) {

$scope.displayData = function() {
service.getStarWarsData().then(function(response) {
    $scope.data = response;
});
};

$scope.displayData();

});
