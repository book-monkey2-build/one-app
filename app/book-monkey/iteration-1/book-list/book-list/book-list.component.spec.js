System.register(['angular2/testing', './book-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, book_list_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (book_list_component_1_1) {
                book_list_component_1 = book_list_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Book List', function () {
                var bookList;
                testing_1.beforeEach(function () {
                    bookList = new book_list_component_1.BookListComponent();
                });
                testing_1.it('should contain two example books', function () {
                    testing_1.expect(bookList.books.length).toEqual(2);
                });
            });
        }
    }
});
//# sourceMappingURL=book-list.component.spec.js.map