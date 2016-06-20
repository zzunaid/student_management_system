angular.module('StudentApp', [
  'StudentApp.services',
  'StudentApp.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when("/rosters", {templateUrl: "partials/rosters.html", controller: "rostersController"}).
  when("/rosters/:id", {templateUrl: "partials/students.html", controller: "studentsController"}).
  when("/students/:roster_id/:id", {templateUrl: "partials/student.html", controller: "studentController"}).
  otherwise({redirectTo: '/rosters'});
}]);
