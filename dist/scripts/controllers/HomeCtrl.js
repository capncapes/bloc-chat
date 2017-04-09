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
            
            $scope.activeChatRoom = Message.getByRoomId(activeRoom.$id);
            $scope.activeRoomName = activeRoom.name;
            $scope.currentActiveRoom = Message.getByRoomId(activeRoom.$id);
            $scope.activeUsername = $scope.currentActiveRoom.username;
            $scope.activeMessage = $scope.currentActiveRoom.content;
            $scope.activeTimestamp = $scope.currentActiveRoom.sentAt;
            
            
        };
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();