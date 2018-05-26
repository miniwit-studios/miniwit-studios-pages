webpackJsonp([0],{

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(4);
var router_1 = __webpack_require__(151);
var games_1 = __webpack_require__(415);
var shared_module_1 = __webpack_require__(152);
exports.routerConfig = [
    { path: '', component: games_1.GamesComponent }
];
var module_exports = [games_1.GamesComponent];
var GamesModule = (function () {
    function GamesModule() {
    }
    GamesModule = __decorate([
        core_1.NgModule({
            declarations: module_exports.slice(),
            imports: [router_1.RouterModule.forChild(exports.routerConfig), shared_module_1.SharedModule.forRoot()],
            exports: module_exports.slice()
        })
    ], GamesModule);
    return GamesModule;
}());
exports.GamesModule = GamesModule;


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(4);
var components_1 = __webpack_require__(20);
var GamesComponent = (function (_super) {
    __extends(GamesComponent, _super);
    function GamesComponent() {
        return _super.call(this) || this;
    }
    GamesComponent = __decorate([
        core_1.Component({
            template: __webpack_require__(416),
            styles: [__webpack_require__(417)]
        }),
        __metadata("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}(components_1.ComponentBase));
exports.GamesComponent = GamesComponent;


/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <h1 class=\"mt-3\">Games</h1>\r\n            \r\n            <p>This is the lazy-loaded games component!</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(418);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = ""

/***/ })

});
//# sourceMappingURL=0.map