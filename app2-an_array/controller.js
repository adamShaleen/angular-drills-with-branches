angular.module('attempt2').controller('controller', function($scope, service) {

$scope.displayData = service.getData();


});
