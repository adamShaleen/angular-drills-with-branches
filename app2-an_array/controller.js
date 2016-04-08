angular.module('attempt3').controller('controller', function($scope, service) {

    $scope.displayData = service.getData();




});
