(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        this.rooms = Room;
        this.addRoom = function() {
            $uibModal.open({
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html',
                size: 'sm'
            });
        }
        $scope.setActiveRoom = function(room) {
            console.log(room.key);
        }
        // $scope.activeRoom.push(angular.copy())
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();