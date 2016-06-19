angular.module('F1FeederApp', [
  'F1FeederApp.services',
  'F1FeederApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/rosters", {templateUrl: "partials/rosters.html", controller: "rostersController"}).
  when("/rosters/:id", {templateUrl: "partials/students.html", controller: "studentsController"}).
  when("/students/:roster_id/:id", {templateUrl: "partials/student.html", controller: "studentController"}).
  otherwise({redirectTo: '/rosters'});
}]);
