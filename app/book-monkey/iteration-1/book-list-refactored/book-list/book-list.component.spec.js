"use strict";
var book_list_component_1 = require('./book-list.component');
// very basic unit test, which is testing the class only
// @Decorators are not evaluated, Live Cycle does not happen!
describe('[iteration-1/book-list-refactored] Component: BookList', function () {
    var bookList;
    beforeEach(function () {
        bookList = new book_list_component_1.BookListComponent();
    });
    // creating an instance is easy, since we have no dependencies for now
    it('should create an instance', function () {
        expect(bookList).toBeTruthy();
    });
    // this won't work, ngOnInit() is never called!
    xit('should contain two example books', function () {
        expect(bookList.books.length).toEqual(2);
    });
});
//# sourceMappingURL=book-list.component.spec.js.map