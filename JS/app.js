var app = angular.module('app',["filters","myCtrl","ngRoute"]);

app.config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider
        .when("/", {
          templateUrl: "./views/home.html",
        })
        .when("/category", {
          templateUrl: "./views/category.html",
          controller: "categoryctrl",
        })
        .when("/add-category", {
          templateUrl: "./views/category-add.html",
        })
        .when("/edit-category", {
          templateUrl: "./views/category-edit.html",
        })
        .when("/laptop", {
          templateUrl: "./views/laptop-list.html",
          controller: "laptopctrl",
        })
        .when("/add-laptop", {
          templateUrl: "./views/laptop-list-add.html",
        })
        .when("/edit-laptop/:id", {
          templateUrl: "./views/laptop-list-edit.html",
        })
        .otherwise({
          templateUrl: "./views/404.html",
        });
    },
]);

app.run(function ($rootScope, $http, $location) {
    $http.get("js/categories.json").then(function (res) {
      $rootScope.categories = res.data;
    });
    $http.get("js/data.json").then(function (res) {
      $rootScope.product = res.data;
    });
  
    $rootScope.$on("$locationChangeSuccess", function () {
      console.log($location.path());
      $rootScope.page = $location.path();
    });
  });