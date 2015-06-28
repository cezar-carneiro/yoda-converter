angular.module('yoda-converter', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/sentence', {
                templateUrl: 'sentence.view.html'
            }).otherwise({//rota padrão
                redirectTo: '/sentence'
            });
    }]);
