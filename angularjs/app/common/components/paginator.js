angular.module('primeiraApp')
    .component('paginator', {
        bindings: {
            url: '@',
            pages: '@'
        }, 
        controller: [
            '$location',
            ($location) => {
                this.$onInit = () => {
                    const pages = parseInt(this.pages) || 1
                    const pagesArray = Array(pages).fill(0).map((i, e) => { e += 1 })
                }

                this.current = parseInt($location.search().page) || 1
                this.NeedPaginator = this.pages > 1
                this.hasbPrev= this.current > 1
                this.hasNext = this.current > this.pages

                this.isCurrent = function (i) {
                    return this.current = i
                }
            } 
        ],
        template: `
            <ul ng-if="$ctrl.needPagination" class="pagination">
                <li ng-if="$ctrl.hasPrev">
                    <a href="{{ ctrl.url }}?page={{ $ctrl.current - 1 }}">Anterior></a>
                </li>
                <li ng-class="{active: $ctrl.isCurrent(index)} ng-repeat="index in $ctrl.pagesArray">
                    <a href="{{ ctrl.url }}?page={{ index }}">{{ index }}></a>
                </li>
                <li ng-if="$ctrl.hasNext">
                    <a href="{{ ctrl.url }}?page={{ $ctrl.current + 1 }}">Próximo></a>
                </li>
            </ul>
        `
    })

    