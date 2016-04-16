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
var forms_app_1 = require('./forms/forms.app');
var validation_app_1 = require('./validation/validation.app');
var IterationThreeComponent = (function () {
    function IterationThreeComponent(router) {
        this.router = router;
    }
    IterationThreeComponent = __decorate([
        core_1.Component({
            selector: 'iteration-3',
            template: "\n    <div class=\"ui two small ordered steps\">\n    <a [routerLink]=\"['Forms']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Forms']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Formulare</div>\n      </div>\n    </a>\n    <a [routerLink]=\"['Form-Validation']\"\n       [class.active]=\"router.isRouteActive(router.generate(['./Form-Validation']))\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Formularvalidierung</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: 'form/...', name: 'Forms', component: forms_app_1.BookMonkeyApp, useAsDefault: true },
            { path: 'validation/...', name: 'Form-Validation', component: validation_app_1.BookMonkeyApp }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], IterationThreeComponent);
    return IterationThreeComponent;
}());
exports.IterationThreeComponent = IterationThreeComponent;
//# sourceMappingURL=iteration-3.component.js.map