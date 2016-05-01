System.register(['angular2/core', 'angular2/router', '../book-list/index', '../book-details/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1, index_2;
    var BooksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }],
        execute: function() {
            BooksComponent = (function () {
                function BooksComponent() {
                }
                BooksComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/list', name: 'List', component: index_1.BookListComponent, useAsDefault: true },
                        { path: '/:isbn', name: 'Details', component: index_2.BookDetailsComponent }
                    ]),
                    core_1.Component({
                        directives: [router_1.RouterOutlet],
                        template: '<router-outlet></router-outlet>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BooksComponent);
                return BooksComponent;
            }());
            exports_1("BooksComponent", BooksComponent);
        }
    }
});
//# sourceMappingURL=books.component.js.map