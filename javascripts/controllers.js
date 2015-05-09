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
        groupStance: ""
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



laurierboomApp.value('appValCountries', [
    {
        name: "Frankrijk",
        group: "A",
        stance: 0
    },
    {
        name: "B1",
        group: "B",
        stance: 0
    },
    {
        name: "C1",
        group: "C",
        stance: 0
    },
    {
        name: "D1",
        group: "D",
        stance: 0
    },
    {
        name: "E1",
        group: "E",
        stance: 0
    },
    {
        name: "F1",
        group: "F",
        stance: 0
    },
    {
        name: "A2",
        group: "A",
        stance: 0
    },
    {
        name: "B2",
        group: "B",
        stance: 0
    },
    {
        name: "C2",
        group: "C",
        stance: 0
    },
    {
        name: "D2",
        group: "D",
        stance: 0
    },
    {
        name: "E2",
        group: "E",
        stance: 0
    },
    {
        name: "F2",
        group: "F",
        stance: 0
    }
]);

laurierboomApp.value('AppValGroupA', ['A1', 'A2', 'A3', 'A4']);
laurierboomApp.value('AppValGroupB', ['B1', 'B2', 'B3', 'B4']);
laurierboomApp.value('AppValGroupC', ['C1', 'C2', 'C3', 'C4']);
laurierboomApp.value('AppValGroupD', ['D1', 'D2', 'D3', 'D4']);
laurierboomApp.value('AppValGroupE', ['E1', 'E2', 'E3', 'E4']);
laurierboomApp.value('AppValGroupF', ['F1', 'F2', 'F3', 'F4']);