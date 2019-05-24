(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tvshows/tvshows.component */ "./src/app/tvshows/tvshows.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");






var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'tvshows', component: _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_4__["TvshowsComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<ngx-ui-loader></ngx-ui-loader>\n\n<div class=\"container-fluid\">\n<br/>\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">{{ title }}</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n\n      <li [routerLinkActive]=\"['active']\">\n        <a routerLink=\"/dashboard\" >{{showType[0]}}</a>\n        </li>\n\n      <li [routerLinkActive]=\"['active']\">\n        <a routerLink=\"/tvshows\">{{showType[1]}}</a>\n      </li>\n\n      <li [routerLinkActive]=\"['active']\">\n        <a routerLink=\"/people\">{{showType[2]}}</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n\n<!-- dashboard component bind -->\n<br/>\n<br/>\n\n<router-outlet></router-outlet>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Movie Dashboard';
        this.showType = ['Movies', 'TV Shows', 'People'];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _movie_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-filter.pipe */ "./src/app/movie-filter.pipe.ts");
/* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
/* harmony import */ var _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tvshows/tvshows.component */ "./src/app/tvshows/tvshows.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _movie_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["MovieFilterPipe"],
                _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_11__["MovieDetailComponent"],
                _tvshows_tvshows_component__WEBPACK_IMPORTED_MODULE_12__["TvshowsComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_13__["PeopleComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ngx_ui_loader__WEBPACK_IMPORTED_MODULE_14__["NgxUiLoaderModule"],
                ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_15__["TypeaheadModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_17__["PaginationModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cursor-feature{\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJzb3ItZmVhdHVyZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">  \n    <div class=\"col-lg-12\">            \n      <input id=\"title\" class=\"form-control\" name=\"title\"\n            placeholder=\"Search movie here\"\n            [(ngModel)]=\"searchTerm\"\n            [typeahead]=\"titles\"\n            [typeaheadOptionsLimit]=\"10\">\n  </div>\n    \n    <br/>\n      <!-- <div class=\"col-lg-12\">                \n          <input class=\"form-control form-control-lg form-control-borderless\" type=\"search\" placeholder=\"Search movie here\" [(ngModel)]=\"searchTerm\">\n      </div>-->\n\n    </div>\n\n<hr/>\n\n<div class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let movie of moviesList | movieFilter:searchTerm\">\n      <div class=\"cursor-feature\">\n        <img src=\"{{imageBaseURl }}{{movie.poster_path}}\" width=\"300px\" alt=\"movie picture\"                     \n        (click)=\"openModal(template,movie)\">\n      </div>\n      <p></p>\n    </div>\n</div>\n<br/>\n\n<hr/>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Modal</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <app-movie-detail [movie]=\"selectedMovie\"></app-movie-detail>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(movieServiceService, ngxLoader, modalService) {
        this.movieServiceService = movieServiceService;
        this.ngxLoader = ngxLoader;
        this.modalService = modalService;
        this.imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
        this.titles = [];
        this.loadingIcon = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //service call for getting all movies
        //  this.getMovies();    
        this.getMoviesList();
    };
    /* getMovies(): void {
        this.movieServiceService.getMovies()
       .subscribe(movies => this.movies = movies);
     }*/
    DashboardComponent.prototype.getMoviesList = function () {
        var _this = this;
        this.ngxLoader.start();
        this.movieServiceService.getMoviesList()
            .subscribe(function (item) {
            _this.moviesList = item.results;
            _this.ngxLoader.stop();
            item.results.map(function (rel) {
                _this.titles.push(rel.original_title);
            });
        }, function (error) { return console.log(error); });
    };
    /*onSelect(movie: any): void {
      this.selectedMovie = movie;
    }*/
    //modal
    DashboardComponent.prototype.openModal = function (template, movie) {
        this.selectedMovie = movie;
        this.modalRef = this.modalService.show(template);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_3__["MovieServiceService"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-circle{\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius: 50%;\r\n    margin:4px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtZGV0YWlsL21vdmllLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY2lyY2xle1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjo0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"movie\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <img src=\"{{imageBaseURl}}{{movie.poster_path}}\" width=\"250px\" alt=\"movie picture\">\n    </div>\n    <div class=\"col-lg-6\">\n      <h3> {{movie.original_title}}</h3>  \n\n      <p> \n        <span class=\"icon-circle\"><i class=\"fa fa-list\"></i></span>\n        <span class=\"icon-circle\"><i class=\"fa fa-heart\"></i></span>\n        <span class=\"icon-circle\"><i class=\"fa fa-star\"></i></span>             \n      </p>\n\n        <p> <b>Overview</b> : {{movie.overview}}</p>\n        <p> <b>Realse Date</b> : {{movie.release_date}}</p> \n        <p> <b>Rating</b> : {{movie.vote_average}} / 10</p>\n        <p> <b>Language</b> : {{movie.original_language}}</p>\n    </div>\n  </div>      \n</div>  "

/***/ }),

/***/ "./src/app/movie-detail/movie-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/movie-detail/movie-detail.component.ts ***!
  \********************************************************/
/*! exports provided: MovieDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function() { return MovieDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././movie */ "./src/app/movie.ts");



var MovieDetailComponent = /** @class */ (function () {
    function MovieDetailComponent() {
        this.imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
    }
    MovieDetailComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], MovieDetailComponent.prototype, "movie", void 0);
    MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.component.html */ "./src/app/movie-detail/movie-detail.component.html"),
            styles: [__webpack_require__(/*! ./movie-detail.component.css */ "./src/app/movie-detail/movie-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieDetailComponent);
    return MovieDetailComponent;
}());



/***/ }),

/***/ "./src/app/movie-filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/movie-filter.pipe.ts ***!
  \**************************************/
/*! exports provided: MovieFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieFilterPipe", function() { return MovieFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { Movie } from './movie';
var MovieFilterPipe = /** @class */ (function () {
    function MovieFilterPipe() {
    }
    MovieFilterPipe.prototype.transform = function (movies, searchTerm) {
        if (!movies || !searchTerm) {
            return movies;
        }
        return movies.filter(function (movies) {
            return movies.original_title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
    };
    MovieFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'movieFilter'
        })
    ], MovieFilterPipe);
    return MovieFilterPipe;
}());



/***/ }),

/***/ "./src/app/movie-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/movie-service.service.ts ***!
  \******************************************/
/*! exports provided: MovieServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieServiceService", function() { return MovieServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MovieServiceService = /** @class */ (function () {
    function MovieServiceService(http) {
        this.http = http;
        /*  getMovies(): Observable<Movie[]> {
            return of(MOVIES);
          }*/
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Accept': 'application/json'
        });
        this.movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US&page=1';
        this.tvShowUrl = 'https://api.themoviedb.org/3/tv/airing_today?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US&page=1';
        this.peopleUrl = 'https://api.themoviedb.org/3/person/popular?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US';
    }
    MovieServiceService.prototype.getMoviesList = function () {
        return this.http.get(this.movieUrl, {
            headers: this.headers
        });
    };
    ;
    MovieServiceService.prototype.getTvShowList = function () {
        return this.http.get(this.tvShowUrl, {
            headers: this.headers
        });
    };
    ;
    MovieServiceService.prototype.getPoepleList = function (pageNo) {
        var paginationUrl = '';
        paginationUrl = pageNo ? this.peopleUrl + '&page=' + pageNo : this.peopleUrl + '&page=1';
        return this.http.get(paginationUrl, {
            headers: this.headers
        });
    };
    ;
    MovieServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieServiceService);
    return MovieServiceService;
}());



/***/ }),

/***/ "./src/app/movie.ts":
/*!**************************!*\
  !*** ./src/app/movie.ts ***!
  \**************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let people of peopleList\">      \n      <div class=\"card\">\n        <div *ngIf=\"people.profile_path\">\n          <img src=\"{{imageBaseURl}}{{people.profile_path}}\" width=\"300px\" height=\"350px\" alt=\"profile\">\n        </div>\n        <div *ngIf=\"people.profile_path == null\">\n          <img src=\"../../assets/img/download.png\" width=\"300px\" height=\"350px\" alt=\"profile\">\n        </div>\n        \n        <p><b>{{people.name}}</b></p> \n\n     <!--   <p *ngFor=\"let known of people.known_for\">\n            <span>{{known.original_tile}}</span>\n        </p>-->\n\n      </div>\n      <br/>\n    </div>\n</div>\n<br/>\n\n<hr/>\n\n<div class=\"row\">\n  <div class=\"col-xs-12 col-12\">\n    <pagination [totalItems]=\"100\" [(ngModel)]=\"currentPage\" (pageChanged)=\"getPeopleList($event)\"></pagination>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");




var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(movieServiceService, ngxLoader) {
        this.movieServiceService = movieServiceService;
        this.ngxLoader = ngxLoader;
        this.imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
        this.currentPage = 1;
        this.smallnumPages = 0;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeopleList('');
    };
    PeopleComponent.prototype.getPeopleList = function (pageNo) {
        var _this = this;
        this.ngxLoader.start();
        this.movieServiceService.getPoepleList(pageNo.page)
            .subscribe(function (res) {
            _this.peopleList = res.results;
            _this.ngxLoader.stop();
        }, function (error) { return console.log(error); });
    };
    ;
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_2__["MovieServiceService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/tvshows/tvshows.component.css":
/*!***********************************************!*\
  !*** ./src/app/tvshows/tvshows.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R2c2hvd3MvdHZzaG93cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tvshows/tvshows.component.html":
/*!************************************************!*\
  !*** ./src/app/tvshows/tvshows.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-lg-3\" *ngFor=\"let tvshow of tvshowlist\">      \n       <div *ngIf=\"tvshow.poster_path\">\n          <img src=\"{{imageBaseURl}}{{tvshow.poster_path}}\" width=\"300px\" height=\"350px\" alt=\"tv poster\">\n        </div>\n        <div *ngIf=\"tvshow.poster_path == null\">\n          <img src=\"../../assets/img/download.png\" width=\"300px\" height=\"350px\" alt=\"tv poster\">\n        </div>\n      <p></p>\n    </div>\n</div>\n<br/>\n\n<hr/>"

/***/ }),

/***/ "./src/app/tvshows/tvshows.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tvshows/tvshows.component.ts ***!
  \**********************************************/
/*! exports provided: TvshowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvshowsComponent", function() { return TvshowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie-service.service */ "./src/app/movie-service.service.ts");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/fesm5/ngx-ui-loader.js");




var TvshowsComponent = /** @class */ (function () {
    function TvshowsComponent(movieServiceService, ngxLoader) {
        this.movieServiceService = movieServiceService;
        this.ngxLoader = ngxLoader;
        this.imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
    }
    TvshowsComponent.prototype.ngOnInit = function () {
        this.getTvShowList();
    };
    TvshowsComponent.prototype.getTvShowList = function () {
        var _this = this;
        this.ngxLoader.start();
        this.movieServiceService.getTvShowList()
            .subscribe(function (res) {
            _this.tvshowlist = res.results;
            _this.ngxLoader.stop();
        }, function (error) { return console.log(error); });
    };
    TvshowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tvshows',
            template: __webpack_require__(/*! ./tvshows.component.html */ "./src/app/tvshows/tvshows.component.html"),
            styles: [__webpack_require__(/*! ./tvshows.component.css */ "./src/app/tvshows/tvshows.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service_service__WEBPACK_IMPORTED_MODULE_2__["MovieServiceService"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]])
    ], TvshowsComponent);
    return TvshowsComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ak20046717\MovieDasboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map