angular.module('attempt9', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.HTML'
        })


        .state('view1', {
            url: '/view1',
            templateUrl: 'view1.HTML'
        })

        .state('view2', {
            url: '/view2',
            templateUrl: 'view2.html'
        });


        $urlRouterProvider
        .otherwise('/');
});
