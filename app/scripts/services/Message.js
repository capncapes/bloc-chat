(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        var messageArray = messages;
        console.log(messageArray);
        
        return {
            getByRoomId: function(roomId) {
                var snap;
                ref.orderByChild('roomId').equalTo(roomId).on('child_added', function(snapshot) {
                    snap = snapshot.val();
                });
                
                return snap;
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();