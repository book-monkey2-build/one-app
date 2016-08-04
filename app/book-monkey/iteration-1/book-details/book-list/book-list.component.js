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
var index_1 = require('../book-list-item/index');
var book_1 = require('../shared/book');
var BookListComponent = (function () {
    function BookListComponent() {
        this.showDetailsEvent = new core_1.EventEmitter();
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books = [
            new book_1.Book('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'], new Date(2016, 5, 26), 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen', 5, [new book_1.Thumbnail('http://goo.gl/nDi0Fc', 'Buchcover')], 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'),
            new book_1.Book('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm'], new Date(2014, 5, 29), 'Eine praktische Einführung', 5, [new book_1.Thumbnail('https://goo.gl/Y5lFVE', 'Buchcover')], 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...')
        ];
    };
    BookListComponent.prototype.showDetails = function (book) {
        this.showDetailsEvent.emit(book);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BookListComponent.prototype, "showDetailsEvent", void 0);
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'book-list',
            moduleId: module.id,
            templateUrl: 'book-list.component.html',
            directives: [index_1.BookListItemComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=book-list.component.js.map