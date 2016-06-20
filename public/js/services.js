angular.module('StudentApp.services', [])
  .factory('appAPIservice', function($http) {

    var appAPI = {};
    var server = "https://evening-shelf-96900.herokuapp.com"
    appAPI.getRosters = function() {
      return $http.get(server + "/rosters");
    }

    appAPI.getStudents = function(id) {
      return $http.get(server + "/students?roster_id="+id)
    }

    appAPI.getStudent = function(id) {
      return $http.get(server + "/students/"+id)
    }

    appAPI.deleteStudent = function(id) {
      return $http.delete(server + "/students/"+id)
    }

    appAPI.updateStudent = function(id, data) {
      return $http.put(server + "/students/"+id, data)
    }

    appAPI.createStudent = function(id, data) {
      return $http.post(server + "/students/", data)
    }

    return appAPI;
  });
