(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
                
        this.submit = function() {
            $cookies.put(this.username);
            if (this.username.length >= 4) {
                $cookies.put('blocChatCurrentUser', this.username);
                $uibModalInstance.close();
            }
            console.log(this.username);
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();