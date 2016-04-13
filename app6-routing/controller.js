angular.module('routePractice').controller('controller', function($scope, service) {

$scope.displaySmurfData = function() {
    service.getSmurfData().then(function(response) {
        $scope.smurfData = response;
    });
};

$scope.displaySmurfData();

});
