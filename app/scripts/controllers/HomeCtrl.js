(function() {
  function HomeCtrl(Room, Message, $cookies, $filter, $uibModal) {
    this.chatRooms = Room.all;
    this.roomId;
    this.userName = $cookies.get('blocChatCurrentUser');  
    this.sortedTime = $filter('date')(firebase.database.ServerValue.TIMESTAMP);

    this.openModal = function() {
      var opModal = $uibModal.open({
        controller: "modalCtrl",
        controllerAs: "modal",
        templateUrl: "/templates/mainModal.html",
        size: 'sm',
      });
    };

    this.createNewMessage = function(text , roomId, userName, sortedTime) {
      this.sentMsg = Message.send(text, roomId, userName, sortedTime);
    }

    this.activeRoom = function(roomId, name) {
      this.messages = Message.getRoomById(roomId);
      this.roomId = roomId;
      this.currentRoom = name;
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies' , '$filter','$uibModal',
      HomeCtrl
    ])
})();
