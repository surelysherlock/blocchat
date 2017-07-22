(function() {
    function RoomCtrl(Room, Message, $scope, $uibModal){
        this.chatRooms = Room.all;
        this.openModal = function() {
             var opModal = $uibModal.open({
                controller: "modalCtrl",
                controllerAs: "modal",
                templateUrl: "/templates/mainModal.html",
                size: 'sm',
                });
        };
        this.msgContent =  Message.all;
        this.activeRoom = function (j) {
            var currentRoom = Message.getByRoomId(j);
            return currentRoom;
        }
        
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$scope', '$uibModal', RoomCtrl])
})();

