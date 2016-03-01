/**
 * Created by syedmuhammadtaha on 2/25/16.
 */

var newApp = angular.module('newApp', []);

newApp.controller('mainController', function($scope){

    $scope.subDept =   false
});


newApp.directive("collapseNavSide", function(){
    return{
        templateUrl: 'template.html'
    }

});