angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};

    ergastAPI.getRosters = function() {
      return $http.get("http://localhost:3000/rosters");
    }

    ergastAPI.getStudents = function(id) {
      return $http.get("http://localhost:3000/students?roster_id="+id)
    }

    ergastAPI.getStudent = function(id) {
      return $http.get("http://localhost:3000/students/"+id)
    }

    ergastAPI.deleteStudent = function(id) {
      return $http.delete("http://localhost:3000/students/"+id)
    }

    ergastAPI.updateStudent = function(id, data) {
      return $http.put("http://localhost:3000/students/"+id, data)
    }

    ergastAPI.createStudent = function(id, data) {
      return $http.post("http://localhost:3000/students/", data)
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP',
        url: 'http://ergast.com/api/f1/2013/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });
