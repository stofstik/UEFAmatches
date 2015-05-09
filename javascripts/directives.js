laurierboomApp.directive('lbGroupstageItem', function () {
    return {
        scope: {
            country: '=lbGroupstageItem'
        },
        restrict: 'EA',
        templateUrl: '<td> < div > {
            {
                country.name
            }
        } < /div> < input type = "number"
        min = 1 max = 4 / >
        < /td>'
    };

});