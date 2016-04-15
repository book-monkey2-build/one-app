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
var common_1 = require('angular2/common');
var FormComponent = (function () {
    function FormComponent(fb) {
        this.fb = fb;
        this.myForm = fb.group({
            title: [''],
            subtitle: [''],
            isbn: [''],
            description: [''],
            authors: fb.array(['']),
            thumbnails: fb.array([
                fb.group({ url: [''], title: [''] })
            ]),
            rating: [''],
            published: ['']
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
        console.log('submitting values:', formData.value);
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'book-form',
            templateUrl: 'app/book-monkey/iteration-3/forms/form/form.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map