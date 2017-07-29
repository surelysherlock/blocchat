(function() {
    function usernameCtrl($scope, $cookies, $uibModalInstance){
      var userName = $scope.user;
      $scope.createUser = function (){
          if (!($scope.user) || $scope.user == ''){
              alert ('google how to type a username');
          }else{
            $cookies.put('blocChatCurrentUser', $scope.user);
            $uibModalInstance.close();
          }
     }

}
    angular
        .module('blocChat')
        .controller('usernameCtrl',  ['$scope' , '$cookies','$uibModalInstance', usernameCtrl])
})();
