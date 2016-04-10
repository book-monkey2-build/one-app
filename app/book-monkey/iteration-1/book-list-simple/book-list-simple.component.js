System.register(['angular2/core', '../domain/book'], function(exports_1, context_1) {
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
    var core_1, book_1;
    var BookListSimpleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_1_1) {
                book_1 = book_1_1;
            }],
        execute: function() {
            BookListSimpleComponent = (function () {
                function BookListSimpleComponent() {
                    var book1 = new book_1.Book('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']);
                    book1.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
                    book1.thumbnails = [new book_1.Thumbnail('http://goo.gl/nDi0Fc', 'Buchcover')];
                    var book2 = new book_1.Book('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm']);
                    book2.subtitle = 'Eine praktische Einführung';
                    book2.thumbnails = [new book_1.Thumbnail('https://goo.gl/Y5lFVE', 'Buchcover')];
                    this.books = [
                        book1, book2
                    ];
                }
                BookListSimpleComponent = __decorate([
                    core_1.Component({
                        selector: 'it1-book-list-simple',
                        templateUrl: 'app/book-monkey/iteration-1/book-list-simple/book-list-simple.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookListSimpleComponent);
                return BookListSimpleComponent;
            }());
            exports_1("BookListSimpleComponent", BookListSimpleComponent);
        }
    }
});
//# sourceMappingURL=book-list-simple.component.js.map