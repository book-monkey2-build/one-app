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
var book_1 = require('../../domain/book');
var BookDetailsComponent = (function () {
    function BookDetailsComponent() {
        this.book = new book_1.Book('9783864903571', 'Angular 2', [
            'Johannes Hoppe',
            'Danny Koppenhagen',
            'Ferdinand Malcher',
            'Gregor Woiwode'
        ]);
        this.book.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
        this.book.published = new Date(2016, 4, 26);
        this.book.rating = 5;
        this.book.description = 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2 und führt Sie anhand eines anspruchsvollen Beispielprojekts schrittweise an die Entwicklung mit Googles clientseitigem Webframework heran. Lernen Sie dabei Konzepte und Techniken, mit denen Sie strukturierte und modularisierte SinglePageAnwendungen entwickeln. Darüber hinaus lernen Sie Werkzeuge wie Yo, Gulp, Bower, Karma und Protractor zu verwenden und in Ihren Workflow zu integrieren.';
        this.book.thumbnails = [
            new book_1.Thumbnail('http://goo.gl/nDi0Fc', 'Buchcover'),
            new book_1.Thumbnail('https://goo.gl/LnYTQD', 'Angular 2 Logo')
        ];
    }
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent = __decorate([
        core_1.Component({
            selector: 'book-details',
            moduleId: module.id,
            templateUrl: 'book-details.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map