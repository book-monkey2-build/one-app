System.register(['angular2/core', 'angular2/common', '../validators/date.validator', '../validators/isbn.validator', '../services/books/book-store.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, date_validator_1, isbn_validator_1, book_store_service_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (date_validator_1_1) {
                date_validator_1 = date_validator_1_1;
            },
            function (isbn_validator_1_1) {
                isbn_validator_1 = isbn_validator_1_1;
            },
            function (book_store_service_1_1) {
                book_store_service_1 = book_store_service_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(fb, bs) {
                    this.fb = fb;
                    this.bs = bs;
                    this.myForm = fb.group({
                        title: ['', common_1.Validators.required],
                        published: ['', date_validator_1.DateValidator.germanDate],
                        subtitle: [''],
                        description: [''],
                        authors: fb.array([
                            fb.control('', common_1.Validators.required)
                        ]),
                        thumbnails: fb.array([
                            fb.group({
                                url: ['', common_1.Validators.required],
                                title: ['']
                            })
                        ]),
                        isbn: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                isbn_validator_1.IsbnValidator.isbn
                            ])]
                    });
                    // this allows us to manipulate the form at runtime
                    this.authorsControlArray = this.myForm.controls['authors'];
                    this.thumbnailsControlArray = this.myForm.controls['thumbnails'];
                }
                FormComponent.prototype.addAuthorControl = function () {
                    this.authorsControlArray.push(this.fb.control(''));
                };
                FormComponent.prototype.addThumbnailControl = function () {
                    this.thumbnailsControlArray.push(this.fb.group({ url: [''], title: [''] }));
                };
                FormComponent.prototype.submitForm = function (formData) {
                    this.bs.create(formData.value).subscribe(function (res) { return res; });
                };
                FormComponent = __decorate([
                    core_1.Component({
                        selector: 'it3-book-form',
                        templateUrl: 'app/book-monkey/iteration-4/http/form/form.component.html',
                        providers: [book_store_service_1.BookStoreService]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, book_store_service_1.BookStoreService])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map