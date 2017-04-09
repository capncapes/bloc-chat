(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        console.log(messages);
        activeMsgArray = [];
        
        return {
            getByRoomId: function(roomId) {
                var snap;
                ref.orderByChild('roomId').equalTo(roomId).on('child_added', function(snapshot) {
                    snap = snapshot.val();
                });
                
                activeMsgArray.push(snap);
                console.log(activeMsgArray);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();