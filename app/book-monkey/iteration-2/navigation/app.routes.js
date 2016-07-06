"use strict";
var index_1 = require('./home/index');
var index_2 = require('./book-list/index');
var index_3 = require('./book-details/index');
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: index_1.HomeComponent
    },
    {
        path: 'books',
        component: index_2.BookListComponent
    },
    {
        path: 'books/:isbn',
        component: index_3.BookDetailsComponent
    }
];
//# sourceMappingURL=app.routes.js.map