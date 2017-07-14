(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var Room = {};

    Room.add = function(room) {
      rooms.$add({Room: "roomnumber"}).then(function(ref){
        var id = ref.key;
        console.log(id);
        rooms.$indexFor(id);
      })
    }

    Room.all = rooms;

    return Room;
    
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();