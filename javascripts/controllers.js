laurierboomApp.controller('MatchesController', function ($scope, $http, appValCountries, appValGroups, appValTeams) {
    console.log("controller loaded");

    $scope.countries = appValCountries;
    $scope.groups = appValGroups;
    $scope.teams = appValTeams;
    console.log("$scope.countries:");
    console.log($scope.countries);

});

// Ridiculous dataset!!! Just did it this way so we could use ngRepeat easily
// We need to learn more about ngRepeat and custom directives!
laurierboomApp.value('appValTeams', {
    team1: {
        groupA: 'Frankrijk',
        groupB: 'Bosnia & Herzgovina',
        groupC: 'C1',
        groupD: 'D1',
        groupE: 'E1',
        groupF: 'F1'
    },
    team2: {
        groupA: 'A2',
        groupB: 'B2',
        groupC: 'Some country with a very long name',
        groupD: 'D2',
        groupE: 'E2',
        groupF: 'F2'
    },
    team3: {
        groupA: 'A3',
        groupB: 'B3',
        groupC: 'C3',
        groupD: 'D3',
        groupE: 'E3',
        groupF: 'F4'
    },
    team4: {
        groupA: 'A4',
        groupB: 'B4',
        groupC: 'C4',
        groupD: 'All these columns should be the same size :)',
        groupE: 'E4',
        groupF: 'Preferably justified to page width'
    }
});


laurierboomApp.value('appValGroups', {
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



/*   
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
       */