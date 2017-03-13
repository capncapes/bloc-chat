(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room;
        this.addRoom = function() {
            $uibModal.open({
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/modal.html',
                size: 'sm'
            });
        }
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();