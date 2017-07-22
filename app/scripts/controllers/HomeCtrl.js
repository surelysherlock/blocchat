(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    this.chatRooms = Room.all;

    this.openModal = function() {
      var opModal = $uibModal.open({
        controller: "modalCtrl",
        controllerAs: "modal",
        templateUrl: "/templates/mainModal.html",
        size: 'sm',
      });
    };

    this.createNewMessage = function(text) {
      Message.createNewMessage(text)
    }

    this.activeRoom = function(roomId) {
      this.messages = Message.getRoomById(roomId);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal',
      HomeCtrl
    ])
})();
