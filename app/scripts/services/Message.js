(function() {
    function Message($firebaseArray, $cookies) {
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
            },
            send: function(text, activeRoom) {
                messages.$add({
                    content: text,
                    roomId: activeRoom.$id,
                    sentAt: Date.now(),
                    username: $cookies.blocChatCurrentUser
                }).then(function(ref) {
                    var id = ref.key();
                    console.log("Added record with id " + id);
                    messages.indexFor(id);
                })
                console.log(messages);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();