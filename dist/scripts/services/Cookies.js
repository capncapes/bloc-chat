(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                backdrop: 'static',
                controller: 'UserModalCtrl as usermodal',
                keyboard: false,
                templateUrl: '/templates/userModal.html',
                size: 'sm'
            })
        }
        console.log($cookies.get('blocChatCurrentUser'));
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();