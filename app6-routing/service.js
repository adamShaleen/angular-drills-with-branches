angular.module('routePractice').service('service', function($http) {

    this.getSmurfData = function() {
        return $http ({
            method: 'GET',
            url: "http://smurfs.devmounta.in/smurfs/"
        }).then(function(response) {
            console.log(response);
            return response.data;
        });
    };

    // this.getSmurfData();

});
