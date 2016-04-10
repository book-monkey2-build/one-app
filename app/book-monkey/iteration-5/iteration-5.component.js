System.register(['angular2/core', 'angular2/http', 'angular2/router', './pipes/pipes.component', './directives/directives.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, pipes_component_1, directives_component_1;
    var IterationFiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pipes_component_1_1) {
                pipes_component_1 = pipes_component_1_1;
            },
            function (directives_component_1_1) {
                directives_component_1 = directives_component_1_1;
            }],
        execute: function() {
            IterationFiveComponent = (function () {
                function IterationFiveComponent(router) {
                    this.router = router;
                }
                IterationFiveComponent = __decorate([
                    core_1.Component({
                        selector: 'iteration-5',
                        template: "\n    <div class=\"ui two small ordered steps\">\n    <a [routerLink]=\"['Pipes']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Pipes']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Pipes</div>\n      </div>\n    </a>\n    <a [routerLink]=\"['Directives']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Directives']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Direktiven</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: 'pipes/...', name: 'Pipes', component: pipes_component_1.PipesApp, useAsDefault: true },
                        { path: 'directives/...', name: 'Directives', component: directives_component_1.DirectivesApp }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], IterationFiveComponent);
                return IterationFiveComponent;
            }());
            exports_1("IterationFiveComponent", IterationFiveComponent);
        }
    }
});
//# sourceMappingURL=iteration-5.component.js.map