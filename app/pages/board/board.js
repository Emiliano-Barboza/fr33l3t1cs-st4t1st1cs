'use strict';

angular.module('myApp.board', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/board', {
            templateUrl: 'pages/board/board.html',
            controller: 'BoardCtrl'
        });
    }])

    .controller('BoardCtrl', [function() {

    }]);
