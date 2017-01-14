webpackJsonp([23,26],{

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(607)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/home.component.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

var map = {
	"app/book-monkey/iteration-1/iteration-1.module": [
		629,
		16
	],
	"app/book-monkey/iteration-2/iteration-2.module": [
		630,
		18
	],
	"app/book-monkey/iteration-2/navigation/app.module": [
		631,
		17
	],
	"app/book-monkey/iteration-3/http/app.module": [
		632,
		6
	],
	"app/book-monkey/iteration-3/iteration-3.module": [
		633,
		22
	],
	"app/book-monkey/iteration-4/custom-validation/app.module": [
		634,
		3
	],
	"app/book-monkey/iteration-4/iteration-4.module": [
		635,
		21
	],
	"app/book-monkey/iteration-4/reactive-forms/app.module": [
		636,
		5
	],
	"app/book-monkey/iteration-4/template-driven-forms/app.module": [
		637,
		4
	],
	"app/book-monkey/iteration-5/directives/app.module": [
		638,
		1
	],
	"app/book-monkey/iteration-5/iteration-5.module": [
		639,
		20
	],
	"app/book-monkey/iteration-5/pipes/app.module": [
		640,
		2
	],
	"app/book-monkey/iteration-6/guards/admin/admin.module": [
		641,
		9
	],
	"app/book-monkey/iteration-6/guards/app.module": [
		642,
		14
	],
	"app/book-monkey/iteration-6/guards/book/book.module": [
		643,
		12
	],
	"app/book-monkey/iteration-6/iteration-6.module": [
		644,
		19
	],
	"app/book-monkey/iteration-6/lazy-loading/admin/admin.module": [
		645,
		8
	],
	"app/book-monkey/iteration-6/lazy-loading/app.module": [
		646,
		15
	],
	"app/book-monkey/iteration-6/lazy-loading/book/book.module": [
		647,
		11
	],
	"app/book-monkey/iteration-6/modules/app.module": [
		648,
		0
	],
	"app/book-monkey/iteration-6/resolver/admin/admin.module": [
		649,
		7
	],
	"app/book-monkey/iteration-6/resolver/app.module": [
		650,
		13
	],
	"app/book-monkey/iteration-6/resolver/book/book.module": [
		651,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 338;


/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(450);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/main.js.map

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    {
        path: 'iteration-1',
        loadChildren: 'app/book-monkey/iteration-1/iteration-1.module#Iteration1Module'
    },
    {
        path: 'iteration-2',
        loadChildren: 'app/book-monkey/iteration-2/iteration-2.module#Iteration2Module'
    },
    {
        path: 'iteration-3',
        loadChildren: 'app/book-monkey/iteration-3/iteration-3.module#Iteration3Module'
    },
    {
        path: 'iteration-4',
        loadChildren: 'app/book-monkey/iteration-4/iteration-4.module#Iteration4Module'
    },
    {
        path: 'iteration-5',
        loadChildren: 'app/book-monkey/iteration-5/iteration-5.module#Iteration5Module'
    },
    {
        path: 'iteration-6',
        loadChildren: 'app/book-monkey/iteration-6/iteration-6.module#Iteration6Module'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/app-routing.module.js.map

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
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
    function AppComponent(r) {
        this.r = r;
        this.mobileLayout = false;
        this.showSidebar = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.r.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationEnd */]; })
            .subscribe(function (e) {
            var url = e.urlAfterRedirects;
            var amountOfSlashes = (url.match(/\//g) || []).length;
            if (amountOfSlashes < 2) {
                _this.repoName = 'book-monkey2';
                _this.repositoryUrl = 'https://github.com/angular-buch/book-monkey2';
                return;
            }
            else {
                var parts = url.split('/');
                _this.repoName = parts[1] + '-' + parts[2];
            }
            _this.repositoryUrl = 'https://github.com/book-monkey2-build/' + _this.repoName;
        });
        this.onResize();
    };
    AppComponent.prototype.toggleSidebar = function () {
        this.showSidebar = !this.showSidebar;
    };
    AppComponent.prototype.onResize = function () {
        this.mobileLayout = window.innerWidth < 767;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: __webpack_require__(606),
            styles: [__webpack_require__(605)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/app.component.js.map

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(448);
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
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/app.module.js.map

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/environment.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/travis/build/angular-buch/book-monkey2/src/polyfills.js.map

/***/ },

/***/ 605:
/***/ function(module, exports) {

module.exports = ".let-space-for-footer {\n  padding-bottom: 130px;\n}\n\n.let-space-for-mobile-top-menu {\n  margin-bottom: 140px;\n}\n\n.ui.footer.segment {\n  width: 100%;\n  position: fixed;\n  left:0;\n  bottom:0;\n}\n\nh4.ui.inverted.icon.header {\n  margin:0px;\n}\n"

/***/ },

/***/ 606:
/***/ function(module, exports) {

module.exports = "\n  <div class=\"ui sidebar inverted vertical menu\" [class.visible]=\"mobileLayout && showSidebar\">\n    <a class=\"item\" (click)=\"toggleSidebar()\">\n      Sidebar schließen <i class=\"angle double left icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"  (click)=\"toggleSidebar()\">\n      <i class=\"home icon\"></i> Home\n    </a>\n    <a class=\"item\" routerLink=\"/iteration-1\" routerLinkActive=\"active\" (click)=\"toggleSidebar()\">\n      I - Komponenten &amp; Template Syntax <i class=\"angle right icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/iteration-2\" routerLinkActive=\"active\" (click)=\"toggleSidebar()\">\n      II - Services &amp; Routing <i class=\"angle right icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/iteration-3\" routerLinkActive=\"active\" (click)=\"toggleSidebar()\">\n      III - HTTP <i class=\"angle right icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/iteration-4\" routerLinkActive=\"active\" (click)=\"toggleSidebar()\">\n      IV - Formularverarbeitung &amp; Validierung <i class=\"angle right icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/iteration-5\" routerLinkActive=\"active\" (click)=\"toggleSidebar()\">\n      V - Pipes &amp; Direktiven <i class=\"angle right icon\"></i>\n    </a>\n    <a class=\"item\" routerLink=\"/iteration-6\" routerLinkActive=\"active\" (click)=\"toggleSidebar()\">\n      VI - Module &amp; forgeschrittenes Routing <i class=\"angle right icon\"></i>\n    </a>\n  </div>\n\n  <div class=\"pusher dimmed\">\n\n    <div class=\"ui top fixed inverted pointing menu let-space-for-mobile-top-menu\" *ngIf=\"mobileLayout\">\n      <a class=\"toc item\" (click)=\"toggleSidebar()\">\n        <i class=\"sidebar icon\"></i> Hauptmenü\n      </a>\n    </div>\n    <!-- Site content !-->\n\n    <div class=\"let-space-for-footer\">\n      <div class=\"ui seven steps\" *ngIf=\"!mobileLayout\">\n        <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" class=\"step\">\n          <i class=\"home icon\"></i>\n        </a>\n        <a routerLink=\"/iteration-1\" routerLinkActive=\"active\" class=\"step\">\n          <div class=\"content\">\n            <div class=\"title\">Iteration 1</div>\n            <div class=\"description\">Komponenten &amp; Template Syntax</div>\n          </div>\n        </a>\n        <a routerLink=\"/iteration-2\" routerLinkActive=\"active\" class=\"step\">\n          <div class=\"content\">\n            <div class=\"title\">Iteration 2</div>\n            <div class=\"description\">Services &amp; Routing</div>\n          </div>\n        </a>\n        <a routerLink=\"/iteration-3\" routerLinkActive=\"active\" class=\"step\">\n          <div class=\"content\">\n            <div class=\"title\">Iteration 3</div>\n            <div class=\"description\">HTTP</div>\n          </div>\n        </a>\n        <a routerLink=\"/iteration-4\" routerLinkActive=\"active\" class=\"step\">\n          <div class=\"content\">\n            <div class=\"title\">Iteration 4</div>\n            <div class=\"description\">Formularverarbeitung &amp; Validierung</div>\n          </div>\n        </a>\n        <a routerLink=\"/iteration-5\" routerLinkActive=\"active\" class=\"step\">\n          <div class=\"content\">\n            <div class=\"title\">Iteration 5</div>\n            <div class=\"description\">Pipes &amp; Direktiven</div>\n          </div>\n        </a>\n        <a routerLink=\"/iteration-6\" routerLinkActive=\"active\" class=\"step\">\n          <div class=\"content\">\n            <div class=\"title\">Iteration 6</div>\n            <div class=\"description\">Module &amp; forgeschrittenes Routing</div>\n          </div>\n        </a>\n      </div>\n\n      <router-outlet></router-outlet>\n    </div>\n\n    <a [href]=\"repositoryUrl\" target=\"_blank\">\n      <div class=\"ui inverted vertical footer segment\">\n        <div class=\"ui center aligned container\">\n          <h4 class=\"ui inverted icon header\">\n            <i class=\"github icon\"></i>\n            <div class=\"content\">\n              {{ repoName }}\n              <div class=\"sub header\">Quelltext auf Github</div>\n            </div>\n          </h4>\n        </div>\n      </div>\n    </a>\n\n</div>\n\n"

/***/ },

/***/ 607:
/***/ function(module, exports) {

module.exports = "<div class=\"ui vertical segment\">\n    <div class=\"ui text container\">\n      <h1 class=\"ui header\">\n        <div class=\"content\">\n          Angular\n          <div class=\"sub header\">Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen</div>\n        </div>\n      </h1>\n\n      <a href=\"http://angular-buch.com/\"><img class=\"ui right floated image\" src=\"/assets/images/book-thumbnail.png\"></a>\n\n      <h3>Der BookMonkey – Das Beispielprojekt zum Buch</h3>\n      <p></p>\n      <a routerLink=\"iteration-1\" class=\"ui huge red button\">\n        Jetzt starten\n        <i class=\"right arrow icon\"></i>\n      </a>\n    </div>\n</div>\n"

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ }

},[627]);
//# sourceMappingURL=main.bundle.map