var app = angular.module('CoffeemateWebApp');

app.controller('coffeematesController', ['$scope','$http','$location', function($scope, $http,$location) {
    // create a message to display in our view
    $scope.message = 'Coffeemates Page!';

    findAll();

    function findAll() {
        $http.get('/coffeemates')
            .success(function (data) {
                $scope.coffeemates = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


    $scope.incrementUpvotes = function (id) {
        $http.put('/coffeemates/' + id + '/votes')
            .success(function (data) {
                console.log(data);
                findAll();
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.delete = function (id) {
        if (confirm("Are you sure you want to delete this Coffeemate?")) {
            console.log('Deleting id : ' + id);
            $http.delete('/coffeemates/' + id)
                .success(function (data) {
                    console.log(data);
                    findAll();
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        }
    };

    $scope.update = function (coffeemate) {
        console.log(coffeemate);
        $location.path('/update/' + coffeemate._id);

    };
}
  ]);
