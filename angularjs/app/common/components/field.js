angular.module('primeiraApp').component('field', {
    bindings: {
        id: '@',
        grid: '@',
        label: '@',
        type: '@',
        placeholder: '@',
        model: '='
    }, /* controller: [
        'gridSystem', 
        function(gridSystem) {
            this.gridClasses = gridSystem.toCssClasses(this.grid)
        }
    ], */
    template: `        
    <div class="col-xs-4">
        <div class="form-group">
            <label for="{{ $ctrl.id }}"> {{ $ctrl.label }}</label>
            <input  id="{{ $ctrl.id }}" class="form-control" type="{{ $ctrl.type }}" ng-model="$ctrl.model" placeholder="{{ $ctrl.placeholder }}">
        </div>
    </div>
    `
})