angular.module('attempt6').service('service', function($http, $q) {

this.getGoogleData = function() {
    var defer = $q.defer();
    $http ({
        method: 'GET',
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false"
    }).then(function(response) {
        console.log(response.data.results);
        defer.resolve(response.data.results);
    });
        return defer.promise;
};

// this.getGoogleData();

});
