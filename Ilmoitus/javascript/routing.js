ilmoitusApp.config(['$routeProvider',
	function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'html/template.html',
			controller: 'templateController'
		}).
		when('/login', {
			templateUrl: 'html/login.html',
			controller: 'loginController'
		}).
		/*when('/declarations', {
			templateUrl: 'html/declarations.html',
			controller: 'declarationsController'
		}).
		when('/declaration/:declarationId', {
			templateUrl: 'html/declarationDetails.html',
			controller: 'declarationDetailsController'
		}).
		when('/newDeclaration', {
			templateUrl: 'html/newDeclaration.html',
			controller: 'newDeclarationController'
		}).*/
		otherwise({
			redirectTo: '/'
		});
	}]);