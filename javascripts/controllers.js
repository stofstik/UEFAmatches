laurierboomApp.controller('MatchesController', function ($scope, $http, appValCountries) {
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
    $scope.countries = appValCountries;
    console.log($scope.countries);

    var country = {
        name: "",
        group: "",
        groupStance ""
    }



    $http.jsonp('https://www.kimonolabs.com/api/ad948t7a?apikey=d253a4934a1adf67226b34245a1fd409&callback=JSON_CALLBACK')
        .success(function (data) {
            /*            $scope.matches = data['results']['matches'];
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
                                        }];*/
        });
});



laurierboomApp.value('appValCountries', {
    groupA: {
        team1: 'Frankrijk',
        team2: 'A2',
        team3: 'A3',
        team4: 'A4'
    },
    groupB: {
        team1: 'Bosnia and Herzegovina',
        team2: 'Nederland',
        team3: 'B3',
        team4: 'B4'
    },
    groupC: {
        team1: 'C1',
        team2: 'C2',
        team3: 'C3',
        team4: 'C4'
    },
    groupD: {
        team1: 'D1',
        team2: 'D2',
        team3: 'D3',
        team4: 'D4'
    },
    groupE: {
        team1: 'E1',
        team2: 'E2',
        team3: 'E3',
        team4: 'E4'
    },
    groupF: {
        team1: 'F1',
        team2: 'F2',
        team3: 'F3',
        team4: 'F4'
    },
});

laurierboomApp.value('AppValGroupA', ['A1', 'A2', 'A3', 'A4']);
laurierboomApp.value('AppValGroupB', ['B1', 'B2', 'B3', 'B4']);
laurierboomApp.value('AppValGroupC', ['C1', 'C2', 'C3', 'C4']);
laurierboomApp.value('AppValGroupD', ['D1', 'D2', 'D3', 'D4']);
laurierboomApp.value('AppValGroupE', ['E1', 'E2', 'E3', 'E4']);
laurierboomApp.value('AppValGroupF', ['F1', 'F2', 'F3', 'F4']);