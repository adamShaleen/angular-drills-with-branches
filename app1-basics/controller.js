angular.module('attempt10').controller('controller', function($scope, service) {

$scope.displayFriends = service.getFriends();

$scope.displayData = function() {
    service.getStarWarsData().then(function(response) {
        $scope.data = response;
    });
};


$scope.displayData();

});
