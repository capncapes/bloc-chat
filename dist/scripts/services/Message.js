(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
                var activeMessages;
                ref.orderByChild('roomId').equalTo(roomId).on('child_added', function(snapshot) {
                    activeMessages = snapshot.val();
                });
                
                return activeMessages;
            }
            
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();