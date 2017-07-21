(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var Room = {};

    Room.add = function(room) {
      rooms.$add({$value: room}).then(function(ref){
        var id = ref.key;
        rooms.$indexFor(id);
      })
    }

    Room = rooms;

    return Room;
    
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();