var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/listings', {
            templateUrl: '/views/templates/listings.html',
            controller: 'ListingController',
            controllerAs: 'hc'
        })
        .when('/other', {
            templateUrl: '/views/templates/other.html',
            controller: 'OtherController',
            controllerAs: 'oc'
        })
        .otherwise({
            redirectTo: 'listings'
        });
}]);
