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
        this.activeRoom = function () {
            Message.getByRoomId(Room.all.$id);
            console.log("hello");
        }
        
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$scope', '$uibModal', RoomCtrl])
})();

