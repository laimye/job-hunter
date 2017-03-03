(function() {
'use strict';

angular.module('app')
.controller('AllJobsController', AllJobsController);

AllJobsController.$inject = ['Job', '$http'];


function AllJobsController(Job, $http) {
	var vm = this;
	Job.query(function(jobs) {
		vm.jobs = jobs;
		vm.companies = vm.getUnique(vm.jobs, 'company');
	});

	vm.deleteJob = function(job) {
		job.$delete(function() {
			vm.jobs.splice(vm.jobs.findIndex(j => j._id === job._id), 1);
		});
	};

	vm.getUnique = function(arr, field) {
		var obj = {};
		arr.forEach(function(e) {
			obj[e[field]] = true;
		});
		return Object.keys(obj).sort();
	};

	vm.checkEmail = function() {
		$http.get('/api/email').then(function(res) {
			console.log(res.data)
		})
	}
}


})();