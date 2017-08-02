(function() {
  function HomeCtrl(Room, Message, $cookies, $uibModal) {
    this.chatRooms = Room.all;
    this.roomId;
    this.userName = $cookies.get('blocChatCurrentUser');  
    var currentTime = new Date();
    this.sortedTime = currentTime.getHours() + ':' + currentTime.getMinutes();

    this.openModal = function() {
      var opModal = $uibModal.open({
        controller: "modalCtrl",
        controllerAs: "modal",
        templateUrl: "/templates/mainModal.html",
        size: 'sm',
      });
    };

    this.createNewMessage = function(text , roomId, userName, sortedTime) {
      this.sentMsg = Message.send(text, roomId, this.userName, this.sortedTime);
    }

    this.activeRoom = function(roomId, name) {
      this.messages = Message.getRoomById(roomId);
      this.roomId = roomId;
      this.currentRoom = name;
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', '$cookies' ,'$uibModal',
      HomeCtrl
    ])
})();
