(function() {
	'use strict';


angular.module('app', ['ui.router', 'ngResource'])
.config(configRoutes)
.run(runBlock);

runBlock.$inject = ['$rootScope', '$state'];

function runBlock ($rootScope, $state) {
	$rootScope.user = loggedInUser;
	$rootScope.$on('$stateChangeStart', function(evt, toState) {
	  if (toState.loginRequired && !$rootScope.user) {
	    evt.preventDefault();
	    $state.go('login');
	  }
	});
}


configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function configRoutes($stateProvider, $urlRouterProvider) {

	  $urlRouterProvider.otherwise('/login');

	  $stateProvider

	  .state('home', {
	  	url: '/home',
	  	templateUrl: 'templates/jobs-index.html',
	  	controller: 'AllJobsController as allCtrl',
	  	loginRequired: true
	  })

	  .state('newJob', {
	  	url: '/new',
	  	templateUrl: 'templates/jobs-new.html',
	  	controller: 'AddJobController as addCtrl',
	  	loginRequired: true
	  })

	  .state('showJob', {
	  	url: '/details/:jobId',
	  	templateUrl: 'templates/job-show.html',
	  	controller: 'ShowJobController as showCtrl',
	  	loginRequired: true
	  })

	  .state('login', {
	  	url: '/login',
	  	templateUrl: 'templates/landing-page.html'
	  })

}



})();