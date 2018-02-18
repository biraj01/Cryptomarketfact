webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <router-outlet></router-outlet>\n \n \n  \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'crypto World';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cryptolist_cryptolist_component__ = __webpack_require__("../../../../../src/app/cryptolist/cryptolist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cryptodetail_cryptodetail_component__ = __webpack_require__("../../../../../src/app/cryptodetail/cryptodetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cryptolist_filter_pipe__ = __webpack_require__("../../../../../src/app/cryptolist/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cryptolist_orderby_pipe__ = __webpack_require__("../../../../../src/app/cryptolist/orderby.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__weather_service__ = __webpack_require__("../../../../../src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__twitter_twitter_component__ = __webpack_require__("../../../../../src/app/twitter/twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cryptodetail_twitter_service__ = __webpack_require__("../../../../../src/app/cryptodetail/twitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__cryptodetail_newsapi_service__ = __webpack_require__("../../../../../src/app/cryptodetail/newsapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__coinlist_service__ = __webpack_require__("../../../../../src/app/coinlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__news_news_component__ = __webpack_require__("../../../../../src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__cryptolist_cryptolist_component__["a" /* CryptolistComponent */],
                __WEBPACK_IMPORTED_MODULE_7__cryptodetail_cryptodetail_component__["a" /* CryptodetailComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cryptolist_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__cryptolist_orderby_pipe__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_12__twitter_twitter_component__["a" /* TwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: 'coin/:id',
                        component: __WEBPACK_IMPORTED_MODULE_7__cryptodetail_cryptodetail_component__["a" /* CryptodetailComponent */]
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__cryptolist_cryptolist_component__["a" /* CryptolistComponent */]
                    },
                    {
                        path: 'news',
                        component: __WEBPACK_IMPORTED_MODULE_16__news_news_component__["a" /* NewsComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_13__cryptodetail_twitter_service__["a" /* TwitterService */], __WEBPACK_IMPORTED_MODULE_14__cryptodetail_newsapi_service__["a" /* NewsapiService */], __WEBPACK_IMPORTED_MODULE_15__coinlist_service__["a" /* CoinListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/coinlist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //proper way to import the 'of' operator
var CoinListService = (function () {
    function CoinListService(http) {
        this.http = http;
    }
    ;
    CoinListService.prototype.getListOfCrypto = function () {
        this.http.get('https://api.coinmarketcap.com/v1/ticker/').subscribe(function (data) {
            //console.log(data);      
            //console.log(this.coins);      
            //console.log(this.coins[0].name);
        });
    };
    CoinListService.prototype.getCoins = function () {
        var _this = this;
        var url = "http://URL_TO_API/objects";
        if (!this.data || !this.data.length) {
            // We don't have any saved objects yet, make API call
            console.log("Getting the objects through API call");
            this.observable = this.http.get('https://api.coinmarketcap.com/v1/ticker/')
                .map(function (response) {
                // when the cached data is available we don't need the `Observable` reference anymore
                _this.observable = null;
                _this.data = response;
                return _this.data;
            }
            // make it shared so more than one subscriber can get the result
            )
                .share();
            return this.observable;
        }
        else if (this.observable) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            console.log("Getting observable");
            return this.observable;
        }
        else {
            // Don't need to call the API
            console.log("No API");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(this.data);
        }
    };
    CoinListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CoinListService);
    return CoinListService;
}());



/***/ }),

/***/ "../../../../../src/app/cryptodetail/cryptodetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Call To Action Section\n--------------------------------*/\n#call-to-action {\n    background: linear-gradient(rgba(0, 142, 99, 0.1), rgba(0, 0, 0, 0.1)), url(" + escape(__webpack_require__("../../../../../src/assets/call-to-action-bg.jpg")) + ") fixed center center;\n    background-size: cover;\n    padding: 60px 0;\n  }\n  \n  #call-to-action h3 {\n    color: #fff;\n    font-size: 28px;\n    font-weight: 700;\n  }\n  \n  #call-to-action p {\n    color: #fff;\n  }\n  \n  #call-to-action .cta-btn {\n    font-family: \"Montserrat\", sans-serif;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: 1px;\n    display: inline-block;\n    padding: 8px 28px;\n    border-radius: 25px;\n    transition: 0.5s;\n    margin-top: 10px;\n    border: 2px solid #fff;\n    color: #fff;\n  }\n  \n  #call-to-action .cta-btn:hover {\n    background: #18d26e;\n    border: 2px solid #18d26e;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cryptodetail/cryptodetail.component.html":
/***/ (function(module, exports) {

module.exports = "<span><img src=\"../../assets/btc1b1e.png\" height = \"80px\" width= \"80px\" alt=\"BTC\"></span>\n<h3>€13.984,70 EUR (2.10%)</h3><button type=\"button\" class=\"btn btn-success btn-round-lg\">Buy {{coin.name}}</button>\n<button type=\"button\" class=\"btn btn-success btn-round-lg\" [routerLink]=\"['']\">Back to List</button>\n\n    <section id=\"service\" class=\"section-padding\" style=\"background-color:cadetblue;color:white; padding: 20px;\">\n      <div class=\"container\">\n        <div *ngIf=\"chart\">\n          <canvas id=\"canvas\">{{ chart }}</canvas>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-4\">\n            <h2 class=\"ser-title\">Rank</h2>\n            <hr class=\"botm-line\">\n            <p>{{ coin.name }}</p>\n          </div>\n          <div class=\"col-md-4 col-sm-4\">\n            <div class=\"service-info\">\n              <div >\n              </div>\n              <div >\n                <h4>Market Cap</h4>\n                <p>{{ coin.market_cap_usd}}</p>\n              </div>\n            </div>\n            <div class=\"service-info\">\n             \n              <div class=\"icon-info\">\n                <h4>Current Supply</h4>\n                <p>{{ coin.market_cap_usd}}</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-4\">\n            <div class=\"service-info\">\n             \n              <div class=\"icon-info\">\n                <h4>Volume</h4>\n                <p>{{ coin.price_usd}}</p>\n              </div>\n            </div>\n            <div class=\"service-info\">\n             \n              <div class=\"icon-info\">\n                <h4>Max Supply</h4>\n                <p>{{ coin.market_cap_usd}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!--==========================\n      Call To Action Section\n    ============================-->\n    <section id=\"call-to-action\" class=\"wow fadeIn\">\n      <div class=\"container text-center\">\n        <h3>Call To Action</h3>\n        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n        <a class=\"cta-btn\" href=\"#\">Visit Website</a>\n      </div>\n    </section><!-- #call-to-action -->\n      <button type=\"button\" class=\"btn btn-success btn-round-lg\">Buy btc</button>\n      \n      <!-- Default button -->\n      <button type=\"button\" class=\"btn btn-danger btn-round-lg\">Sell btc</button>\n    </section>\n    <!--/ service-->\n\n    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n\n    <app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/cryptodetail/cryptodetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptodetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("../../../../../src/app/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coinlist_service__ = __webpack_require__("../../../../../src/app/coinlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CryptodetailComponent = (function () {
    function CryptodetailComponent(_weather, _coinlist, route) {
        this._weather = _weather;
        this._coinlist = _coinlist;
        this.route = route;
        this.chart = []; // This will hold our chart info
    }
    CryptodetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this._coinlist.getCoins().subscribe(function (data) {
            console.log(data);
            _this.coins = data;
            console.log(_this.coins);
            console.log(_this.coins[0].name);
            var res = _this.coins.filter(function (obj) {
                return obj.symbol.toLowerCase() == _this.id;
            });
            //this.coin = this.coins[this.id];
            _this.coin = res[0];
        });
        this._weather.dailyForecast()
            .subscribe(function (res) {
            var temp_max = res['list'].map(function (res) { return res.main.temp_max; });
            var temp_min = res['list'].map(function (res) { return res.main.temp_min; });
            var alldates = res['list'].map(function (res) { return res.dt; });
            var weatherDates = [];
            alldates.forEach(function (res) {
                var jsdate = new Date(res * 1000);
                weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
            });
            _this.chart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"]('canvas', {
                type: 'line',
                data: {
                    labels: weatherDates,
                    datasets: [
                        {
                            data: temp_max,
                            borderColor: "#3cba9f",
                            fill: false
                        },
                        {
                            data: temp_min,
                            borderColor: "#ffcc00",
                            fill: false
                        },
                    ]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        });
    };
    CryptodetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cryptodetail',
            template: __webpack_require__("../../../../../src/app/cryptodetail/cryptodetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cryptodetail/cryptodetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_3__coinlist_service__["a" /* CoinListService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], CryptodetailComponent);
    return CryptodetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cryptodetail/newsapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsapiService = (function () {
    function NewsapiService(http) {
        this.http = http;
    }
    NewsapiService.prototype.getNews = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=8417ac401f3248cc954739c1d26d7243').map(function (result) { return result; });
    };
    NewsapiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsapiService);
    return NewsapiService;
}());



/***/ }),

/***/ "../../../../../src/app/cryptodetail/twitter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitterService = (function () {
    function TwitterService(http) {
        this.http = http;
    }
    TwitterService.prototype.getTweets = function () {
        return this.http.get('http://localhost:8080/tweets').map(function (result) { return result; });
    };
    TwitterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TwitterService);
    return TwitterService;
}());



/***/ }),

/***/ "../../../../../src/app/cryptolist/cryptolist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table tr.active td {\n    background-color:#123456 !important;\n    color: white;\n  }\n\n  .table td, .table th {\n   \n    text-align: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cryptolist/cryptolist.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"dropdown\">\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      USD- US Dollar\n    </button>\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n      <a class=\"dropdown-item\" href=\"#\">USD- US Dollar</a>\n      <a class=\"dropdown-item\" href=\"#\">EUR Euro</a>\n      <a class=\"dropdown-item\" href=\"#\">YPN Japanese Jen</a>\n    </div>\n  </div>\n    <input type=\"text\" [(ngModel)]=\"searchText\" class=\"search form-control\" placeholder=\"Search Currencies\">\n    \n    <table id=\"example\" class=\"table table-striped table-bordered table-hover\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n       <tr>\n          <th >Coin</th>\n          <th >Price</th>\n          <th >Market Cap</th>\n          <th >Change (24h)</th>\n       </tr>\n       </thead>\n    <tbody>    \n      <!--(click)=\"setClickedRow(i,coin)\" [class.active]=\"i == selectedRow\"-->\n        <tr *ngFor=\"let coin of coins | filter : searchText  | paginate: { itemsPerPage: 50, currentPage: p };let i = index\" \n        [routerLink]=\"['/coin',coin.symbol.toLowerCase()]\"> \n        \n            <td> {{ coin.rank    }}  &nbsp;&nbsp;<span><img src=\"../../assets/btc1b1e.png\" height = \"40px\" width= \"40px\" alt=\"Mountain View\"></span>\n              &nbsp;&nbsp; <span>  {{ coin.name }} ({{ coin.symbol }}) </span></td>\n            <td>{{ coin.price_usd}}</td>\n            <td>{{ coin.market_cap_usd}}</td>\n            <td>{{ coin.percent_change_24h}}</td>\n        </tr>\n    </tbody>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>    \n    </table>\n<app-footer></app-footer>\n   \n"

/***/ }),

/***/ "../../../../../src/app/cryptolist/cryptolist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CryptolistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coinlist_service__ = __webpack_require__("../../../../../src/app/coinlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CryptolistComponent = (function () {
    function CryptolistComponent(http, router, coinListService) {
        this.http = http;
        this.router = router;
        this.coinListService = coinListService;
        this.crypto = 'List of Crypto currencies';
        this.isDesc = false;
        this.column = 'CategoryName';
        this.setClickedRow = function (index, coin) {
            console.log("clicked");
            this.selectedRow = index;
        };
    }
    CryptolistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coinListService.getCoins().subscribe(function (data) {
            console.log(data);
            _this.coins = data;
            console.log(_this.coins);
            console.log(_this.coins[0].name);
        });
        //console.log(this.coins.length + "is the length")
    };
    CryptolistComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        var direction = this.isDesc ? 1 : -1;
        this.coins.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] > b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    CryptolistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cryptolist',
            template: __webpack_require__("../../../../../src/app/cryptolist/cryptolist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cryptolist/cryptolist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__coinlist_service__["a" /* CoinListService */]])
    ], CryptolistComponent);
    return CryptolistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cryptolist/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) { return item.symbol.toLowerCase().indexOf(searchText) !== -1
            || item.name.toLowerCase().indexOf(searchText) !== -1; });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/cryptolist/orderby.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'orderBy' })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer class=\"page-footer center-on-small-only unique-color-dark pt-0\">\n  \n      <div style=\"background-color:aliceblue\">\n          <div class=\"container\">\n              <!--Grid row-->\n              <div class=\"row py-4 d-flex align-items-center\">\n  \n                  <!--Grid column-->\n                  <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">\n                      <h6 class=\"mb-0 white-text\">Get connected with us on social networks!</h6>\n                      <a class=\"title font-bold\" [routerLink]=\"['/news']\"><strong>News</strong></a>\n                      <a class=\"title font-bold\" [routerLink]=\"['/news']\"><strong>Twitter</strong></a>\n                      <a class=\"title font-bold\" [routerLink]=\"['/news']\"><strong>Add</strong></a>\n                      \n                    </div>\n                  <!--Grid column-->\n  \n              </div>\n              <!--Grid row-->\n          </div>\n      </div>\n  \n      \n      \n  </footer>\n  <!--/.Footer-->\n                  "

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline {\n    list-style: none;\n    padding: 20px 0 20px;\n    position: relative;\n}\n\n    .timeline:before {\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        content: \" \";\n        width: 3px;\n        background-color: #eeeeee;\n        left: 50%;\n        margin-left: -1.5px;\n    }\n\n    .timeline > li {\n        margin-bottom: 20px;\n        position: relative;\n    }\n\n        .timeline > li:before,\n        .timeline > li:after {\n            content: \" \";\n            display: table;\n        }\n\n        .timeline > li:after {\n            clear: both;\n        }\n\n        .timeline > li:before,\n        .timeline > li:after {\n            content: \" \";\n            display: table;\n        }\n\n        .timeline > li:after {\n            clear: both;\n        }\n\n        .timeline > li > .timeline-panel {\n            width: 46%;\n            float: left;\n            border: 1px solid #d4d4d4;\n            border-radius: 2px;\n            padding: 20px;\n            position: relative;\n            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n        }\n\n            .timeline > li > .timeline-panel:before {\n                position: absolute;\n                top: 26px;\n                right: -15px;\n                display: inline-block;\n                border-top: 15px solid transparent;\n                border-left: 15px solid #ccc;\n                border-right: 0 solid #ccc;\n                border-bottom: 15px solid transparent;\n                content: \" \";\n            }\n\n            .timeline > li > .timeline-panel:after {\n                position: absolute;\n                top: 27px;\n                right: -14px;\n                display: inline-block;\n                border-top: 14px solid transparent;\n                border-left: 14px solid #fff;\n                border-right: 0 solid #fff;\n                border-bottom: 14px solid transparent;\n                content: \" \";\n            }\n\n        .timeline > li > .timeline-badge {\n            color: #fff;\n            width: 50px;\n            height: 50px;\n            line-height: 50px;\n            font-size: 1.4em;\n            text-align: center;\n            position: absolute;\n            top: 16px;\n            left: 50%;\n            margin-left: -25px;\n            background-color: #999999;\n            z-index: 100;\n            border-top-right-radius: 50%;\n            border-top-left-radius: 50%;\n            border-bottom-right-radius: 50%;\n            border-bottom-left-radius: 50%;\n        }\n\n        .timeline > li.timeline-inverted > .timeline-panel {\n            float: right;\n        }\n\n            .timeline > li.timeline-inverted > .timeline-panel:before {\n                border-left-width: 0;\n                border-right-width: 15px;\n                left: -15px;\n                right: auto;\n            }\n\n            .timeline > li.timeline-inverted > .timeline-panel:after {\n                border-left-width: 0;\n                border-right-width: 14px;\n                left: -14px;\n                right: auto;\n            }\n\n.timeline-badge.primary {\n    background-color: #2e6da4 !important;\n}\n\n.timeline-badge.success {\n    background-color: #3f903f !important;\n}\n\n.timeline-badge.warning {\n    background-color: #f0ad4e !important;\n}\n\n.timeline-badge.danger {\n    background-color: #d9534f !important;\n}\n\n.timeline-badge.info {\n    background-color: #5bc0de !important;\n}\n\n.timeline-title {\n    margin-top: 0;\n    color: inherit;\n}\n\n.timeline-body > p,\n.timeline-body > ul {\n    margin-bottom: 0;\n}\n\n    .timeline-body > p + p {\n        margin-top: 5px;\n    }\n\n@media (max-width: 767px) {\n    ul.timeline:before {\n        left: 40px;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        width: calc(100% - 90px);\n        width: -webkit-calc(100% - 90px);\n    }\n\n    ul.timeline > li > .timeline-badge {\n        left: 15px;\n        margin-left: 0;\n        top: 16px;\n    }\n\n    ul.timeline > li > .timeline-panel {\n        float: right;\n    }\n\n        ul.timeline > li > .timeline-panel:before {\n            border-left-width: 0;\n            border-right-width: 15px;\n            left: -15px;\n            right: auto;\n        }\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"container\">\n      <div class=\"page-header\">\n          <h1 id=\"timeline\">News</h1>\n      </div>\n      <ul class=\"timeline\">\n        <div *ngFor=\"let new of news; let i =index\">\n        <li  class=\"timeline-inverted\" >\n        <div class=\"timeline-badge\"><i class=\"glyphicon glyphicon-check\"></i></div>\n        <div class=\"timeline-panel\">\n          <div class=\"timeline-heading\">\n            <h4 class=\"timeline-title\">{{ new.title }}</h4>\n            <p><small class=\"text-muted\"><i class=\"glyphicon glyphicon-time\"></i> 11 hours ago via Twitter</small></p>\n          </div>\n          <div class=\"timeline-body\">\n            {{new.description}} \n            <a href = \"{{new.url}}\" >Link</a>\n          </div>\n        \n        </div>\n      </li>\n    </div>\n \n\n    </ul>\n\n\n\n\n<table id=\"example\" class=\"table table-striped table-bordered table-hover\" cellspacing=\"0\" width=\"100%\">\n  \n  <tbody>    \n    <tr *ngFor=\"let tweet of tweets\"> \n      <td>{{ tweet.text }}</td>\n      \n  </tr>\n  </tbody>\n  </table>\n\n\n  <div class=\"container\">\n    <div class=\"page-header\">\n        <h1 id=\"timeline\">Timeline</h1>\n    </div>\n    <ul class=\"timeline\">\n        <li>\n          <div class=\"timeline-badge\"><i class=\"glyphicon glyphicon-check\"></i></div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n              <p><small class=\"text-muted\"><i class=\"glyphicon glyphicon-time\"></i> 11 hours ago via Twitter</small></p>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-badge warning\"><i class=\"glyphicon glyphicon-credit-card\"></i></div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n              <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-badge danger\"><i class=\"glyphicon glyphicon-credit-card\"></i></div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-badge info\"><i class=\"glyphicon glyphicon-floppy-disk\"></i></div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n              <hr>\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"glyphicon glyphicon-cog\"></i> <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">Separated link</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n            </div>\n          </div>\n        </li>\n        <li class=\"timeline-inverted\">\n          <div class=\"timeline-badge success\"><i class=\"glyphicon glyphicon-thumbs-up\"></i></div>\n          <div class=\"timeline-panel\">\n            <div class=\"timeline-heading\">\n              <h4 class=\"timeline-title\">Mussum ipsum cacilds</h4>\n            </div>\n            <div class=\"timeline-body\">\n              <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n            </div>\n          </div>\n        </li>\n    </ul>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cryptodetail_twitter_service__ = __webpack_require__("../../../../../src/app/cryptodetail/twitter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cryptodetail_newsapi_service__ = __webpack_require__("../../../../../src/app/cryptodetail/newsapi.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(_twitter, _news) {
        this._twitter = _twitter;
        this._news = _news;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._twitter.getTweets().subscribe(function (data) {
            console.log(data);
            console.log(data[0].text);
            _this.tweets = data;
            //console.log(data[1].age); 
        });
        this._news.getNews().subscribe(function (data) {
            console.log(data);
            console.log(data.articles);
            _this.news = data.articles;
            console.log(_this.news[0].title);
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/news/news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cryptodetail_twitter_service__["a" /* TwitterService */],
            __WEBPACK_IMPORTED_MODULE_2__cryptodetail_newsapi_service__["a" /* NewsapiService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/twitter/twitter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/twitter/twitter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  twitter works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/twitter/twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterComponent = (function () {
    function TwitterComponent(http) {
        this.http = http;
    }
    TwitterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8080/tweets').subscribe(function (data) {
            console.log(data);
            console.log(data[0].text);
            _this.tweets = data;
            //console.log(data[1].age); 
        });
    };
    TwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-twitter',
            template: __webpack_require__("../../../../../src/app/twitter/twitter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/twitter/twitter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.dailyForecast = function () {
        var headers = new Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');
        return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
            .map(function (result) { return result; });
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "../../../../../src/assets/call-to-action-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "call-to-action-bg.7a6c36e87e9c08c7610a.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map