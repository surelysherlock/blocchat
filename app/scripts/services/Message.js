(function() {
  function Message($firebaseArray) {
    var Message = {};

    Message.getRoomById = function(roomId) {
      if (roomId != undefined || roomId != null) {
        var ref = firebase.database().ref().child("Messages").orderByChild(
          'roomId').equalTo(roomId)
        return $firebaseArray(ref);
      }
    }

    Message.send = function(newMessage , roomId, userName, sortedTime) {
        // Send method logic
        var ref = firebase.database().ref().child("Messages");
        var msgArray = $firebaseArray(ref);
        if (newMessage != undefined || newMessage != null) {
          msgArray.$add({content: newMessage, roomId: roomId, sentAt: sortedTime, userName: userName});
        }   
    };
      
    return Message
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
