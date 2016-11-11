arthApp.controller('arthController',function($scope){
    $scope.arth={
        a:10,
        b:20,
        addition:function(){
            return parseInt($scope.arth.a) + parseInt($scope.arth.b);
        },

        subtraction:function(){
            return parseInt($scope.arth.a) - parseInt($scope.arth.b);
        },

        multiplication:function(){
            return parseInt($scope.arth.a) * parseInt($scope.arth.b);
        }
    };

});