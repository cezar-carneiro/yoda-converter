angular.module('yoda-converter')
    .controller('sentenceController',['$scope', 'sentenceService',
        function ($scope, sentenceService){

            $scope.sentence = {
                input: 'This is super simple',
                output: ''
            };

            $scope.onClick = function(){
                sentenceService.converting($scope.sentence.input)
                    .then(function(data){
                        $scope.sentence.output = data;
                });
            };

        }]
    );
