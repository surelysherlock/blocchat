
(function() {
    function modalCtrl(Room, $scope, $uibModalInstance){
      var room = $scope.roomInput;
      $scope.submit = function (){
          Room.add($scope.roomInput);
          $scope.roomInput = "";
          $uibModalInstance.close();
     }
    
     $scope.cancel = function () {
       $uibModalInstance.close();
     }

}


    angular
        .module('blocChat')
        .controller('modalCtrl',  ['Room' , '$scope' , '$uibModalInstance', modalCtrl])
})();

