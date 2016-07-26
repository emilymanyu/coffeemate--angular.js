var app = angular.module('CoffeemateWebApp', ['ngRoute','uiGmapgoogle-maps']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })
        .when('/register', {
            templateUrl: 'pages/register.ejs',
            controller: 'registerController'
        })
        .when('/login', {
            templateUrl: 'pages/login.ejs',
            controller: 'loginController'
        })

        // route for the add page
        .when('/add', {
            templateUrl : 'pages/add.ejs',
            controller  : 'addController'
        })

        // route for the Coffeemates page
        .when('/coffeemates', {
            templateUrl : 'pages/coffeemates.ejs',
            controller  : 'coffeematesController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.ejs',
            controller  : 'aboutController'
        })
        .when('/update/:id', {
            templateUrl : 'pages/update.ejs',
            controller  : 'updateController'
        })
        // route for the map
        .when('/map', {
            templateUrl : 'pages/map.ejs',
            controller  : 'mapController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.ejs',
            controller  : 'contactController'


    })
})




  
  


