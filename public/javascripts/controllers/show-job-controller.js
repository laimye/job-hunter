(function() {
	'use strict';

angular.module('app')
.controller('ShowJobController', ShowJobController);

ShowJobController.$inject = ['Job', '$stateParams'];

function ShowJobController(Job, $stateParams) {
	var vm = this;
	vm.job = Job.get({id: $stateParams.jobId});

	vm.addComment = function() {
		Job.addComment({jobId: $stateParams.jobId, text: vm.comment}, function(job) {
			vm.job = job;
			vm.comment = '';
		});
	}

	vm.deleteComment = function (comment) {
		Job.deleteComment({commentId: comment._id}, function(job) {
			vm.job = job;
		});
	};

	vm.addStep = function() {
		Job.addStep({jobId: $stateParams.jobId, text: vm.step.content, due: vm.step.due}, 
			function(job) {
			vm.job = job;
			vm.step = {};
		});
	}

	vm.deleteStep = function (step) {
		Job.deleteStep({stepId: step._id}, function(job) {
			vm.job = job;
		});
	};
}

})();