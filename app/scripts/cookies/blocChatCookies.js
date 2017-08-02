(function() {
  function BlocChatCookies($cookies,$uibModal) {
    this.currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      // Do something to allow users to set their username
      $uibModal.open({
        // Modal configuration object properties
        controller: "usernameCtrl",
        controllerAs: "username",
        templateUrl: "/templates/usernameModal.html",
        size: 'sm',
        backdrop: 'static',
      });

    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();