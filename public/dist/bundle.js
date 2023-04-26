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
        const minimizeBtnCallback = () => {
            alert('yahoo!');
        };
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./public/src/reducer/modals/action.ts");
/* harmony import */ var _core_CustomReact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/CustomReact */ "./public/src/core/CustomReact.ts");



const initialState = {
    modals: [],
};
const modalStateSelector = (state) => {
    return state.modalReducer;
};
const modalsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, builder => builder.addCase(_action__WEBPACK_IMPORTED_MODULE_0__.addModal, (state, action) => {
    state.modals.push(action.payload);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_1__._render)();
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _global_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/reducer */ "./public/src/reducer/global/reducer.ts");
/* harmony import */ var _modals_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals/reducer */ "./public/src/reducer/modals/reducer.ts");



const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
    global: _global_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
    modals: _modals_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
});
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
    reducer: rootReducer,
    devTools: true,
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YS8uL25vZGVfbW9kdWxlcy9AcmVkdXhqcy90b29sa2l0L2Rpc3QvcmVkdXgtdG9vbGtpdC5lc20uanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvZGVmYXVsdE1lbW9pemUuanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9yZXNlbGVjdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL2NvbnN0YW50cy9jb21wb25lbnRzL2NvbW1vbi9pY29uLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL0FwcC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2NvbW1vbi9JY29ucy50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL2NvbW1vbi9XaW5kb3dNb2RhbC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb21wb25lbnRzL25hdi9OYXYudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9uYXYvTmF2SXRlbS50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9jb3JlL0N1c3RvbVJlYWN0LnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL3JlZHVjZXIvZ2xvYmFsL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9yZWR1Y2VyL2dsb2JhbC9hY3Rpb25UeXBlLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL3JlZHVjZXIvZ2xvYmFsL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvcmVkdWNlci9tb2RhbHMvYWN0aW9uLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL3JlZHVjZXIvbW9kYWxzL2FjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvcmVkdWNlci9tb2RhbHMvcmVkdWNlci50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9yZWR1Y2VyL3N0b3JlLnRzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL3V0aWxzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zLWV2ZW50LWhlbHBlci50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMi5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLm1qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9wdWJsaWMvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufTtcclxudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcclxudmFyIF9fZGVmUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcclxudmFyIF9fZ2V0T3duUHJvcERlc2NzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM7XHJcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcclxudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xyXG52YXIgX19kZWZOb3JtYWxQcm9wID0gZnVuY3Rpb24gKG9iaiwga2V5LCB2YWx1ZSkgeyByZXR1cm4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlOyB9O1xyXG52YXIgX19zcHJlYWRWYWx1ZXMgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxyXG4gICAgICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcclxuICAgICAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xyXG4gICAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IF9fZ2V0T3duUHJvcFN5bWJvbHMoYik7IF9pIDwgX2MubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wID0gX2NbX2ldO1xyXG4gICAgICAgICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXHJcbiAgICAgICAgICAgICAgICBfX2RlZk5vcm1hbFByb3AoYSwgcHJvcCwgYltwcm9wXSk7XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIGE7XHJcbn07XHJcbnZhciBfX3NwcmVhZFByb3BzID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIF9fZGVmUHJvcHMoYSwgX19nZXRPd25Qcm9wRGVzY3MoYikpOyB9O1xyXG52YXIgX19hc3luYyA9IGZ1bmN0aW9uIChfX3RoaXMsIF9fYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIGZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciByZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc3RlcChnZW5lcmF0b3IudGhyb3codmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc3RlcCA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4LmRvbmUgPyByZXNvbHZlKHgudmFsdWUpIDogUHJvbWlzZS5yZXNvbHZlKHgudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH07XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KF9fdGhpcywgX19hcmd1bWVudHMpKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbi8vIHNyYy9pbmRleC50c1xyXG5pbXBvcnQgeyBlbmFibGVFUzUgfSBmcm9tIFwiaW1tZXJcIjtcclxuZXhwb3J0ICogZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdDIsIGN1cnJlbnQgYXMgY3VycmVudDIsIGZyZWV6ZSwgb3JpZ2luYWwsIGlzRHJhZnQgYXMgaXNEcmFmdDQgfSBmcm9tIFwiaW1tZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgYXMgY3JlYXRlU2VsZWN0b3IyIH0gZnJvbSBcInJlc2VsZWN0XCI7XHJcbi8vIHNyYy9jcmVhdGVEcmFmdFNhZmVTZWxlY3Rvci50c1xyXG5pbXBvcnQgeyBjdXJyZW50LCBpc0RyYWZ0IH0gZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcInJlc2VsZWN0XCI7XHJcbnZhciBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhcmdzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBzZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICB2YXIgd3JhcHBlZFNlbGVjdG9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHJlc3QgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICByZXN0W19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZWN0b3IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtpc0RyYWZ0KHZhbHVlKSA/IGN1cnJlbnQodmFsdWUpIDogdmFsdWVdLCByZXN0KSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHdyYXBwZWRTZWxlY3RvcjtcclxufTtcclxuLy8gc3JjL2NvbmZpZ3VyZVN0b3JlLnRzXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlIGFzIGNvbXBvc2UyLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG4vLyBzcmMvZGV2dG9vbHNFeHRlbnNpb24udHNcclxuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG52YXIgY29tcG9zZVdpdGhEZXZUb29scyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvc2U7XHJcbiAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xyXG59O1xyXG52YXIgZGV2VG9vbHNFbmhhbmNlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyA6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobm9vcDIpIHtcclxuICAgICAgICByZXR1cm4gbm9vcDI7XHJcbiAgICB9O1xyXG59O1xyXG4vLyBzcmMvaXNQbGFpbk9iamVjdC50c1xyXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbiAgICBpZiAocHJvdG8gPT09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB2YXIgYmFzZVByb3RvID0gcHJvdG87XHJcbiAgICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90bykgIT09IG51bGwpIHtcclxuICAgICAgICBiYXNlUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYmFzZVByb3RvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcm90byA9PT0gYmFzZVByb3RvO1xyXG59XHJcbi8vIHNyYy9nZXREZWZhdWx0TWlkZGxld2FyZS50c1xyXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG4vLyBzcmMvdXRpbHMudHNcclxuaW1wb3J0IGNyZWF0ZU5leHRTdGF0ZSwgeyBpc0RyYWZ0YWJsZSB9IGZyb20gXCJpbW1lclwiO1xyXG5mdW5jdGlvbiBnZXRUaW1lTWVhc3VyZVV0aWxzKG1heERlbGF5LCBmbk5hbWUpIHtcclxuICAgIHZhciBlbGFwc2VkID0gMDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVhc3VyZVRpbWU6IGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICBlbGFwc2VkICs9IGZpbmlzaGVkIC0gc3RhcnRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FybklmRXhjZWVkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBtYXhEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGZuTmFtZSArIFwiIHRvb2sgXCIgKyBlbGFwc2VkICsgXCJtcywgd2hpY2ggaXMgbW9yZSB0aGFuIHRoZSB3YXJuaW5nIHRocmVzaG9sZCBvZiBcIiArIG1heERlbGF5ICsgXCJtcy4gXFxuSWYgeW91ciBzdGF0ZSBvciBhY3Rpb25zIGFyZSB2ZXJ5IGxhcmdlLCB5b3UgbWF5IHdhbnQgdG8gZGlzYWJsZSB0aGUgbWlkZGxld2FyZSBhcyBpdCBtaWdodCBjYXVzZSB0b28gbXVjaCBvZiBhIHNsb3dkb3duIGluIGRldmVsb3BtZW50IG1vZGUuIFNlZSBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9nZXREZWZhdWx0TWlkZGxld2FyZSBmb3IgaW5zdHJ1Y3Rpb25zLlxcbkl0IGlzIGRpc2FibGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzLCBzbyB5b3UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCB0aGF0LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxudmFyIE1pZGRsZXdhcmVBcnJheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhNaWRkbGV3YXJlQXJyYXksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBNaWRkbGV3YXJlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmdzKSB8fCB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgTWlkZGxld2FyZUFycmF5LnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1pZGRsZXdhcmVBcnJheSwgU3ltYm9sLnNwZWNpZXMsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1pZGRsZXdhcmVBcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJyW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmNvbmNhdC5hcHBseSh0aGlzLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIE1pZGRsZXdhcmVBcnJheS5wcm90b3R5cGUucHJlcGVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJyW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoYXJyWzBdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IChNaWRkbGV3YXJlQXJyYXkuYmluZC5hcHBseShNaWRkbGV3YXJlQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyclswXS5jb25jYXQodGhpcykpKSkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoTWlkZGxld2FyZUFycmF5LmJpbmQuYXBwbHkoTWlkZGxld2FyZUFycmF5LCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcnIuY29uY2F0KHRoaXMpKSkpKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1pZGRsZXdhcmVBcnJheTtcclxufShBcnJheSkpO1xyXG52YXIgRW5oYW5jZXJBcnJheSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhFbmhhbmNlckFycmF5LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gRW5oYW5jZXJBcnJheSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3MpIHx8IHRoaXM7XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBFbmhhbmNlckFycmF5LnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIF90aGlzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVuaGFuY2VyQXJyYXksIFN5bWJvbC5zcGVjaWVzLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbmhhbmNlckFycmF5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIEVuaGFuY2VyQXJyYXkucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJyID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJyW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLmNvbmNhdC5hcHBseSh0aGlzLCBhcnIpO1xyXG4gICAgfTtcclxuICAgIEVuaGFuY2VyQXJyYXkucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyclswXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoRW5oYW5jZXJBcnJheS5iaW5kLmFwcGx5KEVuaGFuY2VyQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyclswXS5jb25jYXQodGhpcykpKSkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoRW5oYW5jZXJBcnJheS5iaW5kLmFwcGx5KEVuaGFuY2VyQXJyYXksIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGFyci5jb25jYXQodGhpcykpKSkoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRW5oYW5jZXJBcnJheTtcclxufShBcnJheSkpO1xyXG5mdW5jdGlvbiBmcmVlemVEcmFmdGFibGUodmFsKSB7XHJcbiAgICByZXR1cm4gaXNEcmFmdGFibGUodmFsKSA/IGNyZWF0ZU5leHRTdGF0ZSh2YWwsIGZ1bmN0aW9uICgpIHtcclxuICAgIH0pIDogdmFsO1xyXG59XHJcbi8vIHNyYy9pbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUudHNcclxudmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxudmFyIHByZWZpeCA9IFwiSW52YXJpYW50IGZhaWxlZFwiO1xyXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XHJcbiAgICBpZiAoY29uZGl0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIFwiOiBcIiArIChtZXNzYWdlIHx8IFwiXCIpKTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqLCBzZXJpYWxpemVyLCBpbmRlbnQsIGRlY3ljbGVyKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpLCBpbmRlbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZShzZXJpYWxpemVyLCBkZWN5Y2xlcikge1xyXG4gICAgdmFyIHN0YWNrID0gW10sIGtleXMgPSBbXTtcclxuICAgIGlmICghZGVjeWNsZXIpXHJcbiAgICAgICAgZGVjeWNsZXIgPSBmdW5jdGlvbiAoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHN0YWNrWzBdID09PSB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIltDaXJjdWxhciB+XVwiO1xyXG4gICAgICAgICAgICByZXR1cm4gXCJbQ2lyY3VsYXIgfi5cIiArIGtleXMuc2xpY2UoMCwgc3RhY2suaW5kZXhPZih2YWx1ZSkpLmpvaW4oXCIuXCIpICsgXCJdXCI7XHJcbiAgICAgICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGlzUG9zID0gc3RhY2suaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAgICAgfnRoaXNQb3MgPyBzdGFjay5zcGxpY2UodGhpc1BvcyArIDEpIDogc3RhY2sucHVzaCh0aGlzKTtcclxuICAgICAgICAgICAgfnRoaXNQb3MgPyBrZXlzLnNwbGljZSh0aGlzUG9zLCBJbmZpbml0eSwga2V5KSA6IGtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICBpZiAofnN0YWNrLmluZGV4T2YodmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkZWN5Y2xlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHN0YWNrLnB1c2godmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBzZXJpYWxpemVyID09IG51bGwgPyB2YWx1ZSA6IHNlcmlhbGl6ZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNJbW11dGFibGVEZWZhdWx0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09IG51bGwgfHwgT2JqZWN0LmlzRnJvemVuKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiB0cmFja0Zvck11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaikge1xyXG4gICAgdmFyIHRyYWNrZWRQcm9wZXJ0aWVzID0gdHJhY2tQcm9wZXJ0aWVzKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgb2JqKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGV0ZWN0TXV0YXRpb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCB0cmFja2VkUHJvcGVydGllcywgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaiwgcGF0aCkge1xyXG4gICAgaWYgKGlnbm9yZVBhdGhzID09PSB2b2lkIDApIHsgaWdub3JlUGF0aHMgPSBbXTsgfVxyXG4gICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gXCJcIjsgfVxyXG4gICAgdmFyIHRyYWNrZWQgPSB7IHZhbHVlOiBvYmogfTtcclxuICAgIGlmICghaXNJbW11dGFibGUob2JqKSkge1xyXG4gICAgICAgIHRyYWNrZWQuY2hpbGRyZW4gPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlUGF0aHMubGVuZ3RoICYmIGlnbm9yZVBhdGhzLmluZGV4T2YoY2hpbGRQYXRoKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyYWNrZWQuY2hpbGRyZW5ba2V5XSA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9ialtrZXldLCBjaGlsZFBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cmFja2VkO1xyXG59XHJcbmZ1bmN0aW9uIGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzLCB0cmFja2VkUHJvcGVydHksIG9iaiwgc2FtZVBhcmVudFJlZiwgcGF0aCkge1xyXG4gICAgaWYgKGlnbm9yZWRQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZWRQYXRocyA9IFtdOyB9XHJcbiAgICBpZiAoc2FtZVBhcmVudFJlZiA9PT0gdm9pZCAwKSB7IHNhbWVQYXJlbnRSZWYgPSBmYWxzZTsgfVxyXG4gICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gXCJcIjsgfVxyXG4gICAgdmFyIHByZXZPYmogPSB0cmFja2VkUHJvcGVydHkgPyB0cmFja2VkUHJvcGVydHkudmFsdWUgOiB2b2lkIDA7XHJcbiAgICB2YXIgc2FtZVJlZiA9IHByZXZPYmogPT09IG9iajtcclxuICAgIGlmIChzYW1lUGFyZW50UmVmICYmICFzYW1lUmVmICYmICFOdW1iZXIuaXNOYU4ob2JqKSkge1xyXG4gICAgICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IHRydWUsIHBhdGg6IHBhdGggfTtcclxuICAgIH1cclxuICAgIGlmIChpc0ltbXV0YWJsZShwcmV2T2JqKSB8fCBpc0ltbXV0YWJsZShvYmopKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogZmFsc2UgfTtcclxuICAgIH1cclxuICAgIHZhciBrZXlzVG9EZXRlY3QgPSB7fTtcclxuICAgIGZvciAodmFyIGtleSBpbiB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW4pIHtcclxuICAgICAgICBrZXlzVG9EZXRlY3Rba2V5XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGhhc0lnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocy5sZW5ndGggPiAwO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIG5lc3RlZFBhdGggPSBwYXRoID8gcGF0aCArIFwiLlwiICsga2V5IDoga2V5O1xyXG4gICAgICAgIGlmIChoYXNJZ25vcmVkUGF0aHMpIHtcclxuICAgICAgICAgICAgdmFyIGhhc01hdGNoZXMgPSBpZ25vcmVkUGF0aHMuc29tZShmdW5jdGlvbiAoaWdub3JlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZWQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlZC50ZXN0KG5lc3RlZFBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5lc3RlZFBhdGggPT09IGlnbm9yZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2hlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVzdWx0ID0gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVkUGF0aHMsIHRyYWNrZWRQcm9wZXJ0eS5jaGlsZHJlbltrZXldLCBvYmpba2V5XSwgc2FtZVJlZiwgbmVzdGVkUGF0aCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC53YXNNdXRhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHQgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIGtleXNUb0RldGVjdCkge1xyXG4gICAgICAgIHZhciBzdGF0ZV8xID0gX2xvb3BfMShrZXkpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMSA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzEudmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyB3YXNNdXRhdGVkOiBmYWxzZSB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gbmV4dChhY3Rpb24pOyB9OyB9OyB9O1xyXG4gICAgfVxyXG4gICAgdmFyIF9jID0gb3B0aW9ucy5pc0ltbXV0YWJsZSwgaXNJbW11dGFibGUgPSBfYyA9PT0gdm9pZCAwID8gaXNJbW11dGFibGVEZWZhdWx0IDogX2MsIGlnbm9yZWRQYXRocyA9IG9wdGlvbnMuaWdub3JlZFBhdGhzLCBfZCA9IG9wdGlvbnMud2FybkFmdGVyLCB3YXJuQWZ0ZXIgPSBfZCA9PT0gdm9pZCAwID8gMzIgOiBfZCwgaWdub3JlID0gb3B0aW9ucy5pZ25vcmU7XHJcbiAgICBpZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMgfHwgaWdub3JlO1xyXG4gICAgdmFyIHRyYWNrID0gdHJhY2tGb3JNdXRhdGlvbnMuYmluZChudWxsLCBpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICB2YXIgZ2V0U3RhdGUgPSBfYy5nZXRTdGF0ZTtcclxuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgIHZhciB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKHdhcm5BZnRlciwgXCJJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVcIik7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cmFja2VyLmRldGVjdE11dGF0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcclxuICAgICAgICAgICAgICAgIGludmFyaWFudCghcmVzdWx0Lndhc011dGF0ZWQsIFwiQSBzdGF0ZSBtdXRhdGlvbiB3YXMgZGV0ZWN0ZWQgYmV0d2VlbiBkaXNwYXRjaGVzLCBpbiB0aGUgcGF0aCAnXCIgKyAocmVzdWx0LnBhdGggfHwgXCJcIikgKyBcIicuICBUaGlzIG1heSBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3IuIChodHRwczovL3JlZHV4LmpzLm9yZy9zdHlsZS1ndWlkZS9zdHlsZS1ndWlkZSNkby1ub3QtbXV0YXRlLXN0YXRlKVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBkaXNwYXRjaGVkQWN0aW9uID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJhY2tlci5kZXRlY3RNdXRhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQud2FzTXV0YXRlZCAmJiBpbnZhcmlhbnQoIXJlc3VsdC53YXNNdXRhdGVkLCBcIkEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGluc2lkZSBhIGRpc3BhdGNoLCBpbiB0aGUgcGF0aDogXCIgKyAocmVzdWx0LnBhdGggfHwgXCJcIikgKyBcIi4gVGFrZSBhIGxvb2sgYXQgdGhlIHJlZHVjZXIocykgaGFuZGxpbmcgdGhlIGFjdGlvbiBcIiArIHN0cmluZ2lmeShhY3Rpb24pICsgXCIuIChodHRwczovL3JlZHV4LmpzLm9yZy9zdHlsZS1ndWlkZS9zdHlsZS1ndWlkZSNkby1ub3QtbXV0YXRlLXN0YXRlKVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy53YXJuSWZFeGNlZWRlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2hlZEFjdGlvbjtcclxuICAgICAgICB9OyB9O1xyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvc2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzXHJcbmZ1bmN0aW9uIGlzUGxhaW4odmFsKSB7XHJcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XHJcbiAgICByZXR1cm4gdmFsID09IG51bGwgfHwgdHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlID09PSBcImJvb2xlYW5cIiB8fCB0eXBlID09PSBcIm51bWJlclwiIHx8IEFycmF5LmlzQXJyYXkodmFsKSB8fCBpc1BsYWluT2JqZWN0KHZhbCk7XHJcbn1cclxuZnVuY3Rpb24gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKHZhbHVlLCBwYXRoLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzLCBjYWNoZSkge1xyXG4gICAgaWYgKHBhdGggPT09IHZvaWQgMCkgeyBwYXRoID0gXCJcIjsgfVxyXG4gICAgaWYgKGlzU2VyaWFsaXphYmxlID09PSB2b2lkIDApIHsgaXNTZXJpYWxpemFibGUgPSBpc1BsYWluOyB9XHJcbiAgICBpZiAoaWdub3JlZFBhdGhzID09PSB2b2lkIDApIHsgaWdub3JlZFBhdGhzID0gW107IH1cclxuICAgIHZhciBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZTtcclxuICAgIGlmICghaXNTZXJpYWxpemFibGUodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2V5UGF0aDogcGF0aCB8fCBcIjxyb290PlwiLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChjYWNoZSA9PSBudWxsID8gdm9pZCAwIDogY2FjaGUuaGFzKHZhbHVlKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgZW50cmllcyA9IGdldEVudHJpZXMgIT0gbnVsbCA/IGdldEVudHJpZXModmFsdWUpIDogT2JqZWN0LmVudHJpZXModmFsdWUpO1xyXG4gICAgdmFyIGhhc0lnbm9yZWRQYXRocyA9IGlnbm9yZWRQYXRocy5sZW5ndGggPiAwO1xyXG4gICAgdmFyIF9sb29wXzIgPSBmdW5jdGlvbiAoa2V5LCBuZXN0ZWRWYWx1ZSkge1xyXG4gICAgICAgIHZhciBuZXN0ZWRQYXRoID0gcGF0aCA/IHBhdGggKyBcIi5cIiArIGtleSA6IGtleTtcclxuICAgICAgICBpZiAoaGFzSWdub3JlZFBhdGhzKSB7XHJcbiAgICAgICAgICAgIHZhciBoYXNNYXRjaGVzID0gaWdub3JlZFBhdGhzLnNvbWUoZnVuY3Rpb24gKGlnbm9yZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVkIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlnbm9yZWQudGVzdChuZXN0ZWRQYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXN0ZWRQYXRoID09PSBpZ25vcmVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGhhc01hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1NlcmlhbGl6YWJsZShuZXN0ZWRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXlQYXRoOiBuZXN0ZWRQYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXN0ZWRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgfSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIG5lc3RlZFZhbHVlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKG5lc3RlZFZhbHVlLCBuZXN0ZWRQYXRoLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzLCBjYWNoZSk7XHJcbiAgICAgICAgICAgIGlmIChmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGZvdW5kTmVzdGVkU2VyaWFsaXphYmxlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBlbnRyaWVzXzEgPSBlbnRyaWVzOyBfaSA8IGVudHJpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgX2MgPSBlbnRyaWVzXzFbX2ldLCBrZXkgPSBfY1swXSwgbmVzdGVkVmFsdWUgPSBfY1sxXTtcclxuICAgICAgICB2YXIgc3RhdGVfMiA9IF9sb29wXzIoa2V5LCBuZXN0ZWRWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZV8yID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVfMi52YWx1ZTtcclxuICAgIH1cclxuICAgIGlmIChjYWNoZSAmJiBpc05lc3RlZEZyb3plbih2YWx1ZSkpXHJcbiAgICAgICAgY2FjaGUuYWRkKHZhbHVlKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBpc05lc3RlZEZyb3plbih2YWx1ZSkge1xyXG4gICAgaWYgKCFPYmplY3QuaXNGcm96ZW4odmFsdWUpKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgX2MgPSBPYmplY3QudmFsdWVzKHZhbHVlKTsgX2kgPCBfYy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgbmVzdGVkVmFsdWUgPSBfY1tfaV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXN0ZWRWYWx1ZSAhPT0gXCJvYmplY3RcIiB8fCBuZXN0ZWRWYWx1ZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKCFpc05lc3RlZEZyb3plbihuZXN0ZWRWYWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gbmV4dChhY3Rpb24pOyB9OyB9OyB9O1xyXG4gICAgfVxyXG4gICAgdmFyIF9jID0gb3B0aW9ucy5pc1NlcmlhbGl6YWJsZSwgaXNTZXJpYWxpemFibGUgPSBfYyA9PT0gdm9pZCAwID8gaXNQbGFpbiA6IF9jLCBnZXRFbnRyaWVzID0gb3B0aW9ucy5nZXRFbnRyaWVzLCBfZCA9IG9wdGlvbnMuaWdub3JlZEFjdGlvbnMsIGlnbm9yZWRBY3Rpb25zID0gX2QgPT09IHZvaWQgMCA/IFtdIDogX2QsIF9lID0gb3B0aW9ucy5pZ25vcmVkQWN0aW9uUGF0aHMsIGlnbm9yZWRBY3Rpb25QYXRocyA9IF9lID09PSB2b2lkIDAgPyBbXCJtZXRhLmFyZ1wiLCBcIm1ldGEuYmFzZVF1ZXJ5TWV0YVwiXSA6IF9lLCBfZiA9IG9wdGlvbnMuaWdub3JlZFBhdGhzLCBpZ25vcmVkUGF0aHMgPSBfZiA9PT0gdm9pZCAwID8gW10gOiBfZiwgX2cgPSBvcHRpb25zLndhcm5BZnRlciwgd2FybkFmdGVyID0gX2cgPT09IHZvaWQgMCA/IDMyIDogX2csIF9oID0gb3B0aW9ucy5pZ25vcmVTdGF0ZSwgaWdub3JlU3RhdGUgPSBfaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaCwgX2ogPSBvcHRpb25zLmlnbm9yZUFjdGlvbnMsIGlnbm9yZUFjdGlvbnMgPSBfaiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfaiwgX2sgPSBvcHRpb25zLmRpc2FibGVDYWNoZSwgZGlzYWJsZUNhY2hlID0gX2sgPT09IHZvaWQgMCA/IGZhbHNlIDogX2s7XHJcbiAgICB2YXIgY2FjaGUgPSAhZGlzYWJsZUNhY2hlICYmIFdlYWtTZXQgPyBuZXcgV2Vha1NldCgpIDogdm9pZCAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yZUFQSSkgeyByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgIHZhciBtZWFzdXJlVXRpbHMgPSBnZXRUaW1lTWVhc3VyZVV0aWxzKHdhcm5BZnRlciwgXCJTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmVcIik7XHJcbiAgICAgICAgaWYgKCFpZ25vcmVBY3Rpb25zICYmICEoaWdub3JlZEFjdGlvbnMubGVuZ3RoICYmIGlnbm9yZWRBY3Rpb25zLmluZGV4T2YoYWN0aW9uLnR5cGUpICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKGFjdGlvbiwgXCJcIiwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRBY3Rpb25QYXRocywgY2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5UGF0aCA9IGZvdW5kQWN0aW9uTm9uU2VyaWFsaXphYmxlVmFsdWUua2V5UGF0aCwgdmFsdWUgPSBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIGFuIGFjdGlvbiwgaW4gdGhlIHBhdGg6IGBcIiArIGtleVBhdGggKyBcImAuIFZhbHVlOlwiLCB2YWx1ZSwgXCJcXG5UYWtlIGEgbG9vayBhdCB0aGUgbG9naWMgdGhhdCBkaXNwYXRjaGVkIHRoaXMgYWN0aW9uOiBcIiwgYWN0aW9uLCBcIlxcbihTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvZmFxL2FjdGlvbnMjd2h5LXNob3VsZC10eXBlLWJlLWEtc3RyaW5nLW9yLWF0LWxlYXN0LXNlcmlhbGl6YWJsZS13aHktc2hvdWxkLW15LWFjdGlvbi10eXBlcy1iZS1jb25zdGFudHMpXCIsIFwiXFxuKFRvIGFsbG93IG5vbi1zZXJpYWxpemFibGUgdmFsdWVzIHNlZTogaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy91c2FnZS91c2FnZS1ndWlkZSN3b3JraW5nLXdpdGgtbm9uLXNlcmlhbGl6YWJsZS1kYXRhKVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaWdub3JlU3RhdGUpIHtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHN0b3JlQVBJLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlID0gZmluZE5vblNlcmlhbGl6YWJsZVZhbHVlKHN0YXRlLCBcIlwiLCBpc1NlcmlhbGl6YWJsZSwgZ2V0RW50cmllcywgaWdub3JlZFBhdGhzLCBjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUua2V5UGF0aCwgdmFsdWUgPSBmb3VuZFN0YXRlTm9uU2VyaWFsaXphYmxlVmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkEgbm9uLXNlcmlhbGl6YWJsZSB2YWx1ZSB3YXMgZGV0ZWN0ZWQgaW4gdGhlIHN0YXRlLCBpbiB0aGUgcGF0aDogYFwiICsga2V5UGF0aCArIFwiYC4gVmFsdWU6XCIsIHZhbHVlLCBcIlxcblRha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoaXMgYWN0aW9uIHR5cGU6IFwiICsgYWN0aW9uLnR5cGUgKyBcIi5cXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9vcmdhbml6aW5nLXN0YXRlI2Nhbi1pLXB1dC1mdW5jdGlvbnMtcHJvbWlzZXMtb3Itb3RoZXItbm9uLXNlcmlhbGl6YWJsZS1pdGVtcy1pbi1teS1zdG9yZS1zdGF0ZSlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07IH07IH07XHJcbn1cclxuLy8gc3JjL2dldERlZmF1bHRNaWRkbGV3YXJlLnRzXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih4KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHggPT09IFwiYm9vbGVhblwiO1xyXG59XHJcbmZ1bmN0aW9uIGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUob3B0aW9ucyk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgX2MgPSBvcHRpb25zLnRodW5rLCB0aHVuayA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5pbW11dGFibGVDaGVjaywgaW1tdXRhYmxlQ2hlY2sgPSBfZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9kLCBfZSA9IG9wdGlvbnMuc2VyaWFsaXphYmxlQ2hlY2ssIHNlcmlhbGl6YWJsZUNoZWNrID0gX2UgPT09IHZvaWQgMCA/IHRydWUgOiBfZTtcclxuICAgIHZhciBtaWRkbGV3YXJlQXJyYXkgPSBuZXcgTWlkZGxld2FyZUFycmF5KCk7XHJcbiAgICBpZiAodGh1bmspIHtcclxuICAgICAgICBpZiAoaXNCb29sZWFuKHRodW5rKSkge1xyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaCh0aHVua01pZGRsZXdhcmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2godGh1bmtNaWRkbGV3YXJlLndpdGhFeHRyYUFyZ3VtZW50KHRodW5rLmV4dHJhQXJndW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKGltbXV0YWJsZUNoZWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbW11dGFibGVPcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIGlmICghaXNCb29sZWFuKGltbXV0YWJsZUNoZWNrKSkge1xyXG4gICAgICAgICAgICAgICAgaW1tdXRhYmxlT3B0aW9ucyA9IGltbXV0YWJsZUNoZWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS51bnNoaWZ0KGNyZWF0ZUltbXV0YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZShpbW11dGFibGVPcHRpb25zKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZXJpYWxpemFibGVDaGVjaykge1xyXG4gICAgICAgICAgICB2YXIgc2VyaWFsaXphYmxlT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIWlzQm9vbGVhbihzZXJpYWxpemFibGVDaGVjaykpIHtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSBzZXJpYWxpemFibGVDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkucHVzaChjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoc2VyaWFsaXphYmxlT3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtaWRkbGV3YXJlQXJyYXk7XHJcbn1cclxuLy8gc3JjL2NvbmZpZ3VyZVN0b3JlLnRzXHJcbnZhciBJU19QUk9EVUNUSU9OID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiO1xyXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShvcHRpb25zKSB7XHJcbiAgICB2YXIgY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlID0gY3VycnlHZXREZWZhdWx0TWlkZGxld2FyZSgpO1xyXG4gICAgdmFyIF9jID0gb3B0aW9ucyB8fCB7fSwgX2QgPSBfYy5yZWR1Y2VyLCByZWR1Y2VyID0gX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLCBfZSA9IF9jLm1pZGRsZXdhcmUsIG1pZGRsZXdhcmUgPSBfZSA9PT0gdm9pZCAwID8gY3VycmllZEdldERlZmF1bHRNaWRkbGV3YXJlKCkgOiBfZSwgX2YgPSBfYy5kZXZUb29scywgZGV2VG9vbHMgPSBfZiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9mLCBfZyA9IF9jLnByZWxvYWRlZFN0YXRlLCBwcmVsb2FkZWRTdGF0ZSA9IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZywgX2ggPSBfYy5lbmhhbmNlcnMsIGVuaGFuY2VycyA9IF9oID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaDtcclxuICAgIHZhciByb290UmVkdWNlcjtcclxuICAgIGlmICh0eXBlb2YgcmVkdWNlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcm9vdFJlZHVjZXIgPSByZWR1Y2VyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChyZWR1Y2VyKSkge1xyXG4gICAgICAgIHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcInJlZHVjZXJcIiBpcyBhIHJlcXVpcmVkIGFyZ3VtZW50LCBhbmQgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGFuIG9iamVjdCBvZiBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGNvbWJpbmVSZWR1Y2VycycpO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpbmFsTWlkZGxld2FyZSA9IG1pZGRsZXdhcmU7XHJcbiAgICBpZiAodHlwZW9mIGZpbmFsTWlkZGxld2FyZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgZmluYWxNaWRkbGV3YXJlID0gZmluYWxNaWRkbGV3YXJlKGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSk7XHJcbiAgICAgICAgaWYgKCFJU19QUk9EVUNUSU9OICYmICFBcnJheS5pc0FycmF5KGZpbmFsTWlkZGxld2FyZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwid2hlbiB1c2luZyBhIG1pZGRsZXdhcmUgYnVpbGRlciBmdW5jdGlvbiwgYW4gYXJyYXkgb2YgbWlkZGxld2FyZSBtdXN0IGJlIHJldHVybmVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghSVNfUFJPRFVDVElPTiAmJiBmaW5hbE1pZGRsZXdhcmUuc29tZShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwiZnVuY3Rpb25cIjsgfSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlYWNoIG1pZGRsZXdhcmUgcHJvdmlkZWQgdG8gY29uZmlndXJlU3RvcmUgbXVzdCBiZSBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIG1pZGRsZXdhcmVFbmhhbmNlciA9IGFwcGx5TWlkZGxld2FyZS5hcHBseSh2b2lkIDAsIGZpbmFsTWlkZGxld2FyZSk7XHJcbiAgICB2YXIgZmluYWxDb21wb3NlID0gY29tcG9zZTI7XHJcbiAgICBpZiAoZGV2VG9vbHMpIHtcclxuICAgICAgICBmaW5hbENvbXBvc2UgPSBjb21wb3NlV2l0aERldlRvb2xzKF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICAgICAgdHJhY2U6ICFJU19QUk9EVUNUSU9OXHJcbiAgICAgICAgfSwgdHlwZW9mIGRldlRvb2xzID09PSBcIm9iamVjdFwiICYmIGRldlRvb2xzKSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZGVmYXVsdEVuaGFuY2VycyA9IG5ldyBFbmhhbmNlckFycmF5KG1pZGRsZXdhcmVFbmhhbmNlcik7XHJcbiAgICB2YXIgc3RvcmVFbmhhbmNlcnMgPSBkZWZhdWx0RW5oYW5jZXJzO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZW5oYW5jZXJzKSkge1xyXG4gICAgICAgIHN0b3JlRW5oYW5jZXJzID0gX19zcHJlYWRBcnJheShbbWlkZGxld2FyZUVuaGFuY2VyXSwgZW5oYW5jZXJzKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBlbmhhbmNlcnMgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHN0b3JlRW5oYW5jZXJzID0gZW5oYW5jZXJzKGRlZmF1bHRFbmhhbmNlcnMpO1xyXG4gICAgfVxyXG4gICAgdmFyIGNvbXBvc2VkRW5oYW5jZXIgPSBmaW5hbENvbXBvc2UuYXBwbHkodm9pZCAwLCBzdG9yZUVuaGFuY2Vycyk7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBjb21wb3NlZEVuaGFuY2VyKTtcclxufVxyXG4vLyBzcmMvY3JlYXRlQWN0aW9uLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQWN0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJlcGFyZUFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgcHJlcGFyZWQgPSBwcmVwYXJlQWN0aW9uLmFwcGx5KHZvaWQgMCwgYXJncyk7XHJcbiAgICAgICAgICAgIGlmICghcHJlcGFyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByZXBhcmVBY3Rpb24gZGlkIG5vdCByZXR1cm4gYW4gb2JqZWN0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcHJlcGFyZWQucGF5bG9hZFxyXG4gICAgICAgICAgICB9LCBcIm1ldGFcIiBpbiBwcmVwYXJlZCAmJiB7IG1ldGE6IHByZXBhcmVkLm1ldGEgfSksIFwiZXJyb3JcIiBpbiBwcmVwYXJlZCAmJiB7IGVycm9yOiBwcmVwYXJlZC5lcnJvciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgcGF5bG9hZDogYXJnc1swXSB9O1xyXG4gICAgfVxyXG4gICAgYWN0aW9uQ3JlYXRvci50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFwiXCIgKyB0eXBlOyB9O1xyXG4gICAgYWN0aW9uQ3JlYXRvci50eXBlID0gdHlwZTtcclxuICAgIGFjdGlvbkNyZWF0b3IubWF0Y2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBhY3Rpb24udHlwZSA9PT0gdHlwZTsgfTtcclxuICAgIHJldHVybiBhY3Rpb25DcmVhdG9yO1xyXG59XHJcbmZ1bmN0aW9uIGlzQWN0aW9uKGFjdGlvbikge1xyXG4gICAgcmV0dXJuIGlzUGxhaW5PYmplY3QoYWN0aW9uKSAmJiBcInR5cGVcIiBpbiBhY3Rpb247XHJcbn1cclxuZnVuY3Rpb24gaXNGU0EoYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gaXNBY3Rpb24oYWN0aW9uKSAmJiB0eXBlb2YgYWN0aW9uLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgT2JqZWN0LmtleXMoYWN0aW9uKS5ldmVyeShpc1ZhbGlkS2V5KTtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xyXG4gICAgcmV0dXJuIFtcInR5cGVcIiwgXCJwYXlsb2FkXCIsIFwiZXJyb3JcIiwgXCJtZXRhXCJdLmluZGV4T2Yoa2V5KSA+IC0xO1xyXG59XHJcbmZ1bmN0aW9uIGdldFR5cGUoYWN0aW9uQ3JlYXRvcikge1xyXG4gICAgcmV0dXJuIFwiXCIgKyBhY3Rpb25DcmVhdG9yO1xyXG59XHJcbi8vIHNyYy9jcmVhdGVSZWR1Y2VyLnRzXHJcbmltcG9ydCBjcmVhdGVOZXh0U3RhdGUyLCB7IGlzRHJhZnQgYXMgaXNEcmFmdDIsIGlzRHJhZnRhYmxlIGFzIGlzRHJhZnRhYmxlMiB9IGZyb20gXCJpbW1lclwiO1xyXG4vLyBzcmMvbWFwQnVpbGRlcnMudHNcclxuZnVuY3Rpb24gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2soYnVpbGRlckNhbGxiYWNrKSB7XHJcbiAgICB2YXIgYWN0aW9uc01hcCA9IHt9O1xyXG4gICAgdmFyIGFjdGlvbk1hdGNoZXJzID0gW107XHJcbiAgICB2YXIgZGVmYXVsdENhc2VSZWR1Y2VyO1xyXG4gICAgdmFyIGJ1aWxkZXIgPSB7XHJcbiAgICAgICAgYWRkQ2FzZTogZnVuY3Rpb24gKHR5cGVPckFjdGlvbkNyZWF0b3IsIHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbk1hdGNoZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGRDYXNlYCBzaG91bGQgb25seSBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGJ1aWxkZXIuYWRkTWF0Y2hlcmBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB0eXBlT3JBY3Rpb25DcmVhdG9yID09PSBcInN0cmluZ1wiID8gdHlwZU9yQWN0aW9uQ3JlYXRvciA6IHR5cGVPckFjdGlvbkNyZWF0b3IudHlwZTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgaW4gYWN0aW9uc01hcCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYWRkQ2FzZSBjYW5ub3QgYmUgY2FsbGVkIHdpdGggdHdvIHJlZHVjZXJzIGZvciB0aGUgc2FtZSBhY3Rpb24gdHlwZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25zTWFwW3R5cGVdID0gcmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNYXRjaGVyOiBmdW5jdGlvbiAobWF0Y2hlciwgcmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkTWF0Y2hlcmAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZERlZmF1bHRDYXNlYFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhY3Rpb25NYXRjaGVycy5wdXNoKHsgbWF0Y2hlcjogbWF0Y2hlciwgcmVkdWNlcjogcmVkdWNlciB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGREZWZhdWx0Q2FzZTogZnVuY3Rpb24gKHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZERlZmF1bHRDYXNlYCBjYW4gb25seSBiZSBjYWxsZWQgb25jZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0Q2FzZVJlZHVjZXIgPSByZWR1Y2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYnVpbGRlckNhbGxiYWNrKGJ1aWxkZXIpO1xyXG4gICAgcmV0dXJuIFthY3Rpb25zTWFwLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyXTtcclxufVxyXG4vLyBzcmMvY3JlYXRlUmVkdWNlci50c1xyXG5mdW5jdGlvbiBpc1N0YXRlRnVuY3Rpb24oeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxudmFyIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24gPSBmYWxzZTtcclxuZnVuY3Rpb24gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIG1hcE9yQnVpbGRlckNhbGxiYWNrLCBhY3Rpb25NYXRjaGVycywgZGVmYXVsdENhc2VSZWR1Y2VyKSB7XHJcbiAgICBpZiAoYWN0aW9uTWF0Y2hlcnMgPT09IHZvaWQgMCkgeyBhY3Rpb25NYXRjaGVycyA9IFtdOyB9XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtYXBPckJ1aWxkZXJDYWxsYmFjayA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIG9iamVjdCBub3RhdGlvbiBmb3IgYGNyZWF0ZVJlZHVjZXJgIGlzIGRlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUlRLIDIuMC4gUGxlYXNlIHVzZSB0aGUgJ2J1aWxkZXIgY2FsbGJhY2snIG5vdGF0aW9uIGluc3RlYWQ6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2NyZWF0ZVJlZHVjZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgX2MgPSB0eXBlb2YgbWFwT3JCdWlsZGVyQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKG1hcE9yQnVpbGRlckNhbGxiYWNrKSA6IFttYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl0sIGFjdGlvbnNNYXAgPSBfY1swXSwgZmluYWxBY3Rpb25NYXRjaGVycyA9IF9jWzFdLCBmaW5hbERlZmF1bHRDYXNlUmVkdWNlciA9IF9jWzJdO1xyXG4gICAgdmFyIGdldEluaXRpYWxTdGF0ZTtcclxuICAgIGlmIChpc1N0YXRlRnVuY3Rpb24oaW5pdGlhbFN0YXRlKSkge1xyXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZyZWV6ZURyYWZ0YWJsZShpbml0aWFsU3RhdGUoKSk7IH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgZnJvemVuSW5pdGlhbFN0YXRlXzEgPSBmcmVlemVEcmFmdGFibGUoaW5pdGlhbFN0YXRlKTtcclxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmcm96ZW5Jbml0aWFsU3RhdGVfMTsgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7IHN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlKCk7IH1cclxuICAgICAgICB2YXIgY2FzZVJlZHVjZXJzID0gX19zcHJlYWRBcnJheShbXHJcbiAgICAgICAgICAgIGFjdGlvbnNNYXBbYWN0aW9uLnR5cGVdXHJcbiAgICAgICAgXSwgZmluYWxBY3Rpb25NYXRjaGVycy5maWx0ZXIoZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gX2MubWF0Y2hlcjtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXIoYWN0aW9uKTtcclxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHZhciByZWR1Y2VyMiA9IF9jLnJlZHVjZXI7XHJcbiAgICAgICAgICAgIHJldHVybiByZWR1Y2VyMjtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgaWYgKGNhc2VSZWR1Y2Vycy5maWx0ZXIoZnVuY3Rpb24gKGNyKSB7IHJldHVybiAhIWNyOyB9KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2FzZVJlZHVjZXJzID0gW2ZpbmFsRGVmYXVsdENhc2VSZWR1Y2VyXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhc2VSZWR1Y2Vycy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzU3RhdGUsIGNhc2VSZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZnQyKHByZXZpb3VzU3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyYWZ0ID0gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzRHJhZnRhYmxlMihwcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBjYXNlUmVkdWNlcihwcmV2aW91c1N0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNTdGF0ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJBIGNhc2UgcmVkdWNlciBvbiBhIG5vbi1kcmFmdGFibGUgdmFsdWUgbXVzdCBub3QgcmV0dXJuIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUyKHByZXZpb3VzU3RhdGUsIGZ1bmN0aW9uIChkcmFmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FzZVJlZHVjZXIoZHJhZnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgfSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgcmVkdWNlci5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XHJcbiAgICByZXR1cm4gcmVkdWNlcjtcclxufVxyXG4vLyBzcmMvY3JlYXRlU2xpY2UudHNcclxudmFyIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24yID0gZmFsc2U7XHJcbmZ1bmN0aW9uIGdldFR5cGUyKHNsaWNlLCBhY3Rpb25LZXkpIHtcclxuICAgIHJldHVybiBzbGljZSArIFwiL1wiICsgYWN0aW9uS2V5O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWNlKG9wdGlvbnMpIHtcclxuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lO1xyXG4gICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYG5hbWVgIGlzIGEgcmVxdWlyZWQgb3B0aW9uIGZvciBjcmVhdGVTbGljZVwiKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5pdGlhbFN0YXRlID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYW4gYGluaXRpYWxTdGF0ZWAgdmFsdWUgdGhhdCBpcyBub3QgYHVuZGVmaW5lZGAuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGBpbml0aWFsU3RhdGVgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBpbml0aWFsU3RhdGUgPSB0eXBlb2Ygb3B0aW9ucy5pbml0aWFsU3RhdGUgPT0gXCJmdW5jdGlvblwiID8gb3B0aW9ucy5pbml0aWFsU3RhdGUgOiBmcmVlemVEcmFmdGFibGUob3B0aW9ucy5pbml0aWFsU3RhdGUpO1xyXG4gICAgdmFyIHJlZHVjZXJzID0gb3B0aW9ucy5yZWR1Y2VycyB8fCB7fTtcclxuICAgIHZhciByZWR1Y2VyTmFtZXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XHJcbiAgICB2YXIgc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUgPSB7fTtcclxuICAgIHZhciBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZSA9IHt9O1xyXG4gICAgdmFyIGFjdGlvbkNyZWF0b3JzID0ge307XHJcbiAgICByZWR1Y2VyTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocmVkdWNlck5hbWUpIHtcclxuICAgICAgICB2YXIgbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUgPSByZWR1Y2Vyc1tyZWR1Y2VyTmFtZV07XHJcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlMihuYW1lLCByZWR1Y2VyTmFtZSk7XHJcbiAgICAgICAgdmFyIGNhc2VSZWR1Y2VyO1xyXG4gICAgICAgIHZhciBwcmVwYXJlQ2FsbGJhY2s7XHJcbiAgICAgICAgaWYgKFwicmVkdWNlclwiIGluIG1heWJlUmVkdWNlcldpdGhQcmVwYXJlKSB7XHJcbiAgICAgICAgICAgIGNhc2VSZWR1Y2VyID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucmVkdWNlcjtcclxuICAgICAgICAgICAgcHJlcGFyZUNhbGxiYWNrID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmUucHJlcGFyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNhc2VSZWR1Y2VyID0gbWF5YmVSZWR1Y2VyV2l0aFByZXBhcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lW3JlZHVjZXJOYW1lXSA9IGNhc2VSZWR1Y2VyO1xyXG4gICAgICAgIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlW3R5cGVdID0gY2FzZVJlZHVjZXI7XHJcbiAgICAgICAgYWN0aW9uQ3JlYXRvcnNbcmVkdWNlck5hbWVdID0gcHJlcGFyZUNhbGxiYWNrID8gY3JlYXRlQWN0aW9uKHR5cGUsIHByZXBhcmVDYWxsYmFjaykgOiBjcmVhdGVBY3Rpb24odHlwZSk7XHJcbiAgICB9KTtcclxuICAgIGZ1bmN0aW9uIGJ1aWxkUmVkdWNlcigpIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRPYmplY3ROb3RhdGlvbjIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBvYmplY3Qgbm90YXRpb24gZm9yIGBjcmVhdGVTbGljZS5leHRyYVJlZHVjZXJzYCBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJUSyAyLjAuIFBsZWFzZSB1c2UgdGhlICdidWlsZGVyIGNhbGxiYWNrJyBub3RhdGlvbiBpbnN0ZWFkOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9jcmVhdGVTbGljZVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX2MgPSB0eXBlb2Ygb3B0aW9ucy5leHRyYVJlZHVjZXJzID09PSBcImZ1bmN0aW9uXCIgPyBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhvcHRpb25zLmV4dHJhUmVkdWNlcnMpIDogW29wdGlvbnMuZXh0cmFSZWR1Y2Vyc10sIF9kID0gX2NbMF0sIGV4dHJhUmVkdWNlcnMgPSBfZCA9PT0gdm9pZCAwID8ge30gOiBfZCwgX2UgPSBfY1sxXSwgYWN0aW9uTWF0Y2hlcnMgPSBfZSA9PT0gdm9pZCAwID8gW10gOiBfZSwgX2YgPSBfY1syXSwgZGVmYXVsdENhc2VSZWR1Y2VyID0gX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mO1xyXG4gICAgICAgIHZhciBmaW5hbENhc2VSZWR1Y2VycyA9IF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBleHRyYVJlZHVjZXJzKSwgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGUpO1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgZnVuY3Rpb24gKGJ1aWxkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGZpbmFsQ2FzZVJlZHVjZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFkZENhc2Uoa2V5LCBmaW5hbENhc2VSZWR1Y2Vyc1trZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGFjdGlvbk1hdGNoZXJzXzEgPSBhY3Rpb25NYXRjaGVyczsgX2kgPCBhY3Rpb25NYXRjaGVyc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG0gPSBhY3Rpb25NYXRjaGVyc18xW19pXTtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkTWF0Y2hlcihtLm1hdGNoZXIsIG0ucmVkdWNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5hZGREZWZhdWx0Q2FzZShkZWZhdWx0Q2FzZVJlZHVjZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgX3JlZHVjZXI7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgcmVkdWNlcjogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgaWYgKCFfcmVkdWNlcilcclxuICAgICAgICAgICAgICAgIF9yZWR1Y2VyID0gYnVpbGRSZWR1Y2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBfcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGlvbnM6IGFjdGlvbkNyZWF0b3JzLFxyXG4gICAgICAgIGNhc2VSZWR1Y2Vyczogc2xpY2VDYXNlUmVkdWNlcnNCeU5hbWUsXHJcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghX3JlZHVjZXIpXHJcbiAgICAgICAgICAgICAgICBfcmVkdWNlciA9IGJ1aWxkUmVkdWNlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3JlZHVjZXIuZ2V0SW5pdGlhbFN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvZW50aXR5X3N0YXRlLnRzXHJcbmZ1bmN0aW9uIGdldEluaXRpYWxFbnRpdHlTdGF0ZSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWRzOiBbXSxcclxuICAgICAgICBlbnRpdGllczoge31cclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFN0YXRlRmFjdG9yeSgpIHtcclxuICAgIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZShhZGRpdGlvbmFsU3RhdGUpIHtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbFN0YXRlID09PSB2b2lkIDApIHsgYWRkaXRpb25hbFN0YXRlID0ge307IH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihnZXRJbml0aWFsRW50aXR5U3RhdGUoKSwgYWRkaXRpb25hbFN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGdldEluaXRpYWxTdGF0ZTogZ2V0SW5pdGlhbFN0YXRlIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3N0YXRlX3NlbGVjdG9ycy50c1xyXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnNGYWN0b3J5KCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHNlbGVjdFN0YXRlKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdElkcyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuaWRzOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RFbnRpdGllcyA9IGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGUuZW50aXRpZXM7IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdEFsbCA9IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdElkcywgc2VsZWN0RW50aXRpZXMsIGZ1bmN0aW9uIChpZHMsIGVudGl0aWVzKSB7IHJldHVybiBpZHMubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gZW50aXRpZXNbaWRdOyB9KTsgfSk7XHJcbiAgICAgICAgdmFyIHNlbGVjdElkID0gZnVuY3Rpb24gKF8sIGlkKSB7IHJldHVybiBpZDsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0QnlJZCA9IGZ1bmN0aW9uIChlbnRpdGllcywgaWQpIHsgcmV0dXJuIGVudGl0aWVzW2lkXTsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0VG90YWwgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RJZHMsIGZ1bmN0aW9uIChpZHMpIHsgcmV0dXJuIGlkcy5sZW5ndGg7IH0pO1xyXG4gICAgICAgIGlmICghc2VsZWN0U3RhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdElkczogc2VsZWN0SWRzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdEVudGl0aWVzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0QWxsOiBzZWxlY3RBbGwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUb3RhbDogc2VsZWN0VG90YWwsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RCeUlkOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RFbnRpdGllcywgc2VsZWN0SWQsIHNlbGVjdEJ5SWQpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0RW50aXRpZXMpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNlbGVjdElkczogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdElkcyksXHJcbiAgICAgICAgICAgIHNlbGVjdEVudGl0aWVzOiBzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsXHJcbiAgICAgICAgICAgIHNlbGVjdEFsbDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdEFsbCksXHJcbiAgICAgICAgICAgIHNlbGVjdFRvdGFsOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RTdGF0ZSwgc2VsZWN0VG90YWwpLFxyXG4gICAgICAgICAgICBzZWxlY3RCeUlkOiBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RHbG9iYWxpemVkRW50aXRpZXMsIHNlbGVjdElkLCBzZWxlY3RCeUlkKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBnZXRTZWxlY3RvcnM6IGdldFNlbGVjdG9ycyB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9zdGF0ZV9hZGFwdGVyLnRzXHJcbmltcG9ydCBjcmVhdGVOZXh0U3RhdGUzLCB7IGlzRHJhZnQgYXMgaXNEcmFmdDMgfSBmcm9tIFwiaW1tZXJcIjtcclxuZnVuY3Rpb24gY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcclxuICAgIHZhciBvcGVyYXRvciA9IGNyZWF0ZVN0YXRlT3BlcmF0b3IoZnVuY3Rpb24gKF8sIHN0YXRlKSB7IHJldHVybiBtdXRhdG9yKHN0YXRlKTsgfSk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gb3BlcmF0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9wZXJhdG9yKHN0YXRlLCB2b2lkIDApO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZU9wZXJhdG9yKG11dGF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBvcGVyYXRpb24oc3RhdGUsIGFyZykge1xyXG4gICAgICAgIGZ1bmN0aW9uIGlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50KGFyZzIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRlNBKGFyZzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcnVuTXV0YXRvciA9IGZ1bmN0aW9uIChkcmFmdCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQYXlsb2FkQWN0aW9uQXJndW1lbnQoYXJnKSkge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRvcihhcmcucGF5bG9hZCwgZHJhZnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbXV0YXRvcihhcmcsIGRyYWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRHJhZnQzKHN0YXRlKSkge1xyXG4gICAgICAgICAgICBydW5NdXRhdG9yKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU5leHRTdGF0ZTMoc3RhdGUsIHJ1bk11dGF0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3V0aWxzLnRzXHJcbmZ1bmN0aW9uIHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCkge1xyXG4gICAgdmFyIGtleSA9IHNlbGVjdElkKGVudGl0eSk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIGtleSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGVudGl0eSBwYXNzZWQgdG8gdGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgdW5kZWZpbmVkLlwiLCBcIllvdSBzaG91bGQgcHJvYmFibHkgcHJvdmlkZSB5b3VyIG93biBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uLlwiLCBcIlRoZSBlbnRpdHkgdGhhdCB3YXMgcGFzc2VkOlwiLCBlbnRpdHksIFwiVGhlIGBzZWxlY3RJZGAgaW1wbGVtZW50YXRpb246XCIsIHNlbGVjdElkLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleTtcclxufVxyXG5mdW5jdGlvbiBlbnN1cmVFbnRpdGllc0FycmF5KGVudGl0aWVzKSB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXRpZXMpKSB7XHJcbiAgICAgICAgZW50aXRpZXMgPSBPYmplY3QudmFsdWVzKGVudGl0aWVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRpdGllcztcclxufVxyXG5mdW5jdGlvbiBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpIHtcclxuICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICB2YXIgYWRkZWQgPSBbXTtcclxuICAgIHZhciB1cGRhdGVkID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIG5ld0VudGl0aWVzXzEgPSBuZXdFbnRpdGllczsgX2kgPCBuZXdFbnRpdGllc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBlbnRpdHkgPSBuZXdFbnRpdGllc18xW19pXTtcclxuICAgICAgICB2YXIgaWQgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGlmIChpZCBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICB1cGRhdGVkLnB1c2goeyBpZDogaWQsIGNoYW5nZXM6IGVudGl0eSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkLnB1c2goZW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW2FkZGVkLCB1cGRhdGVkXTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvdW5zb3J0ZWRfc3RhdGVfYWRhcHRlci50c1xyXG5mdW5jdGlvbiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCkge1xyXG4gICAgZnVuY3Rpb24gYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHNlbGVjdElkVmFsdWUoZW50aXR5LCBzZWxlY3RJZCk7XHJcbiAgICAgICAgaWYgKGtleSBpbiBzdGF0ZS5lbnRpdGllcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLmlkcy5wdXNoKGtleSk7XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBuZXdFbnRpdGllc18yID0gbmV3RW50aXRpZXM7IF9pIDwgbmV3RW50aXRpZXNfMi5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IG5ld0VudGl0aWVzXzJbX2ldO1xyXG4gICAgICAgICAgICBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGlmICghKGtleSBpbiBzdGF0ZS5lbnRpdGllcykpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRzLnB1c2goa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXNba2V5XSA9IGVudGl0eTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBuZXdFbnRpdGllc18zID0gbmV3RW50aXRpZXM7IF9pIDwgbmV3RW50aXRpZXNfMy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IG5ld0VudGl0aWVzXzNbX2ldO1xyXG4gICAgICAgICAgICBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEFsbE11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBzdGF0ZS5pZHMgPSBbXTtcclxuICAgICAgICBzdGF0ZS5lbnRpdGllcyA9IHt9O1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVPbmVNdXRhYmx5KGtleSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gcmVtb3ZlTWFueU11dGFibHkoW2tleV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZU1hbnlNdXRhYmx5KGtleXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIGRpZE11dGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1trZXldO1xyXG4gICAgICAgICAgICAgICAgZGlkTXV0YXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChkaWRNdXRhdGUpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRzID0gc3RhdGUuaWRzLmZpbHRlcihmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGlkIGluIHN0YXRlLmVudGl0aWVzOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbGxNdXRhYmx5KHN0YXRlKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xyXG4gICAgICAgICAgICBpZHM6IFtdLFxyXG4gICAgICAgICAgICBlbnRpdGllczoge31cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRha2VOZXdLZXkoa2V5cywgdXBkYXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbDIgPSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgIHZhciB1cGRhdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgb3JpZ2luYWwyLCB1cGRhdGUuY2hhbmdlcyk7XHJcbiAgICAgICAgdmFyIG5ld0tleSA9IHNlbGVjdElkVmFsdWUodXBkYXRlZCwgc2VsZWN0SWQpO1xyXG4gICAgICAgIHZhciBoYXNOZXdLZXkgPSBuZXdLZXkgIT09IHVwZGF0ZS5pZDtcclxuICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XHJcbiAgICAgICAgICAgIGtleXNbdXBkYXRlLmlkXSA9IG5ld0tleTtcclxuICAgICAgICAgICAgZGVsZXRlIHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzW25ld0tleV0gPSB1cGRhdGVkO1xyXG4gICAgICAgIHJldHVybiBoYXNOZXdLZXk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVPbmVNdXRhYmx5KHVwZGF0ZSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBkYXRlTWFueU11dGFibHkoW3VwZGF0ZV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIG5ld0tleXMgPSB7fTtcclxuICAgICAgICB2YXIgdXBkYXRlc1BlckVudGl0eSA9IHt9O1xyXG4gICAgICAgIHVwZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAodXBkYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGUuaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZXNQZXJFbnRpdHlbdXBkYXRlLmlkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXBkYXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXM6IF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPyB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0uY2hhbmdlcyA6IG51bGwpLCB1cGRhdGUuY2hhbmdlcylcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVzID0gT2JqZWN0LnZhbHVlcyh1cGRhdGVzUGVyRW50aXR5KTtcclxuICAgICAgICB2YXIgZGlkTXV0YXRlRW50aXRpZXMgPSB1cGRhdGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaWYgKGRpZE11dGF0ZUVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBkaWRNdXRhdGVJZHMgPSB1cGRhdGVzLmZpbHRlcihmdW5jdGlvbiAodXBkYXRlKSB7IHJldHVybiB0YWtlTmV3S2V5KG5ld0tleXMsIHVwZGF0ZSwgc3RhdGUpOyB9KS5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgICBpZiAoZGlkTXV0YXRlSWRzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5pZHMgPSBPYmplY3Qua2V5cyhzdGF0ZS5lbnRpdGllcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gdXBzZXJ0TWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBfYyA9IHNwbGl0QWRkZWRVcGRhdGVkRW50aXRpZXMobmV3RW50aXRpZXMsIHNlbGVjdElkLCBzdGF0ZSksIGFkZGVkID0gX2NbMF0sIHVwZGF0ZWQgPSBfY1sxXTtcclxuICAgICAgICB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVkLCBzdGF0ZSk7XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkoYWRkZWQsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlQWxsOiBjcmVhdGVTaW5nbGVBcmd1bWVudFN0YXRlT3BlcmF0b3IocmVtb3ZlQWxsTXV0YWJseSksXHJcbiAgICAgICAgYWRkT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE9uZU11dGFibHkpLFxyXG4gICAgICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxyXG4gICAgICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE1hbnlNdXRhYmx5KSxcclxuICAgICAgICByZW1vdmVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlT25lTXV0YWJseSksXHJcbiAgICAgICAgcmVtb3ZlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihyZW1vdmVNYW55TXV0YWJseSlcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3NvcnRlZF9zdGF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydCkge1xyXG4gICAgdmFyIF9jID0gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpLCByZW1vdmVPbmUgPSBfYy5yZW1vdmVPbmUsIHJlbW92ZU1hbnkgPSBfYy5yZW1vdmVNYW55LCByZW1vdmVBbGwgPSBfYy5yZW1vdmVBbGw7XHJcbiAgICBmdW5jdGlvbiBhZGRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gYWRkTWFueU11dGFibHkoW2VudGl0eV0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZE1hbnlNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgdmFyIG1vZGVscyA9IG5ld0VudGl0aWVzLmZpbHRlcihmdW5jdGlvbiAobW9kZWwpIHsgcmV0dXJuICEoc2VsZWN0SWRWYWx1ZShtb2RlbCwgc2VsZWN0SWQpIGluIHN0YXRlLmVudGl0aWVzKTsgfSk7XHJcbiAgICAgICAgaWYgKG1vZGVscy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbWVyZ2UobW9kZWxzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNldE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGlmIChuZXdFbnRpdGllcy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgbWVyZ2UobmV3RW50aXRpZXMsIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcclxuICAgICAgICBzdGF0ZS5pZHMgPSBbXTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBhcHBsaWVkVXBkYXRlcyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgdXBkYXRlc18xID0gdXBkYXRlczsgX2kgPCB1cGRhdGVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGUgPSB1cGRhdGVzXzFbX2ldO1xyXG4gICAgICAgICAgICB2YXIgZW50aXR5ID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICAgICAgaWYgKCFlbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcGxpZWRVcGRhdGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihlbnRpdHksIHVwZGF0ZS5jaGFuZ2VzKTtcclxuICAgICAgICAgICAgdmFyIG5ld0lkID0gc2VsZWN0SWQoZW50aXR5KTtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZS5pZCAhPT0gbmV3SWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZW50aXRpZXNbbmV3SWRdID0gZW50aXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhcHBsaWVkVXBkYXRlcykge1xyXG4gICAgICAgICAgICByZXNvcnRFbnRpdGllcyhzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwc2VydE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgX2MgPSBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpLCBhZGRlZCA9IF9jWzBdLCB1cGRhdGVkID0gX2NbMV07XHJcbiAgICAgICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpO1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhcmVBcnJheXNFcXVhbChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGggJiYgaSA8IGIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGFbaV0gPT09IGJbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtZXJnZShtb2RlbHMsIHN0YXRlKSB7XHJcbiAgICAgICAgbW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmVudGl0aWVzW3NlbGVjdElkKG1vZGVsKV0gPSBtb2RlbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNvcnRFbnRpdGllcyhzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZXNvcnRFbnRpdGllcyhzdGF0ZSkge1xyXG4gICAgICAgIHZhciBhbGxFbnRpdGllcyA9IE9iamVjdC52YWx1ZXMoc3RhdGUuZW50aXRpZXMpO1xyXG4gICAgICAgIGFsbEVudGl0aWVzLnNvcnQoc29ydCk7XHJcbiAgICAgICAgdmFyIG5ld1NvcnRlZElkcyA9IGFsbEVudGl0aWVzLm1hcChzZWxlY3RJZCk7XHJcbiAgICAgICAgdmFyIGlkcyA9IHN0YXRlLmlkcztcclxuICAgICAgICBpZiAoIWFyZUFycmF5c0VxdWFsKGlkcywgbmV3U29ydGVkSWRzKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5pZHMgPSBuZXdTb3J0ZWRJZHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZW1vdmVPbmU6IHJlbW92ZU9uZSxcclxuICAgICAgICByZW1vdmVNYW55OiByZW1vdmVNYW55LFxyXG4gICAgICAgIHJlbW92ZUFsbDogcmVtb3ZlQWxsLFxyXG4gICAgICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlT25lTXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0T25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwc2VydE9uZU11dGFibHkpLFxyXG4gICAgICAgIHNldE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRBbGw6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0QWxsTXV0YWJseSksXHJcbiAgICAgICAgYWRkTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlTWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVNYW55TXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSlcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL2NyZWF0ZV9hZGFwdGVyLnRzXHJcbmZ1bmN0aW9uIGNyZWF0ZUVudGl0eUFkYXB0ZXIob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIHZhciBfYyA9IF9fc3ByZWFkVmFsdWVzKHtcclxuICAgICAgICBzb3J0Q29tcGFyZXI6IGZhbHNlLFxyXG4gICAgICAgIHNlbGVjdElkOiBmdW5jdGlvbiAoaW5zdGFuY2UpIHsgcmV0dXJuIGluc3RhbmNlLmlkOyB9XHJcbiAgICB9LCBvcHRpb25zKSwgc2VsZWN0SWQgPSBfYy5zZWxlY3RJZCwgc29ydENvbXBhcmVyID0gX2Muc29ydENvbXBhcmVyO1xyXG4gICAgdmFyIHN0YXRlRmFjdG9yeSA9IGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKTtcclxuICAgIHZhciBzZWxlY3RvcnNGYWN0b3J5ID0gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpO1xyXG4gICAgdmFyIHN0YXRlQWRhcHRlciA9IHNvcnRDb21wYXJlciA/IGNyZWF0ZVNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCwgc29ydENvbXBhcmVyKSA6IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKTtcclxuICAgIHJldHVybiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgc2VsZWN0SWQ6IHNlbGVjdElkLFxyXG4gICAgICAgIHNvcnRDb21wYXJlcjogc29ydENvbXBhcmVyXHJcbiAgICB9LCBzdGF0ZUZhY3RvcnkpLCBzZWxlY3RvcnNGYWN0b3J5KSwgc3RhdGVBZGFwdGVyKTtcclxufVxyXG4vLyBzcmMvbmFub2lkLnRzXHJcbnZhciB1cmxBbHBoYWJldCA9IFwiTW9kdWxlU3ltYmhhc093blByLTAxMjM0NTY3ODlBQkNERUZHSE5SVmZnY3RpVXZ6X0txWVRKa0x4cFpYSWpRV1wiO1xyXG52YXIgbmFub2lkID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICAgIGlmIChzaXplID09PSB2b2lkIDApIHsgc2l6ZSA9IDIxOyB9XHJcbiAgICB2YXIgaWQgPSBcIlwiO1xyXG4gICAgdmFyIGkgPSBzaXplO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIGlkICs9IHVybEFscGhhYmV0W01hdGgucmFuZG9tKCkgKiA2NCB8IDBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlkO1xyXG59O1xyXG4vLyBzcmMvY3JlYXRlQXN5bmNUaHVuay50c1xyXG52YXIgY29tbW9uUHJvcGVydGllcyA9IFtcclxuICAgIFwibmFtZVwiLFxyXG4gICAgXCJtZXNzYWdlXCIsXHJcbiAgICBcInN0YWNrXCIsXHJcbiAgICBcImNvZGVcIlxyXG5dO1xyXG52YXIgUmVqZWN0V2l0aFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVqZWN0V2l0aFZhbHVlKHBheWxvYWQsIG1ldGEpIHtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVqZWN0V2l0aFZhbHVlO1xyXG59KCkpO1xyXG52YXIgRnVsZmlsbFdpdGhNZXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRnVsZmlsbFdpdGhNZXRhKHBheWxvYWQsIG1ldGEpIHtcclxuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xyXG4gICAgICAgIHRoaXMubWV0YSA9IG1ldGE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRnVsZmlsbFdpdGhNZXRhO1xyXG59KCkpO1xyXG52YXIgbWluaVNlcmlhbGl6ZUVycm9yID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgdmFyIHNpbXBsZUVycm9yID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBjb21tb25Qcm9wZXJ0aWVzXzEgPSBjb21tb25Qcm9wZXJ0aWVzOyBfaSA8IGNvbW1vblByb3BlcnRpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gY29tbW9uUHJvcGVydGllc18xW19pXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtwcm9wZXJ0eV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHNpbXBsZUVycm9yW3Byb3BlcnR5XSA9IHZhbHVlW3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2ltcGxlRXJyb3I7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBtZXNzYWdlOiBTdHJpbmcodmFsdWUpIH07XHJcbn07XHJcbnZhciBjcmVhdGVBc3luY1RodW5rID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFzeW5jVGh1bmsyKHR5cGVQcmVmaXgsIHBheWxvYWRDcmVhdG9yLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGZ1bGZpbGxlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvZnVsZmlsbGVkXCIsIGZ1bmN0aW9uIChwYXlsb2FkLCByZXF1ZXN0SWQsIGFyZywgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgbWV0YTogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWV0YSB8fCB7fSksIHtcclxuICAgICAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3RhdHVzOiBcImZ1bGZpbGxlZFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciBwZW5kaW5nID0gY3JlYXRlQWN0aW9uKHR5cGVQcmVmaXggKyBcIi9wZW5kaW5nXCIsIGZ1bmN0aW9uIChyZXF1ZXN0SWQsIGFyZywgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgcGF5bG9hZDogdm9pZCAwLFxyXG4gICAgICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RTdGF0dXM6IFwicGVuZGluZ1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciByZWplY3RlZCA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcmVqZWN0ZWRcIiwgZnVuY3Rpb24gKGVycm9yLCByZXF1ZXN0SWQsIGFyZywgcGF5bG9hZCwgbWV0YSkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICAgICAgZXJyb3I6IChvcHRpb25zICYmIG9wdGlvbnMuc2VyaWFsaXplRXJyb3IgfHwgbWluaVNlcmlhbGl6ZUVycm9yKShlcnJvciB8fCBcIlJlamVjdGVkXCIpLFxyXG4gICAgICAgICAgICBtZXRhOiBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKHt9LCBtZXRhIHx8IHt9KSwge1xyXG4gICAgICAgICAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgIHJlamVjdGVkV2l0aFZhbHVlOiAhIXBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3RhdHVzOiBcInJlamVjdGVkXCIsXHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkOiAoZXJyb3IgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yLm5hbWUpID09PSBcIkFib3J0RXJyb3JcIixcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogKGVycm9yID09IG51bGwgPyB2b2lkIDAgOiBlcnJvci5uYW1lKSA9PT0gXCJDb25kaXRpb25FcnJvclwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciBkaXNwbGF5ZWRXYXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIEFDID0gdHlwZW9mIEFib3J0Q29udHJvbGxlciAhPT0gXCJ1bmRlZmluZWRcIiA/IEFib3J0Q29udHJvbGxlciA6IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY2xhc3NfMSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmFsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25hYm9ydDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiB2b2lkIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dJZkFib3J0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsYXNzXzEucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZGlzcGxheWVkV2FybmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRXYXJuaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiVGhpcyBwbGF0Zm9ybSBkb2VzIG5vdCBpbXBsZW1lbnQgQWJvcnRDb250cm9sbGVyLiBcXG5JZiB5b3Ugd2FudCB0byB1c2UgdGhlIEFib3J0Q29udHJvbGxlciB0byByZWFjdCB0byBgYWJvcnRgIGV2ZW50cywgcGxlYXNlIGNvbnNpZGVyIGltcG9ydGluZyBhIHBvbHlmaWxsIGxpa2UgJ2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC9kaXN0L2Fib3J0Y29udHJvbGxlci1wb2x5ZmlsbC1vbmx5Jy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NfMTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGlvbkNyZWF0b3IoYXJnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3RJZCA9IChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmlkR2VuZXJhdG9yKSA/IG9wdGlvbnMuaWRHZW5lcmF0b3IoYXJnKSA6IG5hbm9pZCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFib3J0Q29udHJvbGxlciA9IG5ldyBBQygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFib3J0UmVhc29uO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFib3J0KHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0UmVhc29uID0gcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2FzeW5jKHRoaXMsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgZmluYWxBY3Rpb24sIGNvbmRpdGlvblJlc3VsdCwgYWJvcnRlZFByb21pc2UsIGVycl8xLCBza2lwRGlzcGF0Y2g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMCwgNCwgLCA1XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IChfYSA9IG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY29uZGl0aW9uKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCBhcmcsIHsgZ2V0U3RhdGU6IGdldFN0YXRlLCBleHRyYTogZXh0cmEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZShjb25kaXRpb25SZXN1bHQpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY29uZGl0aW9uUmVzdWx0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvblJlc3VsdCA9PT0gZmFsc2UgfHwgYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb25kaXRpb25FcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQWJvcnRlZCBkdWUgdG8gY29uZGl0aW9uIGNhbGxiYWNrIHJldHVybmluZyBmYWxzZS5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlZFByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7IHJldHVybiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBYm9ydEVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBhYm9ydFJlYXNvbiB8fCBcIkFib3J0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChwZW5kaW5nKHJlcXVlc3RJZCwgYXJnLCAoX2IgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmdldFBlbmRpbmdNZXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChvcHRpb25zLCB7IHJlcXVlc3RJZDogcmVxdWVzdElkLCBhcmc6IGFyZyB9LCB7IGdldFN0YXRlOiBnZXRTdGF0ZSwgZXh0cmE6IGV4dHJhIH0pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmFjZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlZFByb21pc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHBheWxvYWRDcmVhdG9yKGFyZywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm9ydDogYWJvcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFdpdGhWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCBtZXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlamVjdFdpdGhWYWx1ZSh2YWx1ZSwgbWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGZpbGxXaXRoVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGdWxmaWxsV2l0aE1ldGEodmFsdWUsIG1ldGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUmVqZWN0V2l0aFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEZ1bGZpbGxXaXRoTWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZChyZXN1bHQucGF5bG9hZCwgcmVxdWVzdElkLCBhcmcsIHJlc3VsdC5tZXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVsZmlsbGVkKHJlc3VsdCwgcmVxdWVzdElkLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbEFjdGlvbiA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBlcnJfMSBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSA/IHJlamVjdGVkKG51bGwsIHJlcXVlc3RJZCwgYXJnLCBlcnJfMS5wYXlsb2FkLCBlcnJfMS5tZXRhKSA6IHJlamVjdGVkKGVycl8xLCByZXF1ZXN0SWQsIGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpcERpc3BhdGNoID0gb3B0aW9ucyAmJiAhb3B0aW9ucy5kaXNwYXRjaENvbmRpdGlvblJlamVjdGlvbiAmJiByZWplY3RlZC5tYXRjaChmaW5hbEFjdGlvbikgJiYgZmluYWxBY3Rpb24ubWV0YS5jb25kaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2tpcERpc3BhdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmaW5hbEFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZpbmFsQWN0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlMiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0OiBhYm9ydCxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcXVlc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgICAgICAgICB1bndyYXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UyLnRoZW4odW53cmFwUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWN0aW9uQ3JlYXRvciwge1xyXG4gICAgICAgICAgICBwZW5kaW5nOiBwZW5kaW5nLFxyXG4gICAgICAgICAgICByZWplY3RlZDogcmVqZWN0ZWQsXHJcbiAgICAgICAgICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxyXG4gICAgICAgICAgICB0eXBlUHJlZml4OiB0eXBlUHJlZml4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBc3luY1RodW5rMi53aXRoVHlwZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBjcmVhdGVBc3luY1RodW5rMjsgfTtcclxuICAgIHJldHVybiBjcmVhdGVBc3luY1RodW5rMjtcclxufSkoKTtcclxuZnVuY3Rpb24gdW53cmFwUmVzdWx0KGFjdGlvbikge1xyXG4gICAgaWYgKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlKSB7XHJcbiAgICAgICAgdGhyb3cgYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLmVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgYWN0aW9uLmVycm9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhlbmFibGUodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcclxufVxyXG4vLyBzcmMvdHNIZWxwZXJzLnRzXHJcbnZhciBoYXNNYXRjaEZ1bmN0aW9uID0gZnVuY3Rpb24gKHYpIHtcclxuICAgIHJldHVybiB2ICYmIHR5cGVvZiB2Lm1hdGNoID09PSBcImZ1bmN0aW9uXCI7XHJcbn07XHJcbi8vIHNyYy9tYXRjaGVycy50c1xyXG52YXIgbWF0Y2hlcyA9IGZ1bmN0aW9uIChtYXRjaGVyLCBhY3Rpb24pIHtcclxuICAgIGlmIChoYXNNYXRjaEZ1bmN0aW9uKG1hdGNoZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXIubWF0Y2goYWN0aW9uKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIGlzQW55T2YoKSB7XHJcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbWF0Y2hlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJzLnNvbWUoZnVuY3Rpb24gKG1hdGNoZXIpIHsgcmV0dXJuIG1hdGNoZXMobWF0Y2hlciwgYWN0aW9uKTsgfSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzQWxsT2YoKSB7XHJcbiAgICB2YXIgbWF0Y2hlcnMgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgbWF0Y2hlcnNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXJzLmV2ZXJ5KGZ1bmN0aW9uIChtYXRjaGVyKSB7IHJldHVybiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbik7IH0pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIHZhbGlkU3RhdHVzKSB7XHJcbiAgICBpZiAoIWFjdGlvbiB8fCAhYWN0aW9uLm1ldGEpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGhhc1ZhbGlkUmVxdWVzdElkID0gdHlwZW9mIGFjdGlvbi5tZXRhLnJlcXVlc3RJZCA9PT0gXCJzdHJpbmdcIjtcclxuICAgIHZhciBoYXNWYWxpZFJlcXVlc3RTdGF0dXMgPSB2YWxpZFN0YXR1cy5pbmRleE9mKGFjdGlvbi5tZXRhLnJlcXVlc3RTdGF0dXMpID4gLTE7XHJcbiAgICByZXR1cm4gaGFzVmFsaWRSZXF1ZXN0SWQgJiYgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FycmF5KGEpIHtcclxuICAgIHJldHVybiB0eXBlb2YgYVswXSA9PT0gXCJmdW5jdGlvblwiICYmIFwicGVuZGluZ1wiIGluIGFbMF0gJiYgXCJmdWxmaWxsZWRcIiBpbiBhWzBdICYmIFwicmVqZWN0ZWRcIiBpbiBhWzBdO1xyXG59XHJcbmZ1bmN0aW9uIGlzUGVuZGluZygpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInBlbmRpbmdcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNQZW5kaW5nKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHsgcmV0dXJuIGFzeW5jVGh1bmsucGVuZGluZzsgfSk7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1JlamVjdGVkKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicmVqZWN0ZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNSZWplY3RlZCgpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7IHJldHVybiBhc3luY1RodW5rLnJlamVjdGVkOyB9KTtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIHZhciBoYXNGbGFnID0gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24gJiYgYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEucmVqZWN0ZWRXaXRoVmFsdWU7XHJcbiAgICB9O1xyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUmVqZWN0ZWRXaXRoVmFsdWUoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FsbE9mKGlzUmVqZWN0ZWQuYXBwbHkodm9pZCAwLCBhc3luY1RodW5rcyksIGhhc0ZsYWcpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNGdWxmaWxsZWQoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJmdWxmaWxsZWRcIl0pOyB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0FzeW5jVGh1bmtBcnJheShhc3luY1RodW5rcykpIHtcclxuICAgICAgICByZXR1cm4gaXNGdWxmaWxsZWQoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykgeyByZXR1cm4gYXN5bmNUaHVuay5mdWxmaWxsZWQ7IH0pO1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNBc3luY1RodW5rQWN0aW9uKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wicGVuZGluZ1wiLCBcImZ1bGZpbGxlZFwiLCBcInJlamVjdGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzQXN5bmNUaHVua0FjdGlvbigpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhc3luY1RodW5rc18xID0gYXN5bmNUaHVua3M7IF9pIDwgYXN5bmNUaHVua3NfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGFzeW5jVGh1bmsgPSBhc3luY1RodW5rc18xW19pXTtcclxuICAgICAgICAgICAgbWF0Y2hlcnMucHVzaChhc3luY1RodW5rLnBlbmRpbmcsIGFzeW5jVGh1bmsucmVqZWN0ZWQsIGFzeW5jVGh1bmsuZnVsZmlsbGVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL3V0aWxzLnRzXHJcbnZhciBhc3NlcnRGdW5jdGlvbiA9IGZ1bmN0aW9uIChmdW5jLCBleHBlY3RlZCkge1xyXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGV4cGVjdGVkICsgXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7XHJcbiAgICB9XHJcbn07XHJcbnZhciBub29wID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG52YXIgY2F0Y2hSZWplY3Rpb24gPSBmdW5jdGlvbiAocHJvbWlzZTIsIG9uRXJyb3IpIHtcclxuICAgIGlmIChvbkVycm9yID09PSB2b2lkIDApIHsgb25FcnJvciA9IG5vb3A7IH1cclxuICAgIHByb21pc2UyLmNhdGNoKG9uRXJyb3IpO1xyXG4gICAgcmV0dXJuIHByb21pc2UyO1xyXG59O1xyXG52YXIgYWRkQWJvcnRTaWduYWxMaXN0ZW5lciA9IGZ1bmN0aW9uIChhYm9ydFNpZ25hbCwgY2FsbGJhY2spIHtcclxuICAgIGFib3J0U2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYWxsYmFjaywgeyBvbmNlOiB0cnVlIH0pO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFib3J0U2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBjYWxsYmFjayk7IH07XHJcbn07XHJcbnZhciBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uID0gZnVuY3Rpb24gKGFib3J0Q29udHJvbGxlciwgcmVhc29uKSB7XHJcbiAgICB2YXIgc2lnbmFsID0gYWJvcnRDb250cm9sbGVyLnNpZ25hbDtcclxuICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghKFwicmVhc29uXCIgaW4gc2lnbmFsKSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaWduYWwsIFwicmVhc29uXCIsIHtcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IHJlYXNvbixcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgYWJvcnRDb250cm9sbGVyLmFib3J0KHJlYXNvbik7XHJcbn07XHJcbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvZXhjZXB0aW9ucy50c1xyXG52YXIgdGFzayA9IFwidGFza1wiO1xyXG52YXIgbGlzdGVuZXIgPSBcImxpc3RlbmVyXCI7XHJcbnZhciBjb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xyXG52YXIgY2FuY2VsbGVkID0gXCJjYW5jZWxsZWRcIjtcclxudmFyIHRhc2tDYW5jZWxsZWQgPSBcInRhc2stXCIgKyBjYW5jZWxsZWQ7XHJcbnZhciB0YXNrQ29tcGxldGVkID0gXCJ0YXNrLVwiICsgY29tcGxldGVkO1xyXG52YXIgbGlzdGVuZXJDYW5jZWxsZWQgPSBsaXN0ZW5lciArIFwiLVwiICsgY2FuY2VsbGVkO1xyXG52YXIgbGlzdGVuZXJDb21wbGV0ZWQgPSBsaXN0ZW5lciArIFwiLVwiICsgY29tcGxldGVkO1xyXG52YXIgVGFza0Fib3J0RXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUYXNrQWJvcnRFcnJvcihjb2RlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIlRhc2tBYm9ydEVycm9yXCI7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGFzayArIFwiIFwiICsgY2FuY2VsbGVkICsgXCIgKHJlYXNvbjogXCIgKyBjb2RlICsgXCIpXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVGFza0Fib3J0RXJyb3I7XHJcbn0oKSk7XHJcbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvdGFzay50c1xyXG52YXIgdmFsaWRhdGVBY3RpdmUgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XHJcbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVGFza0Fib3J0RXJyb3Ioc2lnbmFsLnJlYXNvbik7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIHJhY2VXaXRoU2lnbmFsKHNpZ25hbCwgcHJvbWlzZTIpIHtcclxuICAgIHZhciBjbGVhbnVwID0gbm9vcDtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIG5vdGlmeVJlamVjdGlvbiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdChuZXcgVGFza0Fib3J0RXJyb3Ioc2lnbmFsLnJlYXNvbikpOyB9O1xyXG4gICAgICAgIGlmIChzaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICBub3RpZnlSZWplY3Rpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhbnVwID0gYWRkQWJvcnRTaWduYWxMaXN0ZW5lcihzaWduYWwsIG5vdGlmeVJlamVjdGlvbik7XHJcbiAgICAgICAgcHJvbWlzZTIuZmluYWxseShmdW5jdGlvbiAoKSB7IHJldHVybiBjbGVhbnVwKCk7IH0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNsZWFudXAgPSBub29wO1xyXG4gICAgfSk7XHJcbn1cclxudmFyIHJ1blRhc2sgPSBmdW5jdGlvbiAodGFzazIsIGNsZWFuVXApIHsgcmV0dXJuIF9fYXN5bmModm9pZCAwLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdmFsdWUsIGVycm9yXzE7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzAsIDMsIDQsIDVdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmVzb2x2ZSgpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGFzazIoKV07XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBcIm9rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBlcnJvcl8xIGluc3RhbmNlb2YgVGFza0Fib3J0RXJyb3IgPyBcImNhbmNlbGxlZFwiIDogXCJyZWplY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjbGVhblVwID09IG51bGwgPyB2b2lkIDAgOiBjbGVhblVwKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbnZhciBjcmVhdGVQYXVzZSA9IGZ1bmN0aW9uIChzaWduYWwpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvbWlzZTIpIHtcclxuICAgICAgICByZXR1cm4gY2F0Y2hSZWplY3Rpb24ocmFjZVdpdGhTaWduYWwoc2lnbmFsLCBwcm9taXNlMikudGhlbihmdW5jdGlvbiAob3V0cHV0KSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKHNpZ25hbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfTtcclxufTtcclxudmFyIGNyZWF0ZURlbGF5ID0gZnVuY3Rpb24gKHNpZ25hbCkge1xyXG4gICAgdmFyIHBhdXNlID0gY3JlYXRlUGF1c2Uoc2lnbmFsKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGltZW91dE1zKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWVvdXRNcyk7IH0pKTtcclxuICAgIH07XHJcbn07XHJcbi8vIHNyYy9saXN0ZW5lck1pZGRsZXdhcmUvaW5kZXgudHNcclxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ247XHJcbnZhciBJTlRFUk5BTF9OSUxfVE9LRU4gPSB7fTtcclxudmFyIGFsbSA9IFwibGlzdGVuZXJNaWRkbGV3YXJlXCI7XHJcbnZhciBjcmVhdGVGb3JrID0gZnVuY3Rpb24gKHBhcmVudEFib3J0U2lnbmFsKSB7XHJcbiAgICB2YXIgbGlua0NvbnRyb2xsZXJzID0gZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHsgcmV0dXJuIGFkZEFib3J0U2lnbmFsTGlzdGVuZXIocGFyZW50QWJvcnRTaWduYWwsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgcGFyZW50QWJvcnRTaWduYWwucmVhc29uKTsgfSk7IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhc2tFeGVjdXRvcikge1xyXG4gICAgICAgIGFzc2VydEZ1bmN0aW9uKHRhc2tFeGVjdXRvciwgXCJ0YXNrRXhlY3V0b3JcIik7XHJcbiAgICAgICAgdmFyIGNoaWxkQWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgIGxpbmtDb250cm9sbGVycyhjaGlsZEFib3J0Q29udHJvbGxlcik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJ1blRhc2soZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hc3luYyh2b2lkIDAsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdDI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKHBhcmVudEFib3J0U2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGFza0V4ZWN1dG9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZTogY3JlYXRlUGF1c2UoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogY3JlYXRlRGVsYXkoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0MiA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoY2hpbGRBYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdDJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjaGlsZEFib3J0Q29udHJvbGxlciwgdGFza0NvbXBsZXRlZCk7IH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3VsdDogY3JlYXRlUGF1c2UocGFyZW50QWJvcnRTaWduYWwpKHJlc3VsdCksXHJcbiAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjaGlsZEFib3J0Q29udHJvbGxlciwgdGFza0NhbmNlbGxlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxufTtcclxudmFyIGNyZWF0ZVRha2VQYXR0ZXJuID0gZnVuY3Rpb24gKHN0YXJ0TGlzdGVuaW5nLCBzaWduYWwpIHtcclxuICAgIHZhciB0YWtlID0gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGltZW91dCkgeyByZXR1cm4gX19hc3luYyh2b2lkIDAsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdW5zdWJzY3JpYmUsIHR1cGxlUHJvbWlzZSwgcHJvbWlzZXMsIG91dHB1dDtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShzaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdHVwbGVQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcExpc3RlbmluZyA9IHN0YXJ0TGlzdGVuaW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWRpY2F0ZTogcHJlZGljYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmZWN0OiBmdW5jdGlvbiAoYWN0aW9uLCBsaXN0ZW5lckFwaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyQXBpLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJBcGkuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJBcGkuZ2V0T3JpZ2luYWxTdGF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BMaXN0ZW5pbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0dXBsZVByb21pc2VcclxuICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0LCBudWxsKTsgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAsIDMsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByYWNlV2l0aFNpZ25hbChzaWduYWwsIFByb21pc2UucmFjZShwcm9taXNlcykpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgb3V0cHV0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGltZW91dCkgeyByZXR1cm4gY2F0Y2hSZWplY3Rpb24odGFrZShwcmVkaWNhdGUsIHRpbWVvdXQpKTsgfTtcclxufTtcclxudmFyIGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20gPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIHR5cGUgPSBvcHRpb25zLnR5cGUsIGFjdGlvbkNyZWF0b3IgPSBvcHRpb25zLmFjdGlvbkNyZWF0b3IsIG1hdGNoZXIgPSBvcHRpb25zLm1hdGNoZXIsIHByZWRpY2F0ZSA9IG9wdGlvbnMucHJlZGljYXRlLCBlZmZlY3QgPSBvcHRpb25zLmVmZmVjdDtcclxuICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgcHJlZGljYXRlID0gY3JlYXRlQWN0aW9uKHR5cGUpLm1hdGNoO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYWN0aW9uQ3JlYXRvcikge1xyXG4gICAgICAgIHR5cGUgPSBhY3Rpb25DcmVhdG9yLnR5cGU7XHJcbiAgICAgICAgcHJlZGljYXRlID0gYWN0aW9uQ3JlYXRvci5tYXRjaDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG1hdGNoZXIpIHtcclxuICAgICAgICBwcmVkaWNhdGUgPSBtYXRjaGVyO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJlZGljYXRlKSB7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDcmVhdGluZyBvciByZW1vdmluZyBhIGxpc3RlbmVyIHJlcXVpcmVzIG9uZSBvZiB0aGUga25vd24gZmllbGRzIGZvciBtYXRjaGluZyBhbiBhY3Rpb25cIik7XHJcbiAgICB9XHJcbiAgICBhc3NlcnRGdW5jdGlvbihlZmZlY3QsIFwib3B0aW9ucy5saXN0ZW5lclwiKTtcclxuICAgIHJldHVybiB7IHByZWRpY2F0ZTogcHJlZGljYXRlLCB0eXBlOiB0eXBlLCBlZmZlY3Q6IGVmZmVjdCB9O1xyXG59O1xyXG52YXIgY3JlYXRlTGlzdGVuZXJFbnRyeSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB2YXIgX2MgPSBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tKG9wdGlvbnMpLCB0eXBlID0gX2MudHlwZSwgcHJlZGljYXRlID0gX2MucHJlZGljYXRlLCBlZmZlY3QgPSBfYy5lZmZlY3Q7XHJcbiAgICB2YXIgaWQgPSBuYW5vaWQoKTtcclxuICAgIHZhciBlbnRyeSA9IHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgZWZmZWN0OiBlZmZlY3QsXHJcbiAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZSxcclxuICAgICAgICBwZW5kaW5nOiBuZXcgU2V0KCksXHJcbiAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5zdWJzY3JpYmUgbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbn07XHJcbnZhciBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgIGVudHJ5LnBlbmRpbmcuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbGxlcikge1xyXG4gICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgbGlzdGVuZXJDYW5jZWxsZWQpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBjcmVhdGVDbGVhckxpc3RlbmVyTWlkZGxld2FyZSA9IGZ1bmN0aW9uIChsaXN0ZW5lck1hcCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsaXN0ZW5lck1hcC5mb3JFYWNoKGNhbmNlbEFjdGl2ZUxpc3RlbmVycyk7XHJcbiAgICAgICAgbGlzdGVuZXJNYXAuY2xlYXIoKTtcclxuICAgIH07XHJcbn07XHJcbnZhciBzYWZlbHlOb3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvckhhbmRsZXIsIGVycm9yVG9Ob3RpZnksIGVycm9ySW5mbykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBlcnJvckhhbmRsZXIoZXJyb3JUb05vdGlmeSwgZXJyb3JJbmZvKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvckhhbmRsZXJFcnJvcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvckhhbmRsZXJFcnJvcjtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxufTtcclxudmFyIGFkZExpc3RlbmVyID0gY3JlYXRlQWN0aW9uKGFsbSArIFwiL2FkZFwiKTtcclxudmFyIGNsZWFyQWxsTGlzdGVuZXJzID0gY3JlYXRlQWN0aW9uKGFsbSArIFwiL3JlbW92ZUFsbFwiKTtcclxudmFyIHJlbW92ZUxpc3RlbmVyID0gY3JlYXRlQWN0aW9uKGFsbSArIFwiL3JlbW92ZVwiKTtcclxudmFyIGRlZmF1bHRFcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF9fc3ByZWFkQXJyYXkoW2FsbSArIFwiL2Vycm9yXCJdLCBhcmdzKSk7XHJcbn07XHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyTWlkZGxld2FyZShtaWRkbGV3YXJlT3B0aW9ucykge1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIGlmIChtaWRkbGV3YXJlT3B0aW9ucyA9PT0gdm9pZCAwKSB7IG1pZGRsZXdhcmVPcHRpb25zID0ge307IH1cclxuICAgIHZhciBsaXN0ZW5lck1hcCA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBleHRyYSA9IG1pZGRsZXdhcmVPcHRpb25zLmV4dHJhLCBfYyA9IG1pZGRsZXdhcmVPcHRpb25zLm9uRXJyb3IsIG9uRXJyb3IgPSBfYyA9PT0gdm9pZCAwID8gZGVmYXVsdEVycm9ySGFuZGxlciA6IF9jO1xyXG4gICAgYXNzZXJ0RnVuY3Rpb24ob25FcnJvciwgXCJvbkVycm9yXCIpO1xyXG4gICAgdmFyIGluc2VydEVudHJ5ID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICAgICAgZW50cnkudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBsaXN0ZW5lck1hcC5kZWxldGUoZW50cnkuaWQpOyB9O1xyXG4gICAgICAgIGxpc3RlbmVyTWFwLnNldChlbnRyeS5pZCwgZW50cnkpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FuY2VsT3B0aW9ucykge1xyXG4gICAgICAgICAgICBlbnRyeS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICBpZiAoY2FuY2VsT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogY2FuY2VsT3B0aW9ucy5jYW5jZWxBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFjdGl2ZUxpc3RlbmVycyhlbnRyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHZhciBmaW5kTGlzdGVuZXJFbnRyeSA9IGZ1bmN0aW9uIChjb21wYXJhdG9yKSB7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYyA9IEFycmF5LmZyb20obGlzdGVuZXJNYXAudmFsdWVzKCkpOyBfaSA8IF9jLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgZW50cnkgPSBfY1tfaV07XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJhdG9yKGVudHJ5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN0YXJ0TGlzdGVuaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZW50cnkgPSBmaW5kTGlzdGVuZXJFbnRyeShmdW5jdGlvbiAoZXhpc3RpbmdFbnRyeSkgeyByZXR1cm4gZXhpc3RpbmdFbnRyeS5lZmZlY3QgPT09IG9wdGlvbnMuZWZmZWN0OyB9KTtcclxuICAgICAgICBpZiAoIWVudHJ5KSB7XHJcbiAgICAgICAgICAgIGVudHJ5ID0gY3JlYXRlTGlzdGVuZXJFbnRyeShvcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc2VydEVudHJ5KGVudHJ5KTtcclxuICAgIH07XHJcbiAgICB2YXIgc3RvcExpc3RlbmluZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9jID0gZ2V0TGlzdGVuZXJFbnRyeVByb3BzRnJvbShvcHRpb25zKSwgdHlwZSA9IF9jLnR5cGUsIGVmZmVjdCA9IF9jLmVmZmVjdCwgcHJlZGljYXRlID0gX2MucHJlZGljYXRlO1xyXG4gICAgICAgIHZhciBlbnRyeSA9IGZpbmRMaXN0ZW5lckVudHJ5KGZ1bmN0aW9uIChlbnRyeTIpIHtcclxuICAgICAgICAgICAgdmFyIG1hdGNoUHJlZGljYXRlT3JUeXBlID0gdHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIgPyBlbnRyeTIudHlwZSA9PT0gdHlwZSA6IGVudHJ5Mi5wcmVkaWNhdGUgPT09IHByZWRpY2F0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoUHJlZGljYXRlT3JUeXBlICYmIGVudHJ5Mi5lZmZlY3QgPT09IGVmZmVjdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICAgICAgZW50cnkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY2FuY2VsQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMoZW50cnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhIWVudHJ5O1xyXG4gICAgfTtcclxuICAgIHZhciBub3RpZnlMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbnRyeSwgYWN0aW9uLCBhcGksIGdldE9yaWdpbmFsU3RhdGUpIHsgcmV0dXJuIF9fYXN5bmMoX3RoaXMsIG51bGwsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaW50ZXJuYWxUYXNrQ29udHJvbGxlciwgdGFrZSwgbGlzdGVuZXJFcnJvcl8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGludGVybmFsVGFza0NvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFrZSA9IGNyZWF0ZVRha2VQYXR0ZXJuKHN0YXJ0TGlzdGVuaW5nLCBpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMywgNCwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnBlbmRpbmcuYWRkKGludGVybmFsVGFza0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UucmVzb2x2ZShlbnRyeS5lZmZlY3QoYWN0aW9uLCBhc3NpZ24oe30sIGFwaSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3JpZ2luYWxTdGF0ZTogZ2V0T3JpZ2luYWxTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogZnVuY3Rpb24gKHByZWRpY2F0ZSwgdGltZW91dCkgeyByZXR1cm4gdGFrZShwcmVkaWNhdGUsIHRpbWVvdXQpLnRoZW4oQm9vbGVhbik7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWtlOiB0YWtlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGNyZWF0ZURlbGF5KGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlOiBjcmVhdGVQYXVzZShpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduYWw6IGludGVybmFsVGFza0NvbnRyb2xsZXIuc2lnbmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yazogY3JlYXRlRm9yayhpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZW50cnkudW5zdWJzY3JpYmUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lck1hcC5zZXQoZW50cnkuaWQsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBY3RpdmVMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS5wZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xsZXIsIF8sIHNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbGxlciAhPT0gaW50ZXJuYWxUYXNrQ29udHJvbGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbihjb250cm9sbGVyLCBsaXN0ZW5lckNhbmNlbGxlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQuZGVsZXRlKGNvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lckVycm9yXzEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEobGlzdGVuZXJFcnJvcl8xIGluc3RhbmNlb2YgVGFza0Fib3J0RXJyb3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhZmVseU5vdGlmeUVycm9yKG9uRXJyb3IsIGxpc3RlbmVyRXJyb3JfMSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpc2VkQnk6IFwiZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oaW50ZXJuYWxUYXNrQ29udHJvbGxlciwgbGlzdGVuZXJDb21wbGV0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnBlbmRpbmcuZGVsZXRlKGludGVybmFsVGFza0NvbnRyb2xsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB2YXIgY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUgPSBjcmVhdGVDbGVhckxpc3RlbmVyTWlkZGxld2FyZShsaXN0ZW5lck1hcCk7XHJcbiAgICB2YXIgbWlkZGxld2FyZSA9IGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFpc0FjdGlvbihhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRMaXN0ZW5lci5tYXRjaChhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGFydExpc3RlbmluZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGVhckFsbExpc3RlbmVycy5tYXRjaChhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIGNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbW92ZUxpc3RlbmVyLm1hdGNoKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BMaXN0ZW5pbmcoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3JpZ2luYWxTdGF0ZSA9IGFwaS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIHZhciBnZXRPcmlnaW5hbFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxTdGF0ZSA9PT0gSU5URVJOQUxfTklMX1RPS0VOKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYWxtICsgXCI6IGdldE9yaWdpbmFsU3RhdGUgY2FuIG9ubHkgYmUgY2FsbGVkIHN5bmNocm9ub3VzbHlcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsU3RhdGU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyTWFwLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFN0YXRlID0gYXBpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJFbnRyaWVzID0gQXJyYXkuZnJvbShsaXN0ZW5lck1hcC52YWx1ZXMoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGxpc3RlbmVyRW50cmllc18xID0gbGlzdGVuZXJFbnRyaWVzOyBfaSA8IGxpc3RlbmVyRW50cmllc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IGxpc3RlbmVyRW50cmllc18xW19pXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcnVuTGlzdGVuZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5MaXN0ZW5lciA9IGVudHJ5LnByZWRpY2F0ZShhY3Rpb24sIGN1cnJlbnRTdGF0ZSwgb3JpZ2luYWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChwcmVkaWNhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5MaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlbHlOb3RpZnlFcnJvcihvbkVycm9yLCBwcmVkaWNhdGVFcnJvciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFpc2VkQnk6IFwicHJlZGljYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcnVuTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVyKGVudHJ5LCBhY3Rpb24sIGFwaSwgZ2V0T3JpZ2luYWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsU3RhdGUgPSBJTlRFUk5BTF9OSUxfVE9LRU47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9OyB9OyB9O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtaWRkbGV3YXJlOiBtaWRkbGV3YXJlLFxyXG4gICAgICAgIHN0YXJ0TGlzdGVuaW5nOiBzdGFydExpc3RlbmluZyxcclxuICAgICAgICBzdG9wTGlzdGVuaW5nOiBzdG9wTGlzdGVuaW5nLFxyXG4gICAgICAgIGNsZWFyTGlzdGVuZXJzOiBjbGVhckxpc3RlbmVyTWlkZGxld2FyZVxyXG4gICAgfTtcclxufVxyXG4vLyBzcmMvYXV0b0JhdGNoRW5oYW5jZXIudHNcclxudmFyIFNIT1VMRF9BVVRPQkFUQ0ggPSBcIlJUS19hdXRvQmF0Y2hcIjtcclxudmFyIHByZXBhcmVBdXRvQmF0Y2hlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChwYXlsb2FkKSB7XHJcbiAgICB2YXIgX2M7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkLFxyXG4gICAgICAgIG1ldGE6IChfYyA9IHt9LCBfY1tTSE9VTERfQVVUT0JBVENIXSA9IHRydWUsIF9jKVxyXG4gICAgfSk7XHJcbn07IH07XHJcbnZhciBwcm9taXNlO1xyXG52YXIgcXVldWVNaWNyb3Rhc2tTaGltID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSBcImZ1bmN0aW9uXCIgPyBxdWV1ZU1pY3JvdGFzay5iaW5kKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogZ2xvYmFsVGhpcykgOiBmdW5jdGlvbiAoY2IpIHsgcmV0dXJuIChwcm9taXNlIHx8IChwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkpKS50aGVuKGNiKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIHRocm93IGVycjtcclxufSwgMCk7IH0pOyB9O1xyXG52YXIgY3JlYXRlUXVldWVXaXRoVGltZXIgPSBmdW5jdGlvbiAodGltZW91dCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub3RpZnkpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KG5vdGlmeSwgdGltZW91dCk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgckFGID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA6IGNyZWF0ZVF1ZXVlV2l0aFRpbWVyKDEwKTtcclxudmFyIGF1dG9CYXRjaEVuaGFuY2VyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHsgdHlwZTogXCJyYWZcIiB9OyB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN0b3JlID0gbmV4dC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xyXG4gICAgICAgIHZhciBub3RpZnlpbmcgPSB0cnVlO1xyXG4gICAgICAgIHZhciBzaG91bGROb3RpZnlBdEVuZE9mVGljayA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBub3RpZmljYXRpb25RdWV1ZWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHZhciBxdWV1ZUNhbGxiYWNrID0gb3B0aW9ucy50eXBlID09PSBcInRpY2tcIiA/IHF1ZXVlTWljcm90YXNrU2hpbSA6IG9wdGlvbnMudHlwZSA9PT0gXCJyYWZcIiA/IHJBRiA6IG9wdGlvbnMudHlwZSA9PT0gXCJjYWxsYmFja1wiID8gb3B0aW9ucy5xdWV1ZU5vdGlmaWNhdGlvbiA6IGNyZWF0ZVF1ZXVlV2l0aFRpbWVyKG9wdGlvbnMudGltZW91dCk7XHJcbiAgICAgICAgdmFyIG5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uUXVldWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGROb3RpZnlBdEVuZE9mVGljaykge1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsKCk7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RvcmUsIHtcclxuICAgICAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAobGlzdGVuZXIyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZExpc3RlbmVyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbm90aWZ5aW5nICYmIGxpc3RlbmVyMigpOyB9O1xyXG4gICAgICAgICAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKHdyYXBwZWRMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyMik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcjIpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5aW5nID0gISgoX2EgPSBhY3Rpb24gPT0gbnVsbCA/IHZvaWQgMCA6IGFjdGlvbi5tZXRhKSA9PSBudWxsID8gdm9pZCAwIDogX2FbU0hPVUxEX0FVVE9CQVRDSF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gIW5vdGlmeWluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub3RpZmljYXRpb25RdWV1ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvblF1ZXVlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZUNhbGxiYWNrKG5vdGlmeUxpc3RlbmVycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9OyB9O1xyXG59O1xyXG4vLyBzcmMvaW5kZXgudHNcclxuZW5hYmxlRVM1KCk7XHJcbmV4cG9ydCB7IEVuaGFuY2VyQXJyYXksIE1pZGRsZXdhcmVBcnJheSwgU0hPVUxEX0FVVE9CQVRDSCwgVGFza0Fib3J0RXJyb3IsIGFkZExpc3RlbmVyLCBhdXRvQmF0Y2hFbmhhbmNlciwgY2xlYXJBbGxMaXN0ZW5lcnMsIGNvbmZpZ3VyZVN0b3JlLCBjcmVhdGVBY3Rpb24sIGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yLCBjcmVhdGVFbnRpdHlBZGFwdGVyLCBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsIGNyZWF0ZUxpc3RlbmVyTWlkZGxld2FyZSwgZGVmYXVsdDIgYXMgY3JlYXRlTmV4dFN0YXRlLCBjcmVhdGVSZWR1Y2VyLCBjcmVhdGVTZWxlY3RvcjIgYXMgY3JlYXRlU2VsZWN0b3IsIGNyZWF0ZVNlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZSwgY3JlYXRlU2xpY2UsIGN1cnJlbnQyIGFzIGN1cnJlbnQsIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZSwgZnJlZXplLCBnZXREZWZhdWx0TWlkZGxld2FyZSwgZ2V0VHlwZSwgaXNBY3Rpb24sIGlzQWxsT2YsIGlzQW55T2YsIGlzQXN5bmNUaHVua0FjdGlvbiwgaXNEcmFmdDQgYXMgaXNEcmFmdCwgaXNGU0EgYXMgaXNGbHV4U3RhbmRhcmRBY3Rpb24sIGlzRnVsZmlsbGVkLCBpc0ltbXV0YWJsZURlZmF1bHQsIGlzUGVuZGluZywgaXNQbGFpbiwgaXNQbGFpbk9iamVjdCwgaXNSZWplY3RlZCwgaXNSZWplY3RlZFdpdGhWYWx1ZSwgbWluaVNlcmlhbGl6ZUVycm9yLCBuYW5vaWQsIG9yaWdpbmFsLCBwcmVwYXJlQXV0b0JhdGNoZWQsIHJlbW92ZUxpc3RlbmVyLCB1bndyYXBSZXN1bHQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVkdXgtdG9vbGtpdC5lc20uanMubWFwIiwiLyoqIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgcG90ZW50aWFsIFwiZXh0cmEgYXJndW1lbnRcIiB2YWx1ZSB0byBiZSBpbmplY3RlZCBsYXRlcixcclxuICogYW5kIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIHRodW5rIG1pZGRsZXdhcmUgdGhhdCB1c2VzIHRoYXQgdmFsdWVcclxuICovXG5mdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICAvLyBTdGFuZGFyZCBSZWR1eCBtaWRkbGV3YXJlIGRlZmluaXRpb24gcGF0dGVybjpcbiAgLy8gU2VlOiBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSN3cml0aW5nLWN1c3RvbS1taWRkbGV3YXJlXG4gIHZhciBtaWRkbGV3YXJlID0gZnVuY3Rpb24gbWlkZGxld2FyZShfcmVmKSB7XG4gICAgdmFyIGRpc3BhdGNoID0gX3JlZi5kaXNwYXRjaCxcbiAgICAgICAgZ2V0U3RhdGUgPSBfcmVmLmdldFN0YXRlO1xuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgLy8gVGhlIHRodW5rIG1pZGRsZXdhcmUgbG9va3MgZm9yIGFueSBmdW5jdGlvbnMgdGhhdCB3ZXJlIHBhc3NlZCB0byBgc3RvcmUuZGlzcGF0Y2hgLlxuICAgICAgICAvLyBJZiB0aGlzIFwiYWN0aW9uXCIgaXMgcmVhbGx5IGEgZnVuY3Rpb24sIGNhbGwgaXQgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIEluamVjdCB0aGUgc3RvcmUncyBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIG1ldGhvZHMsIGFzIHdlbGwgYXMgYW55IFwiZXh0cmEgYXJnXCJcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmFBcmd1bWVudCk7XG4gICAgICAgIH0gLy8gT3RoZXJ3aXNlLCBwYXNzIHRoZSBhY3Rpb24gZG93biB0aGUgbWlkZGxld2FyZSBjaGFpbiBhcyB1c3VhbFxuXG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gbWlkZGxld2FyZTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7IC8vIEF0dGFjaCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBzbyB1c2VycyBjYW4gY3JlYXRlIGEgY3VzdG9taXplZCB2ZXJzaW9uXG4vLyB3aXRoIHdoYXRldmVyIFwiZXh0cmEgYXJnXCIgdGhleSB3YW50IHRvIGluamVjdCBpbnRvIHRoZWlyIHRodW5rc1xuXG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcbmV4cG9ydCBkZWZhdWx0IHRodW5rOyIsImltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDInO1xuXG4vKipcbiAqIEFkYXB0ZWQgZnJvbSBSZWFjdDogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3NoYXJlZC9mb3JtYXRQcm9kRXJyb3JNZXNzYWdlLmpzXG4gKlxuICogRG8gbm90IHJlcXVpcmUgdGhpcyBtb2R1bGUgZGlyZWN0bHkhIFVzZSBub3JtYWwgdGhyb3cgZXJyb3IgY2FsbHMuIFRoZXNlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xuICogZHVyaW5nIGJ1aWxkLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcbiAqL1xuZnVuY3Rpb24gZm9ybWF0UHJvZEVycm9yTWVzc2FnZShjb2RlKSB7XG4gIHJldHVybiBcIk1pbmlmaWVkIFJlZHV4IGVycm9yICNcIiArIGNvZGUgKyBcIjsgdmlzaXQgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvRXJyb3JzP2NvZGU9XCIgKyBjb2RlICsgXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgXCIgKyAndXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycy4gJztcbn1cblxuLy8gSW5saW5lZCB2ZXJzaW9uIG9mIHRoZSBgc3ltYm9sLW9ic2VydmFibGVgIHBvbHlmaWxsXG52YXIgJCRvYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLm9ic2VydmFibGUgfHwgJ0BAb2JzZXJ2YWJsZSc7XG59KSgpO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLy8gSW5saW5lZCAvIHNob3J0ZW5lZCB2ZXJzaW9uIG9mIGBraW5kT2ZgIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQva2luZC1vZlxuZnVuY3Rpb24gbWluaUtpbmRPZih2YWwpIHtcbiAgaWYgKHZhbCA9PT0gdm9pZCAwKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gIGlmICh2YWwgPT09IG51bGwpIHJldHVybiAnbnVsbCc7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnc3ltYm9sJzpcbiAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICB7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkgcmV0dXJuICdhcnJheSc7XG4gIGlmIChpc0RhdGUodmFsKSkgcmV0dXJuICdkYXRlJztcbiAgaWYgKGlzRXJyb3IodmFsKSkgcmV0dXJuICdlcnJvcic7XG4gIHZhciBjb25zdHJ1Y3Rvck5hbWUgPSBjdG9yTmFtZSh2YWwpO1xuXG4gIHN3aXRjaCAoY29uc3RydWN0b3JOYW1lKSB7XG4gICAgY2FzZSAnU3ltYm9sJzpcbiAgICBjYXNlICdQcm9taXNlJzpcbiAgICBjYXNlICdXZWFrTWFwJzpcbiAgICBjYXNlICdXZWFrU2V0JzpcbiAgICBjYXNlICdNYXAnOlxuICAgIGNhc2UgJ1NldCc6XG4gICAgICByZXR1cm4gY29uc3RydWN0b3JOYW1lO1xuICB9IC8vIG90aGVyXG5cblxuICByZXR1cm4gdHlwZS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJycpO1xufVxuXG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwuY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgPyB2YWwuY29uc3RydWN0b3IubmFtZSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBFcnJvciB8fCB0eXBlb2YgdmFsLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHJldHVybiB0cnVlO1xuICByZXR1cm4gdHlwZW9mIHZhbC50b0RhdGVTdHJpbmcgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuc2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICB2YXIgdHlwZU9mVmFsID0gdHlwZW9mIHZhbDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHR5cGVPZlZhbCA9IG1pbmlLaW5kT2YodmFsKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlT2ZWYWw7XG59XG5cbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqXG4gKiAqKldlIHJlY29tbWVuZCB1c2luZyB0aGUgYGNvbmZpZ3VyZVN0b3JlYCBtZXRob2RcbiAqIG9mIHRoZSBgQHJlZHV4anMvdG9vbGtpdGAgcGFja2FnZSoqLCB3aGljaCByZXBsYWNlcyBgY3JlYXRlU3RvcmVgLlxuICpcbiAqIFJlZHV4IFRvb2xraXQgaXMgb3VyIHJlY29tbWVuZGVkIGFwcHJvYWNoIGZvciB3cml0aW5nIFJlZHV4IGxvZ2ljIHRvZGF5LFxuICogaW5jbHVkaW5nIHN0b3JlIHNldHVwLCByZWR1Y2VycywgZGF0YSBmZXRjaGluZywgYW5kIG1vcmUuXG4gKlxuICogKipGb3IgbW9yZSBkZXRhaWxzLCBwbGVhc2UgcmVhZCB0aGlzIFJlZHV4IGRvY3MgcGFnZToqKlxuICogKipodHRwczovL3JlZHV4LmpzLm9yZy9pbnRyb2R1Y3Rpb24vd2h5LXJ0ay1pcy1yZWR1eC10b2RheSoqXG4gKlxuICogYGNvbmZpZ3VyZVN0b3JlYCBmcm9tIFJlZHV4IFRvb2xraXQgaXMgYW4gaW1wcm92ZWQgdmVyc2lvbiBvZiBgY3JlYXRlU3RvcmVgIHRoYXRcbiAqIHNpbXBsaWZpZXMgc2V0dXAgYW5kIGhlbHBzIGF2b2lkIGNvbW1vbiBidWdzLlxuICpcbiAqIFlvdSBzaG91bGQgbm90IGJlIHVzaW5nIHRoZSBgcmVkdXhgIGNvcmUgcGFja2FnZSBieSBpdHNlbGYgdG9kYXksIGV4Y2VwdCBmb3IgbGVhcm5pbmcgcHVycG9zZXMuXG4gKiBUaGUgYGNyZWF0ZVN0b3JlYCBtZXRob2QgZnJvbSB0aGUgY29yZSBgcmVkdXhgIHBhY2thZ2Ugd2lsbCBub3QgYmUgcmVtb3ZlZCwgYnV0IHdlIGVuY291cmFnZVxuICogYWxsIHVzZXJzIHRvIG1pZ3JhdGUgdG8gdXNpbmcgUmVkdXggVG9vbGtpdCBmb3IgYWxsIFJlZHV4IGNvZGUuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gdXNlIGBjcmVhdGVTdG9yZWAgd2l0aG91dCB0aGlzIHZpc3VhbCBkZXByZWNhdGlvbiB3YXJuaW5nLCB1c2VcbiAqIHRoZSBgbGVnYWN5X2NyZWF0ZVN0b3JlYCBpbXBvcnQgaW5zdGVhZDpcbiAqXG4gKiBgaW1wb3J0IHsgbGVnYWN5X2NyZWF0ZVN0b3JlIGFzIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdgXG4gKlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgwKSA6ICdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNjcmVhdGluZy1hLXN0b3JlLXdpdGgtZW5oYW5jZXJzIGZvciBhbiBleGFtcGxlLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMSkgOiBcIkV4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKGVuaGFuY2VyKSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDIpIDogXCJFeHBlY3RlZCB0aGUgcm9vdCByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YocmVkdWNlcikgKyBcIidcIik7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoaXMgbWFrZXMgYSBzaGFsbG93IGNvcHkgb2YgY3VycmVudExpc3RlbmVycyBzbyB3ZSBjYW4gdXNlXG4gICAqIG5leHRMaXN0ZW5lcnMgYXMgYSB0ZW1wb3JhcnkgbGlzdCB3aGlsZSBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogVGhpcyBwcmV2ZW50cyBhbnkgYnVncyBhcm91bmQgY29uc3VtZXJzIGNhbGxpbmdcbiAgICogc3Vic2NyaWJlL3Vuc3Vic2NyaWJlIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMpIDogJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNCkgOiBcIkV4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKGxpc3RlbmVyKSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNSkgOiAnWW91IG1heSBub3QgY2FsbCBzdG9yZS5zdWJzY3JpYmUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnSWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgbm90aWZpZWQgYWZ0ZXIgdGhlIHN0b3JlIGhhcyBiZWVuIHVwZGF0ZWQsIHN1YnNjcmliZSBmcm9tIGEgJyArICdjb21wb25lbnQgYW5kIGludm9rZSBzdG9yZS5nZXRTdGF0ZSgpIGluIHRoZSBjYWxsYmFjayB0byBhY2Nlc3MgdGhlIGxhdGVzdCBzdGF0ZS4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg2KSA6ICdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGkvc3RvcmUjc3Vic2NyaWJlbGlzdGVuZXIgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgY3VycmVudExpc3RlbmVycyA9IG51bGw7XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg3KSA6IFwiQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuIEluc3RlYWQsIHRoZSBhY3R1YWwgdHlwZSB3YXM6ICdcIiArIGtpbmRPZihhY3Rpb24pICsgXCInLiBZb3UgbWF5IG5lZWQgdG8gYWRkIG1pZGRsZXdhcmUgdG8geW91ciBzdG9yZSBzZXR1cCB0byBoYW5kbGUgZGlzcGF0Y2hpbmcgb3RoZXIgdmFsdWVzLCBzdWNoIGFzICdyZWR1eC10aHVuaycgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIGZ1bmN0aW9ucy4gU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC00LXN0b3JlI21pZGRsZXdhcmUgYW5kIGh0dHBzOi8vcmVkdXguanMub3JnL3R1dG9yaWFscy9mdW5kYW1lbnRhbHMvcGFydC02LWFzeW5jLWxvZ2ljI3VzaW5nLXRoZS1yZWR1eC10aHVuay1taWRkbGV3YXJlIGZvciBleGFtcGxlcy5cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDgpIDogJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gWW91IG1heSBoYXZlIG1pc3NwZWxsZWQgYW4gYWN0aW9uIHR5cGUgc3RyaW5nIGNvbnN0YW50LicpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg5KSA6ICdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTApIDogXCJFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihuZXh0UmVkdWNlcikpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7IC8vIFRoaXMgYWN0aW9uIGhhcyBhIHNpbWlsaWFyIGVmZmVjdCB0byBBY3Rpb25UeXBlcy5JTklULlxuICAgIC8vIEFueSByZWR1Y2VycyB0aGF0IGV4aXN0ZWQgaW4gYm90aCB0aGUgbmV3IGFuZCBvbGQgcm9vdFJlZHVjZXJcbiAgICAvLyB3aWxsIHJlY2VpdmUgdGhlIHByZXZpb3VzIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAgIC8vIHRoZSBuZXcgc3RhdGUgdHJlZSB3aXRoIGFueSByZWxldmFudCBkYXRhIGZyb20gdGhlIG9sZCBvbmUuXG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRVBMQUNFXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEludGVyb3BlcmFiaWxpdHkgcG9pbnQgZm9yIG9ic2VydmFibGUvcmVhY3RpdmUgbGlicmFyaWVzLlxuICAgKiBAcmV0dXJucyB7b2JzZXJ2YWJsZX0gQSBtaW5pbWFsIG9ic2VydmFibGUgb2Ygc3RhdGUgY2hhbmdlcy5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGUgb2JzZXJ2YWJsZSBwcm9wb3NhbDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtb2JzZXJ2YWJsZVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcgfHwgb2JzZXJ2ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMSkgOiBcIkV4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2Yob2JzZXJ2ZXIpICsgXCInXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sIF9yZWZbJCRvYnNlcnZhYmxlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sIF9yZWY7XG4gIH0gLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG5cblxuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICB9KTtcbiAgcmV0dXJuIF9yZWYyID0ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH0sIF9yZWYyWyQkb2JzZXJ2YWJsZV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKlxuICogKipXZSByZWNvbW1lbmQgdXNpbmcgYGNvbmZpZ3VyZVN0b3JlYCBmcm9tIHRoZVxuICogYEByZWR1eGpzL3Rvb2xraXRgIHBhY2thZ2UqKiwgd2hpY2ggcmVwbGFjZXMgYGNyZWF0ZVN0b3JlYDpcbiAqICoqaHR0cHM6Ly9yZWR1eC5qcy5vcmcvaW50cm9kdWN0aW9uL3doeS1ydGstaXMtcmVkdXgtdG9kYXkqKlxuICpcbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG52YXIgbGVnYWN5X2NyZWF0ZVN0b3JlID0gY3JlYXRlU3RvcmU7XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIGtpbmRPZihpbnB1dFN0YXRlKSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEyKSA6IFwiVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEzKSA6IFwiVGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gXCIgKyAoXCJEb24ndCB0cnkgdG8gaGFuZGxlICdcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIicgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTQpIDogXCJXaGVuIGNhbGxlZCB3aXRoIGFuIGFjdGlvbiBvZiB0eXBlIFwiICsgKGFjdGlvblR5cGUgPyBcIlxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIDogJyh1bmtub3duIHR5cGUpJykgKyBcIiwgdGhlIHNsaWNlIHJlZHVjZXIgZm9yIGtleSBcXFwiXCIgKyBfa2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cblxuICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhzdGF0ZSkubGVuZ3RoO1xuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGFuIGFjdGlvbiBjcmVhdG9yIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBkaXNwYXRjaCB3cmFwcGVkIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE2KSA6IFwiYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBidXQgaW5zdGVhZCByZWNlaXZlZDogJ1wiICsga2luZE9mKGFjdGlvbkNyZWF0b3JzKSArIFwiJy4gXCIgKyBcIkRpZCB5b3Ugd3JpdGUgXFxcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIiBpbnN0ZWFkIG9mIFxcXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXFxcIj9cIik7XG4gIH1cblxuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuXG4gIGZvciAodmFyIGtleSBpbiBhY3Rpb25DcmVhdG9ycykge1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNSkgOiAnRGlzcGF0Y2hpbmcgd2hpbGUgY29uc3RydWN0aW5nIHlvdXIgbWlkZGxld2FyZSBpcyBub3QgYWxsb3dlZC4gJyArICdPdGhlciBtaWRkbGV3YXJlIHdvdWxkIG5vdCBiZSBhcHBsaWVkIHRvIHRoaXMgZGlzcGF0Y2guJyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB2YXIgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IGNvbXBvc2UuYXBwbHkodm9pZCAwLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc3RvcmUpLCB7fSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSwgbGVnYWN5X2NyZWF0ZVN0b3JlIH07XG4iLCIvLyBDYWNoZSBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBFcmlrIFJhc211c3NlbidzIGBscnUtbWVtb2l6ZWA6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZXJpa3Jhcy9scnUtbWVtb2l6ZVxudmFyIE5PVF9GT1VORCA9ICdOT1RfRk9VTkQnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGV0b25DYWNoZShlcXVhbHMpIHtcbiAgdmFyIGVudHJ5O1xuICByZXR1cm4ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgaWYgKGVudHJ5ICYmIGVxdWFscyhlbnRyeS5rZXksIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSkge1xuICAgICAgZW50cnkgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRFbnRyaWVzOiBmdW5jdGlvbiBnZXRFbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGVudHJ5ID8gW2VudHJ5XSA6IFtdO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgZW50cnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMcnVDYWNoZShtYXhTaXplLCBlcXVhbHMpIHtcbiAgdmFyIGVudHJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGNhY2hlSW5kZXggPSBlbnRyaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHJldHVybiBlcXVhbHMoa2V5LCBlbnRyeS5rZXkpO1xuICAgIH0pOyAvLyBXZSBmb3VuZCBhIGNhY2hlZCBlbnRyeVxuXG4gICAgaWYgKGNhY2hlSW5kZXggPiAtMSkge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tjYWNoZUluZGV4XTsgLy8gQ2FjaGVkIGVudHJ5IG5vdCBhdCB0b3Agb2YgY2FjaGUsIG1vdmUgaXQgdG8gdGhlIHRvcFxuXG4gICAgICBpZiAoY2FjaGVJbmRleCA+IDApIHtcbiAgICAgICAgZW50cmllcy5zcGxpY2UoY2FjaGVJbmRleCwgMSk7XG4gICAgICAgIGVudHJpZXMudW5zaGlmdChlbnRyeSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgICB9IC8vIE5vIGVudHJ5IGZvdW5kIGluIGNhY2hlLCByZXR1cm4gc2VudGluZWxcblxuXG4gICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgaWYgKGdldChrZXkpID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIFRPRE8gSXMgdW5zaGlmdCBzbG93P1xuICAgICAgZW50cmllcy51bnNoaWZ0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IG1heFNpemUpIHtcbiAgICAgICAgZW50cmllcy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgZW50cmllcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldCxcbiAgICBwdXQ6IHB1dCxcbiAgICBnZXRFbnRyaWVzOiBnZXRFbnRyaWVzLFxuICAgIGNsZWFyOiBjbGVhclxuICB9O1xufVxuXG5leHBvcnQgdmFyIGRlZmF1bHRFcXVhbGl0eUNoZWNrID0gZnVuY3Rpb24gZGVmYXVsdEVxdWFsaXR5Q2hlY2soYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FjaGVLZXlDb21wYXJhdG9yKGVxdWFsaXR5Q2hlY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKHByZXYsIG5leHQpIHtcbiAgICBpZiAocHJldiA9PT0gbnVsbCB8fCBuZXh0ID09PSBudWxsIHx8IHByZXYubGVuZ3RoICE9PSBuZXh0Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gRG8gdGhpcyBpbiBhIGZvciBsb29wIChhbmQgbm90IGEgYGZvckVhY2hgIG9yIGFuIGBldmVyeWApIHNvIHdlIGNhbiBkZXRlcm1pbmUgZXF1YWxpdHkgYXMgZmFzdCBhcyBwb3NzaWJsZS5cblxuXG4gICAgdmFyIGxlbmd0aCA9IHByZXYubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlcXVhbGl0eUNoZWNrKHByZXZbaV0sIG5leHRbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cbi8vIGRlZmF1bHRNZW1vaXplIG5vdyBzdXBwb3J0cyBhIGNvbmZpZ3VyYWJsZSBjYWNoZSBzaXplIHdpdGggTFJVIGJlaGF2aW9yLFxuLy8gYW5kIG9wdGlvbmFsIGNvbXBhcmlzb24gb2YgdGhlIHJlc3VsdCB2YWx1ZSB3aXRoIGV4aXN0aW5nIHZhbHVlc1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNZW1vaXplKGZ1bmMsIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMpIHtcbiAgdmFyIHByb3ZpZGVkT3B0aW9ucyA9IHR5cGVvZiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zID09PSAnb2JqZWN0JyA/IGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgOiB7XG4gICAgZXF1YWxpdHlDaGVjazogZXF1YWxpdHlDaGVja09yT3B0aW9uc1xuICB9O1xuICB2YXIgX3Byb3ZpZGVkT3B0aW9ucyRlcXVhID0gcHJvdmlkZWRPcHRpb25zLmVxdWFsaXR5Q2hlY2ssXG4gICAgICBlcXVhbGl0eUNoZWNrID0gX3Byb3ZpZGVkT3B0aW9ucyRlcXVhID09PSB2b2lkIDAgPyBkZWZhdWx0RXF1YWxpdHlDaGVjayA6IF9wcm92aWRlZE9wdGlvbnMkZXF1YSxcbiAgICAgIF9wcm92aWRlZE9wdGlvbnMkbWF4UyA9IHByb3ZpZGVkT3B0aW9ucy5tYXhTaXplLFxuICAgICAgbWF4U2l6ZSA9IF9wcm92aWRlZE9wdGlvbnMkbWF4UyA9PT0gdm9pZCAwID8gMSA6IF9wcm92aWRlZE9wdGlvbnMkbWF4UyxcbiAgICAgIHJlc3VsdEVxdWFsaXR5Q2hlY2sgPSBwcm92aWRlZE9wdGlvbnMucmVzdWx0RXF1YWxpdHlDaGVjaztcbiAgdmFyIGNvbXBhcmF0b3IgPSBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjayk7XG4gIHZhciBjYWNoZSA9IG1heFNpemUgPT09IDEgPyBjcmVhdGVTaW5nbGV0b25DYWNoZShjb21wYXJhdG9yKSA6IGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGNvbXBhcmF0b3IpOyAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcblxuICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICB2YXIgdmFsdWUgPSBjYWNoZS5nZXQoYXJndW1lbnRzKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YWx1ZSA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHJlc3VsdEVxdWFsaXR5Q2hlY2spIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBjYWNoZS5nZXRFbnRyaWVzKCk7XG4gICAgICAgIHZhciBtYXRjaGluZ0VudHJ5ID0gZW50cmllcy5maW5kKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRFcXVhbGl0eUNoZWNrKGVudHJ5LnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0VudHJ5KSB7XG4gICAgICAgICAgdmFsdWUgPSBtYXRjaGluZ0VudHJ5LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhY2hlLnB1dChhcmd1bWVudHMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBtZW1vaXplZC5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWNoZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiBtZW1vaXplZDtcbn0iLCJpbXBvcnQgeyBkZWZhdWx0TWVtb2l6ZSwgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgfSBmcm9tICcuL2RlZmF1bHRNZW1vaXplJztcbmV4cG9ydCB7IGRlZmF1bHRNZW1vaXplLCBkZWZhdWx0RXF1YWxpdHlDaGVjayB9O1xuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMoZnVuY3MpIHtcbiAgdmFyIGRlcGVuZGVuY2llcyA9IEFycmF5LmlzQXJyYXkoZnVuY3NbMF0pID8gZnVuY3NbMF0gOiBmdW5jcztcblxuICBpZiAoIWRlcGVuZGVuY2llcy5ldmVyeShmdW5jdGlvbiAoZGVwKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbic7XG4gIH0pKSB7XG4gICAgdmFyIGRlcGVuZGVuY3lUeXBlcyA9IGRlcGVuZGVuY2llcy5tYXAoZnVuY3Rpb24gKGRlcCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBkZXAgPT09ICdmdW5jdGlvbicgPyBcImZ1bmN0aW9uIFwiICsgKGRlcC5uYW1lIHx8ICd1bm5hbWVkJykgKyBcIigpXCIgOiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbGwgaW5wdXQtc2VsZWN0b3JzIHRvIGJlIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdHlwZXM6IFtcIiArIGRlcGVuZGVuY3lUeXBlcyArIFwiXVwiKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckNyZWF0b3IobWVtb2l6ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWVtb2l6ZU9wdGlvbnNGcm9tQXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWVtb2l6ZU9wdGlvbnNGcm9tQXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgY3JlYXRlU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcigpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBmdW5jc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHZhciBfcmVjb21wdXRhdGlvbnMgPSAwO1xuXG4gICAgdmFyIF9sYXN0UmVzdWx0OyAvLyBEdWUgdG8gdGhlIGludHJpY2FjaWVzIG9mIHJlc3QgcGFyYW1zLCB3ZSBjYW4ndCBkbyBhbiBvcHRpb25hbCBhcmcgYWZ0ZXIgYC4uLmZ1bmNzYC5cbiAgICAvLyBTbywgc3RhcnQgYnkgZGVjbGFyaW5nIHRoZSBkZWZhdWx0IHZhbHVlIGhlcmUuXG4gICAgLy8gKEFuZCB5ZXMsIHRoZSB3b3JkcyAnbWVtb2l6ZScgYW5kICdvcHRpb25zJyBhcHBlYXIgdG9vIG1hbnkgdGltZXMgaW4gdGhpcyBuZXh0IHNlcXVlbmNlLilcblxuXG4gICAgdmFyIGRpcmVjdGx5UGFzc2VkT3B0aW9ucyA9IHtcbiAgICAgIG1lbW9pemVPcHRpb25zOiB1bmRlZmluZWRcbiAgICB9OyAvLyBOb3JtYWxseSwgdGhlIHJlc3VsdCBmdW5jIG9yIFwib3V0cHV0IHNlbGVjdG9yXCIgaXMgdGhlIGxhc3QgYXJnXG5cbiAgICB2YXIgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpOyAvLyBJZiB0aGUgcmVzdWx0IGZ1bmMgaXMgYWN0dWFsbHkgYW4gX29iamVjdF8sIGFzc3VtZSBpdCdzIG91ciBvcHRpb25zIG9iamVjdFxuXG4gICAgaWYgKHR5cGVvZiByZXN1bHRGdW5jID09PSAnb2JqZWN0Jykge1xuICAgICAgZGlyZWN0bHlQYXNzZWRPcHRpb25zID0gcmVzdWx0RnVuYzsgLy8gYW5kIHBvcCB0aGUgcmVhbCByZXN1bHQgZnVuYyBvZmZcblxuICAgICAgcmVzdWx0RnVuYyA9IGZ1bmNzLnBvcCgpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0RnVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY3JlYXRlU2VsZWN0b3IgZXhwZWN0cyBhbiBvdXRwdXQgZnVuY3Rpb24gYWZ0ZXIgdGhlIGlucHV0cywgYnV0IHJlY2VpdmVkOiBbXCIgKyB0eXBlb2YgcmVzdWx0RnVuYyArIFwiXVwiKTtcbiAgICB9IC8vIERldGVybWluZSB3aGljaCBzZXQgb2Ygb3B0aW9ucyB3ZSdyZSB1c2luZy4gUHJlZmVyIG9wdGlvbnMgcGFzc2VkIGRpcmVjdGx5LFxuICAgIC8vIGJ1dCBmYWxsIGJhY2sgdG8gb3B0aW9ucyBnaXZlbiB0byBjcmVhdGVTZWxlY3RvckNyZWF0b3IuXG5cblxuICAgIHZhciBfZGlyZWN0bHlQYXNzZWRPcHRpb24gPSBkaXJlY3RseVBhc3NlZE9wdGlvbnMsXG4gICAgICAgIF9kaXJlY3RseVBhc3NlZE9wdGlvbjIgPSBfZGlyZWN0bHlQYXNzZWRPcHRpb24ubWVtb2l6ZU9wdGlvbnMsXG4gICAgICAgIG1lbW9pemVPcHRpb25zID0gX2RpcmVjdGx5UGFzc2VkT3B0aW9uMiA9PT0gdm9pZCAwID8gbWVtb2l6ZU9wdGlvbnNGcm9tQXJncyA6IF9kaXJlY3RseVBhc3NlZE9wdGlvbjI7IC8vIFNpbXBsaWZ5aW5nIGFzc3VtcHRpb246IGl0J3MgdW5saWtlbHkgdGhhdCB0aGUgZmlyc3Qgb3B0aW9ucyBhcmcgb2YgdGhlIHByb3ZpZGVkIG1lbW9pemVyXG4gICAgLy8gaXMgYW4gYXJyYXkuIEluIG1vc3QgbGlicyBJJ3ZlIGxvb2tlZCBhdCwgaXQncyBhbiBlcXVhbGl0eSBmdW5jdGlvbiBvciBvcHRpb25zIG9iamVjdC5cbiAgICAvLyBCYXNlZCBvbiB0aGF0LCBpZiBgbWVtb2l6ZU9wdGlvbnNgIF9pc18gYW4gYXJyYXksIHdlIGFzc3VtZSBpdCdzIGEgZnVsbFxuICAgIC8vIHVzZXItcHJvdmlkZWQgYXJyYXkgb2Ygb3B0aW9ucy4gT3RoZXJ3aXNlLCBpdCBtdXN0IGJlIGp1c3QgdGhlIF9maXJzdF8gYXJnLCBhbmQgc29cbiAgICAvLyB3ZSB3cmFwIGl0IGluIGFuIGFycmF5IHNvIHdlIGNhbiBhcHBseSBpdC5cblxuICAgIHZhciBmaW5hbE1lbW9pemVPcHRpb25zID0gQXJyYXkuaXNBcnJheShtZW1vaXplT3B0aW9ucykgPyBtZW1vaXplT3B0aW9ucyA6IFttZW1vaXplT3B0aW9uc107XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG4gICAgdmFyIG1lbW9pemVkUmVzdWx0RnVuYyA9IG1lbW9pemUuYXBwbHkodm9pZCAwLCBbZnVuY3Rpb24gcmVjb21wdXRhdGlvbldyYXBwZXIoKSB7XG4gICAgICBfcmVjb21wdXRhdGlvbnMrKzsgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cblxuICAgICAgcmV0dXJuIHJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XS5jb25jYXQoZmluYWxNZW1vaXplT3B0aW9ucykpOyAvLyBJZiBhIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFyZ3VtZW50cyB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIG91ciBkZXBlbmRlbmNpZXMgYWdhaW4uXG5cbiAgICB2YXIgc2VsZWN0b3IgPSBtZW1vaXplKGZ1bmN0aW9uIGRlcGVuZGVuY2llc0NoZWNrZXIoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICB2YXIgbGVuZ3RoID0gZGVwZW5kZW5jaWVzLmxlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgYW5kIG11dGF0ZSBhIGxvY2FsIGxpc3Qgb2YgcGFyYW1zIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYXJhbXMucHVzaChkZXBlbmRlbmNpZXNbaV0uYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XG4gICAgICB9IC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG5cblxuICAgICAgX2xhc3RSZXN1bHQgPSBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICAgIHJldHVybiBfbGFzdFJlc3VsdDtcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKHNlbGVjdG9yLCB7XG4gICAgICByZXN1bHRGdW5jOiByZXN1bHRGdW5jLFxuICAgICAgbWVtb2l6ZWRSZXN1bHRGdW5jOiBtZW1vaXplZFJlc3VsdEZ1bmMsXG4gICAgICBkZXBlbmRlbmNpZXM6IGRlcGVuZGVuY2llcyxcbiAgICAgIGxhc3RSZXN1bHQ6IGZ1bmN0aW9uIGxhc3RSZXN1bHQoKSB7XG4gICAgICAgIHJldHVybiBfbGFzdFJlc3VsdDtcbiAgICAgIH0sXG4gICAgICByZWNvbXB1dGF0aW9uczogZnVuY3Rpb24gcmVjb21wdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfcmVjb21wdXRhdGlvbnM7XG4gICAgICB9LFxuICAgICAgcmVzZXRSZWNvbXB1dGF0aW9uczogZnVuY3Rpb24gcmVzZXRSZWNvbXB1dGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIF9yZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdG9yO1xuICB9OyAvLyBAdHMtaWdub3JlXG5cblxuICByZXR1cm4gY3JlYXRlU2VsZWN0b3I7XG59XG5leHBvcnQgdmFyIGNyZWF0ZVNlbGVjdG9yID0gLyogI19fUFVSRV9fICovY3JlYXRlU2VsZWN0b3JDcmVhdG9yKGRlZmF1bHRNZW1vaXplKTtcbi8vIE1hbnVhbCBkZWZpbml0aW9uIG9mIHN0YXRlIGFuZCBvdXRwdXQgYXJndW1lbnRzXG5leHBvcnQgdmFyIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcihzZWxlY3RvcnMsIHNlbGVjdG9yQ3JlYXRvcikge1xuICBpZiAoc2VsZWN0b3JDcmVhdG9yID09PSB2b2lkIDApIHtcbiAgICBzZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvcjtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIGV4cGVjdHMgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0ICcgKyAoXCJ3aGVyZSBlYWNoIHByb3BlcnR5IGlzIGEgc2VsZWN0b3IsIGluc3RlYWQgcmVjZWl2ZWQgYSBcIiArIHR5cGVvZiBzZWxlY3RvcnMpKTtcbiAgfVxuXG4gIHZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMoc2VsZWN0b3JzKTtcbiAgdmFyIHJlc3VsdFNlbGVjdG9yID0gc2VsZWN0b3JDcmVhdG9yKCAvLyBAdHMtaWdub3JlXG4gIG9iamVjdEtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzW2tleV07XG4gIH0pLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIHZhbHVlc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChjb21wb3NpdGlvbiwgdmFsdWUsIGluZGV4KSB7XG4gICAgICBjb21wb3NpdGlvbltvYmplY3RLZXlzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBjb21wb3NpdGlvbjtcbiAgICB9LCB7fSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0U2VsZWN0b3I7XG59OyIsImV4cG9ydCBjb25zdCBJQ09OX0lORk8gPSB7XG4gICAgLy8gSU5URVJORVQ6IHtcbiAgICAvLyAgICAgdHlwZTogXCJJTlRFUk5FVFwiLFxuICAgIC8vICAgICBleHRlbnN0aW9uOiBcIlwiLFxuICAgIC8vICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1pbnRlcm5ldC5wbmdcIixcbiAgICAvLyAgICAgZXhwbGFuYXRpb246IFwi7J247YSw64S3IOyVhOydtOy9mFwiLFxuICAgIC8vIH0sXG4gICAgLy8gRk9MREVSOiB7XG4gICAgLy8gICAgIHR5cGU6IFwiRk9MREVSXCIsXG4gICAgLy8gICAgIGV4dGVuc3Rpb246IFwiXCIsXG4gICAgLy8gICAgIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZvbGRlci5wbmdcIixcbiAgICAvLyAgICAgZXhwbGFuYXRpb246IFwi7Y+0642UIOyVhOydtOy9mFwiLFxuICAgIC8vIH0sXG4gICAgLy8gVFhUOiB7XG4gICAgLy8gICAgIHR5cGU6IFwiVFhUXCIsXG4gICAgLy8gICAgIGV4dGVuc3Rpb246IFwidHh0XCIsXG4gICAgLy8gICAgIGltZ1NyYzogXCIuL2Fzc2V0cy9pY29ucy9pY29uLWZpbGUtZG9jdW1lbnQucG5nXCIsXG4gICAgLy8gICAgIGV4cGxhbmF0aW9uOiBcIu2FjeyKpO2KuCDtjIzsnbwg7JWE7J207L2YXCIsXG4gICAgLy8gfSxcbiAgICBDQUxDVUxBVE9SOiB7XG4gICAgICAgIHR5cGU6IFwiQ0FMQ1VMQVRPUlwiLFxuICAgICAgICBleHRlbnN0aW9uOiBcIlwiLFxuICAgICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLFxuICAgICAgICBleHBsYW5hdGlvbjogXCLqs4TsgrDquLAg7JWE7J207L2YXCIsXG4gICAgfSxcbn1cblxuLypcbiog6riw67O4IOyVhOydtOy9mCDsoJXrs7RcbiovXG5leHBvcnQgY29uc3QgREVGQVVMVF9JQ09OID0gW1xuICAgIC8vIHtcbiAgICAvLyAgICAgaWR4OiAwLFxuICAgIC8vICAgICBuYW1lOiBcIuyduO2EsOuEtyDsnbXsiqTtlIzroZzrn6xcIixcbiAgICAvLyAgICAgZXh0ZW5zdGlvbjogSUNPTl9JTkZPLklOVEVSTkVULmV4dGVuc3Rpb24sXG4gICAgLy8gICAgIHR5cGU6IElDT05fSU5GTy5JTlRFUk5FVC50eXBlLFxuICAgIC8vICAgICBpbWdTcmM6IElDT05fSU5GTy5JTlRFUk5FVC5pbWdTcmMsXG4gICAgLy8gICAgIGV4cGxhbmF0aW9uOiBJQ09OX0lORk8uSU5URVJORVQuZXhwbGFuYXRpb24sXG4gICAgLy8gICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMSwgZ3JpZENvbHVtblN0YXJ0OiAxIH0sXG4gICAgLy8gfSxcbiAgICAvLyB7IFxuICAgIC8vICAgICBpZHg6IDEsXG4gICAgLy8gICAgIG5hbWU6IFwi64K0IOusuOyEnFwiLFxuICAgIC8vICAgICBleHRlbnNpb246IElDT05fSU5GTy5GT0xERVIuZXh0ZW5zdGlvbixcbiAgICAvLyAgICAgdHlwZTogSUNPTl9JTkZPLkZPTERFUi50eXBlLFxuICAgIC8vICAgICBpbWdTcmM6IElDT05fSU5GTy5GT0xERVIuaW1nU3JjLFxuICAgIC8vICAgICBleHBsYW5hdGlvbjogSUNPTl9JTkZPLkZPTERFUi5leHBsYW5hdGlvbixcbiAgICAvLyAgICAgc3R5bGU6IHsgZ3JpZFJvd1N0YXJ0OiAyLCBncmlkQ29sdW1uU3RhcnQ6IDEgfSxcbiAgICAvLyB9LFxuICAgIC8vIHtcbiAgICAvLyAgICAgaWR4OiAyLFxuICAgIC8vICAgICBuYW1lOiBcIu2MjOydvC50eHRcIixcbiAgICAvLyAgICAgZXh0ZW5zaW9uOiBJQ09OX0lORk8uVFhULmV4dGVuc3Rpb24sXG4gICAgLy8gICAgIHR5cGU6IElDT05fSU5GTy5UWFQudHlwZSxcbiAgICAvLyAgICAgaW1nU3JjOiBJQ09OX0lORk8uVFhULmltZ1NyYyxcbiAgICAvLyAgICAgZXhwbGFuYXRpb246IElDT05fSU5GTy5UWFQuZXhwbGFuYXRpb24sXG4gICAgLy8gICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMywgZ3JpZENvbHVtblN0YXJ0OiAxIH0sXG4gICAgLy8gfSxcbiAgICB7XG4gICAgICAgIGlkeDogMCxcbiAgICAgICAgbmFtZTogXCLqs4TsgrDquLBcIixcbiAgICAgICAgZXh0ZW5zaW9uOiBJQ09OX0lORk8uQ0FMQ1VMQVRPUi5leHRlbnN0aW9uLFxuICAgICAgICB0eXBlOiBJQ09OX0lORk8uQ0FMQ1VMQVRPUi50eXBlLFxuICAgICAgICBpbWdTcmM6IElDT05fSU5GTy5DQUxDVUxBVE9SLmltZ1NyYyxcbiAgICAgICAgZXhwbGFuYXRpb246IElDT05fSU5GTy5DQUxDVUxBVE9SLmV4cGxhbmF0aW9uLFxuICAgICAgICBzdHlsZTogeyBncmlkUm93U3RhcnQ6IDEsIGdyaWRDb2x1bW5TdGFydDogMSwgYmFja2dyb3VuZFBvc2l0aW9uOiBcIi00OHB4IC00OHB4XCIgfSxcbiAgICB9LFxuXVxuIiwiaW1wb3J0IEljb25zIGZyb20gXCIuL2NvbXBvbmVudHMvY29tbW9uL0ljb25zXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2L05hdlwiO1xuXG5mdW5jdGlvbiBDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIChgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICR7SWNvbnMoKX1cbiAgICAgICAgICAgICR7TmF2KCl9XG4gICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUV2ZW50cywgdXNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vY29yZS9DdXN0b21SZWFjdFwiO1xuXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uLy4uL3JlZHVjZXIvc3RvcmVcIjtcbmltcG9ydCB7IGFkZE1vZGFsIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvbW9kYWxzL2FjdGlvblwiO1xuXG5cbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuaW1wb3J0IHsgTU9EQUwgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvcmVkdWNlci9pbmRleFwiO1xuaW1wb3J0IHsgREVGQVVMVF9JQ09OIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50cy9jb21wb25lbnRzL2NvbW1vbi9pY29uXCI7XG5cbmltcG9ydCB7IGljb25DbGlja0NhbGxiYWNrLCBjb250YWluZXJDbGlja0NhbGxiYWNrLCBpY29uRHJhZ0NhbGxiYWNrLCBpY29uRGJDbGlja0NhbGxiYWNrIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zLWV2ZW50LWhlbHBlclwiO1xuXG4vKlxuKiDslYTsnbTsvZgg7Lu07Y+s64SM7Yq4XG4qL1xuZnVuY3Rpb24gSWNvbnMgKCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0gPSBzdG9yZTtcbiAgICBjb25zdCB7IG1vZGFsczogbW9kYWxzU3RhdGUgfSA9IGdldFN0YXRlKCk7XG5cbiAgICBjb25zdCBbaWNvbnMsIHNldEljb25zXSA9IHVzZVN0YXRlKFwiSWNvbnNcIiwgREVGQVVMVF9JQ09OKTtcblxuICAgIC8qXG4gICAgKiDslYTsnbTsvZgg7J2067Kk7Yq4XG4gICAgKi9cbiAgICAvLyAxLiDslYTsnbTsvZgg7YG066at7ZaI7J2EIOuVjFxuICAgIGNvbnN0IGljb25DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpY29uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmRlZmF1bHQtaWNvblwiKTtcblxuICAgICAgICByZXR1cm4gW0FycmF5LmZyb20oaWNvbkxpc3QpLCAnbW91c2Vkb3duJywgaWNvbkNsaWNrQ2FsbGJhY2tdO1xuICAgIH1cblxuICAgIC8vIDIuIOyVhOydtOy9mCDsmbjrtoAg7ZmU66m0IO2BtOumre2WiOydhCDrlYxcbiAgICBjb25zdCBjb250YWluZXJDbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBbY29udGFpbmVyLCAnbW91c2Vkb3duJywgY29udGFpbmVyQ2xpY2tDYWxsYmFja107XG4gICAgfVxuXG4gICAgLy8gMy4g7JWE7J207L2YIOuTnOuemOq3uCDsnbTrsqTtirggKC5kZWZhdWx0LWljb24gZHJhZ3N0YXJ0IC0+IGRvY3VtZW50IGRyYWdvdmVyICYgZHJvcClcbiAgICAvLyBUT0RPLiDtjIzsnbwg7JWE7J207L2Y7J20IO2PtOuNlCDsnITroZwg7J2064+Z65CgIOqyveyasCDtj7TrjZQg7JWI7Jy866GcIOydtOuPmeuQmOuPhOuhnSDsiJjsoJVcbiAgICAvLyBUT0RPLiDslYTsnbTsvZjrgbzrpqwg6rK57LmY7KeAIOyViuuPhOuhnSDsiJjsoJVcbiAgICBjb25zdCBpY29uRHJhZ0V2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpY29uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmRlZmF1bHQtaWNvblwiKTtcblxuICAgICAgICByZXR1cm4gW0FycmF5LmZyb20oaWNvbkxpc3QpLCAnZHJhZ3N0YXJ0JywgaWNvbkRyYWdDYWxsYmFjaywgaWNvbnMsIHNldEljb25zXTtcbiAgICB9XG5cbiAgICAvLyA0LiDslYTsnbTsvZgg642U67iU7YG066at7J2067Kk7Yq4XG4gICAgY29uc3QgaWNvbkRiQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICAgICAgLy8gcmV0dXJuIFtBcnJheS5mcm9tKGljb25MaXN0KSwgJ2RibGNsaWNrJywgaWNvbkRiQ2xpY2tDYWxsYmFjaywgaWNvbnNdO1xuICAgICAgICBjb25zdCBpY29uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KFwiLmRlZmF1bHQtaWNvblwiKTtcbiAgICAgICAgY29uc3QgbmVlZGVkU3RhdGUgPSB7IG1vZGFsc0xlbmd0aDogbW9kYWxzU3RhdGUubW9kYWxzLmxlbmd0aCwgaWNvbnMgfTtcbiAgICAgICAgY29uc3Qgc2V0TmVlZGVkU3RhdGUgPSAodmFsdWU6IE1PREFMKSA9PiBkaXNwYXRjaChhZGRNb2RhbCh2YWx1ZSkpO1xuXG4gICAgICAgIHJldHVybiBbQXJyYXkuZnJvbShpY29uTGlzdCksICdkYmxjbGljaycsIGljb25EYkNsaWNrQ2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZV07XG4gICAgfVxuXG4gICAgY29uc3QgaWNvbkV2ZW50cyA9IFtcbiAgICAgICAgaWNvbkNsaWNrRXZlbnQsXG4gICAgICAgIGNvbnRhaW5lckNsaWNrRXZlbnQsXG4gICAgICAgIGljb25EcmFnRXZlbnQsXG4gICAgICAgIGljb25EYkNsaWNrRXZlbnQsXG4gICAgXTtcbiAgICB1c2VFdmVudHMoaWNvbkV2ZW50cyk7XG5cbiAgICAvKlxuICAgICog7JWE7J207L2YIOy7tO2PrOuEjO2KuCBcbiAgICAqL1xuICAgIGNvbnN0IGljb25UZW1wbGF0ZSA9IChpY29uOiBJSWNvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIChgXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD1cImljb24tJHtpY29uLmlkeH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb24tbmFtZT1cIiR7aWNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgICAgYXJpYS1pY29uLWV4cGxhbmF0aW9uPVwiJHtpY29uLmV4cGxhbmF0aW9ufVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7aWNvbi5leHBsYW5hdGlvbn1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZ3JpZC1jb2x1bW4tc3RhcnQ6ICR7aWNvbi5zdHlsZS5ncmlkQ29sdW1uU3RhcnR9O2dyaWQtcm93LXN0YXJ0OiAke2ljb24uc3R5bGUuZ3JpZFJvd1N0YXJ0fTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgc3R5bGU9XCJiYWNrZ3JvdW5kLXBvc2l0aW9uOiAke2ljb24uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9ufVwiPjwvZmlndXJlPlxuICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLnN1YnN0cmluZygwLCA4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7aWNvbi5uYW1lLmxlbmd0aCA+IDggPyAnLi4uJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGA8b2xcbiAgICAgICAgICAgIGNsYXNzPVwibWFpbi1zY3JlZW4tY29udGFpbmVyXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCLrsJTtg5XtmZTrqbRcIlxuICAgICAgICA+XG4gICAgICAgICAgICAke2ljb25zLm1hcCgoaWNvbjogSUljb25zKSA9PiBpY29uVGVtcGxhdGUoaWNvbikpLmpvaW4oJycpfVxuICAgICAgICA8L29sPlxuICAgICAgICA8ZGl2PiR7bW9kYWxzU3RhdGUubW9kYWxzLm1hcCgodjogTU9EQUwpID0+IHYuY29udGVudCkuam9pbignJyl9PC9kaXY+YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbnM7XG4iLCJpbXBvcnQgeyB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwiLi4vLi4vY29yZS9DdXN0b21SZWFjdFwiO1xuaW1wb3J0IHsgSUljb25zIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL2NvbXBvbmVudHMvY29tbW9uL2ljb25zXCI7XG5cbmludGVyZmFjZSBJV2luZG93TW9kYWwge1xuICAgIGljb246IElJY29ucztcbiAgICBtb2RhbElkeDogbnVtYmVyO1xuICAgIG1haW4/OiBFbGVtZW50O1xuICAgIGZvb3Rlcj86IEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIFdpbmRvd01vZGFsICh7aWNvbiwgbW9kYWxJZHgsIG1haW4sIGZvb3Rlcn06IElXaW5kb3dNb2RhbCkge1xuICAgIGNvbnN0IG51bUNyaXRlcmlhID0gTnVtYmVyLnBhcnNlSW50KGljb24uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uLnNwbGl0KFwicHhcIilbMF0pO1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgdHJ1ZSk7XG4gICAgY29uc3QgW21vZGFsSW5kZXgsIHNldE1vZGFsSW5kZXhdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCBtb2RhbElkeCk7XG4gICAgXG4gICAgY29uc3QgW21vZGFsU2l6ZSwgc2V0TW9kYWxTaXplXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgeyB3aWR0aDogNjAwLCBoZWlnaHQ6IDUwMCB9KTtcbiAgICBjb25zdCBbbW9kYWxUcmFuc2xhdGUsIHNldE1vZGFsVHJhbnNsYXRlXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgeyBYOiAxMDAsIFk6IDE1MCB9KTtcblxuICAgIGNvbnN0IFtpc0Z1bGxTaXplLCBzZXRJc0Z1bGxTaXplXSA9IHVzZVN0YXRlKFwiV2luZG93TW9kYWxcIiwgZmFsc2UpO1xuXG4gICAgLypcbiAgICAqIOuqqOuLrCDsnbTrsqTtirhcbiAgICAqL1xuICAgIC8vIDEuIOuqqOuLrCDssL0g7Zek642UIOyYpOuluOyqvSgubW9kYWwtaGVhZGVyLXJpZ2h0KSAoLSwg44WBLCB4KSDrsoTtirzsnYQg64iM66CA7J2EIOuVjFxuICAgIC8vIDEgLSAxLiDri6vquLAoeCkg67KE7Yq8XG4gICAgLy8gY29uc3QgY2xvc2VCdG5DbGlja0V2ZW50ID0gKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnRuXCIpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImNsb3NlQnRuXCIsKTtcbiAgICAvLyAgICAgY29uc3QgY2xvc2VCdG5DbGlja0NhbGxiYWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAvLyAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwieWFob29cIik7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICByZXR1cm4gW2Nsb3NlQnRuLCAnY2xpY2snLCBjbG9zZUJ0bkNsaWNrQ2FsbGJhY2tdXG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3QgbW9kYWxFdmVudHMgPSBbXG4gICAgLy8gICAgIGNsb3NlQnRuQ2xpY2tFdmVudCxcbiAgICAvLyBdO1xuXG4gICAgLy8gdXNlRXZlbnRzKG1vZGFsRXZlbnRzKTtcbiAgICBjb25zdCBtaW5pbWl6ZUJ0bkV2ZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtaW5pbWl6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiI21pbmltaXplLWJ0blwiKTtcbiAgICAgICAgLy8gY29uc3QgbWF4aW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heGltaXplLWJ0blwiKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdG9yZURvd25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3RvcmUtZG93bi1idG5cIik7XG4gICAgICAgIC8vIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1idG5cIik7XG5cbiAgICAgICAgbWluaW1pemVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZWVlZWVlXCIsIGUpO1xuICAgICAgICAgICAgYWxlcnQoJ2VlZWVlZWUnKTtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBtaW5pbWl6ZUJ0bkNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoJ3lhaG9vIScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdXNlRXZlbnRzKFttaW5pbWl6ZUJ0bkV2ZW50XSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZUNTU0NoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kYWxJZHhcIiwgbW9kYWxJZHgpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFRyYW5zbGF0ZSA9IHsgWDogbW9kYWxUcmFuc2xhdGUuWCArIDIwICogbW9kYWxJZHgsIFk6IG1vZGFsVHJhbnNsYXRlLlkgKyAyMCAqIG1vZGFsSWR4IH07XG4gICAgICAgICAgICBzZXRNb2RhbFRyYW5zbGF0ZShkZWZhdWx0VHJhbnNsYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVDU1NDaGFuZ2UoKTtcbiAgICB9LCBbXSlcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIC8vXG4gICAgLy8gfSwgW21vZGFsU2l6ZS53aWR0aCwgbW9kYWxTaXplLmhlaWdodCwgbW9kYWxUcmFuc2xhdGUuWCwgbW9kYWxUcmFuc2xhdGUuWV0pXG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgPGRpdlxuICAgICAgICAgICAgICAgIGlkPVwid2luZG93LW1vZGFsLSR7bW9kYWxJbmRleH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwid2luZG93LW1vZGFsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAke21vZGFsU2l6ZS53aWR0aH1weDsgaGVpZ2h0OiAke21vZGFsU2l6ZS5oZWlnaHR9cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7bW9kYWxUcmFuc2xhdGUuWH1weCwgJHttb2RhbFRyYW5zbGF0ZS5ZfXB4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlciBzdG9wLWRyYWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbS1pY29uLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjogJHtudW1Dcml0ZXJpYSAvIDJ9cHggJHtudW1Dcml0ZXJpYSAvIDJ9cHg7XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyLW1pZGRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtpY29uLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIm1pbmltaXplLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMTZweDtoZWlnaHQ6IDE2cHg7ZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0yMCwxNEg0VjEwSDIwXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpc0Z1bGxTaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGJ1dHRvbiBpZD1cInJlc3RvcmUtZG93bi1idG5cIj48c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O2ZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTggMThWMjBINEEyIDIgMCAwIDEgMiAxOFY4SDRWMThNMjIgNlYxNEEyIDIgMCAwIDEgMjAgMTZIOEEyIDIgMCAwIDEgNiAxNFY2QTIgMiAwIDAgMSA4IDRIMjBBMiAyIDAgMCAxIDIyIDZNMjAgNkg4VjE0SDIwWlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJzxidXR0b24gaWQ9XCJtYXhpbWl6ZS1idG5cIj48c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O2ZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMywzSDIxVjIxSDNWM001LDVWMTlIMTlWNUg1WlwiIC8+PC9zdmc+PC9idXR0b24+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgc3R5bGU9XCJ3aWR0aDogMjBweDtoZWlnaHQ6IDIwcHg7ZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpO1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMy40NiwxMkwxOSwxNy41NFYxOUgxNy41NEwxMiwxMy40Nkw2LjQ2LDE5SDVWMTcuNTRMMTAuNTQsMTJMNSw2LjQ2VjVINi40NkwxMiwxMC41NEwxNy41NCw1SDE5VjYuNDZMMTMuNDYsMTJaXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzcz1cIm1vZGFsLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1haW4tYnRuXCI+64Sk7J2067KE66GcIOydtOuPmTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGAke2lzT3BlbiA/IG1vZGFsQ29udGVudCgpIDogJyd9YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93TW9kYWw7IiwiaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9yZWR1Y2VyL3N0b3JlXCI7XG5pbXBvcnQgTmF2SXRlbSBmcm9tIFwiLi9OYXZJdGVtXCI7XG5cblxuZnVuY3Rpb24gTmF2KCkge1xuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0gPSBzdG9yZTtcbiAgICBjb25zdCB7IG1vZGFsczogbW9kYWxzU3RhdGUgfSA9IGdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGZvb3RlciBpZD1cInN0c3R1cy1kaXNwbGF5LWJhclwiIGFyaWEtbGFiZWw9XCLtlZjri6gg7IOB7YOcIOywvVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndpbmRvdy1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL3dpbmRvdy1sb2dvLnBuZ1wiIGFsdD1cIuyciOuPhOyasCDroZzqs6BcIiAvPlxuICAgICAgICAgICAgICAgIDxwPuyLnOyekTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAke21vZGFsc1N0YXRlLm1vZGFscy5tYXAoKG1vZGFsKSA9PiBOYXZJdGVtKG1vZGFsLmljb24pKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1ci10aW1lXCI+XG4gICAgICAgICAgICAgICAgPHA+7Jik7KCEIDExOjU1PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIGApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuZnVuY3Rpb24gTmF2SXRlbSAoaWNvbjogSUljb25zKSB7XG4gICAgY29uc3QgbnVtQ3JpdGVyaWEgPSBOdW1iZXIucGFyc2VJbnQoaWNvbi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24uc3BsaXQoXCJweFwiKVswXSk7XG5cbiAgICByZXR1cm4gKGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hdi1pdGVtIGZvY3VzZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbS1pY29uLWltZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1wb3NpdGlvbjogJHtudW1Dcml0ZXJpYSAvIDJ9cHggJHtudW1Dcml0ZXJpYSAvIDJ9cHg7XCI+PC9kaXY+XG4gICAgICAgICAgICA8cD4ke2ljb24ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PmBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkl0ZW07IiwiLypcbiog66as7JWh7Yq4IGhvb2tzIOqwhOuLqO2eiCDqtaztmIRcbiovXG5mdW5jdGlvbiBDdXN0b21SZWFjdCAoKSB7XG4gICAgbGV0IHJvb3Q6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuICAgIGxldCByb290Q29tcG9uZW50OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBjdXJTdGF0ZXNJZHggPSBuZXcgTWFwKCk7XG5cbiAgICBsZXQgbW91bnRFZmZlY3RzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGNvbnN0IGVmZmVjdERlcGVuZGVuY2llczogYW55W10gPSBbXTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGN1ckVmZmVjdElkeDogMCxcbiAgICAgICAgcmVuZGVyQ291bnQ6IDAsXG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAxLiByZW5kZXJcbiAgICAqIHJlbmRlcjogcm9vdOqwgCDrkJjripQg7JeY66as66i87Yq466W8IOugjOuNlOunge2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHJlbmRlciA9IChyb290RWw6IEVsZW1lbnQgfCBhbnksIHJvb3RDb21wb25lbnRFbDogRWxlbWVudCB8IGFueSkgPT4ge1xuICAgICAgICBpZiAocm9vdEVsKSB7XG4gICAgICAgICAgICByb290ID0gcm9vdEVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3RDb21wb25lbnRFbCkge1xuICAgICAgICAgICAgcm9vdENvbXBvbmVudCA9IHJvb3RDb21wb25lbnRFbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgX3JlbmRlcigpO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyAyLiB1c2VFdmVudHNcbiAgICAqIHVzZUV2ZW50czog7Lu07Y+s64SM7Yq466W8IOuqqOuRkCDroIzrjZTrp4HtlZwg7ZuEIOydtOuypO2KuOulvCDrk7HroZ3tlaAg7IiYIOyeiOuPhOuhnSDrj4TsmYDso7zripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCB1c2VFdmVudHMgPSAoZXZlbnRGbnM6IEFycmF5PEZ1bmN0aW9uPikgPT4ge1xuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJldmVudEZuc1wiLCBldmVudEZucyk7XG4gICAgICAgICAgICBldmVudEZucy5mb3JFYWNoKChmbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWFob28xXCIsIGZuKTtcbiAgICAgICAgICAgICAgICAvKiBcbiAgICAgICAgICAgICAgICAqIGVsOiDsnbTrsqTtirgg7ZWo7IiY66W8IOu2meydtOqzoCDsi7bsnYAg7JeY66as66i87Yq47J2YIOuwsOyXtCDtmLnsnYAg64uo7J28IOyXmOumrOuovO2KuFxuICAgICAgICAgICAgICAgICogZXZlbnQ6IOydtOuypO2KuCDtlajsiJjsnZgg7J2067Kk7Yq4IOyiheulmFxuICAgICAgICAgICAgICAgICogY2FsbGJhY2s6IOydtOuypO2KuCDtlajsiJjsnZgg7L2c67CxIO2VqOyImFxuICAgICAgICAgICAgICAgICogbmVlZGVkU3RhdGU6IOydtOuypO2KuCDtlajsiJjrpbwg7Iuk7ZaJ7ZWY66m07IScIO2VhOyalO2VnCBzdGF0ZVxuICAgICAgICAgICAgICAgICogc2V0TmVlZGVkU3RhdGU6IOydtOuypO2KuCDtlajsiJjrpbwg7Iuk7ZaJ7ZWY66m07IScIOuwlOq+uOqzoCDsi7bsnYAgc3RhdGXrpbwg67OA7ZmU7Iuc7YKk64qUIO2VqOyImFxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgY29uc3QgW2VsLCBldmVudCwgY2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZV0gPSBmbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWFob28yXCIsIGVsLCBldmVudCwgY2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuZm9yRWFjaCgodGFyZ2V0RWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlOiBFdmVudCkgPT4gY2FsbGJhY2soZSwgdGFyZ2V0RWwsIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChlOiBFdmVudCkgPT4gY2FsbGJhY2soZSwgZWwsIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnRGbnMuZm9yRWFjaCgoZm4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW2VsLCBldmVudCwgY2FsbGJhY2ssIG5lZWRlZFN0YXRlLCBzZXROZWVkZWRTdGF0ZV0gPSBmbigpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuZm9yRWFjaCgodGFyZ2V0RWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCAoZTogRXZlbnQpID0+IGNhbGxiYWNrKGUsIHRhcmdldEVsLCBuZWVkZWRTdGF0ZSwgc2V0TmVlZGVkU3RhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgKGU6IEV2ZW50KSA9PiBjYWxsYmFjayhlLCBlbCwgbmVlZGVkU3RhdGUsIHNldE5lZWRlZFN0YXRlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtdKTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICog7YG066Gc7KCAKO2VqOyImCDshKDslrjsi5zsnZgg7Iqk7L2U7ZSE66W8IOq4sOyWte2VmOuKlCDsnpDrsJTsiqTtgazrpr3tirjsnZgg7Yq57KeVKeulvCDtmZzsmqlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsZXIgdXNlU3RhdGXrpbwg7Zi47Lac7ZWcIOy7tO2PrOuEjO2KuCjtlajsiJgp66qFXG4gICAgKiBAcGFyYW0ge2FueX0gaW5pdFN0YXRlIOy0iOq4sO2ZlO2VoCBzdGF0ZVxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoY2FsbGVyOiBzdHJpbmcsIGluaXRTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgIGlmICghc3RhdGVzLmdldChjYWxsZXIpKSB7XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KGNhbGxlciwgW10pO1xuICAgICAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1clN0YXRlSWR4ID0gY3VyU3RhdGVzSWR4LmdldChjYWxsZXIpO1xuXG4gICAgICAgIGlmICghc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSkge1xuICAgICAgICAgICAgc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSA9IGluaXRTdGF0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFN0YXRlJywgY2FsbGVyLCBjdXJTdGF0ZUlkeCwgbmV3U3RhdGUpO1xuXG4gICAgICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJTdGF0ZXNJZHguc2V0KGNhbGxlciwgY3VyU3RhdGVJZHggKyAxKTtcbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgLyogXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyA0LiB1c2VFZmZlY3RcbiAgICAqIHVzZUVmZmVjdDogZGVwZW5kZW5jeSDrsLDsl7TsnZgg6rCS65Ok7JeQIOuzgOqyveydtCDsg53qsrzsnYQg6rK97JqwIGNhbGxiYWNr7J2EIOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUVmZmVjdCA9IChjYWxsYmFjazogRnVuY3Rpb24sIGRlcGVuZGVuY2llczogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICAvLyAxLiBkZXBlbmRlbmN56rCAIOyXhuydhCDqsr3smrAgY2FsbGJhY2sg67CU66GcIOyLpO2WiSAobW91bnQg65CY7JeI7J2EIOuVjCDsi6TtlokpXG4gICAgICAgIC8vIGV4LiB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbW91bnRFZmZlY3RzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyLiBkZXBlbmRlbmN56rCAIOyeiOydhCDqsr3smrAgZGVwZW5kZW5jeSDrs4Dqsr0g7Iuc7JeQ66eMIGNhbGxiYWNrIOyLpO2WiVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbYSwgYiwgLi4uLCB6XSlcbiAgICAgICAgY29uc3QgeyBjdXJFZmZlY3RJZHggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGVmZmVjdERlcGVuZGVuY2llcy5sZW5ndGggPT09IGN1ckVmZmVjdElkeCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzLnB1c2goZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImVmZmVjdERlcGVuZGVuY2llc1wiLCBlZmZlY3REZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XTtcblxuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lOiDtjJDrs4Qg7ZWo7IiYIOyggeyWtOuPhCDtlZjrgpjrnbzrj4Qg7Ya16rO87ZWY64qU7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8gT2JqZWN0LmlzOiDrkZAg6rCc7J2YIO2MjOudvOuvuO2EsOqwgCDrj5nsnbztlZzsp4Ag7LK07YGsXG4gICAgICAgICAgICAvLyDspoksIOq4sOyhtCBkZXBlbmRlbmN57JmAIOyDiOuhnCDrsJvsnYAgZGVwZW5kZW5jeSDsgqzsnbTsl5Ag7LCo7J206rCAIO2VmOuCmOudvOuPhCDsnojripQg6rK97JqwIHRydWXrpbwg67CY7ZmYXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZGVwZW5kZW5jaWVzLnNvbWUoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5pcyh2LCBkZXBlbmRlbmN5W2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJoYXNDaGFuZ2VkXCIsIGhhc0NoYW5nZWQpO1xuXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XSA9IGRlcGVuZGVuY2llcztcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCArPSAxO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCDrgrTrtoAg7ZWo7IiYXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBkZWJvdW5jZUZyYW1lOiAx7LSI64u5IOuUlOyKpO2UjOugiOydtCDso7zsgqzsnKjrp4ztgbwg7Iuk7ZaJ7ZWY6rKMIO2VmOyXrCDsp4DrgpjsuZwg66CM642U66eB7J2EIOuwqeyngO2VmOq4sCDsnITtlZwg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBkZWJvdW5jZUZyYW1lID0gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4ge1xuICAgICAgICBsZXQgbmV4dEZyYW1lQ2FsbGJhY2sgPSAtMTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShuZXh0RnJhbWVDYWxsYmFjayk7XG4gICAgICAgICAgbmV4dEZyYW1lQ2FsbGJhY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgKiBleGVjdXRlTW91bnRFZmZlY3RzOiBtb3VudCDsi5wg7Iuk7ZaJ7ZWgIOuplOyEnOuTnOuTpOydhCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBleGVjdXRlTW91bnRFZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICBpZiAobW91bnRFZmZlY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjdXRlTW91bnRFZmZlY3RzJywgbW91bnRFZmZlY3RzKTtcbiAgICAgICAgICAgIG1vdW50RWZmZWN0cy5mb3JFYWNoKChtb3VudEVmRm4pID0+IG1vdW50RWZGbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKiBfcmVuZGVyOiDsi6Tsp4jsoIHsnLzroZwg66as7JWh7Yq4IOuCtOu2gOyXkOyEnCDroIzrjZTrp4HsnYQg64u064u57ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgX3JlbmRlciA9IGRlYm91bmNlRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAoIXJvb3QgfHwgIXJvb3RDb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIO2ZlOuptCDroIzrjZTrp4FcbiAgICAgICAgcm9vdC5pbm5lckhUTUwgPSByb290Q29tcG9uZW50KCk7XG5cbiAgICAgICAgLy8g66eI7Jq07Yq4IOyLnCDsi6Ttlonsi5ztgqwg7L2c67CxIO2VqOyImCDsi6TtlolcbiAgICAgICAgZXhlY3V0ZU1vdW50RWZmZWN0cygpO1xuICAgICAgICBcbiAgICAgICAgLy8g67OA7IiYIOy0iOq4sO2ZlFxuICAgICAgICBjb25zdCBjYWxsZXJzTmFtZSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIF9dIG9mIHN0YXRlcykge1xuICAgICAgICAgICAgY2FsbGVyc05hbWUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxlcnNOYW1lLmZvckVhY2goKGNhbGxlcikgPT4ge1xuICAgICAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIDApO1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZXMuZW50cmllcygpKTtcbiAgICAgICAgY29uc29sZS5sb2coY3VyU3RhdGVzSWR4LmVudHJpZXMoKSk7XG5cbiAgICAgICAgb3B0aW9ucy5jdXJFZmZlY3RJZHggPSAwO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciBjdXJFZmZlY3RJZHgnLCBvcHRpb25zLmN1ckVmZmVjdElkeCk7XG5cbiAgICAgICAgbW91bnRFZmZlY3RzID0gW107XG5cbiAgICAgICAgLy8g66CM642U66eBIO2an+yImCDtmZXsnbhcbiAgICAgICAgb3B0aW9ucy5yZW5kZXJDb3VudCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnX3JlbmRlciByZW5kZXJDb3VudCcsIG9wdGlvbnMucmVuZGVyQ291bnQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgX3JlbmRlciwgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfTtcbn1cblxuXG5jb25zdCB7IF9yZW5kZXIsIHJlbmRlciwgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSBDdXN0b21SZWFjdCgpO1xuXG5leHBvcnQgeyBfcmVuZGVyLCByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCJpbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge1xuICBDSEFOR0VfR0xPQkFMX0lTX0xPQURJTkcsXG4gIENMRUFSX0FMTF9TVEFURSxcbn0gZnJvbSAnLi9hY3Rpb25UeXBlJztcblxuZXhwb3J0IGNvbnN0IGNsZWFyQWxsUmVkdWNlclN0YXRlID0gY3JlYXRlQWN0aW9uPHZvaWQsIHN0cmluZz4oQ0xFQVJfQUxMX1NUQVRFKTtcbmV4cG9ydCBjb25zdCBjaGFuZ2VHbG9iYWxJc0xvYWRpbmcgPSBjcmVhdGVBY3Rpb248Ym9vbGVhbiwgc3RyaW5nPihcbiAgQ0hBTkdFX0dMT0JBTF9JU19MT0FESU5HLFxuKTtcbiIsImV4cG9ydCBjb25zdCBDTEVBUl9BTExfU1RBVEUgPSAnR0xPQkFML0NMRUFSX0FMTF9TVEFURScgYXMgY29uc3Q7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0dMT0JBTF9JU19MT0FESU5HID1cbiAgJ0dMT0JBTC9DSEFOR0VfR0xPQkFMX0lTX0xPQURJTkcnIGFzIGNvbnN0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7Y3JlYXRlUmVkdWNlciwgUGF5bG9hZEFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge2NoYW5nZUdsb2JhbElzTG9hZGluZ30gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IHtHbG9iYWxTdGF0ZSwgUm9vdFJlZHVjZXJTdGF0ZX0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVkdWNlcic7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogR2xvYmFsU3RhdGUgPSB7XG4gIGlzTG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgY29uc3QgZ2xvYmFsU3RhdGVTZWxlY3RvciA9IChzdGF0ZTogUm9vdFJlZHVjZXJTdGF0ZSk6IEdsb2JhbFN0YXRlID0+IHtcbiAgcmV0dXJuIHN0YXRlLmdsb2JhbFJlZHVjZXI7XG59O1xuXG5jb25zdCBnbG9iYWxSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGJ1aWxkZXIgPT5cbiAgYnVpbGRlci5hZGRDYXNlKFxuICAgIGNoYW5nZUdsb2JhbElzTG9hZGluZyxcbiAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxib29sZWFuPikgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEFERF9NT0RBTCB9IGZyb20gXCIuL2FjdGlvblR5cGVcIjtcbmltcG9ydCB7IE1PREFMIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzL3JlZHVjZXIvaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IGFkZE1vZGFsID0gY3JlYXRlQWN0aW9uPE1PREFMPihBRERfTU9EQUwpOyIsImV4cG9ydCBjb25zdCBBRERfTU9EQUwgPSAnTU9EQUxTL0FERF9NT0RBTCcgYXMgY29uc3Q7IiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHsgTW9kYWxzU3RhdGUsIFJvb3RSZWR1Y2VyU3RhdGUsIE1PREFMIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVkdWNlcic7XG5pbXBvcnQgeyBhZGRNb2RhbCB9IGZyb20gXCIuL2FjdGlvblwiO1xuaW1wb3J0IHsgX3JlbmRlciB9IGZyb20gJy4uLy4uL2NvcmUvQ3VzdG9tUmVhY3QnO1xuXG5jb25zdCBpbml0aWFsU3RhdGU6IE1vZGFsc1N0YXRlID0ge1xuICBtb2RhbHMgOiBbXSxcbn1cblxuZXhwb3J0IGNvbnN0IG1vZGFsU3RhdGVTZWxlY3RvciA9IChzdGF0ZTogUm9vdFJlZHVjZXJTdGF0ZSk6IE1vZGFsc1N0YXRlID0+IHtcbiAgcmV0dXJuIHN0YXRlLm1vZGFsUmVkdWNlcjtcbn07XG5cbmNvbnN0IG1vZGFsc1JlZHVjZXIgPSBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwgYnVpbGRlciA9PlxuICBidWlsZGVyLmFkZENhc2UoXG4gICAgYWRkTW9kYWwsXG4gICAgKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248TU9EQUw+KSA9PiB7XG4gICAgICBzdGF0ZS5tb2RhbHMucHVzaChhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBfcmVuZGVyKCk7XG4gICAgfVxuICApXG4pXG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsc1JlZHVjZXI7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG4vLyBpbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IF9yZW5kZXIgfSBmcm9tICcuLi9jb3JlL0N1c3RvbVJlYWN0JztcblxuaW1wb3J0IGdsb2JhbFJlZHVjZXIgZnJvbSAnLi9nbG9iYWwvcmVkdWNlcic7XG5pbXBvcnQgbW9kYWxzUmVkdWNlciBmcm9tICcuL21vZGFscy9yZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICBnbG9iYWw6IGdsb2JhbFJlZHVjZXIsXG4gICAgbW9kYWxzOiBtb2RhbHNSZWR1Y2VyLFxufSlcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHJvb3RSZWR1Y2VyLFxuICBkZXZUb29sczogdHJ1ZSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuaW1wb3J0IFdpbmRvd01vZGFsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9XaW5kb3dNb2RhbFwiO1xuXG4vKlxuKiDslYTsnbTsvZgg7J2066aEIOq0gOugqCAo7J2066aE7J20IOq4uCDqsr3smrAg7Ken6rKMIC8g7YG066atIOyLnOyXkCDtkoDrhKTsnoQpXG4qL1xuY29uc3QgYWJicmV2aWF0ZUljb25OYW1lID0gKHY6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuXG4gICAgY29uc3QgZnVsbEljb25OYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTDtcbiAgICBjb25zdCBzaG9ydE5hbWUgPSBgJHtmdWxsSWNvbk5hbWUuc3Vic3RyaW5nKDAsIDgpfS4uLmA7XG5cbiAgICBpZiAoZnVsbEljb25OYW1lLmxlbmd0aCA+IDgpIHtcbiAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gc2hvcnROYW1lO1xuICAgIH1cbn1cblxuY29uc3Qgc2hvd0Z1bGxJY29uTmFtZSA9ICh2OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcbiAgICBjb25zdCBmdWxsSWNvbk5hbWUgPSB2LmRhdGFzZXQuaWNvbk5hbWUgfHwgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MO1xuXG4gICAgaWYgKGZ1bGxJY29uTmFtZS5sZW5ndGggPiA4KSB7XG4gICAgICAgIGljb25GaWdjYXB0aW9uLmlubmVySFRNTCA9IGZ1bGxJY29uTmFtZTtcbiAgICB9XG59XG5cbi8qXG4qIOyVhOydtOy9mCDtgbTrpq0g7YG0656Y7IqkIOq0gOugqCAo7YG066at65CY7JeI7J2EIOuVjCBjbGlja2VkIO2BtOuemOyKpCDstpTqsIAgLyDsgq3soJwpXG4qL1xuY29uc3QgaW5Gb2N1c0ljb24gPSAodjogRWxlbWVudCkgPT4ge1xuICAgIHYuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xufVxuXG5jb25zdCBvdXRGb2N1c0ljb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGljb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuZGVmYXVsdC1pY29uXCIpO1xuXG4gICAgaWNvbkxpc3QuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICBpZiAodi5jbGFzc0xpc3QudmFsdWUuaW5jbHVkZXMoJ2NsaWNrZWQnKSApIHtcbiAgICAgICAgICAgIHYuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgYWJicmV2aWF0ZUljb25OYW1lKHYpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuLy8gMS4g7JWE7J207L2YIO2BtOumre2WiOydhCDrlYxcbmV4cG9ydCBjb25zdCBpY29uQ2xpY2tDYWxsYmFjayA9IChlOiBNb3VzZUV2ZW50LCB0YXJnZXQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvdXRGb2N1c0ljb25zKCk7XG4gICAgaW5Gb2N1c0ljb24odGFyZ2V0KTtcbiAgICBzaG93RnVsbEljb25OYW1lKHRhcmdldCk7XG59XG5cbi8vIDIuIOyVhOydtOy9mCDsmbjrtoAg7ZmU66m0IO2BtOumre2WiOydhCDrlYxcbmV4cG9ydCBjb25zdCBjb250YWluZXJDbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgIG91dEZvY3VzSWNvbnMoKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0SWNvbklkeCA9ICh2OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodi5pZC5zcGxpdChcIi1cIilbMV0pO1xufVxuLypcbiog7JWE7J207L2YIOuTnOuemOq3uCDtlaAg65WMIOydtOuvuOyngFxuKi9cbmNvbnN0IGdldERyYWdJY29uRWwgPSAodjogSFRNTEVsZW1lbnQsIGljb25zOiBBcnJheTxJSWNvbnM+KSA9PiB7XG4gICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICBjb25zdCBpZHggPSBnZXRJY29uSWR4KHYpO1xuICAgIGNvbnN0IGRyYWdnZWRJY29uID0gaWNvbnMuZmlsdGVyKCh2OiBJSWNvbnMpID0+ICB2LmlkeCA9PT0gaWR4KTtcbiAgICBcbiAgICBjb25zdCBpY29uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LWljb25cIik7XG4gICAgY29uc3QgY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlO3dpZHRoOiA4MHB4O3RvcDotMTAwcHg7bGVmdDotMTAwcHg7XCJcbiAgICBpY29uRGl2LnN0eWxlLmNzc1RleHQgPSBjc3NUZXh0O1xuICAgIGljb25EaXYuaW5uZXJIVE1MID0gZ2V0RHJhZ0ljb25Jbm5lckVsZW0oZHJhZ2dlZEljb25bMF0ubmFtZSk7XG5cbiAgICByb290RWwuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XG5cbiAgICByZXR1cm4gaWNvbkRpdjtcbn1cblxuY29uc3QgZ2V0RHJhZ0ljb25Jbm5lckVsZW0gPSAoaWNvbk5hbWU6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoYFxuICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgPGZpZ3VyZSBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvaWNvbnMvd2luZG93cy14cC1pY29ucy1tZC5wbmcnKTtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDtcIj48L2ZpZ3VyZT5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPiR7aWNvbk5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICA8L2J1dHRvbj5gXG4gICAgKVxufVxuXG5leHBvcnQgY29uc3QgaWNvbkRyYWdDYWxsYmFjayA9IChcbiAgICBkcmFnc3RhcnRFdmVudDogRHJhZ0V2ZW50LFxuICAgIHRhcmdldDogSFRNTEVsZW1lbnQsXG4gICAgaWNvbnM6IEFycmF5PElJY29ucz4sXG4gICAgc2V0SWNvbnM6IEZ1bmN0aW9uLFxuKSA9PiB7XG4gICAgLy8g7JWE7J207L2YIGluZGV4XG4gICAgY29uc3QgaWNvbklkeCA9IE51bWJlci5wYXJzZUludCh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik/LnNwbGl0KFwiLVwiKVsxXSB8fCAnMCcpO1xuXG4gICAgLy8g7ZWY64KY7J2YIGdyaWQgYXJlYeydmCDqsIDroZwv7IS466GcXG4gICAgY29uc3QgT05FX0dSSURfQVJFQV9XSURUSCA9IDgwO1xuICAgIGNvbnN0IE9ORV9HUklEX0FSRUFfSEVJR0hUID0gMTAwO1xuXG4gICAgLy8g6riw7KG0IOyVhOydtOy9mCDqt7jrpqzrk5wgY29sdW1uLCByb3cg7Iuc7J6R7KCQXG4gICAgY29uc3QgcHJldkdyaWRDb2x1bW5TdGFydCA9IE51bWJlci5wYXJzZUludCh0YXJnZXQuc3R5bGUuZ3JpZENvbHVtblN0YXJ0KTtcbiAgICBjb25zdCBwcmV2R3JpZFJvd1N0YXJ0ID0gTnVtYmVyLnBhcnNlSW50KHRhcmdldC5zdHlsZS5ncmlkUm93U3RhcnQpO1xuXG4gICAgLy8g6riw7KG0IOyVhOydtOy9mCDsnITsuZhcbiAgICBjb25zdCBwcmV2SWNvblBvcyA9IFtkcmFnc3RhcnRFdmVudC5jbGllbnRYLCBkcmFnc3RhcnRFdmVudC5jbGllbnRZXTtcblxuICAgIGNvbnN0IHJvb3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vdFwiKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IGljb25EaXYgPSBnZXREcmFnSWNvbkVsKHRhcmdldCwgaWNvbnMpO1xuXG4gICAgbGV0IHNoaWZ0WCA9IGRyYWdzdGFydEV2ZW50LmNsaWVudFggLSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICBsZXQgc2hpZnRZID0gZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WSAtIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICBkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXI/LnNldERyYWdJbWFnZShpY29uRGl2LCBzaGlmdFgsIHNoaWZ0WSk7XG5cbiAgICBpZiAoZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRyYWdzdGFydEV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZHJhZ292ZXJGbiA9IChkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgZHJhZ292ZXJFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJGbik7XG4gICAgXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChkcm9wRXZlbnQpID0+IHtcbiAgICAgICAgZHJvcEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8g7YG066atKG1vdXNlZG93bikg7J2067Kk7Yq46rCAIOyggeyaqeuQnCDsl5jrpqzrqLztirjrp4wg7J2064+ZXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykpIHtcbiAgICAgICAgICAgIC8vIOuTnOuemOq3uOqwgCDrgZ3rgpwg7ZuEIOyVhOydtOy9mCDsnITsuZhcbiAgICAgICAgICAgIGNvbnN0IGN1ckljb25Qb3MgPSBbZHJvcEV2ZW50LmNsaWVudFgsIGRyb3BFdmVudC5jbGllbnRZXTtcblxuICAgICAgICAgICAgLy8g6riw7KG0IOyVhOydtOy9mCDqt7jrpqzrk5wg7KKM7ZGc7JeQ7IScIOuqhyDrp4ztgbwg7JuA7KeB7JiA64qU7KeAXG4gICAgICAgICAgICBjb25zdCBtb3ZpbmdDb29yZGluYXRlc1ggPSBOdW1iZXIucGFyc2VJbnQoKChjdXJJY29uUG9zWzBdIC0gcHJldkljb25Qb3NbMF0pIC8gT05FX0dSSURfQVJFQV9XSURUSCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmluZ0Nvb3JkaW5hdGVzWSA9IE51bWJlci5wYXJzZUludCgoKGN1ckljb25Qb3NbMV0gLSBwcmV2SWNvblBvc1sxXSkgLyBPTkVfR1JJRF9BUkVBX0hFSUdIVCkudG9GaXhlZCgpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8g65Oc656Y6re46rCAIOuBneuCnCDtm4QgY29sdW1uLCByb3cg7Iuc7J6R7KCQXG4gICAgICAgICAgICBjb25zdCBncmlkQ29sdW1uU3RhcnQgPSBwcmV2R3JpZENvbHVtblN0YXJ0ICsgbW92aW5nQ29vcmRpbmF0ZXNYO1xuICAgICAgICAgICAgY29uc3QgZ3JpZFJvd1N0YXJ0ID0gcHJldkdyaWRSb3dTdGFydCArIG1vdmluZ0Nvb3JkaW5hdGVzWTtcblxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7IGdyaWRSb3dTdGFydCwgZ3JpZENvbHVtblN0YXJ0IH07XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld0ljb25zID0gWy4uLmljb25zXTtcbiAgICAgICAgICAgIG5ld0ljb25zW2ljb25JZHhdID0gey4uLmljb25zW2ljb25JZHhdLCBzdHlsZTogey4uLmljb25zW2ljb25JZHhdLnN0eWxlLCAuLi5zdHlsZX0gfTtcbiAgICAgICAgICAgIHNldEljb25zKG5ld0ljb25zKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckZuKTtcblxuICAgICAgICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGljb25EaXYpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuLy8gNC4g7JWE7J207L2YIOuNlOu4lO2BtOumreydtOuypO2KuFxuZXhwb3J0IGNvbnN0IGljb25EYkNsaWNrQ2FsbGJhY2sgPSAoXG4gICAgXzogRXZlbnQsXG4gICAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcbiAgICBuZWVkZWRTdGF0ZToge21vZGFsc0xlbmd0aDogbnVtYmVyLCBpY29uczogQXJyYXk8SUljb25zPn0sXG4gICAgYWRkTW9kYWxzOiBGdW5jdGlvbixcbikgPT4ge1xuICAgIGNvbnN0IG1vZGFsSWR4ID0gbmVlZGVkU3RhdGUubW9kYWxzTGVuZ3RoICsgMTtcblxuICAgIGNvbnN0IGlkeCA9IGdldEljb25JZHgodGFyZ2V0KTtcbiAgICBjb25zdCBkYmNsaWNrZWRJY29uID0gbmVlZGVkU3RhdGUuaWNvbnMuZmlsdGVyKCh2OiBJSWNvbnMpID0+ICB2LmlkeCA9PT0gaWR4KTtcblxuICAgIGNvbnN0IHdpbmRvd01vZGFsID0gV2luZG93TW9kYWwoe2ljb246IGRiY2xpY2tlZEljb25bMF0sIG1vZGFsSWR4fSk7XG5cbiAgICBpZiAod2luZG93TW9kYWwpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB7aWNvbjogZGJjbGlja2VkSWNvblswXSwgY29udGVudDogd2luZG93TW9kYWx9O1xuICAgICAgICBhZGRNb2RhbHModmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KHI+MT9yLTE6MCksZT0xO2U8cjtlKyspdFtlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1ZW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCx0KTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyh0Lmxlbmd0aD9cIiBcIit0Lm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCInXCIrbitcIidcIn0pKS5qb2luKFwiLFwiKTpcIlwiKStcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZlwiKX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmISFuW1FdfWZ1bmN0aW9uIHQobil7dmFyIHI7cmV0dXJuISFuJiYoZnVuY3Rpb24obil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiExO3ZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtpZihudWxsPT09cilyZXR1cm4hMDt2YXIgdD1PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChyLFwiY29uc3RydWN0b3JcIikmJnIuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT1PYmplY3R8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJkZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCk9PT1afShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIShudWxsPT09KHI9bi5jb25zdHJ1Y3Rvcil8fHZvaWQgMD09PXI/dm9pZCAwOnJbTF0pfHxzKG4pfHx2KG4pKX1mdW5jdGlvbiBlKHQpe3JldHVybiByKHQpfHxuKDIzLHQpLHRbUV0udH1mdW5jdGlvbiBpKG4scix0KXt2b2lkIDA9PT10JiYodD0hMSksMD09PW8obik/KHQ/T2JqZWN0LmtleXM6bm4pKG4pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QmJlwic3ltYm9sXCI9PXR5cGVvZiBlfHxyKGUsbltlXSxuKX0pKTpuLmZvckVhY2goKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHIoZSx0LG4pfSkpfWZ1bmN0aW9uIG8obil7dmFyIHI9bltRXTtyZXR1cm4gcj9yLmk+Mz9yLmktNDpyLmk6QXJyYXkuaXNBcnJheShuKT8xOnMobik/Mjp2KG4pPzM6MH1mdW5jdGlvbiB1KG4scil7cmV0dXJuIDI9PT1vKG4pP24uaGFzKHIpOk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpfWZ1bmN0aW9uIGEobixyKXtyZXR1cm4gMj09PW8obik/bi5nZXQocik6bltyXX1mdW5jdGlvbiBmKG4scix0KXt2YXIgZT1vKG4pOzI9PT1lP24uc2V0KHIsdCk6Mz09PWU/bi5hZGQodCk6bltyXT10fWZ1bmN0aW9uIGMobixyKXtyZXR1cm4gbj09PXI/MCE9PW58fDEvbj09MS9yOm4hPW4mJnIhPXJ9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHI9cm4obik7ZGVsZXRlIHJbUV07Zm9yKHZhciB0PW5uKHIpLGU9MDtlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXSxvPXJbaV07ITE9PT1vLndyaXRhYmxlJiYoby53cml0YWJsZT0hMCxvLmNvbmZpZ3VyYWJsZT0hMCksKG8uZ2V0fHxvLnNldCkmJihyW2ldPXtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsZW51bWVyYWJsZTpvLmVudW1lcmFibGUsdmFsdWU6bltpXX0pfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSxyKX1mdW5jdGlvbiBkKG4sZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx5KG4pfHxyKG4pfHwhdChuKXx8KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4scil7cmV0dXJuIGQociwhMCl9KSwhMCkpLG59ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHIpe3ZhciB0PXRuW3JdO3JldHVybiB0fHxuKDE4LHIpLHR9ZnVuY3Rpb24gbShuLHIpe3RuW25dfHwodG5bbl09cil9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4scil7ciYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXIpfWZ1bmN0aW9uIGcobil7TyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBPKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgcj1uW1FdOzA9PT1yLml8fDE9PT1yLmk/ci5qKCk6ci5nPSEwfWZ1bmN0aW9uIFAocixlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT1yJiZyIT09aTtyZXR1cm4gZS5oLk98fGIoXCJFUzVcIikuUyhlLHIsbyksbz8oaVtRXS5QJiYoZyhlKSxuKDQpKSx0KHIpJiYocj1NKGUsciksZS5sfHx4KGUscikpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLnQscixlLnUsZS5zKSk6cj1NKGUsaSxbXSksZyhlKSxlLnUmJmUudihlLnUsZS5zKSxyIT09SD9yOnZvaWQgMH1mdW5jdGlvbiBNKG4scix0KXtpZih5KHIpKXJldHVybiByO3ZhciBlPXJbUV07aWYoIWUpcmV0dXJuIGkociwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gQShuLGUscixpLG8sdCl9KSwhMCkscjtpZihlLkEhPT1uKXJldHVybiByO2lmKCFlLlApcmV0dXJuIHgobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1sKGUuayk6ZS5vLHU9byxhPSExOzM9PT1lLmkmJih1PW5ldyBTZXQobyksby5jbGVhcigpLGE9ITApLGkodSwoZnVuY3Rpb24ocixpKXtyZXR1cm4gQShuLGUsbyxyLGksdCxhKX0pKSx4KG4sbywhMSksdCYmbi51JiZiKFwiUGF0Y2hlc1wiKS5OKGUsdCxuLnUsbi5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMsdil7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmYz09PW8mJm4oNSkscihjKSl7dmFyIHA9TShlLGMscyYmaSYmMyE9PWkuaSYmIXUoaS5SLGEpP3MuY29uY2F0KGEpOnZvaWQgMCk7aWYoZihvLGEscCksIXIocCkpcmV0dXJuO2UubT0hMX1lbHNlIHYmJm8uYWRkKGMpO2lmKHQoYykmJiF5KGMpKXtpZighZS5oLkQmJmUuXzwxKXJldHVybjtNKGUsYyksaSYmaS5BLmx8fHgoZSxjKX19ZnVuY3Rpb24geChuLHIsdCl7dm9pZCAwPT09dCYmKHQ9ITEpLCFuLmwmJm4uaC5EJiZuLm0mJmQocix0KX1mdW5jdGlvbiB6KG4scil7dmFyIHQ9bltRXTtyZXR1cm4odD9wKHQpOm4pW3JdfWZ1bmN0aW9uIEkobixyKXtpZihyIGluIG4pZm9yKHZhciB0PU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTt0Oyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHIpO2lmKGUpcmV0dXJuIGU7dD1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9fWZ1bmN0aW9uIGsobil7bi5QfHwobi5QPSEwLG4ubCYmayhuLmwpKX1mdW5jdGlvbiBFKG4pe24ub3x8KG4ubz1sKG4udCkpfWZ1bmN0aW9uIE4obixyLHQpe3ZhciBlPXMocik/YihcIk1hcFNldFwiKS5GKHIsdCk6dihyKT9iKFwiTWFwU2V0XCIpLlQocix0KTpuLk8/ZnVuY3Rpb24obixyKXt2YXIgdD1BcnJheS5pc0FycmF5KG4pLGU9e2k6dD8xOjAsQTpyP3IuQTpfKCksUDohMSxJOiExLFI6e30sbDpyLHQ6bixrOm51bGwsbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1lbjt0JiYoaT1bZV0sbz1vbik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHIsdCk6YihcIkVTNVwiKS5KKHIsdCk7cmV0dXJuKHQ/dC5BOl8oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gUihlKXtyZXR1cm4gcihlKXx8bigyMixlKSxmdW5jdGlvbiBuKHIpe2lmKCF0KHIpKXJldHVybiByO3ZhciBlLHU9cltRXSxjPW8ocik7aWYodSl7aWYoIXUuUCYmKHUuaTw0fHwhYihcIkVTNVwiKS5LKHUpKSlyZXR1cm4gdS50O3UuST0hMCxlPUQocixjKSx1Lkk9ITF9ZWxzZSBlPUQocixjKTtyZXR1cm4gaShlLChmdW5jdGlvbihyLHQpe3UmJmEodS50LHIpPT09dHx8ZihlLHIsbih0KSl9KSksMz09PWM/bmV3IFNldChlKTplfShlKX1mdW5jdGlvbiBEKG4scil7c3dpdGNoKHIpe2Nhc2UgMjpyZXR1cm4gbmV3IE1hcChuKTtjYXNlIDM6cmV0dXJuIEFycmF5LmZyb20obil9cmV0dXJuIGwobil9ZnVuY3Rpb24gRigpe2Z1bmN0aW9uIHQobixyKXt2YXIgdD1zW25dO3JldHVybiB0P3QuZW51bWVyYWJsZT1yOnNbbl09dD17Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6cixnZXQ6ZnVuY3Rpb24oKXt2YXIgcj10aGlzW1FdO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYociksZW4uZ2V0KHIsbil9LHNldDpmdW5jdGlvbihyKXt2YXIgdD10aGlzW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYodCksZW4uc2V0KHQsbixyKX19LHR9ZnVuY3Rpb24gZShuKXtmb3IodmFyIHI9bi5sZW5ndGgtMTtyPj0wO3ItLSl7dmFyIHQ9bltyXVtRXTtpZighdC5QKXN3aXRjaCh0Lmkpe2Nhc2UgNTphKHQpJiZrKHQpO2JyZWFrO2Nhc2UgNDpvKHQpJiZrKHQpfX19ZnVuY3Rpb24gbyhuKXtmb3IodmFyIHI9bi50LHQ9bi5rLGU9bm4odCksaT1lLmxlbmd0aC0xO2k+PTA7aS0tKXt2YXIgbz1lW2ldO2lmKG8hPT1RKXt2YXIgYT1yW29dO2lmKHZvaWQgMD09PWEmJiF1KHIsbykpcmV0dXJuITA7dmFyIGY9dFtvXSxzPWYmJmZbUV07aWYocz9zLnQhPT1hOiFjKGYsYSkpcmV0dXJuITB9fXZhciB2PSEhcltRXTtyZXR1cm4gZS5sZW5ndGghPT1ubihyKS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciByPW4uaztpZihyLmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHQ9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHIubGVuZ3RoLTEpO2lmKHQmJiF0LmdldClyZXR1cm4hMDtmb3IodmFyIGU9MDtlPHIubGVuZ3RoO2UrKylpZighci5oYXNPd25Qcm9wZXJ0eShlKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBmKHIpe3IuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAocikpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obixyKXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obixyKXtpZihuKXtmb3IodmFyIGU9QXJyYXkoci5sZW5ndGgpLGk9MDtpPHIubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2ksdChpLCEwKSk7cmV0dXJuIGV9dmFyIG89cm4ocik7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PW5uKG8pLGE9MDthPHUubGVuZ3RoO2ErKyl7dmFyIGY9dVthXTtvW2ZdPXQoZixufHwhIW9bZl0uZW51bWVyYWJsZSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpLG8pfShlLG4pLG89e2k6ZT81OjQsQTpyP3IuQTpfKCksUDohMSxJOiExLFI6e30sbDpyLHQ6bixrOmksbzpudWxsLGc6ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFEse3ZhbHVlOm8sd3JpdGFibGU6ITB9KSxpfSxTOmZ1bmN0aW9uKG4sdCxvKXtvP3IodCkmJnRbUV0uQT09PW4mJmUobi5wKToobi51JiZmdW5jdGlvbiBuKHIpe2lmKHImJlwib2JqZWN0XCI9PXR5cGVvZiByKXt2YXIgdD1yW1FdO2lmKHQpe3ZhciBlPXQudCxvPXQuayxmPXQuUixjPXQuaTtpZig0PT09YylpKG8sKGZ1bmN0aW9uKHIpe3IhPT1RJiYodm9pZCAwIT09ZVtyXXx8dShlLHIpP2Zbcl18fG4ob1tyXSk6KGZbcl09ITAsayh0KSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09b1tuXXx8dShvLG4pfHwoZltuXT0hMSxrKHQpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihhKHQpJiYoayh0KSxmLmxlbmd0aD0hMCksby5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPW8ubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxvLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oby5sZW5ndGgsZS5sZW5ndGgpLGw9MDtsPHA7bCsrKW8uaGFzT3duUHJvcGVydHkobCl8fChmW2xdPSEwKSx2b2lkIDA9PT1mW2xdJiZuKG9bbF0pfX19fShuLnBbMF0pLGUobi5wKSl9LEs6ZnVuY3Rpb24obil7cmV0dXJuIDQ9PT1uLmk/byhuKTphKG4pfX0pfWZ1bmN0aW9uIFQoKXtmdW5jdGlvbiBlKG4pe2lmKCF0KG4pKXJldHVybiBuO2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4ubWFwKGUpO2lmKHMobikpcmV0dXJuIG5ldyBNYXAoQXJyYXkuZnJvbShuLmVudHJpZXMoKSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bblswXSxlKG5bMV0pXX0pKSk7aWYodihuKSlyZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG4pLm1hcChlKSk7dmFyIHI9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpO2Zvcih2YXIgaSBpbiBuKXJbaV09ZShuW2ldKTtyZXR1cm4gdShuLEwpJiYocltMXT1uW0xdKSxyfWZ1bmN0aW9uIGYobil7cmV0dXJuIHIobik/ZShuKTpufXZhciBjPVwiYWRkXCI7bShcIlBhdGNoZXNcIix7JDpmdW5jdGlvbihyLHQpe3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2Zvcih2YXIgaT10LnBhdGgsdT10Lm9wLGY9cixzPTA7czxpLmxlbmd0aC0xO3MrKyl7dmFyIHY9byhmKSxwPWlbc107XCJzdHJpbmdcIiE9dHlwZW9mIHAmJlwibnVtYmVyXCIhPXR5cGVvZiBwJiYocD1cIlwiK3ApLDAhPT12JiYxIT09dnx8XCJfX3Byb3RvX19cIiE9PXAmJlwiY29uc3RydWN0b3JcIiE9PXB8fG4oMjQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJlwicHJvdG90eXBlXCI9PT1wJiZuKDI0KSxcIm9iamVjdFwiIT10eXBlb2YoZj1hKGYscCkpJiZuKDE1LGkuam9pbihcIi9cIikpfXZhciBsPW8oZiksZD1lKHQudmFsdWUpLGg9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaChsKXtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlIGM6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm5cIi1cIj09PWg/Zi5wdXNoKGQpOmYuc3BsaWNlKGgsMCxkKTtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOnJldHVybiBmLmFkZChkKTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZVwicmVtb3ZlXCI6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwxKTtjYXNlIDI6cmV0dXJuIGYuZGVsZXRlKGgpO2Nhc2UgMzpyZXR1cm4gZi5kZWxldGUodC52YWx1ZSk7ZGVmYXVsdDpyZXR1cm4gZGVsZXRlIGZbaF19ZGVmYXVsdDpuKDE3LHUpfX0pKSxyfSxOOmZ1bmN0aW9uKG4scix0LGUpe3N3aXRjaChuLmkpe2Nhc2UgMDpjYXNlIDQ6Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgbz1uLnQscz1uLm87aShuLlIsKGZ1bmN0aW9uKG4saSl7dmFyIHY9YShvLG4pLHA9YShzLG4pLGw9aT91KG8sbik/XCJyZXBsYWNlXCI6YzpcInJlbW92ZVwiO2lmKHYhPT1wfHxcInJlcGxhY2VcIiE9PWwpe3ZhciBkPXIuY29uY2F0KG4pO3QucHVzaChcInJlbW92ZVwiPT09bD97b3A6bCxwYXRoOmR9OntvcDpsLHBhdGg6ZCx2YWx1ZTpwfSksZS5wdXNoKGw9PT1jP3tvcDpcInJlbW92ZVwiLHBhdGg6ZH06XCJyZW1vdmVcIj09PWw/e29wOmMscGF0aDpkLHZhbHVlOmYodil9OntvcDpcInJlcGxhY2VcIixwYXRoOmQsdmFsdWU6Zih2KX0pfX0pKX0obixyLHQsZSk7Y2FzZSA1OmNhc2UgMTpyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIGk9bi50LG89bi5SLHU9bi5vO2lmKHUubGVuZ3RoPGkubGVuZ3RoKXt2YXIgYT1bdSxpXTtpPWFbMF0sdT1hWzFdO3ZhciBzPVtlLHRdO3Q9c1swXSxlPXNbMV19Zm9yKHZhciB2PTA7djxpLmxlbmd0aDt2KyspaWYob1t2XSYmdVt2XSE9PWlbdl0pe3ZhciBwPXIuY29uY2F0KFt2XSk7dC5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6Zih1W3ZdKX0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYoaVt2XSl9KX1mb3IodmFyIGw9aS5sZW5ndGg7bDx1Lmxlbmd0aDtsKyspe3ZhciBkPXIuY29uY2F0KFtsXSk7dC5wdXNoKHtvcDpjLHBhdGg6ZCx2YWx1ZTpmKHVbbF0pfSl9aS5sZW5ndGg8dS5sZW5ndGgmJmUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpyLmNvbmNhdChbXCJsZW5ndGhcIl0pLHZhbHVlOmkubGVuZ3RofSl9KG4scix0LGUpO2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIGk9bi50LG89bi5vLHU9MDtpLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFvLmhhcyhuKSl7dmFyIGk9ci5jb25jYXQoW3VdKTt0LnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDppLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOmMscGF0aDppLHZhbHVlOm59KX11Kyt9KSksdT0wLG8uZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIWkuaGFzKG4pKXt2YXIgbz1yLmNvbmNhdChbdV0pO3QucHVzaCh7b3A6YyxwYXRoOm8sdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6XCJyZW1vdmVcIixwYXRoOm8sdmFsdWU6bn0pfXUrK30pKX0obixyLHQsZSl9fSxNOmZ1bmN0aW9uKG4scix0LGUpe3QucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpyPT09SD92b2lkIDA6cn0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpufSl9fSl9ZnVuY3Rpb24gQygpe2Z1bmN0aW9uIHIobixyKXtmdW5jdGlvbiB0KCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufWEobixyKSxuLnByb3RvdHlwZT0odC5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IHQpfWZ1bmN0aW9uIGUobil7bi5vfHwobi5SPW5ldyBNYXAsbi5vPW5ldyBNYXAobi50KSl9ZnVuY3Rpb24gbyhuKXtuLm98fChuLm89bmV3IFNldCxuLnQuZm9yRWFjaCgoZnVuY3Rpb24ocil7aWYodChyKSl7dmFyIGU9TihuLkEuaCxyLG4pO24ucC5zZXQocixlKSxuLm8uYWRkKGUpfWVsc2Ugbi5vLmFkZChyKX0pKSl9ZnVuY3Rpb24gdShyKXtyLmcmJm4oMyxKU09OLnN0cmluZ2lmeShwKHIpKSl9dmFyIGE9ZnVuY3Rpb24obixyKXtyZXR1cm4oYT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obixyKXtuLl9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24obixyKXtmb3IodmFyIHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoblt0XT1yW3RdKX0pKG4scil9LGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIHRoaXNbUV09e2k6MixsOnIsQTpyP3IuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLFI6dm9pZCAwLHQ6bixrOnRoaXMsQzohMSxnOiExfSx0aGlzfXIobixNYXApO3ZhciBvPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxvLmhhcz1mdW5jdGlvbihuKXtyZXR1cm4gcCh0aGlzW1FdKS5oYXMobil9LG8uc2V0PWZ1bmN0aW9uKG4scil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxwKHQpLmhhcyhuKSYmcCh0KS5nZXQobik9PT1yfHwoZSh0KSxrKHQpLHQuUi5zZXQobiwhMCksdC5vLnNldChuLHIpLHQuUi5zZXQobiwhMCkpLHRoaXN9LG8uZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLGUociksayhyKSxyLnQuaGFzKG4pP3IuUi5zZXQobiwhMSk6ci5SLmRlbGV0ZShuKSxyLm8uZGVsZXRlKG4pLCEwfSxvLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKGUobiksayhuKSxuLlI9bmV3IE1hcCxpKG4udCwoZnVuY3Rpb24ocil7bi5SLnNldChyLCExKX0pKSxuLm8uY2xlYXIoKSl9LG8uZm9yRWFjaD1mdW5jdGlvbihuLHIpe3ZhciB0PXRoaXM7cCh0aGlzW1FdKS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe24uY2FsbChyLHQuZ2V0KGkpLGksdCl9KSl9LG8uZ2V0PWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07dShyKTt2YXIgaT1wKHIpLmdldChuKTtpZihyLkl8fCF0KGkpKXJldHVybiBpO2lmKGkhPT1yLnQuZ2V0KG4pKXJldHVybiBpO3ZhciBvPU4oci5BLmgsaSxyKTtyZXR1cm4gZShyKSxyLm8uc2V0KG4sbyksb30sby5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkua2V5cygpfSxvLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuLHI9dGhpcyx0PXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiByLnZhbHVlcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj10Lm5leHQoKTtyZXR1cm4gbi5kb25lP246e2RvbmU6ITEsdmFsdWU6ci5nZXQobi52YWx1ZSl9fSxufSxvLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbixyPXRoaXMsdD10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gci5lbnRyaWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXQubmV4dCgpO2lmKG4uZG9uZSlyZXR1cm4gbjt2YXIgZT1yLmdldChuLnZhbHVlKTtyZXR1cm57ZG9uZTohMSx2YWx1ZTpbbi52YWx1ZSxlXX19LG59LG9bVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LG59KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdGhpc1tRXT17aTozLGw6cixBOnI/ci5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsdDpuLGs6dGhpcyxwOm5ldyBNYXAsZzohMSxDOiExfSx0aGlzfXIobixTZXQpO3ZhciB0PW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSx0Lmhhcz1mdW5jdGlvbihuKXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHIubz8hIXIuby5oYXMobil8fCEoIXIucC5oYXMobil8fCFyLm8uaGFzKHIucC5nZXQobikpKTpyLnQuaGFzKG4pfSx0LmFkZD1mdW5jdGlvbihuKXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHRoaXMuaGFzKG4pfHwobyhyKSxrKHIpLHIuby5hZGQobikpLHRoaXN9LHQuZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLG8ociksayhyKSxyLm8uZGVsZXRlKG4pfHwhIXIucC5oYXMobikmJnIuby5kZWxldGUoci5wLmdldChuKSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYobyhuKSxrKG4pLG4uby5jbGVhcigpKX0sdC52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLnZhbHVlcygpfSx0LmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLmVudHJpZXMoKX0sdC5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHRbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sdC5mb3JFYWNoPWZ1bmN0aW9uKG4scil7Zm9yKHZhciB0PXRoaXMudmFsdWVzKCksZT10Lm5leHQoKTshZS5kb25lOyluLmNhbGwocixlLnZhbHVlLGUudmFsdWUsdGhpcyksZT10Lm5leHQoKX0sbn0oKTttKFwiTWFwU2V0XCIse0Y6ZnVuY3Rpb24obixyKXtyZXR1cm4gbmV3IGYobixyKX0sVDpmdW5jdGlvbihuLHIpe3JldHVybiBuZXcgYyhuLHIpfX0pfWZ1bmN0aW9uIEooKXtGKCksQygpLFQoKX1mdW5jdGlvbiBLKG4pe3JldHVybiBufWZ1bmN0aW9uICQobil7cmV0dXJuIG59dmFyIEcsVSxXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woXCJ4XCIpLFg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQsQj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJveHkmJnZvaWQgMCE9PVByb3h5LnJldm9jYWJsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QsSD1XP1N5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpOigoRz17fSlbXCJpbW1lci1ub3RoaW5nXCJdPSEwLEcpLEw9Vz9TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpOlwiX18kaW1tZXJfZHJhZnRhYmxlXCIsUT1XP1N5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTpcIl9fJGltbWVyX3N0YXRlXCIsVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLFk9ezA6XCJJbGxlZ2FsIHN0YXRlXCIsMTpcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsMjpcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsMzpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIrbn0sNDpcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsNTpcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLDY6XCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIiw3OlwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsODpcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIiw5OlwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLDEwOlwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsMTE6XCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEyOlwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMzpcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLDE0OlwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLDE1OmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIrbn0sMTY6J1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLDE3OmZ1bmN0aW9uKG4pe3JldHVyblwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIitufSwxODpmdW5jdGlvbihuKXtyZXR1cm5cIlRoZSBwbHVnaW4gZm9yICdcIituK1wiJyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgYGVuYWJsZVwiK24rXCIoKWAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5cIn0sMjA6XCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsMjE6ZnVuY3Rpb24obil7cmV0dXJuXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIituK1wiJ1wifSwyMjpmdW5jdGlvbihuKXtyZXR1cm5cIidjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjM6ZnVuY3Rpb24obil7cmV0dXJuXCInb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyNDpcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIn0sWj1cIlwiK09iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3Isbm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxybj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc3x8ZnVuY3Rpb24obil7dmFyIHI9e307cmV0dXJuIG5uKG4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JbdF09T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpfSkpLHJ9LHRuPXt9LGVuPXtnZXQ6ZnVuY3Rpb24obixyKXtpZihyPT09USlyZXR1cm4gbjt2YXIgZT1wKG4pO2lmKCF1KGUscikpcmV0dXJuIGZ1bmN0aW9uKG4scix0KXt2YXIgZSxpPUkocix0KTtyZXR1cm4gaT9cInZhbHVlXCJpbiBpP2kudmFsdWU6bnVsbD09PShlPWkuZ2V0KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5jYWxsKG4uayk6dm9pZCAwfShuLGUscik7dmFyIGk9ZVtyXTtyZXR1cm4gbi5JfHwhdChpKT9pOmk9PT16KG4udCxyKT8oRShuKSxuLm9bcl09TihuLkEuaCxpLG4pKTppfSxoYXM6ZnVuY3Rpb24obixyKXtyZXR1cm4gciBpbiBwKG4pfSxvd25LZXlzOmZ1bmN0aW9uKG4pe3JldHVybiBSZWZsZWN0Lm93bktleXMocChuKSl9LHNldDpmdW5jdGlvbihuLHIsdCl7dmFyIGU9SShwKG4pLHIpO2lmKG51bGw9PWU/dm9pZCAwOmUuc2V0KXJldHVybiBlLnNldC5jYWxsKG4uayx0KSwhMDtpZighbi5QKXt2YXIgaT16KHAobiksciksbz1udWxsPT1pP3ZvaWQgMDppW1FdO2lmKG8mJm8udD09PXQpcmV0dXJuIG4ub1tyXT10LG4uUltyXT0hMSwhMDtpZihjKHQsaSkmJih2b2lkIDAhPT10fHx1KG4udCxyKSkpcmV0dXJuITA7RShuKSxrKG4pfXJldHVybiBuLm9bcl09PT10JiYodm9pZCAwIT09dHx8ciBpbiBuLm8pfHxOdW1iZXIuaXNOYU4odCkmJk51bWJlci5pc05hTihuLm9bcl0pfHwobi5vW3JdPXQsbi5SW3JdPSEwKSwhMH0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obixyKXtyZXR1cm4gdm9pZCAwIT09eihuLnQscil8fHIgaW4gbi50PyhuLlJbcl09ITEsRShuKSxrKG4pKTpkZWxldGUgbi5SW3JdLG4ubyYmZGVsZXRlIG4ub1tyXSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4scil7dmFyIHQ9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQscik7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09cixlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTp0W3JdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxvbj17fTtpKGVuLChmdW5jdGlvbihuLHIpe29uW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLG9uLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHIsdCl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQodCkpJiZuKDEzKSxvbi5zZXQuY2FsbCh0aGlzLHIsdCx2b2lkIDApfSxvbi5zZXQ9ZnVuY3Rpb24ocix0LGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT10JiZpc05hTihwYXJzZUludCh0KSkmJm4oMTQpLGVuLnNldC5jYWxsKHRoaXMsclswXSx0LGUsclswXSl9O3ZhciB1bj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUocil7dmFyIGU9dGhpczt0aGlzLk89Qix0aGlzLkQ9ITAsdGhpcy5wcm9kdWNlPWZ1bmN0aW9uKHIsaSxvKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXt2YXIgdT1pO2k9cjt2YXIgYT1lO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj10aGlzO3ZvaWQgMD09PW4mJihuPXUpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBhLnByb2R1Y2UobiwoZnVuY3Rpb24obil7dmFyIHQ7cmV0dXJuKHQ9aSkuY2FsbC5hcHBseSh0LFtyLG5dLmNvbmNhdChlKSl9KSl9fXZhciBmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNiksdm9pZCAwIT09byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmbig3KSx0KHIpKXt2YXIgYz13KGUpLHM9TihlLHIsdm9pZCAwKSx2PSEwO3RyeXtmPWkocyksdj0hMX1maW5hbGx5e3Y/ZyhjKTpPKGMpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZmIGluc3RhbmNlb2YgUHJvbWlzZT9mLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBqKGMsbyksUChuLGMpfSksKGZ1bmN0aW9uKG4pe3Rocm93IGcoYyksbn0pKTooaihjLG8pLFAoZixjKSl9aWYoIXJ8fFwib2JqZWN0XCIhPXR5cGVvZiByKXtpZih2b2lkIDA9PT0oZj1pKHIpKSYmKGY9ciksZj09PUgmJihmPXZvaWQgMCksZS5EJiZkKGYsITApLG8pe3ZhciBwPVtdLGw9W107YihcIlBhdGNoZXNcIikuTShyLGYscCxsKSxvKHAsbCl9cmV0dXJuIGZ9bigyMSxyKX0sdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obixyKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiBmdW5jdGlvbihyKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspaVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gZS5wcm9kdWNlV2l0aFBhdGNoZXMociwoZnVuY3Rpb24ocil7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFtyXS5jb25jYXQoaSkpfSkpfTt2YXIgdCxpLG89ZS5wcm9kdWNlKG4sciwoZnVuY3Rpb24obixyKXt0PW4saT1yfSkpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZvIGluc3RhbmNlb2YgUHJvbWlzZT9vLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybltuLHQsaV19KSk6W28sdCxpXX0sXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT1yP3ZvaWQgMDpyLnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXMoci51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXI/dm9pZCAwOnIuYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZShyLmF1dG9GcmVlemUpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKGUpe3QoZSl8fG4oOCkscihlKSYmKGU9UihlKSk7dmFyIGk9dyh0aGlzKSxvPU4odGhpcyxlLHZvaWQgMCk7cmV0dXJuIG9bUV0uQz0hMCxPKGkpLG99LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24ocix0KXt2YXIgZT1yJiZyW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fG4oOSksZS5JJiZuKDEwKSk7dmFyIGk9ZS5BO3JldHVybiBqKGksdCksUCh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbihuKXt0aGlzLkQ9bn0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKHIpe3ImJiFCJiZuKDIwKSx0aGlzLk89cn0saS5hcHBseVBhdGNoZXM9ZnVuY3Rpb24obix0KXt2YXIgZTtmb3IoZT10Lmxlbmd0aC0xO2U+PTA7ZS0tKXt2YXIgaT10W2VdO2lmKDA9PT1pLnBhdGgubGVuZ3RoJiZcInJlcGxhY2VcIj09PWkub3Ape249aS52YWx1ZTticmVha319ZT4tMSYmKHQ9dC5zbGljZShlKzEpKTt2YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiByKG4pP28obix0KTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obix0KX0pKX0sZX0oKSxhbj1uZXcgdW4sZm49YW4ucHJvZHVjZSxjbj1hbi5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChhbiksc249YW4uc2V0QXV0b0ZyZWV6ZS5iaW5kKGFuKSx2bj1hbi5zZXRVc2VQcm94aWVzLmJpbmQoYW4pLHBuPWFuLmFwcGx5UGF0Y2hlcy5iaW5kKGFuKSxsbj1hbi5jcmVhdGVEcmFmdC5iaW5kKGFuKSxkbj1hbi5maW5pc2hEcmFmdC5iaW5kKGFuKTtleHBvcnQgZGVmYXVsdCBmbjtleHBvcnR7dW4gYXMgSW1tZXIscG4gYXMgYXBwbHlQYXRjaGVzLEsgYXMgY2FzdERyYWZ0LCQgYXMgY2FzdEltbXV0YWJsZSxsbiBhcyBjcmVhdGVEcmFmdCxSIGFzIGN1cnJlbnQsSiBhcyBlbmFibGVBbGxQbHVnaW5zLEYgYXMgZW5hYmxlRVM1LEMgYXMgZW5hYmxlTWFwU2V0LFQgYXMgZW5hYmxlUGF0Y2hlcyxkbiBhcyBmaW5pc2hEcmFmdCxkIGFzIGZyZWV6ZSxMIGFzIGltbWVyYWJsZSxyIGFzIGlzRHJhZnQsdCBhcyBpc0RyYWZ0YWJsZSxIIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCxmbiBhcyBwcm9kdWNlLGNuIGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxzbiBhcyBzZXRBdXRvRnJlZXplLHZuIGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5pZiAocm9vdCkge1xuICAgIHJlbmRlcihyb290LCBDb250YWluZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=