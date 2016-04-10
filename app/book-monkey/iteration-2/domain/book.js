System.register(['./thumbnail'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Book;
    return {
        setters:[
            function (thumbnail_1_1) {
                exports_1({
                    "Thumbnail": thumbnail_1_1["Thumbnail"]
                });
            }],
        execute: function() {
            Book = (function () {
                function Book(isbn, title, authors) {
                    this.isbn = isbn;
                    this.title = title;
                    this.authors = authors;
                }
                return Book;
            }());
            exports_1("Book", Book);
        }
    }
});
//# sourceMappingURL=book.js.map