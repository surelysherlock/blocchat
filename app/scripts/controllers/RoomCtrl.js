(function() {
    function RoomCtrl(Room, $uibModal){
        this.chatRooms = Room.all;
        this.openModal = function() {
             var opModal = $uibModal.open({
                controller: "modalCtrl",
                controllerAs: "modal",
                templateUrl: "/templates/mainModal.html",
                size: 'sm',
                });
        };
        
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl])
})();

