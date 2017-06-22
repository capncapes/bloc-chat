(function() {
    function HomeCtrl($scope, Room, Message, $uibModal, $cookies) {
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
            $scope.activeRoom = room;
            $scope.activeId = room.$id;
            $scope.activeRoomName = room.name;
            $scope.currentActiveRoom = Message.getByRoomId(room.$id);
            
            if (screen.width < 800) {
                $scope.sidebar = document.getElementById('sidebar');
                $scope.sidebar.style.display = "none";
                
                document.body.style.backgroundImage = "url('../assets/images/bloc-chat-bg2b.jpg')";
            } else {
                document.body.style.backgroundImage = "url('../assets/images/bloc-chat-bg1b.jpg')";
            }
        };
        
        // Check if there's an active room
        $scope.checkActiveRoom = function() {
            if ($scope.activeRoom) {
                return true;
            } else {
                return false;
            }
        };
        
        $scope.sendMessage = function(text) {
            var id = $scope.activeId;
            Message.send(text, id);
        };
        
        this.toggleRooms = function() {
            var sidebar = document.getElementById('sidebar');
            if (sidebar.style.display === "none") {
                sidebar.style.display = "inherit";
            } else {
                sidebar.style.display = "none"
            }
        };
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();