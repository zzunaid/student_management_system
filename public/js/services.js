angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getRosters = function() {
      return $http.get("https://evening-shelf-96900.herokuapp.com/rosters");
    }

    ergastAPI.getStudents = function(id) {
      return $http.get("https://evening-shelf-96900.herokuapp.com/students?roster_id="+id)
    }

    ergastAPI.getStudent = function(id) {
      return $http.get("https://evening-shelf-96900.herokuapp.com/students/"+id)
    }

    ergastAPI.deleteStudent = function(id) {
      return $http.delete("https://evening-shelf-96900.herokuapp.com/students/"+id)
    }

    ergastAPI.updateStudent = function(id, data) {
      return $http.put("https://evening-shelf-96900.herokuapp.com/students/"+id, data)
    }

    ergastAPI.createStudent = function(id, data) {
      return $http.post("https://evening-shelf-96900.herokuapp.com/students/", data)
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });
