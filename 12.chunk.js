webpackJsonp([12,22],{

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_list_app_module__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_list_refactored_app_module__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_details_app_module__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__iteration_1_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__iteration_1_routing_module__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Iteration1Module = (function () {
    function Iteration1Module() {
    }
    Iteration1Module = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__iteration_1_component__["a" /* Iteration1Component */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__book_list_app_module__["a" /* AppModule */],
                __WEBPACK_IMPORTED_MODULE_2__book_list_refactored_app_module__["a" /* AppModule */],
                __WEBPACK_IMPORTED_MODULE_3__book_details_app_module__["a" /* AppModule */],
                __WEBPACK_IMPORTED_MODULE_5__iteration_1_routing_module__["a" /* Iteration1RoutingModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration1Module);
    return Iteration1Module;
}());
/* harmony default export */ exports["default"] = Iteration1Module;


/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail__ = __webpack_require__(785);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Book; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnail__["a"]; });

var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    return Book;
}());


/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.listOn = true;
        this.detailsOn = false;
    }
    AppComponent.prototype.showList = function () {
        this.listOn = true;
        this.detailsOn = false;
    };
    AppComponent.prototype.showDetails = function (book) {
        this.book = book;
        this.listOn = false;
        this.detailsOn = true;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: "\n    <bm-book-list *ngIf=\"listOn\" (showDetailsEvent)=\"showDetails($event)\"></bm-book-list>\n    <bm-book-details *ngIf=\"detailsOn\" (showListEvent)=\"showList()\" [book]=\"book\"></bm-book-details>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());


/***/ },

/***/ 713:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: '<bm-book-list></bm-book-list>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());


/***/ },

/***/ 714:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail__ = __webpack_require__(789);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Book; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnail__["a"]; });

var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    return Book;
}());


/***/ },

/***/ 715:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: '<bm-book-list></bm-book-list>'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());


/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Iteration1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iteration1Component = (function () {
    function Iteration1Component() {
    }
    Iteration1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <div class=\"ui three small ordered steps\">\n      <a routerLink=\"book-list\" routerLinkActive=\"active\" class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Listenansicht</div>\n        </div>\n      </a>\n      <a routerLink=\"book-list-refactored\" routerLinkActive=\"active\"  class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Verbesserte Listenansicht</div>\n        </div>\n      </a>\n      <a routerLink=\"book-details\" routerLinkActive=\"active\" class=\"step\">\n        <div class=\"content\">\n          <div class=\"title\">Detailansicht</div>\n        </div>\n      </a>\n    </div>\n    <div class=\"ui raised padded container segment\">\n      <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration1Component);
    return Iteration1Component;
}());


/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_list_item_book_list_item_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_details_book_details_component__ = __webpack_require__(782);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__book_list_item_book_list_item_component__["a" /* BookListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_5__book_details_book_details_component__["a" /* BookDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(699);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookDetailsComponent = (function () {
    function BookDetailsComponent() {
        this.showListEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BookDetailsComponent.prototype.getRating = function (num) {
        return new Array(num);
    };
    BookDetailsComponent.prototype.showBookList = function () {
        this.showListEvent.emit(null);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], BookDetailsComponent.prototype, "book", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BookDetailsComponent.prototype, "showListEvent", void 0);
    BookDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-details',
            template: __webpack_require__(872)
        }), 
        __metadata('design:paramtypes', [])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a;
}());


/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(699);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListItemComponent = (function () {
    function BookListItemComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'a.bm-book-list-item',
            template: __webpack_require__(873)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListItemComponent);
    return BookListItemComponent;
    var _a;
}());


/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(699);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent() {
        this.showDetailsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'], new Date(2016, 5, 26), 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen', 5, [new __WEBPACK_IMPORTED_MODULE_1__shared_book__["b" /* Thumbnail */]('http://goo.gl/nDi0Fc', 'Buchcover')], 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'),
            new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm'], new Date(2014, 5, 29), 'Eine praktische Einführung', 5, [new __WEBPACK_IMPORTED_MODULE_1__shared_book__["b" /* Thumbnail */]('https://goo.gl/Y5lFVE', 'Buchcover')], 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...')
        ];
    };
    BookListComponent.prototype.showDetails = function (book) {
        this.showDetailsEvent.emit(book);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BookListComponent.prototype, "showDetailsEvent", void 0);
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-list',
            template: __webpack_require__(874),
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());


/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Thumbnail; });
var Thumbnail = (function () {
    function Thumbnail(url, title) {
        this.url = url;
        this.title = title;
    }
    return Thumbnail;
}());


/***/ },

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_list_item_book_list_item_component__ = __webpack_require__(787);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__book_list_item_book_list_item_component__["a" /* BookListItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(714);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListItemComponent = (function () {
    function BookListItemComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]) === 'function' && _a) || Object)
    ], BookListItemComponent.prototype, "book", void 0);
    BookListItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'a.bm-book-list-item',
            template: __webpack_require__(875)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListItemComponent);
    return BookListItemComponent;
    var _a;
}());


/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(714);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent() {
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'], new Date(2016, 5, 26), 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen', 5, [new __WEBPACK_IMPORTED_MODULE_1__shared_book__["b" /* Thumbnail */]('http://goo.gl/nDi0Fc', 'Buchcover')], 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'),
            new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm'], new Date(2014, 5, 29), 'Eine praktische Einführung', 5, [new __WEBPACK_IMPORTED_MODULE_1__shared_book__["b" /* Thumbnail */]('https://goo.gl/Y5lFVE', 'Buchcover')], 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...')
        ];
    };
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-list',
            template: __webpack_require__(876)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());


/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Thumbnail; });
var Thumbnail = (function () {
    function Thumbnail(url, title) {
        this.url = url;
        this.title = title;
    }
    return Thumbnail;
}());


/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__(791);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__["a" /* BookListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(792);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent() {
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'], new Date(2016, 5, 26), 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen', 5, [new __WEBPACK_IMPORTED_MODULE_1__shared_book__["b" /* Thumbnail */]('http://goo.gl/nDi0Fc', 'Buchcover')], 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'),
            new __WEBPACK_IMPORTED_MODULE_1__shared_book__["a" /* Book */]('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm'], new Date(2014, 5, 29), 'Eine praktische Einführung', 5, [new __WEBPACK_IMPORTED_MODULE_1__shared_book__["b" /* Thumbnail */]('https://goo.gl/Y5lFVE', 'Buchcover')], 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...')
        ];
    };
    BookListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-book-list',
            template: __webpack_require__(877)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponent);
    return BookListComponent;
}());


/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail__ = __webpack_require__(793);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Book; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__thumbnail__["a"]; });

var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    return Book;
}());


/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Thumbnail; });
var Thumbnail = (function () {
    function Thumbnail(url, title) {
        this.url = url;
        this.title = title;
    }
    return Thumbnail;
}());


/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iteration_1_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_app_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_list_refactored_app_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_details_app_component__ = __webpack_require__(712);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Iteration1RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__iteration_1_component__["a" /* Iteration1Component */],
        children: [
            { path: '', redirectTo: 'book-list', pathMatch: 'full' },
            { path: 'book-list', component: __WEBPACK_IMPORTED_MODULE_3__book_list_app_component__["a" /* AppComponent */] },
            { path: 'book-list-refactored', component: __WEBPACK_IMPORTED_MODULE_4__book_list_refactored_app_component__["a" /* AppComponent */] },
            { path: 'book-details', component: __WEBPACK_IMPORTED_MODULE_5__book_details_app_component__["a" /* AppComponent */] }]
    }
];
var Iteration1RoutingModule = (function () {
    function Iteration1RoutingModule() {
    }
    Iteration1RoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration1RoutingModule);
    return Iteration1RoutingModule;
}());


/***/ },

/***/ 872:
/***/ function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"book\">\n  <div class=\"four wide column\">\n    <img class=\"ui large image\" [src]=\"book.thumbnails[0].url\">\n  </div>\n  <div class=\"twelve wide column\">\n    <h1 class=\"ui header\">{{ book.title }}</h1>\n    <h3 class=\"ui header\">{{ book.subtitle }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Autoren</h4>\n        <span *ngFor=\"let author of book.authors; let l=last\">\n          {{ author }}<span *ngIf=\"!l\">, </span>\n        </span>\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">ISBN</h4>\n        {{ book.isbn }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Erschienen</h4>\n        {{ book.published }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Rating</h4>\n        <i *ngFor=\"let r of getRating(book.rating)\" class=\"yellow star icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    {{ book.description }}\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n      <img *ngFor=\"let thumbnail of book.thumbnails\" [src]=\"thumbnail.url\">\n    </div>\n  </div>\n</div>\n\n<button (click)=\"showBookList()\" class=\"ui red button\">Zurück zur Buchliste</button>\n"

/***/ },

/***/ 873:
/***/ function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails != undefined\"\n     [src]=\"book.thumbnails[0].url\"><div class=\"content\">\n  <div class=\"header\">{{ book.title }}</div>\n  <div class=\"description\"> {{ book.subtitle }} </div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; let l=last\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n  </div>\n  <div class=\"extra\">ISBN {{ book.isbn }}</div>\n</div>\n"

/***/ },

/***/ 874:
/***/ function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <a class=\"bm-book-list-item item\"\n      *ngFor=\"let b of books\" [book]=\"b\"\n      (click)=\"showDetails(b)\">\n  </a>\n</div>\n"

/***/ },

/***/ 875:
/***/ function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails != undefined\"\n     [src]=\"book.thumbnails[0].url\"><div class=\"content\">\n  <div class=\"header\">{{ book.title }}</div>\n  <div class=\"description\"> {{ book.subtitle }} </div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; let l=last\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n  </div>\n  <div class=\"extra\">ISBN {{ book.isbn }}</div>\n</div>\n"

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <a class=\"bm-book-list-item item\" *ngFor=\"let b of books\" [book]=\"b\"></a>\n</div>\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <a *ngFor=\"let book of books\" class=\"item\">\n    <img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails != undefined\"\n     [src]=\"book.thumbnails[0].url\">\n    <div class=\"content\">\n      <div class=\"header\">{{ book.title }}</div>\n      <div class=\"description\"> {{ book.subtitle }} </div>\n      <div class=\"metadata\">\n        <span *ngFor=\"let author of book.authors; let l=last\">\n          {{ author }}<span *ngIf=\"!l\">, </span>\n        </span>\n      </div>\n      <div class=\"extra\">ISBN {{ book.isbn }}</div>\n    </div>\n  </a>\n</div>\n"

/***/ }

});
//# sourceMappingURL=12.map