angular.module('friendsList')
.controller('mainCtrl', function($scope) {
  $scope.title = "Hello"
  $scope.friends = ['colton', 'tyler', 'carlos', 'carmelo'];
  $scope.addToDo = function(newToDo) {
    $scope.friends.push(newToDo)
  };
  $scope.hideToDo = function() {
    $scope.hide = !$scope.hide
  }
  $scope.removeTodo = function(index) {
    $scope.friends.splice(index, 1);
  }
});
