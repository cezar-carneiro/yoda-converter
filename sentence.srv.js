angular.module('yoda-converter')
    .service('sentenceService', ['$http', function($http){

        this.converting = function(input){
            return $http({
                url: 'https://yoda.p.mashape.com/yoda',
                method: 'GET',
                headers: {
                    'X-Mashape-Key': 'PUT_YOUR_OWN_MASHAPE_KEY_HERE',
                    'Accept': 'text/plain'
                },
                params: {
                    'sentence': input
                }
            }).then(function(response){//success
                return response.data;
            }, function() {//error
                console.error('Requisição de Pesquisa falhou.');
            });
        };
        
    }]);
