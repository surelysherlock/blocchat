(function() {
    function RoomCtrl(Room, $uibModal){
        this.chatRooms = Room.all;
        this.openModal = function() {
            $uibModal.open({
                animation: $uibModal.animationsEnabled,
                backdrop: true,
                controller: "bootStrapCtrl",
                controllerAs: "boot",
                templateUrl: "/templates/bootModal.html",
                size: 'sm',
                resolve: {
                    items: function () {
                    return $uibModal.items;
                    }
                }
                })
            }
    }

    

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl])
})();