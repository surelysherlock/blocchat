(function() {
    function msgCtrl(Message, $scope){
        this.msgRotate =  Message.all;
        $scope.msgArray = function () {
            Message.getByRoomId($scope.msgId);
            console.log("hello");
        }
    
    }
    

    angular
        .module('blocChat')
        .controller('msgCtrl', ['Message', '$scope', msgCtrl])
})();