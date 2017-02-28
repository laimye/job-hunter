(function() {
	'use strict';

angular.module('app')
.controller('ShowJobController', ShowJobController);

ShowJobController.$inject = ['Job', '$stateParams'];


function ShowJobController(Job, $stateParams) {
	var vm = this;
	vm.job = Job.get({id: $stateParams.jobId});

}





})();