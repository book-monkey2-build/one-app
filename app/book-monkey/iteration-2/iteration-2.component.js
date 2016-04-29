System.register(['angular2/core', 'angular2/router', './di/book-monkey', './navigation/book-monkey', '../../directives/active-class/active-class.directive'], function(exports_1, context_1) {
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
    var core_1, router_1, book_monkey_1, book_monkey_2, active_class_directive_1;
    var IterationTwoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_monkey_1_1) {
                book_monkey_1 = book_monkey_1_1;
            },
            function (book_monkey_2_1) {
                book_monkey_2 = book_monkey_2_1;
            },
            function (active_class_directive_1_1) {
                active_class_directive_1 = active_class_directive_1_1;
            }],
        execute: function() {
            IterationTwoComponent = (function () {
                function IterationTwoComponent() {
                }
                IterationTwoComponent = __decorate([
                    core_1.Component({
                        selector: 'iteration-2',
                        template: "\n    <div class=\"ui two small ordered steps\">\n    <a [routerLink]=\"['Dependency-Injection']\"\n       activeClass=\"active\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Dependency-Injection</div>\n      </div>\n    </a>\n    <a [routerLink]=\"['Navigation']\"\n       activeClass=\"active\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Navigation</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, active_class_directive_1.ActiveClassDirective]
                    }),
                    router_1.RouteConfig([
                        { path: 'dependency-injection/', name: 'Dependency-Injection', component: book_monkey_1.BookMonkeyApp, useAsDefault: true },
                        { path: 'navigation/...', name: 'Navigation', component: book_monkey_2.BookMonkeyApp }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], IterationTwoComponent);
                return IterationTwoComponent;
            }());
            exports_1("IterationTwoComponent", IterationTwoComponent);
        }
    }
});
//# sourceMappingURL=iteration-2.component.js.map