var app = angular.module("calcApp",[]);

app.controller("mainController", ["$scope", function($scope) {
    $scope.Add = function(opt1, opt2) {
        $scope.sum = 0;
        if (opt1 === "" || opt2 === "") {
            alert("Please enter both fields");
            $scope.opt1 = "";
            $scope.opt2 = "";
        } else {
            $scope.sum = opt1 + opt2;
            $scope.answer = "Adding " + opt1  + " and " + opt2  + " gives you... " + $scope.sum;
            // $scope.opt1 = "";
            // $scope.opt2 = "";
        }
    }
    
    $scope.Subtract = function(opt1, opt2) {
        $scope.sum = 0;
        if (opt1 === "" || opt2 === "") {
            alert("Please enter both fields");
            $scope.opt1 = "";
            $scope.opt2 = "";
        } else {
            $scope.sum = opt1 - opt2;
            $scope.answer = "Subtracting " + opt1 + " and " + opt2 + " gives you... " + $scope.sum;
            // $scope.opt1 = "";
            // $scope.opt2 = "";
        }
    }
    
    $scope.Multiply = function(opt1, opt2) {
        $scope.sum = 0;
        if (opt1 === "" || opt2 === "") {
            alert("Please enter both fields");
            $scope.opt1 = "";
            $scope.opt2 = "";
        } else {
            $scope.sum = opt1 * opt2;
            $scope.answer = "Multiplying " + opt1 + " and " + opt2 + " gives you... " + $scope.sum;
            // $scope.opt1 = "";
            // $scope.opt2 = "";
        }
    }
    
    $scope.Divide = function(opt1, opt2) {
        $scope.sum = 0;
        if (opt1 === "" || opt2 === "") {
            alert("Please enter both fields");
            $scope.opt1 = "";
            $scope.opt2 = "";
        } else {
            if(opt2 !== 0) {
            $scope.sum = opt1 / opt2;
            $scope.answer = "Dividing " + opt1 + " and " + opt2 + " gives you... " + $scope.sum;
            // $scope.opt1 = "";
            // $scope.opt2 = "";
        } else {
            alert ("This is not an option!!!");
            $scope.opt1 = "";
            $scope.opt2 = "";
        }
    }
    }
}]);