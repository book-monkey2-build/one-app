"use strict";
var testing_1 = require('angular2/testing');
var book_list_component_1 = require('./book-list.component');
testing_1.describe('Book List', function () {
    var bookList;
    testing_1.beforeEach(function () {
        bookList = new book_list_component_1.BookListComponent();
    });
    testing_1.it('should contain two example books', function () {
        testing_1.expect(bookList.books.lenght).toEqual(2);
    });
});
//# sourceMappingURL=book-list.component.spec.js.map