webAppController.landingCtrl = function($scope, $interval, $location, $state, $http, $rootScope, userSvc){
	
	$scope.login = function(){
		window.plugins.googleplus.login(
	      {},
	      function (user_data) {
	        // For the purpose of this example I will store user data on local storage
	        userSvc.setUser({
	          userID: user_data.userId,
	          name: user_data.displayName,
	          email: user_data.email,
	          picture: user_data.imageUrl,
	          accessToken: user_data.accessToken,
	          idToken: user_data.idToken
	        });

	        

	        $rootScope.go('app.home');
	      // document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
	      },
	      function (msg) {
	        //$ionicLoading.hide();
	      }
	    );
	};
		


	// SLIDER OPTIONS
	$(document).ready(function() {

	    $('.collapsible').collapsible();
	    $('.slider').slider({
	        full_width: true,
	        height: 515,
	        indicators: false
	    });
	    $('.materialboxed').materialbox();
	});


		


};