(function() {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        var database = firebase.database();
        this.rooms = Room;
        this.messages = Message;
        
        this.addRoom = function() {
            $uibModal.open({
                backdrop: 'static',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html',
                size: 'sm'
            });
        };

        $scope.setActiveRoom = function(room) {
            activeRoom = room;
            var roomRows = document.getElementsByClassName('room_row');
            
            $scope.activeRoomName = activeRoom.name;
            $scope.currentActiveRoom = Message.getByRoomId(activeRoom.$id);
            
            console.log($scope.currentActiveRoom);
        };
        
        /*for (var i = 0; i < roomRows.length; i++)
                if (roomRows[i].classList.contains())
            activeRoom.style.backgroundColor = "#f98720";*/
        
        $scope.sendMessage = function(newMessage) {
            activeRoom = $scope.setActiveRoom.room;
            $scope.messageContent = Message.send(newMessage);
            console.log(activeRoom);
            activeRoom.$id
        };
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();