(function() {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        var database = firebase.database();
        this.rooms = Room;
        this.messages = Message;
        
        this.addRoom = function() {
            $uibModal.open({
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html',
                size: 'sm'
            });
        };

        $scope.setActiveRoom = function(room) {
            activeRoom = room;
            
            $scope.activeRoomName = activeRoom.name;
            $scope.currentActiveRoom = Message.getByRoomId(activeRoom.$id);
            
            console.log($scope.currentActiveRoom);
        };
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();