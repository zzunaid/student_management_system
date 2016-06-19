angular.module('F1FeederApp.controllers', []).

  /* Drivers controller */
  controller('rostersController', function($scope, ergastAPIservice) {
    $scope.nameFilter = null;
    $scope.driversList = [];
    $scope.searchFilter = function (driver) {
        var re = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
    };

    ergastAPIservice.getRosters().success(function (response) {
        //Digging into the response to get the relevant data
        $scope.rostersList = response.payload.rosters;
    });
  }).

  /* Drivers controller */
  controller('studentController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.roster_id = $routeParams.roster_id;
    if($scope.id !== "0"){
      ergastAPIservice.getStudent($routeParams.id).success(function (response) {
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

        ergastAPIservice.updateStudent($scope.student.id, $scope.student)
        .success(function (data, status, headers) {
            $scope.ServerResponse = data;
            alert( "Student has been updated successfully." );
            window.history.back();
        })
        .error(function (data, status, header, config) {
            $scope.ServerResponse = htmlDecode("Data: " + data +
                "\n\n\n\nstatus: " + status +
                "\n\n\n\nheaders: " + header +
                "\n\n\n\nconfig: " + config);
            alert( "Something gone wrong" );
        });
      } else {
        ergastAPIservice.createStudent($scope.id, $scope.student)
        .success(function (data, status, headers) {
            $scope.ServerResponse = data;
            alert( "Student has been created successfully." );
            window.history.back();
        })
        .error(function (data, status, header, config) {
            $scope.ServerResponse = htmlDecode("Data: " + data +
                "\n\n\n\nstatus: " + status +
                "\n\n\n\nheaders: " + header +
                "\n\n\n\nconfig: " + config);
            alert( "Something gone wrong" );
        });
      }
    };
  }).

  /* Driver controller */
  controller('studentsController', function($scope, $routeParams, ergastAPIservice) {
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;

    ergastAPIservice.getStudents($scope.id).success(function (response) {
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

          ergastAPIservice.deleteStudent(id)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
                $scope.students.splice( index, 1 );
                alert( "Student has been deleted." );
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
                alert( "Something gone wrong" );
            });

  };

  });
