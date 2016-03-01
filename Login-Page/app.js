/**
 * Created by syedmuhammadtaha on 2/24/16.
 */
var myApp = angular.module('myApp', ['ngRoute', ]);

myApp.config(function($routeProvider){
    $routeProvider

        .when('/', {
            templateUrl: 'pages/student.html',
            controller: 'studentLoginController'
        })

        .when('/teacher-login', {
            templateUrl: 'pages/teacher.html',
            controller: 'teacherLoginController'
        })

        .when('/signup-student', {
            templateUrl: 'pages/signup-student.html',
            controller: 'confirmationController'
        })
});

myApp.controller('studentLoginController', ['$scope' ,'$log', function($scope, $log){
    //$scope.university =

}]);

myApp.controller('teacherLoginController', ['$scope' ,'$log', function($scope, $log){
    $scope.title = 'i am angular';
}]);

myApp.controller('confirmationController', ['$scope', function($scope){
    $scope.officialRollNo = '';
}])

