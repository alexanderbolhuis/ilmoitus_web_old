ilmoitusApp.config(function($stateProvider, $urlRouterProvider) {
	
	// For any unmatched url, redirect to /
	$urlRouterProvider.otherwise("/board/declarations");
	
	// Now set up the states
	$stateProvider
	.state('login', {
		url: "/login",
		templateUrl: "html/login.html",
		controller: "loginController"
	})
	.state('template', {
		url: "/board",
		templateUrl: "html/template.html",
		controller: "templateController"
	})
	.state('template.declarations', {
		url: "/declarations",
		templateUrl: "html/declarations.html",
		controller: "declarationsController"
	})
	.state('template.newDeclaration', {
		url: "/newDeclaration",
		templateUrl: "html/newDeclaration.html",
		controller: "newDeclarationController"
	})
	.state('template.declarationDetails', {
		url: "/declarationDetails/:declarationId",
		templateUrl: "html/declarationDetails.html",
		controller: "declarationDetailsController"
	})
});