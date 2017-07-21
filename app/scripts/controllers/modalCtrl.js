
(function() {
    function modalCtrl(Room, $scope, Message, $uibModalInstance){
      var room = $scope.roomInput;
      $scope.submit = function (){
          Room.add($scope.roomInput);
          $scope.roomInput = "";
          $uibModalInstance.close();
     }
    
     $scope.cancel = function () {
       $uibModalInstance.close();
       console.log(Message.all[0].content);
     }

}


    angular
        .module('blocChat')
        .controller('modalCtrl',  ['Room' , '$scope' , 'Message', '$uibModalInstance', modalCtrl])
})();

