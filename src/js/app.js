angular.module('ngMap').run(function($rootScope, NgMap) {
  NgMap.getMap().then(function(map) {
    $rootScope.map = map;
  });
});

(function() {
    myApp = angular.module('myApp', ['ngMap']);

    myApp.controller('SliderController', function($scope) {
        $scope.value = 2;
    });

    myApp.controller('MarkerController', function($scope,$http) {
        var url = "json/odense.json";

        $http.get(url).success( function(response) {
           $scope.markers = response.toilets;
        });
    });

    myApp.controller('GetUserPositionController', function($scope) {
        var options = {
            enableHighAccuracy: true
        };
        navigator.geolocation.getCurrentPosition(function(pos) {
            $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        },
        function(error) {
            alert('Unable to get location: ' + error.message);
        }, options);
    });

})();
