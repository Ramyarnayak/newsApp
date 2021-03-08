(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ramya/Desktop/ionic-angular-news-app/src/main.ts */"zUnb");


/***/ }),

/***/ "8rnP":
/*!********************************************!*\
  !*** ./src/app/providers/theme.service.ts ***!
  \********************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");





// enable dark or light mode from html toggle switch event via changeThemeMode() function
class ThemeService {
    constructor(rendererFactory, storage, document) {
        this.rendererFactory = rendererFactory;
        this.storage = storage;
        this.document = document;
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    enableDark() {
        this.renderer.addClass(this.document.body, "dark-theme");
        this.storage.set("dark-theme", true);
        this.darkMode = true;
    }
    enableLight() {
        this.renderer.removeClass(this.document.body, "dark-theme");
        this.storage.set("dark-theme", false);
        this.darkMode = false;
    }
    changeThemeMode(e) {
        e.detail.checked ? this.enableDark() : this.enableLight();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    API_URL: "https://newsapi.org/v2",
    API_KEY: "098bb706d3d042b6a5005147c776307f",
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

/***/ "RHxm":
/*!***********************************************!*\
  !*** ./src/app/providers/language.service.ts ***!
  \***********************************************/
/*! exports provided: LanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageService", function() { return LanguageService; });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");







const LNG_KEY = "SELECTED_LANGUAGE";
class LanguageService {
    constructor(translate, storage, plt) {
        this.translate = translate;
        this.storage = storage;
        this.plt = plt;
        this.selected = "en";
    }
    // sets default language as browser language. Store language choice
    setInitialAppLanguage() {
        const language = this.translate.getBrowserLang();
        this.translate.setDefaultLang(language);
        this.storage.get(LNG_KEY).then((val) => {
            if (val) {
                this.setLanguage(val);
                this.selected = val;
            }
        });
    }
    // lng can be 'en', 'fr' or 'sp'
    setLanguage(lng) {
        this.translate.use(lng);
        this.selected = lng;
        this.storage.set(LNG_KEY, lng);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_0__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
LanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _providers_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/network.service */ "To7m");
/* harmony import */ var _providers_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/theme.service */ "8rnP");
/* harmony import */ var _providers_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/language.service */ "RHxm");
/* harmony import */ var _providers_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./providers/storage.service */ "rAje");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



// ionic-native & ngx node modules


// Services
















function AppComponent_ion_menu_toggle_10_ion_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r2.title, " ");
} }
function AppComponent_ion_menu_toggle_10_ion_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r2.titlefr, " ");
} }
function AppComponent_ion_menu_toggle_10_ion_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", p_r2.titlesp, " ");
} }
function AppComponent_ion_menu_toggle_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-menu-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, AppComponent_ion_menu_toggle_10_ion_label_3_Template, 2, 1, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AppComponent_ion_menu_toggle_10_ion_label_4_Template, 2, 1, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AppComponent_ion_menu_toggle_10_ion_label_5_Template, 2, 1, "ion-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", p_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](p_r2.menuIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("name", p_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.language === "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.language === "fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.language === "sp");
} }
class AppComponent {
    constructor(platform, router, splashScreen, statusBar, themeService, networkService, toastController, languageService, storageService) {
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
        this.appPages = [
            {
                title: "News",
                titlefr: "Nouvelles",
                titlesp: "Noticias",
                url: "/app/tabs/news",
                icon: "list",
                menuIcon: "menuIconNews",
            },
            {
                title: "Categories",
                titlefr: "Categories",
                titlesp: "Categorias",
                url: "/app/tabs/categories",
                icon: "options",
                menuIcon: "menuIconCategories",
            },
            {
                title: "Favourites",
                titlefr: "Favoris",
                titlesp: "Favoritas",
                url: "/app/tabs/favourites",
                icon: "heart",
                menuIcon: "menuIconFavourites",
            },
            {
                title: "About",
                titlefr: "À Propos",
                titlesp: "Sobre esta app",
                url: "/app/tabs/about",
                icon: "information-circle",
                menuIcon: "menuIconAbout",
            },
        ];
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.languageService.setInitialAppLanguage();
            this.darkStartMode();
        });
    }
    darkStartMode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storageService.getStoredData("dark-theme").then((val) => {
                this.darkMode = JSON.parse(val);
                this.darkMode === true
                    ? this.themeService.enableDark()
                    : this.themeService.enableLight();
            });
        });
    }
    languageChange() {
        this.languageService.setLanguage(this.language);
    }
    closeMenu(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.menuCtrl.close();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_providers_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_providers_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_providers_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_providers_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 35, vars: 22, consts: [["contentId", "menu-content"], ["side", "start", "contentId", "menu-content"], ["color", "primary"], ["color", "tertiary"], ["auto-hide", "false", 4, "ngFor", "ngForOf"], ["name", "contrast", "slot", "start"], ["slot", "end", 3, "ngModel", "checked", "ngModelChange", "ionChange"], ["name", "globe", "slot", "start", 1, "iconGlobe"], [3, "ngModel", "ngModelChange", "ionChange"], ["Language", ""], ["option", "", "value", "en", "selected", ""], ["option", "", "value", "sp"], ["option", "", "value", "fr"], ["id", "menu-content"], ["auto-hide", "false"], ["routerLinkActive", "active", "routerDirection", "root", 3, "routerLink"], ["slot", "start", 3, "name"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-split-pane", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, AppComponent_ion_menu_toggle_10_Template, 6, 7, "ion-menu-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_ion_toggle_ngModelChange_17_listener($event) { return ctx.darkMode = $event; })("ionChange", function AppComponent_Template_ion_toggle_ionChange_17_listener($event) { return ctx.themeService.changeThemeMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "ion-select", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_ion_select_ngModelChange_23_listener($event) { return ctx.language = $event; })("ionChange", function AppComponent_Template_ion_select_ionChange_23_listener() { return ctx.languageChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "ion-select-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "ion-select-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "ion-select-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](34, "ion-router-outlet", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 10, "MENU.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.appPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 12, "MENU.Label-darkMode"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.darkMode)("checked", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 14, "MENU.Label-language"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 16, "MENU.LangOption-English"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 18, "MENU.LangOption-Spanish"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 20, "MENU.LangOption-French"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSplitPane"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenu"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonMenuToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".active {\n  color: var(--ion-color-primary);\n}\n\n.active ion-icon {\n  color: var(--ion-color-secondary);\n}\n\n.iconGlobe {\n  color: var(--ion-color-success);\n}\n\nion-toggle {\n  color: var(--ion-color-secondary) !important;\n}\n\n.icon {\n  vertical-align: middle;\n  color: var(--ion-color-tertiary);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUZBO0VBR0ksaUNBQWlDO0FBR3JDOztBQUNBO0VBQ0MsK0JBQStCO0FBRWhDOztBQUNBO0VBQ0MsNENBQTRDO0FBRTdDOztBQUNBO0VBQ0Msc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUVqQyIsImZpbGUiOiJhcHAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXHR9XG59XG5cbi5pY29uR2xvYmUge1xuXHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG5pb24tdG9nZ2xlIHtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "To7m":
/*!**********************************************!*\
  !*** ./src/app/providers/network.service.ts ***!
  \**********************************************/
/*! exports provided: NetworkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkService", function() { return NetworkService; });
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");







class NetworkService {
    constructor(network, platform) {
        this.network = network;
        this.platform = platform;
        this.connected = undefined;
        this.connected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            observer.next(true);
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true));
        if (this.platform.is("cordova")) {
            // on phone device
            this.connected = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.network.onConnect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true)), this.network.onDisconnect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false)));
        }
        else {
            // on browser
            this.connected = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "online").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, "offline").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(false)));
        }
    }
    getNetworkType() {
        return this.network.type;
    }
    // returns network connected true or false
    getNetworkStatus() {
        return this.connected;
    }
    refreshPage(event) {
        console.log("Begin async page refresh");
        setTimeout(() => {
            console.log("Async page refresh complete");
            event.target.complete();
        }, 2000);
    }
}
NetworkService.ɵfac = function NetworkService_Factory(t) { return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
NetworkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NetworkService, factory: NetworkService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
// Core imports





// Components and modules


// Third party imports










// exported translations loader function that fetches JSON files from the assets folder
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, "assets/i18n/", ".json");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__["Network"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"],
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]] }); })();


/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "rAje":
/*!**********************************************!*\
  !*** ./src/app/providers/storage.service.ts ***!
  \**********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class StorageService {
    constructor(storage, toastContr) {
        this.storage = storage;
        this.toastContr = toastContr;
        // initialise a store of news articles as an empty array
        this.news = [];
    }
    ngOnInit() {
        this.storage.clear();
        this.loadFavourites();
    }
    storeData(key, value) {
        try {
            this.storage.set(key, value);
            // const result: string = await this.storage.get(key);
            // return true;
        }
        catch (err) {
            alert("Error storing data: " + err);
            // return false;
        }
    }
    getStoredData(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return this.storage.get(key);
            }
            catch (err) {
                alert("Error getting stored data: " + err);
                return null;
            }
        });
    }
    storeCountryCode(checkedCountryCode) {
        this.storage.set('userCountry', checkedCountryCode);
    }
    addToFavourites(article) {
        !this.isFavourite(article)
            ? this.storeArticle(article)
            : console.log("article already exists in storage");
    }
    // add new article to beginning of array so in date order. Add array to storage.
    storeArticle(article) {
        console.log("news array: ", this.news);
        this.news.unshift(article);
        console.log("article added to news array: ", this.news);
        this.storage.set("favourites", this.news);
        this.storeData("favourites", JSON.stringify(this.news));
        this.presentToast("Article added to favourites");
    }
    // remove article from news array and storage.
    removeFromFavourites(article) {
        this.news = this.news.filter((data) => data.title !== article.title);
        this.storeData("favourites", JSON.stringify(this.news));
        console.log("article removed from news array: ", this.news);
        this.presentToast("Article deleted from favourites");
    }
    // use indexOf to test if article exists in favourites array or not.
    isFavourite(article) {
        return this.news.indexOf(article) !== -1;
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastContr.create({
                message,
                position: "middle",
                duration: 2000,
            });
            toast.present();
        });
    }
    // get array of articles from storage to list on favourites page.
    loadFavourites() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const favourites = yield this.storage.get("favourites");
            console.log("favourites in storage: ", favourites);
            if (favourites) {
                this.news = favourites;
            }
        });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: "",
        redirectTo: "/app/tabs/news",
        pathMatch: "full",
    },
    {
        path: "app",
        loadChildren: () => Promise.all(/*! import() | pages-tabs-tabs-module */[__webpack_require__.e("default~pages-news-detail-news-detail-module~pages-tabs-tabs-module"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then((m) => m.TabsPageModule),
    },
    {
        path: "news-detail",
        loadChildren: () => __webpack_require__.e(/*! import() | pages-news-detail-news-detail-module */ "default~pages-news-detail-news-detail-module~pages-tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./pages/news-detail/news-detail.module */ "HasH")).then((m) => m.NewsDetailPageModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.log(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map