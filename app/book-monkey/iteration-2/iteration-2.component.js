"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var di_app_1 = require('./di/di.app');
var navigation_component_1 = require('./navigation/navigation.component');
var IterationTwoComponent = (function () {
    function IterationTwoComponent(router) {
        this.router = router;
    }
    IterationTwoComponent = __decorate([
        core_1.Component({
            selector: 'iteration-2',
            template: "\n    <div class=\"ui two small ordered steps\">\n    <a [routerLink]=\"['Dependency-Injection']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Dependency-Injection']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Dependency-Injection</div>\n      </div>\n    </a>\n    <a [routerLink]=\"['Navigation']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Navigation']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Navigation</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: 'dependency-injection/', name: 'Dependency-Injection', component: di_app_1.BookMonkeyApp, useAsDefault: true },
            { path: 'navigation/...', name: 'Navigation', component: navigation_component_1.BookMonkeyApp }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], IterationTwoComponent);
    return IterationTwoComponent;
}());
exports.IterationTwoComponent = IterationTwoComponent;
//# sourceMappingURL=iteration-2.component.js.map