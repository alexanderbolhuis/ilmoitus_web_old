ilmoitusApp.controller('loginController', ['$scope',
function($scope, $routeParams) {

}]);

ilmoitusApp.controller('templateController', ['$scope',
function($scope, $routeParams) {
	//PLACEHOLDERS login info
	$scope.userName = "Piet Maas";
	$scope.userId = "9120103";

	// Button listeners
	$scope.logoutBtnClick = function(){ 
		window.location = "#/login";
	}
	$scope.navDeclarationsBtnClick = function(){ 
		window.location = "#/";
	}
	$scope.navNewDeclarationBtnClick = function(){ 
		window.location = "#/newDeclaration";
	}
}]);

ilmoitusApp.controller('declarationsController', ['$scope',
function($scope, $routeParams) {

}]);

ilmoitusApp.controller('newDeclarationController', ['$scope',
function($scope, $routeParams) {

}]);

ilmoitusApp.controller('declarationDetailsController', ['$scope', '$routeParams',
function($scope, $routeParams) {
	// Get declaration ID from url parameter.
	$scope.declarationId = $routeParams.declarationId;
}]);