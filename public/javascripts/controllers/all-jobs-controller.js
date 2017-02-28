(function() {
'use strict';

angular.module('app')
.controller('AllJobsController', AllJobsController);

AllJobsController.$inject = ['Job'];


function AllJobsController(Job) {
	var vm = this;
	vm.jobs = Job.query();
}







})();