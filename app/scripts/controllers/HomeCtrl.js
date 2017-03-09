(function() {
    function HomeCtrl(Room) {
        this.rooms = Room;
    }
    
    angular
        .module('blocChat')
        .service('Room', HomeCtrl)
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();