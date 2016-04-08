angular.module('attempt4').controller('controller', function($scope, service) {

$scope.displayData = function() {
    service.getData().then(function(response) {
        $scope.data = response;
    });
};


$scope.displayData();

});
