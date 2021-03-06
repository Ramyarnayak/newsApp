(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/ramya/Desktop/ionic-angular-news-app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "8rnP":
    /*!********************************************!*\
      !*** ./src/app/providers/theme.service.ts ***!
      \********************************************/

    /*! exports provided: ThemeService */

    /***/
    function rnP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1"); // enable dark or light mode from html toggle switch event via changeThemeMode() function


      var ThemeService = /*#__PURE__*/function () {
        function ThemeService(rendererFactory, storage, document) {
          _classCallCheck(this, ThemeService);

          this.rendererFactory = rendererFactory;
          this.storage = storage;
          this.document = document;
          this.renderer = this.rendererFactory.createRenderer(null, null);
        }

        _createClass(ThemeService, [{
          key: "enableDark",
          value: function enableDark() {
            this.renderer.addClass(this.document.body, "dark-theme");
            this.storage.set("dark-theme", true);
            this.darkMode = true;
          }
        }, {
          key: "enableLight",
          value: function enableLight() {
            this.renderer.removeClass(this.document.body, "dark-theme");
            this.storage.set("dark-theme", false);
            this.darkMode = false;
          }
        }, {
          key: "changeThemeMode",
          value: function changeThemeMode(e) {
            e.detail.checked ? this.enableDark() : this.enableLight();
          }
        }]);

        return ThemeService;
      }();

      ThemeService.??fac = function ThemeService_Factory(t) {
        return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      ThemeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ThemeService,
        factory: ThemeService.??fac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        API_URL: "https://newsapi.org/v2",
        API_KEY: "098bb706d3d042b6a5005147c776307f"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "RHxm":
    /*!***********************************************!*\
      !*** ./src/app/providers/language.service.ts ***!
      \***********************************************/

    /*! exports provided: LanguageService */

    /***/
    function RHxm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
        return LanguageService;
      });
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LNG_KEY = "SELECTED_LANGUAGE";

      var LanguageService = /*#__PURE__*/function () {
        function LanguageService(translate, storage, plt) {
          _classCallCheck(this, LanguageService);

          this.translate = translate;
          this.storage = storage;
          this.plt = plt;
          this.selected = "en";
        } // sets default language as browser language. Store language choice


        _createClass(LanguageService, [{
          key: "setInitialAppLanguage",
          value: function setInitialAppLanguage() {
            var _this = this;

            var language = this.translate.getBrowserLang();
            this.translate.setDefaultLang(language);
            this.storage.get(LNG_KEY).then(function (val) {
              if (val) {
                _this.setLanguage(val);

                _this.selected = val;
              }
            });
          } // lng can be 'en', 'fr' or 'sp'

        }, {
          key: "setLanguage",
          value: function setLanguage(lng) {
            this.translate.use(lng);
            this.selected = lng;
            this.storage.set(LNG_KEY, lng);
          }
        }]);

        return LanguageService;
      }();

      LanguageService.??fac = function LanguageService_Factory(t) {
        return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      };

      LanguageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: LanguageService,
        factory: LanguageService.??fac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _providers_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./providers/network.service */
      "To7m");
      /* harmony import */


      var _providers_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./providers/theme.service */
      "8rnP");
      /* harmony import */


      var _providers_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./providers/language.service */
      "RHxm");
      /* harmony import */


      var _providers_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./providers/storage.service */
      "rAje");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb"); // ionic-native & ngx node modules
      // Services


      function AppComponent_ion_menu_toggle_10_ion_label_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", p_r2.title, " ");
        }
      }

      function AppComponent_ion_menu_toggle_10_ion_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", p_r2.titlefr, " ");
        }
      }

      function AppComponent_ion_menu_toggle_10_ion_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", p_r2.titlesp, " ");
        }
      }

      function AppComponent_ion_menu_toggle_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "ion-menu-toggle", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "ion-item", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](2, "ion-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](3, AppComponent_ion_menu_toggle_10_ion_label_3_Template, 2, 1, "ion-label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](4, AppComponent_ion_menu_toggle_10_ion_label_4_Template, 2, 1, "ion-label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](5, AppComponent_ion_menu_toggle_10_ion_label_5_Template, 2, 1, "ion-label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        }

        if (rf & 2) {
          var p_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("routerLink", p_r2.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????classMap"](p_r2.menuIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("name", p_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r0.language === "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r0.language === "fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx_r0.language === "sp");
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, router, splashScreen, statusBar, themeService, networkService, toastController, languageService, storageService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.router = router;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.themeService = themeService;
          this.networkService = networkService;
          this.toastController = toastController;
          this.languageService = languageService;
          this.storageService = storageService;
          this.text = "";
          this.language = this.languageService.selected;
          this.appPages = [{
            title: "News",
            titlefr: "Nouvelles",
            titlesp: "Noticias",
            url: "/app/tabs/news",
            icon: "list",
            menuIcon: "menuIconNews"
          }, {
            title: "Categories",
            titlefr: "Categories",
            titlesp: "Categorias",
            url: "/app/tabs/categories",
            icon: "options",
            menuIcon: "menuIconCategories"
          }, {
            title: "Favourites",
            titlefr: "Favoris",
            titlesp: "Favoritas",
            url: "/app/tabs/favourites",
            icon: "heart",
            menuIcon: "menuIconFavourites"
          }, {
            title: "About",
            titlefr: "?? Propos",
            titlesp: "Sobre esta app",
            url: "/app/tabs/about",
            icon: "information-circle",
            menuIcon: "menuIconAbout"
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              _this2.statusBar.styleDefault();

              _this2.splashScreen.hide();

              _this2.languageService.setInitialAppLanguage();

              _this2.darkStartMode();
            });
          }
        }, {
          key: "darkStartMode",
          value: function darkStartMode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.storageService.getStoredData("dark-theme").then(function (val) {
                        _this3.darkMode = JSON.parse(val);
                        _this3.darkMode === true ? _this3.themeService.enableDark() : _this3.themeService.enableLight();
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "languageChange",
          value: function languageChange() {
            this.languageService.setLanguage(this.language);
          }
        }, {
          key: "closeMenu",
          value: function closeMenu(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.menuCtrl.close();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_providers_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_providers_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_providers_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](_providers_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]));
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 35,
        vars: 22,
        consts: [["contentId", "menu-content"], ["side", "start", "contentId", "menu-content"], ["color", "primary"], ["color", "tertiary"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["name", "contrast", "slot", "start"], ["slot", "end", 3, "ngModel", "checked", "ngModelChange", "ionChange"], ["name", "globe", "slot", "start", 1, "iconGlobe"], [3, "ngModel", "ngModelChange", "ionChange"], ["Language", ""], ["option", "", "value", "en", "selected", ""], ["option", "", "value", "sp"], ["option", "", "value", "fr"], ["id", "menu-content"], ["auto-hide", "false"], ["routerLinkActive", "active", "routerDirection", "root", 3, "routerLink"], ["slot", "start", 3, "name"], [4, "ngIf"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "ion-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "ion-split-pane", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](2, "ion-menu", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "ion-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "ion-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](5, "ion-title", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](8, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](10, AppComponent_ion_menu_toggle_10_Template, 6, 7, "ion-menu-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](11, "ion-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](13, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](14, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](17, "ion-toggle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("ngModelChange", function AppComponent_Template_ion_toggle_ngModelChange_17_listener($event) {
              return ctx.darkMode = $event;
            })("ionChange", function AppComponent_Template_ion_toggle_ionChange_17_listener($event) {
              return ctx.themeService.changeThemeMode($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](18, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](19, "ion-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](20, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](23, "ion-select", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("ngModelChange", function AppComponent_Template_ion_select_ngModelChange_23_listener($event) {
              return ctx.language = $event;
            })("ionChange", function AppComponent_Template_ion_select_ionChange_23_listener() {
              return ctx.languageChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](25, "ion-select-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](28, "ion-select-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](31, "ion-select-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????element"](34, "ion-router-outlet", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](7, 10, "MENU.title"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx.appPages);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](16, 12, "MENU.Label-darkMode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngModel", ctx.darkMode)("checked", ctx.darkMode);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](22, 14, "MENU.Label-language"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngModel", ctx.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](27, 16, "MENU.LangOption-English"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](30, 18, "MENU.LangOption-Spanish"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind1"](33, 20, "MENU.LangOption-French"));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        styles: [".active {\n  color: var(--ion-color-primary);\n}\n\n.active ion-icon {\n  color: var(--ion-color-secondary);\n}\n\n.iconGlobe {\n  color: var(--ion-color-success);\n}\n\nion-toggle {\n  color: var(--ion-color-secondary) !important;\n}\n\n.icon {\n  vertical-align: middle;\n  color: var(--ion-color-tertiary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUZBO0VBR0ksaUNBQWlDO0FBR3JDOztBQUNBO0VBQ0MsK0JBQStCO0FBRWhDOztBQUNBO0VBQ0MsNENBQTRDO0FBRTdDOztBQUNBO0VBQ0Msc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUVqQyIsImZpbGUiOiJhcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHR9XG59XG5cbi5pY29uR2xvYmUge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG5pb24tdG9nZ2xlIHtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4iXX0= */"],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "To7m":
    /*!**********************************************!*\
      !*** ./src/app/providers/network.service.ts ***!
      \**********************************************/

    /*! exports provided: NetworkService */

    /***/
    function To7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
        return NetworkService;
      });
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NetworkService = /*#__PURE__*/function () {
        function NetworkService(network, platform) {
          _classCallCheck(this, NetworkService);

          this.network = network;
          this.platform = platform;
          this.connected = undefined;
          this.connected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            observer.next(true);
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));

          if (this.platform.is("cordova")) {
            // on phone device
            this.connected = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.network.onConnect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true)), this.network.onDisconnect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false)));
          } else {
            // on browser
            this.connected = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "online").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "offline").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false)));
          }
        }

        _createClass(NetworkService, [{
          key: "getNetworkType",
          value: function getNetworkType() {
            return this.network.type;
          } // returns network connected true or false

        }, {
          key: "getNetworkStatus",
          value: function getNetworkStatus() {
            return this.connected;
          }
        }, {
          key: "refreshPage",
          value: function refreshPage(event) {
            console.log("Begin async page refresh");
            setTimeout(function () {
              console.log("Async page refresh complete");
              event.target.complete();
            }, 2000);
          }
        }]);

        return NetworkService;
      }();

      NetworkService.??fac = function NetworkService_Factory(t) {
        return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      };

      NetworkService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: NetworkService,
        factory: NetworkService.??fac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/network/ngx */
      "kwrG");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "54vc");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "VYYF");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // Core imports
      // Components and modules
      // Third party imports
      // exported translations loader function that fetches JSON files from the assets folder


      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, "assets/i18n/", ".json");
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]]
        });
      })();
      /***/

    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "rAje":
    /*!**********************************************!*\
      !*** ./src/app/providers/storage.service.ts ***!
      \**********************************************/

    /*! exports provided: StorageService */

    /***/
    function rAje(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(storage, toastContr) {
          _classCallCheck(this, StorageService);

          this.storage = storage;
          this.toastContr = toastContr; // initialise a store of news articles as an empty array

          this.news = [];
        }

        _createClass(StorageService, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.storage.clear();
            this.loadFavourites();
          }
        }, {
          key: "storeData",
          value: function storeData(key, value) {
            try {
              this.storage.set(key, value); // const result: string = await this.storage.get(key);
              // return true;
            } catch (err) {
              alert("Error storing data: " + err); // return false;
            }
          }
        }, {
          key: "getStoredData",
          value: function getStoredData(key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      return _context3.abrupt("return", this.storage.get(key));

                    case 4:
                      _context3.prev = 4;
                      _context3.t0 = _context3["catch"](0);
                      alert("Error getting stored data: " + _context3.t0);
                      return _context3.abrupt("return", null);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 4]]);
            }));
          }
        }, {
          key: "storeCountryCode",
          value: function storeCountryCode(checkedCountryCode) {
            this.storage.set('userCountry', checkedCountryCode);
          }
        }, {
          key: "addToFavourites",
          value: function addToFavourites(article) {
            !this.isFavourite(article) ? this.storeArticle(article) : console.log("article already exists in storage");
          } // add new article to beginning of array so in date order. Add array to storage.

        }, {
          key: "storeArticle",
          value: function storeArticle(article) {
            console.log("news array: ", this.news);
            this.news.unshift(article);
            console.log("article added to news array: ", this.news);
            this.storage.set("favourites", this.news);
            this.storeData("favourites", JSON.stringify(this.news));
            this.presentToast("Article added to favourites");
          } // remove article from news array and storage.

        }, {
          key: "removeFromFavourites",
          value: function removeFromFavourites(article) {
            this.news = this.news.filter(function (data) {
              return data.title !== article.title;
            });
            this.storeData("favourites", JSON.stringify(this.news));
            console.log("article removed from news array: ", this.news);
            this.presentToast("Article deleted from favourites");
          } // use indexOf to test if article exists in favourites array or not.

        }, {
          key: "isFavourite",
          value: function isFavourite(article) {
            return this.news.indexOf(article) !== -1;
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastContr.create({
                        message: message,
                        position: "middle",
                        duration: 2000
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          } // get array of articles from storage to list on favourites page.

        }, {
          key: "loadFavourites",
          value: function loadFavourites() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var favourites;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.storage.get("favourites");

                    case 2:
                      favourites = _context5.sent;
                      console.log("favourites in storage: ", favourites);

                      if (favourites) {
                        this.news = favourites;
                      }

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return StorageService;
      }();

      StorageService.??fac = function StorageService_Factory(t) {
        return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]));
      };

      StorageService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: StorageService,
        factory: StorageService.??fac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "/app/tabs/news",
        pathMatch: "full"
      }, {
        path: "app",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-tabs-tabs-module */
          [__webpack_require__.e("default~pages-news-detail-news-detail-module~pages-tabs-tabs-module"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/tabs/tabs.module */
          "qiIP")).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: "news-detail",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-news-detail-news-detail-module */
          "default~pages-news-detail-news-detail-module~pages-tabs-tabs-module").then(__webpack_require__.bind(null,
          /*! ./pages/news-detail/news-detail.module */
          "HasH")).then(function (m) {
            return m.NewsDetailPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"]
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map