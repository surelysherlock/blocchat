(function() {
  function Message($firebaseArray) {
  
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
      ref.orderByChild("roomId").equalTo(roomId).on('value', function(snapshot) {
        console.log(snapshot.val());
      });
    };

    Message.all = messages;

    return Message;
    };
  
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();