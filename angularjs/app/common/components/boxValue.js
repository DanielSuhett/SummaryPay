angular.module('primeiraApp').component('boxValue', {
    bindings: {
        color: '@',
        title: '@',
        icon: '@',
        value: '@'


    },
    template: `    
        <div class="col-xs-4">
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