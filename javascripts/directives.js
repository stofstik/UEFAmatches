laurierboomApp.directive('lbGroupstageItem', function () {
    return {
        scope: {
            country: '=lbGroupstageItem'
        },
        restrict: 'EA',
        templateUrl: 'table-item-groupstage.html'
    };

});