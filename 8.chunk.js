webpackJsonp([8,18],{

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_book_validators_service__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module_one_app__ = __webpack_require__(820);
/* harmony export (binding) */ __webpack_require__.d(exports, "AppModule", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module_one_app__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */],
                __WEBPACK_IMPORTED_MODULE_6__shared_book_validators_service__["a" /* BookValidatorsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());


/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export scheduleMicroTask */
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return _global; });
/* unused harmony export getTypeNameForDebugging */
/* harmony export (immutable) */ exports["a"] = isPresent;
/* harmony export (immutable) */ exports["b"] = isBlank;
/* unused harmony export isStrictStringMap */
/* unused harmony export isDate */
/* unused harmony export noop */
/* unused harmony export stringify */
/* unused harmony export NumberWrapper */
/* unused harmony export looseIdentical */
/* unused harmony export normalizeBlank */
/* unused harmony export normalizeBool */
/* harmony export (immutable) */ exports["c"] = isJsObject;
/* unused harmony export print */
/* unused harmony export warn */
/* unused harmony export setValueOnPath */
/* harmony export (immutable) */ exports["d"] = getSymbolIterator;
/* unused harmony export isPrimitive */
/* unused harmony export escapeRegExp */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    }
    else {
        globalScope = global;
    }
}
else {
    globalScope = window;
}
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;

function getTypeNameForDebugging(type) {
    return type['name'] || typeof type;
}
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isBlank(obj) {
    return obj === undefined || obj === null;
}
var STRING_MAP_PROTO = Object.getPrototypeOf({});
function isStrictStringMap(obj) {
    return typeof obj === 'object' && obj !== null && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
function noop() { }
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token === undefined || token === null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    if (token.name) {
        return token.name;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
var NumberWrapper = (function () {
    function NumberWrapper() {
    }
    NumberWrapper.parseIntAutoRadix = function (text) {
        var result = parseInt(text);
        if (isNaN(result)) {
            throw new Error('Invalid integer literal when parsing ' + text);
        }
        return result;
    };
    NumberWrapper.parseInt = function (text, radix) {
        if (radix == 10) {
            if (/^(\-|\+)?[0-9]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else if (radix == 16) {
            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                return parseInt(text, radix);
            }
        }
        else {
            var result = parseInt(text, radix);
            if (!isNaN(result)) {
                return result;
            }
        }
        throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
    };
    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
    return NumberWrapper;
}());
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
}
function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
}
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
function print(obj) {
    console.log(obj);
}
function warn(obj) {
    console.warn(obj);
}
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name = parts.shift();
        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
            obj = obj[name];
        }
        else {
            obj = obj[name] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var _symbolIterator = null;
function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)))

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return ResponseContentType; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @experimental
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @experimental
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @experimental
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @experimental
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @experimental
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));
//# sourceMappingURL=enums.js.map

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_facade_collection__ = __webpack_require__(672);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Headers; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @experimental
 */
var Headers = (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers._headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return __WEBPACK_IMPORTED_MODULE_0__src_facade_collection__["a" /* MapWrapper */].values(this._normalizedNames); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return __WEBPACK_IMPORTED_MODULE_0__src_facade_collection__["a" /* MapWrapper */].values(this._headers); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
//# sourceMappingURL=headers.js.map

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ConnectionBackend; });
/* unused harmony export Connection */
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return XSRFStrategy; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @experimental
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @experimental
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @experimental
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());
//# sourceMappingURL=interfaces.js.map

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__(631);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return BaseResponseOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @experimental
 */
var ResponseOptions = (function () {
    function ResponseOptions(_a) {
        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
        this.body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(body) ? body : null;
        this.status = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(status) ? status : null;
        this.headers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(headers) ? headers : null;
        this.statusText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(statusText) ? statusText : null;
        this.type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(type) ? type : null;
        this.url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(url) ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.body) ? options.body : this.body,
            status: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.status) ? options.status : this.status,
            headers: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.headers) ? options.headers : this.headers,
            statusText: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.statusText) ? options.statusText :
                this.statusText,
            type: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.type) ? options.type : this.type,
            url: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.url) ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @experimental
 */
var BaseResponseOptions = (function (_super) {
    __extends(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        _super.call(this, { status: 200, statusText: 'Ok', type: __WEBPACK_IMPORTED_MODULE_2__enums__["a" /* ResponseType */].Default, headers: new __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* Headers */]() });
    }
    BaseResponseOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = [];
    return BaseResponseOptions;
}(ResponseOptions));
//# sourceMappingURL=base_response_options.js.map

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__(624);
/* harmony export (immutable) */ exports["e"] = normalizeMethodName;
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return isSuccess; });
/* harmony export (immutable) */ exports["c"] = getResponseURL;
/* harmony export (immutable) */ exports["b"] = stringToArrayBuffer;
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["c"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Get;
        case 'POST':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Post;
        case 'PUT':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Put;
        case 'DELETE':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Delete;
        case 'OPTIONS':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Options;
        case 'HEAD':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Head;
        case 'PATCH':
            return __WEBPACK_IMPORTED_MODULE_0__enums__["b" /* RequestMethod */].Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

//# sourceMappingURL=http_utils.js.map

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export QueryEncoder */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return URLSearchParams; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @experimental
 **/
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @experimental
 */
var URLSearchParams = (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
//# sourceMappingURL=url_search_params.js.map

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BrowserXhr; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = [];
    return BrowserXhr;
}());
//# sourceMappingURL=browser_xhr.js.map

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_utils__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__url_search_params__ = __webpack_require__(637);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return BaseRequestOptions; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * var options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * var req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @experimental
 */
var RequestOptions = (function () {
    function RequestOptions(_a) {
        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
        this.method = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(method) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__http_utils__["e" /* normalizeMethodName */])(method) : null;
        this.headers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(headers) ? headers : null;
        this.body = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(body) ? body : null;
        this.url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(url) ? url : null;
        this.search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(search) ?
            (typeof search === 'string' ? new __WEBPACK_IMPORTED_MODULE_5__url_search_params__["a" /* URLSearchParams */]((search)) :
                (search)) :
            null;
        this.withCredentials = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(withCredentials) ? withCredentials : null;
        this.responseType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(responseType) ? responseType : null;
    }
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * var options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * var req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.method) ? options.method : this.method,
            headers: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.headers) ? options.headers : this.headers,
            body: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.body) ? options.body : this.body,
            url: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.url) ? options.url : this.url,
            search: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.search) ?
                (typeof options.search === 'string' ? new __WEBPACK_IMPORTED_MODULE_5__url_search_params__["a" /* URLSearchParams */](options.search) :
                    (options.search).clone()) :
                this.search,
            withCredentials: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.withCredentials) ? options.withCredentials :
                this.withCredentials,
            responseType: options && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(options.responseType) ? options.responseType :
                this.responseType
        });
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * var options = new BaseRequestOptions();
 * var req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @experimental
 */
var BaseRequestOptions = (function (_super) {
    __extends(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        _super.call(this, { method: __WEBPACK_IMPORTED_MODULE_2__enums__["b" /* RequestMethod */].Get, headers: new __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* Headers */]() });
    }
    BaseRequestOptions.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = [];
    return BaseRequestOptions;
}(RequestOptions));
//# sourceMappingURL=base_request_options.js.map

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__body__ = __webpack_require__(663);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Response; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @experimental
 */
var Response = (function (_super) {
    __extends(Response, _super);
    function Response(responseOptions) {
        _super.call(this);
        this._body = responseOptions.body;
        this.status = responseOptions.status;
        this.ok = (this.status >= 200 && this.status <= 299);
        this.statusText = responseOptions.statusText;
        this.headers = responseOptions.headers;
        this.type = responseOptions.type;
        this.url = responseOptions.url;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(__WEBPACK_IMPORTED_MODULE_0__body__["a" /* Body */]));
//# sourceMappingURL=static_response.js.map

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(624);
/* unused harmony export JSONP_HOME */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BrowserJsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    if (_jsonpConnections === null) {
        _jsonpConnections = __WEBPACK_IMPORTED_MODULE_1__facade_lang__["e" /* global */][JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BrowserJsonp.ctorParameters = [];
    return BrowserJsonp;
}());
//# sourceMappingURL=browser_jsonp.js.map

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_response_options__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facade_lang__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interfaces__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_response__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browser_jsonp__ = __webpack_require__(660);
/* unused harmony export JSONPConnection */
/* unused harmony export JSONPConnection_ */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return JSONPBackend_; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};








var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * @experimental
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    return JSONPConnection;
}());
var JSONPConnection_ = (function (_super) {
    __extends(JSONPConnection_, _super);
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = this;
        _super.call(this);
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */]({ body: JSONP_ERR_NO_CALLBACK, type: __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ResponseType */].Error, url: url });
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["a" /* isPresent */])(baseResponseOptions)) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new __WEBPACK_IMPORTED_MODULE_6__static_response__["a" /* Response */](responseOptions_1));
                    return;
                }
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */]({ body: _this._responseData, url: url });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["a" /* isPresent */])(_this.baseResponseOptions)) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new __WEBPACK_IMPORTED_MODULE_6__static_response__["a" /* Response */](responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled)
                    return;
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Done;
                _dom.cleanup(script);
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */]({ body: error.message, type: __WEBPACK_IMPORTED_MODULE_3__enums__["a" /* ResponseType */].Error });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["a" /* isPresent */])(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_6__static_response__["a" /* Response */](responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__facade_lang__["a" /* isPresent */])(script)) {
                    _this._dom.cleanup(script);
                }
            };
        });
    }
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === __WEBPACK_IMPORTED_MODULE_3__enums__["c" /* ReadyState */].Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @experimental
 */
var JSONPBackend = (function (_super) {
    __extends(JSONPBackend, _super);
    function JSONPBackend() {
        _super.apply(this, arguments);
    }
    return JSONPBackend;
}(__WEBPACK_IMPORTED_MODULE_5__interfaces__["a" /* ConnectionBackend */]));
var JSONPBackend_ = (function (_super) {
    __extends(JSONPBackend_, _super);
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        _super.call(this);
        this._browserJSONP = _browserJSONP;
        this._baseResponseOptions = _baseResponseOptions;
    }
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend_.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    JSONPBackend_.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_7__browser_jsonp__["a" /* BrowserJsonp */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_response_options__["a" /* ResponseOptions */], },
    ];
    return JSONPBackend_;
}(JSONPBackend));
//# sourceMappingURL=jsonp_backend.js.map

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_response_options__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facade_lang__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_utils__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__static_response__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browser_xhr__ = __webpack_require__(643);
/* unused harmony export XHRConnection */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return XHRBackend; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @experimental
 */
var XHRConnection = (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(__WEBPACK_IMPORTED_MODULE_4__enums__["b" /* RequestMethod */][req.method].toUpperCase(), req.url);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(req.withCredentials)) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
                // by IE10)
                var body = _xhr.response === undefined ? _xhr.responseText : _xhr.response;
                // Implicitly strip a potential XSSI prefix.
                if (typeof body === 'string')
                    body = body.replace(XSSI_PREFIX, '');
                var headers = __WEBPACK_IMPORTED_MODULE_6__headers__["a" /* Headers */].fromResponseHeaderString(_xhr.getAllResponseHeaders());
                var url = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__http_utils__["c" /* getResponseURL */])(_xhr);
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["a" /* ResponseOptions */]({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new __WEBPACK_IMPORTED_MODULE_9__static_response__["a" /* Response */](responseOptions);
                response.ok = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__http_utils__["d" /* isSuccess */])(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new __WEBPACK_IMPORTED_MODULE_3__base_response_options__["a" /* ResponseOptions */]({
                    body: err,
                    type: __WEBPACK_IMPORTED_MODULE_4__enums__["a" /* ResponseType */].Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(baseResponseOptions)) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new __WEBPACK_IMPORTED_MODULE_9__static_response__["a" /* Response */](responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(req.headers)) {
                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            }
            // Select the correct buffer type to store the response
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(req.responseType) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(_xhr.responseType)) {
                switch (req.responseType) {
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseContentType */].ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseContentType */].Json:
                        _xhr.responseType = 'json';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseContentType */].Text:
                        _xhr.responseType = 'text';
                        break;
                    case __WEBPACK_IMPORTED_MODULE_4__enums__["d" /* ResponseContentType */].Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO #9100 */, _xhr /** TODO #9100 */) {
        // Skip if a custom Content-Type header is provided
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(req.headers) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__facade_lang__["a" /* isPresent */])(req.headers.get('Content-Type'))) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].NONE:
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case __WEBPACK_IMPORTED_MODULE_4__enums__["e" /* ContentType */].BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See {@link https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)}
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @experimental
 */
var CookieXSRFStrategy = (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* __platform_browser_private__ */].getDOM().getCookie(this._cookieName);
        if (xsrfToken && !req.headers.has(this._headerName)) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @experimental
 */
var XHRBackend = (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_10__browser_xhr__["a" /* BrowserXhr */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__base_response_options__["a" /* ResponseOptions */], },
        { type: __WEBPACK_IMPORTED_MODULE_8__interfaces__["b" /* XSRFStrategy */], },
    ];
    return XHRBackend;
}());
//# sourceMappingURL=xhr_backend.js.map

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_utils__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__url_search_params__ = __webpack_require__(637);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Body; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     */
    Body.prototype.text = function () {
        if (this._body instanceof __WEBPACK_IMPORTED_MODULE_1__url_search_params__["a" /* URLSearchParams */]) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            return String.fromCharCode.apply(null, new Uint16Array(this._body));
        }
        if (this._body === null) {
            return '';
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_utils__["a" /* isJsObject */])(this._body)) {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__http_utils__["b" /* stringToArrayBuffer */])(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
//# sourceMappingURL=body.js.map

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_facade_lang__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_request_options__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_request__ = __webpack_require__(665);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Jsonp; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(providedOpts)) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */]({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__src_facade_lang__["a" /* isPresent */])(method)) {
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */]({ method: method, url: url }));
    }
    else {
        return newOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */]({ url: url }));
    }
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import 'rxjs/add/operator/map'
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @experimental
 */
var Http = (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get, url)));
        }
        else if (url instanceof __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */]) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions.merge(new __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */]({ body: body })), options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Options, url)));
    };
    Http.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Http.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["a" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */], },
    ];
    return Http;
}());
/**
 * @experimental
 */
var Jsonp = (function (_super) {
    __extends(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */](mergeOptions(this._defaultOptions, options, __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get, url));
        }
        if (url instanceof __WEBPACK_IMPORTED_MODULE_5__static_request__["a" /* Request */]) {
            if (url.method !== __WEBPACK_IMPORTED_MODULE_3__enums__["b" /* RequestMethod */].Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_4__interfaces__["a" /* ConnectionBackend */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__base_request_options__["a" /* RequestOptions */], },
    ];
    return Jsonp;
}(Http));
//# sourceMappingURL=http.js.map

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_facade_lang__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__body__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__headers__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_utils__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__url_search_params__ = __webpack_require__(637);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Request; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @experimental
 */
var Request = (function (_super) {
    __extends(Request, _super);
    function Request(requestOptions) {
        _super.call(this);
        // TODO: assert that url is present
        var url = requestOptions.url;
        this.url = requestOptions.url;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__src_facade_lang__["a" /* isPresent */])(requestOptions.search)) {
            var search = requestOptions.search.toString();
            if (search.length > 0) {
                var prefix = '?';
                if (this.url.indexOf('?') != -1) {
                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                this.url = url + prefix + search;
            }
        }
        this._body = requestOptions.body;
        this.method = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__http_utils__["e" /* normalizeMethodName */])(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        // TODO(jeffbcross): implement behavior
        this.headers = new __WEBPACK_IMPORTED_MODULE_3__headers__["a" /* Headers */](requestOptions.headers);
        this.contentType = this.detectContentType();
        this.withCredentials = requestOptions.withCredentials;
        this.responseType = requestOptions.responseType;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].JSON;
            case 'application/x-www-form-urlencoded':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM;
            case 'multipart/form-data':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].TEXT;
            case 'application/octet-stream':
                return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].NONE;
        }
        else if (this._body instanceof __WEBPACK_IMPORTED_MODULE_5__url_search_params__["a" /* URLSearchParams */]) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM;
        }
        else if (this._body instanceof FormData) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM_DATA;
        }
        else if (this._body instanceof Blob) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].BLOB;
        }
        else if (this._body instanceof ArrayBuffer) {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body == 'object') {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].JSON;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].JSON:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].FORM_DATA:
                return this._body;
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].TEXT:
                return this.text();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].BLOB:
                return this.blob();
            case __WEBPACK_IMPORTED_MODULE_2__enums__["e" /* ContentType */].ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(__WEBPACK_IMPORTED_MODULE_1__body__["a" /* Body */]));
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w['FormData'] || noop;
var Blob = w['Blob'] || noop;
var ArrayBuffer = w['ArrayBuffer'] || noop;
//# sourceMappingURL=static_request.js.map

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(674);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_index__["c"]; });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */

//# sourceMappingURL=index.js.map

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(624);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapWrapper; });
/* unused harmony export StringMapWrapper */
/* unused harmony export ListWrapper */
/* unused harmony export isListLikeIterable */
/* unused harmony export areIterablesEqual */
/* unused harmony export iterateListLike */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap = (function () {
    try {
        if ((new Map()).values().next) {
            return function createArrayFromMap(m, getValues) {
                return getValues ? Array.from(m.values()) : Array.from(m.keys());
            };
        }
    }
    catch (e) {
    }
    return function createArrayFromMapWithForeach(m, getValues) {
        var res = new Array(m.size), i = 0;
        m.forEach(function (v, k) {
            res[i] = getValues ? v : k;
            i++;
        });
        return res;
    };
})();
var MapWrapper = (function () {
    function MapWrapper() {
    }
    MapWrapper.createFromStringMap = function (stringMap) {
        var result = new Map();
        for (var prop in stringMap) {
            result.set(prop, stringMap[prop]);
        }
        return result;
    };
    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
    return MapWrapper;
}());
/**
 * Wraps Javascript Objects
 */
var StringMapWrapper = (function () {
    function StringMapWrapper() {
    }
    StringMapWrapper.merge = function (m1, m2) {
        var m = {};
        for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
            var k = _a[_i];
            m[k] = m1[k];
        }
        for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
            var k = _c[_b];
            m[k] = m2[k];
        }
        return m;
    };
    StringMapWrapper.equals = function (m1, m2) {
        var k1 = Object.keys(m1);
        var k2 = Object.keys(m2);
        if (k1.length != k2.length) {
            return false;
        }
        for (var i = 0; i < k1.length; i++) {
            var key = k1[i];
            if (m1[key] !== m2[key]) {
                return false;
            }
        }
        return true;
    };
    return StringMapWrapper;
}());
var ListWrapper = (function () {
    function ListWrapper() {
    }
    // JS has no way to express a statically fixed size list, but dart does so we
    // keep both methods.
    ListWrapper.createFixedSize = function (size) { return new Array(size); };
    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
    ListWrapper.clone = function (array) { return array.slice(0); };
    ListWrapper.forEachWithIndex = function (array, fn) {
        for (var i = 0; i < array.length; i++) {
            fn(array[i], i);
        }
    };
    ListWrapper.first = function (array) {
        if (!array)
            return null;
        return array[0];
    };
    ListWrapper.last = function (array) {
        if (!array || array.length == 0)
            return null;
        return array[array.length - 1];
    };
    ListWrapper.indexOf = function (array, value, startIndex) {
        if (startIndex === void 0) { startIndex = 0; }
        return array.indexOf(value, startIndex);
    };
    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
    ListWrapper.reversed = function (array) {
        var a = ListWrapper.clone(array);
        return a.reverse();
    };
    ListWrapper.concat = function (a, b) { return a.concat(b); };
    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
    ListWrapper.removeAt = function (list, index) {
        var res = list[index];
        list.splice(index, 1);
        return res;
    };
    ListWrapper.removeAll = function (list, items) {
        for (var i = 0; i < items.length; ++i) {
            var index = list.indexOf(items[i]);
            list.splice(index, 1);
        }
    };
    ListWrapper.remove = function (list, el) {
        var index = list.indexOf(el);
        if (index > -1) {
            list.splice(index, 1);
            return true;
        }
        return false;
    };
    ListWrapper.clear = function (list) { list.length = 0; };
    ListWrapper.isEmpty = function (list) { return list.length == 0; };
    ListWrapper.fill = function (list, value, start, end) {
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = null; }
        list.fill(value, start, end === null ? list.length : end);
    };
    ListWrapper.equals = function (a, b) {
        if (a.length != b.length)
            return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i])
                return false;
        }
        return true;
    };
    ListWrapper.slice = function (l, from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = null; }
        return l.slice(from, to === null ? undefined : to);
    };
    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
    ListWrapper.sort = function (l, compareFn) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["a" /* isPresent */])(compareFn)) {
            l.sort(compareFn);
        }
        else {
            l.sort();
        }
    };
    ListWrapper.toString = function (l) { return l.toString(); };
    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
    ListWrapper.maximum = function (list, predicate) {
        if (list.length == 0) {
            return null;
        }
        var solution = null;
        var maxValue = -Infinity;
        for (var index = 0; index < list.length; index++) {
            var candidate = list[index];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["b" /* isBlank */])(candidate)) {
                continue;
            }
            var candidateValue = predicate(candidate);
            if (candidateValue > maxValue) {
                solution = candidate;
                maxValue = candidateValue;
            }
        }
        return solution;
    };
    ListWrapper.flatten = function (list) {
        var target = [];
        _flattenArray(list, target);
        return target;
    };
    ListWrapper.addAll = function (list, source) {
        for (var i = 0; i < source.length; i++) {
            list.push(source[i]);
        }
    };
    return ListWrapper;
}());
function _flattenArray(source, target) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["a" /* isPresent */])(source)) {
        for (var i = 0; i < source.length; i++) {
            var item = source[i];
            if (Array.isArray(item)) {
                _flattenArray(item, target);
            }
            else {
                target.push(item);
            }
        }
    }
    return target;
}
function isListLikeIterable(obj) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["c" /* isJsObject */])(obj))
        return false;
    return Array.isArray(obj) ||
        (!(obj instanceof Map) &&
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])() in obj); // JS Iterable have a Symbol.iterator prop
}
function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])()]();
    var iterator2 = b[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])()]();
    while (true) {
        var item1 = iterator1.next();
        var item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var iterator = obj[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["d" /* getSymbolIterator */])()]();
        var item = void 0;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
//# sourceMappingURL=collection.js.map

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_request_options__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_response_options__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__interfaces__ = __webpack_require__(632);
/* unused harmony export _createDefaultCookieXSRFStrategy */
/* unused harmony export httpFactory */
/* unused harmony export jsonpFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpModule; });
/* unused harmony export JsonpModule */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









function _createDefaultCookieXSRFStrategy() {
    return new __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["a" /* CookieXSRFStrategy */]();
}
function httpFactory(xhrBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */](xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */](jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["a" /* Http */], useFactory: httpFactory, deps: [__WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_2__backends_browser_xhr__["a" /* BrowserXhr */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* BaseResponseOptions */] },
                        __WEBPACK_IMPORTED_MODULE_4__backends_xhr_backend__["b" /* XHRBackend */],
                        { provide: __WEBPACK_IMPORTED_MODULE_8__interfaces__["b" /* XSRFStrategy */], useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] },
    ];
    /** @nocollapse */
    HttpModule.ctorParameters = [];
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: __WEBPACK_IMPORTED_MODULE_7__http__["b" /* Jsonp */], useFactory: jsonpFactory, deps: [__WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */]] },
                        __WEBPACK_IMPORTED_MODULE_1__backends_browser_jsonp__["a" /* BrowserJsonp */],
                        { provide: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["a" /* RequestOptions */], useClass: __WEBPACK_IMPORTED_MODULE_5__base_request_options__["b" /* BaseRequestOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["a" /* ResponseOptions */], useClass: __WEBPACK_IMPORTED_MODULE_6__base_response_options__["b" /* BaseResponseOptions */] },
                        { provide: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["a" /* JSONPBackend */], useClass: __WEBPACK_IMPORTED_MODULE_3__backends_jsonp_backend__["b" /* JSONPBackend_ */] },
                    ],
                },] },
    ];
    /** @nocollapse */
    JsonpModule.ctorParameters = [];
    return JsonpModule;
}());
//# sourceMappingURL=http_module.js.map

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__backends_browser_xhr__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backends_jsonp_backend__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backends_xhr_backend__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_request_options__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_response_options__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__headers__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__http_module__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__interfaces__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__static_request__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__static_response__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__url_search_params__ = __webpack_require__(637);
/* unused harmony reexport BrowserXhr */
/* unused harmony reexport JSONPBackend */
/* unused harmony reexport JSONPConnection */
/* unused harmony reexport CookieXSRFStrategy */
/* unused harmony reexport XHRBackend */
/* unused harmony reexport XHRConnection */
/* unused harmony reexport BaseRequestOptions */
/* unused harmony reexport RequestOptions */
/* unused harmony reexport BaseResponseOptions */
/* unused harmony reexport ResponseOptions */
/* unused harmony reexport ReadyState */
/* unused harmony reexport RequestMethod */
/* unused harmony reexport ResponseContentType */
/* unused harmony reexport ResponseType */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__headers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__http__["a"]; });
/* unused harmony reexport Jsonp */
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__http_module__["a"]; });
/* unused harmony reexport JsonpModule */
/* unused harmony reexport Connection */
/* unused harmony reexport ConnectionBackend */
/* unused harmony reexport XSRFStrategy */
/* unused harmony reexport Request */
/* unused harmony reexport Response */
/* unused harmony reexport QueryEncoder */
/* unused harmony reexport URLSearchParams */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */













//# sourceMappingURL=index.js.map

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Observable_1 = __webpack_require__(15);
var map_1 = __webpack_require__(82);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    function BookStoreService(http) {
        this.http = http;
        this.api = 'https://book-monkey2-api.angular-buch.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get(this.api + "/books")
            .map(function (response) { return response.json(); });
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn)
            .map(function (response) { return response.json(); });
    };
    BookStoreService.prototype.check = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn + "/check")
            .map(function (response) { return response.json(); });
    };
    BookStoreService.prototype.create = function (book) {
        return this.http
            .post(this.api + "/book", JSON.stringify(book), { headers: this.headers });
    };
    BookStoreService.prototype.update = function (book) {
        return this.http
            .put(this.api + "/book/" + book.isbn, JSON.stringify(book), { headers: this.headers });
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http
            .delete(this.api + "/book/" + isbn);
    };
    BookStoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], BookStoreService);
    return BookStoreService;
    var _a;
}());


/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__ = __webpack_require__(684);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BookValidatorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookValidatorsService = (function () {
    function BookValidatorsService(bs) {
        this.bs = bs;
    }
    BookValidatorsService.prototype.isbnFormat = function (control) {
        var isolatedNumbers = control.value.replace(/[-]/g, '');
        var isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
        return isbnPattern.test(isolatedNumbers) ? null : {
            isbnFormat: { valid: false }
        };
    };
    BookValidatorsService.prototype.isbnExists = function (control) {
        return this.bs.check(control.value)
            .map(function (exists) { return (exists === false) ? null : {
            isbnExists: { valid: false }
        }; });
    };
    BookValidatorsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], BookValidatorsService);
    return BookValidatorsService;
    var _a;
}());


/***/ },

/***/ 753:
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
            template: __webpack_require__(869)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());


/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CanNavigateToAdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanNavigateToAdminGuard = (function () {
    function CanNavigateToAdminGuard() {
        this.accessGranted = false;
    }
    CanNavigateToAdminGuard.prototype.canActivate = function () {
        if (!this.accessGranted) {
            this.accessGranted = window.confirm('Mit großer Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich betreten?');
        }
        return this.accessGranted;
    };
    CanNavigateToAdminGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CanNavigateToAdminGuard);
    return CanNavigateToAdminGuard;
}());


/***/ },

/***/ 757:
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
            template: "\n  <div class=\"ui container\">\n    <h1>Home</h1>\n    <p>Das ist der BookMonkey.</p>\n    <a routerLink=\"../books\" class=\"ui red button\">\n      Buchliste ansehen\n      <i class=\"right arrow icon\"></i>\n    </a>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());


/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__can_navigate_to_admin_guard__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(821);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], children: __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* routes */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__can_navigate_to_admin_guard__["a" /* CanNavigateToAdminGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());


/***/ },

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__can_navigate_to_admin_guard__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(757);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/* unused harmony export AppRoutingModule */
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
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'book',
        loadChildren: 'app/book-monkey/iteration-6/modules/book/book.module#BookModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/book-monkey/iteration-6/modules/admin/admin.module#AdminModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__can_navigate_to_admin_guard__["a" /* CanNavigateToAdminGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_0__can_navigate_to_admin_guard__["a" /* CanNavigateToAdminGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());


/***/ },

/***/ 869:
/***/ function(module, exports) {

module.exports = "<div class=\"ui three item tabs menu\">\n  <a routerLink=\"home\"  routerLinkActive=\"active\" class=\"item\">Home</a>\n  <a routerLink=\"book/books\" routerLinkActive=\"active\" class=\"item\">Bücher</a>\n  <a routerLink=\"admin/admin\" routerLinkActive=\"active\" class=\"item\">Administration</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }

});
//# sourceMappingURL=8.map