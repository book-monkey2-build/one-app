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
var book_monkey_1 = require('./book-details/book-monkey');
var book_monkey_2 = require('./book-list/book-monkey');
var book_monkey_3 = require('./book-list-refactored/book-monkey');
var active_class_directive_1 = require('../../directives/active-class/active-class.directive');
var IterationOneComponent = (function () {
    function IterationOneComponent() {
    }
    IterationOneComponent = __decorate([
        core_1.Component({
            selector: 'iteration-1',
            template: "\n    <div class=\"ui three small ordered steps\">\n      <a [routerLink]=\"['BookDetails']\"\n         activeClass=\"active\"\n         class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Detailansicht</div>\n        </div>\n      </a>\n      <a [routerLink]=\"['BookList']\"\n         activeClass=\"active\"\n         class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Listenansicht</div>\n        </div>\n      </a>\n      <a [routerLink]=\"['BookListRefactored']\"\n         activeClass=\"active\"\n         class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Verbesserte Listenansicht</div>\n        </div>\n      </a>\n    </div>\n    <div class=\"ui raised padded container segment\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, active_class_directive_1.ActiveClassDirective]
        }),
        router_1.RouteConfig([
            { path: '/book-details', name: 'BookDetails', component: book_monkey_1.BookMonkeyApp, useAsDefault: true },
            { path: '/book-list', name: 'BookList', component: book_monkey_2.BookMonkeyApp },
            { path: '/book-list-refactored', name: 'BookListRefactored', component: book_monkey_3.BookMonkeyApp }
        ]), 
        __metadata('design:paramtypes', [])
    ], IterationOneComponent);
    return IterationOneComponent;
}());
exports.IterationOneComponent = IterationOneComponent;
//# sourceMappingURL=iteration-1.component.js.map