(function() {
    function config($locationProvider, $stateProvider){

        $locationProvider
            .html5Mode ( {
                enabled : true,
                requireBase: false
            });

        $stateProvider
            .state('home' , {
                url: '/',
                controller: 'RoomCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }


    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
}) ();