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
var router_1 = require('angular2/router');
var home_1 = require('./home/home');
var iteration_1_component_1 = require('./book-monkey/iteration-1/iteration-1.component');
var iteration_2_component_1 = require('./book-monkey/iteration-2/iteration-2.component');
var iteration_3_component_1 = require('./book-monkey/iteration-3/iteration-3.component');
var iteration_4_component_1 = require('./book-monkey/iteration-4/iteration-4.component');
var iteration_5_component_1 = require('./book-monkey/iteration-5/iteration-5.component');
var active_class_directive_1 = require('./directives/active-class/active-class.directive');
var SamplesApp = (function () {
    function SamplesApp() {
    }
    SamplesApp = __decorate([
        core_1.Component({
            selector: 'samples-app',
            templateUrl: 'app/samples.html',
            directives: [router_1.ROUTER_DIRECTIVES, active_class_directive_1.ActiveClassDirective]
        }),
        router_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: home_1.Home,
                useAsDefault: true
            },
            {
                path: 'iteration-1/...',
                name: 'Iteration-1',
                component: iteration_1_component_1.IterationOneComponent
            },
            {
                path: 'iteration-2/...',
                name: 'Iteration-2',
                component: iteration_2_component_1.IterationTwoComponent
            },
            {
                path: 'iteration-3/...',
                name: 'Iteration-3',
                component: iteration_3_component_1.IterationThreeComponent
            },
            {
                path: 'iteration-4/...',
                name: 'Iteration-4',
                component: iteration_4_component_1.IterationFourComponent
            },
            {
                path: 'iteration-5/...',
                name: 'Iteration-5',
                component: iteration_5_component_1.IterationFiveComponent
            }]), 
        __metadata('design:paramtypes', [])
    ], SamplesApp);
    return SamplesApp;
}());
exports.SamplesApp = SamplesApp;
//# sourceMappingURL=samples.js.map