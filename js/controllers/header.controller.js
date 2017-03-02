(function() {
    angular
        .module('myApp')
        .controller('HeaderController', function($scope, User, helpers) {
            $scope.userName = User.name;

            function updateNameInScope(newName) {
                $scope.userName = newName;
            }
            
            User.registerCallback(updateNameInScope);

            var names = ['Пылып', 'Петро', 'Иннокентий', 'Береза', 'Василий'];

            $scope.changeName = function() {
                User.setName(names[helpers.rand(0, names.length - 1)]);

                if(!User.decClickCounter()){
                    User.unRegisterCallback(updateNameInScope);
                }
            };



        });


})();