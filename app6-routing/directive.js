angular.module('attempt9').directive('pageDir', function() {

return {
    scope: {
        viewPage: "="
    },
    restrict: 'EA',
    templateUrl: 'directiveTemplate.html',
    controller: 'controller'
};


});
