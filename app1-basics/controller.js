angular.module('attempt6').controller('controller', function($scope, service) {

 $scope.displayData = service.getData();

 $scope.newUser = service.addUser;


});
