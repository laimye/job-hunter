(function() {
	'use strict';

angular.module('app')
.controller('EditJobController', EditJobController);

EditJobController.$inject = ['Job', '$stateParams', '$state'];


function EditJobController(Job, $stateParams, $state) {
	var vm = this;

	Job.get({id: $stateParams.jobId}, function(job) {
		job.appliedOn = new Date(job.appliedOn);
		job.followUp = new Date(job.followUp);
		vm.job = job;
	});

	vm.updateJob = function() {
		vm.job.$update();
		$state.go('showJob', {jobId: $stateParams.jobId})
	}

}





})();