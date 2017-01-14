webpackJsonp([19,26],{

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iteration_6_component__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iteration_6_routing_module__ = __webpack_require__(890);
/* harmony export (binding) */ __webpack_require__.d(exports, "Iteration6Module", function() { return Iteration6Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Iteration6Module = (function () {
    function Iteration6Module() {
    }
    Iteration6Module = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__iteration_6_component__["a" /* Iteration6Component */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__iteration_6_routing_module__["a" /* Iteration6RoutingModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration6Module);
    return Iteration6Module;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/iteration-6.module.js.map

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Iteration6Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Iteration6Component = (function () {
    function Iteration6Component() {
    }
    Iteration6Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <div class=\"ui four small ordered steps\">\n    <a routerLink=\"modules\" routerLinkActive=\"active\" class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Die Anwendung modularisieren</div>\n      </div>\n    </a>\n    <a routerLink=\"lazy-loading\" routerLinkActive=\"active\" class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Lazy-Loading</div>\n      </div>\n    </a>\n    <a routerLink=\"guards\" routerLinkActive=\"active\" class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Guards</div>\n      </div>\n    </a>\n    <a routerLink=\"resolver\" routerLinkActive=\"active\" class=\"step\">\n      <div class=\"content\">\n        <div class=\"title\">Resolver</div>\n      </div>\n    </a>\n  </div>\n  <div class=\"ui raised padded container segment\">\n    <router-outlet></router-outlet>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration6Component);
    return Iteration6Component;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/iteration-6.component.js.map

/***/ },

/***/ 890:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iteration_6_component__ = __webpack_require__(805);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Iteration6RoutingModule; });
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
        component: __WEBPACK_IMPORTED_MODULE_2__iteration_6_component__["a" /* Iteration6Component */],
        children: [
            { path: '', redirectTo: 'modules', pathMatch: 'full' },
            { path: 'modules', loadChildren: 'app/book-monkey/iteration-6/modules/app.module#AppModule' },
            { path: 'lazy-loading', loadChildren: 'app/book-monkey/iteration-6/lazy-loading/app.module#AppModule' },
            { path: 'guards', loadChildren: 'app/book-monkey/iteration-6/guards/app.module#AppModule' },
            { path: 'resolver', loadChildren: 'app/book-monkey/iteration-6/resolver/app.module#AppModule' }
        ]
    }
];
var Iteration6RoutingModule = (function () {
    function Iteration6RoutingModule() {
    }
    Iteration6RoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], Iteration6RoutingModule);
    return Iteration6RoutingModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/iteration-6-routing.module.js.map

/***/ }

});
//# sourceMappingURL=19.bundle.map