(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        console.log(messages);
        
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
            },
            send: function(newMessage) {
                console.log(newMessage);
                messages.$add({ content: newMessage.$viewValue }).then(function(ref) {
                    console.log(ref);
                    var id = ref.key();
                    console.log("Added record with id " + id);
                    messages.$indexFor(id);
                });
                console.log(messages);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();