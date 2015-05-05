var laurierboomApp = angular.module('laurierboom-pool', ['ngRoute']);

// define the route
laurierboomApp.config(function ($routeProvider) {
    $routeProvider
        .when('/groupfase', {
            controller: 'MatchesController',
            templateUrl: 'partials/groupfase.html'
        })
        .when('/eighthfinals', {
            controller: 'MatchesController',
            templateUrl: 'partials/eighthfinals.html'
        })
        .when('/quarterfinals', {
            controller: 'MatchesController',
            templateUrl: 'partials/quarterfinals.html'
        })
        .when('/semifinals', {
            controller: 'MatchesController',
            templateUrl: 'partials/semifinals.html'
        })
        .when('/finals', {
            controller: 'MatchesController',
            templateUrl: 'partials/finals.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});