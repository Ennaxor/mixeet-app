webAppController.headerCtrl = function($scope, $location, $rootScope, $timeout, userSvc){

	 $rootScope.$watch(function() { 
      	return $location.path(); 
	  },
	  function(a){  
	      if(a == '/collections'){
	      	$scope.sectionSelected = "My Collection"; $scope.collectionSelected = true;	$scope.allfalseE();
			$scope.profileSelected = false; $scope.achievementsSelected = false; $scope.eventsSelected = false;
	      }
	      else if(a == '/events'){
	      	$scope.sectionSelected = "My Events"; $scope.eventsSelected = true; $scope.allfalseC();
			$scope.profileSelected = false; $scope.achievementsSelected = false; $scope.collectionSelected = false;
			$scope.listsSelected = false;
	      }
	      else if(a == '/achievements'){
	      	$scope.sectionSelected = "My Achievements";	$scope.achievementsSelected = true;	$scope.allfalseC();
			$scope.allfalseE();	$scope.profileSelected = false;	$scope.collectionSelected = false; $scope.eventsSelected = false;
			$scope.listsSelected = false;
	      }
	  });

	/* $timeout(function(){
	  		var res = $scope.usr.name.split(" ");
			$scope.usrname = res[0];
	 }, 1000);*/

	/* GO TO LOCATION */
	$scope.goTo = function(page){
		if(page == 'profile'){
			page = '';
			$scope.sectionSelected = "My Profile";
			$scope.profileSelected = true;

			$scope.allfalseC();
			$scope.allfalseE();

			$scope.achievementsSelected = false;
			$scope.collectionSelected = false;
			$scope.eventsSelected = false;
			$scope.listsSelected = false;
		}
		else if(page == 'collections'){
			$scope.sectionSelected = "My Collection";
			$scope.collectionSelected = true;

			$scope.allfalseE();

			$scope.profileSelected = false;
			$scope.achievementsSelected = false;
			$scope.eventsSelected = false;
		}
		else if(page == 'events'){
			$scope.sectionSelected = "My Events";
			$scope.eventsSelected = true;

			$scope.allfalseC();

			$scope.profileSelected = false;
			$scope.achievementsSelected = false;
			$scope.collectionSelected = false;
			$scope.listsSelected = false;
		}
		else if(page == 'achievements'){			
			$scope.sectionSelected = "My Achievements";
			$scope.achievementsSelected = true;

			$scope.allfalseC();
			$scope.allfalseE();

			$scope.profileSelected = false;
			$scope.collectionSelected = false;
			$scope.eventsSelected = false;
			$scope.listsSelected = false;
		}


		$location.path("/"+page);


		
	}

	/* WHICH SECTION IS SELECTED? */
	$scope.sectionSelected = "My Profile";
	$scope.sectionConcreteSelected = '';


	$scope.profileSelected = true;
	$scope.collectionSelected = false;
	$scope.eventsSelected = false;
	$scope.achievementsSelected = false;

	$scope.listsSelected = false;
	$scope.genresSelected = false;
	$scope.artistsSelected = false;
	$scope.alphaSelected = false;

	$scope.allSelected = false;
	$scope.friendSelected = false;
	$scope.favoriteSelected = false;

	$scope.allfalseC = function(){
		$scope.listsSelected = false; $scope.genresSelected = false; $scope.artistsSelected = false; $scope.alphaSelected = false;
	}

	$scope.allfalseE = function(){
		$scope.allSelected = false; $scope.friendSelected = false; $scope.favoriteSelected = false;
	}

	$scope.pulseLogo = function(){
		$('#pulse-logo').addClass('animated pulse');
		
	}

	$scope.init = function(){		
		//OBTENER SOLO EL NOMBRE, SIN APELLIDOS
		var res = userSvc.getUser().name.split(" ");
		$scope.usrname = res[0];
		$scope.usrlastname = res[1];
		$scope.usrlastname2 = res[2]+" "+res[3];
		$scope.usremail = userSvc.getUser().email;
		$scope.usrimage = userSvc.getUser().picture;
	}
	



	$scope.selectConcreteSection = function(name){
		if(name == 'lists'){
			$scope.sectionConcreteSelected = 'My Lists';
			$scope.listsSelected = true;

			$scope.genresSelected = false;
			$scope.artistsSelected = false;
			$scope.alphaSelected = false;
		}
		else if(name == 'genres'){
			$scope.sectionConcreteSelected = 'Genres';
			$scope.genresSelected = true;

			$scope.listsSelected = false;
			$scope.artistsSelected = false;
			$scope.alphaSelected = false;
		}
		else if(name == 'artists'){
			$scope.sectionConcreteSelected = 'Artists';
			$scope.artistsSelected = true;

			$scope.listsSelected = false;
			$scope.genresSelected = false;
			$scope.alphaSelected = false;
		}
		else if(name == 'alpha'){
			$scope.sectionConcreteSelected = 'Alphabetical';
			$scope.alphaSelected = true;

			$scope.listsSelected = false;
			$scope.genresSelected = false;
			$scope.artistsSelected = false;
		}
		else if(name == 'all'){
			$scope.sectionConcreteSelected = 'All';
			$scope.allSelected = true;

			$scope.friendSelected = false;
			$scope.favoriteSelected = false;
		}
		else if(name == 'friends'){
			$scope.sectionConcreteSelected = 'Friends';
			$scope.friendSelected = true;

			$scope.allSelected = false;
			$scope.favoriteSelected = false;
		}
		else if(name == 'favorites'){
			$scope.sectionConcreteSelected = 'Favorites';
			$scope.favoriteSelected = true;

			$scope.friendSelected = false;
			$scope.allSelected = false;
		}
	}


	$scope.locationExtended = false;
	$scope.climateExtended = false;
	$scope.friendsExtended = false;

	$scope.onEdit = false;

	

	$scope.logout = function(){
		window.plugins.googleplus.disconnect(
			function (msg) {
				console.log(msg);
				$rootScope.go('landing');
			},
			function(fail){
				console.log(fail);
			}
		);
	}



	$(document).ready(function(){
    $('.collapsible').collapsible({
	      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
	    });
	  });

	
	
	// OBTENCIÓN DE DATOS DEL USUARIO (NOMBRE, EMAIL E IMAGEN)
	
	


};