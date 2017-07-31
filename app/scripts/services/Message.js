(function() {
  function Message($firebaseArray) {
    var Message = {}

    Message.getRoomById = function(roomId) {
      if (roomId != undefined || roomId != null) {
        var ref = firebase.database().ref().child("Messages").orderByChild(
          'roomId').equalTo(roomId)
        return $firebaseArray(ref);
      }
    }

    Message.send = function(newMessage , room) {
        // Send method logic
        var ref = firebase.database().ref().child("Messages");
        var msgArray = $firebaseArray(ref);
        if (newMessage != undefined || newMessage != null) {
       //  msgArray.$add({content: newMessage, roomId: room, sentAt: '9 pm'}).then(function(ref){
       //   var id = ref.key;
       //   msgArray.$indexFor(id);
      //})

      var postData = {
        content: newMessage,
      };
     
      var newPostKey = firebase.database().ref().child('Messages').push().key;

      var updates = {};
      updates['/Messages/' + newPostKey] = postData;
      updates['/user-posts/' + newPostKey] = postData;

      return firebase.database().ref().update(updates);
      }
    };

    return Message
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
