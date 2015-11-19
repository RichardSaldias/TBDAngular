(function(){

    angular.module('angularSpa', [
    'ngRoute','ngResource'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .when('/actors', {
            templateUrl:'views/actors.html',
            controller:'ActorsCtrl'
        })
        .when('/actors/:id', {
            templateUrl:'views/show.html',
            controller:'ActorsCtrl',
        })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
