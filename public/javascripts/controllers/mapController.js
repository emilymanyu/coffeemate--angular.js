
var app = angular.module('CoffeemateWebApp');

app.controller('mapController', ['$scope','$http', function ($scope, $http) {
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    $scope.marker= {
        id:'2342',
        coord:{
            latitude: 45.5, longitude: -73.5
        }
    };

    $scope.windowOptions = {
        visible: false
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

    $scope.title = "Window Title!";
}]);
