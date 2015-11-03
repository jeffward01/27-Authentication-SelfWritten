var app = angular.module('AngularAuthApp', ['ngRoute', 'LocalStorageModule', 'angular-loading-bar', 'ngResource', 'ui.router']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/js/views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/js/views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/js/views/signup.html"
    });

    $routeProvider.when("/orders", {
        controller: "ordersController",
        templateUrl: "/js/views/orders.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
});


app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptorService');
})

app.run(['authService', function (authService) {
    authService.fillAuthData();
}]);

