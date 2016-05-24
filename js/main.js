'use strict';

angular.module('App', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('home', {
		url: '/home',
		templateUrl: 'partials/home.html'
	})
	.state('cisc499', {
		url: '/cisc499',
		templateUrl: 'partials/cisc499.html'
	})
	.state('cisp360', {
		url: '/cisp360',
		templateUrl: 'partials/cisp360.html'
	})

	$urlRouterProvider.otherwise('/home');
})

.controller('MainCtrl', ['$scope', function($scope) {
	$scope.sidebar;
	$scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		switch(toState.name) {
			case 'home':
				$scope.sidebar = [{
					title: 'D2L',
					url: 'http://d2l.losrios.edu'
				},   {
					title: 'Hacker Lab',
					url: 'http://hackerlab.org/'
				}, {
					title: 'Porfolium',
					url: 'https://portfolium.com/'
				}, {
					title: 'Contact Me',
					url: 'mailto:allens@flc.losrios.edu'
				}]
				break;
			case 'cisc499':
				$scope.sidebar = [{
					title: 'D2L',
					url: 'http://d2l.losrios.edu'
				}, {
					title: 'IGDPD',
					url: 'http://book.prototools.net/'
				}, {
					title: 'GDC',
					url: 'http://www.gdconf.com/'
				}, {
					title: 'Unity',
					url: 'https://unity3d.com/'
				}, {
					title: 'Contact Me',
					url: 'mailto:allens@flc.losrios.edu'
				}];
				break;
			case 'cisp360':
				$scope.sidebar = [{
					title: 'D2L',
					url: 'http://d2l.losrios.edu'
				}, {
					title: 'Contact Me',
					url: 'mailto:allens@flc.losrios.edu'
				}]
		}
	})
}])