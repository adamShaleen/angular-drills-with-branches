angular.module('attempt10').controller('controller', function($scope, service) {

$scope.displayFriends = service.getFriends();

$scope.displayStarWarsData = function() {
    $scope.data = service.getStarWarsData;
    console.log(data.response);
        return data.response;
};

$scope.displayStarWarsData();

});
