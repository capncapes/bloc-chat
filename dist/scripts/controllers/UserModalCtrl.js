(function() {
    function UserModalCtrl($cookies, $uibModalInstance) {
                
        this.submit = function() {
            $cookies.put(this.username);
            $uibModalInstance.close();
            console.log(this.username);
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalCtrl', ['$cookies', '$uibModalInstance', UserModalCtrl]);
})();