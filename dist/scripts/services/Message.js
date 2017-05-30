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
            send: function(text, id) {
                var newMessage = {
                    content: text,
                    roomId: id,
                    sentAt: Date.now(),
                    username: $cookies.get('blocChatCurrentUser')
                };
                messages.$add(newMessage);
                console.log("User " + $cookies.get('blocChatCurrentUser') + " added record with id " + id);
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();