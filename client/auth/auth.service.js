'use strict';

angular.module("videoClubApp")
.factory('AuthService',AuthService);

AuthService.$inject  = ['$auth','$state'];
function AuthService($auth,$state){
	var Auth = {
		login:login,
		logout:logout,
		isAuthenticated: isAuthenticated

	};

	function login(user,collback){
		$auth.login(user)
		.then(response => {
			console.log("Login ok",response);

			$state.go('main');
		})
		.catch(err =>{
			console.log("Error de login",err);
			$state.go('login');
		})
	}

	function logout(){
		if($auth.isAuthenticated()){
			$auth.logout()
			.then(respose=>{
				$state.go('main');
				console.log("Salida Ok");
			})
		}
	}

	function isAuthenticated(){
		if($auth.isAuthenticated()){
			return true;
		}else{
			return false;
		}
	}

	return Auth;

}
