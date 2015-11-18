    angular.module('angularSpa')
    .controller('ActorsCtrl', function($scope, actorsService, $routeParams){
        $scope.actors = [];
        function getActors(){
            actorsService.getActors()
            .success(function(data){
                $scope.actors = data;
                $scope.actorOnly=$scope.actors[$routeParams.id-1];
                $scope.status = 'Todo funciona bien';
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores, "asadmin start-domain" arreglaria el problema';
            });
        }
        getActors();
    });
