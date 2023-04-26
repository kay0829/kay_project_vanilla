/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnhancerArray": () => (/* binding */ EnhancerArray),
/* harmony export */   "MiddlewareArray": () => (/* binding */ MiddlewareArray),
/* harmony export */   "SHOULD_AUTOBATCH": () => (/* binding */ SHOULD_AUTOBATCH),
/* harmony export */   "TaskAbortError": () => (/* binding */ TaskAbortError),
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.__DO_NOT_USE__ActionTypes),
/* harmony export */   "addListener": () => (/* binding */ addListener),
/* harmony export */   "applyMiddleware": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware),
/* harmony export */   "autoBatchEnhancer": () => (/* binding */ autoBatchEnhancer),
/* harmony export */   "bindActionCreators": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators),
/* harmony export */   "clearAllListeners": () => (/* binding */ clearAllListeners),
/* harmony export */   "combineReducers": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers),
/* harmony export */   "compose": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.compose),
/* harmony export */   "configureStore": () => (/* binding */ configureStore),
/* harmony export */   "createAction": () => (/* binding */ createAction),
/* harmony export */   "createAsyncThunk": () => (/* binding */ createAsyncThunk),
/* harmony export */   "createDraftSafeSelector": () => (/* binding */ createDraftSafeSelector),
/* harmony export */   "createEntityAdapter": () => (/* binding */ createEntityAdapter),
/* harmony export */   "createImmutableStateInvariantMiddleware": () => (/* binding */ createImmutableStateInvariantMiddleware),
/* harmony export */   "createListenerMiddleware": () => (/* binding */ createListenerMiddleware),
/* harmony export */   "createNextState": () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "createReducer": () => (/* binding */ createReducer),
/* harmony export */   "createSelector": () => (/* reexport safe */ reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector),
/* harmony export */   "createSerializableStateInvariantMiddleware": () => (/* binding */ createSerializableStateInvariantMiddleware),
/* harmony export */   "createSlice": () => (/* binding */ createSlice),
/* harmony export */   "createStore": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.createStore),
/* harmony export */   "current": () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.current),
/* harmony export */   "findNonSerializableValue": () => (/* binding */ findNonSerializableValue),
/* harmony export */   "freeze": () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.freeze),
/* harmony export */   "getDefaultMiddleware": () => (/* binding */ getDefaultMiddleware),
/* harmony export */   "getType": () => (/* binding */ getType),
/* harmony export */   "isAction": () => (/* binding */ isAction),
/* harmony export */   "isAllOf": () => (/* binding */ isAllOf),
/* harmony export */   "isAnyOf": () => (/* binding */ isAnyOf),
/* harmony export */   "isAsyncThunkAction": () => (/* binding */ isAsyncThunkAction),
/* harmony export */   "isDraft": () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.isDraft),
/* harmony export */   "isFluxStandardAction": () => (/* binding */ isFSA),
/* harmony export */   "isFulfilled": () => (/* binding */ isFulfilled),
/* harmony export */   "isImmutableDefault": () => (/* binding */ isImmutableDefault),
/* harmony export */   "isPending": () => (/* binding */ isPending),
/* harmony export */   "isPlain": () => (/* binding */ isPlain),
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject),
/* harmony export */   "isRejected": () => (/* binding */ isRejected),
/* harmony export */   "isRejectedWithValue": () => (/* binding */ isRejectedWithValue),
/* harmony export */   "legacy_createStore": () => (/* reexport safe */ redux__WEBPACK_IMPORTED_MODULE_0__.legacy_createStore),
/* harmony export */   "miniSerializeError": () => (/* binding */ miniSerializeError),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "original": () => (/* reexport safe */ immer__WEBPACK_IMPORTED_MODULE_2__.original),
/* harmony export */   "prepareAutoBatched": () => (/* binding */ prepareAutoBatched),
/* harmony export */   "removeListener": () => (/* binding */ removeListener),
/* harmony export */   "unwrapResult": () => (/* binding */ unwrapResult)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.mjs");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
    for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
            var prop = _c[_i];
            if (__propIsEnum.call(b, prop))
                __defNormalProp(a, prop, b[prop]);
        }
    return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __async = function (__this, __arguments, generator) {
    return new Promise(function (resolve, reject) {
        var fulfilled = function (value) {
            try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var rejected = function (value) {
            try {
                step(generator.throw(value));
            }
            catch (e) {
                reject(e);
            }
        };
        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
        step((generator = generator.apply(__this, __arguments)).next());
    });
};
// src/index.ts




// src/createDraftSafeSelector.ts


var createDraftSafeSelector = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var selector = reselect__WEBPACK_IMPORTED_MODULE_1__.createSelector.apply(void 0, args);
    var wrappedSelector = function (value) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return selector.apply(void 0, __spreadArray([(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(value) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__.current)(value) : value], rest));
    };
    return wrappedSelector;
};
// src/configureStore.ts

// src/devtoolsExtension.ts

var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
    if (arguments.length === 0)
        return void 0;
    if (typeof arguments[0] === "object")
        return redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    return redux__WEBPACK_IMPORTED_MODULE_0__.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
    return function (noop2) {
        return noop2;
    };
};
// src/isPlainObject.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null)
        return false;
    var proto = Object.getPrototypeOf(value);
    if (proto === null)
        return true;
    var baseProto = proto;
    while (Object.getPrototypeOf(baseProto) !== null) {
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/getDefaultMiddleware.ts

// src/utils.ts

function getTimeMeasureUtils(maxDelay, fnName) {
    var elapsed = 0;
    return {
        measureTime: function (fn) {
            var started = Date.now();
            try {
                return fn();
            }
            finally {
                var finished = Date.now();
                elapsed += finished - started;
            }
        },
        warnIfExceeded: function () {
            if (elapsed > maxDelay) {
                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
            }
        }
    };
}
var MiddlewareArray = /** @class */ (function (_super) {
    __extends(MiddlewareArray, _super);
    function MiddlewareArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
        return _this;
    }
    Object.defineProperty(MiddlewareArray, Symbol.species, {
        get: function () {
            return MiddlewareArray;
        },
        enumerable: false,
        configurable: true
    });
    MiddlewareArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return MiddlewareArray;
}(Array));
var EnhancerArray = /** @class */ (function (_super) {
    __extends(EnhancerArray, _super);
    function EnhancerArray() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.apply(this, args) || this;
        Object.setPrototypeOf(_this, EnhancerArray.prototype);
        return _this;
    }
    Object.defineProperty(EnhancerArray, Symbol.species, {
        get: function () {
            return EnhancerArray;
        },
        enumerable: false,
        configurable: true
    });
    EnhancerArray.prototype.concat = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray.prototype.prepend = function () {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr[0].concat(this))))();
        }
        return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr.concat(this))))();
    };
    return EnhancerArray;
}(Array));
function freezeDraftable(val) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(val) ? (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(val, function () {
    }) : val;
}
// src/immutableStateInvariantMiddleware.ts
var isProduction = "development" === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ""));
}
function stringify(obj, serializer, indent, decycler) {
    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}
function getSerialize(serializer, decycler) {
    var stack = [], keys = [];
    if (!decycler)
        decycler = function (_, value) {
            if (stack[0] === value)
                return "[Circular ~]";
            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
    return function (key, value) {
        if (stack.length > 0) {
            var thisPos = stack.indexOf(this);
            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
            if (~stack.indexOf(value))
                value = decycler.call(this, key, value);
        }
        else
            stack.push(value);
        return serializer == null ? value : serializer.call(this, key, value);
    };
}
function isImmutableDefault(value) {
    return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function trackForMutations(isImmutable, ignorePaths, obj) {
    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
    return {
        detectMutations: function () {
            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
        }
    };
}
function trackProperties(isImmutable, ignorePaths, obj, path) {
    if (ignorePaths === void 0) { ignorePaths = []; }
    if (path === void 0) { path = ""; }
    var tracked = { value: obj };
    if (!isImmutable(obj)) {
        tracked.children = {};
        for (var key in obj) {
            var childPath = path ? path + "." + key : key;
            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
                continue;
            }
            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
        }
    }
    return tracked;
}
function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    if (sameParentRef === void 0) { sameParentRef = false; }
    if (path === void 0) { path = ""; }
    var prevObj = trackedProperty ? trackedProperty.value : void 0;
    var sameRef = prevObj === obj;
    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
        return { wasMutated: true, path: path };
    }
    if (isImmutable(prevObj) || isImmutable(obj)) {
        return { wasMutated: false };
    }
    var keysToDetect = {};
    for (var key in trackedProperty.children) {
        keysToDetect[key] = true;
    }
    for (var key in obj) {
        keysToDetect[key] = true;
    }
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_1 = function (key) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
        if (result.wasMutated) {
            return { value: result };
        }
    };
    for (var key in keysToDetect) {
        var state_1 = _loop_1(key);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return { wasMutated: false };
}
function createImmutableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
    ignoredPaths = ignoredPaths || ignore;
    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
    return function (_c) {
        var getState = _c.getState;
        var state = getState();
        var tracker = track(state);
        var result;
        return function (next) { return function (action) {
            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            var dispatchedAction = next(action);
            measureUtils.measureTime(function () {
                state = getState();
                result = tracker.detectMutations();
                tracker = track(state);
                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
            });
            measureUtils.warnIfExceeded();
            return dispatchedAction;
        }; };
    };
}
// src/serializableStateInvariantMiddleware.ts
function isPlain(val) {
    var type = typeof val;
    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}
function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
    if (path === void 0) { path = ""; }
    if (isSerializable === void 0) { isSerializable = isPlain; }
    if (ignoredPaths === void 0) { ignoredPaths = []; }
    var foundNestedSerializable;
    if (!isSerializable(value)) {
        return {
            keyPath: path || "<root>",
            value: value
        };
    }
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (cache == null ? void 0 : cache.has(value))
        return false;
    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
    var hasIgnoredPaths = ignoredPaths.length > 0;
    var _loop_2 = function (key, nestedValue) {
        var nestedPath = path ? path + "." + key : key;
        if (hasIgnoredPaths) {
            var hasMatches = ignoredPaths.some(function (ignored) {
                if (ignored instanceof RegExp) {
                    return ignored.test(nestedPath);
                }
                return nestedPath === ignored;
            });
            if (hasMatches) {
                return "continue";
            }
        }
        if (!isSerializable(nestedValue)) {
            return { value: {
                    keyPath: nestedPath,
                    value: nestedValue
                } };
        }
        if (typeof nestedValue === "object") {
            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
            if (foundNestedSerializable) {
                return { value: foundNestedSerializable };
            }
        }
    };
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
        var state_2 = _loop_2(key, nestedValue);
        if (typeof state_2 === "object")
            return state_2.value;
    }
    if (cache && isNestedFrozen(value))
        cache.add(value);
    return false;
}
function isNestedFrozen(value) {
    if (!Object.isFrozen(value))
        return false;
    for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
        var nestedValue = _c[_i];
        if (typeof nestedValue !== "object" || nestedValue === null)
            continue;
        if (!isNestedFrozen(nestedValue))
            return false;
    }
    return true;
}
function createSerializableStateInvariantMiddleware(options) {
    if (options === void 0) { options = {}; }
    if (false) {}
    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
    var cache = !disableCache && WeakSet ? new WeakSet() : void 0;
    return function (storeAPI) { return function (next) { return function (action) {
        var result = next(action);
        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
            measureUtils.measureTime(function () {
                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
                if (foundActionNonSerializableValue) {
                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
                }
            });
        }
        if (!ignoreState) {
            measureUtils.measureTime(function () {
                var state = storeAPI.getState();
                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
                if (foundStateNonSerializableValue) {
                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
                }
            });
            measureUtils.warnIfExceeded();
        }
        return result;
    }; }; };
}
// src/getDefaultMiddleware.ts
function isBoolean(x) {
    return typeof x === "boolean";
}
function curryGetDefaultMiddleware() {
    return function curriedGetDefaultMiddleware(options) {
        return getDefaultMiddleware(options);
    };
}
function getDefaultMiddleware(options) {
    if (options === void 0) { options = {}; }
    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e;
    var middlewareArray = new MiddlewareArray();
    if (thunk) {
        if (isBoolean(thunk)) {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]);
        }
        else {
            middlewareArray.push(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"].withExtraArgument(thunk.extraArgument));
        }
    }
    if (true) {
        if (immutableCheck) {
            var immutableOptions = {};
            if (!isBoolean(immutableCheck)) {
                immutableOptions = immutableCheck;
            }
            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
        }
        if (serializableCheck) {
            var serializableOptions = {};
            if (!isBoolean(serializableCheck)) {
                serializableOptions = serializableCheck;
            }
            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
        }
    }
    return middlewareArray;
}
// src/configureStore.ts
var IS_PRODUCTION = "development" === "production";
function configureStore(options) {
    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
    var rootReducer;
    if (typeof reducer === "function") {
        rootReducer = reducer;
    }
    else if (isPlainObject(reducer)) {
        rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducer);
    }
    else {
        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    }
    var finalMiddleware = middleware;
    if (typeof finalMiddleware === "function") {
        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
        if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
            throw new Error("when using a middleware builder function, an array of middleware must be returned");
        }
    }
    if (!IS_PRODUCTION && finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
        throw new Error("each middleware provided to configureStore must be a function");
    }
    var middlewareEnhancer = redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware.apply(void 0, finalMiddleware);
    var finalCompose = redux__WEBPACK_IMPORTED_MODULE_0__.compose;
    if (devTools) {
        finalCompose = composeWithDevTools(__spreadValues({
            trace: !IS_PRODUCTION
        }, typeof devTools === "object" && devTools));
    }
    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
    var storeEnhancers = defaultEnhancers;
    if (Array.isArray(enhancers)) {
        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
    }
    else if (typeof enhancers === "function") {
        storeEnhancers = enhancers(defaultEnhancers);
    }
    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
    return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(rootReducer, preloadedState, composedEnhancer);
}
// src/createAction.ts
function createAction(type, prepareAction) {
    function actionCreator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (prepareAction) {
            var prepared = prepareAction.apply(void 0, args);
            if (!prepared) {
                throw new Error("prepareAction did not return an object");
            }
            return __spreadValues(__spreadValues({
                type: type,
                payload: prepared.payload
            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
        }
        return { type: type, payload: args[0] };
    }
    actionCreator.toString = function () { return "" + type; };
    actionCreator.type = type;
    actionCreator.match = function (action) { return action.type === type; };
    return actionCreator;
}
function isAction(action) {
    return isPlainObject(action) && "type" in action;
}
function isFSA(action) {
    return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
    return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
    return "" + actionCreator;
}
// src/createReducer.ts

// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
    var actionsMap = {};
    var actionMatchers = [];
    var defaultCaseReducer;
    var builder = {
        addCase: function (typeOrActionCreator, reducer) {
            if (true) {
                if (actionMatchers.length > 0) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
                }
                if (defaultCaseReducer) {
                    throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
                }
            }
            var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
            if (type in actionsMap) {
                throw new Error("addCase cannot be called with two reducers for the same action type");
            }
            actionsMap[type] = reducer;
            return builder;
        },
        addMatcher: function (matcher, reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
                }
            }
            actionMatchers.push({ matcher: matcher, reducer: reducer });
            return builder;
        },
        addDefaultCase: function (reducer) {
            if (true) {
                if (defaultCaseReducer) {
                    throw new Error("`builder.addDefaultCase` can only be called once");
                }
            }
            defaultCaseReducer = reducer;
            return builder;
        }
    };
    builderCallback(builder);
    return [actionsMap, actionMatchers, defaultCaseReducer];
}
// src/createReducer.ts
function isStateFunction(x) {
    return typeof x === "function";
}
var hasWarnedAboutObjectNotation = false;
function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
    if (actionMatchers === void 0) { actionMatchers = []; }
    if (true) {
        if (typeof mapOrBuilderCallback === "object") {
            if (!hasWarnedAboutObjectNotation) {
                hasWarnedAboutObjectNotation = true;
                console.warn("The object notation for `createReducer` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
            }
        }
    }
    var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
    var getInitialState;
    if (isStateFunction(initialState)) {
        getInitialState = function () { return freezeDraftable(initialState()); };
    }
    else {
        var frozenInitialState_1 = freezeDraftable(initialState);
        getInitialState = function () { return frozenInitialState_1; };
    }
    function reducer(state, action) {
        if (state === void 0) { state = getInitialState(); }
        var caseReducers = __spreadArray([
            actionsMap[action.type]
        ], finalActionMatchers.filter(function (_c) {
            var matcher = _c.matcher;
            return matcher(action);
        }).map(function (_c) {
            var reducer2 = _c.reducer;
            return reducer2;
        }));
        if (caseReducers.filter(function (cr) { return !!cr; }).length === 0) {
            caseReducers = [finalDefaultCaseReducer];
        }
        return caseReducers.reduce(function (previousState, caseReducer) {
            if (caseReducer) {
                if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(previousState)) {
                    var draft = previousState;
                    var result = caseReducer(draft, action);
                    if (result === void 0) {
                        return previousState;
                    }
                    return result;
                }
                else if (!(0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraftable)(previousState)) {
                    var result = caseReducer(previousState, action);
                    if (result === void 0) {
                        if (previousState === null) {
                            return previousState;
                        }
                        throw Error("A case reducer on a non-draftable value must not return undefined");
                    }
                    return result;
                }
                else {
                    return (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(previousState, function (draft) {
                        return caseReducer(draft, action);
                    });
                }
            }
            return previousState;
        }, state);
    }
    reducer.getInitialState = getInitialState;
    return reducer;
}
// src/createSlice.ts
var hasWarnedAboutObjectNotation2 = false;
function getType2(slice, actionKey) {
    return slice + "/" + actionKey;
}
function createSlice(options) {
    var name = options.name;
    if (!name) {
        throw new Error("`name` is a required option for createSlice");
    }
    if (typeof process !== "undefined" && "development" === "development") {
        if (options.initialState === void 0) {
            console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
        }
    }
    var initialState = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
    var reducers = options.reducers || {};
    var reducerNames = Object.keys(reducers);
    var sliceCaseReducersByName = {};
    var sliceCaseReducersByType = {};
    var actionCreators = {};
    reducerNames.forEach(function (reducerName) {
        var maybeReducerWithPrepare = reducers[reducerName];
        var type = getType2(name, reducerName);
        var caseReducer;
        var prepareCallback;
        if ("reducer" in maybeReducerWithPrepare) {
            caseReducer = maybeReducerWithPrepare.reducer;
            prepareCallback = maybeReducerWithPrepare.prepare;
        }
        else {
            caseReducer = maybeReducerWithPrepare;
        }
        sliceCaseReducersByName[reducerName] = caseReducer;
        sliceCaseReducersByType[type] = caseReducer;
        actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
    });
    function buildReducer() {
        if (true) {
            if (typeof options.extraReducers === "object") {
                if (!hasWarnedAboutObjectNotation2) {
                    hasWarnedAboutObjectNotation2 = true;
                    console.warn("The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
                }
            }
        }
        var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
        var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);
        return createReducer(initialState, function (builder) {
            for (var key in finalCaseReducers) {
                builder.addCase(key, finalCaseReducers[key]);
            }
            for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
                var m = actionMatchers_1[_i];
                builder.addMatcher(m.matcher, m.reducer);
            }
            if (defaultCaseReducer) {
                builder.addDefaultCase(defaultCaseReducer);
            }
        });
    }
    var _reducer;
    return {
        name: name,
        reducer: function (state, action) {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer(state, action);
        },
        actions: actionCreators,
        caseReducers: sliceCaseReducersByName,
        getInitialState: function () {
            if (!_reducer)
                _reducer = buildReducer();
            return _reducer.getInitialState();
        }
    };
}
// src/entities/entity_state.ts
function getInitialEntityState() {
    return {
        ids: [],
        entities: {}
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}
// src/entities/state_selectors.ts
function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) { return ids.map(function (id) { return entities[id]; }); });
        var selectId = function (_, id) { return id; };
        var selectById = function (entities, id) { return entities[id]; };
        var selectTotal = createDraftSafeSelector(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
                selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
            };
        }
        var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
        return {
            selectIds: createDraftSafeSelector(selectState, selectIds),
            selectEntities: selectGlobalizedEntities,
            selectAll: createDraftSafeSelector(selectState, selectAll),
            selectTotal: createDraftSafeSelector(selectState, selectTotal),
            selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
        };
    }
    return { getSelectors: getSelectors };
}
// src/entities/state_adapter.ts

function createSingleArgumentStateOperator(mutator) {
    var operator = createStateOperator(function (_, state) { return mutator(state); });
    return function operation(state) {
        return operator(state, void 0);
    };
}
function createStateOperator(mutator) {
    return function operation(state, arg) {
        function isPayloadActionArgument(arg2) {
            return isFSA(arg2);
        }
        var runMutator = function (draft) {
            if (isPayloadActionArgument(arg)) {
                mutator(arg.payload, draft);
            }
            else {
                mutator(arg, draft);
            }
        };
        if ((0,immer__WEBPACK_IMPORTED_MODULE_2__.isDraft)(state)) {
            runMutator(state);
            return state;
        }
        else {
            return (0,immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, runMutator);
        }
    };
}
// src/entities/utils.ts
function selectIdValue(entity, selectId) {
    var key = selectId(entity);
    if ( true && key === void 0) {
        console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
    }
    return key;
}
function ensureEntitiesArray(entities) {
    if (!Array.isArray(entities)) {
        entities = Object.values(entities);
    }
    return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var added = [];
    var updated = [];
    for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
        var entity = newEntities_1[_i];
        var id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            updated.push({ id: id, changes: entity });
        }
        else {
            added.push(entity);
        }
    }
    return [added, updated];
}
// src/entities/unsorted_state_adapter.ts
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return;
        }
        state.ids.push(key);
        state.entities[key] = entity;
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
            var entity = newEntities_2[_i];
            addOneMutably(entity, state);
        }
    }
    function setOneMutably(entity, state) {
        var key = selectIdValue(entity, selectId);
        if (!(key in state.entities)) {
            state.ids.push(key);
        }
        state.entities[key] = entity;
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
            var entity = newEntities_3[_i];
            setOneMutably(entity, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.ids = [];
        state.entities = {};
        addManyMutably(newEntities, state);
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = false;
        keys.forEach(function (key) {
            if (key in state.entities) {
                delete state.entities[key];
                didMutate = true;
            }
        });
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
    }
    function removeAllMutably(state) {
        Object.assign(state, {
            ids: [],
            entities: {}
        });
    }
    function takeNewKey(keys, update, state) {
        var original2 = state.entities[update.id];
        var updated = Object.assign({}, original2, update.changes);
        var newKey = selectIdValue(updated, selectId);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        var updatesPerEntity = {};
        updates.forEach(function (update) {
            if (update.id in state.entities) {
                updatesPerEntity[update.id] = {
                    id: update.id,
                    changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
                };
            }
        });
        updates = Object.values(updatesPerEntity);
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = Object.keys(state.entities);
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    return {
        removeAll: createSingleArgumentStateOperator(removeAllMutably),
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably)
    };
}
// src/entities/sorted_state_adapter.ts
function createSortedStateAdapter(selectId, sort) {
    var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        var models = newEntities.filter(function (model) { return !(selectIdValue(model, selectId) in state.entities); });
        if (models.length !== 0) {
            merge(models, state);
        }
    }
    function setOneMutably(entity, state) {
        return setManyMutably([entity], state);
    }
    function setManyMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        if (newEntities.length !== 0) {
            merge(newEntities, state);
        }
    }
    function setAllMutably(newEntities, state) {
        newEntities = ensureEntitiesArray(newEntities);
        state.entities = {};
        state.ids = [];
        addManyMutably(newEntities, state);
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var appliedUpdates = false;
        for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
            var update = updates_1[_i];
            var entity = state.entities[update.id];
            if (!entity) {
                continue;
            }
            appliedUpdates = true;
            Object.assign(entity, update.changes);
            var newId = selectId(entity);
            if (update.id !== newId) {
                delete state.entities[update.id];
                state.entities[newId] = entity;
            }
        }
        if (appliedUpdates) {
            resortEntities(state);
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(newEntities, state) {
        var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
        updateManyMutably(updated, state);
        addManyMutably(added, state);
    }
    function areArraysEqual(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length && i < b.length; i++) {
            if (a[i] === b[i]) {
                continue;
            }
            return false;
        }
        return true;
    }
    function merge(models, state) {
        models.forEach(function (model) {
            state.entities[selectId(model)] = model;
        });
        resortEntities(state);
    }
    function resortEntities(state) {
        var allEntities = Object.values(state.entities);
        allEntities.sort(sort);
        var newSortedIds = allEntities.map(selectId);
        var ids = state.ids;
        if (!areArraysEqual(ids, newSortedIds)) {
            state.ids = newSortedIds;
        }
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        setOne: createStateOperator(setOneMutably),
        setMany: createStateOperator(setManyMutably),
        setAll: createStateOperator(setAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably)
    };
}
// src/entities/create_adapter.ts
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _c = __spreadValues({
        sortComparer: false,
        selectId: function (instance) { return instance.id; }
    }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
    return __spreadValues(__spreadValues(__spreadValues({
        selectId: selectId,
        sortComparer: sortComparer
    }, stateFactory), selectorsFactory), stateAdapter);
}
// src/nanoid.ts
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function (size) {
    if (size === void 0) { size = 21; }
    var id = "";
    var i = size;
    while (i--) {
        id += urlAlphabet[Math.random() * 64 | 0];
    }
    return id;
};
// src/createAsyncThunk.ts
var commonProperties = [
    "name",
    "message",
    "stack",
    "code"
];
var RejectWithValue = /** @class */ (function () {
    function RejectWithValue(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return RejectWithValue;
}());
var FulfillWithMeta = /** @class */ (function () {
    function FulfillWithMeta(payload, meta) {
        this.payload = payload;
        this.meta = meta;
    }
    return FulfillWithMeta;
}());
var miniSerializeError = function (value) {
    if (typeof value === "object" && value !== null) {
        var simpleError = {};
        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
            var property = commonProperties_1[_i];
            if (typeof value[property] === "string") {
                simpleError[property] = value[property];
            }
        }
        return simpleError;
    }
    return { message: String(value) };
};
var createAsyncThunk = (function () {
    function createAsyncThunk2(typePrefix, payloadCreator, options) {
        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
            payload: payload,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "fulfilled"
            })
        }); });
        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
            payload: void 0,
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                requestStatus: "pending"
            })
        }); });
        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
            payload: payload,
            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
            meta: __spreadProps(__spreadValues({}, meta || {}), {
                arg: arg,
                requestId: requestId,
                rejectedWithValue: !!payload,
                requestStatus: "rejected",
                aborted: (error == null ? void 0 : error.name) === "AbortError",
                condition: (error == null ? void 0 : error.name) === "ConditionError"
            })
        }); });
        var displayedWarning = false;
        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
            function class_1() {
                this.signal = {
                    aborted: false,
                    addEventListener: function () {
                    },
                    dispatchEvent: function () {
                        return false;
                    },
                    onabort: function () {
                    },
                    removeEventListener: function () {
                    },
                    reason: void 0,
                    throwIfAborted: function () {
                    }
                };
            }
            class_1.prototype.abort = function () {
                if (true) {
                    if (!displayedWarning) {
                        displayedWarning = true;
                        console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
                    }
                }
            };
            return class_1;
        }());
        function actionCreator(arg) {
            return function (dispatch, getState, extra) {
                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
                var abortController = new AC();
                var abortReason;
                var started = false;
                function abort(reason) {
                    abortReason = reason;
                    abortController.abort();
                }
                var promise2 = function () {
                    return __async(this, null, function () {
                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _c.trys.push([0, 4, , 5]);
                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, conditionResult];
                                case 1:
                                    conditionResult = _c.sent();
                                    _c.label = 2;
                                case 2:
                                    if (conditionResult === false || abortController.signal.aborted) {
                                        throw {
                                            name: "ConditionError",
                                            message: "Aborted due to condition callback returning false."
                                        };
                                    }
                                    started = true;
                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
                                        name: "AbortError",
                                        message: abortReason || "Aborted"
                                    }); }); });
                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
                                    return [4 /*yield*/, Promise.race([
                                            abortedPromise,
                                            Promise.resolve(payloadCreator(arg, {
                                                dispatch: dispatch,
                                                getState: getState,
                                                extra: extra,
                                                requestId: requestId,
                                                signal: abortController.signal,
                                                abort: abort,
                                                rejectWithValue: function (value, meta) {
                                                    return new RejectWithValue(value, meta);
                                                },
                                                fulfillWithValue: function (value, meta) {
                                                    return new FulfillWithMeta(value, meta);
                                                }
                                            })).then(function (result) {
                                                if (result instanceof RejectWithValue) {
                                                    throw result;
                                                }
                                                if (result instanceof FulfillWithMeta) {
                                                    return fulfilled(result.payload, requestId, arg, result.meta);
                                                }
                                                return fulfilled(result, requestId, arg);
                                            })
                                        ])];
                                case 3:
                                    finalAction = _c.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _c.sent();
                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                                    return [3 /*break*/, 5];
                                case 5:
                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                                    if (!skipDispatch) {
                                        dispatch(finalAction);
                                    }
                                    return [2 /*return*/, finalAction];
                            }
                        });
                    });
                }();
                return Object.assign(promise2, {
                    abort: abort,
                    requestId: requestId,
                    arg: arg,
                    unwrap: function () {
                        return promise2.then(unwrapResult);
                    }
                });
            };
        }
        return Object.assign(actionCreator, {
            pending: pending,
            rejected: rejected,
            fulfilled: fulfilled,
            typePrefix: typePrefix
        });
    }
    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
    return createAsyncThunk2;
})();
function unwrapResult(action) {
    if (action.meta && action.meta.rejectedWithValue) {
        throw action.payload;
    }
    if (action.error) {
        throw action.error;
    }
    return action.payload;
}
function isThenable(value) {
    return value !== null && typeof value === "object" && typeof value.then === "function";
}
// src/tsHelpers.ts
var hasMatchFunction = function (v) {
    return v && typeof v.match === "function";
};
// src/matchers.ts
var matches = function (matcher, action) {
    if (hasMatchFunction(matcher)) {
        return matcher.match(action);
    }
    else {
        return matcher(action);
    }
};
function isAnyOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.some(function (matcher) { return matches(matcher, action); });
    };
}
function isAllOf() {
    var matchers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        matchers[_i] = arguments[_i];
    }
    return function (action) {
        return matchers.every(function (matcher) { return matches(matcher, action); });
    };
}
function hasExpectedRequestMetadata(action, validStatus) {
    if (!action || !action.meta)
        return false;
    var hasValidRequestId = typeof action.meta.requestId === "string";
    var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
    return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a) {
    return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}
function isPending() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isPending()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.pending; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejected() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejected()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.rejected; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isRejectedWithValue() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    var hasFlag = function (action) {
        return action && action.meta && action.meta.rejectedWithValue;
    };
    if (asyncThunks.length === 0) {
        return function (action) {
            var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
            return combinedMatcher(action);
        };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isRejectedWithValue()(asyncThunks[0]);
    }
    return function (action) {
        var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
        return combinedMatcher(action);
    };
}
function isFulfilled() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["fulfilled"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isFulfilled()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = asyncThunks.map(function (asyncThunk) { return asyncThunk.fulfilled; });
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
function isAsyncThunkAction() {
    var asyncThunks = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        asyncThunks[_i] = arguments[_i];
    }
    if (asyncThunks.length === 0) {
        return function (action) { return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]); };
    }
    if (!isAsyncThunkArray(asyncThunks)) {
        return isAsyncThunkAction()(asyncThunks[0]);
    }
    return function (action) {
        var matchers = [];
        for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
            var asyncThunk = asyncThunks_1[_i];
            matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
        }
        var combinedMatcher = isAnyOf.apply(void 0, matchers);
        return combinedMatcher(action);
    };
}
// src/listenerMiddleware/utils.ts
var assertFunction = function (func, expected) {
    if (typeof func !== "function") {
        throw new TypeError(expected + " is not a function");
    }
};
var noop = function () {
};
var catchRejection = function (promise2, onError) {
    if (onError === void 0) { onError = noop; }
    promise2.catch(onError);
    return promise2;
};
var addAbortSignalListener = function (abortSignal, callback) {
    abortSignal.addEventListener("abort", callback, { once: true });
    return function () { return abortSignal.removeEventListener("abort", callback); };
};
var abortControllerWithReason = function (abortController, reason) {
    var signal = abortController.signal;
    if (signal.aborted) {
        return;
    }
    if (!("reason" in signal)) {
        Object.defineProperty(signal, "reason", {
            enumerable: true,
            value: reason,
            configurable: true,
            writable: true
        });
    }
    ;
    abortController.abort(reason);
};
// src/listenerMiddleware/exceptions.ts
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = /** @class */ (function () {
    function TaskAbortError(code) {
        this.code = code;
        this.name = "TaskAbortError";
        this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError;
}());
// src/listenerMiddleware/task.ts
var validateActive = function (signal) {
    if (signal.aborted) {
        throw new TaskAbortError(signal.reason);
    }
};
function raceWithSignal(signal, promise2) {
    var cleanup = noop;
    return new Promise(function (resolve, reject) {
        var notifyRejection = function () { return reject(new TaskAbortError(signal.reason)); };
        if (signal.aborted) {
            notifyRejection();
            return;
        }
        cleanup = addAbortSignalListener(signal, notifyRejection);
        promise2.finally(function () { return cleanup(); }).then(resolve, reject);
    }).finally(function () {
        cleanup = noop;
    });
}
var runTask = function (task2, cleanUp) { return __async(void 0, null, function () {
    var value, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, 4, 5]);
                return [4 /*yield*/, Promise.resolve()];
            case 1:
                _c.sent();
                return [4 /*yield*/, task2()];
            case 2:
                value = _c.sent();
                return [2 /*return*/, {
                        status: "ok",
                        value: value
                    }];
            case 3:
                error_1 = _c.sent();
                return [2 /*return*/, {
                        status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
                        error: error_1
                    }];
            case 4:
                cleanUp == null ? void 0 : cleanUp();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
var createPause = function (signal) {
    return function (promise2) {
        return catchRejection(raceWithSignal(signal, promise2).then(function (output) {
            validateActive(signal);
            return output;
        }));
    };
};
var createDelay = function (signal) {
    var pause = createPause(signal);
    return function (timeoutMs) {
        return pause(new Promise(function (resolve) { return setTimeout(resolve, timeoutMs); }));
    };
};
// src/listenerMiddleware/index.ts
var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function (parentAbortSignal) {
    var linkControllers = function (controller) { return addAbortSignalListener(parentAbortSignal, function () { return abortControllerWithReason(controller, parentAbortSignal.reason); }); };
    return function (taskExecutor) {
        assertFunction(taskExecutor, "taskExecutor");
        var childAbortController = new AbortController();
        linkControllers(childAbortController);
        var result = runTask(function () { return __async(void 0, null, function () {
            var result2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        validateActive(parentAbortSignal);
                        validateActive(childAbortController.signal);
                        return [4 /*yield*/, taskExecutor({
                                pause: createPause(childAbortController.signal),
                                delay: createDelay(childAbortController.signal),
                                signal: childAbortController.signal
                            })];
                    case 1:
                        result2 = _c.sent();
                        validateActive(childAbortController.signal);
                        return [2 /*return*/, result2];
                }
            });
        }); }, function () { return abortControllerWithReason(childAbortController, taskCompleted); });
        return {
            result: createPause(parentAbortSignal)(result),
            cancel: function () {
                abortControllerWithReason(childAbortController, taskCancelled);
            }
        };
    };
};
var createTakePattern = function (startListening, signal) {
    var take = function (predicate, timeout) { return __async(void 0, null, function () {
        var unsubscribe, tuplePromise, promises, output;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    validateActive(signal);
                    unsubscribe = function () {
                    };
                    tuplePromise = new Promise(function (resolve, reject) {
                        var stopListening = startListening({
                            predicate: predicate,
                            effect: function (action, listenerApi) {
                                listenerApi.unsubscribe();
                                resolve([
                                    action,
                                    listenerApi.getState(),
                                    listenerApi.getOriginalState()
                                ]);
                            }
                        });
                        unsubscribe = function () {
                            stopListening();
                            reject();
                        };
                    });
                    promises = [
                        tuplePromise
                    ];
                    if (timeout != null) {
                        promises.push(new Promise(function (resolve) { return setTimeout(resolve, timeout, null); }));
                    }
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, raceWithSignal(signal, Promise.race(promises))];
                case 2:
                    output = _c.sent();
                    validateActive(signal);
                    return [2 /*return*/, output];
                case 3:
                    unsubscribe();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return function (predicate, timeout) { return catchRejection(take(predicate, timeout)); };
};
var getListenerEntryPropsFrom = function (options) {
    var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
    if (type) {
        predicate = createAction(type).match;
    }
    else if (actionCreator) {
        type = actionCreator.type;
        predicate = actionCreator.match;
    }
    else if (matcher) {
        predicate = matcher;
    }
    else if (predicate) {
    }
    else {
        throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
    }
    assertFunction(effect, "options.listener");
    return { predicate: predicate, type: type, effect: effect };
};
var createListenerEntry = function (options) {
    var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
    var id = nanoid();
    var entry = {
        id: id,
        effect: effect,
        type: type,
        predicate: predicate,
        pending: new Set(),
        unsubscribe: function () {
            throw new Error("Unsubscribe not initialized");
        }
    };
    return entry;
};
var cancelActiveListeners = function (entry) {
    entry.pending.forEach(function (controller) {
        abortControllerWithReason(controller, listenerCancelled);
    });
};
var createClearListenerMiddleware = function (listenerMap) {
    return function () {
        listenerMap.forEach(cancelActiveListeners);
        listenerMap.clear();
    };
};
var safelyNotifyError = function (errorHandler, errorToNotify, errorInfo) {
    try {
        errorHandler(errorToNotify, errorInfo);
    }
    catch (errorHandlerError) {
        setTimeout(function () {
            throw errorHandlerError;
        }, 0);
    }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.error.apply(console, __spreadArray([alm + "/error"], args));
};
function createListenerMiddleware(middlewareOptions) {
    var _this = this;
    if (middlewareOptions === void 0) { middlewareOptions = {}; }
    var listenerMap = new Map();
    var extra = middlewareOptions.extra, _c = middlewareOptions.onError, onError = _c === void 0 ? defaultErrorHandler : _c;
    assertFunction(onError, "onError");
    var insertEntry = function (entry) {
        entry.unsubscribe = function () { return listenerMap.delete(entry.id); };
        listenerMap.set(entry.id, entry);
        return function (cancelOptions) {
            entry.unsubscribe();
            if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
                cancelActiveListeners(entry);
            }
        };
    };
    var findListenerEntry = function (comparator) {
        for (var _i = 0, _c = Array.from(listenerMap.values()); _i < _c.length; _i++) {
            var entry = _c[_i];
            if (comparator(entry)) {
                return entry;
            }
        }
        return void 0;
    };
    var startListening = function (options) {
        var entry = findListenerEntry(function (existingEntry) { return existingEntry.effect === options.effect; });
        if (!entry) {
            entry = createListenerEntry(options);
        }
        return insertEntry(entry);
    };
    var stopListening = function (options) {
        var _c = getListenerEntryPropsFrom(options), type = _c.type, effect = _c.effect, predicate = _c.predicate;
        var entry = findListenerEntry(function (entry2) {
            var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
            return matchPredicateOrType && entry2.effect === effect;
        });
        if (entry) {
            entry.unsubscribe();
            if (options.cancelActive) {
                cancelActiveListeners(entry);
            }
        }
        return !!entry;
    };
    var notifyListener = function (entry, action, api, getOriginalState) { return __async(_this, null, function () {
        var internalTaskController, take, listenerError_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    internalTaskController = new AbortController();
                    take = createTakePattern(startListening, internalTaskController.signal);
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, 4, 5]);
                    entry.pending.add(internalTaskController);
                    return [4 /*yield*/, Promise.resolve(entry.effect(action, assign({}, api, {
                            getOriginalState: getOriginalState,
                            condition: function (predicate, timeout) { return take(predicate, timeout).then(Boolean); },
                            take: take,
                            delay: createDelay(internalTaskController.signal),
                            pause: createPause(internalTaskController.signal),
                            extra: extra,
                            signal: internalTaskController.signal,
                            fork: createFork(internalTaskController.signal),
                            unsubscribe: entry.unsubscribe,
                            subscribe: function () {
                                listenerMap.set(entry.id, entry);
                            },
                            cancelActiveListeners: function () {
                                entry.pending.forEach(function (controller, _, set) {
                                    if (controller !== internalTaskController) {
                                        abortControllerWithReason(controller, listenerCancelled);
                                        set.delete(controller);
                                    }
                                });
                            }
                        })))];
                case 2:
                    _c.sent();
                    return [3 /*break*/, 5];
                case 3:
                    listenerError_1 = _c.sent();
                    if (!(listenerError_1 instanceof TaskAbortError)) {
                        safelyNotifyError(onError, listenerError_1, {
                            raisedBy: "effect"
                        });
                    }
                    return [3 /*break*/, 5];
                case 4:
                    abortControllerWithReason(internalTaskController, listenerCompleted);
                    entry.pending.delete(internalTaskController);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
    var middleware = function (api) { return function (next) { return function (action) {
        if (!isAction(action)) {
            return next(action);
        }
        if (addListener.match(action)) {
            return startListening(action.payload);
        }
        if (clearAllListeners.match(action)) {
            clearListenerMiddleware();
            return;
        }
        if (removeListener.match(action)) {
            return stopListening(action.payload);
        }
        var originalState = api.getState();
        var getOriginalState = function () {
            if (originalState === INTERNAL_NIL_TOKEN) {
                throw new Error(alm + ": getOriginalState can only be called synchronously");
            }
            return originalState;
        };
        var result;
        try {
            result = next(action);
            if (listenerMap.size > 0) {
                var currentState = api.getState();
                var listenerEntries = Array.from(listenerMap.values());
                for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
                    var entry = listenerEntries_1[_i];
                    var runListener = false;
                    try {
                        runListener = entry.predicate(action, currentState, originalState);
                    }
                    catch (predicateError) {
                        runListener = false;
                        safelyNotifyError(onError, predicateError, {
                            raisedBy: "predicate"
                        });
                    }
                    if (!runListener) {
                        continue;
                    }
                    notifyListener(entry, action, api, getOriginalState);
                }
            }
        }
        finally {
            originalState = INTERNAL_NIL_TOKEN;
        }
        return result;
    }; }; };
    return {
        middleware: middleware,
        startListening: startListening,
        stopListening: stopListening,
        clearListeners: clearListenerMiddleware
    };
}
// src/autoBatchEnhancer.ts
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function () { return function (payload) {
    var _c;
    return ({
        payload: payload,
        meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    });
}; };
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
    throw err;
}, 0); }); };
var createQueueWithTimer = function (timeout) {
    return function (notify) {
        setTimeout(notify, timeout);
    };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = function (options) {
    if (options === void 0) { options = { type: "raf" }; }
    return function (next) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var store = next.apply(void 0, args);
        var notifying = true;
        var shouldNotifyAtEndOfTick = false;
        var notificationQueued = false;
        var listeners = new Set();
        var queueCallback = options.type === "tick" ? queueMicrotaskShim : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
        var notifyListeners = function () {
            notificationQueued = false;
            if (shouldNotifyAtEndOfTick) {
                shouldNotifyAtEndOfTick = false;
                listeners.forEach(function (l) { return l(); });
            }
        };
        return Object.assign({}, store, {
            subscribe: function (listener2) {
                var wrappedListener = function () { return notifying && listener2(); };
                var unsubscribe = store.subscribe(wrappedListener);
                listeners.add(listener2);
                return function () {
                    unsubscribe();
                    listeners.delete(listener2);
                };
            },
            dispatch: function (action) {
                var _a;
                try {
                    notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
                    shouldNotifyAtEndOfTick = !notifying;
                    if (shouldNotifyAtEndOfTick) {
                        if (!notificationQueued) {
                            notificationQueued = true;
                            queueCallback(notifyListeners);
                        }
                    }
                    return store.dispatch(action);
                }
                finally {
                    notifying = true;
                }
            }
        });
    }; };
};
// src/index.ts
(0,immer__WEBPACK_IMPORTED_MODULE_2__.enableES5)();

//# sourceMappingURL=redux-toolkit.esm.js.map

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__DO_NOT_USE__ActionTypes": () => (/* binding */ ActionTypes),
/* harmony export */   "applyMiddleware": () => (/* binding */ applyMiddleware),
/* harmony export */   "bindActionCreators": () => (/* binding */ bindActionCreators),
/* harmony export */   "combineReducers": () => (/* binding */ combineReducers),
/* harmony export */   "compose": () => (/* binding */ compose),
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "legacy_createStore": () => (/* binding */ legacy_createStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (true) {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( false ? 0 : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( false ? 0 : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( false ? 0 : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( false ? 0 : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( false ? 0 : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( false ? 0 : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error( false ? 0 : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error( false ? 0 : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( false ? 0 : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( false ? 0 : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( false ? 0 : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( false ? 0 : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( false ? 0 : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( false ? 0 : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}




/***/ }),

/***/ "./node_modules/reselect/es/defaultMemoize.js":
/*!****************************************************!*\
  !*** ./node_modules/reselect/es/defaultMemoize.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKeyComparator": () => (/* binding */ createCacheKeyComparator),
/* harmony export */   "defaultEqualityCheck": () => (/* binding */ defaultEqualityCheck),
/* harmony export */   "defaultMemoize": () => (/* binding */ defaultMemoize)
/* harmony export */ });
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}
// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ "./node_modules/reselect/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/reselect/es/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelector": () => (/* binding */ createSelector),
/* harmony export */   "createSelectorCreator": () => (/* binding */ createSelectorCreator),
/* harmony export */   "createStructuredSelector": () => (/* binding */ createStructuredSelector),
/* harmony export */   "defaultEqualityCheck": () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultEqualityCheck),
/* harmony export */   "defaultMemoize": () => (/* reexport safe */ _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize)
/* harmony export */ });
/* harmony import */ var _defaultMemoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultMemoize */ "./node_modules/reselect/es/defaultMemoize.js");



function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}
var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize__WEBPACK_IMPORTED_MODULE_0__.defaultMemoize);
// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

/***/ }),

/***/ "./public/constants/components/common/icon.ts":
/*!****************************************************!*\
  !*** ./public/constants/components/common/icon.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ICON": () => (/* binding */ DEFAULT_ICON),
/* harmony export */   "ICON_INFO": () => (/* binding */ ICON_INFO)
/* harmony export */ });
const ICON_INFO = {
    // INTERNET: {
    //     type: "INTERNET",
    //     extenstion: "",
    //     imgSrc: "./assets/icons/icon-internet.png",
    //     explanation: "인터넷 아이콘",
    // },
    // FOLDER: {
    //     type: "FOLDER",
    //     extenstion: "",
    //     imgSrc: "./assets/icons/icon-folder.png",
    //     explanation: "폴더 아이콘",
    // },
    // TXT: {
    //     type: "TXT",
    //     extenstion: "txt",
    //     imgSrc: "./assets/icons/icon-file-document.png",
    //     explanation: "텍스트 파일 아이콘",
    // },
    CALCULATOR: {
        type: "CALCULATOR",
        extenstion: "",
        imgSrc: "./assets/icons/icon-file-document.png",
        explanation: "계산기 아이콘",
    },
};
/*
* 기본 아이콘 정보
*/
const DEFAULT_ICON = [
    // {
    //     idx: 0,
    //     name: "인터넷 익스플로러",
    //     extenstion: ICON_INFO.INTERNET.extenstion,
    //     type: ICON_INFO.INTERNET.type,
    //     imgSrc: ICON_INFO.INTERNET.imgSrc,
    //     explanation: ICON_INFO.INTERNET.explanation,
    //     style: { gridRowStart: 1, gridColumnStart: 1 },
    // },
    // { 
    //     idx: 1,
    //     name: "내 문서",
    //     extension: ICON_INFO.FOLDER.extenstion,
    //     type: ICON_INFO.FOLDER.type,
    //     imgSrc: ICON_INFO.FOLDER.imgSrc,
    //     explanation: ICON_INFO.FOLDER.explanation,
    //     style: { gridRowStart: 2, gridColumnStart: 1 },
    // },
    // {
    //     idx: 2,
    //     name: "파일.txt",
    //     extension: ICON_INFO.TXT.extenstion,
    //     type: ICON_INFO.TXT.type,
    //     imgSrc: ICON_INFO.TXT.imgSrc,
    //     explanation: ICON_INFO.TXT.explanation,
    //     style: { gridRowStart: 3, gridColumnStart: 1 },
    // },
    {
        idx: 0,
        name: "계산기",
        extension: ICON_INFO.CALCULATOR.extenstion,
        type: ICON_INFO.CALCULATOR.type,
        imgSrc: ICON_INFO.CALCULATOR.imgSrc,
        explanation: ICON_INFO.CALCULATOR.explanation,
        style: { gridRowStart: 1, gridColumnStart: 1, backgroundPosition: "-48px -48px" },
    },
];


/***/ }),

/***/ "./public/src/App.ts":
/*!***************************!*\
  !*** ./public/src/App.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_common_Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/Icons */ "./public/src/components/common/Icons.ts");
/* harmony import */ var _components_nav_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav/Nav */ "./public/src/components/nav/Nav.ts");


function Container() {
    return (`
        <div class="container">
            ${(0,_components_common_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])()}
            ${(0,_components_nav_Nav__WEBPACK_IMPORTED_MODULE_1__["default"])()}
        </div>
    `);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ "./public/src/components/common/Icons.ts":
/*!***********************************************!*\
  !*** ./public/src/components/common/Icons.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/CustomReact */ "./public/src/core/CustomReact.ts");
/* harmony import */ var _reducer_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../reducer/store */ "./public/src/reducer/store.ts");
/* harmony import */ var _reducer_modals_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducer/modals/action */ "./public/src/reducer/modals/action.ts");
/* harmony import */ var _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/components/common/icon */ "./public/constants/components/common/icon.ts");
/* harmony import */ var _utils_components_common_icons_event_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/components/common/icons-event-helper */ "./public/src/utils/components/common/icons-event-helper.ts");





/*
* 아이콘 컴포넌트
*/
function Icons() {
    const { dispatch, getState } = _reducer_store__WEBPACK_IMPORTED_MODULE_1__["default"];
    const { modals: modalsState } = getState();
    const [icons, setIcons] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("Icons", _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_ICON);
    /*
    * 아이콘 이벤트
    */
    // 1. 아이콘 클릭했을 때
    const iconClickEvent = () => {
        const iconList = document.querySelectorAll(".default-icon");
        return [Array.from(iconList), 'mousedown', _utils_components_common_icons_event_helper__WEBPACK_IMPORTED_MODULE_4__.iconClickCallback];
    };
    // 2. 아이콘 외부 화면 클릭했을 때
    const containerClickEvent = () => {
        const container = document.querySelector(".container");
        return [container, 'mousedown', _utils_components_common_icons_event_helper__WEBPACK_IMPORTED_MODULE_4__.containerClickCallback];
    };
    // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
    // TODO. 파일 아이콘이 폴더 위로 이동될 경우 폴더 안으로 이동되도록 수정
    // TODO. 아이콘끼리 겹치지 않도록 수정
    const iconDragEvent = () => {
        const iconList = document.querySelectorAll(".default-icon");
        return [Array.from(iconList), 'dragstart', _utils_components_common_icons_event_helper__WEBPACK_IMPORTED_MODULE_4__.iconDragCallback, icons, setIcons];
    };
    // 4. 아이콘 더블클릭이벤트
    const iconDbClickEvent = () => {
        // return [Array.from(iconList), 'dblclick', iconDbClickCallback, icons];
        const iconList = document.querySelectorAll(".default-icon");
        const neededState = { modalsLength: modalsState.modals.length, icons };
        const setNeededState = (value) => dispatch((0,_reducer_modals_action__WEBPACK_IMPORTED_MODULE_2__.addModal)(value));
        return [Array.from(iconList), 'dblclick', _utils_components_common_icons_event_helper__WEBPACK_IMPORTED_MODULE_4__.iconDbClickCallback, neededState, setNeededState];
    };
    const iconEvents = [
        iconClickEvent,
        containerClickEvent,
        iconDragEvent,
        iconDbClickEvent,
    ];
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)(iconEvents);
    /*
    * 아이콘 컴포넌트
    */
    const iconTemplate = (icon) => {
        return (`
            <li
                id="icon-${icon.idx}"
                class="default-icon"
                draggable="true"
                data-icon-name="${icon.name}"
                aria-icon-explanation="${icon.explanation}"
                aria-label="${icon.explanation}"
                style="grid-column-start: ${icon.style.gridColumnStart};grid-row-start: ${icon.style.gridRowStart};"
            >
                <button>
                    <figure style="background-position: ${icon.style.backgroundPosition}"></figure>
                    <figcaption>
                        ${icon.name.substring(0, 8)}
                        ${icon.name.length > 8 ? '...' : ''}
                    </figcaption>
                </button>
            </li>`);
    };
    return (`<ol
            class="main-screen-container"
            aria-label="바탕화면"
        >
            ${icons.map((icon) => iconTemplate(icon)).join('')}
        </ol>
        <div>${modalsState.modals.map((v) => v.content).join('')}</div>`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icons);


/***/ }),

/***/ "./public/src/components/common/WindowModal.ts":
/*!*****************************************************!*\
  !*** ./public/src/components/common/WindowModal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/CustomReact */ "./public/src/core/CustomReact.ts");

function WindowModal({ icon, modalIdx, main, footer }) {
    const numCriteria = Number.parseInt(icon.style.backgroundPosition.split("px")[0]);
    const [isOpen, setIsOpen] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", true);
    const [modalIndex, setModalIndex] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", modalIdx);
    const [modalSize, setModalSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", { width: 600, height: 500 });
    const [modalTranslate, setModalTranslate] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", { X: 100, Y: 150 });
    const [isFullSize, setIsFullSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", false);
    /*
    * 모달 이벤트
    */
    // 1. 모달 창 헤더 오른쪽(.modal-header-right) (-, ㅁ, x) 버튼을 눌렀을 때
    // 1 - 1. 닫기(x) 버튼
    // const closeBtnClickEvent = () => {
    //     const closeBtn = document.querySelector("#close-btn");
    //     console.log("closeBtn",);
    //     const closeBtnClickCallback = (e: MouseEvent) => {
    //         e.preventDefault();
    //         console.log("yahoo");
    //     }
    //     return [closeBtn, 'click', closeBtnClickCallback]
    // }
    // const modalEvents = [
    //     closeBtnClickEvent,
    // ];
    // useEvents(modalEvents);
    const minimizeBtnEvent = () => {
        const minimizeBtn = document.querySelector("#minimize-btn");
        // const maximizeBtn = document.querySelector("#maximize-btn");
        // const restoreDownBtn = document.querySelector("#restore-down-btn");
        // const closeBtn = document.querySelector("#close-btn");
        minimizeBtn === null || minimizeBtn === void 0 ? void 0 : minimizeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("eeeeee", e);
            alert('eeeeeee');
        });
        return [];
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([minimizeBtnEvent]);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handleCSSChange = () => {
            console.log("modalIdx", modalIdx);
            const defaultTranslate = { X: modalTranslate.X + 20 * modalIdx, Y: modalTranslate.Y + 20 * modalIdx };
            setModalTranslate(defaultTranslate);
        };
        handleCSSChange();
    }, []);
    // useEffect(() => {
    //     //
    // }, [modalSize.width, modalSize.height, modalTranslate.X, modalTranslate.Y])
    const modalContent = () => {
        return (`<div
                id="window-modal-${modalIndex}"
                class="window-modal"
                style="width: ${modalSize.width}px; height: ${modalSize.height}px; transform: translate(${modalTranslate.X}px, ${modalTranslate.Y}px)"
            >
                <header class="modal-header stop-drag">
                    <div class="modal-header-left">
                    <div class="sm-icon-img" style="background-position: ${numCriteria / 2}px ${numCriteria / 2}px;"></div>
                    </div>
                    <div class="modal-header-middle">
                        <p>${icon.name}</p>
                    </div>
                    <div class="modal-header-right">
                        <button id="minimize-btn">
                            <svg style="width: 16px;height: 16px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,14H4V10H20" /></svg>
                        </button>
                        ${isFullSize
            ? '<button id="restore-down-btn"><svg style="width: 16px;height: 16px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" /></svg></button>'
            : '<button id="maximize-btn"><svg style="width: 16px;height: 16px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" /></svg></button>'}
                        <button id="close-btn">
                            <svg style="width: 20px;height: 20px;fill: rgb(255, 255, 255);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                        </button>
                    </div>
                </header>
                <main class="modal-main">
                    <button class="main-btn">네이버로 이동</button>
                </main>
            </div>`);
    };
    return (`${isOpen ? modalContent() : ''}`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindowModal);


/***/ }),

/***/ "./public/src/components/nav/Nav.ts":
/*!******************************************!*\
  !*** ./public/src/components/nav/Nav.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reducer_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../reducer/store */ "./public/src/reducer/store.ts");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavItem */ "./public/src/components/nav/NavItem.ts");


function Nav() {
    const { dispatch, getState } = _reducer_store__WEBPACK_IMPORTED_MODULE_0__["default"];
    const { modals: modalsState } = getState();
    return (`
        <footer id="ststus-display-bar" aria-label="하단 상태 창">
            <button class="window-button">
                <img src="./assets/window-logo.png" alt="윈도우 로고" />
                <p>시작</p>
            </button>
            <nav>
                ${modalsState.modals.map((modal) => (0,_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"])(modal.icon)).join('')}
            </nav>
            <div class="cur-time">
                <p>오전 11:55</p>
            </div>
        </footer>
    `);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ "./public/src/components/nav/NavItem.ts":
/*!**********************************************!*\
  !*** ./public/src/components/nav/NavItem.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function NavItem(icon) {
    const numCriteria = Number.parseInt(icon.style.backgroundPosition.split("px")[0]);
    return (`
        <div class="nav-item focused">
            <div class="sm-icon-img" style="background-position: ${numCriteria / 2}px ${numCriteria / 2}px;"></div>
            <p>${icon.name}</p>
        </div>`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);


/***/ }),

/***/ "./public/src/core/CustomReact.ts":
/*!****************************************!*\
  !*** ./public/src/core/CustomReact.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_render": () => (/* binding */ _render),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "useEffect": () => (/* binding */ useEffect),
/* harmony export */   "useEvents": () => (/* binding */ useEvents),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
/*
* 리액트 hooks 간단히 구현
*/
function CustomReact() {
    let root = null;
    let rootComponent = null;
    const states = new Map();
    const curStatesIdx = new Map();
    let mountEffects = [];
    const effectDependencies = [];
    const options = {
        curEffectIdx: 0,
        renderCount: 0,
    };
    /*
    * CustomReact hooks
    * =========================================================================
    * CustomReact hooks 1. render
    * render: root가 되는 엘리먼트를 렌더링하는 메서드
    */
    const render = (rootEl, rootComponentEl) => {
        if (rootEl) {
            root = rootEl;
        }
        if (rootComponentEl) {
            rootComponent = rootComponentEl;
        }
        _render();
    };
    /*
    * CustomReact hooks 2. useEvents
    * useEvents: 컴포넌트를 모두 렌더링한 후 이벤트를 등록할 수 있도록 도와주는 메서드
    */
    const useEvents = (eventFns) => {
        useEffect(() => {
            console.log("eventFns", eventFns);
            eventFns.forEach((fn) => {
                console.log("yahoo1", fn);
                /*
                * el: 이벤트 함수를 붙이고 싶은 엘리먼트의 배열 혹은 단일 엘리먼트
                * event: 이벤트 함수의 이벤트 종류
                * callback: 이벤트 함수의 콜백 함수
                * neededState: 이벤트 함수를 실행하면서 필요한 state
                * setNeededState: 이벤트 함수를 실행하면서 바꾸고 싶은 state를 변화시키는 함수
                */
                const [el, event, callback, neededState, setNeededState] = fn();
                console.log("yahoo2", el, event, callback, neededState, setNeededState);
                if (Array.isArray(el)) {
                    el.forEach((targetEl) => {
                        targetEl.addEventListener(event, (e) => callback(e, targetEl, neededState, setNeededState));
                    });
                    return;
                }
                el.addEventListener(event, (e) => callback(e, el, neededState, setNeededState));
            });
            return () => {
                eventFns.forEach((fn) => {
                    const [el, event, callback, neededState, setNeededState] = fn();
                    if (Array.isArray(el)) {
                        el.forEach((targetEl) => {
                            targetEl.removeEventListener(event, (e) => callback(e, targetEl, neededState, setNeededState));
                        });
                        return;
                    }
                    el.removeEventListener(event, (e) => callback(e, el, neededState, setNeededState));
                });
            };
        }, []);
    };
    /**
    * CustomReact hooks 3. useState
    * useState: state 관리하도록 도와주는 메서드
    * 클로저(함수 선언시의 스코프를 기억하는 자바스크립트의 특징)를 활용
    * @param {string} caller useState를 호출한 컴포넌트(함수)명
    * @param {any} initState 초기화할 state
    */
    const useState = (caller, initState) => {
        if (!states.get(caller)) {
            states.set(caller, []);
            curStatesIdx.set(caller, 0);
        }
        const curStateIdx = curStatesIdx.get(caller);
        if (!states.get(caller)[curStateIdx]) {
            states.get(caller)[curStateIdx] = initState;
        }
        const state = states.get(caller)[curStateIdx];
        const setState = (newState) => {
            states.get(caller)[curStateIdx] = newState;
            console.log('setState', caller, curStateIdx, newState);
            _render();
        };
        curStatesIdx.set(caller, curStateIdx + 1);
        return [state, setState];
    };
    /*
    * CustomReact hooks 4. useEffect
    * useEffect: dependency 배열의 값들에 변경이 생겼을 경우 callback을 실행하는 메서드
    */
    const useEffect = (callback, dependencies) => {
        // 1. dependency가 없을 경우 callback 바로 실행 (mount 되었을 때 실행)
        // ex. useEffect(() => {}, [])
        if (dependencies.length === 0) {
            mountEffects.push(callback);
            return;
        }
        // 2. dependency가 있을 경우 dependency 변경 시에만 callback 실행
        // ex. useEffect(() => {}, [a, b, ..., z])
        const { curEffectIdx } = options;
        if (effectDependencies.length === curEffectIdx) {
            effectDependencies.push(dependencies);
        }
        console.log("effectDependencies", effectDependencies);
        const dependency = effectDependencies[curEffectIdx];
        let hasChanged = true;
        if (dependency) {
            // Array.prototype.some: 판별 함수 적어도 하나라도 통과하는지 체크
            // Object.is: 두 개의 파라미터가 동일한지 체크
            // 즉, 기존 dependency와 새로 받은 dependency 사이에 차이가 하나라도 있는 경우 true를 반환
            hasChanged = dependencies.some((v, i) => {
                return !Object.is(v, dependency[i]);
            });
        }
        console.log("hasChanged", hasChanged);
        if (hasChanged) {
            effectDependencies[curEffectIdx] = dependencies;
            callback();
        }
        options.curEffectIdx += 1;
    };
    /*
    * CustomReact 내부 함수
    * =========================================================================
    * debounceFrame: 1초당 디스플레이 주사율만큼 실행하게 하여 지나친 렌더링을 방지하기 위한 메서드
    */
    const debounceFrame = (callback) => {
        let nextFrameCallback = -1;
        return () => {
            cancelAnimationFrame(nextFrameCallback);
            nextFrameCallback = requestAnimationFrame(callback);
        };
    };
    /*
    * executeMountEffects: mount 시 실행할 메서드들을 실행하는 메서드
    */
    const executeMountEffects = () => {
        if (mountEffects.length > 0) {
            console.log('executeMountEffects', mountEffects);
            mountEffects.forEach((mountEfFn) => mountEfFn());
        }
    };
    /*
    * _render: 실질적으로 리액트 내부에서 렌더링을 담당하는 메서드
    */
    const _render = debounceFrame(() => {
        if (!root || !rootComponent) {
            return;
        }
        // 화면 렌더링
        root.innerHTML = rootComponent();
        // 마운트 시 실행시킬 콜백 함수 실행
        executeMountEffects();
        // 변수 초기화
        const callersName = [];
        for (const [key, _] of states) {
            callersName.push(key);
        }
        callersName.forEach((caller) => {
            curStatesIdx.set(caller, 0);
        });
        console.log(states.entries());
        console.log(curStatesIdx.entries());
        options.curEffectIdx = 0;
        console.log('_render curEffectIdx', options.curEffectIdx);
        mountEffects = [];
        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });
    return { _render, render, useEvents, useState, useEffect };
}
const { _render, render, useEvents, useState, useEffect } = CustomReact();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomReact);


/***/ }),

/***/ "./public/src/reducer/global/action.ts":
/*!*********************************************!*\
  !*** ./public/src/reducer/global/action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeGlobalIsLoading": () => (/* binding */ changeGlobalIsLoading),
/* harmony export */   "clearAllReducerState": () => (/* binding */ clearAllReducerState)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./public/src/reducer/global/actionType.ts");


const clearAllReducerState = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)(_actionType__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ALL_STATE);
const changeGlobalIsLoading = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)(_actionType__WEBPACK_IMPORTED_MODULE_0__.CHANGE_GLOBAL_IS_LOADING);


/***/ }),

/***/ "./public/src/reducer/global/actionType.ts":
/*!*************************************************!*\
  !*** ./public/src/reducer/global/actionType.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_GLOBAL_IS_LOADING": () => (/* binding */ CHANGE_GLOBAL_IS_LOADING),
/* harmony export */   "CLEAR_ALL_STATE": () => (/* binding */ CLEAR_ALL_STATE)
/* harmony export */ });
const CLEAR_ALL_STATE = 'GLOBAL/CLEAR_ALL_STATE';
const CHANGE_GLOBAL_IS_LOADING = 'GLOBAL/CHANGE_GLOBAL_IS_LOADING';


/***/ }),

/***/ "./public/src/reducer/global/reducer.ts":
/*!**********************************************!*\
  !*** ./public/src/reducer/global/reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "globalStateSelector": () => (/* binding */ globalStateSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./public/src/reducer/global/action.ts");
/* eslint-disable no-param-reassign */


const initialState = {
    isLoading: false,
};
const globalStateSelector = (state) => {
    return state.globalReducer;
};
const globalReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, builder => builder.addCase(_action__WEBPACK_IMPORTED_MODULE_0__.changeGlobalIsLoading, (state, action) => {
    state.isLoading = action.payload;
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalReducer);


/***/ }),

/***/ "./public/src/reducer/modals/action.ts":
/*!*********************************************!*\
  !*** ./public/src/reducer/modals/action.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addModal": () => (/* binding */ addModal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./public/src/reducer/modals/actionType.ts");


const addModal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)(_actionType__WEBPACK_IMPORTED_MODULE_0__.ADD_MODAL);


/***/ }),

/***/ "./public/src/reducer/modals/actionType.ts":
/*!*************************************************!*\
  !*** ./public/src/reducer/modals/actionType.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_MODAL": () => (/* binding */ ADD_MODAL)
/* harmony export */ });
const ADD_MODAL = 'MODALS/ADD_MODAL';


/***/ }),

/***/ "./public/src/reducer/modals/reducer.ts":
/*!**********************************************!*\
  !*** ./public/src/reducer/modals/reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "modalStateSelector": () => (/* binding */ modalStateSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./public/src/reducer/modals/action.ts");


const initialState = {
    modals: [],
};
const modalStateSelector = (state) => {
    return state.modalReducer;
};
const modalsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, builder => builder.addCase(_action__WEBPACK_IMPORTED_MODULE_0__.addModal, (state, action) => {
    state.modals.push(action.payload);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalsReducer);


/***/ }),

/***/ "./public/src/reducer/store.ts":
/*!*************************************!*\
  !*** ./public/src/reducer/store.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/CustomReact */ "./public/src/core/CustomReact.ts");
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/reducer */ "./public/src/reducer/global/reducer.ts");
/* harmony import */ var _modals_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/reducer */ "./public/src/reducer/modals/reducer.ts");

// import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
    global: _global_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
    modals: _modals_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
    reducer: rootReducer,
    devTools: true,
});
store.subscribe(_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__._render);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ "./public/src/utils/components/common/icons-event-helper.ts":
/*!******************************************************************!*\
  !*** ./public/src/utils/components/common/icons-event-helper.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containerClickCallback": () => (/* binding */ containerClickCallback),
/* harmony export */   "getIconIdx": () => (/* binding */ getIconIdx),
/* harmony export */   "iconClickCallback": () => (/* binding */ iconClickCallback),
/* harmony export */   "iconDbClickCallback": () => (/* binding */ iconDbClickCallback),
/* harmony export */   "iconDragCallback": () => (/* binding */ iconDragCallback)
/* harmony export */ });
/* harmony import */ var _components_common_WindowModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/common/WindowModal */ "./public/src/components/common/WindowModal.ts");

/*
* 아이콘 이름 관련 (이름이 길 경우 짧게 / 클릭 시에 풀네임)
*/
const abbreviateIconName = (v) => {
    const iconFigcaption = v.children[0].children[1];
    const fullIconName = v.dataset.iconName || iconFigcaption.innerHTML;
    const shortName = `${fullIconName.substring(0, 8)}...`;
    if (fullIconName.length > 8) {
        iconFigcaption.innerHTML = shortName;
    }
};
const showFullIconName = (v) => {
    const iconFigcaption = v.children[0].children[1];
    const fullIconName = v.dataset.iconName || iconFigcaption.innerHTML;
    if (fullIconName.length > 8) {
        iconFigcaption.innerHTML = fullIconName;
    }
};
/*
* 아이콘 클릭 클래스 관련 (클릭되었을 때 clicked 클래스 추가 / 삭제)
*/
const inFocusIcon = (v) => {
    v.classList.add('clicked');
};
const outFocusIcons = () => {
    const iconList = document.querySelectorAll(".default-icon");
    iconList.forEach((v) => {
        if (v.classList.value.includes('clicked')) {
            v.classList.remove('clicked');
            abbreviateIconName(v);
        }
    });
};
// 1. 아이콘 클릭했을 때
const iconClickCallback = (e, target) => {
    console.log(e);
    e.stopPropagation();
    outFocusIcons();
    inFocusIcon(target);
    showFullIconName(target);
};
// 2. 아이콘 외부 화면 클릭했을 때
const containerClickCallback = () => {
    outFocusIcons();
};
const getIconIdx = (v) => {
    return Number.parseInt(v.id.split("-")[1]);
};
/*
* 아이콘 드래그 할 때 이미지
*/
const getDragIconEl = (v, icons) => {
    const rootEl = document.querySelector("#root") || document.body;
    const idx = getIconIdx(v);
    const draggedIcon = icons.filter((v) => v.idx === idx);
    const iconDiv = document.createElement('div');
    iconDiv.classList.add("default-icon");
    const cssText = "position: absolute;width: 80px;top:-100px;left:-100px;";
    iconDiv.style.cssText = cssText;
    iconDiv.innerHTML = getDragIconInnerElem(draggedIcon[0].name);
    rootEl.appendChild(iconDiv);
    return iconDiv;
};
const getDragIconInnerElem = (iconName) => {
    return (`
        <button>
            <figure style="background-image: url('./assets/icons/windows-xp-icons-md.png');background-position: -48px -48px;"></figure>
            <figcaption>${iconName}</figcaption>
        </button>`);
};
const iconDragCallback = (dragstartEvent, target, icons, setIcons) => {
    var _a, _b;
    // 아이콘 index
    const iconIdx = Number.parseInt(((_a = target.getAttribute("id")) === null || _a === void 0 ? void 0 : _a.split("-")[1]) || '0');
    // 하나의 grid area의 가로/세로
    const ONE_GRID_AREA_WIDTH = 80;
    const ONE_GRID_AREA_HEIGHT = 100;
    // 기존 아이콘 그리드 column, row 시작점
    const prevGridColumnStart = Number.parseInt(target.style.gridColumnStart);
    const prevGridRowStart = Number.parseInt(target.style.gridRowStart);
    // 기존 아이콘 위치
    const prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];
    const rootEl = document.querySelector("#root") || document.body;
    const iconDiv = getDragIconEl(target, icons);
    let shiftX = dragstartEvent.clientX - target.getBoundingClientRect().left;
    let shiftY = dragstartEvent.clientY - target.getBoundingClientRect().top;
    (_b = dragstartEvent.dataTransfer) === null || _b === void 0 ? void 0 : _b.setDragImage(iconDiv, shiftX, shiftY);
    if (dragstartEvent.dataTransfer) {
        dragstartEvent.dataTransfer.effectAllowed = "move";
    }
    const dragoverFn = (dragoverEvent) => {
        dragoverEvent.preventDefault();
    };
    document.addEventListener('dragover', dragoverFn);
    document.addEventListener('drop', (dropEvent) => {
        dropEvent.preventDefault();
        // 클릭(mousedown) 이벤트가 적용된 엘리먼트만 이동
        if (target.classList.value.includes('clicked')) {
            // 드래그가 끝난 후 아이콘 위치
            const curIconPos = [dropEvent.clientX, dropEvent.clientY];
            // 기존 아이콘 그리드 좌표에서 몇 만큼 움직였는지
            const movingCoordinatesX = Number.parseInt(((curIconPos[0] - prevIconPos[0]) / ONE_GRID_AREA_WIDTH).toFixed());
            const movingCoordinatesY = Number.parseInt(((curIconPos[1] - prevIconPos[1]) / ONE_GRID_AREA_HEIGHT).toFixed());
            // 드래그가 끝난 후 column, row 시작점
            const gridColumnStart = prevGridColumnStart + movingCoordinatesX;
            const gridRowStart = prevGridRowStart + movingCoordinatesY;
            const style = { gridRowStart, gridColumnStart };
            const newIcons = [...icons];
            newIcons[iconIdx] = Object.assign(Object.assign({}, icons[iconIdx]), { style: Object.assign(Object.assign({}, icons[iconIdx].style), style) });
            setIcons(newIcons);
            document.removeEventListener('dragover', dragoverFn);
            rootEl.removeChild(iconDiv);
        }
    });
};
// 4. 아이콘 더블클릭이벤트
const iconDbClickCallback = (_, target, neededState, addModals) => {
    const modalIdx = neededState.modalsLength + 1;
    const idx = getIconIdx(target);
    const dbclickedIcon = neededState.icons.filter((v) => v.idx === idx);
    const windowModal = (0,_components_common_WindowModal__WEBPACK_IMPORTED_MODULE_0__["default"])({ icon: dbclickedIcon[0], modalIdx });
    if (windowModal) {
        const value = { icon: dbclickedIcon[0], content: windowModal };
        addModals(value);
    }
};


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.mjs":
/*!***********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": () => (/* binding */ un),
/* harmony export */   "applyPatches": () => (/* binding */ pn),
/* harmony export */   "castDraft": () => (/* binding */ K),
/* harmony export */   "castImmutable": () => (/* binding */ $),
/* harmony export */   "createDraft": () => (/* binding */ ln),
/* harmony export */   "current": () => (/* binding */ R),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "enableAllPlugins": () => (/* binding */ J),
/* harmony export */   "enableES5": () => (/* binding */ F),
/* harmony export */   "enableMapSet": () => (/* binding */ C),
/* harmony export */   "enablePatches": () => (/* binding */ T),
/* harmony export */   "finishDraft": () => (/* binding */ dn),
/* harmony export */   "freeze": () => (/* binding */ d),
/* harmony export */   "immerable": () => (/* binding */ L),
/* harmony export */   "isDraft": () => (/* binding */ r),
/* harmony export */   "isDraftable": () => (/* binding */ t),
/* harmony export */   "nothing": () => (/* binding */ H),
/* harmony export */   "original": () => (/* binding */ e),
/* harmony export */   "produce": () => (/* binding */ fn),
/* harmony export */   "produceWithPatches": () => (/* binding */ cn),
/* harmony export */   "setAutoFreeze": () => (/* binding */ sn),
/* harmony export */   "setUseProxies": () => (/* binding */ vn)
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s,v){if( true&&c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];"string"!=typeof p&&"number"!=typeof p&&(p=""+p),0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./public/src/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/CustomReact */ "./public/src/core/CustomReact.ts");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./public/src/App.ts");


const root = document.querySelector("#root");
if (root) {
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.render)(root, _App__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQTRFLHFCQUFxQixlQUFlLGFBQWEsbUJBQW1CLDJCQUEyQiw4REFBOEQsY0FBYywrQkFBK0IsU0FBUyxRQUFRLHVDQUF1QywyQ0FBMkMsa0RBQWtELElBQUksd0JBQXdCLDJDQUEyQyxxQ0FBcUMsSUFBSSx1Q0FBdUMsUUFBUSxHQUFHLDRFQUE0RSxjQUFjLFdBQVcsbUtBQW1LLGtCQUFrQixpQ0FBaUMsMEJBQTBCLGlDQUFpQyx3QkFBd0IsNkJBQTZCLGNBQWMsS0FBbUMsNEJBQTRCLFVBQVUsMEJBQTBCLDZCQUE2QixTQUFTLDZCQUE2QixzQkFBc0IsOEJBQThCLE1BQU0saUJBQWlCLEtBQUssS0FBSyxXQUFXLHdDQUF3QyxVQUFVLE9BQU8sdUJBQXVCLHFCQUFxQiwrQ0FBK0MsY0FBYyxHQUFHLEdBQUcseU1BQXlNLGlFQUFlLEVBQUUsRUFBd1c7QUFDajlqQjs7Ozs7OztVQ0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ2Q7QUFFOUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QyxJQUFJLElBQUksRUFBRTtJQUNOLHlEQUFNLENBQUMsSUFBSSxFQUFFLDRDQUFTLENBQUM7Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL0ByZWR1eGpzL3Rvb2xraXQvZGlzdC9yZWR1eC10b29sa2l0LmVzbS5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2VzL2luZGV4LmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9kZWZhdWx0TWVtb2l6ZS5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2luZGV4LmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvY29uc3RhbnRzL2NvbXBvbmVudHMvY29tbW9uL2ljb24udHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvQXBwLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL0ljb25zLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvY29tbW9uL1dpbmRvd01vZGFsLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvbXBvbmVudHMvbmF2L05hdi50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL25hdi9OYXZJdGVtLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2NvcmUvQ3VzdG9tUmVhY3QudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvcmVkdWNlci9nbG9iYWwvYWN0aW9uLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL3JlZHVjZXIvZ2xvYmFsL2FjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvcmVkdWNlci9nbG9iYWwvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9yZWR1Y2VyL21vZGFscy9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvcmVkdWNlci9tb2RhbHMvYWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9yZWR1Y2VyL21vZGFscy9yZWR1Y2VyLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL3JlZHVjZXIvc3RvcmUudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvdXRpbHMvY29tcG9uZW50cy9jb21tb24vaWNvbnMtZXZlbnQtaGVscGVyLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvaW1tZXIvZGlzdC9pbW1lci5lc20ubWpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59O1xyXG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xyXG52YXIgX19kZWZQcm9wcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzO1xyXG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcclxudmFyIF9fZ2V0T3duUHJvcFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xyXG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XHJcbnZhciBfX2RlZk5vcm1hbFByb3AgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7IHJldHVybiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7IH07XHJcbnZhciBfX3NwcmVhZFZhbHVlcyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXHJcbiAgICAgICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxyXG4gICAgICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XHJcbiAgICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9jID0gX19nZXRPd25Qcm9wU3ltYm9scyhiKTsgX2kgPCBfYy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHByb3AgPSBfY1tfaV07XHJcbiAgICAgICAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcclxuICAgICAgICAgICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gYTtcclxufTtcclxudmFyIF9fc3ByZWFkUHJvcHMgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7IH07XHJcbnZhciBfX2FzeW5jID0gZnVuY3Rpb24gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgZnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJlamVjdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHguZG9uZSA/IHJlc29sdmUoeC52YWx1ZSkgOiBQcm9taXNlLnJlc29sdmUoeC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfTtcclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkoX190aGlzLCBfX2FyZ3VtZW50cykpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuLy8gc3JjL2luZGV4LnRzXHJcbmltcG9ydCB7IGVuYWJsZUVTNSB9IGZyb20gXCJpbW1lclwiO1xyXG5leHBvcnQgKiBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBkZWZhdWx0MiwgY3VycmVudCBhcyBjdXJyZW50MiwgZnJlZXplLCBvcmlnaW5hbCwgaXNEcmFmdCBhcyBpc0RyYWZ0NCB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciBhcyBjcmVhdGVTZWxlY3RvcjIgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxuLy8gc3JjL2NyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yLnRzXHJcbmltcG9ydCB7IGN1cnJlbnQsIGlzRHJhZnQgfSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxudmFyIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIHNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgIHZhciB3cmFwcGVkU2VsZWN0b3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YXIgcmVzdCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW2lzRHJhZnQodmFsdWUpID8gY3VycmVudCh2YWx1ZSkgOiB2YWx1ZV0sIHJlc3QpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gd3JhcHBlZFNlbGVjdG9yO1xyXG59O1xyXG4vLyBzcmMvY29uZmlndXJlU3RvcmUudHNcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UgYXMgY29tcG9zZTIsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vIHNyYy9kZXZ0b29sc0V4dGVuc2lvbi50c1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbnZhciBjb21wb3NlV2l0aERldlRvb2xzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gY29tcG9zZTtcclxuICAgIHJldHVybiBjb21wb3NlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBkZXZUb29sc0VuaGFuY2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub29wMikge1xyXG4gICAgICAgIHJldHVybiBub29wMjtcclxuICAgIH07XHJcbn07XHJcbi8vIHNyYy9pc1BsYWluT2JqZWN0LnRzXHJcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxuICAgIGlmIChwcm90byA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIHZhciBiYXNlUHJvdG8gPSBwcm90bztcclxuICAgIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGJhc2VQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3RvID09PSBiYXNlUHJvdG87XHJcbn1cclxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbi8vIHNyYy91dGlscy50c1xyXG5pbXBvcnQgY3JlYXRlTmV4dFN0YXRlLCB7IGlzRHJhZnRhYmxlIH0gZnJvbSBcImltbWVyXCI7XHJcbmZ1bmN0aW9uIGdldFRpbWVNZWFzdXJlVXRpbHMobWF4RGVsYXksIGZuTmFtZSkge1xyXG4gICAgdmFyIGVsYXBzZWQgPSAwO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtZWFzdXJlVGltZTogZnVuY3Rpb24gKGZuKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGVsYXBzZWQgKz0gZmluaXNoZWQgLSBzdGFydGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXJuSWZFeGNlZWRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoZWxhcHNlZCA+IG1heERlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZm5OYW1lICsgXCIgdG9vayBcIiArIGVsYXBzZWQgKyBcIm1zLCB3aGljaCBpcyBtb3JlIHRoYW4gdGhlIHdhcm5pbmcgdGhyZXNob2xkIG9mIFwiICsgbWF4RGVsYXkgKyBcIm1zLiBcXG5JZiB5b3VyIHN0YXRlIG9yIGFjdGlvbnMgYXJlIHZlcnkgbGFyZ2UsIHlvdSBtYXkgd2FudCB0byBkaXNhYmxlIHRoZSBtaWRkbGV3YXJlIGFzIGl0IG1pZ2h0IGNhdXNlIHRvbyBtdWNoIG9mIGEgc2xvd2Rvd24gaW4gZGV2ZWxvcG1lbnQgbW9kZS4gU2VlIGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2dldERlZmF1bHRNaWRkbGV3YXJlIGZvciBpbnN0cnVjdGlvbnMuXFxuSXQgaXMgZGlzYWJsZWQgaW4gcHJvZHVjdGlvbiBidWlsZHMsIHNvIHlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoYXQuXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG52YXIgTWlkZGxld2FyZUFycmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKE1pZGRsZXdhcmVBcnJheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIE1pZGRsZXdhcmVBcnJheSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3MpIHx8IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWlkZGxld2FyZUFycmF5LCBTeW1ib2wuc3BlY2llcywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWlkZGxld2FyZUFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1pZGRsZXdhcmVBcnJheS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMsIGFycik7XHJcbiAgICB9O1xyXG4gICAgTWlkZGxld2FyZUFycmF5LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJbMF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgKE1pZGRsZXdhcmVBcnJheS5iaW5kLmFwcGx5KE1pZGRsZXdhcmVBcnJheSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJyWzBdLmNvbmNhdCh0aGlzKSkpKSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IChNaWRkbGV3YXJlQXJyYXkuYmluZC5hcHBseShNaWRkbGV3YXJlQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyci5jb25jYXQodGhpcykpKSkoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWlkZGxld2FyZUFycmF5O1xyXG59KEFycmF5KSk7XHJcbnZhciBFbmhhbmNlckFycmF5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEVuaGFuY2VyQXJyYXksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBFbmhhbmNlckFycmF5KCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJncykgfHwgdGhpcztcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIEVuaGFuY2VyQXJyYXkucHJvdG90eXBlKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW5oYW5jZXJBcnJheSwgU3ltYm9sLnNwZWNpZXMsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVuaGFuY2VyQXJyYXk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgRW5oYW5jZXJBcnJheS5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMsIGFycik7XHJcbiAgICB9O1xyXG4gICAgRW5oYW5jZXJBcnJheS5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJyW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IChFbmhhbmNlckFycmF5LmJpbmQuYXBwbHkoRW5oYW5jZXJBcnJheSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJyWzBdLmNvbmNhdCh0aGlzKSkpKSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IChFbmhhbmNlckFycmF5LmJpbmQuYXBwbHkoRW5oYW5jZXJBcnJheSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJyLmNvbmNhdCh0aGlzKSkpKSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFbmhhbmNlckFycmF5O1xyXG59KEFycmF5KSk7XHJcbmZ1bmN0aW9uIGZyZWV6ZURyYWZ0YWJsZSh2YWwpIHtcclxuICAgIHJldHVybiBpc0RyYWZ0YWJsZSh2YWwpID8gY3JlYXRlTmV4dFN0YXRlKHZhbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgfSkgOiB2YWw7XHJcbn1cclxuLy8gc3JjL2ltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50c1xyXG52YXIgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG52YXIgcHJlZml4ID0gXCJJbnZhcmlhbnQgZmFpbGVkXCI7XHJcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmIChjb25kaXRpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4ICsgXCI6IFwiICsgKG1lc3NhZ2UgfHwgXCJcIikpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmosIHNlcmlhbGl6ZXIsIGluZGVudCwgZGVjeWNsZXIpIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmosIGdldFNlcmlhbGl6ZShzZXJpYWxpemVyLCBkZWN5Y2xlciksIGluZGVudCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2VyaWFsaXplKHNlcmlhbGl6ZXIsIGRlY3ljbGVyKSB7XHJcbiAgICB2YXIgc3RhY2sgPSBbXSwga2V5cyA9IFtdO1xyXG4gICAgaWYgKCFkZWN5Y2xlcilcclxuICAgICAgICBkZWN5Y2xlciA9IGZ1bmN0aW9uIChfLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoc3RhY2tbMF0gPT09IHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiW0NpcmN1bGFyIH5dXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBcIltDaXJjdWxhciB+LlwiICsga2V5cy5zbGljZSgwLCBzdGFjay5pbmRleE9mKHZhbHVlKSkuam9pbihcIi5cIikgKyBcIl1cIjtcclxuICAgICAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdmFyIHRoaXNQb3MgPSBzdGFjay5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICB+dGhpc1BvcyA/IHN0YWNrLnNwbGljZSh0aGlzUG9zICsgMSkgOiBzdGFjay5wdXNoKHRoaXMpO1xyXG4gICAgICAgICAgICB+dGhpc1BvcyA/IGtleXMuc3BsaWNlKHRoaXNQb3MsIEluZmluaXR5LCBrZXkpIDoga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIGlmICh+c3RhY2suaW5kZXhPZih2YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlY3ljbGVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RhY2sucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXIgPT0gbnVsbCA/IHZhbHVlIDogc2VyaWFsaXplci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0ltbXV0YWJsZURlZmF1bHQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT0gbnVsbCB8fCBPYmplY3QuaXNGcm96ZW4odmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIHRyYWNrRm9yTXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqKSB7XHJcbiAgICB2YXIgdHJhY2tlZFByb3BlcnRpZXMgPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkZXRlY3RNdXRhdGlvbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIHRyYWNrZWRQcm9wZXJ0aWVzLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqLCBwYXRoKSB7XHJcbiAgICBpZiAoaWdub3JlUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVQYXRocyA9IFtdOyB9XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICB2YXIgdHJhY2tlZCA9IHsgdmFsdWU6IG9iaiB9O1xyXG4gICAgaWYgKCFpc0ltbXV0YWJsZShvYmopKSB7XHJcbiAgICAgICAgdHJhY2tlZC5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgdmFyIGNoaWxkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVQYXRocy5sZW5ndGggJiYgaWdub3JlUGF0aHMuaW5kZXhPZihjaGlsZFBhdGgpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhY2tlZC5jaGlsZHJlbltrZXldID0gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqW2tleV0sIGNoaWxkUGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYWNrZWQ7XHJcbn1cclxuZnVuY3Rpb24gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMsIHRyYWNrZWRQcm9wZXJ0eSwgb2JqLCBzYW1lUGFyZW50UmVmLCBwYXRoKSB7XHJcbiAgICBpZiAoaWdub3JlZFBhdGhzID09PSB2b2lkIDApIHsgaWdub3JlZFBhdGhzID0gW107IH1cclxuICAgIGlmIChzYW1lUGFyZW50UmVmID09PSB2b2lkIDApIHsgc2FtZVBhcmVudFJlZiA9IGZhbHNlOyB9XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICB2YXIgcHJldk9iaiA9IHRyYWNrZWRQcm9wZXJ0eSA/IHRyYWNrZWRQcm9wZXJ0eS52YWx1ZSA6IHZvaWQgMDtcclxuICAgIHZhciBzYW1lUmVmID0gcHJldk9iaiA9PT0gb2JqO1xyXG4gICAgaWYgKHNhbWVQYXJlbnRSZWYgJiYgIXNhbWVSZWYgJiYgIU51bWJlci5pc05hTihvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogdHJ1ZSwgcGF0aDogcGF0aCB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzSW1tdXRhYmxlKHByZXZPYmopIHx8IGlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgICAgICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgdmFyIGtleXNUb0RldGVjdCA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbikge1xyXG4gICAgICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDA7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB2YXIgbmVzdGVkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgaWYgKGhhc0lnbm9yZWRQYXRocykge1xyXG4gICAgICAgICAgICB2YXIgaGFzTWF0Y2hlcyA9IGlnbm9yZWRQYXRocy5zb21lKGZ1bmN0aW9uIChpZ25vcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlZCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZ25vcmVkLnRlc3QobmVzdGVkUGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmVzdGVkUGF0aCA9PT0gaWdub3JlZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNNYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSBkZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZWRQYXRocywgdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuW2tleV0sIG9ialtrZXldLCBzYW1lUmVmLCBuZXN0ZWRQYXRoKTtcclxuICAgICAgICBpZiAocmVzdWx0Lndhc011dGF0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHJlc3VsdCB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBrZXkgaW4ga2V5c1RvRGV0ZWN0KSB7XHJcbiAgICAgICAgdmFyIHN0YXRlXzEgPSBfbG9vcF8xKGtleSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8xID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVfMS52YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXh0KGFjdGlvbik7IH07IH07IH07XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSBvcHRpb25zLmlzSW1tdXRhYmxlLCBpc0ltbXV0YWJsZSA9IF9jID09PSB2b2lkIDAgPyBpc0ltbXV0YWJsZURlZmF1bHQgOiBfYywgaWdub3JlZFBhdGhzID0gb3B0aW9ucy5pZ25vcmVkUGF0aHMsIF9kID0gb3B0aW9ucy53YXJuQWZ0ZXIsIHdhcm5BZnRlciA9IF9kID09PSB2b2lkIDAgPyAzMiA6IF9kLCBpZ25vcmUgPSBvcHRpb25zLmlnbm9yZTtcclxuICAgIGlnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocyB8fCBpZ25vcmU7XHJcbiAgICB2YXIgdHJhY2sgPSB0cmFja0Zvck11dGF0aW9ucy5iaW5kKG51bGwsIGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgIHZhciBnZXRTdGF0ZSA9IF9jLmdldFN0YXRlO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMod2FybkFmdGVyLCBcIkltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZVwiKTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgaW52YXJpYW50KCFyZXN1bHQud2FzTXV0YXRlZCwgXCJBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBiZXR3ZWVuIGRpc3BhdGNoZXMsIGluIHRoZSBwYXRoICdcIiArIChyZXN1bHQucGF0aCB8fCBcIlwiKSArIFwiJy4gIFRoaXMgbWF5IGNhdXNlIGluY29ycmVjdCBiZWhhdmlvci4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGRpc3BhdGNoZWRBY3Rpb24gPSBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC53YXNNdXRhdGVkICYmIGludmFyaWFudCghcmVzdWx0Lndhc011dGF0ZWQsIFwiQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgaW5zaWRlIGEgZGlzcGF0Y2gsIGluIHRoZSBwYXRoOiBcIiArIChyZXN1bHQucGF0aCB8fCBcIlwiKSArIFwiLiBUYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGUgYWN0aW9uIFwiICsgc3RyaW5naWZ5KGFjdGlvbikgKyBcIi4gKGh0dHBzOi8vcmVkdXguanMub3JnL3N0eWxlLWd1aWRlL3N0eWxlLWd1aWRlI2RvLW5vdC1tdXRhdGUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaGVkQWN0aW9uO1xyXG4gICAgICAgIH07IH07XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9zZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUudHNcclxuZnVuY3Rpb24gaXNQbGFpbih2YWwpIHtcclxuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcclxuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB0eXBlID09PSBcInN0cmluZ1wiIHx8IHR5cGUgPT09IFwiYm9vbGVhblwiIHx8IHR5cGUgPT09IFwibnVtYmVyXCIgfHwgQXJyYXkuaXNBcnJheSh2YWwpIHx8IGlzUGxhaW5PYmplY3QodmFsKTtcclxufVxyXG5mdW5jdGlvbiBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUodmFsdWUsIHBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMsIGNhY2hlKSB7XHJcbiAgICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7IHBhdGggPSBcIlwiOyB9XHJcbiAgICBpZiAoaXNTZXJpYWxpemFibGUgPT09IHZvaWQgMCkgeyBpc1NlcmlhbGl6YWJsZSA9IGlzUGxhaW47IH1cclxuICAgIGlmIChpZ25vcmVkUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVkUGF0aHMgPSBbXTsgfVxyXG4gICAgdmFyIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlO1xyXG4gICAgaWYgKCFpc1NlcmlhbGl6YWJsZSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXlQYXRoOiBwYXRoIHx8IFwiPHJvb3Q+XCIsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhY2hlID09IG51bGwgPyB2b2lkIDAgOiBjYWNoZS5oYXModmFsdWUpKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBlbnRyaWVzID0gZ2V0RW50cmllcyAhPSBudWxsID8gZ2V0RW50cmllcyh2YWx1ZSkgOiBPYmplY3QuZW50cmllcyh2YWx1ZSk7XHJcbiAgICB2YXIgaGFzSWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzLmxlbmd0aCA+IDA7XHJcbiAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChrZXksIG5lc3RlZFZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG5lc3RlZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xyXG4gICAgICAgIGlmIChoYXNJZ25vcmVkUGF0aHMpIHtcclxuICAgICAgICAgICAgdmFyIGhhc01hdGNoZXMgPSBpZ25vcmVkUGF0aHMuc29tZShmdW5jdGlvbiAoaWdub3JlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZWQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlZC50ZXN0KG5lc3RlZFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFBhdGggPT09IGlnbm9yZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzU2VyaWFsaXphYmxlKG5lc3RlZFZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleVBhdGg6IG5lc3RlZFBhdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5lc3RlZFZhbHVlXHJcbiAgICAgICAgICAgICAgICB9IH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgbmVzdGVkVmFsdWUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm91bmROZXN0ZWRTZXJpYWxpemFibGUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUobmVzdGVkVmFsdWUsIG5lc3RlZFBhdGgsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMsIGNhY2hlKTtcclxuICAgICAgICAgICAgaWYgKGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogZm91bmROZXN0ZWRTZXJpYWxpemFibGUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGVudHJpZXNfMSA9IGVudHJpZXM7IF9pIDwgZW50cmllc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYyA9IGVudHJpZXNfMVtfaV0sIGtleSA9IF9jWzBdLCBuZXN0ZWRWYWx1ZSA9IF9jWzFdO1xyXG4gICAgICAgIHZhciBzdGF0ZV8yID0gX2xvb3BfMihrZXksIG5lc3RlZFZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzIgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZV8yLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGNhY2hlICYmIGlzTmVzdGVkRnJvemVuKHZhbHVlKSlcclxuICAgICAgICBjYWNoZS5hZGQodmFsdWUpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGlzTmVzdGVkRnJvemVuKHZhbHVlKSB7XHJcbiAgICBpZiAoIU9iamVjdC5pc0Zyb3plbih2YWx1ZSkpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IE9iamVjdC52YWx1ZXModmFsdWUpOyBfaSA8IF9jLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBuZXN0ZWRWYWx1ZSA9IF9jW19pXTtcclxuICAgICAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlICE9PSBcIm9iamVjdFwiIHx8IG5lc3RlZFZhbHVlID09PSBudWxsKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAoIWlzTmVzdGVkRnJvemVuKG5lc3RlZFZhbHVlKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBuZXh0KGFjdGlvbik7IH07IH07IH07XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSBvcHRpb25zLmlzU2VyaWFsaXphYmxlLCBpc1NlcmlhbGl6YWJsZSA9IF9jID09PSB2b2lkIDAgPyBpc1BsYWluIDogX2MsIGdldEVudHJpZXMgPSBvcHRpb25zLmdldEVudHJpZXMsIF9kID0gb3B0aW9ucy5pZ25vcmVkQWN0aW9ucywgaWdub3JlZEFjdGlvbnMgPSBfZCA9PT0gdm9pZCAwID8gW10gOiBfZCwgX2UgPSBvcHRpb25zLmlnbm9yZWRBY3Rpb25QYXRocywgaWdub3JlZEFjdGlvblBhdGhzID0gX2UgPT09IHZvaWQgMCA/IFtcIm1ldGEuYXJnXCIsIFwibWV0YS5iYXNlUXVlcnlNZXRhXCJdIDogX2UsIF9mID0gb3B0aW9ucy5pZ25vcmVkUGF0aHMsIGlnbm9yZWRQYXRocyA9IF9mID09PSB2b2lkIDAgPyBbXSA6IF9mLCBfZyA9IG9wdGlvbnMud2FybkFmdGVyLCB3YXJuQWZ0ZXIgPSBfZyA9PT0gdm9pZCAwID8gMzIgOiBfZywgX2ggPSBvcHRpb25zLmlnbm9yZVN0YXRlLCBpZ25vcmVTdGF0ZSA9IF9oID09PSB2b2lkIDAgPyBmYWxzZSA6IF9oLCBfaiA9IG9wdGlvbnMuaWdub3JlQWN0aW9ucywgaWdub3JlQWN0aW9ucyA9IF9qID09PSB2b2lkIDAgPyBmYWxzZSA6IF9qLCBfayA9IG9wdGlvbnMuZGlzYWJsZUNhY2hlLCBkaXNhYmxlQ2FjaGUgPSBfayA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaztcclxuICAgIHZhciBjYWNoZSA9ICFkaXNhYmxlQ2FjaGUgJiYgV2Vha1NldCA/IG5ldyBXZWFrU2V0KCkgOiB2b2lkIDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlQVBJKSB7IHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgdmFyIG1lYXN1cmVVdGlscyA9IGdldFRpbWVNZWFzdXJlVXRpbHMod2FybkFmdGVyLCBcIlNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZVwiKTtcclxuICAgICAgICBpZiAoIWlnbm9yZUFjdGlvbnMgJiYgIShpZ25vcmVkQWN0aW9ucy5sZW5ndGggJiYgaWdub3JlZEFjdGlvbnMuaW5kZXhPZihhY3Rpb24udHlwZSkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoYWN0aW9uLCBcIlwiLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZEFjdGlvblBhdGhzLCBjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlQYXRoID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZS5rZXlQYXRoLCB2YWx1ZSA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gYW4gYWN0aW9uLCBpbiB0aGUgcGF0aDogYFwiICsga2V5UGF0aCArIFwiYC4gVmFsdWU6XCIsIHZhbHVlLCBcIlxcblRha2UgYSBsb29rIGF0IHRoZSBsb2dpYyB0aGF0IGRpc3BhdGNoZWQgdGhpcyBhY3Rpb246IFwiLCBhY3Rpb24sIFwiXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvYWN0aW9ucyN3aHktc2hvdWxkLXR5cGUtYmUtYS1zdHJpbmctb3ItYXQtbGVhc3Qtc2VyaWFsaXphYmxlLXdoeS1zaG91bGQtbXktYWN0aW9uLXR5cGVzLWJlLWNvbnN0YW50cylcIiwgXCJcXG4oVG8gYWxsb3cgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZXMgc2VlOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL3VzYWdlL3VzYWdlLWd1aWRlI3dvcmtpbmctd2l0aC1ub24tc2VyaWFsaXphYmxlLWRhdGEpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpZ25vcmVTdGF0ZSkge1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gc3RvcmVBUEkuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUgPSBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUoc3RhdGUsIFwiXCIsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkUGF0aHMsIGNhY2hlKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5UGF0aCA9IGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZS5rZXlQYXRoLCB2YWx1ZSA9IGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiB0aGUgc3RhdGUsIGluIHRoZSBwYXRoOiBgXCIgKyBrZXlQYXRoICsgXCJgLiBWYWx1ZTpcIiwgdmFsdWUsIFwiXFxuVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhpcyBhY3Rpb24gdHlwZTogXCIgKyBhY3Rpb24udHlwZSArIFwiLlxcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL29yZ2FuaXppbmctc3RhdGUjY2FuLWktcHV0LWZ1bmN0aW9ucy1wcm9taXNlcy1vci1vdGhlci1ub24tc2VyaWFsaXphYmxlLWl0ZW1zLWluLW15LXN0b3JlLXN0YXRlKVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy53YXJuSWZFeGNlZWRlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTsgfTsgfTtcclxufVxyXG4vLyBzcmMvZ2V0RGVmYXVsdE1pZGRsZXdhcmUudHNcclxuZnVuY3Rpb24gaXNCb29sZWFuKHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJib29sZWFuXCI7XHJcbn1cclxuZnVuY3Rpb24gY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdE1pZGRsZXdhcmUob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBfYyA9IG9wdGlvbnMudGh1bmssIHRodW5rID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmltbXV0YWJsZUNoZWNrLCBpbW11dGFibGVDaGVjayA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsIF9lID0gb3B0aW9ucy5zZXJpYWxpemFibGVDaGVjaywgc2VyaWFsaXphYmxlQ2hlY2sgPSBfZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9lO1xyXG4gICAgdmFyIG1pZGRsZXdhcmVBcnJheSA9IG5ldyBNaWRkbGV3YXJlQXJyYXkoKTtcclxuICAgIGlmICh0aHVuaykge1xyXG4gICAgICAgIGlmIChpc0Jvb2xlYW4odGh1bmspKSB7XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKHRodW5rTWlkZGxld2FyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUud2l0aEV4dHJhQXJndW1lbnQodGh1bmsuZXh0cmFBcmd1bWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpZiAoaW1tdXRhYmxlQ2hlY2spIHtcclxuICAgICAgICAgICAgdmFyIGltbXV0YWJsZU9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFpc0Jvb2xlYW4oaW1tdXRhYmxlQ2hlY2spKSB7XHJcbiAgICAgICAgICAgICAgICBpbW11dGFibGVPcHRpb25zID0gaW1tdXRhYmxlQ2hlY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnVuc2hpZnQoY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKGltbXV0YWJsZU9wdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6YWJsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemFibGVPcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIGlmICghaXNCb29sZWFuKHNlcmlhbGl6YWJsZUNoZWNrKSkge1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXphYmxlT3B0aW9ucyA9IHNlcmlhbGl6YWJsZUNoZWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShzZXJpYWxpemFibGVPcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1pZGRsZXdhcmVBcnJheTtcclxufVxyXG4vLyBzcmMvY29uZmlndXJlU3RvcmUudHNcclxudmFyIElTX1BST0RVQ1RJT04gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKG9wdGlvbnMpIHtcclxuICAgIHZhciBjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUgPSBjdXJyeUdldERlZmF1bHRNaWRkbGV3YXJlKCk7XHJcbiAgICB2YXIgX2MgPSBvcHRpb25zIHx8IHt9LCBfZCA9IF9jLnJlZHVjZXIsIHJlZHVjZXIgPSBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QsIF9lID0gX2MubWlkZGxld2FyZSwgbWlkZGxld2FyZSA9IF9lID09PSB2b2lkIDAgPyBjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUoKSA6IF9lLCBfZiA9IF9jLmRldlRvb2xzLCBkZXZUb29scyA9IF9mID09PSB2b2lkIDAgPyB0cnVlIDogX2YsIF9nID0gX2MucHJlbG9hZGVkU3RhdGUsIHByZWxvYWRlZFN0YXRlID0gX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLCBfaCA9IF9jLmVuaGFuY2VycywgZW5oYW5jZXJzID0gX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oO1xyXG4gICAgdmFyIHJvb3RSZWR1Y2VyO1xyXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICByb290UmVkdWNlciA9IHJlZHVjZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHJlZHVjZXIpKSB7XHJcbiAgICAgICAgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMocmVkdWNlcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wicmVkdWNlclwiIGlzIGEgcmVxdWlyZWQgYXJndW1lbnQsIGFuZCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gb2JqZWN0IG9mIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gY29tYmluZVJlZHVjZXJzJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgZmluYWxNaWRkbGV3YXJlID0gbWlkZGxld2FyZTtcclxuICAgIGlmICh0eXBlb2YgZmluYWxNaWRkbGV3YXJlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBmaW5hbE1pZGRsZXdhcmUgPSBmaW5hbE1pZGRsZXdhcmUoY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKTtcclxuICAgICAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYgIUFycmF5LmlzQXJyYXkoZmluYWxNaWRkbGV3YXJlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ3aGVuIHVzaW5nIGEgbWlkZGxld2FyZSBidWlsZGVyIGZ1bmN0aW9uLCBhbiBhcnJheSBvZiBtaWRkbGV3YXJlIG11c3QgYmUgcmV0dXJuZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFJU19QUk9EVUNUSU9OICYmIGZpbmFsTWlkZGxld2FyZS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiB0eXBlb2YgaXRlbSAhPT0gXCJmdW5jdGlvblwiOyB9KSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImVhY2ggbWlkZGxld2FyZSBwcm92aWRlZCB0byBjb25maWd1cmVTdG9yZSBtdXN0IGJlIGEgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICB2YXIgbWlkZGxld2FyZUVuaGFuY2VyID0gYXBwbHlNaWRkbGV3YXJlLmFwcGx5KHZvaWQgMCwgZmluYWxNaWRkbGV3YXJlKTtcclxuICAgIHZhciBmaW5hbENvbXBvc2UgPSBjb21wb3NlMjtcclxuICAgIGlmIChkZXZUb29scykge1xyXG4gICAgICAgIGZpbmFsQ29tcG9zZSA9IGNvbXBvc2VXaXRoRGV2VG9vbHMoX19zcHJlYWRWYWx1ZXMoe1xyXG4gICAgICAgICAgICB0cmFjZTogIUlTX1BST0RVQ1RJT05cclxuICAgICAgICB9LCB0eXBlb2YgZGV2VG9vbHMgPT09IFwib2JqZWN0XCIgJiYgZGV2VG9vbHMpKTtcclxuICAgIH1cclxuICAgIHZhciBkZWZhdWx0RW5oYW5jZXJzID0gbmV3IEVuaGFuY2VyQXJyYXkobWlkZGxld2FyZUVuaGFuY2VyKTtcclxuICAgIHZhciBzdG9yZUVuaGFuY2VycyA9IGRlZmF1bHRFbmhhbmNlcnM7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShlbmhhbmNlcnMpKSB7XHJcbiAgICAgICAgc3RvcmVFbmhhbmNlcnMgPSBfX3NwcmVhZEFycmF5KFttaWRkbGV3YXJlRW5oYW5jZXJdLCBlbmhhbmNlcnMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodHlwZW9mIGVuaGFuY2VycyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgc3RvcmVFbmhhbmNlcnMgPSBlbmhhbmNlcnMoZGVmYXVsdEVuaGFuY2Vycyk7XHJcbiAgICB9XHJcbiAgICB2YXIgY29tcG9zZWRFbmhhbmNlciA9IGZpbmFsQ29tcG9zZS5hcHBseSh2b2lkIDAsIHN0b3JlRW5oYW5jZXJzKTtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGNvbXBvc2VkRW5oYW5jZXIpO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVBY3Rpb24udHNcclxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKHR5cGUsIHByZXBhcmVBY3Rpb24pIHtcclxuICAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmVwYXJlZCA9IHByZXBhcmVBY3Rpb24uYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgICAgICAgICAgaWYgKCFwcmVwYXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJlcGFyZUFjdGlvbiBkaWQgbm90IHJldHVybiBhbiBvYmplY3RcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcmVwYXJlZC5wYXlsb2FkXHJcbiAgICAgICAgICAgIH0sIFwibWV0YVwiIGluIHByZXBhcmVkICYmIHsgbWV0YTogcHJlcGFyZWQubWV0YSB9KSwgXCJlcnJvclwiIGluIHByZXBhcmVkICYmIHsgZXJyb3I6IHByZXBhcmVkLmVycm9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBhcmdzWzBdIH07XHJcbiAgICB9XHJcbiAgICBhY3Rpb25DcmVhdG9yLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gXCJcIiArIHR5cGU7IH07XHJcbiAgICBhY3Rpb25DcmVhdG9yLnR5cGUgPSB0eXBlO1xyXG4gICAgYWN0aW9uQ3JlYXRvci5tYXRjaCA9IGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGFjdGlvbi50eXBlID09PSB0eXBlOyB9O1xyXG4gICAgcmV0dXJuIGFjdGlvbkNyZWF0b3I7XHJcbn1cclxuZnVuY3Rpb24gaXNBY3Rpb24oYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gaXNQbGFpbk9iamVjdChhY3Rpb24pICYmIFwidHlwZVwiIGluIGFjdGlvbjtcclxufVxyXG5mdW5jdGlvbiBpc0ZTQShhY3Rpb24pIHtcclxuICAgIHJldHVybiBpc0FjdGlvbihhY3Rpb24pICYmIHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gXCJzdHJpbmdcIiAmJiBPYmplY3Qua2V5cyhhY3Rpb24pLmV2ZXJ5KGlzVmFsaWRLZXkpO1xyXG59XHJcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XHJcbiAgICByZXR1cm4gW1widHlwZVwiLCBcInBheWxvYWRcIiwgXCJlcnJvclwiLCBcIm1ldGFcIl0uaW5kZXhPZihrZXkpID4gLTE7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VHlwZShhY3Rpb25DcmVhdG9yKSB7XHJcbiAgICByZXR1cm4gXCJcIiArIGFjdGlvbkNyZWF0b3I7XHJcbn1cclxuLy8gc3JjL2NyZWF0ZVJlZHVjZXIudHNcclxuaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZTIsIHsgaXNEcmFmdCBhcyBpc0RyYWZ0MiwgaXNEcmFmdGFibGUgYXMgaXNEcmFmdGFibGUyIH0gZnJvbSBcImltbWVyXCI7XHJcbi8vIHNyYy9tYXBCdWlsZGVycy50c1xyXG5mdW5jdGlvbiBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhidWlsZGVyQ2FsbGJhY2spIHtcclxuICAgIHZhciBhY3Rpb25zTWFwID0ge307XHJcbiAgICB2YXIgYWN0aW9uTWF0Y2hlcnMgPSBbXTtcclxuICAgIHZhciBkZWZhdWx0Q2FzZVJlZHVjZXI7XHJcbiAgICB2YXIgYnVpbGRlciA9IHtcclxuICAgICAgICBhZGRDYXNlOiBmdW5jdGlvbiAodHlwZU9yQWN0aW9uQ3JlYXRvciwgcmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uTWF0Y2hlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGRNYXRjaGVyYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkRGVmYXVsdENhc2VgXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHR5cGVPckFjdGlvbkNyZWF0b3IgPT09IFwic3RyaW5nXCIgPyB0eXBlT3JBY3Rpb25DcmVhdG9yIDogdHlwZU9yQWN0aW9uQ3JlYXRvci50eXBlO1xyXG4gICAgICAgICAgICBpZiAodHlwZSBpbiBhY3Rpb25zTWFwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhZGRDYXNlIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCB0d28gcmVkdWNlcnMgZm9yIHRoZSBzYW1lIGFjdGlvbiB0eXBlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjdGlvbnNNYXBbdHlwZV0gPSByZWR1Y2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZE1hdGNoZXI6IGZ1bmN0aW9uIChtYXRjaGVyLCByZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGRNYXRjaGVyYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkRGVmYXVsdENhc2VgXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjdGlvbk1hdGNoZXJzLnB1c2goeyBtYXRjaGVyOiBtYXRjaGVyLCByZWR1Y2VyOiByZWR1Y2VyIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZERlZmF1bHRDYXNlOiBmdW5jdGlvbiAocmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkRGVmYXVsdENhc2VgIGNhbiBvbmx5IGJlIGNhbGxlZCBvbmNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHRDYXNlUmVkdWNlciA9IHJlZHVjZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBidWlsZGVyQ2FsbGJhY2soYnVpbGRlcik7XHJcbiAgICByZXR1cm4gW2FjdGlvbnNNYXAsIGFjdGlvbk1hdGNoZXJzLCBkZWZhdWx0Q2FzZVJlZHVjZXJdO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVSZWR1Y2VyLnRzXHJcbmZ1bmN0aW9uIGlzU3RhdGVGdW5jdGlvbih4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG52YXIgaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbiA9IGZhbHNlO1xyXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgbWFwT3JCdWlsZGVyQ2FsbGJhY2ssIGFjdGlvbk1hdGNoZXJzLCBkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgIGlmIChhY3Rpb25NYXRjaGVycyA9PT0gdm9pZCAwKSB7IGFjdGlvbk1hdGNoZXJzID0gW107IH1cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG1hcE9yQnVpbGRlckNhbGxiYWNrID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgb2JqZWN0IG5vdGF0aW9uIGZvciBgY3JlYXRlUmVkdWNlcmAgaXMgZGVwcmVjYXRlZCwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSVEsgMi4wLiBQbGVhc2UgdXNlIHRoZSAnYnVpbGRlciBjYWxsYmFjaycgbm90YXRpb24gaW5zdGVhZDogaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy9hcGkvY3JlYXRlUmVkdWNlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBfYyA9IHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiID8gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2sobWFwT3JCdWlsZGVyQ2FsbGJhY2spIDogW21hcE9yQnVpbGRlckNhbGxiYWNrLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyXSwgYWN0aW9uc01hcCA9IF9jWzBdLCBmaW5hbEFjdGlvbk1hdGNoZXJzID0gX2NbMV0sIGZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyID0gX2NbMl07XHJcbiAgICB2YXIgZ2V0SW5pdGlhbFN0YXRlO1xyXG4gICAgaWYgKGlzU3RhdGVGdW5jdGlvbihpbml0aWFsU3RhdGUpKSB7XHJcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnJlZXplRHJhZnRhYmxlKGluaXRpYWxTdGF0ZSgpKTsgfTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBmcm96ZW5Jbml0aWFsU3RhdGVfMSA9IGZyZWV6ZURyYWZ0YWJsZShpbml0aWFsU3RhdGUpO1xyXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZyb3plbkluaXRpYWxTdGF0ZV8xOyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHsgc3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTsgfVxyXG4gICAgICAgIHZhciBjYXNlUmVkdWNlcnMgPSBfX3NwcmVhZEFycmF5KFtcclxuICAgICAgICAgICAgYWN0aW9uc01hcFthY3Rpb24udHlwZV1cclxuICAgICAgICBdLCBmaW5hbEFjdGlvbk1hdGNoZXJzLmZpbHRlcihmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoZXIgPSBfYy5tYXRjaGVyO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgdmFyIHJlZHVjZXIyID0gX2MucmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZHVjZXIyO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBpZiAoY2FzZVJlZHVjZXJzLmZpbHRlcihmdW5jdGlvbiAoY3IpIHsgcmV0dXJuICEhY3I7IH0pLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYXNlUmVkdWNlcnMgPSBbZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXJzLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXNTdGF0ZSwgY2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKGNhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEcmFmdDIocHJldmlvdXNTdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHJhZnQgPSBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYXNlUmVkdWNlcihkcmFmdCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNEcmFmdGFibGUyKHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNhc2VSZWR1Y2VyKHByZXZpb3VzU3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c1N0YXRlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkEgY2FzZSByZWR1Y2VyIG9uIGEgbm9uLWRyYWZ0YWJsZSB2YWx1ZSBtdXN0IG5vdCByZXR1cm4gdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZTIocHJldmlvdXNTdGF0ZSwgZnVuY3Rpb24gKGRyYWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXNlUmVkdWNlcihkcmFmdCwgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICB9LCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZWR1Y2VyLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTtcclxuICAgIHJldHVybiByZWR1Y2VyO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVTbGljZS50c1xyXG52YXIgaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbjIgPSBmYWxzZTtcclxuZnVuY3Rpb24gZ2V0VHlwZTIoc2xpY2UsIGFjdGlvbktleSkge1xyXG4gICAgcmV0dXJuIHNsaWNlICsgXCIvXCIgKyBhY3Rpb25LZXk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU2xpY2Uob3B0aW9ucykge1xyXG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgbmFtZWAgaXMgYSByZXF1aXJlZCBvcHRpb24gZm9yIGNyZWF0ZVNsaWNlXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5pbml0aWFsU3RhdGUgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IG11c3QgcHJvdmlkZSBhbiBgaW5pdGlhbFN0YXRlYCB2YWx1ZSB0aGF0IGlzIG5vdCBgdW5kZWZpbmVkYC4gWW91IG1heSBoYXZlIG1pc3NwZWxsZWQgYGluaXRpYWxTdGF0ZWBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHR5cGVvZiBvcHRpb25zLmluaXRpYWxTdGF0ZSA9PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLmluaXRpYWxTdGF0ZSA6IGZyZWV6ZURyYWZ0YWJsZShvcHRpb25zLmluaXRpYWxTdGF0ZSk7XHJcbiAgICB2YXIgcmVkdWNlcnMgPSBvcHRpb25zLnJlZHVjZXJzIHx8IHt9O1xyXG4gICAgdmFyIHJlZHVjZXJOYW1lcyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcclxuICAgIHZhciBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZSA9IHt9O1xyXG4gICAgdmFyIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlID0ge307XHJcbiAgICB2YXIgYWN0aW9uQ3JlYXRvcnMgPSB7fTtcclxuICAgIHJlZHVjZXJOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWR1Y2VyTmFtZSkge1xyXG4gICAgICAgIHZhciBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSA9IHJlZHVjZXJzW3JlZHVjZXJOYW1lXTtcclxuICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUyKG5hbWUsIHJlZHVjZXJOYW1lKTtcclxuICAgICAgICB2YXIgY2FzZVJlZHVjZXI7XHJcbiAgICAgICAgdmFyIHByZXBhcmVDYWxsYmFjaztcclxuICAgICAgICBpZiAoXCJyZWR1Y2VyXCIgaW4gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUpIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5yZWR1Y2VyO1xyXG4gICAgICAgICAgICBwcmVwYXJlQ2FsbGJhY2sgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZS5wcmVwYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXIgPSBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWVbcmVkdWNlck5hbWVdID0gY2FzZVJlZHVjZXI7XHJcbiAgICAgICAgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGVbdHlwZV0gPSBjYXNlUmVkdWNlcjtcclxuICAgICAgICBhY3Rpb25DcmVhdG9yc1tyZWR1Y2VyTmFtZV0gPSBwcmVwYXJlQ2FsbGJhY2sgPyBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUNhbGxiYWNrKSA6IGNyZWF0ZUFjdGlvbih0eXBlKTtcclxuICAgIH0pO1xyXG4gICAgZnVuY3Rpb24gYnVpbGRSZWR1Y2VyKCkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbjIpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRBYm91dE9iamVjdE5vdGF0aW9uMiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIG9iamVjdCBub3RhdGlvbiBmb3IgYGNyZWF0ZVNsaWNlLmV4dHJhUmVkdWNlcnNgIGlzIGRlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUlRLIDIuMC4gUGxlYXNlIHVzZSB0aGUgJ2J1aWxkZXIgY2FsbGJhY2snIG5vdGF0aW9uIGluc3RlYWQ6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2NyZWF0ZVNsaWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfYyA9IHR5cGVvZiBvcHRpb25zLmV4dHJhUmVkdWNlcnMgPT09IFwiZnVuY3Rpb25cIiA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG9wdGlvbnMuZXh0cmFSZWR1Y2VycykgOiBbb3B0aW9ucy5leHRyYVJlZHVjZXJzXSwgX2QgPSBfY1swXSwgZXh0cmFSZWR1Y2VycyA9IF9kID09PSB2b2lkIDAgPyB7fSA6IF9kLCBfZSA9IF9jWzFdLCBhY3Rpb25NYXRjaGVycyA9IF9lID09PSB2b2lkIDAgPyBbXSA6IF9lLCBfZiA9IF9jWzJdLCBkZWZhdWx0Q2FzZVJlZHVjZXIgPSBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Y7XHJcbiAgICAgICAgdmFyIGZpbmFsQ2FzZVJlZHVjZXJzID0gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIGV4dHJhUmVkdWNlcnMpLCBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBmdW5jdGlvbiAoYnVpbGRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZmluYWxDYXNlUmVkdWNlcnMpIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkQ2FzZShrZXksIGZpbmFsQ2FzZVJlZHVjZXJzW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgYWN0aW9uTWF0Y2hlcnNfMSA9IGFjdGlvbk1hdGNoZXJzOyBfaSA8IGFjdGlvbk1hdGNoZXJzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbSA9IGFjdGlvbk1hdGNoZXJzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5hZGRNYXRjaGVyKG0ubWF0Y2hlciwgbS5yZWR1Y2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFkZERlZmF1bHRDYXNlKGRlZmF1bHRDYXNlUmVkdWNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBfcmVkdWNlcjtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICByZWR1Y2VyOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoIV9yZWR1Y2VyKVxyXG4gICAgICAgICAgICAgICAgX3JlZHVjZXIgPSBidWlsZFJlZHVjZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9yZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0aW9uczogYWN0aW9uQ3JlYXRvcnMsXHJcbiAgICAgICAgY2FzZVJlZHVjZXJzOiBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZSxcclxuICAgICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFfcmVkdWNlcilcclxuICAgICAgICAgICAgICAgIF9yZWR1Y2VyID0gYnVpbGRSZWR1Y2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfcmVkdWNlci5nZXRJbml0aWFsU3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9lbnRpdHlfc3RhdGUudHNcclxuZnVuY3Rpb24gZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpZHM6IFtdLFxyXG4gICAgICAgIGVudGl0aWVzOiB7fVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5KCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKGFkZGl0aW9uYWxTdGF0ZSkge1xyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsU3RhdGUgPT09IHZvaWQgMCkgeyBhZGRpdGlvbmFsU3RhdGUgPSB7fTsgfVxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpLCBhZGRpdGlvbmFsU3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgZ2V0SW5pdGlhbFN0YXRlOiBnZXRJbml0aWFsU3RhdGUgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvc3RhdGVfc2VsZWN0b3JzLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkoKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRTZWxlY3RvcnMoc2VsZWN0U3RhdGUpIHtcclxuICAgICAgICB2YXIgc2VsZWN0SWRzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5pZHM7IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdEVudGl0aWVzID0gZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS5lbnRpdGllczsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0QWxsID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0SWRzLCBzZWxlY3RFbnRpdGllcywgZnVuY3Rpb24gKGlkcywgZW50aXRpZXMpIHsgcmV0dXJuIGlkcy5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBlbnRpdGllc1tpZF07IH0pOyB9KTtcclxuICAgICAgICB2YXIgc2VsZWN0SWQgPSBmdW5jdGlvbiAoXywgaWQpIHsgcmV0dXJuIGlkOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RCeUlkID0gZnVuY3Rpb24gKGVudGl0aWVzLCBpZCkgeyByZXR1cm4gZW50aXRpZXNbaWRdOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RUb3RhbCA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdElkcywgZnVuY3Rpb24gKGlkcykgeyByZXR1cm4gaWRzLmxlbmd0aDsgfSk7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RTdGF0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0SWRzOiBzZWxlY3RJZHMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0RW50aXRpZXMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RBbGw6IHNlbGVjdEFsbCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdFRvdGFsOiBzZWxlY3RUb3RhbCxcclxuICAgICAgICAgICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RFbnRpdGllcyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2VsZWN0SWRzOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0SWRzKSxcclxuICAgICAgICAgICAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcyxcclxuICAgICAgICAgICAgc2VsZWN0QWxsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0QWxsKSxcclxuICAgICAgICAgICAgc2VsZWN0VG90YWw6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RUb3RhbCksXHJcbiAgICAgICAgICAgIHNlbGVjdEJ5SWQ6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdEdsb2JhbGl6ZWRFbnRpdGllcywgc2VsZWN0SWQsIHNlbGVjdEJ5SWQpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGdldFNlbGVjdG9yczogZ2V0U2VsZWN0b3JzIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3N0YXRlX2FkYXB0ZXIudHNcclxuaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZTMsIHsgaXNEcmFmdCBhcyBpc0RyYWZ0MyB9IGZyb20gXCJpbW1lclwiO1xyXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IobXV0YXRvcikge1xyXG4gICAgdmFyIG9wZXJhdG9yID0gY3JlYXRlU3RhdGVPcGVyYXRvcihmdW5jdGlvbiAoXywgc3RhdGUpIHsgcmV0dXJuIG11dGF0b3Ioc3RhdGUpOyB9KTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gb3BlcmF0b3Ioc3RhdGUsIHZvaWQgMCk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlT3BlcmF0b3IobXV0YXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbihzdGF0ZSwgYXJnKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnMikge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNGU0EoYXJnMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBydW5NdXRhdG9yID0gZnVuY3Rpb24gKGRyYWZ0KSB7XHJcbiAgICAgICAgICAgIGlmIChpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcpKSB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdG9yKGFyZy5wYXlsb2FkLCBkcmFmdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtdXRhdG9yKGFyZywgZHJhZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNEcmFmdDMoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIHJ1bk11dGF0b3Ioc3RhdGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlMyhzdGF0ZSwgcnVuTXV0YXRvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvdXRpbHMudHNcclxuZnVuY3Rpb24gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKSB7XHJcbiAgICB2YXIga2V5ID0gc2VsZWN0SWQoZW50aXR5KTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYga2V5ID09PSB2b2lkIDApIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZW50aXR5IHBhc3NlZCB0byB0aGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCB1bmRlZmluZWQuXCIsIFwiWW91IHNob3VsZCBwcm9iYWJseSBwcm92aWRlIHlvdXIgb3duIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24uXCIsIFwiVGhlIGVudGl0eSB0aGF0IHdhcyBwYXNzZWQ6XCIsIGVudGl0eSwgXCJUaGUgYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbjpcIiwgc2VsZWN0SWQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2V5O1xyXG59XHJcbmZ1bmN0aW9uIGVuc3VyZUVudGl0aWVzQXJyYXkoZW50aXRpZXMpIHtcclxuICAgIGlmICghQXJyYXkuaXNBcnJheShlbnRpdGllcykpIHtcclxuICAgICAgICBlbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoZW50aXRpZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVudGl0aWVzO1xyXG59XHJcbmZ1bmN0aW9uIHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSkge1xyXG4gICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgIHZhciBhZGRlZCA9IFtdO1xyXG4gICAgdmFyIHVwZGF0ZWQgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgbmV3RW50aXRpZXNfMSA9IG5ld0VudGl0aWVzOyBfaSA8IG5ld0VudGl0aWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGVudGl0eSA9IG5ld0VudGl0aWVzXzFbX2ldO1xyXG4gICAgICAgIHZhciBpZCA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XHJcbiAgICAgICAgaWYgKGlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWQucHVzaCh7IGlkOiBpZCwgY2hhbmdlczogZW50aXR5IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWQucHVzaChlbnRpdHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbYWRkZWQsIHVwZGF0ZWRdO1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy91bnNvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKSB7XHJcbiAgICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICB2YXIga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcclxuICAgICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuaWRzLnB1c2goa2V5KTtcclxuICAgICAgICBzdGF0ZS5lbnRpdGllc1trZXldID0gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG5ld0VudGl0aWVzXzIgPSBuZXdFbnRpdGllczsgX2kgPCBuZXdFbnRpdGllc18yLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gbmV3RW50aXRpZXNfMltfaV07XHJcbiAgICAgICAgICAgIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIHN0YXRlLmVudGl0aWVzKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5lbnRpdGllc1trZXldID0gZW50aXR5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIG5ld0VudGl0aWVzXzMgPSBuZXdFbnRpdGllczsgX2kgPCBuZXdFbnRpdGllc18zLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gbmV3RW50aXRpZXNfM1tfaV07XHJcbiAgICAgICAgICAgIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0QWxsTXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIHN0YXRlLmlkcyA9IFtdO1xyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzID0ge307XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU9uZU11dGFibHkoa2V5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiByZW1vdmVNYW55TXV0YWJseShba2V5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlTWFueU11dGFibHkoa2V5cywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgZGlkTXV0YXRlID0gZmFsc2U7XHJcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW2tleV07XHJcbiAgICAgICAgICAgICAgICBkaWRNdXRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGRpZE11dGF0ZSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMgPSBzdGF0ZS5pZHMuZmlsdGVyKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gaWQgaW4gc3RhdGUuZW50aXRpZXM7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbE11dGFibHkoc3RhdGUpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRlLCB7XHJcbiAgICAgICAgICAgIGlkczogW10sXHJcbiAgICAgICAgICAgIGVudGl0aWVzOiB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGFrZU5ld0tleShrZXlzLCB1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsMiA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XHJcbiAgICAgICAgdmFyIHVwZGF0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBvcmlnaW5hbDIsIHVwZGF0ZS5jaGFuZ2VzKTtcclxuICAgICAgICB2YXIgbmV3S2V5ID0gc2VsZWN0SWRWYWx1ZSh1cGRhdGVkLCBzZWxlY3RJZCk7XHJcbiAgICAgICAgdmFyIGhhc05ld0tleSA9IG5ld0tleSAhPT0gdXBkYXRlLmlkO1xyXG4gICAgICAgIGlmIChoYXNOZXdLZXkpIHtcclxuICAgICAgICAgICAga2V5c1t1cGRhdGUuaWRdID0gbmV3S2V5O1xyXG4gICAgICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXNbbmV3S2V5XSA9IHVwZGF0ZWQ7XHJcbiAgICAgICAgcmV0dXJuIGhhc05ld0tleTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU9uZU11dGFibHkodXBkYXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFueU11dGFibHkodXBkYXRlcywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgbmV3S2V5cyA9IHt9O1xyXG4gICAgICAgIHZhciB1cGRhdGVzUGVyRW50aXR5ID0ge307XHJcbiAgICAgICAgdXBkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh1cGRhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZS5pZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1cGRhdGUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlczogX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXSA/IHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXS5jaGFuZ2VzIDogbnVsbCksIHVwZGF0ZS5jaGFuZ2VzKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZXMgPSBPYmplY3QudmFsdWVzKHVwZGF0ZXNQZXJFbnRpdHkpO1xyXG4gICAgICAgIHZhciBkaWRNdXRhdGVFbnRpdGllcyA9IHVwZGF0ZXMubGVuZ3RoID4gMDtcclxuICAgICAgICBpZiAoZGlkTXV0YXRlRW50aXRpZXMpIHtcclxuICAgICAgICAgICAgdmFyIGRpZE11dGF0ZUlkcyA9IHVwZGF0ZXMuZmlsdGVyKGZ1bmN0aW9uICh1cGRhdGUpIHsgcmV0dXJuIHRha2VOZXdLZXkobmV3S2V5cywgdXBkYXRlLCBzdGF0ZSk7IH0pLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIGlmIChkaWRNdXRhdGVJZHMpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmlkcyA9IE9iamVjdC5rZXlzKHN0YXRlLmVudGl0aWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIF9jID0gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSwgYWRkZWQgPSBfY1swXSwgdXBkYXRlZCA9IF9jWzFdO1xyXG4gICAgICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW1vdmVBbGw6IGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvcihyZW1vdmVBbGxNdXRhYmx5KSxcclxuICAgICAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXHJcbiAgICAgICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICAgICAgc2V0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0TWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpLFxyXG4gICAgICAgIHJlbW92ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVPbmVNdXRhYmx5KSxcclxuICAgICAgICByZW1vdmVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU1hbnlNdXRhYmx5KVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvc29ydGVkX3N0YXRlX2FkYXB0ZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0KSB7XHJcbiAgICB2YXIgX2MgPSBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCksIHJlbW92ZU9uZSA9IF9jLnJlbW92ZU9uZSwgcmVtb3ZlTWFueSA9IF9jLnJlbW92ZU1hbnksIHJlbW92ZUFsbCA9IF9jLnJlbW92ZUFsbDtcclxuICAgIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBhZGRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICB2YXIgbW9kZWxzID0gbmV3RW50aXRpZXMuZmlsdGVyKGZ1bmN0aW9uIChtb2RlbCkgeyByZXR1cm4gIShzZWxlY3RJZFZhbHVlKG1vZGVsLCBzZWxlY3RJZCkgaW4gc3RhdGUuZW50aXRpZXMpOyB9KTtcclxuICAgICAgICBpZiAobW9kZWxzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBtZXJnZShtb2RlbHMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gc2V0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgaWYgKG5ld0VudGl0aWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBtZXJnZShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBzdGF0ZS5lbnRpdGllcyA9IHt9O1xyXG4gICAgICAgIHN0YXRlLmlkcyA9IFtdO1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGFwcGxpZWRVcGRhdGVzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB1cGRhdGVzXzEgPSB1cGRhdGVzOyBfaSA8IHVwZGF0ZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IHVwZGF0ZXNfMVtfaV07XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgICAgICBpZiAoIWVudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwbGllZFVwZGF0ZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGVudGl0eSwgdXBkYXRlLmNoYW5nZXMpO1xyXG4gICAgICAgICAgICB2YXIgbmV3SWQgPSBzZWxlY3RJZChlbnRpdHkpO1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlLmlkICE9PSBuZXdJZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5lbnRpdGllc1tuZXdJZF0gPSBlbnRpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFwcGxpZWRVcGRhdGVzKSB7XHJcbiAgICAgICAgICAgIHJlc29ydEVudGl0aWVzKHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYyA9IHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSksIGFkZGVkID0gX2NbMF0sIHVwZGF0ZWQgPSBfY1sxXTtcclxuICAgICAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFyZUFycmF5c0VxdWFsKGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aCAmJiBpIDwgYi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYVtpXSA9PT0gYltpXSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1lcmdlKG1vZGVscywgc3RhdGUpIHtcclxuICAgICAgICBtb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcclxuICAgICAgICAgICAgc3RhdGUuZW50aXRpZXNbc2VsZWN0SWQobW9kZWwpXSA9IG1vZGVsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc29ydEVudGl0aWVzKHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc29ydEVudGl0aWVzKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGFsbEVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhzdGF0ZS5lbnRpdGllcyk7XHJcbiAgICAgICAgYWxsRW50aXRpZXMuc29ydChzb3J0KTtcclxuICAgICAgICB2YXIgbmV3U29ydGVkSWRzID0gYWxsRW50aXRpZXMubWFwKHNlbGVjdElkKTtcclxuICAgICAgICB2YXIgaWRzID0gc3RhdGUuaWRzO1xyXG4gICAgICAgIGlmICghYXJlQXJyYXlzRXF1YWwoaWRzLCBuZXdTb3J0ZWRJZHMpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkcyA9IG5ld1NvcnRlZElkcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbW92ZU9uZTogcmVtb3ZlT25lLFxyXG4gICAgICAgIHJlbW92ZU1hbnk6IHJlbW92ZU1hbnksXHJcbiAgICAgICAgcmVtb3ZlQWxsOiByZW1vdmVBbGwsXHJcbiAgICAgICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0T25lTXV0YWJseSksXHJcbiAgICAgICAgc2V0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0TWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldEFsbDogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRBbGxNdXRhYmx5KSxcclxuICAgICAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvY3JlYXRlX2FkYXB0ZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlRW50aXR5QWRhcHRlcihvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9jID0gX19zcHJlYWRWYWx1ZXMoe1xyXG4gICAgICAgIHNvcnRDb21wYXJlcjogZmFsc2UsXHJcbiAgICAgICAgc2VsZWN0SWQ6IGZ1bmN0aW9uIChpbnN0YW5jZSkgeyByZXR1cm4gaW5zdGFuY2UuaWQ7IH1cclxuICAgIH0sIG9wdGlvbnMpLCBzZWxlY3RJZCA9IF9jLnNlbGVjdElkLCBzb3J0Q29tcGFyZXIgPSBfYy5zb3J0Q29tcGFyZXI7XHJcbiAgICB2YXIgc3RhdGVGYWN0b3J5ID0gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSgpO1xyXG4gICAgdmFyIHNlbGVjdG9yc0ZhY3RvcnkgPSBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCk7XHJcbiAgICB2YXIgc3RhdGVBZGFwdGVyID0gc29ydENvbXBhcmVyID8gY3JlYXRlU29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkLCBzb3J0Q29tcGFyZXIpIDogY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpO1xyXG4gICAgcmV0dXJuIF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICBzZWxlY3RJZDogc2VsZWN0SWQsXHJcbiAgICAgICAgc29ydENvbXBhcmVyOiBzb3J0Q29tcGFyZXJcclxuICAgIH0sIHN0YXRlRmFjdG9yeSksIHNlbGVjdG9yc0ZhY3RvcnkpLCBzdGF0ZUFkYXB0ZXIpO1xyXG59XHJcbi8vIHNyYy9uYW5vaWQudHNcclxudmFyIHVybEFscGhhYmV0ID0gXCJNb2R1bGVTeW1iaGFzT3duUHItMDEyMzQ1Njc4OUFCQ0RFRkdITlJWZmdjdGlVdnpfS3FZVEprTHhwWlhJalFXXCI7XHJcbnZhciBuYW5vaWQgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgaWYgKHNpemUgPT09IHZvaWQgMCkgeyBzaXplID0gMjE7IH1cclxuICAgIHZhciBpZCA9IFwiXCI7XHJcbiAgICB2YXIgaSA9IHNpemU7XHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgaWQgKz0gdXJsQWxwaGFiZXRbTWF0aC5yYW5kb20oKSAqIDY0IHwgMF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWQ7XHJcbn07XHJcbi8vIHNyYy9jcmVhdGVBc3luY1RodW5rLnRzXHJcbnZhciBjb21tb25Qcm9wZXJ0aWVzID0gW1xyXG4gICAgXCJuYW1lXCIsXHJcbiAgICBcIm1lc3NhZ2VcIixcclxuICAgIFwic3RhY2tcIixcclxuICAgIFwiY29kZVwiXHJcbl07XHJcbnZhciBSZWplY3RXaXRoVmFsdWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWplY3RXaXRoVmFsdWUocGF5bG9hZCwgbWV0YSkge1xyXG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhID0gbWV0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZWplY3RXaXRoVmFsdWU7XHJcbn0oKSk7XHJcbnZhciBGdWxmaWxsV2l0aE1ldGEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGdWxmaWxsV2l0aE1ldGEocGF5bG9hZCwgbWV0YSkge1xyXG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XHJcbiAgICAgICAgdGhpcy5tZXRhID0gbWV0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBGdWxmaWxsV2l0aE1ldGE7XHJcbn0oKSk7XHJcbnZhciBtaW5pU2VyaWFsaXplRXJyb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICB2YXIgc2ltcGxlRXJyb3IgPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGNvbW1vblByb3BlcnRpZXNfMSA9IGNvbW1vblByb3BlcnRpZXM7IF9pIDwgY29tbW9uUHJvcGVydGllc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSBjb21tb25Qcm9wZXJ0aWVzXzFbX2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlW3Byb3BlcnR5XSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgc2ltcGxlRXJyb3JbcHJvcGVydHldID0gdmFsdWVbcHJvcGVydHldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaW1wbGVFcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiB7IG1lc3NhZ2U6IFN0cmluZyh2YWx1ZSkgfTtcclxufTtcclxudmFyIGNyZWF0ZUFzeW5jVGh1bmsgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQXN5bmNUaHVuazIodHlwZVByZWZpeCwgcGF5bG9hZENyZWF0b3IsIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZnVsZmlsbGVkID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyBcIi9mdWxmaWxsZWRcIiwgZnVuY3Rpb24gKHBheWxvYWQsIHJlcXVlc3RJZCwgYXJnLCBtZXRhKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwiZnVsZmlsbGVkXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgdmFyIHBlbmRpbmcgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL3BlbmRpbmdcIiwgZnVuY3Rpb24gKHJlcXVlc3RJZCwgYXJnLCBtZXRhKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICBwYXlsb2FkOiB2b2lkIDAsXHJcbiAgICAgICAgICAgIG1ldGE6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1ldGEgfHwge30pLCB7XHJcbiAgICAgICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFN0YXR1czogXCJwZW5kaW5nXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyBcIi9yZWplY3RlZFwiLCBmdW5jdGlvbiAoZXJyb3IsIHJlcXVlc3RJZCwgYXJnLCBwYXlsb2FkLCBtZXRhKSB7IHJldHVybiAoe1xyXG4gICAgICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgICAgICBlcnJvcjogKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXJpYWxpemVFcnJvciB8fCBtaW5pU2VyaWFsaXplRXJyb3IpKGVycm9yIHx8IFwiUmVqZWN0ZWRcIiksXHJcbiAgICAgICAgICAgIG1ldGE6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1ldGEgfHwge30pLCB7XHJcbiAgICAgICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgcmVqZWN0ZWRXaXRoVmFsdWU6ICEhcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwicmVqZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQ6IChlcnJvciA9PSBudWxsID8gdm9pZCAwIDogZXJyb3IubmFtZSkgPT09IFwiQWJvcnRFcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAoZXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yLm5hbWUpID09PSBcIkNvbmRpdGlvbkVycm9yXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgdmFyIGRpc3BsYXllZFdhcm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB2YXIgQUMgPSB0eXBlb2YgQWJvcnRDb250cm9sbGVyICE9PSBcInVuZGVmaW5lZFwiID8gQWJvcnRDb250cm9sbGVyIDogLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduYWwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbmFib3J0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZWFzb246IHZvaWQgMCxcclxuICAgICAgICAgICAgICAgICAgICB0aHJvd0lmQWJvcnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xhc3NfMS5wcm90b3R5cGUuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkaXNwbGF5ZWRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJUaGlzIHBsYXRmb3JtIGRvZXMgbm90IGltcGxlbWVudCBBYm9ydENvbnRyb2xsZXIuIFxcbklmIHlvdSB3YW50IHRvIHVzZSB0aGUgQWJvcnRDb250cm9sbGVyIHRvIHJlYWN0IHRvIGBhYm9ydGAgZXZlbnRzLCBwbGVhc2UgY29uc2lkZXIgaW1wb3J0aW5nIGEgcG9seWZpbGwgbGlrZSAnYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsL2Rpc3QvYWJvcnRjb250cm9sbGVyLXBvbHlmaWxsLW9ubHknLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBjbGFzc18xO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcihhcmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdElkID0gKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuaWRHZW5lcmF0b3IpID8gb3B0aW9ucy5pZEdlbmVyYXRvcihhcmcpIDogbmFub2lkKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWJvcnRDb250cm9sbGVyID0gbmV3IEFDKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWJvcnRSZWFzb247XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYWJvcnQocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRSZWFzb24gPSByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZTIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBmaW5hbEFjdGlvbiwgY29uZGl0aW9uUmVzdWx0LCBhYm9ydGVkUHJvbWlzZSwgZXJyXzEsIHNraXBEaXNwYXRjaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFswLCA0LCAsIDVdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUmVzdWx0ID0gKF9hID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5jb25kaXRpb24pID09IG51bGwgPyB2b2lkIDAgOiBfYS5jYWxsKG9wdGlvbnMsIGFyZywgeyBnZXRTdGF0ZTogZ2V0U3RhdGUsIGV4dHJhOiBleHRyYSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKGNvbmRpdGlvblJlc3VsdCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjb25kaXRpb25SZXN1bHRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uUmVzdWx0ID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uUmVzdWx0ID09PSBmYWxzZSB8fCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbmRpdGlvbkVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBYm9ydGVkIGR1ZSB0byBjb25kaXRpb24gY2FsbGJhY2sgcmV0dXJuaW5nIGZhbHNlLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChfLCByZWplY3QpIHsgcmV0dXJuIGFib3J0Q29udHJvbGxlci5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkFib3J0RXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGFib3J0UmVhc29uIHx8IFwiQWJvcnRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHBlbmRpbmcocmVxdWVzdElkLCBhcmcsIChfYiA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZ2V0UGVuZGluZ01ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKG9wdGlvbnMsIHsgcmVxdWVzdElkOiByZXF1ZXN0SWQsIGFyZzogYXJnIH0sIHsgZ2V0U3RhdGU6IGdldFN0YXRlLCBleHRyYTogZXh0cmEgfSkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yYWNlKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydGVkUHJvbWlzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocGF5bG9hZENyZWF0b3IoYXJnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGFib3J0Q29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0OiBhYm9ydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0V2l0aFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVqZWN0V2l0aFZhbHVlKHZhbHVlLCBtZXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsZmlsbFdpdGhWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZ1bGZpbGxXaXRoTWV0YSh2YWx1ZSwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRnVsZmlsbFdpdGhNZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdC5wYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgcmVzdWx0Lm1ldGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LCByZXF1ZXN0SWQsIGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQWN0aW9uID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbEFjdGlvbiA9IGVycl8xIGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlID8gcmVqZWN0ZWQobnVsbCwgcmVxdWVzdElkLCBhcmcsIGVycl8xLnBheWxvYWQsIGVycl8xLm1ldGEpIDogcmVqZWN0ZWQoZXJyXzEsIHJlcXVlc3RJZCwgYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lwRGlzcGF0Y2ggPSBvcHRpb25zICYmICFvcHRpb25zLmRpc3BhdGNoQ29uZGl0aW9uUmVqZWN0aW9uICYmIHJlamVjdGVkLm1hdGNoKGZpbmFsQWN0aW9uKSAmJiBmaW5hbEFjdGlvbi5tZXRhLmNvbmRpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwRGlzcGF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGZpbmFsQWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmluYWxBY3Rpb25dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb21pc2UyLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnQ6IGFib3J0LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVud3JhcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTIudGhlbih1bndyYXBSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY3Rpb25DcmVhdG9yLCB7XHJcbiAgICAgICAgICAgIHBlbmRpbmc6IHBlbmRpbmcsXHJcbiAgICAgICAgICAgIHJlamVjdGVkOiByZWplY3RlZCxcclxuICAgICAgICAgICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXHJcbiAgICAgICAgICAgIHR5cGVQcmVmaXg6IHR5cGVQcmVmaXhcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUFzeW5jVGh1bmsyLndpdGhUeXBlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNyZWF0ZUFzeW5jVGh1bmsyOyB9O1xyXG4gICAgcmV0dXJuIGNyZWF0ZUFzeW5jVGh1bmsyO1xyXG59KSgpO1xyXG5mdW5jdGlvbiB1bndyYXBSZXN1bHQoYWN0aW9uKSB7XHJcbiAgICBpZiAoYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEucmVqZWN0ZWRXaXRoVmFsdWUpIHtcclxuICAgICAgICB0aHJvdyBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24uZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBhY3Rpb24uZXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbn1cclxuZnVuY3Rpb24gaXNUaGVuYWJsZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbi8vIHNyYy90c0hlbHBlcnMudHNcclxudmFyIGhhc01hdGNoRnVuY3Rpb24gPSBmdW5jdGlvbiAodikge1xyXG4gICAgcmV0dXJuIHYgJiYgdHlwZW9mIHYubWF0Y2ggPT09IFwiZnVuY3Rpb25cIjtcclxufTtcclxuLy8gc3JjL21hdGNoZXJzLnRzXHJcbnZhciBtYXRjaGVzID0gZnVuY3Rpb24gKG1hdGNoZXIsIGFjdGlvbikge1xyXG4gICAgaWYgKGhhc01hdGNoRnVuY3Rpb24obWF0Y2hlcikpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlci5tYXRjaChhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gaXNBbnlPZigpIHtcclxuICAgIHZhciBtYXRjaGVycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBtYXRjaGVyc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlcnMuc29tZShmdW5jdGlvbiAobWF0Y2hlcikgeyByZXR1cm4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pOyB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNBbGxPZigpIHtcclxuICAgIHZhciBtYXRjaGVycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBtYXRjaGVyc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlcnMuZXZlcnkoZnVuY3Rpb24gKG1hdGNoZXIpIHsgcmV0dXJuIG1hdGNoZXMobWF0Y2hlciwgYWN0aW9uKTsgfSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgdmFsaWRTdGF0dXMpIHtcclxuICAgIGlmICghYWN0aW9uIHx8ICFhY3Rpb24ubWV0YSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgaGFzVmFsaWRSZXF1ZXN0SWQgPSB0eXBlb2YgYWN0aW9uLm1ldGEucmVxdWVzdElkID09PSBcInN0cmluZ1wiO1xyXG4gICAgdmFyIGhhc1ZhbGlkUmVxdWVzdFN0YXR1cyA9IHZhbGlkU3RhdHVzLmluZGV4T2YoYWN0aW9uLm1ldGEucmVxdWVzdFN0YXR1cykgPiAtMTtcclxuICAgIHJldHVybiBoYXNWYWxpZFJlcXVlc3RJZCAmJiBoYXNWYWxpZFJlcXVlc3RTdGF0dXM7XHJcbn1cclxuZnVuY3Rpb24gaXNBc3luY1RodW5rQXJyYXkoYSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBhWzBdID09PSBcImZ1bmN0aW9uXCIgJiYgXCJwZW5kaW5nXCIgaW4gYVswXSAmJiBcImZ1bGZpbGxlZFwiIGluIGFbMF0gJiYgXCJyZWplY3RlZFwiIGluIGFbMF07XHJcbn1cclxuZnVuY3Rpb24gaXNQZW5kaW5nKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicGVuZGluZ1wiXSk7IH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc1BlbmRpbmcoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykgeyByZXR1cm4gYXN5bmNUaHVuay5wZW5kaW5nOyB9KTtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzUmVqZWN0ZWQoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJyZWplY3RlZFwiXSk7IH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc1JlamVjdGVkKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHsgcmV0dXJuIGFzeW5jVGh1bmsucmVqZWN0ZWQ7IH0pO1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNSZWplY3RlZFdpdGhWYWx1ZSgpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgdmFyIGhhc0ZsYWcgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbiAmJiBhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZTtcclxuICAgIH07XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQWxsT2YoaXNSZWplY3RlZC5hcHBseSh2b2lkIDAsIGFzeW5jVGh1bmtzKSwgaGFzRmxhZyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNSZWplY3RlZFdpdGhWYWx1ZSgpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQWxsT2YoaXNSZWplY3RlZC5hcHBseSh2b2lkIDAsIGFzeW5jVGh1bmtzKSwgaGFzRmxhZyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0Z1bGZpbGxlZCgpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcImZ1bGZpbGxlZFwiXSk7IH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc0Z1bGZpbGxlZCgpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7IHJldHVybiBhc3luY1RodW5rLmZ1bGZpbGxlZDsgfSk7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0FzeW5jVGh1bmtBY3Rpb24oKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJwZW5kaW5nXCIsIFwiZnVsZmlsbGVkXCIsIFwicmVqZWN0ZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNBc3luY1RodW5rQWN0aW9uKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFzeW5jVGh1bmtzXzEgPSBhc3luY1RodW5rczsgX2kgPCBhc3luY1RodW5rc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgYXN5bmNUaHVuayA9IGFzeW5jVGh1bmtzXzFbX2ldO1xyXG4gICAgICAgICAgICBtYXRjaGVycy5wdXNoKGFzeW5jVGh1bmsucGVuZGluZywgYXN5bmNUaHVuay5yZWplY3RlZCwgYXN5bmNUaHVuay5mdWxmaWxsZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvdXRpbHMudHNcclxudmFyIGFzc2VydEZ1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMsIGV4cGVjdGVkKSB7XHJcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoZXhwZWN0ZWQgKyBcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtcclxuICAgIH1cclxufTtcclxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7XHJcbn07XHJcbnZhciBjYXRjaFJlamVjdGlvbiA9IGZ1bmN0aW9uIChwcm9taXNlMiwgb25FcnJvcikge1xyXG4gICAgaWYgKG9uRXJyb3IgPT09IHZvaWQgMCkgeyBvbkVycm9yID0gbm9vcDsgfVxyXG4gICAgcHJvbWlzZTIuY2F0Y2gob25FcnJvcik7XHJcbiAgICByZXR1cm4gcHJvbWlzZTI7XHJcbn07XHJcbnZhciBhZGRBYm9ydFNpZ25hbExpc3RlbmVyID0gZnVuY3Rpb24gKGFib3J0U2lnbmFsLCBjYWxsYmFjaykge1xyXG4gICAgYWJvcnRTaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNhbGxiYWNrLCB7IG9uY2U6IHRydWUgfSk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gYWJvcnRTaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNhbGxiYWNrKTsgfTtcclxufTtcclxudmFyIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24gPSBmdW5jdGlvbiAoYWJvcnRDb250cm9sbGVyLCByZWFzb24pIHtcclxuICAgIHZhciBzaWduYWwgPSBhYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xyXG4gICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoXCJyZWFzb25cIiBpbiBzaWduYWwpKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpZ25hbCwgXCJyZWFzb25cIiwge1xyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogcmVhc29uLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQocmVhc29uKTtcclxufTtcclxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS9leGNlcHRpb25zLnRzXHJcbnZhciB0YXNrID0gXCJ0YXNrXCI7XHJcbnZhciBsaXN0ZW5lciA9IFwibGlzdGVuZXJcIjtcclxudmFyIGNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XHJcbnZhciBjYW5jZWxsZWQgPSBcImNhbmNlbGxlZFwiO1xyXG52YXIgdGFza0NhbmNlbGxlZCA9IFwidGFzay1cIiArIGNhbmNlbGxlZDtcclxudmFyIHRhc2tDb21wbGV0ZWQgPSBcInRhc2stXCIgKyBjb21wbGV0ZWQ7XHJcbnZhciBsaXN0ZW5lckNhbmNlbGxlZCA9IGxpc3RlbmVyICsgXCItXCIgKyBjYW5jZWxsZWQ7XHJcbnZhciBsaXN0ZW5lckNvbXBsZXRlZCA9IGxpc3RlbmVyICsgXCItXCIgKyBjb21wbGV0ZWQ7XHJcbnZhciBUYXNrQWJvcnRFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRhc2tBYm9ydEVycm9yKGNvZGUpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiVGFza0Fib3J0RXJyb3JcIjtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0YXNrICsgXCIgXCIgKyBjYW5jZWxsZWQgKyBcIiAocmVhc29uOiBcIiArIGNvZGUgKyBcIilcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBUYXNrQWJvcnRFcnJvcjtcclxufSgpKTtcclxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS90YXNrLnRzXHJcbnZhciB2YWxpZGF0ZUFjdGl2ZSA9IGZ1bmN0aW9uIChzaWduYWwpIHtcclxuICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBUYXNrQWJvcnRFcnJvcihzaWduYWwucmVhc29uKTtcclxuICAgIH1cclxufTtcclxuZnVuY3Rpb24gcmFjZVdpdGhTaWduYWwoc2lnbmFsLCBwcm9taXNlMikge1xyXG4gICAgdmFyIGNsZWFudXAgPSBub29wO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgbm90aWZ5UmVqZWN0aW9uID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqZWN0KG5ldyBUYXNrQWJvcnRFcnJvcihzaWduYWwucmVhc29uKSk7IH07XHJcbiAgICAgICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgIG5vdGlmeVJlamVjdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFudXAgPSBhZGRBYm9ydFNpZ25hbExpc3RlbmVyKHNpZ25hbCwgbm90aWZ5UmVqZWN0aW9uKTtcclxuICAgICAgICBwcm9taXNlMi5maW5hbGx5KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsZWFudXAoKTsgfSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgfSkuZmluYWxseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYW51cCA9IG5vb3A7XHJcbiAgICB9KTtcclxufVxyXG52YXIgcnVuVGFzayA9IGZ1bmN0aW9uICh0YXNrMiwgY2xlYW5VcCkgeyByZXR1cm4gX19hc3luYyh2b2lkIDAsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2YWx1ZSwgZXJyb3JfMTtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMCwgMywgNCwgNV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yZXNvbHZlKCldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0YXNrMigpXTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IFwib2tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IGVycm9yXzEgaW5zdGFuY2VvZiBUYXNrQWJvcnRFcnJvciA/IFwiY2FuY2VsbGVkXCIgOiBcInJlamVjdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xXHJcbiAgICAgICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNsZWFuVXAgPT0gbnVsbCA/IHZvaWQgMCA6IGNsZWFuVXAoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxudmFyIGNyZWF0ZVBhdXNlID0gZnVuY3Rpb24gKHNpZ25hbCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9taXNlMikge1xyXG4gICAgICAgIHJldHVybiBjYXRjaFJlamVjdGlvbihyYWNlV2l0aFNpZ25hbChzaWduYWwsIHByb21pc2UyKS50aGVuKGZ1bmN0aW9uIChvdXRwdXQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoc2lnbmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9KSk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgY3JlYXRlRGVsYXkgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XHJcbiAgICB2YXIgcGF1c2UgPSBjcmVhdGVQYXVzZShzaWduYWwpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aW1lb3V0TXMpIHtcclxuICAgICAgICByZXR1cm4gcGF1c2UobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dE1zKTsgfSkpO1xyXG4gICAgfTtcclxufTtcclxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS9pbmRleC50c1xyXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcclxudmFyIElOVEVSTkFMX05JTF9UT0tFTiA9IHt9O1xyXG52YXIgYWxtID0gXCJsaXN0ZW5lck1pZGRsZXdhcmVcIjtcclxudmFyIGNyZWF0ZUZvcmsgPSBmdW5jdGlvbiAocGFyZW50QWJvcnRTaWduYWwpIHtcclxuICAgIHZhciBsaW5rQ29udHJvbGxlcnMgPSBmdW5jdGlvbiAoY29udHJvbGxlcikgeyByZXR1cm4gYWRkQWJvcnRTaWduYWxMaXN0ZW5lcihwYXJlbnRBYm9ydFNpZ25hbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBwYXJlbnRBYm9ydFNpZ25hbC5yZWFzb24pOyB9KTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFza0V4ZWN1dG9yKSB7XHJcbiAgICAgICAgYXNzZXJ0RnVuY3Rpb24odGFza0V4ZWN1dG9yLCBcInRhc2tFeGVjdXRvclwiKTtcclxuICAgICAgICB2YXIgY2hpbGRBYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgbGlua0NvbnRyb2xsZXJzKGNoaWxkQWJvcnRDb250cm9sbGVyKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcnVuVGFzayhmdW5jdGlvbiAoKSB7IHJldHVybiBfX2FzeW5jKHZvaWQgMCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0MjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUocGFyZW50QWJvcnRTaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0YXNrRXhlY3V0b3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlOiBjcmVhdGVQYXVzZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBjcmVhdGVEZWxheShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQyID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0Ml07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9LCBmdW5jdGlvbiAoKSB7IHJldHVybiBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNoaWxkQWJvcnRDb250cm9sbGVyLCB0YXNrQ29tcGxldGVkKTsgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVzdWx0OiBjcmVhdGVQYXVzZShwYXJlbnRBYm9ydFNpZ25hbCkocmVzdWx0KSxcclxuICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNoaWxkQWJvcnRDb250cm9sbGVyLCB0YXNrQ2FuY2VsbGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59O1xyXG52YXIgY3JlYXRlVGFrZVBhdHRlcm4gPSBmdW5jdGlvbiAoc3RhcnRMaXN0ZW5pbmcsIHNpZ25hbCkge1xyXG4gICAgdmFyIHRha2UgPSBmdW5jdGlvbiAocHJlZGljYXRlLCB0aW1lb3V0KSB7IHJldHVybiBfX2FzeW5jKHZvaWQgMCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB1bnN1YnNjcmliZSwgdHVwbGVQcm9taXNlLCBwcm9taXNlcywgb3V0cHV0O1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKHNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0dXBsZVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdG9wTGlzdGVuaW5nID0gc3RhcnRMaXN0ZW5pbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZGljYXRlOiBwcmVkaWNhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6IGZ1bmN0aW9uIChhY3Rpb24sIGxpc3RlbmVyQXBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJBcGkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lckFwaS5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lckFwaS5nZXRPcmlnaW5hbFN0YXRlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcExpc3RlbmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR1cGxlUHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXQsIG51bGwpOyB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsICwgMywgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJhY2VXaXRoU2lnbmFsKHNpZ25hbCwgUHJvbWlzZS5yYWNlKHByb21pc2VzKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShzaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBvdXRwdXRdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocHJlZGljYXRlLCB0aW1lb3V0KSB7IHJldHVybiBjYXRjaFJlamVjdGlvbih0YWtlKHByZWRpY2F0ZSwgdGltZW91dCkpOyB9O1xyXG59O1xyXG52YXIgZ2V0TGlzdGVuZXJFbnRyeVByb3BzRnJvbSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSwgYWN0aW9uQ3JlYXRvciA9IG9wdGlvbnMuYWN0aW9uQ3JlYXRvciwgbWF0Y2hlciA9IG9wdGlvbnMubWF0Y2hlciwgcHJlZGljYXRlID0gb3B0aW9ucy5wcmVkaWNhdGUsIGVmZmVjdCA9IG9wdGlvbnMuZWZmZWN0O1xyXG4gICAgaWYgKHR5cGUpIHtcclxuICAgICAgICBwcmVkaWNhdGUgPSBjcmVhdGVBY3Rpb24odHlwZSkubWF0Y2g7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhY3Rpb25DcmVhdG9yKSB7XHJcbiAgICAgICAgdHlwZSA9IGFjdGlvbkNyZWF0b3IudHlwZTtcclxuICAgICAgICBwcmVkaWNhdGUgPSBhY3Rpb25DcmVhdG9yLm1hdGNoO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobWF0Y2hlcikge1xyXG4gICAgICAgIHByZWRpY2F0ZSA9IG1hdGNoZXI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcmVkaWNhdGUpIHtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNyZWF0aW5nIG9yIHJlbW92aW5nIGEgbGlzdGVuZXIgcmVxdWlyZXMgb25lIG9mIHRoZSBrbm93biBmaWVsZHMgZm9yIG1hdGNoaW5nIGFuIGFjdGlvblwiKTtcclxuICAgIH1cclxuICAgIGFzc2VydEZ1bmN0aW9uKGVmZmVjdCwgXCJvcHRpb25zLmxpc3RlbmVyXCIpO1xyXG4gICAgcmV0dXJuIHsgcHJlZGljYXRlOiBwcmVkaWNhdGUsIHR5cGU6IHR5cGUsIGVmZmVjdDogZWZmZWN0IH07XHJcbn07XHJcbnZhciBjcmVhdGVMaXN0ZW5lckVudHJ5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHZhciBfYyA9IGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20ob3B0aW9ucyksIHR5cGUgPSBfYy50eXBlLCBwcmVkaWNhdGUgPSBfYy5wcmVkaWNhdGUsIGVmZmVjdCA9IF9jLmVmZmVjdDtcclxuICAgIHZhciBpZCA9IG5hbm9pZCgpO1xyXG4gICAgdmFyIGVudHJ5ID0ge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBlZmZlY3Q6IGVmZmVjdCxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIHByZWRpY2F0ZTogcHJlZGljYXRlLFxyXG4gICAgICAgIHBlbmRpbmc6IG5ldyBTZXQoKSxcclxuICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1YnNjcmliZSBub3QgaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBlbnRyeTtcclxufTtcclxudmFyIGNhbmNlbEFjdGl2ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgZW50cnkucGVuZGluZy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XHJcbiAgICAgICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBsaXN0ZW5lckNhbmNlbGxlZCk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIGNyZWF0ZUNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlID0gZnVuY3Rpb24gKGxpc3RlbmVyTWFwKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxpc3RlbmVyTWFwLmZvckVhY2goY2FuY2VsQWN0aXZlTGlzdGVuZXJzKTtcclxuICAgICAgICBsaXN0ZW5lck1hcC5jbGVhcigpO1xyXG4gICAgfTtcclxufTtcclxudmFyIHNhZmVseU5vdGlmeUVycm9yID0gZnVuY3Rpb24gKGVycm9ySGFuZGxlciwgZXJyb3JUb05vdGlmeSwgZXJyb3JJbmZvKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGVycm9ySGFuZGxlcihlcnJvclRvTm90aWZ5LCBlcnJvckluZm8pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9ySGFuZGxlckVycm9yKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9ySGFuZGxlckVycm9yO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59O1xyXG52YXIgYWRkTGlzdGVuZXIgPSBjcmVhdGVBY3Rpb24oYWxtICsgXCIvYWRkXCIpO1xyXG52YXIgY2xlYXJBbGxMaXN0ZW5lcnMgPSBjcmVhdGVBY3Rpb24oYWxtICsgXCIvcmVtb3ZlQWxsXCIpO1xyXG52YXIgcmVtb3ZlTGlzdGVuZXIgPSBjcmVhdGVBY3Rpb24oYWxtICsgXCIvcmVtb3ZlXCIpO1xyXG52YXIgZGVmYXVsdEVycm9ySGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUuZXJyb3IuYXBwbHkoY29uc29sZSwgX19zcHJlYWRBcnJheShbYWxtICsgXCIvZXJyb3JcIl0sIGFyZ3MpKTtcclxufTtcclxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJNaWRkbGV3YXJlKG1pZGRsZXdhcmVPcHRpb25zKSB7XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgaWYgKG1pZGRsZXdhcmVPcHRpb25zID09PSB2b2lkIDApIHsgbWlkZGxld2FyZU9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIGxpc3RlbmVyTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIGV4dHJhID0gbWlkZGxld2FyZU9wdGlvbnMuZXh0cmEsIF9jID0gbWlkZGxld2FyZU9wdGlvbnMub25FcnJvciwgb25FcnJvciA9IF9jID09PSB2b2lkIDAgPyBkZWZhdWx0RXJyb3JIYW5kbGVyIDogX2M7XHJcbiAgICBhc3NlcnRGdW5jdGlvbihvbkVycm9yLCBcIm9uRXJyb3JcIik7XHJcbiAgICB2YXIgaW5zZXJ0RW50cnkgPSBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICBlbnRyeS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGxpc3RlbmVyTWFwLmRlbGV0ZShlbnRyeS5pZCk7IH07XHJcbiAgICAgICAgbGlzdGVuZXJNYXAuc2V0KGVudHJ5LmlkLCBlbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjYW5jZWxPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWxPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBjYW5jZWxPcHRpb25zLmNhbmNlbEFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQWN0aXZlTGlzdGVuZXJzKGVudHJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgdmFyIGZpbmRMaXN0ZW5lckVudHJ5ID0gZnVuY3Rpb24gKGNvbXBhcmF0b3IpIHtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9jID0gQXJyYXkuZnJvbShsaXN0ZW5lck1hcC52YWx1ZXMoKSk7IF9pIDwgX2MubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRyeSA9IF9jW19pXTtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmF0b3IoZW50cnkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgIH07XHJcbiAgICB2YXIgc3RhcnRMaXN0ZW5pbmcgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBlbnRyeSA9IGZpbmRMaXN0ZW5lckVudHJ5KGZ1bmN0aW9uIChleGlzdGluZ0VudHJ5KSB7IHJldHVybiBleGlzdGluZ0VudHJ5LmVmZmVjdCA9PT0gb3B0aW9ucy5lZmZlY3Q7IH0pO1xyXG4gICAgICAgIGlmICghZW50cnkpIHtcclxuICAgICAgICAgICAgZW50cnkgPSBjcmVhdGVMaXN0ZW5lckVudHJ5KG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5zZXJ0RW50cnkoZW50cnkpO1xyXG4gICAgfTtcclxuICAgIHZhciBzdG9wTGlzdGVuaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgX2MgPSBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tKG9wdGlvbnMpLCB0eXBlID0gX2MudHlwZSwgZWZmZWN0ID0gX2MuZWZmZWN0LCBwcmVkaWNhdGUgPSBfYy5wcmVkaWNhdGU7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gZmluZExpc3RlbmVyRW50cnkoZnVuY3Rpb24gKGVudHJ5Mikge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hQcmVkaWNhdGVPclR5cGUgPSB0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIiA/IGVudHJ5Mi50eXBlID09PSB0eXBlIDogZW50cnkyLnByZWRpY2F0ZSA9PT0gcHJlZGljYXRlO1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hQcmVkaWNhdGVPclR5cGUgJiYgZW50cnkyLmVmZmVjdCA9PT0gZWZmZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChlbnRyeSkge1xyXG4gICAgICAgICAgICBlbnRyeS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jYW5jZWxBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFjdGl2ZUxpc3RlbmVycyhlbnRyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICEhZW50cnk7XHJcbiAgICB9O1xyXG4gICAgdmFyIG5vdGlmeUxpc3RlbmVyID0gZnVuY3Rpb24gKGVudHJ5LCBhY3Rpb24sIGFwaSwgZ2V0T3JpZ2luYWxTdGF0ZSkgeyByZXR1cm4gX19hc3luYyhfdGhpcywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnRlcm5hbFRhc2tDb250cm9sbGVyLCB0YWtlLCBsaXN0ZW5lckVycm9yXzE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxUYXNrQ29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0YWtlID0gY3JlYXRlVGFrZVBhdHRlcm4oc3RhcnRMaXN0ZW5pbmcsIGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAzLCA0LCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkucGVuZGluZy5hZGQoaW50ZXJuYWxUYXNrQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5yZXNvbHZlKGVudHJ5LmVmZmVjdChhY3Rpb24sIGFzc2lnbih7fSwgYXBpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcmlnaW5hbFN0YXRlOiBnZXRPcmlnaW5hbFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBmdW5jdGlvbiAocHJlZGljYXRlLCB0aW1lb3V0KSB7IHJldHVybiB0YWtlKHByZWRpY2F0ZSwgdGltZW91dCkudGhlbihCb29sZWFuKTsgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRha2U6IHRha2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogY3JlYXRlRGVsYXkoaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2U6IGNyZWF0ZVBhdXNlKGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JrOiBjcmVhdGVGb3JrKGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBlbnRyeS51bnN1YnNjcmliZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyTWFwLnNldChlbnRyeS5pZCwgZW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEFjdGl2ZUxpc3RlbmVyczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnBlbmRpbmcuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbGxlciwgXywgc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sbGVyICE9PSBpbnRlcm5hbFRhc2tDb250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNvbnRyb2xsZXIsIGxpc3RlbmVyQ2FuY2VsbGVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldC5kZWxldGUoY29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyRXJyb3JfMSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShsaXN0ZW5lckVycm9yXzEgaW5zdGFuY2VvZiBUYXNrQWJvcnRFcnJvcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZWx5Tm90aWZ5RXJyb3Iob25FcnJvciwgbGlzdGVuZXJFcnJvcl8xLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlzZWRCeTogXCJlZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihpbnRlcm5hbFRhc2tDb250cm9sbGVyLCBsaXN0ZW5lckNvbXBsZXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnkucGVuZGluZy5kZWxldGUoaW50ZXJuYWxUYXNrQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciBjbGVhckxpc3RlbmVyTWlkZGxld2FyZSA9IGNyZWF0ZUNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlKGxpc3RlbmVyTWFwKTtcclxuICAgIHZhciBtaWRkbGV3YXJlID0gZnVuY3Rpb24gKGFwaSkgeyByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICBpZiAoIWlzQWN0aW9uKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkZExpc3RlbmVyLm1hdGNoKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0TGlzdGVuaW5nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsZWFyQWxsTGlzdGVuZXJzLm1hdGNoKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVtb3ZlTGlzdGVuZXIubWF0Y2goYWN0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcExpc3RlbmluZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvcmlnaW5hbFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgdmFyIGdldE9yaWdpbmFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFN0YXRlID09PSBJTlRFUk5BTF9OSUxfVE9LRU4pIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihhbG0gKyBcIjogZ2V0T3JpZ2luYWxTdGF0ZSBjYW4gb25seSBiZSBjYWxsZWQgc3luY2hyb25vdXNseVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxTdGF0ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJNYXAuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lckVudHJpZXMgPSBBcnJheS5mcm9tKGxpc3RlbmVyTWFwLnZhbHVlcygpKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgbGlzdGVuZXJFbnRyaWVzXzEgPSBsaXN0ZW5lckVudHJpZXM7IF9pIDwgbGlzdGVuZXJFbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gbGlzdGVuZXJFbnRyaWVzXzFbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBydW5MaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bkxpc3RlbmVyID0gZW50cnkucHJlZGljYXRlKGFjdGlvbiwgY3VycmVudFN0YXRlLCBvcmlnaW5hbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKHByZWRpY2F0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bkxpc3RlbmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVseU5vdGlmeUVycm9yKG9uRXJyb3IsIHByZWRpY2F0ZUVycm9yLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWlzZWRCeTogXCJwcmVkaWNhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFydW5MaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXIoZW50cnksIGFjdGlvbiwgYXBpLCBnZXRPcmlnaW5hbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgb3JpZ2luYWxTdGF0ZSA9IElOVEVSTkFMX05JTF9UT0tFTjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07IH07IH07XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1pZGRsZXdhcmU6IG1pZGRsZXdhcmUsXHJcbiAgICAgICAgc3RhcnRMaXN0ZW5pbmc6IHN0YXJ0TGlzdGVuaW5nLFxyXG4gICAgICAgIHN0b3BMaXN0ZW5pbmc6IHN0b3BMaXN0ZW5pbmcsXHJcbiAgICAgICAgY2xlYXJMaXN0ZW5lcnM6IGNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlXHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9hdXRvQmF0Y2hFbmhhbmNlci50c1xyXG52YXIgU0hPVUxEX0FVVE9CQVRDSCA9IFwiUlRLX2F1dG9CYXRjaFwiO1xyXG52YXIgcHJlcGFyZUF1dG9CYXRjaGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHBheWxvYWQpIHtcclxuICAgIHZhciBfYztcclxuICAgIHJldHVybiAoe1xyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgbWV0YTogKF9jID0ge30sIF9jW1NIT1VMRF9BVVRPQkFUQ0hdID0gdHJ1ZSwgX2MpXHJcbiAgICB9KTtcclxufTsgfTtcclxudmFyIHByb21pc2U7XHJcbnZhciBxdWV1ZU1pY3JvdGFza1NoaW0gPSB0eXBlb2YgcXVldWVNaWNyb3Rhc2sgPT09IFwiZnVuY3Rpb25cIiA/IHF1ZXVlTWljcm90YXNrLmJpbmQodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiBnbG9iYWxUaGlzKSA6IGZ1bmN0aW9uIChjYikgeyByZXR1cm4gKHByb21pc2UgfHwgKHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSkpLnRoZW4oY2IpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgdGhyb3cgZXJyO1xyXG59LCAwKTsgfSk7IH07XHJcbnZhciBjcmVhdGVRdWV1ZVdpdGhUaW1lciA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vdGlmeSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQobm90aWZ5LCB0aW1lb3V0KTtcclxuICAgIH07XHJcbn07XHJcbnZhciByQUYgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogY3JlYXRlUXVldWVXaXRoVGltZXIoMTApO1xyXG52YXIgYXV0b0JhdGNoRW5oYW5jZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0geyB0eXBlOiBcInJhZlwiIH07IH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RvcmUgPSBuZXh0LmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgdmFyIG5vdGlmeWluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG5vdGlmaWNhdGlvblF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdmFyIHF1ZXVlQ2FsbGJhY2sgPSBvcHRpb25zLnR5cGUgPT09IFwidGlja1wiID8gcXVldWVNaWNyb3Rhc2tTaGltIDogb3B0aW9ucy50eXBlID09PSBcInJhZlwiID8gckFGIDogb3B0aW9ucy50eXBlID09PSBcImNhbGxiYWNrXCIgPyBvcHRpb25zLnF1ZXVlTm90aWZpY2F0aW9uIDogY3JlYXRlUXVldWVXaXRoVGltZXIob3B0aW9ucy50aW1lb3V0KTtcclxuICAgICAgICB2YXIgbm90aWZ5TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb25RdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzaG91bGROb3RpZnlBdEVuZE9mVGljayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGwpIHsgcmV0dXJuIGwoKTsgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdG9yZSwge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChsaXN0ZW5lcjIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVkTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBub3RpZnlpbmcgJiYgbGlzdGVuZXIyKCk7IH07XHJcbiAgICAgICAgICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUod3JhcHBlZExpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyMik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlpbmcgPSAhKChfYSA9IGFjdGlvbiA9PSBudWxsID8gdm9pZCAwIDogYWN0aW9uLm1ldGEpID09IG51bGwgPyB2b2lkIDAgOiBfYVtTSE9VTERfQVVUT0JBVENIXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSAhbm90aWZ5aW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnlBdEVuZE9mVGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vdGlmaWNhdGlvblF1ZXVlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uUXVldWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlQ2FsbGJhY2sobm90aWZ5TGlzdGVuZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeWluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07IH07XHJcbn07XHJcbi8vIHNyYy9pbmRleC50c1xyXG5lbmFibGVFUzUoKTtcclxuZXhwb3J0IHsgRW5oYW5jZXJBcnJheSwgTWlkZGxld2FyZUFycmF5LCBTSE9VTERfQVVUT0JBVENILCBUYXNrQWJvcnRFcnJvciwgYWRkTGlzdGVuZXIsIGF1dG9CYXRjaEVuaGFuY2VyLCBjbGVhckFsbExpc3RlbmVycywgY29uZmlndXJlU3RvcmUsIGNyZWF0ZUFjdGlvbiwgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IsIGNyZWF0ZUVudGl0eUFkYXB0ZXIsIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSwgY3JlYXRlTGlzdGVuZXJNaWRkbGV3YXJlLCBkZWZhdWx0MiBhcyBjcmVhdGVOZXh0U3RhdGUsIGNyZWF0ZVJlZHVjZXIsIGNyZWF0ZVNlbGVjdG9yMiBhcyBjcmVhdGVTZWxlY3RvciwgY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLCBjcmVhdGVTbGljZSwgY3VycmVudDIgYXMgY3VycmVudCwgZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlLCBmcmVlemUsIGdldERlZmF1bHRNaWRkbGV3YXJlLCBnZXRUeXBlLCBpc0FjdGlvbiwgaXNBbGxPZiwgaXNBbnlPZiwgaXNBc3luY1RodW5rQWN0aW9uLCBpc0RyYWZ0NCBhcyBpc0RyYWZ0LCBpc0ZTQSBhcyBpc0ZsdXhTdGFuZGFyZEFjdGlvbiwgaXNGdWxmaWxsZWQsIGlzSW1tdXRhYmxlRGVmYXVsdCwgaXNQZW5kaW5nLCBpc1BsYWluLCBpc1BsYWluT2JqZWN0LCBpc1JlamVjdGVkLCBpc1JlamVjdGVkV2l0aFZhbHVlLCBtaW5pU2VyaWFsaXplRXJyb3IsIG5hbm9pZCwgb3JpZ2luYWwsIHByZXBhcmVBdXRvQmF0Y2hlZCwgcmVtb3ZlTGlzdGVuZXIsIHVud3JhcFJlc3VsdCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWR1eC10b29sa2l0LmVzbS5qcy5tYXAiLCIvKiogQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSBwb3RlbnRpYWwgXCJleHRyYSBhcmd1bWVudFwiIHZhbHVlIHRvIGJlIGluamVjdGVkIGxhdGVyLFxyXG4gKiBhbmQgcmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgdGh1bmsgbWlkZGxld2FyZSB0aGF0IHVzZXMgdGhhdCB2YWx1ZVxyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIC8vIFN0YW5kYXJkIFJlZHV4IG1pZGRsZXdhcmUgZGVmaW5pdGlvbiBwYXR0ZXJuOlxuICAvLyBTZWU6IGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI3dyaXRpbmctY3VzdG9tLW1pZGRsZXdhcmVcbiAgdmFyIG1pZGRsZXdhcmUgPSBmdW5jdGlvbiBtaWRkbGV3YXJlKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAvLyBUaGUgdGh1bmsgbWlkZGxld2FyZSBsb29rcyBmb3IgYW55IGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIHRvIGBzdG9yZS5kaXNwYXRjaGAuXG4gICAgICAgIC8vIElmIHRoaXMgXCJhY3Rpb25cIiBpcyByZWFsbHkgYSBmdW5jdGlvbiwgY2FsbCBpdCBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gSW5qZWN0IHRoZSBzdG9yZSdzIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgbWV0aG9kcywgYXMgd2VsbCBhcyBhbnkgXCJleHRyYSBhcmdcIlxuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfSAvLyBPdGhlcndpc2UsIHBhc3MgdGhlIGFjdGlvbiBkb3duIHRoZSBtaWRkbGV3YXJlIGNoYWluIGFzIHVzdWFsXG5cblxuICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBtaWRkbGV3YXJlO1xufVxuXG52YXIgdGh1bmsgPSBjcmVhdGVUaHVua01pZGRsZXdhcmUoKTsgLy8gQXR0YWNoIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIHNvIHVzZXJzIGNhbiBjcmVhdGUgYSBjdXN0b21pemVkIHZlcnNpb25cbi8vIHdpdGggd2hhdGV2ZXIgXCJleHRyYSBhcmdcIiB0aGV5IHdhbnQgdG8gaW5qZWN0IGludG8gdGhlaXIgdGh1bmtzXG5cbnRodW5rLndpdGhFeHRyYUFyZ3VtZW50ID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlO1xuZXhwb3J0IGRlZmF1bHQgdGh1bms7IiwiaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMic7XG5cbi8qKlxuICogQWRhcHRlZCBmcm9tIFJlYWN0OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9tYXN0ZXIvcGFja2FnZXMvc2hhcmVkL2Zvcm1hdFByb2RFcnJvck1lc3NhZ2UuanNcbiAqXG4gKiBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCB0aHJvdyBlcnJvciBjYWxscy4gVGhlc2UgbWVzc2FnZXMgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGVycm9yIGNvZGVzXG4gKiBkdXJpbmcgYnVpbGQuXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICovXG5mdW5jdGlvbiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKGNvZGUpIHtcbiAgcmV0dXJuIFwiTWluaWZpZWQgUmVkdXggZXJyb3IgI1wiICsgY29kZSArIFwiOyB2aXNpdCBodHRwczovL3JlZHV4LmpzLm9yZy9FcnJvcnM/Y29kZT1cIiArIGNvZGUgKyBcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciBcIiArICd1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzLiAnO1xufVxuXG4vLyBJbmxpbmVkIHZlcnNpb24gb2YgdGhlIGBzeW1ib2wtb2JzZXJ2YWJsZWAgcG9seWZpbGxcbnZhciAkJG9ic2VydmFibGUgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSB8fCAnQEBvYnNlcnZhYmxlJztcbn0pKCk7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG59O1xuXG52YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUkVQTEFDRTogXCJAQHJlZHV4L1JFUExBQ0VcIiArIHJhbmRvbVN0cmluZygpLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogZnVuY3Rpb24gUFJPQkVfVU5LTk9XTl9BQ1RJT04oKSB7XG4gICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vLyBJbmxpbmVkIC8gc2hvcnRlbmVkIHZlcnNpb24gb2YgYGtpbmRPZmAgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9raW5kLW9mXG5mdW5jdGlvbiBtaW5pS2luZE9mKHZhbCkge1xuICBpZiAodmFsID09PSB2b2lkIDApIHJldHVybiAndW5kZWZpbmVkJztcbiAgaWYgKHZhbCA9PT0gbnVsbCkgcmV0dXJuICdudWxsJztcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdzeW1ib2wnOlxuICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICBpZiAoaXNFcnJvcih2YWwpKSByZXR1cm4gJ2Vycm9yJztcbiAgdmFyIGNvbnN0cnVjdG9yTmFtZSA9IGN0b3JOYW1lKHZhbCk7XG5cbiAgc3dpdGNoIChjb25zdHJ1Y3Rvck5hbWUpIHtcbiAgICBjYXNlICdTeW1ib2wnOlxuICAgIGNhc2UgJ1Byb21pc2UnOlxuICAgIGNhc2UgJ1dlYWtNYXAnOlxuICAgIGNhc2UgJ1dlYWtTZXQnOlxuICAgIGNhc2UgJ01hcCc6XG4gICAgY2FzZSAnU2V0JzpcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvck5hbWU7XG4gIH0gLy8gb3RoZXJcblxuXG4gIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGN0b3JOYW1lKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbC5jb25zdHJ1Y3RvciA9PT0gJ2Z1bmN0aW9uJyA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiB2YWwubWVzc2FnZSA9PT0gJ3N0cmluZycgJiYgdmFsLmNvbnN0cnVjdG9yICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3Iuc3RhY2tUcmFjZUxpbWl0ID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRvRGF0ZVN0cmluZyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLmdldERhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIHZhciB0eXBlT2ZWYWwgPSB0eXBlb2YgdmFsO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdHlwZU9mVmFsID0gbWluaUtpbmRPZih2YWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVPZlZhbDtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIHRoZSBgY29uZmlndXJlU3RvcmVgIG1ldGhvZFxuICogb2YgdGhlIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWAuXG4gKlxuICogUmVkdXggVG9vbGtpdCBpcyBvdXIgcmVjb21tZW5kZWQgYXBwcm9hY2ggZm9yIHdyaXRpbmcgUmVkdXggbG9naWMgdG9kYXksXG4gKiBpbmNsdWRpbmcgc3RvcmUgc2V0dXAsIHJlZHVjZXJzLCBkYXRhIGZldGNoaW5nLCBhbmQgbW9yZS5cbiAqXG4gKiAqKkZvciBtb3JlIGRldGFpbHMsIHBsZWFzZSByZWFkIHRoaXMgUmVkdXggZG9jcyBwYWdlOioqXG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBgY29uZmlndXJlU3RvcmVgIGZyb20gUmVkdXggVG9vbGtpdCBpcyBhbiBpbXByb3ZlZCB2ZXJzaW9uIG9mIGBjcmVhdGVTdG9yZWAgdGhhdFxuICogc2ltcGxpZmllcyBzZXR1cCBhbmQgaGVscHMgYXZvaWQgY29tbW9uIGJ1Z3MuXG4gKlxuICogWW91IHNob3VsZCBub3QgYmUgdXNpbmcgdGhlIGByZWR1eGAgY29yZSBwYWNrYWdlIGJ5IGl0c2VsZiB0b2RheSwgZXhjZXB0IGZvciBsZWFybmluZyBwdXJwb3Nlcy5cbiAqIFRoZSBgY3JlYXRlU3RvcmVgIG1ldGhvZCBmcm9tIHRoZSBjb3JlIGByZWR1eGAgcGFja2FnZSB3aWxsIG5vdCBiZSByZW1vdmVkLCBidXQgd2UgZW5jb3VyYWdlXG4gKiBhbGwgdXNlcnMgdG8gbWlncmF0ZSB0byB1c2luZyBSZWR1eCBUb29sa2l0IGZvciBhbGwgUmVkdXggY29kZS5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byB1c2UgYGNyZWF0ZVN0b3JlYCB3aXRob3V0IHRoaXMgdmlzdWFsIGRlcHJlY2F0aW9uIHdhcm5pbmcsIHVzZVxuICogdGhlIGBsZWdhY3lfY3JlYXRlU3RvcmVgIGltcG9ydCBpbnN0ZWFkOlxuICpcbiAqIGBpbXBvcnQgeyBsZWdhY3lfY3JlYXRlU3RvcmUgYXMgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J2BcbiAqXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gIHZhciBfcmVmMjtcblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDApIDogJ0l0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvICcgKyAnY3JlYXRlU3RvcmUoKS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkLCBjb21wb3NlIHRoZW0gJyArICd0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbi4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI2NyZWF0aW5nLWEtc3RvcmUtd2l0aC1lbmhhbmNlcnMgZm9yIGFuIGV4YW1wbGUuJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxKSA6IFwiRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YoZW5oYW5jZXIpICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMikgOiBcIkV4cGVjdGVkIHRoZSByb290IHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihyZWR1Y2VyKSArIFwiJ1wiKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAvKipcbiAgICogVGhpcyBtYWtlcyBhIHNoYWxsb3cgY29weSBvZiBjdXJyZW50TGlzdGVuZXJzIHNvIHdlIGNhbiB1c2VcbiAgICogbmV4dExpc3RlbmVycyBhcyBhIHRlbXBvcmFyeSBsaXN0IHdoaWxlIGRpc3BhdGNoaW5nLlxuICAgKlxuICAgKiBUaGlzIHByZXZlbnRzIGFueSBidWdzIGFyb3VuZCBjb25zdW1lcnMgY2FsbGluZ1xuICAgKiBzdWJzY3JpYmUvdW5zdWJzY3JpYmUgaW4gdGhlIG1pZGRsZSBvZiBhIGRpc3BhdGNoLlxuICAgKi9cblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG5cblxuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMykgOiAnWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuICcgKyAnUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg0KSA6IFwiRXhwZWN0ZWQgdGhlIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobGlzdGVuZXIpICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg1KSA6ICdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDYpIDogJ1lvdSBtYXkgbm90IHVuc3Vic2NyaWJlIGZyb20gYSBzdG9yZSBsaXN0ZW5lciB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzID0gbnVsbDtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDcpIDogXCJBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gSW5zdGVhZCwgdGhlIGFjdHVhbCB0eXBlIHdhczogJ1wiICsga2luZE9mKGFjdGlvbikgKyBcIicuIFlvdSBtYXkgbmVlZCB0byBhZGQgbWlkZGxld2FyZSB0byB5b3VyIHN0b3JlIHNldHVwIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBvdGhlciB2YWx1ZXMsIHN1Y2ggYXMgJ3JlZHV4LXRodW5rJyB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgZnVuY3Rpb25zLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjbWlkZGxld2FyZSBhbmQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTYtYXN5bmMtbG9naWMjdXNpbmctdGhlLXJlZHV4LXRodW5rLW1pZGRsZXdhcmUgZm9yIGV4YW1wbGVzLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOCkgOiAnQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiBZb3UgbWF5IGhhdmUgbWlzc3BlbGxlZCBhbiBhY3Rpb24gdHlwZSBzdHJpbmcgY29uc3RhbnQuJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDkpIDogJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMCkgOiBcIkV4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKG5leHRSZWR1Y2VyKSk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjsgLy8gVGhpcyBhY3Rpb24gaGFzIGEgc2ltaWxpYXIgZWZmZWN0IHRvIEFjdGlvblR5cGVzLklOSVQuXG4gICAgLy8gQW55IHJlZHVjZXJzIHRoYXQgZXhpc3RlZCBpbiBib3RoIHRoZSBuZXcgYW5kIG9sZCByb290UmVkdWNlclxuICAgIC8vIHdpbGwgcmVjZWl2ZSB0aGUgcHJldmlvdXMgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gICAgLy8gdGhlIG5ldyBzdGF0ZSB0cmVlIHdpdGggYW55IHJlbGV2YW50IGRhdGEgZnJvbSB0aGUgb2xkIG9uZS5cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDExKSA6IFwiRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihvYnNlcnZlcikgKyBcIidcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgX3JlZlskJG9ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSwgX3JlZjtcbiAgfSAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cblxuXG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gIH0pO1xuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqXG4gKiAqKldlIHJlY29tbWVuZCB1c2luZyBgY29uZmlndXJlU3RvcmVgIGZyb20gdGhlXG4gKiBgQHJlZHV4anMvdG9vbGtpdGAgcGFja2FnZSoqLCB3aGljaCByZXBsYWNlcyBgY3JlYXRlU3RvcmVgOlxuICogKipodHRwczovL3JlZHV4LmpzLm9yZy9pbnRyb2R1Y3Rpb24vd2h5LXJ0ay1pcy1yZWR1eC10b2RheSoqXG4gKlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5cbnZhciBsZWdhY3lfY3JlYXRlU3RvcmUgPSBjcmVhdGVTdG9yZTtcblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuSU5JVCA/ICdwcmVsb2FkZWRTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghaXNQbGFpbk9iamVjdChpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiBcIlRoZSBcIiArIGFyZ3VtZW50TmFtZSArIFwiIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXFxcIlwiICsga2luZE9mKGlucHV0U3RhdGUpICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTIpIDogXCJUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiBcIiArIFwiSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IFwiICsgXCJleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IFwiICsgXCJub3QgYmUgdW5kZWZpbmVkLiBJZiB5b3UgZG9uJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCBcIiArIFwieW91IGNhbiB1c2UgbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUFJPQkVfVU5LTk9XTl9BQ1RJT04oKVxuICAgIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTMpIDogXCJUaGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgJ1wiICsgQWN0aW9uVHlwZXMuSU5JVCArIFwiJyBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoXCJObyByZWR1Y2VyIHByb3ZpZGVkIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlID0ge307XG4gIH1cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpO1xuXG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tfaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNbX2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW19rZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNCkgOiBcIldoZW4gY2FsbGVkIHdpdGggYW4gYWN0aW9uIG9mIHR5cGUgXCIgKyAoYWN0aW9uVHlwZSA/IFwiXFxcIlwiICsgU3RyaW5nKGFjdGlvblR5cGUpICsgXCJcXFwiXCIgOiAnKHVua25vd24gdHlwZSknKSArIFwiLCB0aGUgc2xpY2UgcmVkdWNlciBmb3Iga2V5IFxcXCJcIiArIF9rZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiBcIiArIFwiVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLiBcIiArIFwiSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGggIT09IE9iamVjdC5rZXlzKHN0YXRlKS5sZW5ndGg7XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYW4gYWN0aW9uIGNyZWF0b3IgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGRpc3BhdGNoIHdyYXBwZWQgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTYpIDogXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGJ1dCBpbnN0ZWFkIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YoYWN0aW9uQ3JlYXRvcnMpICsgXCInLiBcIiArIFwiRGlkIHlvdSB3cml0ZSBcXFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiIGluc3RlYWQgb2YgXFxcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiP1wiKTtcbiAgfVxuXG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgICAgcmV0dXJuIGFyZztcbiAgICB9O1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBmdW5jc1swXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEoYi5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICAgIH07XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgICB2YXIgX2Rpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE1KSA6ICdEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiAnICsgJ090aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC4nKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdG9yZSksIHt9LCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB7IEFjdGlvblR5cGVzIGFzIF9fRE9fTk9UX1VTRV9fQWN0aW9uVHlwZXMsIGFwcGx5TWlkZGxld2FyZSwgYmluZEFjdGlvbkNyZWF0b3JzLCBjb21iaW5lUmVkdWNlcnMsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlLCBsZWdhY3lfY3JlYXRlU3RvcmUgfTtcbiIsIi8vIENhY2hlIGltcGxlbWVudGF0aW9uIGJhc2VkIG9uIEVyaWsgUmFzbXVzc2VuJ3MgYGxydS1tZW1vaXplYDpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9lcmlrcmFzL2xydS1tZW1vaXplXG52YXIgTk9UX0ZPVU5EID0gJ05PVF9GT1VORCc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGVxdWFscykge1xuICB2YXIgZW50cnk7XG4gIHJldHVybiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgICBpZiAoZW50cnkgJiYgZXF1YWxzKGVudHJ5LmtleSwga2V5KSkge1xuICAgICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gICAgfSxcbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgICBlbnRyeSA9IHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldEVudHJpZXM6IGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgICByZXR1cm4gZW50cnkgPyBbZW50cnldIDogW107XG4gICAgfSxcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBlbnRyeSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGVxdWFscykge1xuICB2YXIgZW50cmllcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgY2FjaGVJbmRleCA9IGVudHJpZXMuZmluZEluZGV4KGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgcmV0dXJuIGVxdWFscyhrZXksIGVudHJ5LmtleSk7XG4gICAgfSk7IC8vIFdlIGZvdW5kIGEgY2FjaGVkIGVudHJ5XG5cbiAgICBpZiAoY2FjaGVJbmRleCA+IC0xKSB7XG4gICAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2NhY2hlSW5kZXhdOyAvLyBDYWNoZWQgZW50cnkgbm90IGF0IHRvcCBvZiBjYWNoZSwgbW92ZSBpdCB0byB0aGUgdG9wXG5cbiAgICAgIGlmIChjYWNoZUluZGV4ID4gMCkge1xuICAgICAgICBlbnRyaWVzLnNwbGljZShjYWNoZUluZGV4LCAxKTtcbiAgICAgICAgZW50cmllcy51bnNoaWZ0KGVudHJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgIH0gLy8gTm8gZW50cnkgZm91bmQgaW4gY2FjaGUsIHJldHVybiBzZW50aW5lbFxuXG5cbiAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICB9XG5cbiAgZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoZ2V0KGtleSkgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gVE9ETyBJcyB1bnNoaWZ0IHNsb3c/XG4gICAgICBlbnRyaWVzLnVuc2hpZnQoe1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGVudHJpZXMubGVuZ3RoID4gbWF4U2l6ZSkge1xuICAgICAgICBlbnRyaWVzLnBvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICBlbnRyaWVzID0gW107XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogZ2V0LFxuICAgIHB1dDogcHV0LFxuICAgIGdldEVudHJpZXM6IGdldEVudHJpZXMsXG4gICAgY2xlYXI6IGNsZWFyXG4gIH07XG59XG5cbmV4cG9ydCB2YXIgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwocHJldiwgbmV4dCkge1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuXG5cbiAgICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuLy8gZGVmYXVsdE1lbW9pemUgbm93IHN1cHBvcnRzIGEgY29uZmlndXJhYmxlIGNhY2hlIHNpemUgd2l0aCBMUlUgYmVoYXZpb3IsXG4vLyBhbmQgb3B0aW9uYWwgY29tcGFyaXNvbiBvZiB0aGUgcmVzdWx0IHZhbHVlIHdpdGggZXhpc3RpbmcgdmFsdWVzXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYywgZXF1YWxpdHlDaGVja09yT3B0aW9ucykge1xuICB2YXIgcHJvdmlkZWRPcHRpb25zID0gdHlwZW9mIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgPT09ICdvYmplY3QnID8gZXF1YWxpdHlDaGVja09yT3B0aW9ucyA6IHtcbiAgICBlcXVhbGl0eUNoZWNrOiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zXG4gIH07XG4gIHZhciBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPSBwcm92aWRlZE9wdGlvbnMuZXF1YWxpdHlDaGVjayxcbiAgICAgIGVxdWFsaXR5Q2hlY2sgPSBfcHJvdmlkZWRPcHRpb25zJGVxdWEgPT09IHZvaWQgMCA/IGRlZmF1bHRFcXVhbGl0eUNoZWNrIDogX3Byb3ZpZGVkT3B0aW9ucyRlcXVhLFxuICAgICAgX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID0gcHJvdmlkZWRPcHRpb25zLm1heFNpemUsXG4gICAgICBtYXhTaXplID0gX3Byb3ZpZGVkT3B0aW9ucyRtYXhTID09PSB2b2lkIDAgPyAxIDogX3Byb3ZpZGVkT3B0aW9ucyRtYXhTLFxuICAgICAgcmVzdWx0RXF1YWxpdHlDaGVjayA9IHByb3ZpZGVkT3B0aW9ucy5yZXN1bHRFcXVhbGl0eUNoZWNrO1xuICB2YXIgY29tcGFyYXRvciA9IGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcihlcXVhbGl0eUNoZWNrKTtcbiAgdmFyIGNhY2hlID0gbWF4U2l6ZSA9PT0gMSA/IGNyZWF0ZVNpbmdsZXRvbkNhY2hlKGNvbXBhcmF0b3IpIDogY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgY29tcGFyYXRvcik7IC8vIHdlIHJlZmVyZW5jZSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgdGhlbSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuXG4gIGZ1bmN0aW9uIG1lbW9pemVkKCkge1xuICAgIHZhciB2YWx1ZSA9IGNhY2hlLmdldChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHZhbHVlID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHZhbHVlID0gZnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgICBpZiAocmVzdWx0RXF1YWxpdHlDaGVjaykge1xuICAgICAgICB2YXIgZW50cmllcyA9IGNhY2hlLmdldEVudHJpZXMoKTtcbiAgICAgICAgdmFyIG1hdGNoaW5nRW50cnkgPSBlbnRyaWVzLmZpbmQoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdEVxdWFsaXR5Q2hlY2soZW50cnkudmFsdWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nRW50cnkpIHtcbiAgICAgICAgICB2YWx1ZSA9IG1hdGNoaW5nRW50cnkudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FjaGUucHV0KGFyZ3VtZW50cywgdmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1lbW9pemVkLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhY2hlLmNsZWFyKCk7XG4gIH07XG5cbiAgcmV0dXJuIG1lbW9pemVkO1xufSIsImltcG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9IGZyb20gJy4vZGVmYXVsdE1lbW9pemUnO1xuZXhwb3J0IHsgZGVmYXVsdE1lbW9pemUsIGRlZmF1bHRFcXVhbGl0eUNoZWNrIH07XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJyA/IFwiZnVuY3Rpb24gXCIgKyAoZGVwLm5hbWUgfHwgJ3VubmFtZWQnKSArIFwiKClcIiA6IHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCBidXQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogW1wiICsgZGVwZW5kZW5jeVR5cGVzICsgXCJdXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9uc0Zyb21BcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc0Zyb21BcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjcmVhdGVTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGZ1bmNzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG5cbiAgICB2YXIgX2xhc3RSZXN1bHQ7IC8vIER1ZSB0byB0aGUgaW50cmljYWNpZXMgb2YgcmVzdCBwYXJhbXMsIHdlIGNhbid0IGRvIGFuIG9wdGlvbmFsIGFyZyBhZnRlciBgLi4uZnVuY3NgLlxuICAgIC8vIFNvLCBzdGFydCBieSBkZWNsYXJpbmcgdGhlIGRlZmF1bHQgdmFsdWUgaGVyZS5cbiAgICAvLyAoQW5kIHllcywgdGhlIHdvcmRzICdtZW1vaXplJyBhbmQgJ29wdGlvbnMnIGFwcGVhciB0b28gbWFueSB0aW1lcyBpbiB0aGlzIG5leHQgc2VxdWVuY2UuKVxuXG5cbiAgICB2YXIgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0ge1xuICAgICAgbWVtb2l6ZU9wdGlvbnM6IHVuZGVmaW5lZFxuICAgIH07IC8vIE5vcm1hbGx5LCB0aGUgcmVzdWx0IGZ1bmMgb3IgXCJvdXRwdXQgc2VsZWN0b3JcIiBpcyB0aGUgbGFzdCBhcmdcblxuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7IC8vIElmIHRoZSByZXN1bHQgZnVuYyBpcyBhY3R1YWxseSBhbiBfb2JqZWN0XywgYXNzdW1lIGl0J3Mgb3VyIG9wdGlvbnMgb2JqZWN0XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgPT09ICdvYmplY3QnKSB7XG4gICAgICBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSByZXN1bHRGdW5jOyAvLyBhbmQgcG9wIHRoZSByZWFsIHJlc3VsdCBmdW5jIG9mZlxuXG4gICAgICByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFuIG91dHB1dCBmdW5jdGlvbiBhZnRlciB0aGUgaW5wdXRzLCBidXQgcmVjZWl2ZWQ6IFtcIiArIHR5cGVvZiByZXN1bHRGdW5jICsgXCJdXCIpO1xuICAgIH0gLy8gRGV0ZXJtaW5lIHdoaWNoIHNldCBvZiBvcHRpb25zIHdlJ3JlIHVzaW5nLiBQcmVmZXIgb3B0aW9ucyBwYXNzZWQgZGlyZWN0bHksXG4gICAgLy8gYnV0IGZhbGwgYmFjayB0byBvcHRpb25zIGdpdmVuIHRvIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvci5cblxuXG4gICAgdmFyIF9kaXJlY3RseVBhc3NlZE9wdGlvbiA9IGRpcmVjdGx5UGFzc2VkT3B0aW9ucyxcbiAgICAgICAgX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbi5tZW1vaXplT3B0aW9ucyxcbiAgICAgICAgbWVtb2l6ZU9wdGlvbnMgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID09PSB2b2lkIDAgPyBtZW1vaXplT3B0aW9uc0Zyb21BcmdzIDogX2RpcmVjdGx5UGFzc2VkT3B0aW9uMjsgLy8gU2ltcGxpZnlpbmcgYXNzdW1wdGlvbjogaXQncyB1bmxpa2VseSB0aGF0IHRoZSBmaXJzdCBvcHRpb25zIGFyZyBvZiB0aGUgcHJvdmlkZWQgbWVtb2l6ZXJcbiAgICAvLyBpcyBhbiBhcnJheS4gSW4gbW9zdCBsaWJzIEkndmUgbG9va2VkIGF0LCBpdCdzIGFuIGVxdWFsaXR5IGZ1bmN0aW9uIG9yIG9wdGlvbnMgb2JqZWN0LlxuICAgIC8vIEJhc2VkIG9uIHRoYXQsIGlmIGBtZW1vaXplT3B0aW9uc2AgX2lzXyBhbiBhcnJheSwgd2UgYXNzdW1lIGl0J3MgYSBmdWxsXG4gICAgLy8gdXNlci1wcm92aWRlZCBhcnJheSBvZiBvcHRpb25zLiBPdGhlcndpc2UsIGl0IG11c3QgYmUganVzdCB0aGUgX2ZpcnN0XyBhcmcsIGFuZCBzb1xuICAgIC8vIHdlIHdyYXAgaXQgaW4gYW4gYXJyYXkgc28gd2UgY2FuIGFwcGx5IGl0LlxuXG4gICAgdmFyIGZpbmFsTWVtb2l6ZU9wdGlvbnMgPSBBcnJheS5pc0FycmF5KG1lbW9pemVPcHRpb25zKSA/IG1lbW9pemVPcHRpb25zIDogW21lbW9pemVPcHRpb25zXTtcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKTtcbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh2b2lkIDAsIFtmdW5jdGlvbiByZWNvbXB1dGF0aW9uV3JhcHBlcigpIHtcbiAgICAgIF9yZWNvbXB1dGF0aW9ucysrOyAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG4gICAgICByZXR1cm4gcmVzdWx0RnVuYy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1dLmNvbmNhdChmaW5hbE1lbW9pemVPcHRpb25zKSk7IC8vIElmIGEgc2VsZWN0b3IgaXMgY2FsbGVkIHdpdGggdGhlIGV4YWN0IHNhbWUgYXJndW1lbnRzIHdlIGRvbid0IG5lZWQgdG8gdHJhdmVyc2Ugb3VyIGRlcGVuZGVuY2llcyBhZ2Fpbi5cblxuICAgIHZhciBzZWxlY3RvciA9IG1lbW9pemUoZnVuY3Rpb24gZGVwZW5kZW5jaWVzQ2hlY2tlcigpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXTtcbiAgICAgIHZhciBsZW5ndGggPSBkZXBlbmRlbmNpZXMubGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBhbmQgbXV0YXRlIGEgbG9jYWwgbGlzdCBvZiBwYXJhbXMgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH0gLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuXG4gICAgICBfbGFzdFJlc3VsdCA9IG1lbW9pemVkUmVzdWx0RnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24oc2VsZWN0b3IsIHtcbiAgICAgIHJlc3VsdEZ1bmM6IHJlc3VsdEZ1bmMsXG4gICAgICBtZW1vaXplZFJlc3VsdEZ1bmM6IG1lbW9pemVkUmVzdWx0RnVuYyxcbiAgICAgIGRlcGVuZGVuY2llczogZGVwZW5kZW5jaWVzLFxuICAgICAgbGFzdFJlc3VsdDogZnVuY3Rpb24gbGFzdFJlc3VsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9sYXN0UmVzdWx0O1xuICAgICAgfSxcbiAgICAgIHJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucztcbiAgICAgIH0sXG4gICAgICByZXNldFJlY29tcHV0YXRpb25zOiBmdW5jdGlvbiByZXNldFJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zID0gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07IC8vIEB0cy1pZ25vcmVcblxuXG4gIHJldHVybiBjcmVhdGVTZWxlY3Rvcjtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuLy8gTWFudWFsIGRlZmluaXRpb24gb2Ygc3RhdGUgYW5kIG91dHB1dCBhcmd1bWVudHNcbmV4cG9ydCB2YXIgY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHNlbGVjdG9ycywgc2VsZWN0b3JDcmVhdG9yKSB7XG4gIGlmIChzZWxlY3RvckNyZWF0b3IgPT09IHZvaWQgMCkge1xuICAgIHNlbGVjdG9yQ3JlYXRvciA9IGNyZWF0ZVNlbGVjdG9yO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzZWxlY3RvcnMgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgZXhwZWN0cyBmaXJzdCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QgJyArIChcIndoZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhIFwiICsgdHlwZW9mIHNlbGVjdG9ycykpO1xuICB9XG5cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBzZWxlY3RvckNyZWF0b3IoIC8vIEB0cy1pZ25vcmVcbiAgb2JqZWN0S2V5cy5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNba2V5XTtcbiAgfSksIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgdmFsdWVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHRTZWxlY3Rvcjtcbn07IiwiZXhwb3J0IGNvbnN0IElDT05fSU5GTyA9IHtcbiAgICAvLyBJTlRFUk5FVDoge1xuICAgIC8vICAgICB0eXBlOiBcIklOVEVSTkVUXCIsXG4gICAgLy8gICAgIGV4dGVuc3Rpb246IFwiXCIsXG4gICAgLy8gICAgIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWludGVybmV0LnBuZ1wiLFxuICAgIC8vICAgICBleHBsYW5hdGlvbjogXCLsnbjthLDrhLcg7JWE7J207L2YXCIsXG4gICAgLy8gfSxcbiAgICAvLyBGT0xERVI6IHtcbiAgICAvLyAgICAgdHlwZTogXCJGT0xERVJcIixcbiAgICAvLyAgICAgZXh0ZW5zdGlvbjogXCJcIixcbiAgICAvLyAgICAgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZm9sZGVyLnBuZ1wiLFxuICAgIC8vICAgICBleHBsYW5hdGlvbjogXCLtj7TrjZQg7JWE7J207L2YXCIsXG4gICAgLy8gfSxcbiAgICAvLyBUWFQ6IHtcbiAgICAvLyAgICAgdHlwZTogXCJUWFRcIixcbiAgICAvLyAgICAgZXh0ZW5zdGlvbjogXCJ0eHRcIixcbiAgICAvLyAgICAgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24tZmlsZS1kb2N1bWVudC5wbmdcIixcbiAgICAvLyAgICAgZXhwbGFuYXRpb246IFwi7YWN7Iqk7Yq4IO2MjOydvCDslYTsnbTsvZhcIixcbiAgICAvLyB9LFxuICAgIENBTENVTEFUT1I6IHtcbiAgICAgICAgdHlwZTogXCJDQUxDVUxBVE9SXCIsXG4gICAgICAgIGV4dGVuc3Rpb246IFwiXCIsXG4gICAgICAgIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZpbGUtZG9jdW1lbnQucG5nXCIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBcIuqzhOyCsOq4sCDslYTsnbTsvZhcIixcbiAgICB9LFxufVxuXG4vKlxuKiDquLDrs7gg7JWE7J207L2YIOygleuztFxuKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0lDT04gPSBbXG4gICAgLy8ge1xuICAgIC8vICAgICBpZHg6IDAsXG4gICAgLy8gICAgIG5hbWU6IFwi7J247YSw64S3IOydteyKpO2UjOuhnOufrFwiLFxuICAgIC8vICAgICBleHRlbnN0aW9uOiBJQ09OX0lORk8uSU5URVJORVQuZXh0ZW5zdGlvbixcbiAgICAvLyAgICAgdHlwZTogSUNPTl9JTkZPLklOVEVSTkVULnR5cGUsXG4gICAgLy8gICAgIGltZ1NyYzogSUNPTl9JTkZPLklOVEVSTkVULmltZ1NyYyxcbiAgICAvLyAgICAgZXhwbGFuYXRpb246IElDT05fSU5GTy5JTlRFUk5FVC5leHBsYW5hdGlvbixcbiAgICAvLyAgICAgc3R5bGU6IHsgZ3JpZFJvd1N0YXJ0OiAxLCBncmlkQ29sdW1uU3RhcnQ6IDEgfSxcbiAgICAvLyB9LFxuICAgIC8vIHsgXG4gICAgLy8gICAgIGlkeDogMSxcbiAgICAvLyAgICAgbmFtZTogXCLrgrQg66y47IScXCIsXG4gICAgLy8gICAgIGV4dGVuc2lvbjogSUNPTl9JTkZPLkZPTERFUi5leHRlbnN0aW9uLFxuICAgIC8vICAgICB0eXBlOiBJQ09OX0lORk8uRk9MREVSLnR5cGUsXG4gICAgLy8gICAgIGltZ1NyYzogSUNPTl9JTkZPLkZPTERFUi5pbWdTcmMsXG4gICAgLy8gICAgIGV4cGxhbmF0aW9uOiBJQ09OX0lORk8uRk9MREVSLmV4cGxhbmF0aW9uLFxuICAgIC8vICAgICBzdHlsZTogeyBncmlkUm93U3RhcnQ6IDIsIGdyaWRDb2x1bW5TdGFydDogMSB9LFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgICBpZHg6IDIsXG4gICAgLy8gICAgIG5hbWU6IFwi7YyM7J28LnR4dFwiLFxuICAgIC8vICAgICBleHRlbnNpb246IElDT05fSU5GTy5UWFQuZXh0ZW5zdGlvbixcbiAgICAvLyAgICAgdHlwZTogSUNPTl9JTkZPLlRYVC50eXBlLFxuICAgIC8vICAgICBpbWdTcmM6IElDT05fSU5GTy5UWFQuaW1nU3JjLFxuICAgIC8vICAgICBleHBsYW5hdGlvbjogSUNPTl9JTkZPLlRYVC5leHBsYW5hdGlvbixcbiAgICAvLyAgICAgc3R5bGU6IHsgZ3JpZFJvd1N0YXJ0OiAzLCBncmlkQ29sdW1uU3RhcnQ6IDEgfSxcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgICAgaWR4OiAwLFxuICAgICAgICBuYW1lOiBcIuqzhOyCsOq4sFwiLFxuICAgICAgICBleHRlbnNpb246IElDT05fSU5GTy5DQUxDVUxBVE9SLmV4dGVuc3Rpb24sXG4gICAgICAgIHR5cGU6IElDT05fSU5GTy5DQUxDVUxBVE9SLnR5cGUsXG4gICAgICAgIGltZ1NyYzogSUNPTl9JTkZPLkNBTENVTEFUT1IuaW1nU3JjLFxuICAgICAgICBleHBsYW5hdGlvbjogSUNPTl9JTkZPLkNBTENVTEFUT1IuZXhwbGFuYXRpb24sXG4gICAgICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMSwgZ3JpZENvbHVtblN0YXJ0OiAxLCBiYWNrZ3JvdW5kUG9zaXRpb246IFwiLTQ4cHggLTQ4cHhcIiB9LFxuICAgIH0sXG5dXG4iLCJpbXBvcnQgSWNvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vSWNvbnNcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9uYXYvTmF2XCI7XG5cbmZ1bmN0aW9uIENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgJHtJY29ucygpfVxuICAgICAgICAgICAgJHtOYXYoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgYClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlRXZlbnRzLCB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5cbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vLi4vcmVkdWNlci9zdG9yZVwiO1xuaW1wb3J0IHsgYWRkTW9kYWwgfSBmcm9tIFwiLi4vLi4vcmVkdWNlci9tb2RhbHMvYWN0aW9uXCI7XG5cblxuaW1wb3J0IHsgSUljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zXCI7XG5pbXBvcnQgeyBNT0RBTCB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9yZWR1Y2VyL2luZGV4XCI7XG5pbXBvcnQgeyBERUZBVUxUX0lDT04gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL2NvbXBvbmVudHMvY29tbW9uL2ljb25cIjtcblxuaW1wb3J0IHsgaWNvbkNsaWNrQ2FsbGJhY2ssIGNvbnRhaW5lckNsaWNrQ2FsbGJhY2ssIGljb25EcmFnQ2FsbGJhY2ssIGljb25EYkNsaWNrQ2FsbGJhY2sgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tcG9uZW50cy9jb21tb24vaWNvbnMtZXZlbnQtaGVscGVyXCI7XG5cbi8qXG4qIOyVhOydtOy9mCDsu7Ttj6zrhIztirhcbiovXG5mdW5jdGlvbiBJY29ucyAoKSB7XG4gICAgY29uc3QgeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSA9IHN0b3JlO1xuICAgIGNvbnN0IHsgbW9kYWxzOiBtb2RhbHNTdGF0ZSB9ID0gZ2V0U3RhdGUoKTtcblxuICAgIGNvbnN0IFtpY29ucywgc2V0SWNvbnNdID0gdXNlU3RhdGUoXCJJY29uc1wiLCBERUZBVUxUX0lDT04pO1xuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDsnbTrsqTtirhcbiAgICAqL1xuICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgY29uc3QgaWNvbkNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuZGVmYXVsdC1pY29uXCIpO1xuXG4gICAgICAgIHJldHVybiBbQXJyYXkuZnJvbShpY29uTGlzdCksICdtb3VzZWRvd24nLCBpY29uQ2xpY2tDYWxsYmFja107XG4gICAgfVxuXG4gICAgLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuICAgIGNvbnN0IGNvbnRhaW5lckNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIFtjb250YWluZXIsICdtb3VzZWRvd24nLCBjb250YWluZXJDbGlja0NhbGxiYWNrXTtcbiAgICB9XG5cbiAgICAvLyAzLiDslYTsnbTsvZgg65Oc656Y6re4IOydtOuypO2KuCAoLmRlZmF1bHQtaWNvbiBkcmFnc3RhcnQgLT4gZG9jdW1lbnQgZHJhZ292ZXIgJiBkcm9wKVxuICAgIC8vIFRPRE8uIO2MjOydvCDslYTsnbTsvZjsnbQg7Y+0642UIOychOuhnCDsnbTrj5nrkKAg6rK97JqwIO2PtOuNlCDslYjsnLzroZwg7J2064+Z65CY64+E66GdIOyImOyglVxuICAgIC8vIFRPRE8uIOyVhOydtOy9mOuBvOumrCDqsrnsuZjsp4Ag7JWK64+E66GdIOyImOyglVxuICAgIGNvbnN0IGljb25EcmFnRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuZGVmYXVsdC1pY29uXCIpO1xuXG4gICAgICAgIHJldHVybiBbQXJyYXkuZnJvbShpY29uTGlzdCksICdkcmFnc3RhcnQnLCBpY29uRHJhZ0NhbGxiYWNrLCBpY29ucywgc2V0SWNvbnNdO1xuICAgIH1cblxuICAgIC8vIDQuIOyVhOydtOy9mCDrjZTruJTtgbTrpq3snbTrsqTtirhcbiAgICBjb25zdCBpY29uRGJDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvLyByZXR1cm4gW0FycmF5LmZyb20oaWNvbkxpc3QpLCAnZGJsY2xpY2snLCBpY29uRGJDbGlja0NhbGxiYWNrLCBpY29uc107XG4gICAgICAgIGNvbnN0IGljb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuZGVmYXVsdC1pY29uXCIpO1xuICAgICAgICBjb25zdCBuZWVkZWRTdGF0ZSA9IHsgbW9kYWxzTGVuZ3RoOiBtb2RhbHNTdGF0ZS5tb2RhbHMubGVuZ3RoLCBpY29ucyB9O1xuICAgICAgICBjb25zdCBzZXROZWVkZWRTdGF0ZSA9ICh2YWx1ZTogTU9EQUwpID0+IGRpc3BhdGNoKGFkZE1vZGFsKHZhbHVlKSk7XG5cbiAgICAgICAgcmV0dXJuIFtBcnJheS5mcm9tKGljb25MaXN0KSwgJ2RibGNsaWNrJywgaWNvbkRiQ2xpY2tDYWxsYmFjaywgbmVlZGVkU3RhdGUsIHNldE5lZWRlZFN0YXRlXTtcbiAgICB9XG5cbiAgICBjb25zdCBpY29uRXZlbnRzID0gW1xuICAgICAgICBpY29uQ2xpY2tFdmVudCxcbiAgICAgICAgY29udGFpbmVyQ2xpY2tFdmVudCxcbiAgICAgICAgaWNvbkRyYWdFdmVudCxcbiAgICAgICAgaWNvbkRiQ2xpY2tFdmVudCxcbiAgICBdO1xuICAgIHVzZUV2ZW50cyhpY29uRXZlbnRzKTtcblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4IFxuICAgICovXG4gICAgY29uc3QgaWNvblRlbXBsYXRlID0gKGljb246IElJY29ucykgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGlkPVwiaWNvbi0ke2ljb24uaWR4fVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkZWZhdWx0LWljb25cIlxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGRhdGEtaWNvbi1uYW1lPVwiJHtpY29uLm5hbWV9XCJcbiAgICAgICAgICAgICAgICBhcmlhLWljb24tZXhwbGFuYXRpb249XCIke2ljb24uZXhwbGFuYXRpb259XCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiJHtpY29uLmV4cGxhbmF0aW9ufVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJncmlkLWNvbHVtbi1zdGFydDogJHtpY29uLnN0eWxlLmdyaWRDb2x1bW5TdGFydH07Z3JpZC1yb3ctc3RhcnQ6ICR7aWNvbi5zdHlsZS5ncmlkUm93U3RhcnR9O1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT1cImJhY2tncm91bmQtcG9zaXRpb246ICR7aWNvbi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb259XCI+PC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUuc3Vic3RyaW5nKDAsIDgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUubGVuZ3RoID4gOCA/ICcuLi4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgYDxvbFxuICAgICAgICAgICAgY2xhc3M9XCJtYWluLXNjcmVlbi1jb250YWluZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIuuwlO2Dle2ZlOuptFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICR7aWNvbnMubWFwKChpY29uOiBJSWNvbnMpID0+IGljb25UZW1wbGF0ZShpY29uKSkuam9pbignJyl9XG4gICAgICAgIDwvb2w+XG4gICAgICAgIDxkaXY+JHttb2RhbHNTdGF0ZS5tb2RhbHMubWFwKCh2OiBNT0RBTCkgPT4gdi5jb250ZW50KS5qb2luKCcnKX08L2Rpdj5gXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29ucztcbiIsImltcG9ydCB7IHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuaW50ZXJmYWNlIElXaW5kb3dNb2RhbCB7XG4gICAgaWNvbjogSUljb25zO1xuICAgIG1vZGFsSWR4OiBudW1iZXI7XG4gICAgbWFpbj86IEVsZW1lbnQ7XG4gICAgZm9vdGVyPzogRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gV2luZG93TW9kYWwgKHtpY29uLCBtb2RhbElkeCwgbWFpbiwgZm9vdGVyfTogSVdpbmRvd01vZGFsKSB7XG4gICAgY29uc3QgbnVtQ3JpdGVyaWEgPSBOdW1iZXIucGFyc2VJbnQoaWNvbi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24uc3BsaXQoXCJweFwiKVswXSk7XG5cbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB0cnVlKTtcbiAgICBjb25zdCBbbW9kYWxJbmRleCwgc2V0TW9kYWxJbmRleF0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIG1vZGFsSWR4KTtcbiAgICBcbiAgICBjb25zdCBbbW9kYWxTaXplLCBzZXRNb2RhbFNpemVdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB7IHdpZHRoOiA2MDAsIGhlaWdodDogNTAwIH0pO1xuICAgIGNvbnN0IFttb2RhbFRyYW5zbGF0ZSwgc2V0TW9kYWxUcmFuc2xhdGVdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB7IFg6IDEwMCwgWTogMTUwIH0pO1xuXG4gICAgY29uc3QgW2lzRnVsbFNpemUsIHNldElzRnVsbFNpemVdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCBmYWxzZSk7XG5cbiAgICAvKlxuICAgICog66qo64usIOydtOuypO2KuFxuICAgICovXG4gICAgLy8gMS4g66qo64usIOywvSDtl6TrjZQg7Jik66W47Kq9KC5tb2RhbC1oZWFkZXItcmlnaHQpICgtLCDjhYEsIHgpIOuyhO2KvOydhCDriIzroIDsnYQg65WMXG4gICAgLy8gMSAtIDEuIOuLq+q4sCh4KSDrsoTtirxcbiAgICAvLyBjb25zdCBjbG9zZUJ0bkNsaWNrRXZlbnQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idG5cIik7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiY2xvc2VCdG5cIiwpO1xuICAgIC8vICAgICBjb25zdCBjbG9zZUJ0bkNsaWNrQ2FsbGJhY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJ5YWhvb1wiKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIHJldHVybiBbY2xvc2VCdG4sICdjbGljaycsIGNsb3NlQnRuQ2xpY2tDYWxsYmFja11cbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCBtb2RhbEV2ZW50cyA9IFtcbiAgICAvLyAgICAgY2xvc2VCdG5DbGlja0V2ZW50LFxuICAgIC8vIF07XG5cbiAgICAvLyB1c2VFdmVudHMobW9kYWxFdmVudHMpO1xuICAgIGNvbnN0IG1pbmltaXplQnRuRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1pbmltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXCIjbWluaW1pemUtYnRuXCIpO1xuICAgICAgICAvLyBjb25zdCBtYXhpbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWF4aW1pemUtYnRuXCIpO1xuICAgICAgICAvLyBjb25zdCByZXN0b3JlRG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdG9yZS1kb3duLWJ0blwiKTtcbiAgICAgICAgLy8gY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWJ0blwiKTtcblxuICAgICAgICBtaW5pbWl6ZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlZWVlZWVcIiwgZSk7XG4gICAgICAgICAgICBhbGVydCgnZWVlZWVlZScpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdXNlRXZlbnRzKFttaW5pbWl6ZUJ0bkV2ZW50XSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUNTU0NoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kYWxJZHhcIiwgbW9kYWxJZHgpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFRyYW5zbGF0ZSA9IHsgWDogbW9kYWxUcmFuc2xhdGUuWCArIDIwICogbW9kYWxJZHgsIFk6IG1vZGFsVHJhbnNsYXRlLlkgKyAyMCAqIG1vZGFsSWR4IH07XG4gICAgICAgICAgICBzZXRNb2RhbFRyYW5zbGF0ZShkZWZhdWx0VHJhbnNsYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVDU1NDaGFuZ2UoKTtcbiAgICB9LCBbXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIC8vXG4gICAgLy8gfSwgW21vZGFsU2l6ZS53aWR0aCwgbW9kYWxTaXplLmhlaWdodCwgbW9kYWxUcmFuc2xhdGUuWCwgbW9kYWxUcmFuc2xhdGUuWV0pXG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgPGRpdlxuICAgICAgICAgICAgICAgIGlkPVwid2luZG93LW1vZGFsLSR7bW9kYWxJbmRleH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwid2luZG93LW1vZGFsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAke21vZGFsU2l6ZS53aWR0aH1weDsgaGVpZ2h0OiAke21vZGFsU2l6ZS5oZWlnaHR9cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7bW9kYWxUcmFuc2xhdGUuWH1weCwgJHttb2RhbFRyYW5zbGF0ZS5ZfXB4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlciBzdG9wLWRyYWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbS1pY29uLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjogJHtudW1Dcml0ZXJpYSAvIDJ9cHggJHtudW1Dcml0ZXJpYSAvIDJ9cHg7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpY29uLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1pbmltaXplLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7ZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0yMCwxNEg0VjEwSDIwXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpc0Z1bGxTaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGJ1dHRvbiBpZD1cInJlc3RvcmUtZG93bi1idG5cIj48c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O2ZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTggMThWMjBINEEyIDIgMCAwIDEgMiAxOFY4SDRWMThNMjIgNlYxNEEyIDIgMCAwIDEgMjAgMTZIOEEyIDIgMCAwIDEgNiAxNFY2QTIgMiAwIDAgMSA4IDRIMjBBMiAyIDAgMCAxIDIyIDZNMjAgNkg4VjE0SDIwWlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzxidXR0b24gaWQ9XCJtYXhpbWl6ZS1idG5cIj48c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O2ZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMywzSDIxVjIxSDNWM001LDVWMTlIMTlWNUg1WlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMjBweDtoZWlnaHQ6IDIwcHg7ZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMy40NiwxMkwxOSwxNy41NFYxOUgxNy41NEwxMiwxMy40Nkw2LjQ2LDE5SDVWMTcuNTRMMTAuNTQsMTJMNSw2LjQ2VjVINi40NkwxMiwxMC41NEwxNy41NCw1SDE5VjYuNDZMMTMuNDYsMTJaXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1vZGFsLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1haW4tYnRuXCI+64Sk7J2067KE66GcIOydtOuPmTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGAke2lzT3BlbiA/IG1vZGFsQ29udGVudCgpIDogJyd9YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93TW9kYWw7IiwiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9yZWR1Y2VyL3N0b3JlXCI7XG5pbXBvcnQgTmF2SXRlbSBmcm9tIFwiLi9OYXZJdGVtXCI7XG5cblxuZnVuY3Rpb24gTmF2KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0gPSBzdG9yZTtcbiAgICBjb25zdCB7IG1vZGFsczogbW9kYWxzU3RhdGUgfSA9IGdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGZvb3RlciBpZD1cInN0c3R1cy1kaXNwbGF5LWJhclwiIGFyaWEtbGFiZWw9XCLtlZjri6gg7IOB7YOcIOywvVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndpbmRvdy1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3dpbmRvdy1sb2dvLnBuZ1wiIGFsdD1cIuyciOuPhOyasCDroZzqs6BcIiAvPlxuICAgICAgICAgICAgICAgIDxwPuyLnOyekTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAke21vZGFsc1N0YXRlLm1vZGFscy5tYXAoKG1vZGFsKSA9PiBOYXZJdGVtKG1vZGFsLmljb24pKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1ci10aW1lXCI+XG4gICAgICAgICAgICAgICAgPHA+7Jik7KCEIDExOjU1PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuZnVuY3Rpb24gTmF2SXRlbSAoaWNvbjogSUljb25zKSB7XG4gICAgY29uc3QgbnVtQ3JpdGVyaWEgPSBOdW1iZXIucGFyc2VJbnQoaWNvbi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24uc3BsaXQoXCJweFwiKVswXSk7XG5cbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtIGZvY3VzZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbS1pY29uLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjogJHtudW1Dcml0ZXJpYSAvIDJ9cHggJHtudW1Dcml0ZXJpYSAvIDJ9cHg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8cD4ke2ljb24ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PmBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07IiwiLypcbiog66as7JWh7Yq4IGhvb2tzIOqwhOuLqO2eiCDqtaztmIRcbiovXG5mdW5jdGlvbiBDdXN0b21SZWFjdCAoKSB7XG4gICAgbGV0IHJvb3Q6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuICAgIGxldCByb290Q29tcG9uZW50OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBjdXJTdGF0ZXNJZHggPSBuZXcgTWFwKCk7XG5cbiAgICBsZXQgbW91bnRFZmZlY3RzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0IGVmZmVjdERlcGVuZGVuY2llczogYW55W10gPSBbXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGN1ckVmZmVjdElkeDogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDAsXG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudEZuc1wiLCBldmVudEZucyk7XG4gICAgICAgICAgICBldmVudEZucy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWFob28xXCIsIGZuKTtcbiAgICAgICAgICAgICAgICAvKiBcbiAgICAgICAgICAgICAgICAqIGVsOiDsnbTrsqTtirgg7ZWo7IiY66W8IOu2meydtOqzoCDsi7bsnYAg7JeY66as66i87Yq47J2YIOuwsOyXtCDtmLnsnYAg64uo7J28IOyXmOumrOuovO2KuFxuICAgICAgICAgICAgICAgICogZXZlbnQ6IOydtOuypO2KuCDtlajsiJjsnZgg7J2067Kk7Yq4IOyiheulmFxuICAgICAgICAgICAgICAgICogY2FsbGJhY2s6IOydtOuypO2KuCDtlajsiJjsnZgg7L2c67CxIO2VqOyImFxuICAgICAgICAgICAgICAgICogbmVlZGVkU3RhdGU6IOydtOuypO2KuCDtlajsiJjrpbwg7Iuk7ZaJ7ZWY66m07IScIO2VhOyalO2VnCBzdGF0ZVxuICAgICAgICAgICAgICAgICogc2V0TmVlZGVkU3RhdGU6IOydtOuypO2KuCDtlajsiJjrpbwg7Iuk7ZaJ7ZWY66m07IScIOuwlOq+uOqzoCDsi7bsnYAgc3RhdGXrpbwg67OA7ZmU7Iuc7YKk64qUIO2VqOyImFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgW2VsLCBldmVudCwgY2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZV0gPSBmbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWFob28yXCIsIGVsLCBldmVudCwgY2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuZm9yRWFjaCgodGFyZ2V0RWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlOiBFdmVudCkgPT4gY2FsbGJhY2soZSwgdGFyZ2V0RWwsIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlOiBFdmVudCkgPT4gY2FsbGJhY2soZSwgZWwsIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRGbnMuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2VsLCBldmVudCwgY2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZV0gPSBmbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZm9yRWFjaCgodGFyZ2V0RWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCAoZTogRXZlbnQpID0+IGNhbGxiYWNrKGUsIHRhcmdldEVsLCBuZWVkZWRTdGF0ZSwgc2V0TmVlZGVkU3RhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgKGU6IEV2ZW50KSA9PiBjYWxsYmFjayhlLCBlbCwgbmVlZGVkU3RhdGUsIHNldE5lZWRlZFN0YXRlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtdKTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICog7YG066Gc7KCAKO2VqOyImCDshKDslrjsi5zsnZgg7Iqk7L2U7ZSE66W8IOq4sOyWte2VmOuKlCDsnpDrsJTsiqTtgazrpr3tirjsnZgg7Yq57KeVKeulvCDtmZzsmqlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsZXIgdXNlU3RhdGXrpbwg7Zi47Lac7ZWcIOy7tO2PrOuEjO2KuCjtlajsiJgp66qFXG4gICAgKiBAcGFyYW0ge2FueX0gaW5pdFN0YXRlIOy0iOq4sO2ZlO2VoCBzdGF0ZVxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoY2FsbGVyOiBzdHJpbmcsIGluaXRTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgIGlmICghc3RhdGVzLmdldChjYWxsZXIpKSB7XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KGNhbGxlciwgW10pO1xuICAgICAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1clN0YXRlSWR4ID0gY3VyU3RhdGVzSWR4LmdldChjYWxsZXIpO1xuXG4gICAgICAgIGlmICghc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSkge1xuICAgICAgICAgICAgc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSA9IGluaXRTdGF0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFN0YXRlJywgY2FsbGVyLCBjdXJTdGF0ZUlkeCwgbmV3U3RhdGUpO1xuXG4gICAgICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJTdGF0ZXNJZHguc2V0KGNhbGxlciwgY3VyU3RhdGVJZHggKyAxKTtcbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgLyogXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyA0LiB1c2VFZmZlY3RcbiAgICAqIHVzZUVmZmVjdDogZGVwZW5kZW5jeSDrsLDsl7TsnZgg6rCS65Ok7JeQIOuzgOqyveydtCDsg53qsrzsnYQg6rK97JqwIGNhbGxiYWNr7J2EIOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUVmZmVjdCA9IChjYWxsYmFjazogRnVuY3Rpb24sIGRlcGVuZGVuY2llczogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICAvLyAxLiBkZXBlbmRlbmN56rCAIOyXhuydhCDqsr3smrAgY2FsbGJhY2sg67CU66GcIOyLpO2WiSAobW91bnQg65CY7JeI7J2EIOuVjCDsi6TtlokpXG4gICAgICAgIC8vIGV4LiB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbW91bnRFZmZlY3RzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyLiBkZXBlbmRlbmN56rCAIOyeiOydhCDqsr3smrAgZGVwZW5kZW5jeSDrs4Dqsr0g7Iuc7JeQ66eMIGNhbGxiYWNrIOyLpO2WiVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbYSwgYiwgLi4uLCB6XSlcbiAgICAgICAgY29uc3QgeyBjdXJFZmZlY3RJZHggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGVmZmVjdERlcGVuZGVuY2llcy5sZW5ndGggPT09IGN1ckVmZmVjdElkeCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzLnB1c2goZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImVmZmVjdERlcGVuZGVuY2llc1wiLCBlZmZlY3REZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XTtcblxuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lOiDtjJDrs4Qg7ZWo7IiYIOyggeyWtOuPhCDtlZjrgpjrnbzrj4Qg7Ya16rO87ZWY64qU7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8gT2JqZWN0LmlzOiDrkZAg6rCc7J2YIO2MjOudvOuvuO2EsOqwgCDrj5nsnbztlZzsp4Ag7LK07YGsXG4gICAgICAgICAgICAvLyDspoksIOq4sOyhtCBkZXBlbmRlbmN57JmAIOyDiOuhnCDrsJvsnYAgZGVwZW5kZW5jeSDsgqzsnbTsl5Ag7LCo7J206rCAIO2VmOuCmOudvOuPhCDsnojripQg6rK97JqwIHRydWXrpbwg67CY7ZmYXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZGVwZW5kZW5jaWVzLnNvbWUoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5pcyh2LCBkZXBlbmRlbmN5W2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJoYXNDaGFuZ2VkXCIsIGhhc0NoYW5nZWQpO1xuXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XSA9IGRlcGVuZGVuY2llcztcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCArPSAxO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCDrgrTrtoAg7ZWo7IiYXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBkZWJvdW5jZUZyYW1lOiAx7LSI64u5IOuUlOyKpO2UjOugiOydtCDso7zsgqzsnKjrp4ztgbwg7Iuk7ZaJ7ZWY6rKMIO2VmOyXrCDsp4DrgpjsuZwg66CM642U66eB7J2EIOuwqeyngO2VmOq4sCDsnITtlZwg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBkZWJvdW5jZUZyYW1lID0gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4ge1xuICAgICAgICBsZXQgbmV4dEZyYW1lQ2FsbGJhY2sgPSAtMTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShuZXh0RnJhbWVDYWxsYmFjayk7XG4gICAgICAgICAgbmV4dEZyYW1lQ2FsbGJhY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgKiBleGVjdXRlTW91bnRFZmZlY3RzOiBtb3VudCDsi5wg7Iuk7ZaJ7ZWgIOuplOyEnOuTnOuTpOydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBleGVjdXRlTW91bnRFZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICBpZiAobW91bnRFZmZlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlTW91bnRFZmZlY3RzJywgbW91bnRFZmZlY3RzKTtcbiAgICAgICAgICAgIG1vdW50RWZmZWN0cy5mb3JFYWNoKChtb3VudEVmRm4pID0+IG1vdW50RWZGbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBfcmVuZGVyOiDsi6Tsp4jsoIHsnLzroZwg66as7JWh7Yq4IOuCtOu2gOyXkOyEnCDroIzrjZTrp4HsnYQg64u064u57ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDroIzrjZTrp4FcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG5cbiAgICAgICAgLy8g66eI7Jq07Yq4IOyLnCDsi6Ttlonsi5ztgqwg7L2c67CxIO2VqOyImCDsi6TtlolcbiAgICAgICAgZXhlY3V0ZU1vdW50RWZmZWN0cygpO1xuICAgICAgICBcbiAgICAgICAgLy8g67OA7IiYIOy0iOq4sO2ZlFxuICAgICAgICBjb25zdCBjYWxsZXJzTmFtZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIF9dIG9mIHN0YXRlcykge1xuICAgICAgICAgICAgY2FsbGVyc05hbWUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxlcnNOYW1lLmZvckVhY2goKGNhbGxlcikgPT4ge1xuICAgICAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIDApO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZXMuZW50cmllcygpKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VyU3RhdGVzSWR4LmVudHJpZXMoKSk7XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJFZmZlY3RJZHgnLCBvcHRpb25zLmN1ckVmZmVjdElkeCk7XG5cbiAgICAgICAgbW91bnRFZmZlY3RzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgX3JlbmRlciwgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcbn1cblxuXG5jb25zdCB7IF9yZW5kZXIsIHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBDdXN0b21SZWFjdCgpO1xuXG5leHBvcnQgeyBfcmVuZGVyLCByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCJpbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge1xuICBDSEFOR0VfR0xPQkFMX0lTX0xPQURJTkcsXG4gIENMRUFSX0FMTF9TVEFURSxcbn0gZnJvbSAnLi9hY3Rpb25UeXBlJztcblxuZXhwb3J0IGNvbnN0IGNsZWFyQWxsUmVkdWNlclN0YXRlID0gY3JlYXRlQWN0aW9uPHZvaWQsIHN0cmluZz4oQ0xFQVJfQUxMX1NUQVRFKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VHbG9iYWxJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb248Ym9vbGVhbiwgc3RyaW5nPihcbiAgQ0hBTkdFX0dMT0JBTF9JU19MT0FESU5HLFxuKTtcbiIsImV4cG9ydCBjb25zdCBDTEVBUl9BTExfU1RBVEUgPSAnR0xPQkFML0NMRUFSX0FMTF9TVEFURScgYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0dMT0JBTF9JU19MT0FESU5HID1cbiAgJ0dMT0JBTC9DSEFOR0VfR0xPQkFMX0lTX0xPQURJTkcnIGFzIGNvbnN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7Y3JlYXRlUmVkdWNlciwgUGF5bG9hZEFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge2NoYW5nZUdsb2JhbElzTG9hZGluZ30gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IHtHbG9iYWxTdGF0ZSwgUm9vdFJlZHVjZXJTdGF0ZX0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVkdWNlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogR2xvYmFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgZ2xvYmFsU3RhdGVTZWxlY3RvciA9IChzdGF0ZTogUm9vdFJlZHVjZXJTdGF0ZSk6IEdsb2JhbFN0YXRlID0+IHtcbiAgcmV0dXJuIHN0YXRlLmdsb2JhbFJlZHVjZXI7XG59O1xuXG5jb25zdCBnbG9iYWxSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGJ1aWxkZXIgPT5cbiAgYnVpbGRlci5hZGRDYXNlKFxuICAgIGNoYW5nZUdsb2JhbElzTG9hZGluZyxcbiAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFERF9NT0RBTCB9IGZyb20gXCIuL2FjdGlvblR5cGVcIjtcbmltcG9ydCB7IE1PREFMIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3JlZHVjZXIvaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IGFkZE1vZGFsID0gY3JlYXRlQWN0aW9uPE1PREFMPihBRERfTU9EQUwpOyIsImV4cG9ydCBjb25zdCBBRERfTU9EQUwgPSAnTU9EQUxTL0FERF9NT0RBTCcgYXMgY29uc3Q7IiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgTW9kYWxzU3RhdGUsIFJvb3RSZWR1Y2VyU3RhdGUsIE1PREFMIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVkdWNlcic7XG5pbXBvcnQgeyBhZGRNb2RhbCB9IGZyb20gXCIuL2FjdGlvblwiO1xuaW1wb3J0IHsgX3JlbmRlciB9IGZyb20gJy4uLy4uL2NvcmUvQ3VzdG9tUmVhY3QnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IE1vZGFsc1N0YXRlID0ge1xuICBtb2RhbHMgOiBbXSxcbn1cblxuZXhwb3J0IGNvbnN0IG1vZGFsU3RhdGVTZWxlY3RvciA9IChzdGF0ZTogUm9vdFJlZHVjZXJTdGF0ZSk6IE1vZGFsc1N0YXRlID0+IHtcbiAgcmV0dXJuIHN0YXRlLm1vZGFsUmVkdWNlcjtcbn07XG5cbmNvbnN0IG1vZGFsc1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgYnVpbGRlciA9PlxuICBidWlsZGVyLmFkZENhc2UoXG4gICAgYWRkTW9kYWwsXG4gICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TU9EQUw+KSA9PiB7XG4gICAgICBzdGF0ZS5tb2RhbHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgfVxuICApXG4pXG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsc1JlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IF9yZW5kZXIgfSBmcm9tICcuLi9jb3JlL0N1c3RvbVJlYWN0JztcblxuaW1wb3J0IGdsb2JhbFJlZHVjZXIgZnJvbSAnLi9nbG9iYWwvcmVkdWNlcic7XG5pbXBvcnQgbW9kYWxzUmVkdWNlciBmcm9tICcuL21vZGFscy9yZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBnbG9iYWw6IGdsb2JhbFJlZHVjZXIsXG4gICAgbW9kYWxzOiBtb2RhbHNSZWR1Y2VyLFxufSlcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuICBkZXZUb29sczogdHJ1ZSxcbn0pXG5cbnN0b3JlLnN1YnNjcmliZShfcmVuZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7IiwiaW1wb3J0IHsgSUljb25zIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zXCI7XG5pbXBvcnQgV2luZG93TW9kYWwgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvY29tbW9uL1dpbmRvd01vZGFsXCI7XG5cbi8qXG4qIOyVhOydtOy9mCDsnbTrpoQg6rSA66CoICjsnbTrpoTsnbQg6ri4IOqyveyasCDsp6fqsowgLyDtgbTrpq0g7Iuc7JeQIO2SgOuEpOyehClcbiovXG5jb25zdCBhYmJyZXZpYXRlSWNvbk5hbWUgPSAodjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBpY29uRmlnY2FwdGlvbiA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV07XG5cbiAgICBjb25zdCBmdWxsSWNvbk5hbWUgPSB2LmRhdGFzZXQuaWNvbk5hbWUgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MO1xuICAgIGNvbnN0IHNob3J0TmFtZSA9IGAke2Z1bGxJY29uTmFtZS5zdWJzdHJpbmcoMCwgOCl9Li4uYDtcblxuICAgIGlmIChmdWxsSWNvbk5hbWUubGVuZ3RoID4gOCkge1xuICAgICAgICBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgPSBzaG9ydE5hbWU7XG4gICAgfVxufVxuXG5jb25zdCBzaG93RnVsbEljb25OYW1lID0gKHY6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgIGNvbnN0IGZ1bGxJY29uTmFtZSA9IHYuZGF0YXNldC5pY29uTmFtZSB8fCBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUw7XG5cbiAgICBpZiAoZnVsbEljb25OYW1lLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gZnVsbEljb25OYW1lO1xuICAgIH1cbn1cblxuLypcbiog7JWE7J207L2YIO2BtOumrSDtgbTrnpjsiqQg6rSA66CoICjtgbTrpq3rkJjsl4jsnYQg65WMIGNsaWNrZWQg7YG0656Y7IqkIOy2lOqwgCAvIOyCreygnClcbiovXG5jb25zdCBpbkZvY3VzSWNvbiA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgdi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG59XG5cbmNvbnN0IG91dEZvY3VzSWNvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgaWNvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PihcIi5kZWZhdWx0LWljb25cIik7XG5cbiAgICBpY29uTGlzdC5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpICkge1xuICAgICAgICAgICAgdi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XG4gICAgICAgICAgICBhYmJyZXZpYXRlSWNvbk5hbWUodik7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vLyAxLiDslYTsnbTsvZgg7YG066at7ZaI7J2EIOuVjFxuZXhwb3J0IGNvbnN0IGljb25DbGlja0NhbGxiYWNrID0gKGU6IE1vdXNlRXZlbnQsIHRhcmdldDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICBpbkZvY3VzSWNvbih0YXJnZXQpO1xuICAgIHNob3dGdWxsSWNvbk5hbWUodGFyZ2V0KTtcbn1cblxuLy8gMi4g7JWE7J207L2YIOyZuOu2gCDtmZTrqbQg7YG066at7ZaI7J2EIOuVjFxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lckNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgb3V0Rm9jdXNJY29ucygpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRJY29uSWR4ID0gKHY6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUludCh2LmlkLnNwbGl0KFwiLVwiKVsxXSk7XG59XG4vKlxuKiDslYTsnbTsvZgg65Oc656Y6re4IO2VoCDrlYwg7J2066+47KeAXG4qL1xuY29uc3QgZ2V0RHJhZ0ljb25FbCA9ICh2OiBIVE1MRWxlbWVudCwgaWNvbnM6IEFycmF5PElJY29ucz4pID0+IHtcbiAgICBjb25zdCByb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgIGNvbnN0IGlkeCA9IGdldEljb25JZHgodik7XG4gICAgY29uc3QgZHJhZ2dlZEljb24gPSBpY29ucy5maWx0ZXIoKHY6IElJY29ucykgPT4gIHYuaWR4ID09PSBpZHgpO1xuICAgIFxuICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGljb25EaXYuY2xhc3NMaXN0LmFkZChcImRlZmF1bHQtaWNvblwiKTtcbiAgICBjb25zdCBjc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6IDgwcHg7dG9wOi0xMDBweDtsZWZ0Oi0xMDBweDtcIlxuICAgIGljb25EaXYuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG4gICAgaWNvbkRpdi5pbm5lckhUTUwgPSBnZXREcmFnSWNvbklubmVyRWxlbShkcmFnZ2VkSWNvblswXS5uYW1lKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgIHJldHVybiBpY29uRGl2O1xufVxuXG5jb25zdCBnZXREcmFnSWNvbklubmVyRWxlbSA9IChpY29uTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICA8ZmlndXJlIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9pY29ucy93aW5kb3dzLXhwLWljb25zLW1kLnBuZycpO2JhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC00OHB4O1wiPjwvZmlndXJlPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+JHtpY29uTmFtZX08L2ZpZ2NhcHRpb24+XG4gICAgICAgIDwvYnV0dG9uPmBcbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCBpY29uRHJhZ0NhbGxiYWNrID0gKFxuICAgIGRyYWdzdGFydEV2ZW50OiBEcmFnRXZlbnQsXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgICBpY29uczogQXJyYXk8SUljb25zPixcbiAgICBzZXRJY29uczogRnVuY3Rpb24sXG4pID0+IHtcbiAgICAvLyDslYTsnbTsvZggaW5kZXhcbiAgICBjb25zdCBpY29uSWR4ID0gTnVtYmVyLnBhcnNlSW50KHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKT8uc3BsaXQoXCItXCIpWzFdIHx8ICcwJyk7XG5cbiAgICAvLyDtlZjrgpjsnZggZ3JpZCBhcmVh7J2YIOqwgOuhnC/shLjroZxcbiAgICBjb25zdCBPTkVfR1JJRF9BUkVBX1dJRFRIID0gODA7XG4gICAgY29uc3QgT05FX0dSSURfQVJFQV9IRUlHSFQgPSAxMDA7XG5cbiAgICAvLyDquLDsobQg7JWE7J207L2YIOq3uOumrOuTnCBjb2x1bW4sIHJvdyDsi5zsnpHsoJBcbiAgICBjb25zdCBwcmV2R3JpZENvbHVtblN0YXJ0ID0gTnVtYmVyLnBhcnNlSW50KHRhcmdldC5zdHlsZS5ncmlkQ29sdW1uU3RhcnQpO1xuICAgIGNvbnN0IHByZXZHcmlkUm93U3RhcnQgPSBOdW1iZXIucGFyc2VJbnQodGFyZ2V0LnN0eWxlLmdyaWRSb3dTdGFydCk7XG5cbiAgICAvLyDquLDsobQg7JWE7J207L2YIOychOy5mFxuICAgIGNvbnN0IHByZXZJY29uUG9zID0gW2RyYWdzdGFydEV2ZW50LmNsaWVudFgsIGRyYWdzdGFydEV2ZW50LmNsaWVudFldO1xuXG4gICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgaWNvbkRpdiA9IGdldERyYWdJY29uRWwodGFyZ2V0LCBpY29ucyk7XG5cbiAgICBsZXQgc2hpZnRYID0gZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WCAtIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIGxldCBzaGlmdFkgPSBkcmFnc3RhcnRFdmVudC5jbGllbnRZIC0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgIGRyYWdzdGFydEV2ZW50LmRhdGFUcmFuc2Zlcj8uc2V0RHJhZ0ltYWdlKGljb25EaXYsIHNoaWZ0WCwgc2hpZnRZKTtcblxuICAgIGlmIChkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcbiAgICB9XG5cbiAgICBjb25zdCBkcmFnb3ZlckZuID0gKGRyYWdvdmVyRXZlbnQ6IERyYWdFdmVudCkgPT4ge1xuICAgICAgICBkcmFnb3ZlckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckZuKTtcbiAgICBcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGRyb3BFdmVudCkgPT4ge1xuICAgICAgICBkcm9wRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyDtgbTrpq0obW91c2Vkb3duKSDsnbTrsqTtirjqsIAg7KCB7Jqp65CcIOyXmOumrOuovO2KuOunjCDsnbTrj5lcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSkge1xuICAgICAgICAgICAgLy8g65Oc656Y6re46rCAIOuBneuCnCDtm4Qg7JWE7J207L2YIOychOy5mFxuICAgICAgICAgICAgY29uc3QgY3VySWNvblBvcyA9IFtkcm9wRXZlbnQuY2xpZW50WCwgZHJvcEV2ZW50LmNsaWVudFldO1xuXG4gICAgICAgICAgICAvLyDquLDsobQg7JWE7J207L2YIOq3uOumrOuTnCDsooztkZzsl5DshJwg66qHIOunjO2BvCDsm4Dsp4HsmIDripTsp4BcbiAgICAgICAgICAgIGNvbnN0IG1vdmluZ0Nvb3JkaW5hdGVzWCA9IE51bWJlci5wYXJzZUludCgoKGN1ckljb25Qb3NbMF0gLSBwcmV2SWNvblBvc1swXSkgLyBPTkVfR1JJRF9BUkVBX1dJRFRIKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgY29uc3QgbW92aW5nQ29vcmRpbmF0ZXNZID0gTnVtYmVyLnBhcnNlSW50KCgoY3VySWNvblBvc1sxXSAtIHByZXZJY29uUG9zWzFdKSAvIE9ORV9HUklEX0FSRUFfSEVJR0hUKS50b0ZpeGVkKCkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyDrk5zrnpjqt7jqsIAg64Gd64KcIO2bhCBjb2x1bW4sIHJvdyDsi5zsnpHsoJBcbiAgICAgICAgICAgIGNvbnN0IGdyaWRDb2x1bW5TdGFydCA9IHByZXZHcmlkQ29sdW1uU3RhcnQgKyBtb3ZpbmdDb29yZGluYXRlc1g7XG4gICAgICAgICAgICBjb25zdCBncmlkUm93U3RhcnQgPSBwcmV2R3JpZFJvd1N0YXJ0ICsgbW92aW5nQ29vcmRpbmF0ZXNZO1xuXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHsgZ3JpZFJvd1N0YXJ0LCBncmlkQ29sdW1uU3RhcnQgfTtcblxuICAgICAgICAgICAgY29uc3QgbmV3SWNvbnMgPSBbLi4uaWNvbnNdO1xuICAgICAgICAgICAgbmV3SWNvbnNbaWNvbklkeF0gPSB7Li4uaWNvbnNbaWNvbklkeF0sIHN0eWxlOiB7Li4uaWNvbnNbaWNvbklkeF0uc3R5bGUsIC4uLnN0eWxlfSB9O1xuICAgICAgICAgICAgc2V0SWNvbnMobmV3SWNvbnMpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVyRm4pO1xuXG4gICAgICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQoaWNvbkRpdik7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vLyA0LiDslYTsnbTsvZgg642U67iU7YG066at7J2067Kk7Yq4XG5leHBvcnQgY29uc3QgaWNvbkRiQ2xpY2tDYWxsYmFjayA9IChcbiAgICBfOiBFdmVudCxcbiAgICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxuICAgIG5lZWRlZFN0YXRlOiB7bW9kYWxzTGVuZ3RoOiBudW1iZXIsIGljb25zOiBBcnJheTxJSWNvbnM+fSxcbiAgICBhZGRNb2RhbHM6IEZ1bmN0aW9uLFxuKSA9PiB7XG4gICAgY29uc3QgbW9kYWxJZHggPSBuZWVkZWRTdGF0ZS5tb2RhbHNMZW5ndGggKyAxO1xuXG4gICAgY29uc3QgaWR4ID0gZ2V0SWNvbklkeCh0YXJnZXQpO1xuICAgIGNvbnN0IGRiY2xpY2tlZEljb24gPSBuZWVkZWRTdGF0ZS5pY29ucy5maWx0ZXIoKHY6IElJY29ucykgPT4gIHYuaWR4ID09PSBpZHgpO1xuXG4gICAgY29uc3Qgd2luZG93TW9kYWwgPSBXaW5kb3dNb2RhbCh7aWNvbjogZGJjbGlja2VkSWNvblswXSwgbW9kYWxJZHh9KTtcblxuICAgIGlmICh3aW5kb3dNb2RhbCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHtpY29uOiBkYmNsaWNrZWRJY29uWzBdLCBjb250ZW50OiB3aW5kb3dNb2RhbH07XG4gICAgICAgIGFkZE1vZGFscyh2YWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi9kZWZpbmVQcm9wZXJ0eS5qc1wiO1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCJmdW5jdGlvbiBuKG4pe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLHQ9QXJyYXkocj4xP3ItMTowKSxlPTE7ZTxyO2UrKyl0W2UtMV09YXJndW1lbnRzW2VdO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBpPVlbbl0sbz1pP1wiZnVuY3Rpb25cIj09dHlwZW9mIGk/aS5hcHBseShudWxsLHQpOmk6XCJ1bmtub3duIGVycm9yIG5yOiBcIituO3Rocm93IEVycm9yKFwiW0ltbWVyXSBcIitvKX10aHJvdyBFcnJvcihcIltJbW1lcl0gbWluaWZpZWQgZXJyb3IgbnI6IFwiK24rKHQubGVuZ3RoP1wiIFwiK3QubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIidcIituK1wiJ1wifSkpLmpvaW4oXCIsXCIpOlwiXCIpK1wiLiBGaW5kIHRoZSBmdWxsIGVycm9yIGF0OiBodHRwczovL2JpdC5seS8zY1hFS1dmXCIpfWZ1bmN0aW9uIHIobil7cmV0dXJuISFuJiYhIW5bUV19ZnVuY3Rpb24gdChuKXt2YXIgcjtyZXR1cm4hIW4mJihmdW5jdGlvbihuKXtpZighbnx8XCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuITE7dmFyIHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO2lmKG51bGw9PT1yKXJldHVybiEwO3ZhciB0PU9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsXCJjb25zdHJ1Y3RvclwiKSYmci5jb25zdHJ1Y3RvcjtyZXR1cm4gdD09PU9iamVjdHx8XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmRnVuY3Rpb24udG9TdHJpbmcuY2FsbCh0KT09PVp9KG4pfHxBcnJheS5pc0FycmF5KG4pfHwhIW5bTF18fCEhKG51bGw9PT0ocj1uLmNvbnN0cnVjdG9yKXx8dm9pZCAwPT09cj92b2lkIDA6cltMXSl8fHMobil8fHYobikpfWZ1bmN0aW9uIGUodCl7cmV0dXJuIHIodCl8fG4oMjMsdCksdFtRXS50fWZ1bmN0aW9uIGkobixyLHQpe3ZvaWQgMD09PXQmJih0PSExKSwwPT09byhuKT8odD9PYmplY3Qua2V5czpubikobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dCYmXCJzeW1ib2xcIj09dHlwZW9mIGV8fHIoZSxuW2VdLG4pfSkpOm4uZm9yRWFjaCgoZnVuY3Rpb24odCxlKXtyZXR1cm4gcihlLHQsbil9KSl9ZnVuY3Rpb24gbyhuKXt2YXIgcj1uW1FdO3JldHVybiByP3IuaT4zP3IuaS00OnIuaTpBcnJheS5pc0FycmF5KG4pPzE6cyhuKT8yOnYobik/MzowfWZ1bmN0aW9uIHUobixyKXtyZXR1cm4gMj09PW8obik/bi5oYXMocik6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scil9ZnVuY3Rpb24gYShuLHIpe3JldHVybiAyPT09byhuKT9uLmdldChyKTpuW3JdfWZ1bmN0aW9uIGYobixyLHQpe3ZhciBlPW8obik7Mj09PWU/bi5zZXQocix0KTozPT09ZT9uLmFkZCh0KTpuW3JdPXR9ZnVuY3Rpb24gYyhuLHIpe3JldHVybiBuPT09cj8wIT09bnx8MS9uPT0xL3I6biE9biYmciE9cn1mdW5jdGlvbiBzKG4pe3JldHVybiBYJiZuIGluc3RhbmNlb2YgTWFwfWZ1bmN0aW9uIHYobil7cmV0dXJuIHEmJm4gaW5zdGFuY2VvZiBTZXR9ZnVuY3Rpb24gcChuKXtyZXR1cm4gbi5vfHxuLnR9ZnVuY3Rpb24gbChuKXtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChuKTt2YXIgcj1ybihuKTtkZWxldGUgcltRXTtmb3IodmFyIHQ9bm4ociksZT0wO2U8dC5sZW5ndGg7ZSsrKXt2YXIgaT10W2VdLG89cltpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKHJbaV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTpuW2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pLHIpfWZ1bmN0aW9uIGQobixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkobil8fHIobil8fCF0KG4pfHwobyhuKT4xJiYobi5zZXQ9bi5hZGQ9bi5jbGVhcj1uLmRlbGV0ZT1oKSxPYmplY3QuZnJlZXplKG4pLGUmJmkobiwoZnVuY3Rpb24obixyKXtyZXR1cm4gZChyLCEwKX0pLCEwKSksbn1mdW5jdGlvbiBoKCl7bigyKX1mdW5jdGlvbiB5KG4pe3JldHVybiBudWxsPT1ufHxcIm9iamVjdFwiIT10eXBlb2Ygbnx8T2JqZWN0LmlzRnJvemVuKG4pfWZ1bmN0aW9uIGIocil7dmFyIHQ9dG5bcl07cmV0dXJuIHR8fG4oMTgsciksdH1mdW5jdGlvbiBtKG4scil7dG5bbl18fCh0bltuXT1yKX1mdW5jdGlvbiBfKCl7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8VXx8bigwKSxVfWZ1bmN0aW9uIGoobixyKXtyJiYoYihcIlBhdGNoZXNcIiksbi51PVtdLG4ucz1bXSxuLnY9cil9ZnVuY3Rpb24gZyhuKXtPKG4pLG4ucC5mb3JFYWNoKFMpLG4ucD1udWxsfWZ1bmN0aW9uIE8obil7bj09PVUmJihVPW4ubCl9ZnVuY3Rpb24gdyhuKXtyZXR1cm4gVT17cDpbXSxsOlUsaDpuLG06ITAsXzowfX1mdW5jdGlvbiBTKG4pe3ZhciByPW5bUV07MD09PXIuaXx8MT09PXIuaT9yLmooKTpyLmc9ITB9ZnVuY3Rpb24gUChyLGUpe2UuXz1lLnAubGVuZ3RoO3ZhciBpPWUucFswXSxvPXZvaWQgMCE9PXImJnIhPT1pO3JldHVybiBlLmguT3x8YihcIkVTNVwiKS5TKGUscixvKSxvPyhpW1FdLlAmJihnKGUpLG4oNCkpLHQocikmJihyPU0oZSxyKSxlLmx8fHgoZSxyKSksZS51JiZiKFwiUGF0Y2hlc1wiKS5NKGlbUV0udCxyLGUudSxlLnMpKTpyPU0oZSxpLFtdKSxnKGUpLGUudSYmZS52KGUudSxlLnMpLHIhPT1IP3I6dm9pZCAwfWZ1bmN0aW9uIE0obixyLHQpe2lmKHkocikpcmV0dXJuIHI7dmFyIGU9cltRXTtpZighZSlyZXR1cm4gaShyLChmdW5jdGlvbihpLG8pe3JldHVybiBBKG4sZSxyLGksbyx0KX0pLCEwKSxyO2lmKGUuQSE9PW4pcmV0dXJuIHI7aWYoIWUuUClyZXR1cm4geChuLGUudCwhMCksZS50O2lmKCFlLkkpe2UuST0hMCxlLkEuXy0tO3ZhciBvPTQ9PT1lLml8fDU9PT1lLmk/ZS5vPWwoZS5rKTplLm8sdT1vLGE9ITE7Mz09PWUuaSYmKHU9bmV3IFNldChvKSxvLmNsZWFyKCksYT0hMCksaSh1LChmdW5jdGlvbihyLGkpe3JldHVybiBBKG4sZSxvLHIsaSx0LGEpfSkpLHgobixvLCExKSx0JiZuLnUmJmIoXCJQYXRjaGVzXCIpLk4oZSx0LG4udSxuLnMpfXJldHVybiBlLm99ZnVuY3Rpb24gQShlLGksbyxhLGMscyx2KXtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZjPT09byYmbig1KSxyKGMpKXt2YXIgcD1NKGUsYyxzJiZpJiYzIT09aS5pJiYhdShpLlIsYSk/cy5jb25jYXQoYSk6dm9pZCAwKTtpZihmKG8sYSxwKSwhcihwKSlyZXR1cm47ZS5tPSExfWVsc2UgdiYmby5hZGQoYyk7aWYodChjKSYmIXkoYykpe2lmKCFlLmguRCYmZS5fPDEpcmV0dXJuO00oZSxjKSxpJiZpLkEubHx8eChlLGMpfX1mdW5jdGlvbiB4KG4scix0KXt2b2lkIDA9PT10JiYodD0hMSksIW4ubCYmbi5oLkQmJm4ubSYmZChyLHQpfWZ1bmN0aW9uIHoobixyKXt2YXIgdD1uW1FdO3JldHVybih0P3AodCk6bilbcl19ZnVuY3Rpb24gSShuLHIpe2lmKHIgaW4gbilmb3IodmFyIHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3Q7KXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQscik7aWYoZSlyZXR1cm4gZTt0PU9iamVjdC5nZXRQcm90b3R5cGVPZih0KX19ZnVuY3Rpb24gayhuKXtuLlB8fChuLlA9ITAsbi5sJiZrKG4ubCkpfWZ1bmN0aW9uIEUobil7bi5vfHwobi5vPWwobi50KSl9ZnVuY3Rpb24gTihuLHIsdCl7dmFyIGU9cyhyKT9iKFwiTWFwU2V0XCIpLkYocix0KTp2KHIpP2IoXCJNYXBTZXRcIikuVChyLHQpOm4uTz9mdW5jdGlvbihuLHIpe3ZhciB0PUFycmF5LmlzQXJyYXkobiksZT17aTp0PzE6MCxBOnI/ci5BOl8oKSxQOiExLEk6ITEsUjp7fSxsOnIsdDpuLGs6bnVsbCxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPWVuO3QmJihpPVtlXSxvPW9uKTt2YXIgdT1Qcm94eS5yZXZvY2FibGUoaSxvKSxhPXUucmV2b2tlLGY9dS5wcm94eTtyZXR1cm4gZS5rPWYsZS5qPWEsZn0ocix0KTpiKFwiRVM1XCIpLkoocix0KTtyZXR1cm4odD90LkE6XygpKS5wLnB1c2goZSksZX1mdW5jdGlvbiBSKGUpe3JldHVybiByKGUpfHxuKDIyLGUpLGZ1bmN0aW9uIG4ocil7aWYoIXQocikpcmV0dXJuIHI7dmFyIGUsdT1yW1FdLGM9byhyKTtpZih1KXtpZighdS5QJiYodS5pPDR8fCFiKFwiRVM1XCIpLksodSkpKXJldHVybiB1LnQ7dS5JPSEwLGU9RChyLGMpLHUuST0hMX1lbHNlIGU9RChyLGMpO3JldHVybiBpKGUsKGZ1bmN0aW9uKHIsdCl7dSYmYSh1LnQscik9PT10fHxmKGUscixuKHQpKX0pKSwzPT09Yz9uZXcgU2V0KGUpOmV9KGUpfWZ1bmN0aW9uIEQobixyKXtzd2l0Y2gocil7Y2FzZSAyOnJldHVybiBuZXcgTWFwKG4pO2Nhc2UgMzpyZXR1cm4gQXJyYXkuZnJvbShuKX1yZXR1cm4gbChuKX1mdW5jdGlvbiBGKCl7ZnVuY3Rpb24gdChuLHIpe3ZhciB0PXNbbl07cmV0dXJuIHQ/dC5lbnVtZXJhYmxlPXI6c1tuXT10PXtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTpyLGdldDpmdW5jdGlvbigpe3ZhciByPXRoaXNbUV07cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihyKSxlbi5nZXQocixuKX0sc2V0OmZ1bmN0aW9uKHIpe3ZhciB0PXRoaXNbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZih0KSxlbi5zZXQodCxuLHIpfX0sdH1mdW5jdGlvbiBlKG4pe2Zvcih2YXIgcj1uLmxlbmd0aC0xO3I+PTA7ci0tKXt2YXIgdD1uW3JdW1FdO2lmKCF0LlApc3dpdGNoKHQuaSl7Y2FzZSA1OmEodCkmJmsodCk7YnJlYWs7Y2FzZSA0Om8odCkmJmsodCl9fX1mdW5jdGlvbiBvKG4pe2Zvcih2YXIgcj1uLnQsdD1uLmssZT1ubih0KSxpPWUubGVuZ3RoLTE7aT49MDtpLS0pe3ZhciBvPWVbaV07aWYobyE9PVEpe3ZhciBhPXJbb107aWYodm9pZCAwPT09YSYmIXUocixvKSlyZXR1cm4hMDt2YXIgZj10W29dLHM9ZiYmZltRXTtpZihzP3MudCE9PWE6IWMoZixhKSlyZXR1cm4hMH19dmFyIHY9ISFyW1FdO3JldHVybiBlLmxlbmd0aCE9PW5uKHIpLmxlbmd0aCsodj8wOjEpfWZ1bmN0aW9uIGEobil7dmFyIHI9bi5rO2lmKHIubGVuZ3RoIT09bi50Lmxlbmd0aClyZXR1cm4hMDt2YXIgdD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsci5sZW5ndGgtMSk7aWYodCYmIXQuZ2V0KXJldHVybiEwO2Zvcih2YXIgZT0wO2U8ci5sZW5ndGg7ZSsrKWlmKCFyLmhhc093blByb3BlcnR5KGUpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIGYocil7ci5nJiZuKDMsSlNPTi5zdHJpbmdpZnkocChyKSkpfXZhciBzPXt9O20oXCJFUzVcIix7SjpmdW5jdGlvbihuLHIpe3ZhciBlPUFycmF5LmlzQXJyYXkobiksaT1mdW5jdGlvbihuLHIpe2lmKG4pe2Zvcih2YXIgZT1BcnJheShyLmxlbmd0aCksaT0wO2k8ci5sZW5ndGg7aSsrKU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiXCIraSx0KGksITApKTtyZXR1cm4gZX12YXIgbz1ybihyKTtkZWxldGUgb1tRXTtmb3IodmFyIHU9bm4obyksYT0wO2E8dS5sZW5ndGg7YSsrKXt2YXIgZj11W2FdO29bZl09dChmLG58fCEhb1tmXS5lbnVtZXJhYmxlKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yociksbyl9KGUsbiksbz17aTplPzU6NCxBOnI/ci5BOl8oKSxQOiExLEk6ITEsUjp7fSxsOnIsdDpuLGs6aSxvOm51bGwsZzohMSxDOiExfTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksUSx7dmFsdWU6byx3cml0YWJsZTohMH0pLGl9LFM6ZnVuY3Rpb24obix0LG8pe28/cih0KSYmdFtRXS5BPT09biYmZShuLnApOihuLnUmJmZ1bmN0aW9uIG4ocil7aWYociYmXCJvYmplY3RcIj09dHlwZW9mIHIpe3ZhciB0PXJbUV07aWYodCl7dmFyIGU9dC50LG89dC5rLGY9dC5SLGM9dC5pO2lmKDQ9PT1jKWkobywoZnVuY3Rpb24ocil7ciE9PVEmJih2b2lkIDAhPT1lW3JdfHx1KGUscik/ZltyXXx8bihvW3JdKTooZltyXT0hMCxrKHQpKSl9KSksaShlLChmdW5jdGlvbihuKXt2b2lkIDAhPT1vW25dfHx1KG8sbil8fChmW25dPSExLGsodCkpfSkpO2Vsc2UgaWYoNT09PWMpe2lmKGEodCkmJihrKHQpLGYubGVuZ3RoPSEwKSxvLmxlbmd0aDxlLmxlbmd0aClmb3IodmFyIHM9by5sZW5ndGg7czxlLmxlbmd0aDtzKyspZltzXT0hMTtlbHNlIGZvcih2YXIgdj1lLmxlbmd0aDt2PG8ubGVuZ3RoO3YrKylmW3ZdPSEwO2Zvcih2YXIgcD1NYXRoLm1pbihvLmxlbmd0aCxlLmxlbmd0aCksbD0wO2w8cDtsKyspby5oYXNPd25Qcm9wZXJ0eShsKXx8KGZbbF09ITApLHZvaWQgMD09PWZbbF0mJm4ob1tsXSl9fX19KG4ucFswXSksZShuLnApKX0sSzpmdW5jdGlvbihuKXtyZXR1cm4gND09PW4uaT9vKG4pOmEobil9fSl9ZnVuY3Rpb24gVCgpe2Z1bmN0aW9uIGUobil7aWYoIXQobikpcmV0dXJuIG47aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gbi5tYXAoZSk7aWYocyhuKSlyZXR1cm4gbmV3IE1hcChBcnJheS5mcm9tKG4uZW50cmllcygpKS5tYXAoKGZ1bmN0aW9uKG4pe3JldHVybltuWzBdLGUoblsxXSldfSkpKTtpZih2KG4pKXJldHVybiBuZXcgU2V0KEFycmF5LmZyb20obikubWFwKGUpKTt2YXIgcj1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSk7Zm9yKHZhciBpIGluIG4pcltpXT1lKG5baV0pO3JldHVybiB1KG4sTCkmJihyW0xdPW5bTF0pLHJ9ZnVuY3Rpb24gZihuKXtyZXR1cm4gcihuKT9lKG4pOm59dmFyIGM9XCJhZGRcIjttKFwiUGF0Y2hlc1wiLHskOmZ1bmN0aW9uKHIsdCl7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm9yKHZhciBpPXQucGF0aCx1PXQub3AsZj1yLHM9MDtzPGkubGVuZ3RoLTE7cysrKXt2YXIgdj1vKGYpLHA9aVtzXTtcInN0cmluZ1wiIT10eXBlb2YgcCYmXCJudW1iZXJcIiE9dHlwZW9mIHAmJihwPVwiXCIrcCksMCE9PXYmJjEhPT12fHxcIl9fcHJvdG9fX1wiIT09cCYmXCJjb25zdHJ1Y3RvclwiIT09cHx8bigyNCksXCJmdW5jdGlvblwiPT10eXBlb2YgZiYmXCJwcm90b3R5cGVcIj09PXAmJm4oMjQpLFwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixwKSkmJm4oMTUsaS5qb2luKFwiL1wiKSl9dmFyIGw9byhmKSxkPWUodC52YWx1ZSksaD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKGwpe2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltoXT1kfWNhc2UgYzpzd2l0Y2gobCl7Y2FzZSAxOnJldHVyblwiLVwiPT09aD9mLnB1c2goZCk6Zi5zcGxpY2UoaCwwLGQpO2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6cmV0dXJuIGYuYWRkKGQpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDEpO2Nhc2UgMjpyZXR1cm4gZi5kZWxldGUoaCk7Y2FzZSAzOnJldHVybiBmLmRlbGV0ZSh0LnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgZltoXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHJ9LE46ZnVuY3Rpb24obixyLHQsZSl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciBvPW4udCxzPW4ubztpKG4uUiwoZnVuY3Rpb24obixpKXt2YXIgdj1hKG8sbikscD1hKHMsbiksbD1pP3UobyxuKT9cInJlcGxhY2VcIjpjOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09bCl7dmFyIGQ9ci5jb25jYXQobik7dC5wdXNoKFwicmVtb3ZlXCI9PT1sP3tvcDpsLHBhdGg6ZH06e29wOmwscGF0aDpkLHZhbHVlOnB9KSxlLnB1c2gobD09PWM/e29wOlwicmVtb3ZlXCIscGF0aDpkfTpcInJlbW92ZVwiPT09bD97b3A6YyxwYXRoOmQsdmFsdWU6Zih2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6ZCx2YWx1ZTpmKHYpfSl9fSkpfShuLHIsdCxlKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgaT1uLnQsbz1uLlIsdT1uLm87aWYodS5sZW5ndGg8aS5sZW5ndGgpe3ZhciBhPVt1LGldO2k9YVswXSx1PWFbMV07dmFyIHM9W2UsdF07dD1zWzBdLGU9c1sxXX1mb3IodmFyIHY9MDt2PGkubGVuZ3RoO3YrKylpZihvW3ZdJiZ1W3ZdIT09aVt2XSl7dmFyIHA9ci5jb25jYXQoW3ZdKTt0LnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKHVbdl0pfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6ZihpW3ZdKX0pfWZvcih2YXIgbD1pLmxlbmd0aDtsPHUubGVuZ3RoO2wrKyl7dmFyIGQ9ci5jb25jYXQoW2xdKTt0LnB1c2goe29wOmMscGF0aDpkLHZhbHVlOmYodVtsXSl9KX1pLmxlbmd0aDx1Lmxlbmd0aCYmZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnIuY29uY2F0KFtcImxlbmd0aFwiXSksdmFsdWU6aS5sZW5ndGh9KX0obixyLHQsZSk7Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgaT1uLnQsbz1uLm8sdT0wO2kuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIW8uaGFzKG4pKXt2YXIgaT1yLmNvbmNhdChbdV0pO3QucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOmksdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6YyxwYXRoOmksdmFsdWU6bn0pfXUrK30pKSx1PTAsby5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighaS5oYXMobikpe3ZhciBvPXIuY29uY2F0KFt1XSk7dC5wdXNoKHtvcDpjLHBhdGg6byx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpcInJlbW92ZVwiLHBhdGg6byx2YWx1ZTpufSl9dSsrfSkpfShuLHIsdCxlKX19LE06ZnVuY3Rpb24obixyLHQsZSl7dC5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnI9PT1IP3ZvaWQgMDpyfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOm59KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gcihuLHIpe2Z1bmN0aW9uIHQoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHIpLG4ucHJvdG90eXBlPSh0LnByb3RvdHlwZT1yLnByb3RvdHlwZSxuZXcgdCl9ZnVuY3Rpb24gZShuKXtuLm98fChuLlI9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbihyKXtpZih0KHIpKXt2YXIgZT1OKG4uQS5oLHIsbik7bi5wLnNldChyLGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHIpfSkpKX1mdW5jdGlvbiB1KHIpe3IuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAocikpKX12YXIgYT1mdW5jdGlvbihuLHIpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHIpe24uX19wcm90b19fPXJ9fHxmdW5jdGlvbihuLHIpe2Zvcih2YXIgdCBpbiByKXIuaGFzT3duUHJvcGVydHkodCkmJihuW3RdPXJbdF0pfSkobixyKX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdGhpc1tRXT17aToyLGw6cixBOnI/ci5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsUjp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLGc6ITF9LHRoaXN9cihuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obixyKXt2YXIgdD10aGlzW1FdO3JldHVybiB1KHQpLHAodCkuaGFzKG4pJiZwKHQpLmdldChuKT09PXJ8fChlKHQpLGsodCksdC5SLnNldChuLCEwKSx0Lm8uc2V0KG4sciksdC5SLnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksZShyKSxrKHIpLHIudC5oYXMobik/ci5SLnNldChuLCExKTpyLlIuZGVsZXRlKG4pLHIuby5kZWxldGUobiksITB9LG8uY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYoZShuKSxrKG4pLG4uUj1uZXcgTWFwLGkobi50LChmdW5jdGlvbihyKXtuLlIuc2V0KHIsITEpfSkpLG4uby5jbGVhcigpKX0sby5mb3JFYWNoPWZ1bmN0aW9uKG4scil7dmFyIHQ9dGhpcztwKHRoaXNbUV0pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHIsdC5nZXQoaSksaSx0KX0pKX0sby5nZXQ9ZnVuY3Rpb24obil7dmFyIHI9dGhpc1tRXTt1KHIpO3ZhciBpPXAocikuZ2V0KG4pO2lmKHIuSXx8IXQoaSkpcmV0dXJuIGk7aWYoaSE9PXIudC5nZXQobikpcmV0dXJuIGk7dmFyIG89TihyLkEuaCxpLHIpO3JldHVybiBlKHIpLHIuby5zZXQobixvKSxvfSxvLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5rZXlzKCl9LG8udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4scj10aGlzLHQ9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHIudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXQubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTpyLmdldChuLnZhbHVlKX19LG59LG8uZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHI9dGhpcyx0PXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiByLmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49dC5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXIuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0sb1tWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHIpe3JldHVybiB0aGlzW1FdPXtpOjMsbDpyLEE6cj9yLkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxnOiExLEM6ITF9LHRoaXN9cihuLFNldCk7dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLHQuaGFzPWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksci5vPyEhci5vLmhhcyhuKXx8ISghci5wLmhhcyhuKXx8IXIuby5oYXMoci5wLmdldChuKSkpOnIudC5oYXMobil9LHQuYWRkPWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksdGhpcy5oYXMobil8fChvKHIpLGsociksci5vLmFkZChuKSksdGhpc30sdC5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksbyhyKSxrKHIpLHIuby5kZWxldGUobil8fCEhci5wLmhhcyhuKSYmci5vLmRlbGV0ZShyLnAuZ2V0KG4pKX0sdC5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihvKG4pLGsobiksbi5vLmNsZWFyKCkpfSx0LnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8udmFsdWVzKCl9LHQuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8uZW50cmllcygpfSx0LmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sdFtWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSx0LmZvckVhY2g9ZnVuY3Rpb24obixyKXtmb3IodmFyIHQ9dGhpcy52YWx1ZXMoKSxlPXQubmV4dCgpOyFlLmRvbmU7KW4uY2FsbChyLGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXQubmV4dCgpfSxufSgpO20oXCJNYXBTZXRcIix7RjpmdW5jdGlvbihuLHIpe3JldHVybiBuZXcgZihuLHIpfSxUOmZ1bmN0aW9uKG4scil7cmV0dXJuIG5ldyBjKG4scil9fSl9ZnVuY3Rpb24gSigpe0YoKSxDKCksVCgpfWZ1bmN0aW9uIEsobil7cmV0dXJuIG59ZnVuY3Rpb24gJChuKXtyZXR1cm4gbn12YXIgRyxVLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxIPVc/U3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik6KChHPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsRyksTD1XP1N5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik6XCJfXyRpbW1lcl9kcmFmdGFibGVcIixRPVc/U3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsWT17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIiwyMTpmdW5jdGlvbihuKXtyZXR1cm5cInByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJ1wiK24rXCInXCJ9LDIyOmZ1bmN0aW9uKG4pe3JldHVyblwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyMzpmdW5jdGlvbihuKXtyZXR1cm5cIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDI0OlwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwifSxaPVwiXCIrT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcixubj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLHJuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzfHxmdW5jdGlvbihuKXt2YXIgcj17fTtyZXR1cm4gbm4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7clt0XT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCl9KSkscn0sdG49e30sZW49e2dldDpmdW5jdGlvbihuLHIpe2lmKHI9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSxyKSlyZXR1cm4gZnVuY3Rpb24obixyLHQpe3ZhciBlLGk9SShyLHQpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSxyKTt2YXIgaT1lW3JdO3JldHVybiBuLkl8fCF0KGkpP2k6aT09PXoobi50LHIpPyhFKG4pLG4ub1tyXT1OKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHIpe3JldHVybiByIGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4scix0KXt2YXIgZT1JKHAobikscik7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHQpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSxyKSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09dClyZXR1cm4gbi5vW3JdPXQsbi5SW3JdPSExLCEwO2lmKGModCxpKSYmKHZvaWQgMCE9PXR8fHUobi50LHIpKSlyZXR1cm4hMDtFKG4pLGsobil9cmV0dXJuIG4ub1tyXT09PXQmJih2b2lkIDAhPT10fHxyIGluIG4ubyl8fE51bWJlci5pc05hTih0KSYmTnVtYmVyLmlzTmFOKG4ub1tyXSl8fChuLm9bcl09dCxuLlJbcl09ITApLCEwfSxkZWxldGVQcm9wZXJ0eTpmdW5jdGlvbihuLHIpe3JldHVybiB2b2lkIDAhPT16KG4udCxyKXx8ciBpbiBuLnQ/KG4uUltyXT0hMSxFKG4pLGsobikpOmRlbGV0ZSBuLlJbcl0sbi5vJiZkZWxldGUgbi5vW3JdLCEwfSxnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ZnVuY3Rpb24obixyKXt2YXIgdD1wKG4pLGU9UmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxyKTtyZXR1cm4gZT97d3JpdGFibGU6ITAsY29uZmlndXJhYmxlOjEhPT1uLml8fFwibGVuZ3RoXCIhPT1yLGVudW1lcmFibGU6ZS5lbnVtZXJhYmxlLHZhbHVlOnRbcl19OmV9LGRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKCl7bigxMSl9LGdldFByb3RvdHlwZU9mOmZ1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobi50KX0sc2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24oKXtuKDEyKX19LG9uPXt9O2koZW4sKGZ1bmN0aW9uKG4scil7b25bbl09ZnVuY3Rpb24oKXtyZXR1cm4gYXJndW1lbnRzWzBdPWFyZ3VtZW50c1swXVswXSxyLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19KSksb24uZGVsZXRlUHJvcGVydHk9ZnVuY3Rpb24ocix0KXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpc05hTihwYXJzZUludCh0KSkmJm4oMTMpLG9uLnNldC5jYWxsKHRoaXMscix0LHZvaWQgMCl9LG9uLnNldD1mdW5jdGlvbihyLHQsZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJsZW5ndGhcIiE9PXQmJmlzTmFOKHBhcnNlSW50KHQpKSYmbigxNCksZW4uc2V0LmNhbGwodGhpcyxyWzBdLHQsZSxyWzBdKX07dmFyIHVuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShyKXt2YXIgZT10aGlzO3RoaXMuTz1CLHRoaXMuRD0hMCx0aGlzLnByb2R1Y2U9ZnVuY3Rpb24ocixpLG8pe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGkpe3ZhciB1PWk7aT1yO3ZhciBhPWU7cmV0dXJuIGZ1bmN0aW9uKG4pe3ZhciByPXRoaXM7dm9pZCAwPT09biYmKG49dSk7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1BcnJheSh0PjE/dC0xOjApLG89MTtvPHQ7bysrKWVbby0xXT1hcmd1bWVudHNbb107cmV0dXJuIGEucHJvZHVjZShuLChmdW5jdGlvbihuKXt2YXIgdDtyZXR1cm4odD1pKS5jYWxsLmFwcGx5KHQsW3Isbl0uY29uY2F0KGUpKX0pKX19dmFyIGY7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgaSYmbig2KSx2b2lkIDAhPT1vJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBvJiZuKDcpLHQocikpe3ZhciBjPXcoZSkscz1OKGUscix2b2lkIDApLHY9ITA7dHJ5e2Y9aShzKSx2PSExfWZpbmFsbHl7dj9nKGMpOk8oYyl9cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJmYgaW5zdGFuY2VvZiBQcm9taXNlP2YudGhlbigoZnVuY3Rpb24obil7cmV0dXJuIGooYyxvKSxQKG4sYyl9KSwoZnVuY3Rpb24obil7dGhyb3cgZyhjKSxufSkpOihqKGMsbyksUChmLGMpKX1pZighcnx8XCJvYmplY3RcIiE9dHlwZW9mIHIpe2lmKHZvaWQgMD09PShmPWkocikpJiYoZj1yKSxmPT09SCYmKGY9dm9pZCAwKSxlLkQmJmQoZiwhMCksbyl7dmFyIHA9W10sbD1bXTtiKFwiUGF0Y2hlc1wiKS5NKHIsZixwLGwpLG8ocCxsKX1yZXR1cm4gZn1uKDIxLHIpfSx0aGlzLnByb2R1Y2VXaXRoUGF0Y2hlcz1mdW5jdGlvbihuLHIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pcmV0dXJuIGZ1bmN0aW9uKHIpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGk9QXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKylpW28tMV09YXJndW1lbnRzW29dO3JldHVybiBlLnByb2R1Y2VXaXRoUGF0Y2hlcyhyLChmdW5jdGlvbihyKXtyZXR1cm4gbi5hcHBseSh2b2lkIDAsW3JdLmNvbmNhdChpKSl9KSl9O3ZhciB0LGksbz1lLnByb2R1Y2UobixyLChmdW5jdGlvbihuLHIpe3Q9bixpPXJ9KSk7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb21pc2UmJm8gaW5zdGFuY2VvZiBQcm9taXNlP28udGhlbigoZnVuY3Rpb24obil7cmV0dXJuW24sdCxpXX0pKTpbbyx0LGldfSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXI/dm9pZCAwOnIudXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyhyLnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09cj92b2lkIDA6ci5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKHIuYXV0b0ZyZWV6ZSl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkuY3JlYXRlRHJhZnQ9ZnVuY3Rpb24oZSl7dChlKXx8big4KSxyKGUpJiYoZT1SKGUpKTt2YXIgaT13KHRoaXMpLG89Tih0aGlzLGUsdm9pZCAwKTtyZXR1cm4gb1tRXS5DPSEwLE8oaSksb30saS5maW5pc2hEcmFmdD1mdW5jdGlvbihyLHQpe3ZhciBlPXImJnJbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGUmJmUuQ3x8big5KSxlLkkmJm4oMTApKTt2YXIgaT1lLkE7cmV0dXJuIGooaSx0KSxQKHZvaWQgMCxpKX0saS5zZXRBdXRvRnJlZXplPWZ1bmN0aW9uKG4pe3RoaXMuRD1ufSxpLnNldFVzZVByb3hpZXM9ZnVuY3Rpb24ocil7ciYmIUImJm4oMjApLHRoaXMuTz1yfSxpLmFwcGx5UGF0Y2hlcz1mdW5jdGlvbihuLHQpe3ZhciBlO2ZvcihlPXQubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciBpPXRbZV07aWYoMD09PWkucGF0aC5sZW5ndGgmJlwicmVwbGFjZVwiPT09aS5vcCl7bj1pLnZhbHVlO2JyZWFrfX1lPi0xJiYodD10LnNsaWNlKGUrMSkpO3ZhciBvPWIoXCJQYXRjaGVzXCIpLiQ7cmV0dXJuIHIobik/byhuLHQpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHQpfSkpfSxlfSgpLGFuPW5ldyB1bixmbj1hbi5wcm9kdWNlLGNuPWFuLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKGFuKSxzbj1hbi5zZXRBdXRvRnJlZXplLmJpbmQoYW4pLHZuPWFuLnNldFVzZVByb3hpZXMuYmluZChhbikscG49YW4uYXBwbHlQYXRjaGVzLmJpbmQoYW4pLGxuPWFuLmNyZWF0ZURyYWZ0LmJpbmQoYW4pLGRuPWFuLmZpbmlzaERyYWZ0LmJpbmQoYW4pO2V4cG9ydCBkZWZhdWx0IGZuO2V4cG9ydHt1biBhcyBJbW1lcixwbiBhcyBhcHBseVBhdGNoZXMsSyBhcyBjYXN0RHJhZnQsJCBhcyBjYXN0SW1tdXRhYmxlLGxuIGFzIGNyZWF0ZURyYWZ0LFIgYXMgY3VycmVudCxKIGFzIGVuYWJsZUFsbFBsdWdpbnMsRiBhcyBlbmFibGVFUzUsQyBhcyBlbmFibGVNYXBTZXQsVCBhcyBlbmFibGVQYXRjaGVzLGRuIGFzIGZpbmlzaERyYWZ0LGQgYXMgZnJlZXplLEwgYXMgaW1tZXJhYmxlLHIgYXMgaXNEcmFmdCx0IGFzIGlzRHJhZnRhYmxlLEggYXMgbm90aGluZyxlIGFzIG9yaWdpbmFsLGZuIGFzIHByb2R1Y2UsY24gYXMgcHJvZHVjZVdpdGhQYXRjaGVzLHNuIGFzIHNldEF1dG9GcmVlemUsdm4gYXMgc2V0VXNlUHJveGllc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5lc20uanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vY29yZS9DdXN0b21SZWFjdFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKTtcbmlmIChyb290KSB7XG4gICAgcmVuZGVyKHJvb3QsIENvbnRhaW5lcilcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==