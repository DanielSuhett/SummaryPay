angular.module('primeiraApp').component('boxValue', {
    bindings: {
        color: '@',
        title: '@',
        icon: '@',
        value: '@', 
        grid: '@'


    },
    template: `    
        <div class="{{ $ctrl.grid }}">
            <div class="small-box bg-{{ $ctrl.color }}">
                <div class="inner">
                    <h3> {{ $ctrl.value }}</h3>
                    <p>{{ $ctrl.title}}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-{{ $ctrl.icon }}"></i>
                </div>
            </div>
        </div>
    `
})