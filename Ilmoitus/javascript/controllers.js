ilmoitusApp.controller('loginController', function($scope, $state) {
	//Login button. Check for correct credentials.
	$scope.loginBtnClick = function() {
		$state.go('template.declarations');
	}
});

ilmoitusApp.controller('templateController', function($scope, $state) {
	//PLACEHOLDERS login info. This info should be retrieved from models (factories).
	$scope.userName = "Piet Maas";
	$scope.userId = "9120103";

	// Button listeners
	$scope.logoutBtnClick = function(){ 
		$state.go('login');
	}

	$scope.navBtnClick = function(targetState, sender) {
		var btn = angular.element(sender.srcElement);
		//alert(btn.val());
		$state.go(targetState);
	}

	$scope.hi = function (sender) {
       var btn = angular.element(sender.srcElement);
       alert(btn.val());
    }

	/*$scope.navDeclarationsBtnClick = function(){
		$state.go('template.declarations');
	}
	$scope.navNewDeclarationBtnClick = function(){
		$state.go('template.newDeclaration');
	}*/
});

ilmoitusApp.controller('declarationsController', function($scope, $state) {
	//Metod to open the declaration Details page
	$scope.openDeclarationDetails = function(declarationId){
		$state.go('template.declarationDetails', {declarationId: declarationId});
	}
});

ilmoitusApp.controller('newDeclarationController', function($scope) {
	
});

ilmoitusApp.controller('declarationDetailsController', function($scope, $stateParams) {
	// Get declaration ID from url parameter.
	$scope.declarationId = $stateParams.declarationId;
});