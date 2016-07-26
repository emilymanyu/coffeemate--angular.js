var app = angular.module('CoffeemateWebApp');

app.controller('addController', ['$scope', '$location', '$http', function($scope, $location, $http) {
    
    $scope.formData = {};

    $scope.message = 'Caffeemate Page!';
    $scope.amount = 2;
    $scope.options = [{ name: "Cappuccino", id: 0 }, { name: "Latter", id: 1 },{ name: "Espresso", id: 2 },{ name: "Irish Coffee", id: 3 },{ name: "American Coffee", id: 4}];
    $scope.formData.nameOptions = $scope.options[0];

    //Reset our formData fields
    $scope.formData.name = 'Cappuccino';
    $scope.formData.amount = 2;
    $scope.formData.upvotes = 0;

    $scope.addCoffeemate = function(){
      $scope.formData.name = $scope.formData.nameOptions.name;
       $http.post('/coffeemates', $scope.formData)
            .success(function(data) {
                $scope.coffeemates = data;
                $location.path('/coffeemates');
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
              });
            };
  }

  ]);
