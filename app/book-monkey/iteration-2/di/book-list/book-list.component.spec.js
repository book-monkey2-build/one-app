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
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var book_list_component_1 = require('./book-list.component');
var book_store_service_1 = require('../shared/book-store.service');
describe('[iteration-2/di] Component: BookList', function () {
    var builder;
    beforeEach(function () {
        testing_1.addProviders([book_store_service_1.BookStoreService, book_list_component_1.BookListComponent]);
    });
    beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    it('should inject the component', testing_1.inject([book_list_component_1.BookListComponent], function (component) {
        expect(component).toBeTruthy();
    }));
    it('should create the component', testing_1.inject([], function () {
        return builder.createAsync(BookListComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(book_list_component_1.BookListComponent));
            expect(query).toBeTruthy();
            expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var BookListComponentTestController = (function () {
    function BookListComponentTestController() {
    }
    BookListComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <book-list></book-list>\n  ",
            directives: [book_list_component_1.BookListComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BookListComponentTestController);
    return BookListComponentTestController;
}());
//# sourceMappingURL=book-list.component.spec.js.map