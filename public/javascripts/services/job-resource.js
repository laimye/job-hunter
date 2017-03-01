(function() {
	'use strict';

angular.module('app')
.factory('Job', JobsService);

JobsService.$inject = ['$resource'];

function JobsService($resource) {

	return $resource(
		'/api/jobs/:id',
		{id: '@_id'},
		{
			update: {method: 'PUT'},
			addComment: {
				method: 'POST',
				url: '/api/jobs/:jobId/comments',
				params: {jobId: '@jobId'},
				text: ':text'
			},
			deleteComment: {
				method: 'DELETE',
				url: '/api/comments/:commentId',
				params: {commentId: '@commentId'}
			},
			addStep: {
				method: 'POST',
				url: '/api/jobs/:jobId/steps',
				params: {jobId: '@jobId'},
				text: ':text'
			},
			deleteStep: {
				method: 'DELETE',
				url: '/api/steps/:stepId',
				params: {stepId: '@stepId'}
			}
		}

	);	

}


})();