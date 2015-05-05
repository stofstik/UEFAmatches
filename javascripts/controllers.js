laurierboomApp.controller('MatchesController', function ($scope, $http, lastDataRefresh) {
    console.log("controller loaded");
    /*$scope.groupA = [];
    $scope.groupB = [];
    $scope.groupC = [];
    $scope.groupD = [];
    $scope.groupE = [];
    $scope.groupF = [];
    $scope.eighth = [];
    $scope.quarter = [];
    $scope.semi = [];
    $scope.final = [];*/

    $http.jsonp('https://www.kimonolabs.com/api/ad948t7a?apikey=d253a4934a1adf67226b34245a1fd409&callback=JSON_CALLBACK')
        .success(function (data) {
            $scope.matches = data['results']['matches'];
            console.log($scope.matches);
            $scope.groupA = $scope.matches.slice(0, 6);
            $scope.groupB = $scope.matches.slice(6, 12);
            $scope.groupC = $scope.matches.slice(12, 18);
            $scope.groupD = $scope.matches.slice(18, 24);
            $scope.groupE = $scope.matches.slice(24, 30);
            $scope.groupF = $scope.matches.slice(30, 36);
            $scope.eighth = $scope.matches.slice(37, 45);
            $scope.quarter = $scope.matches.slice(46, 50);
            $scope.semi = $scope.matches.slice(51, 53);
            $scope.final = [{
                num: 51,
                home: 'Winnaar 49',
                away: 'Winnaar 50',
                venue: 'Saint-Denis',
                date: '10-07-2016',
                time: '21:00'
                }];
        });
});

laurierboomApp.value('lastDataRefresh', 0);