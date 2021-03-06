(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-news-detail-news-detail-module~pages-tabs-tabs-module"], {
    /***/
    "6lEI":
    /*!***********************************************!*\
      !*** ./src/app/providers/news-api.service.ts ***!
      \***********************************************/

    /*! exports provided: NewsApiService */

    /***/
    function lEI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsApiService", function () {
        return NewsApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL;
      var apiKey = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_KEY;

      var NewsApiService = /*#__PURE__*/function () {
        // fetch news from user country
        function NewsApiService(http, router) {
          _classCallCheck(this, NewsApiService);

          this.http = http;
          this.router = router;
        }

        _createClass(NewsApiService, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCountryCode();
          } // fetch country code from ip location API
          // response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

        }, {
          key: "getCountryCode",
          value: function getCountryCode() {
            return this.http.get("https://ipapi.co/json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("News sources not found, error: ", err);
            }));
          } // fetch sources from news API using url input

        }, {
          key: "getSources",
          value: function getSources(url) {
            return this.http.get("".concat(apiUrl, "/").concat(url, "&apiKey=").concat(apiKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("News sources not found, error: ", err);
            }));
          } // fetch news from news API using url input

        }, {
          key: "getNews",
          value: function getNews(url) {
            return this.http.get("".concat(apiUrl, "/").concat(url, "&apiKey=").concat(apiKey)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
              return data;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Problem fetching news from API, error: ", err);
            }));
          } // navigate to news-detail page to show article detail

        }, {
          key: "getNewsDetail",
          value: function getNewsDetail(article) {
            this.currentArticle = article;
            this.router.navigate(["/news-detail"]);
          }
        }]);

        return NewsApiService;
      }();

      NewsApiService.??fac = function NewsApiService_Factory(t) {
        return new (t || NewsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NewsApiService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjectable"]({
        token: NewsApiService,
        factory: NewsApiService.??fac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "AZR4":
    /*!********************************************!*\
      !*** ./src/app/pipes/date-convert.pipe.ts ***!
      \********************************************/

    /*! exports provided: DateConvertPipe */

    /***/
    function AZR4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateConvertPipe", function () {
        return DateConvertPipe;
      });
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      "Wgwc");
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! dayjs/plugin/relativeTime */
      "QgiU");
      /* harmony import */


      var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      dayjs__WEBPACK_IMPORTED_MODULE_0__["extend"](dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_1__); // convert ISO8601 UTC string to '...time ago'

      var DateConvertPipe = /*#__PURE__*/function () {
        function DateConvertPipe() {
          _classCallCheck(this, DateConvertPipe);
        }

        _createClass(DateConvertPipe, [{
          key: "transform",
          value: function transform(value) {
            return dayjs__WEBPACK_IMPORTED_MODULE_0__(value).fromNow();
          }
        }]);

        return DateConvertPipe;
      }();

      DateConvertPipe.??fac = function DateConvertPipe_Factory(t) {
        return new (t || DateConvertPipe)();
      };

      DateConvertPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????definePipe"]({
        name: "dateConvert",
        type: DateConvertPipe,
        pure: true
      });
      /***/
    },

    /***/
    "HBRp":
    /*!**********************************************!*\
      !*** ./src/app/pipes/title-nosource.pipe.ts ***!
      \**********************************************/

    /*! exports provided: TitleNosourcePipe */

    /***/
    function HBRp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleNosourcePipe", function () {
        return TitleNosourcePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TitleNosourcePipe = /*#__PURE__*/function () {
        function TitleNosourcePipe() {
          _classCallCheck(this, TitleNosourcePipe);
        }

        _createClass(TitleNosourcePipe, [{
          key: "transform",
          value: //
          function transform(value) {
            return value.replace(/-[^-]*$/, "");
          }
        }]);

        return TitleNosourcePipe;
      }();

      TitleNosourcePipe.??fac = function TitleNosourcePipe_Factory(t) {
        return new (t || TitleNosourcePipe)();
      };

      TitleNosourcePipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
        name: "titleNosource",
        type: TitleNosourcePipe,
        pure: true
      });
      /***/
    },

    /***/
    "HasH":
    /*!*********************************************************!*\
      !*** ./src/app/pages/news-detail/news-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: NewsDetailPageModule */

    /***/
    function HasH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsDetailPageModule", function () {
        return NewsDetailPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _news_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./news-detail.page */
      "S4D2");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // ngx node modules
      // Component & pipe modules & services


      var routes = [{
        path: "",
        component: _news_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewsDetailPage"]
      }];

      var NewsDetailPageModule = function NewsDetailPageModule() {
        _classCallCheck(this, NewsDetailPageModule);
      };

      NewsDetailPageModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineNgModule"]({
        type: NewsDetailPageModule
      });
      NewsDetailPageModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineInjector"]({
        factory: function NewsDetailPageModule_Factory(t) {
          return new (t || NewsDetailPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["????setNgModuleScope"](NewsDetailPageModule, {
          declarations: [_news_detail_page__WEBPACK_IMPORTED_MODULE_5__["NewsDetailPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]]
        });
      })();
      /***/

    },

    /***/
    "QgiU":
    /*!***************************************************!*\
      !*** ./node_modules/dayjs/plugin/relativeTime.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function QgiU(module, exports, __webpack_require__) {
      !function (r, t) {
        true ? module.exports = t() : undefined;
      }(this, function () {
        "use strict";

        return function (r, t, e) {
          r = r || {};
          var n = t.prototype,
              o = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          };

          function i(r, t, e, o) {
            return n.fromToBase(r, t, e, o);
          }

          e.en.relativeTime = o, n.fromToBase = function (t, n, i, d, u) {
            for (var a, f, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{
              l: "s",
              r: 44,
              d: "second"
            }, {
              l: "m",
              r: 89
            }, {
              l: "mm",
              r: 44,
              d: "minute"
            }, {
              l: "h",
              r: 89
            }, {
              l: "hh",
              r: 21,
              d: "hour"
            }, {
              l: "d",
              r: 35
            }, {
              l: "dd",
              r: 25,
              d: "day"
            }, {
              l: "M",
              r: 45
            }, {
              l: "MM",
              r: 10,
              d: "month"
            }, {
              l: "y",
              r: 17
            }, {
              l: "yy",
              d: "year"
            }], m = h.length, c = 0; c < m; c += 1) {
              var y = h[c];
              y.d && (a = d ? e(t).diff(i, y.d, !0) : i.diff(t, y.d, !0));
              var p = (r.rounding || Math.round)(Math.abs(a));

              if (s = a > 0, p <= y.r || !y.r) {
                p <= 1 && c > 0 && (y = h[c - 1]);
                var v = l[y.l];
                u && (p = u("" + p)), f = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s);
                break;
              }
            }

            if (n) return f;
            var M = s ? l.future : l.past;
            return "function" == typeof M ? M(f) : M.replace("%s", f);
          }, n.to = function (r, t) {
            return i(r, t, this, !0);
          }, n.from = function (r, t) {
            return i(r, t, this);
          };

          var d = function d(r) {
            return r.$u ? e.utc() : e();
          };

          n.toNow = function (r) {
            return this.to(d(this), r);
          }, n.fromNow = function (r) {
            return this.from(d(this), r);
          };
        };
      });
      /***/
    },

    /***/
    "S4D2":
    /*!*******************************************************!*\
      !*** ./src/app/pages/news-detail/news-detail.page.ts ***!
      \*******************************************************/

    /*! exports provided: NewsDetailPage */

    /***/
    function S4D2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewsDetailPage", function () {
        return NewsDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_providers_news_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/providers/news-api.service */
      "6lEI");
      /* harmony import */


      var src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/providers/storage.service */
      "rAje");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_title_nosource_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/title-nosource.pipe */
      "HBRp");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../pipes/date-convert.pipe */
      "AZR4");

      function NewsDetailPage_ion_title_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](2, 2, "NEWS-DETAIL.title"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx_r0.article.source.name);
        }
      }

      function NewsDetailPage_ion_text_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](5, "dateConvert");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", ctx_r1.appendString(ctx_r1.article.content), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](5, 2, ctx_r1.article.publishedAt));
        }
      }

      function NewsDetailPage_ion_card_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "ion-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "ion-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](6, 2, "NEWS-DETAIL.author"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](ctx_r2.article.author);
        }
      }

      function NewsDetailPage_ion_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "ion-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NewsDetailPage_ion_button_28_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r5.onAddToFavourites(ctx_r5.article);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "ion-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" \xA0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](4, 1, "NEWS-DETAIL.add-favourite"), " ");
        }
      }

      function NewsDetailPage_ion_button_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "ion-button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function NewsDetailPage_ion_button_29_Template_ion_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r7.onRemoveFromFavourites(ctx_r7.article);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "ion-icon", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" \xA0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](4, 1, "NEWS-DETAIL.remove-favourite"), " ");
        }
      }

      var NewsDetailPage = /*#__PURE__*/function () {
        function NewsDetailPage(newsService, alertCtrl, loadingCtrl, modalCtrl, toastCtrl, storageService) {
          _classCallCheck(this, NewsDetailPage);

          this.newsService = newsService;
          this.alertCtrl = alertCtrl;
          this.loadingCtrl = loadingCtrl;
          this.modalCtrl = modalCtrl;
          this.toastCtrl = toastCtrl;
          this.storageService = storageService;
        }

        _createClass(NewsDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.article = this.newsService.currentArticle;
          }
        }, {
          key: "onAddToFavourites",
          value: function onAddToFavourites(article) {
            this.storageService.addToFavourites(article);
            console.log("article isFavourite status has changed to: ", this.isFavourite(article));
          }
        }, {
          key: "onRemoveFromFavourites",
          value: function onRemoveFromFavourites(article) {
            this.storageService.removeFromFavourites(article);
            console.log("article isFavourite status has changed to: ", this.isFavourite(article));
          }
        }, {
          key: "isFavourite",
          value: function isFavourite(article) {
            return this.storageService.isFavourite(article);
          }
        }, {
          key: "openSocial",
          value: function openSocial(network, fab) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: "Posting to ".concat(network),
                        duration: Math.random() * 1000 + 500
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onWillDismiss();

                    case 7:
                      fab.close();

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "appendString",
          value: function appendString(content) {
            try {
              var result = content.split("[")[0].concat("(For more 'Visit Website' below)");
              return result;
            } catch (err) {
              console.log(err);
            }
          }
        }]);

        return NewsDetailPage;
      }();

      NewsDetailPage.??fac = function NewsDetailPage_Factory(t) {
        return new (t || NewsDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_providers_news_api_service__WEBPACK_IMPORTED_MODULE_2__["NewsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_providers_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]));
      };

      NewsDetailPage.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: NewsDetailPage,
        selectors: [["app-news-detail"]],
        decls: 30,
        vars: 14,
        consts: [["color", "primary"], ["slot", "start"], ["text", "", "defaultHref", "app/tabs/news", "router-direction", "back"], [4, "ngIf"], [1, "ion-no-padding", 3, "scrollEvents"], [1, "ion-no-padding"], ["size", "12", "size-sm", "8", "size-ms", "8", "size-xl", "6", "offset-sm", "2", 1, "ion-no-padding"], [1, "ion-no-padding", "ion-no-margin"], [1, "detail-img", 3, "src"], [1, "detail-header"], ["class", "ion-no-padding ion-no-margin", 4, "ngIf"], ["slot", "bottom"], ["target", "_blank", "size", "small", "icon-left", "", 3, "href"], ["name", "eye", "size", "large"], [1, "footer-text"], ["fxFlex", ""], ["size", "small", "icon-left", "", 3, "click", 4, "ngIf"], [1, "source-text"], [1, "small-text"], [1, "author-text"], ["size", "large", "name", "person-circle"], ["size", "small", "icon-left", "", 3, "click"], ["name", "heart", "size", "large"], ["name", "heart-dislike"]],
        template: function NewsDetailPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "ion-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](4, NewsDetailPage_ion_title_4_Template, 5, 4, "ion-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "ion-grid", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "ion-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "ion-card-header", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](11, "ion-img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "ion-card-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "ion-list-header", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](16, "titleNosource");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](17, NewsDetailPage_ion_text_17_Template, 6, 4, "ion-text", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](18, NewsDetailPage_ion_card_18_Template, 8, 4, "ion-card", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "ion-tabs");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "ion-tab-bar", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "ion-buttons");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "ion-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](23, "ion-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](28, NewsDetailPage_ion_button_28_Template, 5, 3, "ion-button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](29, NewsDetailPage_ion_button_29_Template, 5, 3, "ion-button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.article.source.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("scrollEvents", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("src", ctx.article.urlToImage);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](16, 10, ctx.article.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.article.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.article.author);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????propertyInterpolate"]("href", ctx.article.url);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"](" \xA0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind1"](26, 12, "NEWS-DETAIL.visit"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", !ctx.isFavourite(ctx.article));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.isFavourite(ctx.article));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonImg"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonText"]],
        pipes: [_pipes_title_nosource_pipe__WEBPACK_IMPORTED_MODULE_6__["TitleNosourcePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_8__["DateConvertPipe"]],
        styles: ["ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n}\n\nion-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.small-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n}\n\n.footer-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nion-list[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\nion-list-header[_ngcontent-%COMP%] {\n  padding: 0 0 8px;\n  font-size: 16px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  padding-left: 6px;\n}\n\n.detail-img[_ngcontent-%COMP%] {\n  border-bottom-style: solid;\n  border-bottom-width: 4px;\n  border-bottom-color: var(--ion-color-tertiary);\n}\n\n.source-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-tertiary);\n}\n\n.author-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25ld3MtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQyIsImZpbGUiOiJuZXdzLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc21hbGwtdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmZvb3Rlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIHBhZGRpbmc6IDAgMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG5cbi5kZXRhaWwtaW1nIHtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDRweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cblxuLnNvdXJjZS10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG5cbi5hdXRob3ItdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "TqpA":
    /*!*********************************************!*\
      !*** ./src/app/pipes/title-convert.pipe.ts ***!
      \*********************************************/

    /*! exports provided: TitleConvertPipe */

    /***/
    function TqpA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleConvertPipe", function () {
        return TitleConvertPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TitleConvertPipe = /*#__PURE__*/function () {
        function TitleConvertPipe() {
          _classCallCheck(this, TitleConvertPipe);
        }

        _createClass(TitleConvertPipe, [{
          key: "transform",
          value: function transform(value) {
            var shorterStrLength = 90;
            return value.substring(0, shorterStrLength).concat("...");
          }
        }]);

        return TitleConvertPipe;
      }();

      TitleConvertPipe.??fac = function TitleConvertPipe_Factory(t) {
        return new (t || TitleConvertPipe)();
      };

      TitleConvertPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
        name: "titleConvert",
        type: TitleConvertPipe,
        pure: true
      });
      /***/
    },

    /***/
    "Wgwc":
    /*!*****************************************!*\
      !*** ./node_modules/dayjs/dayjs.min.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function Wgwc(module, exports, __webpack_require__) {
      !function (t, e) {
        true ? module.exports = e() : undefined;
      }(this, function () {
        "use strict";

        var t = "millisecond",
            e = "second",
            n = "minute",
            r = "hour",
            i = "day",
            s = "week",
            u = "month",
            a = "quarter",
            o = "year",
            f = "date",
            h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            d = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
            $ = function $(t, e, n) {
          var r = String(t);
          return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
        },
            l = {
          s: $,
          z: function z(t) {
            var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
            return (e <= 0 ? "+" : "-") + $(r, 2, "0") + ":" + $(i, 2, "0");
          },
          m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
                i = e.clone().add(r, u),
                s = n - i < 0,
                a = e.clone().add(r + (s ? -1 : 1), u);
            return +(-(r + (n - i) / (s ? i - a : a - i)) || 0);
          },
          a: function a(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          },
          p: function p(h) {
            return {
              M: u,
              y: o,
              w: s,
              d: i,
              D: f,
              h: r,
              m: n,
              s: e,
              ms: t,
              Q: a
            }[h] || String(h || "").toLowerCase().replace(/s$/, "");
          },
          u: function u(t) {
            return void 0 === t;
          }
        },
            y = "en",
            M = {};

        M[y] = d;

        var m = function m(t) {
          return t instanceof S;
        },
            D = function D(t, e, n) {
          var r;
          if (!t) return y;
          if ("string" == typeof t) M[t] && (r = t), e && (M[t] = e, r = t);else {
            var i = t.name;
            M[i] = t, r = i;
          }
          return !n && r && (y = r), r || !n && y;
        },
            v = function v(t, e) {
          if (m(t)) return t.clone();
          var n = "object" == typeof e ? e : {};
          return n.date = t, n.args = arguments, new S(n);
        },
            g = l;

        g.l = D, g.i = m, g.w = function (t, e) {
          return v(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
          });
        };

        var S = function () {
          function d(t) {
            this.$L = D(t.locale, null, !0), this.parse(t);
          }

          var $ = d.prototype;
          return $.parse = function (t) {
            this.$d = function (t) {
              var e = t.date,
                  n = t.utc;
              if (null === e) return new Date(NaN);
              if (g.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);

              if ("string" == typeof e && !/Z$/i.test(e)) {
                var r = e.match(h);

                if (r) {
                  var i = r[2] - 1 || 0,
                      s = (r[7] || "0").substring(0, 3);
                  return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                }
              }

              return new Date(e);
            }(t), this.$x = t.x || {}, this.init();
          }, $.init = function () {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
          }, $.$utils = function () {
            return g;
          }, $.isValid = function () {
            return !("Invalid Date" === this.$d.toString());
          }, $.isSame = function (t, e) {
            var n = v(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
          }, $.isAfter = function (t, e) {
            return v(t) < this.startOf(e);
          }, $.isBefore = function (t, e) {
            return this.endOf(e) < v(t);
          }, $.$g = function (t, e, n) {
            return g.u(t) ? this[e] : this.set(n, t);
          }, $.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }, $.valueOf = function () {
            return this.$d.getTime();
          }, $.startOf = function (t, a) {
            var h = this,
                c = !!g.u(a) || a,
                d = g.p(t),
                $ = function $(t, e) {
              var n = g.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
              return c ? n : n.endOf(i);
            },
                l = function l(t, e) {
              return g.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
            },
                y = this.$W,
                M = this.$M,
                m = this.$D,
                D = "set" + (this.$u ? "UTC" : "");

            switch (d) {
              case o:
                return c ? $(1, 0) : $(31, 11);

              case u:
                return c ? $(1, M) : $(0, M + 1);

              case s:
                var v = this.$locale().weekStart || 0,
                    S = (y < v ? y + 7 : y) - v;
                return $(c ? m - S : m + (6 - S), M);

              case i:
              case f:
                return l(D + "Hours", 0);

              case r:
                return l(D + "Minutes", 1);

              case n:
                return l(D + "Seconds", 2);

              case e:
                return l(D + "Milliseconds", 3);

              default:
                return this.clone();
            }
          }, $.endOf = function (t) {
            return this.startOf(t, !1);
          }, $.$set = function (s, a) {
            var h,
                c = g.p(s),
                d = "set" + (this.$u ? "UTC" : ""),
                $ = (h = {}, h[i] = d + "Date", h[f] = d + "Date", h[u] = d + "Month", h[o] = d + "FullYear", h[r] = d + "Hours", h[n] = d + "Minutes", h[e] = d + "Seconds", h[t] = d + "Milliseconds", h)[c],
                l = c === i ? this.$D + (a - this.$W) : a;

            if (c === u || c === o) {
              var y = this.clone().set(f, 1);
              y.$d[$](l), y.init(), this.$d = y.set(f, Math.min(this.$D, y.daysInMonth())).$d;
            } else $ && this.$d[$](l);

            return this.init(), this;
          }, $.set = function (t, e) {
            return this.clone().$set(t, e);
          }, $.get = function (t) {
            return this[g.p(t)]();
          }, $.add = function (t, a) {
            var f,
                h = this;
            t = Number(t);

            var c = g.p(a),
                d = function d(e) {
              var n = v(h);
              return g.w(n.date(n.date() + Math.round(e * t)), h);
            };

            if (c === u) return this.set(u, this.$M + t);
            if (c === o) return this.set(o, this.$y + t);
            if (c === i) return d(1);
            if (c === s) return d(7);
            var $ = (f = {}, f[n] = 6e4, f[r] = 36e5, f[e] = 1e3, f)[c] || 1,
                l = this.$d.getTime() + t * $;
            return g.w(l, this);
          }, $.subtract = function (t, e) {
            return this.add(-1 * t, e);
          }, $.format = function (t) {
            var e = this;
            if (!this.isValid()) return "Invalid Date";

            var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                r = g.z(this),
                i = this.$locale(),
                s = this.$H,
                u = this.$m,
                a = this.$M,
                o = i.weekdays,
                f = i.months,
                h = function h(t, r, i, s) {
              return t && (t[r] || t(e, n)) || i[r].substr(0, s);
            },
                d = function d(t) {
              return g.s(s % 12 || 12, t, "0");
            },
                $ = i.meridiem || function (t, e, n) {
              var r = t < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            },
                l = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: a + 1,
              MM: g.s(a + 1, 2, "0"),
              MMM: h(i.monthsShort, a, f, 3),
              MMMM: h(f, a),
              D: this.$D,
              DD: g.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: h(i.weekdaysMin, this.$W, o, 2),
              ddd: h(i.weekdaysShort, this.$W, o, 3),
              dddd: o[this.$W],
              H: String(s),
              HH: g.s(s, 2, "0"),
              h: d(1),
              hh: d(2),
              a: $(s, u, !0),
              A: $(s, u, !1),
              m: String(u),
              mm: g.s(u, 2, "0"),
              s: String(this.$s),
              ss: g.s(this.$s, 2, "0"),
              SSS: g.s(this.$ms, 3, "0"),
              Z: r
            };

            return n.replace(c, function (t, e) {
              return e || l[t] || r.replace(":", "");
            });
          }, $.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, $.diff = function (t, f, h) {
            var c,
                d = g.p(f),
                $ = v(t),
                l = 6e4 * ($.utcOffset() - this.utcOffset()),
                y = this - $,
                M = g.m(this, $);
            return M = (c = {}, c[o] = M / 12, c[u] = M, c[a] = M / 3, c[s] = (y - l) / 6048e5, c[i] = (y - l) / 864e5, c[r] = y / 36e5, c[n] = y / 6e4, c[e] = y / 1e3, c)[d] || y, h ? M : g.a(M);
          }, $.daysInMonth = function () {
            return this.endOf(u).$D;
          }, $.$locale = function () {
            return M[this.$L];
          }, $.locale = function (t, e) {
            if (!t) return this.$L;
            var n = this.clone(),
                r = D(t, e, !0);
            return r && (n.$L = r), n;
          }, $.clone = function () {
            return g.w(this.$d, this);
          }, $.toDate = function () {
            return new Date(this.valueOf());
          }, $.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }, $.toISOString = function () {
            return this.$d.toISOString();
          }, $.toString = function () {
            return this.$d.toUTCString();
          }, d;
        }(),
            p = S.prototype;

        return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function (t) {
          p[t[1]] = function (e) {
            return this.$g(e, t[0], t[1]);
          };
        }), v.extend = function (t, e) {
          return t.$i || (t(e, S, v), t.$i = !0), v;
        }, v.locale = D, v.isDayjs = m, v.unix = function (t) {
          return v(1e3 * t);
        }, v.en = M[y], v.Ls = M, v.p = {}, v;
      });
      /***/
    },

    /***/
    "erOe":
    /*!*******************************************************************!*\
      !*** ./src/app/components/article-list/article-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ArticleListComponent */

    /***/
    function erOe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function () {
        return ArticleListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _pipes_title_convert_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/title-convert.pipe */
      "TqpA");
      /* harmony import */


      var _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/date-convert.pipe */
      "AZR4");

      function ArticleListComponent_ion_card_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ion-thumbnail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ion-label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](8, "titleConvert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "dateConvert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx_r0.article.urlToImage != undefined || null ? ctx_r0.article.urlToImage : "assets/imgs/not-found.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx_r0.article.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](8, 4, ctx_r0.article.title), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 6, ctx_r0.article.publishedAt));
        }
      }

      var ArticleListComponent = function ArticleListComponent() {
        _classCallCheck(this, ArticleListComponent);
      };

      ArticleListComponent.??fac = function ArticleListComponent_Factory(t) {
        return new (t || ArticleListComponent)();
      };

      ArticleListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ArticleListComponent,
        selectors: [["app-article-list"]],
        inputs: {
          article: "article"
        },
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["size-xs", "3", 1, "image-col"], [2, "width", "140px", "height", "224px", 3, "src", "alt"], ["size-xs", "9", 1, "text-col"], [1, "news-text", "ion-text-wrap"], [1, "small-text"]],
        template: function ArticleListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ArticleListComponent_ion_card_0_Template, 12, 8, "ion-card", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.article.urlToImage);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonThumbnail"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"]],
        pipes: [_pipes_title_convert_pipe__WEBPACK_IMPORTED_MODULE_3__["TitleConvertPipe"], _pipes_date_convert_pipe__WEBPACK_IMPORTED_MODULE_4__["DateConvertPipe"]],
        styles: ["ion-label[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-contrast);\n  font-size: 14px;\n}\n\nion-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 89.2px;\n  min-height: 68.4px;\n  height: 100%;\n  border-right-style: solid;\n  border-right-width: 2px;\n  border-right-color: var(--ion-color-tertiary);\n}\n\n.image-col[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.text-col[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-light);\n}\n\n.small-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  white-space: nowrap;\n  margin-left: 4px;\n}\n\n.news-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: 4px;\n  color: var(ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FydGljbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQ0FBc0M7QUFDeEMiLCJmaWxlIjoiYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA4OS4ycHg7XG4gIG1pbi1oZWlnaHQ6IDY4LjRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xufVxuXG4uaW1hZ2UtY29sIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRleHQtY29sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnNtYWxsLXRleHQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5uZXdzLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBjb2xvcjogdmFyKGlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "iTUp":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function iTUp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _date_convert_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./date-convert.pipe */
      "AZR4");
      /* harmony import */


      var _title_convert_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./title-convert.pipe */
      "TqpA");
      /* harmony import */


      var _title_nosource_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./title-nosource.pipe */
      "HBRp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: PipesModule
      });
      PipesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        factory: function PipesModule_Factory(t) {
          return new (t || PipesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](PipesModule, {
          declarations: [_date_convert_pipe__WEBPACK_IMPORTED_MODULE_2__["DateConvertPipe"], _title_convert_pipe__WEBPACK_IMPORTED_MODULE_3__["TitleConvertPipe"], _title_nosource_pipe__WEBPACK_IMPORTED_MODULE_4__["TitleNosourcePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]],
          exports: [_date_convert_pipe__WEBPACK_IMPORTED_MODULE_2__["DateConvertPipe"], _title_convert_pipe__WEBPACK_IMPORTED_MODULE_3__["TitleConvertPipe"], _title_nosource_pipe__WEBPACK_IMPORTED_MODULE_4__["TitleNosourcePipe"]]
        });
      })();
      /***/

    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./article-list/article-list.component */
      "erOe");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "iTUp");
      /* harmony import */


      var _page_refresh_page_refresh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./page-refresh/page-refresh.component */
      "vmec");
      /* harmony import */


      var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./progress-bar/progress-bar.component */
      "uSqO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // ngx node modules
      // Component & pipe modules


      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](ComponentsModule, {
          declarations: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListComponent"], _page_refresh_page_refresh_component__WEBPACK_IMPORTED_MODULE_5__["PageRefreshComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          exports: [_article_list_article_list_component__WEBPACK_IMPORTED_MODULE_3__["ArticleListComponent"], _page_refresh_page_refresh_component__WEBPACK_IMPORTED_MODULE_5__["PageRefreshComponent"], _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_6__["ProgressBarComponent"]]
        });
      })();
      /***/

    },

    /***/
    "uSqO":
    /*!*******************************************************************!*\
      !*** ./src/app/components/progress-bar/progress-bar.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProgressBarComponent */

    /***/
    function uSqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function () {
        return ProgressBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ProgressBarComponent = function ProgressBarComponent() {
        _classCallCheck(this, ProgressBarComponent);
      };

      ProgressBarComponent.??fac = function ProgressBarComponent_Factory(t) {
        return new (t || ProgressBarComponent)();
      };

      ProgressBarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProgressBarComponent,
        selectors: [["app-progress-bar"]],
        decls: 7,
        vars: 3,
        consts: [["type", "indeterminate", "color", "secondary"]],
        template: function ProgressBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ion-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ion-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ion-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "ion-progress-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 1, "PROGRESS_BAR.title"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonProgressBar"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "vmec":
    /*!*******************************************************************!*\
      !*** ./src/app/components/page-refresh/page-refresh.component.ts ***!
      \*******************************************************************/

    /*! exports provided: PageRefreshComponent */

    /***/
    function vmec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageRefreshComponent", function () {
        return PageRefreshComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var PageRefreshComponent = function PageRefreshComponent() {
        _classCallCheck(this, PageRefreshComponent);
      };

      PageRefreshComponent.??fac = function PageRefreshComponent_Factory(t) {
        return new (t || PageRefreshComponent)();
      };

      PageRefreshComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: PageRefreshComponent,
        selectors: [["app-page-refresh"]],
        decls: 2,
        vars: 0,
        consts: [["slot", "fixed"], ["pullingIcon", "arrow-down", "pullingText", "Pull to refresh", "refreshingSpinner", "dots", "refreshingText", "Refreshing..."]],
        template: function PageRefreshComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ion-refresher", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "ion-refresher-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRefresherContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXJlZnJlc2guY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~pages-news-detail-news-detail-module~pages-tabs-tabs-module-es5.js.map