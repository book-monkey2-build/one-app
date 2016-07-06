"use strict";
var home_component_1 = require('./home/home.component');
var iteration_1_component_1 = require('./book-monkey/iteration-1/iteration-1.component');
var index_1 = require('./book-monkey/iteration-1/book-details/index');
var index_2 = require('./book-monkey/iteration-1/book-list/index');
var index_3 = require('./book-monkey/iteration-1/book-list-refactored/index');
var iteration_2_component_1 = require('./book-monkey/iteration-2/iteration-2.component');
var index_4 = require('./book-monkey/iteration-2/di/index');
var index_5 = require('./book-monkey/iteration-2/navigation/index');
var iteration_3_component_1 = require('./book-monkey/iteration-3/iteration-3.component');
var index_6 = require('./book-monkey/iteration-3/forms/index');
var index_7 = require('./book-monkey/iteration-3/validation/index');
var iteration_4_component_1 = require('./book-monkey/iteration-4/iteration-4.component');
var index_8 = require('./book-monkey/iteration-4/http/index');
var iteration_5_component_1 = require('./book-monkey/iteration-5/iteration-5.component');
var index_9 = require('./book-monkey/iteration-5/pipes/index');
var index_10 = require('./book-monkey/iteration-5/directives/index');
exports.AppRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'iteration-1',
        component: iteration_1_component_1.IterationOneComponent,
        children: [
            {
                path: '',
                redirectTo: 'book-list'
            },
            {
                path: 'book-list',
                component: index_2.AppComponent,
            },
            {
                path: 'book-list-refactored',
                component: index_3.AppComponent
            },
            {
                path: 'book-details',
                component: index_1.AppComponent
            }
        ]
    },
    {
        path: 'iteration-2',
        component: iteration_2_component_1.IterationTwoComponent,
        children: [
            {
                path: '',
                redirectTo: 'dependency-injection'
            },
            {
                path: 'dependency-injection',
                component: index_4.AppComponent,
            },
            {
                path: 'navigation',
                component: index_5.AppComponent,
                children: index_5.AppRoutes.slice()
            }
        ]
    },
    {
        path: 'iteration-3',
        component: iteration_3_component_1.IterationThreeComponent,
        children: [
            {
                path: '',
                redirectTo: 'form'
            },
            {
                path: 'form',
                component: index_6.AppComponent,
                children: index_6.AppRoutes.slice(),
            },
            {
                path: 'validation',
                component: index_7.AppComponent,
                children: index_7.AppRoutes.slice()
            }
        ]
    },
    {
        path: 'iteration-4',
        component: iteration_4_component_1.IterationFourComponent,
        children: [
            {
                path: '',
                redirectTo: 'http'
            },
            {
                path: 'http',
                component: index_8.AppComponent,
                children: index_8.AppRoutes.slice(),
            }
        ]
    },
    {
        path: 'iteration-5',
        component: iteration_5_component_1.IterationFiveComponent,
        children: [
            {
                path: '',
                redirectTo: 'pipes'
            },
            {
                path: 'pipes',
                component: index_9.AppComponent,
                children: index_9.AppRoutes.slice(),
            },
            {
                path: 'directives',
                component: index_10.AppComponent,
                children: index_10.AppRoutes.slice()
            }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map