let myCtrl = angular.module("myCtrl", []);

myCtrl.controller("categoryctrl", function ($scope) {
  $scope.orderByField = "cname";
  $scope.reverseOrder = false;
  $scope.searchType = "cname";
  $scope.searchText = "";
});

myCtrl.controller("laptopctrl", function ($scope) {
  $scope.orderByField = "brand";
  $scope.reverseOrder = false;
  $scope.searchType = "brand";
  $scope.searchText = "";
})