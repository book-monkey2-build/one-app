"use strict";
var book_list_component_1 = require('./book-list.component');
var book_store_service_1 = require('../shared/book-store.service');
xdescribe('Component: BookList', function () {
    // this fails because ngOnInit() is never executed
    it('should contain two example books', function () {
        var component = new book_list_component_1.BookListComponent(new book_store_service_1.BookStoreService());
        expect(component.books.length).toEqual(2);
    });
});
//# sourceMappingURL=book-list.component.FAILING.spec.js.map