(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
                var snap;
                activeMsgArray = [];
                ref.orderByChild('roomId').equalTo(roomId).on('child_added', function(snapshot) {
                    snap = snapshot.val();
                    activeMsgArray.push(snap);
                    return activeMsgArray;
                });
                
                return activeMsgArray;
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();