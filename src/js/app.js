(function() {
    myApp = angular.module('myApp', ['ngMap']);

    myApp.filter('capitalize', function() {
        return function(input, scope) {
            if (input != null) {
                input = input.toLowerCase();
                return input.substring(0,1).toUpperCase()+input.substring(1);
            }
        }
    });

    myApp.factory('Slider', function(){
        return { value: 400 };
    });

    myApp.controller('SliderController', function($scope, Slider) {
        $scope.Slider = Slider;
    });

    myApp.controller('MarkerController', function(NgMap, $http) {
        var vm = this;
        var url = "json/odense.json";
        vm.myMarkers = [];

        NgMap.getMap().then(function(map) {
            vm.map = map;
        });

        $http.get(url).success(function(response) {
            vm.myMarkers = response.toilets;
        });

        vm.showDetail = function(e, toilet) {
            vm.toilet = toilet;
            vm.map.showInfoWindow('toilet-iw', toilet.id);
        };

        vm.hideDetail = function() {
            vm.map.hideInfoWindow('toilet-iw');
        };
    });
})();
