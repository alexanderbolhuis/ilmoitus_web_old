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

	$scope.selectedNavBtn;

	// Button listeners
	$scope.logoutBtnClick = function(){ 
		$state.go('login');
	}

	$scope.navBtnClick = function(targetState) {
		$state.go(targetState);
	}

	$scope.navBtnSelect = function (navBtnId) {
		if($scope.selectedNavBtn) {$scope.selectedNavBtn.removeClass("selected");}
		$("#"+navBtnId).addClass("selected");
		$scope.selectedNavBtn = $("#"+navBtnId);
    }
});

ilmoitusApp.controller('declarationsController', function($scope, $state, $http) {
	$http.get('/declarations/employee').then(function(res){
		$scope.declarationList = res.data;
	}, function(err) { 
		//Data not fetched, use backup
		//TODO: Delete this function and show some error
		$scope.declarationList = [
			{ 'id':'1', 'created_at':'06-03-2014', 'declaraionlines':[''], 'totalprice':'100,50', 'state':'Goedgekeurd', 'comment':'Komt op loonstrook voor: 31-4-2012' },
			{ 'id':'2', 'created_at':'07-03-2014', 'declaraionlines':['', '', ''], 'totalprice':'50', 'state':'In behandeling', 'comment':'' },
			{ 'id':'3', 'created_at':'08-03-2014', 'declaraionlines':['', ''], 'totalprice':'85,65', 'state':'Openstaand', 'comment':'' }
		];
	});
		
	//Select declaration
	$scope.selectDeclaration = function(declaration){
		$scope.currentdeclaration = declaration;
	}
	
	//Doubleclick declaration
	$scope.openDeclarationDetails = function(declarationid){
 		$state.go('template.declarationDetails', {declarationId: declarationid});
  	}
	
	//Open declaration button
	$scope.openDeclarationDetailsBtn = function(declarationid){
 		$state.go('template.declarationDetails', {declarationId: $scope.currentdeclaration.id});
  	}
	
	//Delete declaration button
	$scope.deleteDeclarationDetailsBtn = function(declarationid){
 		//TODO: bind DELETE handler
		alert('Consider declaration "'+$scope.currentdeclaration.id+'" deleted.');
  	}
});

ilmoitusApp.controller('newDeclarationController', function($scope) {
	$scope.navBtnSelect("newDeclarationBtn");
	$(".datepicker").datepicker();
});

ilmoitusApp.controller('declarationsSubmittedController', function($scope) {
	$scope.navBtnSelect("");
});

ilmoitusApp.controller('sendedDeclarationsController', function($scope) {
	$scope.navBtnSelect("sendedDeclarationsBtn");
});

ilmoitusApp.controller('declarationsHistoryController', function($scope) {
	$scope.navBtnSelect("declarationsHistoryBtn");
});

ilmoitusApp.controller('declarationDetailsController', function($scope, $stateParams) {
	// Get declaration ID from url parameter.
	$scope.declarationId = $stateParams.declarationId;
});

//Remove
ilmoitusApp.controller('testPageController', function($scope) {
	$scope.navBtnSelect("testPageBtn");
});