angular.module('primeiraApp')
    .controller('billingCtrl', ['$http', 'msgs', 'tabs', billingController])

    function billingController($http, msgs, tabs) {
        const url = 'http://localhost:3003/api/billingCycles'
        const vm = this

        
        vm.refresh = function () {
            $http.get(url).then(
                function(response) {
                    vm.billingCycle = {}
                    vm.billingCycles = response.data
                    console.log(vm.billingCycles.data)
                    tabs.show(vm, { tabList: true, tabCreate: true })
                }

            )
            .catch(function(response) {
                msgs.addError(response.data.errors)
            })
        }
        vm.create = function () {
            $http.post(url, vm.billingCycle).then(
                function(response){
                    vm.refresh()
                    msgs.addSuccess('Operação realizada com sucesso!!')
                })
                .catch(function(response) {
                    vm.refresh()
                    msgs.addError(response.data.errors)
                })
            }
        vm.showTabUpdate = function (billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabUpdate: true })
        }
        vm.showTabRemove = function (billingCycle) {
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabRemove: true })
        } 
            vm.refresh() 
    }