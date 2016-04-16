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
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var http_app_1 = require('./http/http.app');
var IterationFourComponent = (function () {
    function IterationFourComponent(router) {
        this.router = router;
    }
    IterationFourComponent = __decorate([
        core_1.Component({
            selector: 'iteration-4',
            template: "\n    <div class=\"ui one small ordered steps\">\n    <a [routerLink]=\"['Http']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Http']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Http</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }),
        router_1.RouteConfig([
            { path: 'http/...', name: 'Http', component: http_app_1.BookMonkeyApp, useAsDefault: true },
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], IterationFourComponent);
    return IterationFourComponent;
}());
exports.IterationFourComponent = IterationFourComponent;
//# sourceMappingURL=iteration-4.component.js.map