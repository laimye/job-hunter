(function() {
	'use strict';

angular.module('app')
.factory('Job', JobsService);

JobsService.$inject = ['$resource'];

function JobsService($resource) {
	
	return $resource('/api/jobs/:id', {id: '@_id'});	

	function showJob(jobId) {
		return Job.get({id: jobId}).$promise
	}
}


})();