angular.module('StudentApp.controllers', []).

  controller('rostersController', function($scope, appAPIservice) {
    appAPIservice.getRosters().success(function (response) {
        $scope.rostersList = response.payload.rosters;
    });
  }).

  controller('studentController', function($scope, $routeParams, appAPIservice) {
    $scope.id = $routeParams.id;
    $scope.roster_id = $routeParams.roster_id;
    if($scope.id !== "0"){
      appAPIservice.getStudent($routeParams.id).success(function (response) {
        $scope.student = response.payload.student;
      });
    } else {
      $scope.student = {
         "first_name": "",
         "last_name": "",
         "phone_number":"",
          "email_id":"",
         "average": "",
          "attendance": "",
          "roster_id": $scope.roster_id
      }
    }



    $scope.submit = function() {
        if($scope.id !== "0") {

        appAPIservice.updateStudent($scope.student.id, $scope.student)
        .success(function (data, status, headers) {
            $scope.ServerResponse = data;
            alert( "Student has been updated successfully." );
            window.history.back();
        })
        .error(function (data, status, header, config) {
            alert( "Something gone wrong" );
        });
      } else {
        appAPIservice.createStudent($scope.id, $scope.student)
        .success(function (data, status, headers) {
            $scope.ServerResponse = data;
            alert( "Student has been created successfully." );
            window.history.back();
        })
        .error(function (data, status, header, config) {
            alert( "Something gone wrong" );
        });
      }
    };
  }).

  /* Driver controller */
  controller('studentsController', function($scope, $routeParams, appAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    appAPIservice.getStudents($scope.id).success(function (response) {
        $scope.students = response.payload.students;
    });

    $scope.removePerson = function(id){
        var index = -1;
        var comArr = eval( $scope.students );
        for( var i = 0; i < comArr.length; i++ ) {
          if( comArr[i].id === id ) {
            index = i;
            break;
          }
        }
        if( index === -1 ) {
          alert( "Something gone wrong" );
          return;
        }

          appAPIservice.deleteStudent(id)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
                $scope.students.splice( index, 1 );
                alert( "Student has been deleted." );
            })
            .error(function (data, status, header, config) {
                alert( "Something gone wrong" );
            });

  };

  });
