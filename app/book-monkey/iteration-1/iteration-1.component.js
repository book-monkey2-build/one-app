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
var book_details_app_1 = require('./book-details/book-details.app');
var book_list_app_1 = require('./book-list/book-list.app');
var book_list_refactored_app_1 = require('./book-list-refactored/book-list-refactored.app');
var IterationOneComponent = (function () {
    function IterationOneComponent(router) {
        this.router = router;
    }
    IterationOneComponent = __decorate([
        core_1.Component({
            selector: 'iteration-1',
            template: "\n    <div class=\"ui three small ordered steps\">\n      <a [routerLink]=\"['BookDetails']\"\n         [class.active]=\"router.isRouteActive(router.generate(['./BookDetails']))\"\n         class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Detailansicht</div>\n        </div>\n      </a>\n      <a [routerLink]=\"['BookList']\"\n         [class.active]=\"router.isRouteActive(router.generate(['./BookList']))\"\n         class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Listenansicht</div>\n        </div>\n      </a>\n      <a [routerLink]=\"['BookListRefactored']\"\n         [class.active]=\"router.isRouteActive(router.generate(['./BookListRefactored']))\"\n         class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Verbesserte Listenansicht</div>\n        </div>\n      </a>\n    </div>\n    <div class=\"ui raised padded container segment\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/book-details', name: 'BookDetails', component: book_details_app_1.BookMonkeyApp, useAsDefault: true },
            { path: '/book-list', name: 'BookList', component: book_list_app_1.BookMonkeyApp },
            { path: '/book-list-refactored', name: 'BookListRefactored', component: book_list_refactored_app_1.BookMonkeyApp }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], IterationOneComponent);
    return IterationOneComponent;
}());
exports.IterationOneComponent = IterationOneComponent;
//# sourceMappingURL=iteration-1.component.js.map