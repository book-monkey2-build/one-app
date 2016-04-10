System.register(['angular2/core', 'angular2/router', './home/home.component', './books/books.component', './form/form.component', './directives/active-class/active-class.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, books_component_1, form_component_1, active_class_directive_1;
    var DirectivesApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (books_component_1_1) {
                books_component_1 = books_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (active_class_directive_1_1) {
                active_class_directive_1 = active_class_directive_1_1;
            }],
        execute: function() {
            DirectivesApp = (function () {
                function DirectivesApp() {
                }
                DirectivesApp = __decorate([
                    router_1.RouteConfig([
                        { path: 'home/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: 'books/...', name: 'Books', component: books_component_1.BooksComponent },
                        { path: 'admin/', name: 'Admin', component: form_component_1.FormComponent }
                    ]),
                    core_1.Component({
                        selector: 'pipes-app',
                        templateUrl: '/app/book-monkey/iteration-5/directives/directives.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, active_class_directive_1.ActiveClassDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DirectivesApp);
                return DirectivesApp;
            }());
            exports_1("DirectivesApp", DirectivesApp);
        }
    }
});
//# sourceMappingURL=directives.component.js.map