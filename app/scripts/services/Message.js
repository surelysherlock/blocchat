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

    return Message
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
