(function() {
'use strict';

angular.module('app')
.controller('AddJobController', AddJobController);

AddJobController.$inject = ['Job', '$state'];

function AddJobController(Job, $state) {
	var vm = this;
	vm.job = {};

	vm.addJob = function() {
		Job.save(vm.job, function(job) {
			vm.job = {};
			$state.go('home');
		})
	}
}

})();