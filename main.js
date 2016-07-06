"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var _1 = require('./app/');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    router_1.provideRouter(_1.AppRoutes)
]);
//# sourceMappingURL=main.js.map