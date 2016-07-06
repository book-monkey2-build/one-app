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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var active_class_directive_1 = require('../../directives/active-class/active-class.directive');
var IterationFourComponent = (function () {
    function IterationFourComponent() {
    }
    IterationFourComponent = __decorate([
        core_1.Component({
            selector: 'iteration-4',
            template: "\n    <div class=\"ui one small ordered steps\">\n    <a [routerLink]=\"['http']\"\n       activeClass=\"active\"\n       class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Http</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, active_class_directive_1.ActiveClassDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], IterationFourComponent);
    return IterationFourComponent;
}());
exports.IterationFourComponent = IterationFourComponent;
//# sourceMappingURL=iteration-4.component.js.map