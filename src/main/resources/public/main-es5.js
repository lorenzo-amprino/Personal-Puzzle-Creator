(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-dashboard></app-dashboard>\r\n<div class=\"container mt-3\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/dashboard/dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/dashboard/dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" routerLink=\"/create\">Puzzle <span class=\"sr-only\">(current)</span></a>\n      </div>\n      <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link active\" routerLink=\"/rivista\">Crea Rivista <span class=\"sr-only\"></span></a>\n      </div>\n    </div>\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" routerLink=\"/logout\">Logout <span class=\"sr-only\"></span></a>\n    </div>\n  </nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/login/login.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/login/login.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"center\">\n        <label for=\"uname\"><b>Username </b></label>\n        <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"username\" >\n        <label for=\"psw\"><b>Password </b></label>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"password\">\n    </div>\n    <button (click)=checkLogin() class=\"btn btn-success\">\n      Login\n    </button>\n\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/logout/logout.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/logout/logout.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreComponentLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>logout works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/add-page/add-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/add-page/add-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureAddPageAddPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <form [formGroup]=\"paginaForm\" (ngSubmit)=\"onSubmit()\">\n        <label>\n            pagina:\n            <input type=\"number\" formControlName=\"page\">\n        </label>\n        <label>\n            titolo:\n            <input type=\"text\" formControlName=\"title\">\n        </label>\n        <label>\n            colonne:\n            <input type=\"number\" formControlName=\"col\">\n        </label>\n        <label>\n            righe:\n            <input type=\"number\" formControlName=\"row\">\n        </label>\n        <button type=\"submit\" [disabled]=\"!paginaForm.valid\">Crea</button>\n    </form>\n\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/create-puzzle/create-puzzle.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/create-puzzle/create-puzzle.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureCreatePuzzleCreatePuzzleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <form [formGroup]=\"puzzleForm\" (ngSubmit)=\"onSubmit()\">\n        <label>\n            pagina:\n            <input type=\"number\" formControlName=\"page\">\n        </label>\n        <label>\n            titolo:\n            <input type=\"text\" formControlName=\"title\">\n        </label>\n        <label>\n            colonne:\n            <input type=\"number\" formControlName=\"col\">\n        </label>\n        <label>\n            righe:\n            <input type=\"number\" formControlName=\"row\">\n        </label>\n        <button type=\"submit\" [disabled]=\"!puzzleForm.valid\">Crea</button>\n    </form>\n\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/create-rivista/create-rivista.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/create-rivista/create-rivista.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureCreateRivistaCreateRivistaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <form [formGroup]=\"rivistaForm\" (ngSubmit)=\"onSubmit()\">\n        <label>\n            numero rivista:\n            <input type=\"text\" formControlName=\"nRivista\">\n        </label>\n\n        <label>\n            data:\n            <input type=\"Date\" formControlName=\"data\">\n        </label>\n        <button type=\"submit\" [disabled]=\"!rivistaForm.valid\">Crea</button>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/puzzle/puzzle.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/puzzle/puzzle.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturePuzzlePuzzleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container row overflow-auto\">\n    <div class=\"col-md-8\">\n        <table>\n            <tbody>\n                <tr *ngFor=\"let row of createPuzzleService.createdPuzzle.schema; index as y\">\n                    <td *ngFor=\"let col of row; index as x\">\n                        <span class=\"i-circle\">.</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"col-md-4\">\n        <app-word-list></app-word-list>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/word-list/word-list.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feature/word-list/word-list.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeatureWordListWordListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"panel-body overflow-auto\" style=\"max-height: 350px;\">\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let word of words\">{{word}}</li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _feature_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feature/puzzle/puzzle.component */
    "./src/app/feature/puzzle/puzzle.component.ts");
    /* harmony import */


    var _feature_create_puzzle_create_puzzle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./feature/create-puzzle/create-puzzle.component */
    "./src/app/feature/create-puzzle/create-puzzle.component.ts");
    /* harmony import */


    var _core_component_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/component/login/login.component */
    "./src/app/core/component/login/login.component.ts");
    /* harmony import */


    var _core_component_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./core/component/logout/logout.component */
    "./src/app/core/component/logout/logout.component.ts");
    /* harmony import */


    var _core_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/service/auth-guard.service */
    "./src/app/core/service/auth-guard.service.ts");
    /* harmony import */


    var _feature_create_rivista_create_rivista_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./feature/create-rivista/create-rivista.component */
    "./src/app/feature/create-rivista/create-rivista.component.ts");
    /* harmony import */


    var _feature_add_page_add_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./feature/add-page/add-page.component */
    "./src/app/feature/add-page/add-page.component.ts");

    const routes = [{
      path: 'login',
      component: _core_component_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'logout',
      component: _core_component_logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
      canActivate: [_core_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: 'puzzle',
      component: _feature_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_3__["PuzzleComponent"],
      canActivate: [_core_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: 'create',
      component: _feature_create_puzzle_create_puzzle_component__WEBPACK_IMPORTED_MODULE_4__["CreatePuzzleComponent"],
      canActivate: [_core_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: 'rivista',
      component: _feature_create_rivista_create_rivista_component__WEBPACK_IMPORTED_MODULE_8__["CreateRivistaComponent"],
      canActivate: [_core_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: 'add-page',
      component: _feature_add_page_add_page_component__WEBPACK_IMPORTED_MODULE_9__["AddPageComponent"],
      canActivate: [_core_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuardService"]]
    }, {
      path: '',
      redirectTo: '/create',
      pathMatch: 'full'
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'ppc-app';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _core_component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/component/dashboard/dashboard.component */
    "./src/app/core/component/dashboard/dashboard.component.ts");
    /* harmony import */


    var _feature_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./feature/puzzle/puzzle.component */
    "./src/app/feature/puzzle/puzzle.component.ts");
    /* harmony import */


    var _feature_word_list_word_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./feature/word-list/word-list.component */
    "./src/app/feature/word-list/word-list.component.ts");
    /* harmony import */


    var _feature_create_puzzle_create_puzzle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./feature/create-puzzle/create-puzzle.component */
    "./src/app/feature/create-puzzle/create-puzzle.component.ts");
    /* harmony import */


    var _core_component_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/component/login/login.component */
    "./src/app/core/component/login/login.component.ts");
    /* harmony import */


    var _core_component_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/component/logout/logout.component */
    "./src/app/core/component/logout/logout.component.ts");
    /* harmony import */


    var _core_service_basic_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/service/basic-auth-http-interceptor.service */
    "./src/app/core/service/basic-auth-http-interceptor.service.ts");
    /* harmony import */


    var _feature_create_rivista_create_rivista_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./feature/create-rivista/create-rivista.component */
    "./src/app/feature/create-rivista/create-rivista.component.ts");
    /* harmony import */


    var _feature_add_page_add_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./feature/add-page/add-page.component */
    "./src/app/feature/add-page/add-page.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _core_component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _feature_puzzle_puzzle_component__WEBPACK_IMPORTED_MODULE_8__["PuzzleComponent"], _feature_word_list_word_list_component__WEBPACK_IMPORTED_MODULE_9__["WordListComponent"], _feature_create_puzzle_create_puzzle_component__WEBPACK_IMPORTED_MODULE_10__["CreatePuzzleComponent"], _core_component_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _core_component_logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"], _feature_create_rivista_create_rivista_component__WEBPACK_IMPORTED_MODULE_14__["CreateRivistaComponent"], _feature_add_page_add_page_component__WEBPACK_IMPORTED_MODULE_15__["AddPageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
        useClass: _core_service_basic_auth_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["BasicAuthHtppInterceptorService"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/component/dashboard/dashboard.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/core/component/dashboard/dashboard.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/component/dashboard/dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/component/dashboard/dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppCoreComponentDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DashboardComponent = class DashboardComponent {
      constructor() {}

      ngOnInit() {}

    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/core/component/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/core/component/login/login.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/core/component/login/login.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {font-family: Arial, Helvetica, sans-serif;}\r\nform {border: 3px solid #f1f1f1;}\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\nimg.avatar {\r\n  width: 40%;\r\n  border-radius: 50%;\r\n}\r\n.container {\r\n  padding: 16px;\r\n}\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n/* Change styles for span and cancel button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n     display: block;\r\n     float: none;\r\n  }\r\n  .cancelbtn {\r\n     width: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hELE1BQU0seUJBQXlCLENBQUM7QUFFaEM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTtLQUNHLGNBQWM7S0FDZCxXQUFXO0VBQ2Q7RUFDQTtLQUNHLFdBQVc7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2ZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO31cclxuZm9ybSB7Ym9yZGVyOiAzcHggc29saWQgI2YxZjFmMTt9XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNhbmNlbGJ0biB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5pbWdjb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XHJcbn1cclxuXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG5zcGFuLnBzdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICBzcGFuLnBzdyB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgfVxyXG4gIC5jYW5jZWxidG4ge1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/component/login/login.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/component/login/login.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppCoreComponentLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/login.service */
    "./src/app/core/service/login.service.ts");

    let LoginComponent = class LoginComponent {
      constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
      }

      ngOnInit() {}

      checkLogin() {
        this.loginService.authenticate(this.username, this.password).subscribe(data => {
          this.router.navigate(['']);
          this.invalidLogin = false;
        }, error => {
          this.invalidLogin = true;
        });
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/core/component/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/core/component/logout/logout.component.css":
  /*!************************************************************!*\
    !*** ./src/app/core/component/logout/logout.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreComponentLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50L2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/component/logout/logout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/component/logout/logout.component.ts ***!
    \***********************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppCoreComponentLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/login.service */
    "./src/app/core/service/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LogoutComponent = class LogoutComponent {
      constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
      }

      ngOnInit() {
        this.loginService.logOut();
        this.router.navigate(['login']);
      }

    };

    LogoutComponent.ctorParameters = () => [{
      type: _service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/component/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/core/component/logout/logout.component.css")).default]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/core/service/auth-guard.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/service/auth-guard.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthGuardService */

  /***/
  function srcAppCoreServiceAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
      return AuthGuardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/core/service/login.service.ts");

    let AuthGuardService = class AuthGuardService {
      constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
      }

      canActivate(route, state) {
        if (this.loginService.isUserLoggedIn()) {
          return true;
        } else {
          this.router.navigate(['login']);
        }
      }

    };

    AuthGuardService.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
    }];

    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuardService);
    /***/
  },

  /***/
  "./src/app/core/service/basic-auth-http-interceptor.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/core/service/basic-auth-http-interceptor.service.ts ***!
    \*********************************************************************/

  /*! exports provided: BasicAuthHtppInterceptorService */

  /***/
  function srcAppCoreServiceBasicAuthHttpInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicAuthHtppInterceptorService", function () {
      return BasicAuthHtppInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let BasicAuthHtppInterceptorService = class BasicAuthHtppInterceptorService {
      constructor() {}

      intercept(req, next) {
        debugger;

        if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
          req = req.clone({
            setHeaders: {
              Authorization: sessionStorage.getItem('basicauth')
            }
          });
        }

        return next.handle(req);
      }

    };
    BasicAuthHtppInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BasicAuthHtppInterceptorService);
    /***/
  },

  /***/
  "./src/app/core/service/login.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/service/login.service.ts ***!
    \***********************************************/

  /*! exports provided: User, LoginService */

  /***/
  function srcAppCoreServiceLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    class User {
      constructor(status) {
        this.status = status;
      }

    }

    let LoginService = class LoginService {
      constructor(httpClient) {
        this.httpClient = httpClient;
      }

      authenticate(username, password) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          Authorization: 'Basic ' + btoa(username + ':' + password)
        });
        return this.httpClient.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL, "/validateLogin"), {
          headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }));
      }

      isUserLoggedIn() {
        let user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
      }

      logOut() {
        sessionStorage.removeItem('username');
      }

    };

    LoginService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/feature/add-page/add-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/feature/add-page/add-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureAddPageAddPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    padding-top: 24px;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    width: 6em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\n  \r\n  button {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  \r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9hZGQtcGFnZS9hZGQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2FkZC1wYWdlL2FkZC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG4gIH1cclxuICBcclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/feature/add-page/add-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/feature/add-page/add-page.component.ts ***!
    \********************************************************/

  /*! exports provided: AddPageComponent */

  /***/
  function srcAppFeatureAddPageAddPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPageComponent", function () {
      return AddPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _create_rivista_create_rivista_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../create-rivista/create-rivista.service */
    "./src/app/feature/create-rivista/create-rivista.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _create_puzzle_create_puzzle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../create-puzzle/create-puzzle.service */
    "./src/app/feature/create-puzzle/create-puzzle.service.ts");

    let AddPageComponent = class AddPageComponent {
      constructor(rivistaService, puzzleService) {
        this.rivistaService = rivistaService;
        this.puzzleService = puzzleService;
        this.paginaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          page: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          row: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          col: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.rivista = rivistaService.rivista;
        console.log(this.rivista);
      }

      ngOnInit() {}

      onSubmit() {
        console.log(this.paginaForm.getRawValue());
        var obs = this.puzzleService.createPuzzle(this.paginaForm.getRawValue());
        let created;
        obs.subscribe(c => {
          created = c.data;
          let pagina = {
            nPagina: this.paginaForm.getRawValue().page,
            puzzles: [created],
            id: undefined
          };
          this.rivista.pages = [];
          this.rivista.pages.push(pagina);
          this.rivistaService.updateRivista(this.rivista);
        });
      }

    };

    AddPageComponent.ctorParameters = () => [{
      type: _create_rivista_create_rivista_service__WEBPACK_IMPORTED_MODULE_2__["CreateRivistaService"]
    }, {
      type: _create_puzzle_create_puzzle_service__WEBPACK_IMPORTED_MODULE_4__["CreatePuzzleService"]
    }];

    AddPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/add-page/add-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-page.component.css */
      "./src/app/feature/add-page/add-page.component.css")).default]
    })], AddPageComponent);
    /***/
  },

  /***/
  "./src/app/feature/create-puzzle/create-puzzle.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/feature/create-puzzle/create-puzzle.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureCreatePuzzleCreatePuzzleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    padding-top: 24px;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    width: 6em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\n  \r\n  button {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  \r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jcmVhdGUtcHV6emxlL2NyZWF0ZS1wdXp6bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9jcmVhdGUtcHV6emxlL2NyZWF0ZS1wdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDZlbTtcclxuICAgIG1hcmdpbjogLjVlbSAwO1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/feature/create-puzzle/create-puzzle.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/feature/create-puzzle/create-puzzle.component.ts ***!
    \******************************************************************/

  /*! exports provided: CreatePuzzleComponent */

  /***/
  function srcAppFeatureCreatePuzzleCreatePuzzleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePuzzleComponent", function () {
      return CreatePuzzleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _create_puzzle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-puzzle.service */
    "./src/app/feature/create-puzzle/create-puzzle.service.ts");

    let CreatePuzzleComponent = class CreatePuzzleComponent {
      constructor(createPuzzleService) {
        this.createPuzzleService = createPuzzleService;
        this.puzzleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          page: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          row: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          col: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      ngOnInit() {}

      onSubmit() {
        console.log(this.puzzleForm.getRawValue());
        this.createPuzzleService.createPuzzle(this.puzzleForm.getRawValue());
      }

    };

    CreatePuzzleComponent.ctorParameters = () => [{
      type: _create_puzzle_service__WEBPACK_IMPORTED_MODULE_3__["CreatePuzzleService"]
    }];

    CreatePuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-puzzle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-puzzle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/create-puzzle/create-puzzle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-puzzle.component.css */
      "./src/app/feature/create-puzzle/create-puzzle.component.css")).default]
    })], CreatePuzzleComponent);
    /***/
  },

  /***/
  "./src/app/feature/create-puzzle/create-puzzle.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/feature/create-puzzle/create-puzzle.service.ts ***!
    \****************************************************************/

  /*! exports provided: CreatePuzzleService */

  /***/
  function srcAppFeatureCreatePuzzleCreatePuzzleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePuzzleService", function () {
      return CreatePuzzleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
    let CreatePuzzleService = class CreatePuzzleService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }

      get createdPuzzle() {
        return this._createdPuzzle;
      }

      set createdPuzzle(createdPuzzle) {
        this._createdPuzzle = createdPuzzle;
      }

      createPuzzle(request) {
        return this.http.post("".concat(url, "/createPuzzle"), request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(res => {
          this.createdPuzzle = res.data;
          return res.data;
        }));
      }

    };

    CreatePuzzleService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    CreatePuzzleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CreatePuzzleService);
    /***/
  },

  /***/
  "./src/app/feature/create-rivista/create-rivista.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/feature/create-rivista/create-rivista.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureCreateRivistaCreateRivistaComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    padding-top: 24px;\r\n  }\r\n  \r\n  label {\r\n    display: block;\r\n    width: 8em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  input {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\n  \r\n  button {\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  \r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9jcmVhdGUtcml2aXN0YS9jcmVhdGUtcml2aXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlL2NyZWF0ZS1yaXZpc3RhL2NyZWF0ZS1yaXZpc3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA4ZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG4gIH1cclxuICBcclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/feature/create-rivista/create-rivista.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/feature/create-rivista/create-rivista.component.ts ***!
    \********************************************************************/

  /*! exports provided: CreateRivistaComponent */

  /***/
  function srcAppFeatureCreateRivistaCreateRivistaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRivistaComponent", function () {
      return CreateRivistaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _create_rivista_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./create-rivista.service */
    "./src/app/feature/create-rivista/create-rivista.service.ts");

    let CreateRivistaComponent = class CreateRivistaComponent {
      constructor(createRivistaService) {
        this.createRivistaService = createRivistaService;
        this.rivistaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          nRivista: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          data: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      ngOnInit() {}

      onSubmit() {
        console.log(this.rivistaForm.getRawValue());
        this.createRivistaService.createRivista(this.rivistaForm.getRawValue());
      }

    };

    CreateRivistaComponent.ctorParameters = () => [{
      type: _create_rivista_service__WEBPACK_IMPORTED_MODULE_3__["CreateRivistaService"]
    }];

    CreateRivistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-rivista',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-rivista.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/create-rivista/create-rivista.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-rivista.component.css */
      "./src/app/feature/create-rivista/create-rivista.component.css")).default]
    })], CreateRivistaComponent);
    /***/
  },

  /***/
  "./src/app/feature/create-rivista/create-rivista.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/feature/create-rivista/create-rivista.service.ts ***!
    \******************************************************************/

  /*! exports provided: CreateRivistaService */

  /***/
  function srcAppFeatureCreateRivistaCreateRivistaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRivistaService", function () {
      return CreateRivistaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
    let CreateRivistaService = class CreateRivistaService {
      constructor(http, router) {
        this.http = http;
        this.router = router;
      }

      createRivista(request) {
        this.http.post("".concat(url, "/rivista/create"), request).subscribe(res => {
          this.rivista = res.data;
          this.router.navigate(['add-page']);
        });
      }

      updateRivista(request) {
        this.http.post("".concat(url, "/rivista/update"), request).subscribe(res => {
          this.rivista = res.data;
          this.router.navigate(['add-page']);
        });
      }

    };

    CreateRivistaService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    CreateRivistaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CreateRivistaService);
    /***/
  },

  /***/
  "./src/app/feature/puzzle/puzzle.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/feature/puzzle/puzzle.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturePuzzlePuzzleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".i-circle {\r\n    background: #abb617;\r\n    color: rgb(0, 0, 0);\r\n    height: 25px;\r\n    width: 25px;\r\n    display: table-cell;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    border-radius: 50%;\r\n    font-size: 15px;\r\n    opacity: 0.1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZS9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZS9wdXp6bGUvcHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaS1jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogI2FiYjYxNztcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogMC4xO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/feature/puzzle/puzzle.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/feature/puzzle/puzzle.component.ts ***!
    \****************************************************/

  /*! exports provided: PuzzleComponent */

  /***/
  function srcAppFeaturePuzzlePuzzleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PuzzleComponent", function () {
      return PuzzleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _create_puzzle_create_puzzle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../create-puzzle/create-puzzle.service */
    "./src/app/feature/create-puzzle/create-puzzle.service.ts");

    let PuzzleComponent = class PuzzleComponent {
      constructor(createPuzzleService) {
        this.createPuzzleService = createPuzzleService;
        console.log(createPuzzleService.createdPuzzle.schema);
        console.log(createPuzzleService.createdPuzzle);
      }

    };

    PuzzleComponent.ctorParameters = () => [{
      type: _create_puzzle_create_puzzle_service__WEBPACK_IMPORTED_MODULE_2__["CreatePuzzleService"]
    }];

    PuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-puzzle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./puzzle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/puzzle/puzzle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./puzzle.component.css */
      "./src/app/feature/puzzle/puzzle.component.css")).default]
    })], PuzzleComponent);
    /***/
  },

  /***/
  "./src/app/feature/word-list/word-list.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/feature/word-list/word-list.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeatureWordListWordListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvd29yZC1saXN0L3dvcmQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/feature/word-list/word-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/feature/word-list/word-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: WordListComponent */

  /***/
  function srcAppFeatureWordListWordListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordListComponent", function () {
      return WordListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let WordListComponent = class WordListComponent {
      constructor() {
        this.words = ["casa", "prova", "cane", "ciao", "terra", "casa", "prova", "cane", "ciao", "terra", "casa", "prova", "cane", "ciao", "terra", "casa", "prova", "cane", "ciao", "terra"];
      }

      ngOnInit() {}

    };
    WordListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-word-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./word-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feature/word-list/word-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./word-list.component.css */
      "./src/app/feature/word-list/word-list.component.css")).default]
    })], WordListComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      baseURL: 'http://localhost:5000'
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
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Users\Lorenzo\PPC\frontend\ppc-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map