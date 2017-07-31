(function() {
  function HomeCtrl(Room, $scope, Message, $uibModal) {
    this.chatRooms = Room.all;
    var currentMsg = $scope.newmsg;

    this.openModal = function() {
      var opModal = $uibModal.open({
        controller: "modalCtrl",
        controllerAs: "modal",
        templateUrl: "/templates/mainModal.html",
        size: 'sm',
      });
    };

    this.createNewMessage = function(text , justify) {
            this.sentMsg = Message.send(text, justify);
            var roommania = Room.all.$id;
            this.roomId = roommania;
            console.log(Room.all);
    }

    this.activeRoom = function(roomId) {
      this.messages = Message.getRoomById(roomId);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', '$scope', 'Message', '$uibModal',
      HomeCtrl
    ])
})();
