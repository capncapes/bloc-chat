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
            send: function(newMessage) {
                console.log($cookies.blocChatCurrentUser);
                messages.$add({
                    content: newMessage,
                    roomId: activeRoom.key,
                    sentAt: Date.now(),
                    username: $cookies.blocChatCurrentUser
                });
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();