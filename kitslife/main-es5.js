(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n\n    <app-menu-navigation></app-menu-navigation>\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>        \n        \n         \n       \n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list-post-view/list-post-view.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list-post-view/list-post-view.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n \n    \n  <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1>Posts</h1>\n            <ul class=\"list-group\">\n                <app-post-list *ngFor=\"let post of posts ; let i = index\"\n                             [id]=\"post.id\"\n                             [title]=\"post.title\"\n                             [content]=\"post.content\"\n                             [loveIts]=\"post.loveIts\"\n                             [numberLoveIt]=\"post.numberLoveIt\"\n                             [numberdontLoveIt]=\"post.numberdontLoveIt\"\n                             [created_at]=\"post.created_at\"\n                             [index]=\"i\">\n                </app-post-list>\n\n\n            </ul>\n        </div> \n    </div>\n    \n    <div class=\"row\">\n             <div class=\"col-xs-4\">                 \n             </div>\n             \n            <div class=\"col-xs-4\">\n                <button class=\"btn btn-sm btn-primary\" (click)=\"fillPostsData()\"><i class=\"fa fa-refresh\"></i> Get Posts On Server  </button>\n            </div>\n             \n            <div class=\"col-xs-4\"> \n            </div>\n       \n    </div>\n        \n        <hr>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menu-navigation/menu-navigation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menu-navigation/menu-navigation.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n            <li routerLinkActive=\"active\"><a routerLink=\"list-post-view\">Posts</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"new-post\">Nouveau post</a></li>\n        </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-post/new-post.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-post/new-post.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-8 col-sm-offset-2\">\n      \n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" >\n        \n      <div class=\"form-group\">\n        <label for=\"titre\">\n          Titre\n        </label>\n        <input type=\"text\" id=\"title\" class=\"form-control\"  name=\"title\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"contenu\">\n          Contenu\n        </label>\n        <textarea id=\"content\" class=\"form-control\" name=\"content\" ngModel required>\n          \n        </textarea>\n      </div>\n        <button class=\"btn btn-success\" [disabled]=\"f.invalid\" type=\"submit\"><span class=\"fa fa-save\"></span> Enregistrer</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/post-list/post-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/post-list/post-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngIf=\"id>=0\" [ngClass]=\"{'list-group-item': true,'list-group-item-success':[loveIts]>0, 'list-group-item-danger': [loveIts]<0}\">\n    <p style=\"text-align: right\"> {{created_at | date:\"dd/mm/yyy , hh:mm:ss\"}}</p>\n    <h2> {{title}} </h2>\n    <p> {{content}} </p>\n    \n    <div class=\"row\">\n        \n        <div class=\"col-xs-2\">\n            <button class=\"btn btn-sm btn-success\" (click)=\"loveIt()\"><i class=\"fa fa-thumbs-o-up\"></i> Love it ({{numberLoveIt}}) </button>\n        </div>\n        \n        <div class=\"col-xs-2\">\n         <button class=\"btn btn-sm btn-danger\" (click)=\"dontLoveIt()\"><i class=\"fa fa-thumbs-o-down\"></i> Don't love it ({{numberdontLoveIt}})</button>\n        </div>\n        \n        <div class=\"col-xs-6\">           \n        </div>\n        \n        <div class=\"col-xs-2\">\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deletePost()\"><i class=\"fa  fa-trash-o\"></i> Supprimer post </button>\n        </div>\n        \n    </div>\n    \n</li>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(postService) {
        this.postService = postService;
    }
    AppComponent.ctorParameters = function () { return [
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/post-list/post-list.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-post/new-post.component */ "./src/app/new-post/new-post.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _menu_navigation_menu_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-navigation/menu-navigation.component */ "./src/app/menu-navigation/menu-navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_post_view_list_post_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-post-view/list-post-view.component */ "./src/app/list-post-view/list-post-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












//import { Subject } from 'rxjs/Subject';
//import { Injectable } from '@angular/core';

var appRoutes = [
    { path: 'list-post-view', component: _list_post_view_list_post_view_component__WEBPACK_IMPORTED_MODULE_11__["ListPostViewComponent"] },
    { path: 'new-post', component: _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_6__["NewPostComponent"] },
    { path: '', component: _list_post_view_list_post_view_component__WEBPACK_IMPORTED_MODULE_11__["ListPostViewComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__["PostListComponent"],
                _new_post_new_post_component__WEBPACK_IMPORTED_MODULE_6__["NewPostComponent"],
                _menu_navigation_menu_navigation_component__WEBPACK_IMPORTED_MODULE_9__["MenuNavigationComponent"],
                _list_post_view_list_post_view_component__WEBPACK_IMPORTED_MODULE_11__["ListPostViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes),
                //ReactiveFormsModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_8__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/list-post-view/list-post-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/list-post-view/list-post-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcG9zdC12aWV3L2xpc3QtcG9zdC12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list-post-view/list-post-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/list-post-view/list-post-view.component.ts ***!
  \************************************************************/
/*! exports provided: ListPostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPostViewComponent", function() { return ListPostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");



var ListPostViewComponent = /** @class */ (function () {
    function ListPostViewComponent(postService) {
        this.postService = postService;
    }
    ListPostViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPostsFromServer();
        this.postsSubscription = this.postService.postsSubject.subscribe(function (posts) {
            _this.posts = posts;
        });
        //this.postService.emitPostsSubject();
    };
    ListPostViewComponent.prototype.fillPostsData = function () {
        this.postService.getPostsFromServer();
    };
    ListPostViewComponent.prototype.ngOnDestroy = function () {
        this.postsSubscription.unsubscribe();
    };
    ListPostViewComponent.ctorParameters = function () { return [
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
    ]; };
    ListPostViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-post-view',
            template: __webpack_require__(/*! raw-loader!./list-post-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/list-post-view/list-post-view.component.html"),
            styles: [__webpack_require__(/*! ./list-post-view.component.css */ "./src/app/list-post-view/list-post-view.component.css")]
        })
    ], ListPostViewComponent);
    return ListPostViewComponent;
}());



/***/ }),

/***/ "./src/app/menu-navigation/menu-navigation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/menu-navigation/menu-navigation.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbmF2aWdhdGlvbi9tZW51LW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/menu-navigation/menu-navigation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/menu-navigation/menu-navigation.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuNavigationComponent", function() { return MenuNavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuNavigationComponent = /** @class */ (function () {
    function MenuNavigationComponent() {
    }
    MenuNavigationComponent.prototype.ngOnInit = function () {
    };
    MenuNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-navigation',
            template: __webpack_require__(/*! raw-loader!./menu-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/menu-navigation/menu-navigation.component.html"),
            styles: [__webpack_require__(/*! ./menu-navigation.component.css */ "./src/app/menu-navigation/menu-navigation.component.css")]
        })
    ], MenuNavigationComponent);
    return MenuNavigationComponent;
}());



/***/ }),

/***/ "./src/app/new-post/new-post.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-post/new-post.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1wb3N0L25ldy1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/new-post/new-post.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-post/new-post.component.ts ***!
  \************************************************/
/*! exports provided: NewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostComponent", function() { return NewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewPostComponent = /** @class */ (function () {
    function NewPostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    NewPostComponent.prototype.ngOnInit = function () {
    };
    NewPostComponent.prototype.onSubmit = function (form) {
        var id = 0;
        var title = form.value['title'];
        var content = form.value['content'];
        var loveIts = 0;
        var numberLoveIt = 0;
        var numberdontLoveIt = 0;
        var created_at = new Date();
        this.postService.addPost(id, title, content, loveIts, numberLoveIt, numberdontLoveIt, created_at);
        this.postService.savePostsToServer();
        //this.router.navigate(['/list-post-view']);
    };
    NewPostComponent.ctorParameters = function () { return [
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NewPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-post',
            template: __webpack_require__(/*! raw-loader!./new-post.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-post/new-post.component.html"),
            styles: [__webpack_require__(/*! ./new-post.component.css */ "./src/app/new-post/new-post.component.css")]
        })
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/post-list/post-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-list/post-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/post-list/post-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-list/post-list.component.ts ***!
  \**************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postService) {
        this.postService = postService;
        this.created_at = Date();
    }
    PostListComponent.prototype.ngOnInit = function () {
    };
    PostListComponent.prototype.loveIt = function () {
        this.loveIts = this.loveIts + 1;
        this.numberLoveIt = this.numberLoveIt + 1;
        this.postService.updateUpLoveIts(this.id);
        this.postService.updateUpNumberLoveIts(this.id);
        this.postService.savePostsToServer();
    };
    PostListComponent.prototype.dontLoveIt = function () {
        this.loveIts = this.loveIts - 1;
        this.numberdontLoveIt = this.numberdontLoveIt + 1;
        this.postService.updateDownLoveIts(this.id);
        this.postService.updateUpNumberDontLoveIts(this.id);
        this.postService.savePostsToServer();
    };
    PostListComponent.prototype.deletePost = function () {
        if (confirm('Supprimer ? (Delete ?)')) {
            this.postService.deletePost(this.index);
            this.postService.savePostsToServer();
            console.log(this.id);
        }
        else {
            console.log(this.id);
            return null;
        }
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "loveIts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "created_at", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "numberLoveIt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "numberdontLoveIt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PostListComponent.prototype, "index", void 0);
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-list',
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/post-list/post-list.component.css")]
        })
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PostService = /** @class */ (function () {
    function PostService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.postsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.posts = [
        /*{
            id:-1,
            title: 'title_model',
            content: 'content_model',
            loveIts: 0,
            numberLoveIt: 0,
            numberdontLoveIt: 0,
            created_at: new Date()

        }/*,
        
        {
            id:0,
            title: 'Titre 1',
            content: 'Contenu 1',
            loveIts: 0,
            numberLoveIt: 0,
            numberdontLoveIt: 0,
            created_at: new Date()

        },
        {
            id:1,
            title: 'Titre 2',
            content: 'Contenu 2',
            loveIts: 0,
            numberLoveIt: 0,
            numberdontLoveIt: 0,
            created_at: new Date()

        },
        {
            id:3,
            title: 'Titre 3',
            content: 'Contenu 3',
            loveIts: 0,
            numberLoveIt: 0,
            numberdontLoveIt: 0,
            created_at: new Date()

        }*/
        ];
    }
    PostService.prototype.emitPostsSubject = function () {
        if (this.posts != null) {
            this.postsSubject.next(this.posts.slice());
        }
    };
    PostService.prototype.getPostById = function (id) {
        var post = this.posts.find(function (s) {
            return s.id === id;
        });
        return post;
    };
    PostService.prototype.savePostsToServer = function () {
        var _this = this;
        this.httpClient
            .put('https://pascalabena-12ca3.firebaseio.com/posts.json', this.posts)
            .subscribe(function () {
            console.log('Enregistrement terminé !');
            _this.emitPostsSubject();
            _this.router.navigate(['/list-post-view']);
        }, function (error) {
            console.log('Erreur ! : ' + error);
            _this.emitPostsSubject();
        });
    };
    PostService.prototype.getPostsFromServer = function () {
        var _this = this;
        this.httpClient
            .get('https://pascalabena-12ca3.firebaseio.com/posts.json')
            .subscribe(function (response) {
            _this.posts = response;
            _this.emitPostsSubject();
            console.log(response);
        }, function (error) {
            console.log('Erreur ! : ' + error);
        });
    };
    PostService.prototype.addPost = function (id, title, content, loveIts, numberLoveIt, numberdontLoveIt, created_at) {
        var postObject = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            numberLoveIt: 0,
            numberdontLoveIt: 0,
            created_at: new Date(),
        };
        if (this.posts != null) {
            id = this.posts.length + 1;
            postObject.id = id;
            postObject.title = title;
            postObject.content = content;
            postObject.loveIts = loveIts;
            postObject.numberLoveIt = numberLoveIt;
            postObject.numberdontLoveIt = numberdontLoveIt;
            postObject.created_at = created_at;
            this.posts.push(postObject);
        }
        else {
            id = 0;
            postObject.id = id;
            postObject.title = title;
            postObject.content = content;
            postObject.loveIts = loveIts;
            postObject.numberLoveIt = numberLoveIt;
            postObject.numberdontLoveIt = numberdontLoveIt;
            postObject.created_at = created_at;
            this.posts = new Array(postObject);
        }
        this.emitPostsSubject();
    };
    PostService.prototype.updateUpLoveIts = function (id) {
        this.getPostById(+id).loveIts = this.getPostById(+id).loveIts + 1;
        console.log(" >>> Love It Service : " + this.getPostById(+id).loveIts);
        this.emitPostsSubject();
    };
    PostService.prototype.updateDownLoveIts = function (id) {
        this.getPostById(+id).loveIts = this.getPostById(+id).loveIts - 1;
        console.log(" >>> Love It Service : " + this.getPostById(+id).loveIts);
        this.emitPostsSubject();
    };
    PostService.prototype.updateUpNumberLoveIts = function (id) {
        this.getPostById(+id).numberLoveIt = this.getPostById(+id).numberLoveIt + 1;
        console.log(" >>> Number Love It Service : " + this.getPostById(+id).numberLoveIt);
        this.emitPostsSubject();
    };
    PostService.prototype.updateUpNumberDontLoveIts = function (id) {
        this.getPostById(+id).numberdontLoveIt = this.getPostById(+id).numberdontLoveIt + 1;
        console.log(" >>> Number Dont Love It Service : " + this.getPostById(+id).numberdontLoveIt);
        this.emitPostsSubject();
    };
    PostService.prototype.deletePost = function (i) {
        if (this.posts != null) {
            this.posts.splice(i, 1);
        }
        this.emitPostsSubject();
    };
    PostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NB\Desktop\kitslife\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map