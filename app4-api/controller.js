angular.module('attempt6').controller('controller', function($scope, service) {

$scope.displayGoogleData = function() {
    service.getGoogleData().then(function(response) {
        $scope.data = response;
        // console.log(response);
    });
};

$scope.displayGoogleData();


});
