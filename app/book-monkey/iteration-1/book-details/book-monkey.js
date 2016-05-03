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
var common_1 = require('angular2/common');
var index_1 = require('./book-list/index');
var index_2 = require('./book-details/index');
var BookMonkeyApp = (function () {
    function BookMonkeyApp() {
        this.listOn = true;
        this.detailsOn = false;
    }
    BookMonkeyApp.prototype.showList = function () {
        this.listOn = true;
        this.detailsOn = false;
    };
    BookMonkeyApp.prototype.showDetails = function (book) {
        this.book = book;
        this.listOn = false;
        this.detailsOn = true;
    };
    BookMonkeyApp = __decorate([
        core_1.Component({
            selector: 'book-monkey-app',
            directives: [index_1.BookListComponent, index_2.BookDetailsComponent, common_1.CORE_DIRECTIVES],
            template: "\n    <book-list *ngIf=\"listOn\" (showDetailsEvent)=\"showDetails($event)\"></book-list>\n    <book-details *ngIf=\"detailsOn\" (showListEvent)=\"showList()\" [book]=\"book\"></book-details>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], BookMonkeyApp);
    return BookMonkeyApp;
}());
exports.BookMonkeyApp = BookMonkeyApp;
//# sourceMappingURL=book-monkey.js.map