webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qa_answer_answer_component__ = __webpack_require__("../../../../../src/app/qa/answer/answer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__qa_create_create_component__ = __webpack_require__("../../../../../src/app/qa/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qa_listing_listing_component__ = __webpack_require__("../../../../../src/app/qa/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qa_show_show_component__ = __webpack_require__("../../../../../src/app/qa/show/show.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'create', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__qa_create_create_component__["a" /* CreateComponent */] },
    { path: 'listing', pathMatch: 'prefix', component: __WEBPACK_IMPORTED_MODULE_5__qa_listing_listing_component__["a" /* ListingComponent */] },
    { path: 'answer', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__qa_answer_answer_component__["a" /* AnswerComponent */] },
    { path: 'answer/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__qa_answer_answer_component__["a" /* AnswerComponent */] },
    { path: 'show', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__qa_show_show_component__["a" /* ShowComponent */] },
    { path: 'show/:id', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__qa_show_show_component__["a" /* ShowComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__qa_qa_component__ = __webpack_require__("../../../../../src/app/qa/qa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__qa_listing_listing_component__ = __webpack_require__("../../../../../src/app/qa/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qa_create_create_component__ = __webpack_require__("../../../../../src/app/qa/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__qa_show_show_component__ = __webpack_require__("../../../../../src/app/qa/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__qa_answer_answer_component__ = __webpack_require__("../../../../../src/app/qa/answer/answer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__qa_qa_component__["a" /* QaComponent */],
            __WEBPACK_IMPORTED_MODULE_9__qa_listing_listing_component__["a" /* ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__qa_create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_11__qa_show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_12__qa_answer_answer_component__["a" /* AnswerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.create = function (user) {
        console.log('hit create service');
        return this._http.post('/api/register', user)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.getCurrentUser = function () {
        console.log('hit getCurrentUser() in service');
        return this._http.get('/api/current')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.createQ = function (question) {
        console.log('hit createQ service');
        return this._http.post('/api/createQ', question)
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.getAllQuestions = function () {
        console.log('getAllQuestions in service');
        return this._http.get('/api/getAllQuestions')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.grabThisQuestion = function (q_id) {
        console.log('hit grabThisQuestion in service');
        return this._http.post('/api/grabThisQuestion', { q_id: q_id })
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.newAnswer = function (answer, q_id) {
        console.log('hit newAnswer in Services');
        return this._http.post('/api/newAnswer', { answer: answer, q_id: q_id })
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    HttpService.prototype.logoff = function () {
        console.log('hit logoff service!');
        return this._http.get('/api/logoff')
            .map(function (Response) { return Response.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Q&A</h1>\n<table>\n  <form (submit)=\"onLogin()\">\n    <tr>\n      <td>Name:</td>\n      <td><input\n        type=\"text\"\n        name=\"name\"\n        [(ngModel)]=\"user.name\"\n        #name=\"ngModel\"\n        ></td>\n      <td><input type=\"submit\" value=\"Enter\"></td>\n    </tr>\n  </form>\n</table>\n\n{{ user | json }}\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.user = {
            name: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        console.log('onLogin()', this.user);
        this._httpService.create(this.user)
            .then(function (data) {
            console.log(data);
            if (data.errors) {
                console.log('returned from backend', data);
            }
            else {
                console.log('Successful Logged IN!');
                _this._router.navigate(['listing']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/qa/answer/answer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"home()\">Home</button> | <a href=\"\">Answer</a>\n\n<div *ngFor=\"let question of thisQuestion\">\n  <h1>{{ question.question }}</h1>\n  <p>{{ question.description }}</p>\n</div>\n\n<div>\n  <table>\n    <form (submit)=\"onAnswer()\">\n      <tr>\n        <td><textarea\n          type=\"text\"\n          name=\"answer\"\n          placeholder=\"Your Answer\"\n          rows=\"8\"\n          cols=\"50\"\n          required\n          [(ngModel)]=\"newAnswer.answer\"\n          #answer=\"ngModel\"\n          ></textarea></td>\n      </tr>\n      <tr>\n        <td><textarea\n          type=\"text\"\n          name=\"description\"\n          rows=\"5\"\n          cols=\"50\"\n          placeholder=\"Description\"\n          [(ngModel)]=\"newAnswer.description\"\n          #description=\"ngModel\"\n          ></textarea></td>\n      </tr>\n      <tr>\n        <input type=\"submit\" value=\"Submit\">\n      </tr>\n    </form>\n  </table>\n\n</div>\n\n{{ newAnswer | json }}\n"

/***/ }),

/***/ "../../../../../src/app/qa/answer/answer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerComponent = (function () {
    function AnswerComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.q_id = "";
        this.newAnswer = {
            answer: "",
            description: ""
        };
    }
    AnswerComponent.prototype.ngOnInit = function () {
        this.grabThisQuestion();
    };
    AnswerComponent.prototype.grabThisQuestion = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.q_id = params.get('id');
            console.log(_this.q_id);
        });
        console.log('Grabbing Question..');
        this._httpService.grabThisQuestion(this.q_id)
            .then(function (data) {
            console.log(data);
            _this.thisQuestion = data;
        });
    };
    AnswerComponent.prototype.onAnswer = function () {
        console.log('onAnswer()', this.newAnswer);
        console.log(this.q_id);
        this._httpService.newAnswer(this.newAnswer, this.q_id)
            .then(function (data) {
            console.log(data);
        });
    };
    AnswerComponent.prototype.home = function () {
        console.log('home');
        this._router.navigate(['listing']);
    };
    return AnswerComponent;
}());
AnswerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-answer',
        template: __webpack_require__("../../../../../src/app/qa/answer/answer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/qa/answer/answer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], AnswerComponent);

var _a, _b, _c;
//# sourceMappingURL=answer.component.js.map

/***/ }),

/***/ "../../../../../src/app/qa/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a href=\"/listing\">Home</a></p>\n\n<h1>New Question</h1>\n<form #createForm=\"ngForm\" (submit)=newQuestion()>\n  <table>\n    <tr>\n      <td><textarea\n        name=\"question\"\n        rows=\"8\"\n        cols=\"80\"\n        minlength=10\n        placeholder=\"Ask a Question\"\n        [(ngModel)]=\"newQ.question\"\n        #question=ngModel\n        ></textarea></td>\n        <td *ngIf=\"newQ.question.length < 10 && !question.pristine\"><p>Question must be atleast 10 characters!</p></td>\n    </tr>\n    <tr>\n      <td><textarea\n        name=\"question\"\n        rows=\"8\"\n        cols=\"80\"\n        placeholder=\"Description\"\n        [(ngModel)]=\"newQ.description\"\n        #description=\"ngModel\"\n        ></textarea></td>\n    </tr>\n    <tr>\n      <input type=\"submit\" value=\"Create!\" [disabled]=\"!createForm.valid\">\n    </tr>\n  </table>\n</form>\n\n{{ newQ | json }}\n"

/***/ }),

/***/ "../../../../../src/app/qa/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = (function () {
    function CreateComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.newQ = {
            question: "",
            description: ""
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.newQuestion = function () {
        var _this = this;
        console.log('newQuestion()', this.newQ);
        this._httpService.createQ(this.newQ)
            .then(function (data) {
            console.log("Returned from backend, Success!", data);
            _this._router.navigate(['listing']);
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/qa/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/qa/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CreateComponent);

var _a, _b;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/qa/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome {{ currentUser.name }}</h1>\n<button (click)=\"logoff()\">LogOut</button>\n<button (click)=\"navCreate()\">Ask A Question!</button>\n\n<router-outlet></router-outlet>\n<!-- Grab all Questions -->\n<br>\n<input type=\"text\" name=\"search\"\n  placeholder=\"Search a Question\"\n\t[(ngModel)]=\"searchTerm\"\n\t#search = \"ngModel\"\n\t(keyup)=\"searchExams()\"\n\t>\n\n<table>\n  <thead>\n    <tr>\n      <td>Questions</td>\n      <td>Answers</td>\n      <td>Action</td>\n    </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let question of qList\">\n\n    <td>{{ question.question }}</td>\n    <td>{{ question.answers }}</td>\n    <td><button (click)=\"onShow(question._id)\">Show</button><button (click)=\"onAnswer(question._id)\">Answer</button></td>\n\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/qa/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingComponent = (function () {
    function ListingComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.currentUser = {
            name: ""
        };
        this.thisList = [];
        this.qList = [];
        this.searchTerm = "";
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getCurrent();
        this.getAllQuestions();
    };
    ListingComponent.prototype.getCurrent = function () {
        var _this = this;
        console.log('onInit getCurrentUser');
        this._httpService.getCurrentUser()
            .then(function (data) {
            console.log("then");
            if (data.errors) {
                console.log("failed to find current user");
                _this._router.navigate(['']);
            }
            else {
                console.log("found current user");
                _this.currentUser = data;
            }
        });
    };
    ListingComponent.prototype.getAllQuestions = function () {
        var _this = this;
        this._httpService.getAllQuestions()
            .then(function (data) {
            console.log("Returned data:", data);
            _this.qList = data;
            _this.thisList = data;
        });
    };
    ListingComponent.prototype.navCreate = function () {
        console.log('clicked navCreate');
        this._router.navigate(['create']);
    };
    ListingComponent.prototype.onShow = function (qID) {
        console.log('onShow()', qID);
        this._router.navigate(['show', qID]);
    };
    ListingComponent.prototype.onAnswer = function (qID) {
        console.log('onShow()', qID);
        this._router.navigate(['answer', qID]);
    };
    ListingComponent.prototype.searchExams = function () {
        var _this = this;
        this.qList = this.thisList.filter(function (question) {
            return question.name.toLowerCase().includes(_this.searchTerm.toLowerCase()) || question.stack.toLowerCase().includes(_this.searchTerm.toLowerCase());
        });
    };
    ListingComponent.prototype.logoff = function () {
        var _this = this;
        console.log('logoff()');
        this._httpService.logoff()
            .then((function (data) {
            if (data == true) {
                _this._router.navigate(['']);
            }
            else {
                console.log('error', data);
            }
        }));
    };
    return ListingComponent;
}());
ListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/qa/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/qa/listing/listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListingComponent);

var _a, _b;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/qa/qa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa/qa.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  qa works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/qa/qa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QaComponent = (function () {
    function QaComponent() {
    }
    QaComponent.prototype.ngOnInit = function () {
    };
    return QaComponent;
}());
QaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-qa',
        template: __webpack_require__("../../../../../src/app/qa/qa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/qa/qa.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QaComponent);

//# sourceMappingURL=qa.component.js.map

/***/ }),

/***/ "../../../../../src/app/qa/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/qa/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"home()\">Home</button> | <a href=\"\">Answer</a>\n\n<div *ngFor=\"let question of thisQuestion\">\n  <h1>{{ question.question }}</h1>\n  <p>{{ question.description }}</p>\n\n</div>\n\n\n<div *ngFor=\"let question of thisQuestion, let idx = index\">\n  <p>{{ question._answers[idx].answer }} {{ like }} <button (click)=\"like()\">Like</button></p>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- Shit, i've been compromised.. SPARE MEE! -->\n\n\n<div *ngFor=\"let question of thisQuestion, let idx = index\">\n  <p>{{ question._answers[1].answer }}</p>\n  <p>{{ question._answers[2].answer }}</p>\n  <p>{{ question._answers[3].answer }}</p>\n  <p>{{ question._answers[4].answer }}</p>\n  <p>{{ question._answers[5].answer }}</p>\n  <p>{{ question._answers[6].answer }}</p>\n  <p>{{ question._answers[7].answer }}</p>\n  <p>{{ question._answers[8].answer }}</p>\n  <p>{{ question._answers[9].answer }}</p>\n  <p>{{ question._answers[10].answer }}</p>\n  <p>{{ question._answers[11].answer }}</p>\n  <p>{{ question._answers[12].answer }}</p>\n  <p>{{ question._answers[13].answer }}</p>\n  <p>{{ question._answers[14].answer }}</p>\n  <p>{{ question._answers[15].answer }}</p>\n  <p>{{ question._answers[16].answer }}</p>\n  <p>{{ question._answers[17].answer }}</p>\n  <p>{{ question._answers[18].answer }}</p>\n  <p>{{ question._answers[19].answer }}</p>\n  <p>{{ question._answers[20].answer }}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/qa/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowComponent = (function () {
    function ShowComponent(_httpService, _router, _route) {
        this._httpService = _httpService;
        this._router = _router;
        this._route = _route;
        this.q_id = "";
        this.like = 0;
    }
    ShowComponent.prototype.ngOnInit = function () {
        this.grabThisQuestion();
    };
    ShowComponent.prototype.grabThisQuestion = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.q_id = params.get('id');
            console.log(_this.q_id);
        });
        console.log('Grabbing Question..');
        this._httpService.grabThisQuestion(this.q_id)
            .then(function (data) {
            console.log(data);
            _this.thisQuestion = data;
        });
    };
    ShowComponent.prototype.home = function () {
        console.log('home');
        this._router.navigate(['listing']);
    };
    ShowComponent.prototype.likes = function () {
        this.like += 1;
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/qa/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/qa/show/show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ShowComponent);

var _a, _b, _c;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map