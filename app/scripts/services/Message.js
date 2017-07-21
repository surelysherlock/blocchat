(function() {
  function Message($firebaseArray) {
  
    var Message = {};
    var refmsg = firebase.database().ref().child("Messages");
    var messages = $firebaseArray(refmsg);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
      var filterById = $firebaseArray(refmsg.orderByChild("roomID").equalTo(roomId));
      return filterById;
    };

    Message.all = messages;
    


    return Message;
    };
  
  

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();