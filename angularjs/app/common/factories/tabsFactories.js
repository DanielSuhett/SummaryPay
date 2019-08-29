angular.module('primeiraApp')
    .factory('tabs', [ TabsFactory ])

    function TabsFactory() {
        function show(owner, { 
            tabList = false,
            tabCreate = false,
            tabUpdate = false,
            tabRemove = false
        }){
            owner.tabList = tabList    
            owner.tabCreate = tabCreate    
            owner.tabUpdate = tabUpdate    
            owner.tabRemove = tabRemove    
        }
        return { show }
    }