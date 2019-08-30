angular.module('primeiraApp').config([
    '$stateProvider',
    '$urlRouterProvider',
    ($stateProvider, $urlRouterProvider) => {
       $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "/dashboard/dashboard.html"
            }) 
            .state('billingCycle', {
                url: "/billingCycle?page",
                templateUrl: "/billingCycle/tabs.html"
            })
        $urlRouterProvider
            .otherwise('/dashboard')
            
    }
])