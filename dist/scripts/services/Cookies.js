(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                backdrop: true,
                controller: 'UserModalCtrl as usermodal',
                keyboard: false,
                templateUrl: '/templates/userModal.html',
                size: 'sm'
            })
        }
        console.log($cookies);
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();