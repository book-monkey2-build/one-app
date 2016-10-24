webpackJsonp([9,16],{

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iteration_2_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__di_app_module__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iteration_2_routing_module__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Iteration2Module = (function () {
    function Iteration2Module() {
    }
    Iteration2Module = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__iteration_2_component__["a" /* Iteration2Component */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__iteration_2_routing_module__["a" /* Iteration2RoutingModule */], __WEBPACK_IMPORTED_MODULE_2__di_app_module__["a" /* AppModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration2Module);
    return Iteration2Module;
}());
/* harmony default export */ exports["default"] = Iteration2Module;


/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thumbnail__ = __webpack_require__(768);
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

/***/ 703:
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

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__(689);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookStoreService = (function () {
    function BookStoreService() {
        this.books = [
            new __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */]('9783864903571', 'Angular 2', ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'], new Date(2016, 5, 26), 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen', 5, [new __WEBPACK_IMPORTED_MODULE_1__book__["b" /* Thumbnail */]('http://goo.gl/nDi0Fc', 'Buchcover')], 'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'),
            new __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */]('9783864901546', 'AngularJS', ['Philipp Tarasiewicz', 'Robin Böhm'], new Date(2014, 5, 29), 'Eine praktische Einführung', 5, [new __WEBPACK_IMPORTED_MODULE_1__book__["b" /* Thumbnail */]('https://goo.gl/Y5lFVE', 'Buchcover')], 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...')
        ];
    }
    BookStoreService.prototype.getAll = function () {
        return this.books;
    };
    BookStoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], BookStoreService);
    return BookStoreService;
}());


/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Iteration2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iteration2Component = (function () {
    function Iteration2Component() {
    }
    Iteration2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <div class=\"ui two small ordered steps\">\n    <a routerLink=\"di\" routerLinkActive=\"active\" class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Dependency-Injection</div>\n      </div>\n    </a>\n    <a routerLink=\"navigation\" routerLinkActive=\"active\" class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Navigation</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration2Component);
    return Iteration2Component;
}());


/***/ },

/***/ 764:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_list_book_list_component__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_list_item_book_list_item_component__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__book_details_book_details_component__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_book_store_service__ = __webpack_require__(704);
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
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_book_store_service__["a" /* BookStoreService */] // NEW!
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 765:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(689);
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
        this.showListEvent.emit(0);
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
            template: __webpack_require__(831)
        }), 
        __metadata('design:paramtypes', [])
    ], BookDetailsComponent);
    return BookDetailsComponent;
    var _a;
}());


/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book__ = __webpack_require__(689);
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
            template: __webpack_require__(832)
        }), 
        __metadata('design:paramtypes', [])
    ], BookListItemComponent);
    return BookListItemComponent;
    var _a;
}());


/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__ = __webpack_require__(704);
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
    function BookListComponent(bs) {
        this.bs = bs;
        this.showDetailsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.books = this.bs.getAll();
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
            template: __webpack_require__(833)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], BookListComponent);
    return BookListComponent;
    var _a;
}());


/***/ },

/***/ 768:
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

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iteration_2_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__di_app_component__ = __webpack_require__(703);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Iteration2RoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__iteration_2_component__["a" /* Iteration2Component */],
        children: [
            { path: '', redirectTo: 'di', pathMatch: 'full' },
            { path: 'di', component: __WEBPACK_IMPORTED_MODULE_3__di_app_component__["a" /* AppComponent */] },
            { path: 'navigation', loadChildren: 'app/book-monkey/iteration-2/navigation/app.module#AppModule' }
        ]
    }
];
var Iteration2RoutingModule = (function () {
    function Iteration2RoutingModule() {
    }
    Iteration2RoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration2RoutingModule);
    return Iteration2RoutingModule;
}());


/***/ },

/***/ 831:
/***/ function(module, exports) {

module.exports = "<div class=\"ui grid\" *ngIf=\"book\">\n  <div class=\"four wide column\">\n    <img class=\"ui large image\" [src]=\"book?.thumbnails && book?.thumbnails[0].url\">\n  </div>\n  <div class=\"twelve wide column\">\n    <h1 class=\"ui header\">{{ book?.title }}</h1>\n    <h3 class=\"ui header\">{{ book?.subtitle }}</h3>\n    <div class=\"ui divider\"></div>\n    <div class=\"ui grid\">\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Autoren</h4>\n        <span *ngFor=\"let author of book?.authors; let l=last\">\n          {{ author }}<span *ngIf=\"!l\">, </span>\n        </span>\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">ISBN</h4>\n        {{ book?.isbn }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Erschienen</h4>\n        {{ book?.published }}\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui header\">Rating</h4>\n        <i *ngFor=\"let i of getRating(book?.rating)\" class=\"yellow star icon\"></i>\n      </div>\n    </div>\n  </div>\n  <div class=\"sixteen wide column\">\n    <h3 class=\"ui header\">Beschreibung</h3>\n    {{ book?.description }}\n  </div>\n  <div class=\"sixteen wide column\">\n    <div class=\"ui small images\">\n      <img *ngFor=\"let thumbnail of book?.thumbnails\" [src]=\"thumbnail.url\">\n    </div>\n  </div>\n</div>\n\n<button (click)=\"showBookList()\" class=\"ui red button\">Zurück zur Buchliste</button>\n"

/***/ },

/***/ 832:
/***/ function(module, exports) {

module.exports = "<img class=\"ui tiny image\"\n     *ngIf=\"book.thumbnails != undefined\"\n     [src]=\"book.thumbnails[0].url\"><div class=\"content\">\n  <div class=\"header\">{{ book?.title }}</div>\n  <div class=\"description\"> {{ book?.subtitle }} </div>\n  <div class=\"metadata\">\n    <span *ngFor=\"let author of book.authors; let l=last\">\n      {{ author }}<span *ngIf=\"!l\">, </span>\n    </span>\n  </div>\n  <div class=\"extra\">ISBN {{ book?.isbn }}</div>\n</div>\n"

/***/ },

/***/ 833:
/***/ function(module, exports) {

module.exports = "<div class=\"ui middle aligned selection divided list\">\n  <a class=\"bm-book-list-item item\"\n      *ngFor=\"let b of books\" [book]=\"b\"\n      (click)=\"showDetails(b)\">\n  </a>\n</div>\n"

/***/ }

});
//# sourceMappingURL=9.map