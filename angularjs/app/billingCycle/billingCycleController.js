angular.module('primeiraApp')
    .controller('billingCtrl', ['$http', '$location', 'msgs', 'tabs', billingController])

    function billingController($http, $location, msgs, tabs) {
        const url = 'http://localhost:3003/api/billingCycles'
        const vm = this

        
        vm.refresh = function () {
            const page = parseInt($location.search().page) || 1
            $http.get(`${url}?skip=${(page - 1) * 10}&limit=10`).then(
                function(response) {
                    vm.billingCycle = {credits: [{}], debts: [{}]}
                    vm.billingCycles = response.data
                    
                    vm.Calculate()
                    tabs.show(vm, { tabList: true, tabCreate: true })

                    $http.get(`${url}/count`).then((response) => {
                        vm.pages = Math.ceil(response.value / 10)

                    })
                }

            )
            .catch(function(response) {
                msgs.addError(response.data.errors)
            })
        }
        vm.create = function () {
            $http.post(url, vm.billingCycle).then(
                function(response){
                    msgs.addSuccess('Operação realizada com sucesso!!')
                    vm.refresh()
                })
                .catch(function(response) {
                    vm.refresh()
                    msgs.addError(response.data.errors)
                })
                vm.refresh()
            }
        vm.showTabUpdate = function (billingCycle) {
            vm.billingCycle = billingCycle
            vm.Calculate()
            tabs.show(vm, { tabUpdate: true })
        }
        vm.showTabRemove = function (billingCycle) {
            vm.billingCycle = billingCycle
            vm.Calculate()
            tabs.show(vm, { tabRemove: true })
        }
        
        vm.Remove = function () {
            $http.delete(`${url}/${vm.billingCycle._id}`, vm.billingCycle)
                .then(() => {
                    vm.refresh();
                    msgs.addSuccess('Item removido!')
                    vm.Calculate()
                })
                .catch((response) => {
                    msgs.addError(response.data.errors)
                })
        }

        vm.Update = function () {
            $http.put(`${url}/${vm.billingCycle._id}`, vm.billingCycle)
                .then(() => {
                    vm.refresh();
                    msgs.addSuccess('Troca realizada!')
                    vm.Calculate()
                })
                .catch((response) => {
                    msgs.addError(response.data.errors)
                })
        }

        vm.addCredit = function (index) {
            vm.billingCycle.credits.splice(index + 1, 0, {})   
        }
        vm.cloneCredit = function (index, {name, value }) {
            vm.billingCycle.credits.splice(index + 1, 0, { name, value })
            vm.Calculate()
        }
        vm.removeCredit = function (index) {
            if(vm.billingCycle.credits.length > 1)
                vm.billingCycle.credits.splice(index, 1)
                vm.Calculate()
        }

        vm.addDebt = function (index) {
            vm.billingCycle.debts.splice(index + 1, 0, {})   
        }
        vm.cloneDebt = function (index, {name, value, status}) {
            vm.billingCycle.debts.splice(index + 1, 0, {name, value, status})
            vm.Calculate()
        }
        vm.removeDebt = function (index) {
            if(vm.billingCycle.debts.length > 1){
                vm.billingCycle.debts.splice(index, 1)
                vm.Calculate()
            }
        }

        vm.Calculate = function() {
            vm.credit = 0
            vm.debt = 0

            if(vm.billingCycle){
                vm.billingCycle.credits.forEach(({value}) => {
                    vm.credit += !value | isNaN(value) ? 0 : parseFloat(value)
                });
                vm.billingCycle.debts.forEach(({value}) => {
                    vm.debt += !value | isNaN(value) ? 0 : parseFloat(value)
                })
            }
            vm.total = vm.credit - vm.debt
        }
            vm.refresh() 
    }

