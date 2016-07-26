var app = angular.module('CoffeemateWebApp');


app.controller('contactController', ['$scope', function($scope) {
    // create a message to display in our view
      $scope.message = 'Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The plant is native to subtropical Africa and some islands in southern Asia.';
     }
  ]);
