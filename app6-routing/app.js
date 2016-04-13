angular.module('routePractice', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'homeTemplate.html',

        })
        .state('signUp', {
            url: '/signUp',
            templateUrl: 'signUpTemplate.html',

        })
        .state('details', {
            url: '/details',
            templateUrl: 'detailsTemplate.html',

        });

    $urlRouterProvider
        .otherwise('/');

});
