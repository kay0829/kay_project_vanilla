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
    INTERNET: {
        type: "INTERNET",
        extenstion: "",
        imgSrc: "./assets/icons/icon-internet.png",
        explanation: "인터넷 아이콘",
    },
    FOLDER: {
        type: "FOLDER",
        extenstion: "",
        imgSrc: "./assets/icons/icon-folder.png",
        explanation: "폴더 아이콘",
    },
    TXT: {
        type: "TXT",
        extenstion: "txt",
        imgSrc: "./assets/icons/icon-file-document.png",
        explanation: "텍스트 파일 아이콘",
    },
};
/*
* 기본 아이콘 정보
*/
const DEFAULT_ICON = [
    {
        idx: 0,
        name: "인터넷 익스플로러",
        extenstion: ICON_INFO.INTERNET.extenstion,
        type: ICON_INFO.INTERNET.type,
        imgSrc: ICON_INFO.INTERNET.imgSrc,
        explanation: ICON_INFO.INTERNET.explanation,
        style: { gridRowStart: 1, gridColumnStart: 1 },
    },
    {
        idx: 1,
        name: "내 문서",
        extension: ICON_INFO.FOLDER.extenstion,
        type: ICON_INFO.FOLDER.type,
        imgSrc: ICON_INFO.FOLDER.imgSrc,
        explanation: ICON_INFO.FOLDER.explanation,
        style: { gridRowStart: 2, gridColumnStart: 1 },
    },
    {
        idx: 2,
        name: "파일.txt",
        extension: ICON_INFO.TXT.extenstion,
        type: ICON_INFO.TXT.type,
        imgSrc: ICON_INFO.TXT.imgSrc,
        explanation: ICON_INFO.TXT.explanation,
        style: { gridRowStart: 3, gridColumnStart: 1 },
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

function Container() {
    return (`
        <div class="container">
            ${(0,_components_common_Icons__WEBPACK_IMPORTED_MODULE_0__["default"])()}
            <nav class="status-container" aria-label="하단 상태 창"></nav>
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
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/components/common/icon */ "./public/constants/components/common/icon.ts");
/* harmony import */ var _WindowModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WindowModal */ "./public/src/components/common/WindowModal.ts");
/* harmony import */ var _reducer_icons_iconsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducer/icons/iconsReducer */ "./public/src/reducer/icons/iconsReducer.ts");
/* harmony import */ var _reducer_icons_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducer/icons/action */ "./public/src/reducer/icons/action.ts");






/*
* 아이콘 컴포넌트
*/
function Icons() {
    const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__.configureStore)({ reducer: _reducer_icons_iconsReducer__WEBPACK_IMPORTED_MODULE_3__["default"] });
    const [icons, setIcons] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("Icons", _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_ICON);
    const [modals, setModals] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("Icons", []);
    /*
    * 이벤트 등록
    */
    const iconClickEvent = () => {
        /*
        * 아이콘 클릭 이벤트 관련 메서드
        */
        const iconArea = document.querySelectorAll(".default-icon");
        /*
        * 아이콘 이름 관련 (이름이 길 경우 클릭 시에 풀네임)
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
        * 아이콘 클릭 클래스 관련 (클릭되었을 때 clicked 클래스 추가)
        */
        const inFocusIcon = (v) => {
            v.classList.add('clicked');
        };
        const outFocusIcons = () => {
            iconArea.forEach((v) => {
                if (v.classList.value.includes('clicked')) {
                    v.classList.remove('clicked');
                    abbreviateIconName(v);
                }
            });
        };
        // 1. 아이콘 클릭했을 때
        iconArea.forEach((v) => {
            v.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                store.dispatch((0,_reducer_icons_action__WEBPACK_IMPORTED_MODULE_4__.focusIcon)(icons[0]));
                outFocusIcons();
                inFocusIcon(v);
                showFullIconName(v);
            });
        });
        // 2. 아이콘 외부 화면 클릭했을 때
        const container = document.querySelector(".container");
        if (container) {
            container.addEventListener('mousedown', () => {
                outFocusIcons();
                console.log("store.getState()", store.getState());
            });
        }
        // 3. 아이콘 드래그 이벤트 (.default-icon dragstart -> document dragover & drop)
        // TODO. 파일 아이콘이 폴더 위로 이동될 경우 폴더 안으로 이동되도록 수정
        // TODO. 아이콘끼리 겹치지 않도록 수정
        iconArea.forEach((v) => {
            v.addEventListener('dragstart', (dragstartEvent) => {
                var _a, _b;
                // 아이콘 index
                const iconIdx = Number.parseInt(((_a = v.getAttribute("id")) === null || _a === void 0 ? void 0 : _a.split("-")[1]) || '0');
                // 하나의 grid area의 가로/세로
                const ONE_GRID_AREA_WIDTH = 80;
                const ONE_GRID_AREA_HEIGHT = 100;
                // 기존 아이콘 그리드 column, row 시작점
                const prevGridColumnStart = Number.parseInt(v.style.gridColumnStart);
                const prevGridRowStart = Number.parseInt(v.style.gridRowStart);
                // 기존 아이콘 위치
                const prevIconPos = [dragstartEvent.clientX, dragstartEvent.clientY];
                const rootEl = document.querySelector("#root") || document.body;
                const iconDiv = getDragIconEl(v);
                let shiftX = dragstartEvent.clientX - v.getBoundingClientRect().left;
                let shiftY = dragstartEvent.clientY - v.getBoundingClientRect().top;
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
                    if (v.classList.value.includes('clicked')) {
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
                        newIcons[iconIdx] = Object.assign(Object.assign({}, icons[iconIdx]), { style });
                        setIcons(newIcons);
                        document.removeEventListener('dragover', dragoverFn);
                        rootEl.removeChild(iconDiv);
                    }
                });
            });
        });
        // 4. 아이콘 더블클릭이벤트
        iconArea.forEach((v) => {
            v.addEventListener('dblclick', () => {
                var _a;
                const prevModals = modals;
                const modalIdx = prevModals.length;
                const iconImg = v.children[0].children[0].children[0].attributes[0];
                const iconFigcaption = v.children[0].children[1];
                const imgSrc = iconImg.nodeValue || '';
                const name = v.dataset.iconName || iconFigcaption.innerHTML || '';
                const explanation = v.dataset.iconExplanation || name;
                const icon = {
                    idx: Number.parseInt(((_a = v.getAttribute("id")) === null || _a === void 0 ? void 0 : _a.split("-")[1]) || '0'),
                    name,
                    imgSrc,
                    explanation,
                    style: { gridColumnStart: Number.parseInt(v.style.gridColumnStart), gridRowStart: Number.parseInt(v.style.gridRowStart) }
                };
                const windowModal = (0,_WindowModal__WEBPACK_IMPORTED_MODULE_2__["default"])({ icon, modalIdx });
                if (windowModal) {
                    const newModals = [...prevModals, windowModal];
                    setModals(newModals);
                }
            });
        });
        const addIconBtn = document.querySelector("#addIconBtn");
        addIconBtn === null || addIconBtn === void 0 ? void 0 : addIconBtn.addEventListener('click', () => {
            const newIcon = {
                idx: icons.length,
                name: "파일.txt",
                extension: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICON_INFO.TXT.extenstion,
                type: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICON_INFO.TXT.type,
                imgSrc: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICON_INFO.TXT.imgSrc,
                explanation: _constants_components_common_icon__WEBPACK_IMPORTED_MODULE_1__.ICON_INFO.TXT.explanation,
                style: { gridRowStart: icons.length + 1, gridColumnStart: 1 },
            };
            setIcons([...icons, newIcon]);
        });
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([iconClickEvent]);
    /*
    * 아이콘 드래그 할 때 이미지
    */
    const getDragIconEl = (v) => {
        const rootEl = document.querySelector("#root") || document.body;
        const iconImg = v.children[0].children[0].children[0].attributes[0];
        const iconFigcaption = v.children[0].children[1];
        const imgSrc = iconImg.nodeValue || '';
        const name = v.dataset.iconName || iconFigcaption.innerHTML || '';
        const iconDiv = document.createElement('div');
        iconDiv.classList.add("default-icon");
        iconDiv.style.position = "absolute";
        iconDiv.style.width = "80px";
        iconDiv.innerHTML = getDragIconInnerElem(name, imgSrc);
        rootEl.appendChild(iconDiv);
        return iconDiv;
    };
    const getDragIconInnerElem = (iconName, iconImageSrc) => {
        return (`
            <button>
                <figure>
                    <img src="${iconImageSrc}" draggable="false">
                </figure>
                <figcaption>${iconName}</figcaption>
            </button>`);
    };
    /*
    * 아이콘 컴포넌트
    */
    const iconTemplate = (icon, i) => {
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
                    <figure>
                        <img src="${icon.imgSrc}" draggable="false">
                    </figure>
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
            ${icons.map((icon, i) => iconTemplate(icon, i)).join('')}
            <button id="addIconBtn">추가</button>
        </ol>
        ${modals.map((modal) => modal).join('')}`);
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
    const [isOpen, setIsOpen] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", true);
    const [modalIndex, setModalIndex] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", modalIdx);
    const [modalSize, setModalSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", { width: 400, height: 300 });
    const [modalTranslate, setModalTranslate] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", { X: 400, Y: 400 });
    const [isFullSize, setIsFullSize] = (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useState)("WindowModal", false);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        console.log("modalIdx", modalIdx);
        const defaultTranslate = { X: modalTranslate.X + 20 * modalIdx, Y: modalTranslate.Y + 20 * modalIdx };
        setModalTranslate(defaultTranslate);
    }, []);
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        //
    }, [modalSize.width, modalSize.height, modalTranslate.X, modalTranslate.Y]);
    const modalCommonEvent = () => {
        const minimizeBtn = document.querySelector("#minimizeBtn");
        const maximizeBtn = document.querySelector("#maximizeBtn");
        const restoreDownBtn = document.querySelector("#restoreDownBtn");
        const closeBtn = document.querySelector("#closeBtn");
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', (e) => {
                e.preventDefault;
                setIsFullSize(true);
            });
        }
        if (restoreDownBtn) {
            restoreDownBtn.addEventListener('click', (e) => {
                e.preventDefault;
                setIsFullSize(false);
            });
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault;
                console.log("close ModalIdx", modalIndex);
                setIsOpen(false);
            });
        }
    };
    (0,_core_CustomReact__WEBPACK_IMPORTED_MODULE_0__.useEvents)([modalCommonEvent]);
    const modalContent = () => {
        return (`<div
                id="window-modal-${modalIndex}"
                class="window-modal"
                style="width: ${modalSize.width}px; height: ${modalSize.height}px; transform: translate(${modalTranslate.X}px, ${modalTranslate.Y}px)"
            >
                <header class="modal-header stop-drag">
                    <div class="modal-header-left">
                        <img src="${icon.imgSrc}" />
                    </div>
                    <div class="modal-header-middle">
                        <p>${icon.name}</p>
                    </div>
                    <div class="modal-header-right">
                        <button id="minimizeBtn">
                            <svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-minimize</title><path d="M20,14H4V10H20" /></svg>
                        </button>
                        ${isFullSize
            ? '<button id="restoreDownBtn"><svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dock-window</title><path d="M18 18V20H4A2 2 0 0 1 2 18V8H4V18M22 6V14A2 2 0 0 1 20 16H8A2 2 0 0 1 6 14V6A2 2 0 0 1 8 4H20A2 2 0 0 1 22 6M20 6H8V14H20Z" /></svg></button>'
            : '<button id="maximizeBtn"><svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>square-outline</title><path d="M3,3H21V21H3V3M5,5V19H19V5H5Z" /></svg></button>'}
                        <button id="closeBtn">
                            <svg style="width: 16px;height: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-close</title><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
                        </button>
                    </div>
                </header>
                <main></main>
                <footer></footer>
            </div>`);
    };
    return (`${isOpen ? modalContent() : ''}`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WindowModal);


/***/ }),

/***/ "./public/src/core/CustomReact.ts":
/*!****************************************!*\
  !*** ./public/src/core/CustomReact.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    let events = [];
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
        console.log('useEvents', eventFns);
        events = [...events, ...eventFns];
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
    * registerEvents: 이벤트 함수 등록을 위해 실행하는 메서드
    */
    const registerEvents = () => {
        if (events.length > 0) {
            console.log('events', events);
            events.forEach((eventFn) => eventFn());
        }
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
        // 이벤트 등록
        registerEvents();
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
        events = [];
        mountEffects = [];
        // 렌더링 횟수 확인
        options.renderCount += 1;
        console.log('_render renderCount', options.renderCount);
    });
    return { render, useEvents, useState, useEffect };
}
const { render, useEvents, useState, useEffect } = CustomReact();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomReact);


/***/ }),

/***/ "./public/src/reducer/icons/action.ts":
/*!********************************************!*\
  !*** ./public/src/reducer/icons/action.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "focusIcon": () => (/* binding */ focusIcon)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./public/src/reducer/icons/actionType.ts");


const focusIcon = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAction)(_actionType__WEBPACK_IMPORTED_MODULE_0__.FOCUS_ICON);


/***/ }),

/***/ "./public/src/reducer/icons/actionType.ts":
/*!************************************************!*\
  !*** ./public/src/reducer/icons/actionType.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FOCUS_ICON": () => (/* binding */ FOCUS_ICON)
/* harmony export */ });
const FOCUS_ICON = 'ICON/FOCUS_ICON';


/***/ }),

/***/ "./public/src/reducer/icons/iconsReducer.ts":
/*!**************************************************!*\
  !*** ./public/src/reducer/icons/iconsReducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "globalStateSelector": () => (/* binding */ globalStateSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./public/src/reducer/icons/action.ts");


const initialState = {
    focusedIcons: {},
};
const globalStateSelector = (state) => {
    return state.globalReducer;
};
const iconsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, builder => builder.addCase(_action__WEBPACK_IMPORTED_MODULE_0__.focusIcon, (state, action) => {
    state.focusedIcons = action.payload;
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconsReducer);
// {
//   name: 'icons',
//   initialState,
//   reducers: {
//     focusIcon: (state, action) => {
//       console.log("action.payload", action.payload);
//       state.focusedIcons = action.payload;
//     },
//   }
// }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDZDtBQUU5QixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLElBQUksSUFBSSxFQUFFO0lBQ04seURBQU0sQ0FBQyxJQUFJLEVBQUUsNENBQVMsQ0FBQztDQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvQHJlZHV4anMvdG9vbGtpdC9kaXN0L3JlZHV4LXRvb2xraXQuZXNtLmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9yZWR1eC5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2VzL2RlZmF1bHRNZW1vaXplLmpzIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9jb25zdGFudHMvY29tcG9uZW50cy9jb21tb24vaWNvbi50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9BcHAudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9jb21tb24vSWNvbnMudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29tcG9uZW50cy9jb21tb24vV2luZG93TW9kYWwudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvY29yZS9DdXN0b21SZWFjdC50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9yZWR1Y2VyL2ljb25zL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9yZWR1Y2VyL2ljb25zL2FjdGlvblR5cGUudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL3B1YmxpYy9zcmMvcmVkdWNlci9pY29ucy9pY29uc1JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS8uL25vZGVfbW9kdWxlcy9pbW1lci9kaXN0L2ltbWVyLmVzbS5tanMiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8va2F5X3Byb2plY3RfdmFuaWxsYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2theV9wcm9qZWN0X3ZhbmlsbGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYXlfcHJvamVjdF92YW5pbGxhLy4vcHVibGljL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn07XHJcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XHJcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XHJcbnZhciBfX2dldE93blByb3BEZXNjcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzO1xyXG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XHJcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG52YXIgX19wcm9wSXNFbnVtID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcclxudmFyIF9fZGVmTm9ybWFsUHJvcCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHsgcmV0dXJuIGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTsgfTtcclxudmFyIF9fc3ByZWFkVmFsdWVzID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIGZvciAodmFyIHByb3AgaW4gYiB8fCAoYiA9IHt9KSlcclxuICAgICAgICBpZiAoX19oYXNPd25Qcm9wLmNhbGwoYiwgcHJvcCkpXHJcbiAgICAgICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcclxuICAgIGlmIChfX2dldE93blByb3BTeW1ib2xzKVxyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2MgPSBfX2dldE93blByb3BTeW1ib2xzKGIpOyBfaSA8IF9jLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgcHJvcCA9IF9jW19pXTtcclxuICAgICAgICAgICAgaWYgKF9fcHJvcElzRW51bS5jYWxsKGIsIHByb3ApKVxyXG4gICAgICAgICAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiBhO1xyXG59O1xyXG52YXIgX19zcHJlYWRQcm9wcyA9IGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBfX2RlZlByb3BzKGEsIF9fZ2V0T3duUHJvcERlc2NzKGIpKTsgfTtcclxudmFyIF9fYXN5bmMgPSBmdW5jdGlvbiAoX190aGlzLCBfX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBmdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yLnRocm93KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHN0ZXAgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5kb25lID8gcmVzb2x2ZSh4LnZhbHVlKSA6IFByb21pc2UucmVzb2x2ZSh4LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9O1xyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseShfX3RoaXMsIF9fYXJndW1lbnRzKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBzcmMvaW5kZXgudHNcclxuaW1wb3J0IHsgZW5hYmxlRVM1IH0gZnJvbSBcImltbWVyXCI7XHJcbmV4cG9ydCAqIGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIGRlZmF1bHQyLCBjdXJyZW50IGFzIGN1cnJlbnQyLCBmcmVlemUsIG9yaWdpbmFsLCBpc0RyYWZ0IGFzIGlzRHJhZnQ0IH0gZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIGFzIGNyZWF0ZVNlbGVjdG9yMiB9IGZyb20gXCJyZXNlbGVjdFwiO1xyXG4vLyBzcmMvY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IudHNcclxuaW1wb3J0IHsgY3VycmVudCwgaXNEcmFmdCB9IGZyb20gXCJpbW1lclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJyZXNlbGVjdFwiO1xyXG52YXIgY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgc2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpO1xyXG4gICAgdmFyIHdyYXBwZWRTZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHZhciByZXN0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgcmVzdFtfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheShbaXNEcmFmdCh2YWx1ZSkgPyBjdXJyZW50KHZhbHVlKSA6IHZhbHVlXSwgcmVzdCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB3cmFwcGVkU2VsZWN0b3I7XHJcbn07XHJcbi8vIHNyYy9jb25maWd1cmVTdG9yZS50c1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSBhcyBjb21wb3NlMiwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuLy8gc3JjL2RldnRvb2xzRXh0ZW5zaW9uLnRzXHJcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxudmFyIGNvbXBvc2VXaXRoRGV2VG9vbHMgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIDogZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBjb21wb3NlO1xyXG4gICAgcmV0dXJuIGNvbXBvc2UuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcclxufTtcclxudmFyIGRldlRvb2xzRW5oYW5jZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fID8gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vb3AyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vb3AyO1xyXG4gICAgfTtcclxufTtcclxuLy8gc3JjL2lzUGxhaW5PYmplY3QudHNcclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PT0gbnVsbClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG4gICAgaWYgKHByb3RvID09PSBudWxsKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgdmFyIGJhc2VQcm90byA9IHByb3RvO1xyXG4gICAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XHJcbiAgICAgICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcclxufVxyXG4vLyBzcmMvZ2V0RGVmYXVsdE1pZGRsZXdhcmUudHNcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuLy8gc3JjL3V0aWxzLnRzXHJcbmltcG9ydCBjcmVhdGVOZXh0U3RhdGUsIHsgaXNEcmFmdGFibGUgfSBmcm9tIFwiaW1tZXJcIjtcclxuZnVuY3Rpb24gZ2V0VGltZU1lYXN1cmVVdGlscyhtYXhEZWxheSwgZm5OYW1lKSB7XHJcbiAgICB2YXIgZWxhcHNlZCA9IDA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lYXN1cmVUaW1lOiBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmluaXNoZWQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgZWxhcHNlZCArPSBmaW5pc2hlZCAtIHN0YXJ0ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdhcm5JZkV4Y2VlZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGFwc2VkID4gbWF4RGVsYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihmbk5hbWUgKyBcIiB0b29rIFwiICsgZWxhcHNlZCArIFwibXMsIHdoaWNoIGlzIG1vcmUgdGhhbiB0aGUgd2FybmluZyB0aHJlc2hvbGQgb2YgXCIgKyBtYXhEZWxheSArIFwibXMuIFxcbklmIHlvdXIgc3RhdGUgb3IgYWN0aW9ucyBhcmUgdmVyeSBsYXJnZSwgeW91IG1heSB3YW50IHRvIGRpc2FibGUgdGhlIG1pZGRsZXdhcmUgYXMgaXQgbWlnaHQgY2F1c2UgdG9vIG11Y2ggb2YgYSBzbG93ZG93biBpbiBkZXZlbG9wbWVudCBtb2RlLiBTZWUgaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy9hcGkvZ2V0RGVmYXVsdE1pZGRsZXdhcmUgZm9yIGluc3RydWN0aW9ucy5cXG5JdCBpcyBkaXNhYmxlZCBpbiBwcm9kdWN0aW9uIGJ1aWxkcywgc28geW91IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgdGhhdC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbnZhciBNaWRkbGV3YXJlQXJyYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoTWlkZGxld2FyZUFycmF5LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTWlkZGxld2FyZUFycmF5KCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJncykgfHwgdGhpcztcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIE1pZGRsZXdhcmVBcnJheS5wcm90b3R5cGUpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNaWRkbGV3YXJlQXJyYXksIFN5bWJvbC5zcGVjaWVzLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNaWRkbGV3YXJlQXJyYXk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWlkZGxld2FyZUFycmF5LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcywgYXJyKTtcclxuICAgIH07XHJcbiAgICBNaWRkbGV3YXJlQXJyYXkucHJvdG90eXBlLnByZXBlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFyclswXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyAoTWlkZGxld2FyZUFycmF5LmJpbmQuYXBwbHkoTWlkZGxld2FyZUFycmF5LCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcnJbMF0uY29uY2F0KHRoaXMpKSkpKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKE1pZGRsZXdhcmVBcnJheS5iaW5kLmFwcGx5KE1pZGRsZXdhcmVBcnJheSwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgYXJyLmNvbmNhdCh0aGlzKSkpKSgpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNaWRkbGV3YXJlQXJyYXk7XHJcbn0oQXJyYXkpKTtcclxudmFyIEVuaGFuY2VyQXJyYXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRW5oYW5jZXJBcnJheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEVuaGFuY2VyQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmdzKSB8fCB0aGlzO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgRW5oYW5jZXJBcnJheS5wcm90b3R5cGUpO1xyXG4gICAgICAgIHJldHVybiBfdGhpcztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbmhhbmNlckFycmF5LCBTeW1ib2wuc3BlY2llcywge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW5oYW5jZXJBcnJheTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBFbmhhbmNlckFycmF5LnByb3RvdHlwZS5jb25jYXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFycltfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcywgYXJyKTtcclxuICAgIH07XHJcbiAgICBFbmhhbmNlckFycmF5LnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcnJbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJbMF0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgKEVuaGFuY2VyQXJyYXkuYmluZC5hcHBseShFbmhhbmNlckFycmF5LCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcnJbMF0uY29uY2F0KHRoaXMpKSkpKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKEVuaGFuY2VyQXJyYXkuYmluZC5hcHBseShFbmhhbmNlckFycmF5LCBfX3NwcmVhZEFycmF5KFt2b2lkIDBdLCBhcnIuY29uY2F0KHRoaXMpKSkpKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEVuaGFuY2VyQXJyYXk7XHJcbn0oQXJyYXkpKTtcclxuZnVuY3Rpb24gZnJlZXplRHJhZnRhYmxlKHZhbCkge1xyXG4gICAgcmV0dXJuIGlzRHJhZnRhYmxlKHZhbCkgPyBjcmVhdGVOZXh0U3RhdGUodmFsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB9KSA6IHZhbDtcclxufVxyXG4vLyBzcmMvaW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLnRzXHJcbnZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcbnZhciBwcmVmaXggPSBcIkludmFyaWFudCBmYWlsZWRcIjtcclxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xyXG4gICAgaWYgKGNvbmRpdGlvbikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXggKyBcIjogXCIgKyAobWVzc2FnZSB8fCBcIlwiKSk7XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaiwgc2VyaWFsaXplciwgaW5kZW50LCBkZWN5Y2xlcikge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgZ2V0U2VyaWFsaXplKHNlcmlhbGl6ZXIsIGRlY3ljbGVyKSwgaW5kZW50KTtcclxufVxyXG5mdW5jdGlvbiBnZXRTZXJpYWxpemUoc2VyaWFsaXplciwgZGVjeWNsZXIpIHtcclxuICAgIHZhciBzdGFjayA9IFtdLCBrZXlzID0gW107XHJcbiAgICBpZiAoIWRlY3ljbGVyKVxyXG4gICAgICAgIGRlY3ljbGVyID0gZnVuY3Rpb24gKF8sIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFja1swXSA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbQ2lyY3VsYXIgfl1cIjtcclxuICAgICAgICAgICAgcmV0dXJuIFwiW0NpcmN1bGFyIH4uXCIgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKFwiLlwiKSArIFwiXVwiO1xyXG4gICAgICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSlcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gZGVjeWNsZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzdGFjay5wdXNoKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gc2VyaWFsaXplciA9PSBudWxsID8gdmFsdWUgOiBzZXJpYWxpemVyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzSW1tdXRhYmxlRGVmYXVsdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IE9iamVjdC5pc0Zyb3plbih2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gdHJhY2tGb3JNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmopIHtcclxuICAgIHZhciB0cmFja2VkUHJvcGVydGllcyA9IHRyYWNrUHJvcGVydGllcyhpc0ltbXV0YWJsZSwgaWdub3JlUGF0aHMsIG9iaik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRldGVjdE11dGF0aW9uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGV0ZWN0TXV0YXRpb25zKGlzSW1tdXRhYmxlLCBpZ25vcmVQYXRocywgdHJhY2tlZFByb3BlcnRpZXMsIG9iaik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmosIHBhdGgpIHtcclxuICAgIGlmIChpZ25vcmVQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZVBhdGhzID0gW107IH1cclxuICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IFwiXCI7IH1cclxuICAgIHZhciB0cmFja2VkID0geyB2YWx1ZTogb2JqIH07XHJcbiAgICBpZiAoIWlzSW1tdXRhYmxlKG9iaikpIHtcclxuICAgICAgICB0cmFja2VkLmNoaWxkcmVuID0ge307XHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRQYXRoID0gcGF0aCA/IHBhdGggKyBcIi5cIiArIGtleSA6IGtleTtcclxuICAgICAgICAgICAgaWYgKGlnbm9yZVBhdGhzLmxlbmd0aCAmJiBpZ25vcmVQYXRocy5pbmRleE9mKGNoaWxkUGF0aCkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cmFja2VkLmNoaWxkcmVuW2tleV0gPSB0cmFja1Byb3BlcnRpZXMoaXNJbW11dGFibGUsIGlnbm9yZVBhdGhzLCBvYmpba2V5XSwgY2hpbGRQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhY2tlZDtcclxufVxyXG5mdW5jdGlvbiBkZXRlY3RNdXRhdGlvbnMoaXNJbW11dGFibGUsIGlnbm9yZWRQYXRocywgdHJhY2tlZFByb3BlcnR5LCBvYmosIHNhbWVQYXJlbnRSZWYsIHBhdGgpIHtcclxuICAgIGlmIChpZ25vcmVkUGF0aHMgPT09IHZvaWQgMCkgeyBpZ25vcmVkUGF0aHMgPSBbXTsgfVxyXG4gICAgaWYgKHNhbWVQYXJlbnRSZWYgPT09IHZvaWQgMCkgeyBzYW1lUGFyZW50UmVmID0gZmFsc2U7IH1cclxuICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IFwiXCI7IH1cclxuICAgIHZhciBwcmV2T2JqID0gdHJhY2tlZFByb3BlcnR5ID8gdHJhY2tlZFByb3BlcnR5LnZhbHVlIDogdm9pZCAwO1xyXG4gICAgdmFyIHNhbWVSZWYgPSBwcmV2T2JqID09PSBvYmo7XHJcbiAgICBpZiAoc2FtZVBhcmVudFJlZiAmJiAhc2FtZVJlZiAmJiAhTnVtYmVyLmlzTmFOKG9iaikpIHtcclxuICAgICAgICByZXR1cm4geyB3YXNNdXRhdGVkOiB0cnVlLCBwYXRoOiBwYXRoIH07XHJcbiAgICB9XHJcbiAgICBpZiAoaXNJbW11dGFibGUocHJldk9iaikgfHwgaXNJbW11dGFibGUob2JqKSkge1xyXG4gICAgICAgIHJldHVybiB7IHdhc011dGF0ZWQ6IGZhbHNlIH07XHJcbiAgICB9XHJcbiAgICB2YXIga2V5c1RvRGV0ZWN0ID0ge307XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdHJhY2tlZFByb3BlcnR5LmNoaWxkcmVuKSB7XHJcbiAgICAgICAga2V5c1RvRGV0ZWN0W2tleV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGtleXNUb0RldGVjdFtrZXldID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHZhciBoYXNJZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMubGVuZ3RoID4gMDtcclxuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHZhciBuZXN0ZWRQYXRoID0gcGF0aCA/IHBhdGggKyBcIi5cIiArIGtleSA6IGtleTtcclxuICAgICAgICBpZiAoaGFzSWdub3JlZFBhdGhzKSB7XHJcbiAgICAgICAgICAgIHZhciBoYXNNYXRjaGVzID0gaWdub3JlZFBhdGhzLnNvbWUoZnVuY3Rpb24gKGlnbm9yZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpZ25vcmVkIGluc3RhbmNlb2YgUmVnRXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlnbm9yZWQudGVzdChuZXN0ZWRQYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXN0ZWRQYXRoID09PSBpZ25vcmVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGhhc01hdGNoZXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRldGVjdE11dGF0aW9ucyhpc0ltbXV0YWJsZSwgaWdub3JlZFBhdGhzLCB0cmFja2VkUHJvcGVydHkuY2hpbGRyZW5ba2V5XSwgb2JqW2tleV0sIHNhbWVSZWYsIG5lc3RlZFBhdGgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQud2FzTXV0YXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogcmVzdWx0IH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGtleSBpbiBrZXlzVG9EZXRlY3QpIHtcclxuICAgICAgICB2YXIgc3RhdGVfMSA9IF9sb29wXzEoa2V5KTtcclxuICAgICAgICBpZiAodHlwZW9mIHN0YXRlXzEgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZV8xLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgd2FzTXV0YXRlZDogZmFsc2UgfTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIG5leHQoYWN0aW9uKTsgfTsgfTsgfTtcclxuICAgIH1cclxuICAgIHZhciBfYyA9IG9wdGlvbnMuaXNJbW11dGFibGUsIGlzSW1tdXRhYmxlID0gX2MgPT09IHZvaWQgMCA/IGlzSW1tdXRhYmxlRGVmYXVsdCA6IF9jLCBpZ25vcmVkUGF0aHMgPSBvcHRpb25zLmlnbm9yZWRQYXRocywgX2QgPSBvcHRpb25zLndhcm5BZnRlciwgd2FybkFmdGVyID0gX2QgPT09IHZvaWQgMCA/IDMyIDogX2QsIGlnbm9yZSA9IG9wdGlvbnMuaWdub3JlO1xyXG4gICAgaWdub3JlZFBhdGhzID0gaWdub3JlZFBhdGhzIHx8IGlnbm9yZTtcclxuICAgIHZhciB0cmFjayA9IHRyYWNrRm9yTXV0YXRpb25zLmJpbmQobnVsbCwgaXNJbW11dGFibGUsIGlnbm9yZWRQYXRocyk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgdmFyIGdldFN0YXRlID0gX2MuZ2V0U3RhdGU7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICB2YXIgdHJhY2tlciA9IHRyYWNrKHN0YXRlKTtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsIFwiSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlXCIpO1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMubWVhc3VyZVRpbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJhY2tlci5kZXRlY3RNdXRhdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRyYWNrZXIgPSB0cmFjayhzdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQoIXJlc3VsdC53YXNNdXRhdGVkLCBcIkEgc3RhdGUgbXV0YXRpb24gd2FzIGRldGVjdGVkIGJldHdlZW4gZGlzcGF0Y2hlcywgaW4gdGhlIHBhdGggJ1wiICsgKHJlc3VsdC5wYXRoIHx8IFwiXCIpICsgXCInLiAgVGhpcyBtYXkgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yLiAoaHR0cHM6Ly9yZWR1eC5qcy5vcmcvc3R5bGUtZ3VpZGUvc3R5bGUtZ3VpZGUjZG8tbm90LW11dGF0ZS1zdGF0ZSlcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgZGlzcGF0Y2hlZEFjdGlvbiA9IG5leHQoYWN0aW9uKTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLm1lYXN1cmVUaW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRyYWNrZXIuZGV0ZWN0TXV0YXRpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0cmFja2VyID0gdHJhY2soc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0Lndhc011dGF0ZWQgJiYgaW52YXJpYW50KCFyZXN1bHQud2FzTXV0YXRlZCwgXCJBIHN0YXRlIG11dGF0aW9uIHdhcyBkZXRlY3RlZCBpbnNpZGUgYSBkaXNwYXRjaCwgaW4gdGhlIHBhdGg6IFwiICsgKHJlc3VsdC5wYXRoIHx8IFwiXCIpICsgXCIuIFRha2UgYSBsb29rIGF0IHRoZSByZWR1Y2VyKHMpIGhhbmRsaW5nIHRoZSBhY3Rpb24gXCIgKyBzdHJpbmdpZnkoYWN0aW9uKSArIFwiLiAoaHR0cHM6Ly9yZWR1eC5qcy5vcmcvc3R5bGUtZ3VpZGUvc3R5bGUtZ3VpZGUjZG8tbm90LW11dGF0ZS1zdGF0ZSlcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBtZWFzdXJlVXRpbHMud2FybklmRXhjZWVkZWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpc3BhdGNoZWRBY3Rpb247XHJcbiAgICAgICAgfTsgfTtcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL3NlcmlhbGl6YWJsZVN0YXRlSW52YXJpYW50TWlkZGxld2FyZS50c1xyXG5mdW5jdGlvbiBpc1BsYWluKHZhbCkge1xyXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xyXG4gICAgcmV0dXJuIHZhbCA9PSBudWxsIHx8IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBBcnJheS5pc0FycmF5KHZhbCkgfHwgaXNQbGFpbk9iamVjdCh2YWwpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmROb25TZXJpYWxpemFibGVWYWx1ZSh2YWx1ZSwgcGF0aCwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRQYXRocywgY2FjaGUpIHtcclxuICAgIGlmIChwYXRoID09PSB2b2lkIDApIHsgcGF0aCA9IFwiXCI7IH1cclxuICAgIGlmIChpc1NlcmlhbGl6YWJsZSA9PT0gdm9pZCAwKSB7IGlzU2VyaWFsaXphYmxlID0gaXNQbGFpbjsgfVxyXG4gICAgaWYgKGlnbm9yZWRQYXRocyA9PT0gdm9pZCAwKSB7IGlnbm9yZWRQYXRocyA9IFtdOyB9XHJcbiAgICB2YXIgZm91bmROZXN0ZWRTZXJpYWxpemFibGU7XHJcbiAgICBpZiAoIWlzU2VyaWFsaXphYmxlKHZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleVBhdGg6IHBhdGggfHwgXCI8cm9vdD5cIixcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FjaGUgPT0gbnVsbCA/IHZvaWQgMCA6IGNhY2hlLmhhcyh2YWx1ZSkpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGVudHJpZXMgPSBnZXRFbnRyaWVzICE9IG51bGwgPyBnZXRFbnRyaWVzKHZhbHVlKSA6IE9iamVjdC5lbnRyaWVzKHZhbHVlKTtcclxuICAgIHZhciBoYXNJZ25vcmVkUGF0aHMgPSBpZ25vcmVkUGF0aHMubGVuZ3RoID4gMDtcclxuICAgIHZhciBfbG9vcF8yID0gZnVuY3Rpb24gKGtleSwgbmVzdGVkVmFsdWUpIHtcclxuICAgICAgICB2YXIgbmVzdGVkUGF0aCA9IHBhdGggPyBwYXRoICsgXCIuXCIgKyBrZXkgOiBrZXk7XHJcbiAgICAgICAgaWYgKGhhc0lnbm9yZWRQYXRocykge1xyXG4gICAgICAgICAgICB2YXIgaGFzTWF0Y2hlcyA9IGlnbm9yZWRQYXRocy5zb21lKGZ1bmN0aW9uIChpZ25vcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlZCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZ25vcmVkLnRlc3QobmVzdGVkUGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmVzdGVkUGF0aCA9PT0gaWdub3JlZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNNYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNTZXJpYWxpemFibGUobmVzdGVkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5UGF0aDogbmVzdGVkUGF0aCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmVzdGVkVmFsdWVcclxuICAgICAgICAgICAgICAgIH0gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiBuZXN0ZWRWYWx1ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShuZXN0ZWRWYWx1ZSwgbmVzdGVkUGF0aCwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRQYXRocywgY2FjaGUpO1xyXG4gICAgICAgICAgICBpZiAoZm91bmROZXN0ZWRTZXJpYWxpemFibGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBmb3VuZE5lc3RlZFNlcmlhbGl6YWJsZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZW50cmllc18xID0gZW50cmllczsgX2kgPCBlbnRyaWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIF9jID0gZW50cmllc18xW19pXSwga2V5ID0gX2NbMF0sIG5lc3RlZFZhbHVlID0gX2NbMV07XHJcbiAgICAgICAgdmFyIHN0YXRlXzIgPSBfbG9vcF8yKGtleSwgbmVzdGVkVmFsdWUpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGVfMiA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXzIudmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAoY2FjaGUgJiYgaXNOZXN0ZWRGcm96ZW4odmFsdWUpKVxyXG4gICAgICAgIGNhY2hlLmFkZCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gaXNOZXN0ZWRGcm96ZW4odmFsdWUpIHtcclxuICAgIGlmICghT2JqZWN0LmlzRnJvemVuKHZhbHVlKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9jID0gT2JqZWN0LnZhbHVlcyh2YWx1ZSk7IF9pIDwgX2MubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIG5lc3RlZFZhbHVlID0gX2NbX2ldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbmVzdGVkVmFsdWUgIT09IFwib2JqZWN0XCIgfHwgbmVzdGVkVmFsdWUgPT09IG51bGwpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGlmICghaXNOZXN0ZWRGcm96ZW4obmVzdGVkVmFsdWUpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUob3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIG5leHQoYWN0aW9uKTsgfTsgfTsgfTtcclxuICAgIH1cclxuICAgIHZhciBfYyA9IG9wdGlvbnMuaXNTZXJpYWxpemFibGUsIGlzU2VyaWFsaXphYmxlID0gX2MgPT09IHZvaWQgMCA/IGlzUGxhaW4gOiBfYywgZ2V0RW50cmllcyA9IG9wdGlvbnMuZ2V0RW50cmllcywgX2QgPSBvcHRpb25zLmlnbm9yZWRBY3Rpb25zLCBpZ25vcmVkQWN0aW9ucyA9IF9kID09PSB2b2lkIDAgPyBbXSA6IF9kLCBfZSA9IG9wdGlvbnMuaWdub3JlZEFjdGlvblBhdGhzLCBpZ25vcmVkQWN0aW9uUGF0aHMgPSBfZSA9PT0gdm9pZCAwID8gW1wibWV0YS5hcmdcIiwgXCJtZXRhLmJhc2VRdWVyeU1ldGFcIl0gOiBfZSwgX2YgPSBvcHRpb25zLmlnbm9yZWRQYXRocywgaWdub3JlZFBhdGhzID0gX2YgPT09IHZvaWQgMCA/IFtdIDogX2YsIF9nID0gb3B0aW9ucy53YXJuQWZ0ZXIsIHdhcm5BZnRlciA9IF9nID09PSB2b2lkIDAgPyAzMiA6IF9nLCBfaCA9IG9wdGlvbnMuaWdub3JlU3RhdGUsIGlnbm9yZVN0YXRlID0gX2ggPT09IHZvaWQgMCA/IGZhbHNlIDogX2gsIF9qID0gb3B0aW9ucy5pZ25vcmVBY3Rpb25zLCBpZ25vcmVBY3Rpb25zID0gX2ogPT09IHZvaWQgMCA/IGZhbHNlIDogX2osIF9rID0gb3B0aW9ucy5kaXNhYmxlQ2FjaGUsIGRpc2FibGVDYWNoZSA9IF9rID09PSB2b2lkIDAgPyBmYWxzZSA6IF9rO1xyXG4gICAgdmFyIGNhY2hlID0gIWRpc2FibGVDYWNoZSAmJiBXZWFrU2V0ID8gbmV3IFdlYWtTZXQoKSA6IHZvaWQgMDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RvcmVBUEkpIHsgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5leHQoYWN0aW9uKTtcclxuICAgICAgICB2YXIgbWVhc3VyZVV0aWxzID0gZ2V0VGltZU1lYXN1cmVVdGlscyh3YXJuQWZ0ZXIsIFwiU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlXCIpO1xyXG4gICAgICAgIGlmICghaWdub3JlQWN0aW9ucyAmJiAhKGlnbm9yZWRBY3Rpb25zLmxlbmd0aCAmJiBpZ25vcmVkQWN0aW9ucy5pbmRleE9mKGFjdGlvbi50eXBlKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShhY3Rpb24sIFwiXCIsIGlzU2VyaWFsaXphYmxlLCBnZXRFbnRyaWVzLCBpZ25vcmVkQWN0aW9uUGF0aHMsIGNhY2hlKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleVBhdGggPSBmb3VuZEFjdGlvbk5vblNlcmlhbGl6YWJsZVZhbHVlLmtleVBhdGgsIHZhbHVlID0gZm91bmRBY3Rpb25Ob25TZXJpYWxpemFibGVWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQSBub24tc2VyaWFsaXphYmxlIHZhbHVlIHdhcyBkZXRlY3RlZCBpbiBhbiBhY3Rpb24sIGluIHRoZSBwYXRoOiBgXCIgKyBrZXlQYXRoICsgXCJgLiBWYWx1ZTpcIiwgdmFsdWUsIFwiXFxuVGFrZSBhIGxvb2sgYXQgdGhlIGxvZ2ljIHRoYXQgZGlzcGF0Y2hlZCB0aGlzIGFjdGlvbjogXCIsIGFjdGlvbiwgXCJcXG4oU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2ZhcS9hY3Rpb25zI3doeS1zaG91bGQtdHlwZS1iZS1hLXN0cmluZy1vci1hdC1sZWFzdC1zZXJpYWxpemFibGUtd2h5LXNob3VsZC1teS1hY3Rpb24tdHlwZXMtYmUtY29uc3RhbnRzKVwiLCBcIlxcbihUbyBhbGxvdyBub24tc2VyaWFsaXphYmxlIHZhbHVlcyBzZWU6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvdXNhZ2UvdXNhZ2UtZ3VpZGUjd29ya2luZy13aXRoLW5vbi1zZXJpYWxpemFibGUtZGF0YSlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlnbm9yZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIG1lYXN1cmVVdGlscy5tZWFzdXJlVGltZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBzdG9yZUFQSS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSA9IGZpbmROb25TZXJpYWxpemFibGVWYWx1ZShzdGF0ZSwgXCJcIiwgaXNTZXJpYWxpemFibGUsIGdldEVudHJpZXMsIGlnbm9yZWRQYXRocywgY2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kU3RhdGVOb25TZXJpYWxpemFibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlQYXRoID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLmtleVBhdGgsIHZhbHVlID0gZm91bmRTdGF0ZU5vblNlcmlhbGl6YWJsZVZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBIG5vbi1zZXJpYWxpemFibGUgdmFsdWUgd2FzIGRldGVjdGVkIGluIHRoZSBzdGF0ZSwgaW4gdGhlIHBhdGg6IGBcIiArIGtleVBhdGggKyBcImAuIFZhbHVlOlwiLCB2YWx1ZSwgXCJcXG5UYWtlIGEgbG9vayBhdCB0aGUgcmVkdWNlcihzKSBoYW5kbGluZyB0aGlzIGFjdGlvbiB0eXBlOiBcIiArIGFjdGlvbi50eXBlICsgXCIuXFxuKFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy9mYXEvb3JnYW5pemluZy1zdGF0ZSNjYW4taS1wdXQtZnVuY3Rpb25zLXByb21pc2VzLW9yLW90aGVyLW5vbi1zZXJpYWxpemFibGUtaXRlbXMtaW4tbXktc3RvcmUtc3RhdGUpXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbWVhc3VyZVV0aWxzLndhcm5JZkV4Y2VlZGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9OyB9OyB9O1xyXG59XHJcbi8vIHNyYy9nZXREZWZhdWx0TWlkZGxld2FyZS50c1xyXG5mdW5jdGlvbiBpc0Jvb2xlYW4oeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImJvb2xlYW5cIjtcclxufVxyXG5mdW5jdGlvbiBjdXJyeUdldERlZmF1bHRNaWRkbGV3YXJlKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERlZmF1bHRNaWRkbGV3YXJlKG9wdGlvbnMpO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXREZWZhdWx0TWlkZGxld2FyZShvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxyXG4gICAgdmFyIF9jID0gb3B0aW9ucy50aHVuaywgdGh1bmsgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuaW1tdXRhYmxlQ2hlY2ssIGltbXV0YWJsZUNoZWNrID0gX2QgPT09IHZvaWQgMCA/IHRydWUgOiBfZCwgX2UgPSBvcHRpb25zLnNlcmlhbGl6YWJsZUNoZWNrLCBzZXJpYWxpemFibGVDaGVjayA9IF9lID09PSB2b2lkIDAgPyB0cnVlIDogX2U7XHJcbiAgICB2YXIgbWlkZGxld2FyZUFycmF5ID0gbmV3IE1pZGRsZXdhcmVBcnJheSgpO1xyXG4gICAgaWYgKHRodW5rKSB7XHJcbiAgICAgICAgaWYgKGlzQm9vbGVhbih0aHVuaykpIHtcclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2godGh1bmtNaWRkbGV3YXJlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIG1pZGRsZXdhcmVBcnJheS5wdXNoKHRodW5rTWlkZGxld2FyZS53aXRoRXh0cmFBcmd1bWVudCh0aHVuay5leHRyYUFyZ3VtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmIChpbW11dGFibGVDaGVjaykge1xyXG4gICAgICAgICAgICB2YXIgaW1tdXRhYmxlT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIWlzQm9vbGVhbihpbW11dGFibGVDaGVjaykpIHtcclxuICAgICAgICAgICAgICAgIGltbXV0YWJsZU9wdGlvbnMgPSBpbW11dGFibGVDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtaWRkbGV3YXJlQXJyYXkudW5zaGlmdChjcmVhdGVJbW11dGFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUoaW1tdXRhYmxlT3B0aW9ucykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VyaWFsaXphYmxlQ2hlY2spIHtcclxuICAgICAgICAgICAgdmFyIHNlcmlhbGl6YWJsZU9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFpc0Jvb2xlYW4oc2VyaWFsaXphYmxlQ2hlY2spKSB7XHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemFibGVPcHRpb25zID0gc2VyaWFsaXphYmxlQ2hlY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWlkZGxld2FyZUFycmF5LnB1c2goY3JlYXRlU2VyaWFsaXphYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlKHNlcmlhbGl6YWJsZU9wdGlvbnMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWlkZGxld2FyZUFycmF5O1xyXG59XHJcbi8vIHNyYy9jb25maWd1cmVTdG9yZS50c1xyXG52YXIgSVNfUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuZnVuY3Rpb24gY29uZmlndXJlU3RvcmUob3B0aW9ucykge1xyXG4gICAgdmFyIGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSA9IGN1cnJ5R2V0RGVmYXVsdE1pZGRsZXdhcmUoKTtcclxuICAgIHZhciBfYyA9IG9wdGlvbnMgfHwge30sIF9kID0gX2MucmVkdWNlciwgcmVkdWNlciA9IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZCwgX2UgPSBfYy5taWRkbGV3YXJlLCBtaWRkbGV3YXJlID0gX2UgPT09IHZvaWQgMCA/IGN1cnJpZWRHZXREZWZhdWx0TWlkZGxld2FyZSgpIDogX2UsIF9mID0gX2MuZGV2VG9vbHMsIGRldlRvb2xzID0gX2YgPT09IHZvaWQgMCA/IHRydWUgOiBfZiwgX2cgPSBfYy5wcmVsb2FkZWRTdGF0ZSwgcHJlbG9hZGVkU3RhdGUgPSBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2csIF9oID0gX2MuZW5oYW5jZXJzLCBlbmhhbmNlcnMgPSBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2g7XHJcbiAgICB2YXIgcm9vdFJlZHVjZXI7XHJcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJvb3RSZWR1Y2VyID0gcmVkdWNlcjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocmVkdWNlcikpIHtcclxuICAgICAgICByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJyZWR1Y2VyXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudCwgYW5kIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhbiBvYmplY3Qgb2YgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBjb21iaW5lUmVkdWNlcnMnKTtcclxuICAgIH1cclxuICAgIHZhciBmaW5hbE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlO1xyXG4gICAgaWYgKHR5cGVvZiBmaW5hbE1pZGRsZXdhcmUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIGZpbmFsTWlkZGxld2FyZSA9IGZpbmFsTWlkZGxld2FyZShjdXJyaWVkR2V0RGVmYXVsdE1pZGRsZXdhcmUpO1xyXG4gICAgICAgIGlmICghSVNfUFJPRFVDVElPTiAmJiAhQXJyYXkuaXNBcnJheShmaW5hbE1pZGRsZXdhcmUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIndoZW4gdXNpbmcgYSBtaWRkbGV3YXJlIGJ1aWxkZXIgZnVuY3Rpb24sIGFuIGFycmF5IG9mIG1pZGRsZXdhcmUgbXVzdCBiZSByZXR1cm5lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIUlTX1BST0RVQ1RJT04gJiYgZmluYWxNaWRkbGV3YXJlLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIHR5cGVvZiBpdGVtICE9PSBcImZ1bmN0aW9uXCI7IH0pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWFjaCBtaWRkbGV3YXJlIHByb3ZpZGVkIHRvIGNvbmZpZ3VyZVN0b3JlIG11c3QgYmUgYSBmdW5jdGlvblwiKTtcclxuICAgIH1cclxuICAgIHZhciBtaWRkbGV3YXJlRW5oYW5jZXIgPSBhcHBseU1pZGRsZXdhcmUuYXBwbHkodm9pZCAwLCBmaW5hbE1pZGRsZXdhcmUpO1xyXG4gICAgdmFyIGZpbmFsQ29tcG9zZSA9IGNvbXBvc2UyO1xyXG4gICAgaWYgKGRldlRvb2xzKSB7XHJcbiAgICAgICAgZmluYWxDb21wb3NlID0gY29tcG9zZVdpdGhEZXZUb29scyhfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgICAgIHRyYWNlOiAhSVNfUFJPRFVDVElPTlxyXG4gICAgICAgIH0sIHR5cGVvZiBkZXZUb29scyA9PT0gXCJvYmplY3RcIiAmJiBkZXZUb29scykpO1xyXG4gICAgfVxyXG4gICAgdmFyIGRlZmF1bHRFbmhhbmNlcnMgPSBuZXcgRW5oYW5jZXJBcnJheShtaWRkbGV3YXJlRW5oYW5jZXIpO1xyXG4gICAgdmFyIHN0b3JlRW5oYW5jZXJzID0gZGVmYXVsdEVuaGFuY2VycztcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGVuaGFuY2VycykpIHtcclxuICAgICAgICBzdG9yZUVuaGFuY2VycyA9IF9fc3ByZWFkQXJyYXkoW21pZGRsZXdhcmVFbmhhbmNlcl0sIGVuaGFuY2Vycyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgZW5oYW5jZXJzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBzdG9yZUVuaGFuY2VycyA9IGVuaGFuY2VycyhkZWZhdWx0RW5oYW5jZXJzKTtcclxuICAgIH1cclxuICAgIHZhciBjb21wb3NlZEVuaGFuY2VyID0gZmluYWxDb21wb3NlLmFwcGx5KHZvaWQgMCwgc3RvcmVFbmhhbmNlcnMpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZWRFbmhhbmNlcik7XHJcbn1cclxuLy8gc3JjL2NyZWF0ZUFjdGlvbi50c1xyXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb24odHlwZSwgcHJlcGFyZUFjdGlvbikge1xyXG4gICAgZnVuY3Rpb24gYWN0aW9uQ3JlYXRvcigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByZXBhcmVBY3Rpb24pIHtcclxuICAgICAgICAgICAgdmFyIHByZXBhcmVkID0gcHJlcGFyZUFjdGlvbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xyXG4gICAgICAgICAgICBpZiAoIXByZXBhcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJwcmVwYXJlQWN0aW9uIGRpZCBub3QgcmV0dXJuIGFuIG9iamVjdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHByZXBhcmVkLnBheWxvYWRcclxuICAgICAgICAgICAgfSwgXCJtZXRhXCIgaW4gcHJlcGFyZWQgJiYgeyBtZXRhOiBwcmVwYXJlZC5tZXRhIH0pLCBcImVycm9yXCIgaW4gcHJlcGFyZWQgJiYgeyBlcnJvcjogcHJlcGFyZWQuZXJyb3IgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IGFyZ3NbMF0gfTtcclxuICAgIH1cclxuICAgIGFjdGlvbkNyZWF0b3IudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBcIlwiICsgdHlwZTsgfTtcclxuICAgIGFjdGlvbkNyZWF0b3IudHlwZSA9IHR5cGU7XHJcbiAgICBhY3Rpb25DcmVhdG9yLm1hdGNoID0gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gYWN0aW9uLnR5cGUgPT09IHR5cGU7IH07XHJcbiAgICByZXR1cm4gYWN0aW9uQ3JlYXRvcjtcclxufVxyXG5mdW5jdGlvbiBpc0FjdGlvbihhY3Rpb24pIHtcclxuICAgIHJldHVybiBpc1BsYWluT2JqZWN0KGFjdGlvbikgJiYgXCJ0eXBlXCIgaW4gYWN0aW9uO1xyXG59XHJcbmZ1bmN0aW9uIGlzRlNBKGFjdGlvbikge1xyXG4gICAgcmV0dXJuIGlzQWN0aW9uKGFjdGlvbikgJiYgdHlwZW9mIGFjdGlvbi50eXBlID09PSBcInN0cmluZ1wiICYmIE9iamVjdC5rZXlzKGFjdGlvbikuZXZlcnkoaXNWYWxpZEtleSk7XHJcbn1cclxuZnVuY3Rpb24gaXNWYWxpZEtleShrZXkpIHtcclxuICAgIHJldHVybiBbXCJ0eXBlXCIsIFwicGF5bG9hZFwiLCBcImVycm9yXCIsIFwibWV0YVwiXS5pbmRleE9mKGtleSkgPiAtMTtcclxufVxyXG5mdW5jdGlvbiBnZXRUeXBlKGFjdGlvbkNyZWF0b3IpIHtcclxuICAgIHJldHVybiBcIlwiICsgYWN0aW9uQ3JlYXRvcjtcclxufVxyXG4vLyBzcmMvY3JlYXRlUmVkdWNlci50c1xyXG5pbXBvcnQgY3JlYXRlTmV4dFN0YXRlMiwgeyBpc0RyYWZ0IGFzIGlzRHJhZnQyLCBpc0RyYWZ0YWJsZSBhcyBpc0RyYWZ0YWJsZTIgfSBmcm9tIFwiaW1tZXJcIjtcclxuLy8gc3JjL21hcEJ1aWxkZXJzLnRzXHJcbmZ1bmN0aW9uIGV4ZWN1dGVSZWR1Y2VyQnVpbGRlckNhbGxiYWNrKGJ1aWxkZXJDYWxsYmFjaykge1xyXG4gICAgdmFyIGFjdGlvbnNNYXAgPSB7fTtcclxuICAgIHZhciBhY3Rpb25NYXRjaGVycyA9IFtdO1xyXG4gICAgdmFyIGRlZmF1bHRDYXNlUmVkdWNlcjtcclxuICAgIHZhciBidWlsZGVyID0ge1xyXG4gICAgICAgIGFkZENhc2U6IGZ1bmN0aW9uICh0eXBlT3JBY3Rpb25DcmVhdG9yLCByZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25NYXRjaGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYGJ1aWxkZXIuYWRkQ2FzZWAgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIGJlZm9yZSBjYWxsaW5nIGBidWlsZGVyLmFkZE1hdGNoZXJgXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZENhc2VgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdHlwZU9yQWN0aW9uQ3JlYXRvciA9PT0gXCJzdHJpbmdcIiA/IHR5cGVPckFjdGlvbkNyZWF0b3IgOiB0eXBlT3JBY3Rpb25DcmVhdG9yLnR5cGU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlIGluIGFjdGlvbnNNYXApIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImFkZENhc2UgY2Fubm90IGJlIGNhbGxlZCB3aXRoIHR3byByZWR1Y2VycyBmb3IgdGhlIHNhbWUgYWN0aW9uIHR5cGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uc01hcFt0eXBlXSA9IHJlZHVjZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkTWF0Y2hlcjogZnVuY3Rpb24gKG1hdGNoZXIsIHJlZHVjZXIpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImBidWlsZGVyLmFkZE1hdGNoZXJgIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBiZWZvcmUgY2FsbGluZyBgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWN0aW9uTWF0Y2hlcnMucHVzaCh7IG1hdGNoZXI6IG1hdGNoZXIsIHJlZHVjZXI6IHJlZHVjZXIgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBidWlsZGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkRGVmYXVsdENhc2U6IGZ1bmN0aW9uIChyZWR1Y2VyKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJgYnVpbGRlci5hZGREZWZhdWx0Q2FzZWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdENhc2VSZWR1Y2VyID0gcmVkdWNlcjtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1aWxkZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGJ1aWxkZXJDYWxsYmFjayhidWlsZGVyKTtcclxuICAgIHJldHVybiBbYWN0aW9uc01hcCwgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcl07XHJcbn1cclxuLy8gc3JjL2NyZWF0ZVJlZHVjZXIudHNcclxuZnVuY3Rpb24gaXNTdGF0ZUZ1bmN0aW9uKHgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgeCA9PT0gXCJmdW5jdGlvblwiO1xyXG59XHJcbnZhciBoYXNXYXJuZWRBYm91dE9iamVjdE5vdGF0aW9uID0gZmFsc2U7XHJcbmZ1bmN0aW9uIGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCBtYXBPckJ1aWxkZXJDYWxsYmFjaywgYWN0aW9uTWF0Y2hlcnMsIGRlZmF1bHRDYXNlUmVkdWNlcikge1xyXG4gICAgaWYgKGFjdGlvbk1hdGNoZXJzID09PSB2b2lkIDApIHsgYWN0aW9uTWF0Y2hlcnMgPSBbXTsgfVxyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWFwT3JCdWlsZGVyQ2FsbGJhY2sgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dE9iamVjdE5vdGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNXYXJuZWRBYm91dE9iamVjdE5vdGF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBvYmplY3Qgbm90YXRpb24gZm9yIGBjcmVhdGVSZWR1Y2VyYCBpcyBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJUSyAyLjAuIFBsZWFzZSB1c2UgdGhlICdidWlsZGVyIGNhbGxiYWNrJyBub3RhdGlvbiBpbnN0ZWFkOiBodHRwczovL3JlZHV4LXRvb2xraXQuanMub3JnL2FwaS9jcmVhdGVSZWR1Y2VyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIF9jID0gdHlwZW9mIG1hcE9yQnVpbGRlckNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIgPyBleGVjdXRlUmVkdWNlckJ1aWxkZXJDYWxsYmFjayhtYXBPckJ1aWxkZXJDYWxsYmFjaykgOiBbbWFwT3JCdWlsZGVyQ2FsbGJhY2ssIGFjdGlvbk1hdGNoZXJzLCBkZWZhdWx0Q2FzZVJlZHVjZXJdLCBhY3Rpb25zTWFwID0gX2NbMF0sIGZpbmFsQWN0aW9uTWF0Y2hlcnMgPSBfY1sxXSwgZmluYWxEZWZhdWx0Q2FzZVJlZHVjZXIgPSBfY1syXTtcclxuICAgIHZhciBnZXRJbml0aWFsU3RhdGU7XHJcbiAgICBpZiAoaXNTdGF0ZUZ1bmN0aW9uKGluaXRpYWxTdGF0ZSkpIHtcclxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmcmVlemVEcmFmdGFibGUoaW5pdGlhbFN0YXRlKCkpOyB9O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGZyb3plbkluaXRpYWxTdGF0ZV8xID0gZnJlZXplRHJhZnRhYmxlKGluaXRpYWxTdGF0ZSk7XHJcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnJvemVuSW5pdGlhbFN0YXRlXzE7IH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkgeyBzdGF0ZSA9IGdldEluaXRpYWxTdGF0ZSgpOyB9XHJcbiAgICAgICAgdmFyIGNhc2VSZWR1Y2VycyA9IF9fc3ByZWFkQXJyYXkoW1xyXG4gICAgICAgICAgICBhY3Rpb25zTWFwW2FjdGlvbi50eXBlXVxyXG4gICAgICAgIF0sIGZpbmFsQWN0aW9uTWF0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlciA9IF9jLm1hdGNoZXI7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVyKGFjdGlvbik7XHJcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICB2YXIgcmVkdWNlcjIgPSBfYy5yZWR1Y2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVkdWNlcjI7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIGlmIChjYXNlUmVkdWNlcnMuZmlsdGVyKGZ1bmN0aW9uIChjcikgeyByZXR1cm4gISFjcjsgfSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNhc2VSZWR1Y2VycyA9IFtmaW5hbERlZmF1bHRDYXNlUmVkdWNlcl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYXNlUmVkdWNlcnMucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlLCBjYXNlUmVkdWNlcikge1xyXG4gICAgICAgICAgICBpZiAoY2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0RyYWZ0MihwcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkcmFmdCA9IHByZXZpb3VzU3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXNTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0RyYWZ0YWJsZTIocHJldmlvdXNTdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gY2FzZVJlZHVjZXIocHJldmlvdXNTdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiQSBjYXNlIHJlZHVjZXIgb24gYSBub24tZHJhZnRhYmxlIHZhbHVlIG11c3Qgbm90IHJldHVybiB1bmRlZmluZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlTmV4dFN0YXRlMihwcmV2aW91c1N0YXRlLCBmdW5jdGlvbiAoZHJhZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhc2VSZWR1Y2VyKGRyYWZ0LCBhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91c1N0YXRlO1xyXG4gICAgICAgIH0sIHN0YXRlKTtcclxuICAgIH1cclxuICAgIHJlZHVjZXIuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlO1xyXG4gICAgcmV0dXJuIHJlZHVjZXI7XHJcbn1cclxuLy8gc3JjL2NyZWF0ZVNsaWNlLnRzXHJcbnZhciBoYXNXYXJuZWRBYm91dE9iamVjdE5vdGF0aW9uMiA9IGZhbHNlO1xyXG5mdW5jdGlvbiBnZXRUeXBlMihzbGljZSwgYWN0aW9uS2V5KSB7XHJcbiAgICByZXR1cm4gc2xpY2UgKyBcIi9cIiArIGFjdGlvbktleTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVTbGljZShvcHRpb25zKSB7XHJcbiAgICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgIGlmICghbmFtZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBuYW1lYCBpcyBhIHJlcXVpcmVkIG9wdGlvbiBmb3IgY3JlYXRlU2xpY2VcIik7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmluaXRpYWxTdGF0ZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgbXVzdCBwcm92aWRlIGFuIGBpbml0aWFsU3RhdGVgIHZhbHVlIHRoYXQgaXMgbm90IGB1bmRlZmluZWRgLiBZb3UgbWF5IGhhdmUgbWlzc3BlbGxlZCBgaW5pdGlhbFN0YXRlYFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gdHlwZW9mIG9wdGlvbnMuaW5pdGlhbFN0YXRlID09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMuaW5pdGlhbFN0YXRlIDogZnJlZXplRHJhZnRhYmxlKG9wdGlvbnMuaW5pdGlhbFN0YXRlKTtcclxuICAgIHZhciByZWR1Y2VycyA9IG9wdGlvbnMucmVkdWNlcnMgfHwge307XHJcbiAgICB2YXIgcmVkdWNlck5hbWVzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xyXG4gICAgdmFyIHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lID0ge307XHJcbiAgICB2YXIgc2xpY2VDYXNlUmVkdWNlcnNCeVR5cGUgPSB7fTtcclxuICAgIHZhciBhY3Rpb25DcmVhdG9ycyA9IHt9O1xyXG4gICAgcmVkdWNlck5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHJlZHVjZXJOYW1lKSB7XHJcbiAgICAgICAgdmFyIG1heWJlUmVkdWNlcldpdGhQcmVwYXJlID0gcmVkdWNlcnNbcmVkdWNlck5hbWVdO1xyXG4gICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZTIobmFtZSwgcmVkdWNlck5hbWUpO1xyXG4gICAgICAgIHZhciBjYXNlUmVkdWNlcjtcclxuICAgICAgICB2YXIgcHJlcGFyZUNhbGxiYWNrO1xyXG4gICAgICAgIGlmIChcInJlZHVjZXJcIiBpbiBtYXliZVJlZHVjZXJXaXRoUHJlcGFyZSkge1xyXG4gICAgICAgICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnJlZHVjZXI7XHJcbiAgICAgICAgICAgIHByZXBhcmVDYWxsYmFjayA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlLnByZXBhcmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYXNlUmVkdWNlciA9IG1heWJlUmVkdWNlcldpdGhQcmVwYXJlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5TmFtZVtyZWR1Y2VyTmFtZV0gPSBjYXNlUmVkdWNlcjtcclxuICAgICAgICBzbGljZUNhc2VSZWR1Y2Vyc0J5VHlwZVt0eXBlXSA9IGNhc2VSZWR1Y2VyO1xyXG4gICAgICAgIGFjdGlvbkNyZWF0b3JzW3JlZHVjZXJOYW1lXSA9IHByZXBhcmVDYWxsYmFjayA/IGNyZWF0ZUFjdGlvbih0eXBlLCBwcmVwYXJlQ2FsbGJhY2spIDogY3JlYXRlQWN0aW9uKHR5cGUpO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBidWlsZFJlZHVjZXIoKSB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuZXh0cmFSZWR1Y2VycyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dE9iamVjdE5vdGF0aW9uMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0T2JqZWN0Tm90YXRpb24yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgb2JqZWN0IG5vdGF0aW9uIGZvciBgY3JlYXRlU2xpY2UuZXh0cmFSZWR1Y2Vyc2AgaXMgZGVwcmVjYXRlZCwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSVEsgMi4wLiBQbGVhc2UgdXNlIHRoZSAnYnVpbGRlciBjYWxsYmFjaycgbm90YXRpb24gaW5zdGVhZDogaHR0cHM6Ly9yZWR1eC10b29sa2l0LmpzLm9yZy9hcGkvY3JlYXRlU2xpY2VcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9jID0gdHlwZW9mIG9wdGlvbnMuZXh0cmFSZWR1Y2VycyA9PT0gXCJmdW5jdGlvblwiID8gZXhlY3V0ZVJlZHVjZXJCdWlsZGVyQ2FsbGJhY2sob3B0aW9ucy5leHRyYVJlZHVjZXJzKSA6IFtvcHRpb25zLmV4dHJhUmVkdWNlcnNdLCBfZCA9IF9jWzBdLCBleHRyYVJlZHVjZXJzID0gX2QgPT09IHZvaWQgMCA/IHt9IDogX2QsIF9lID0gX2NbMV0sIGFjdGlvbk1hdGNoZXJzID0gX2UgPT09IHZvaWQgMCA/IFtdIDogX2UsIF9mID0gX2NbMl0sIGRlZmF1bHRDYXNlUmVkdWNlciA9IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZjtcclxuICAgICAgICB2YXIgZmluYWxDYXNlUmVkdWNlcnMgPSBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgZXh0cmFSZWR1Y2VycyksIHNsaWNlQ2FzZVJlZHVjZXJzQnlUeXBlKTtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGZ1bmN0aW9uIChidWlsZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBmaW5hbENhc2VSZWR1Y2Vycykge1xyXG4gICAgICAgICAgICAgICAgYnVpbGRlci5hZGRDYXNlKGtleSwgZmluYWxDYXNlUmVkdWNlcnNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBhY3Rpb25NYXRjaGVyc18xID0gYWN0aW9uTWF0Y2hlcnM7IF9pIDwgYWN0aW9uTWF0Y2hlcnNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBtID0gYWN0aW9uTWF0Y2hlcnNfMVtfaV07XHJcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFkZE1hdGNoZXIobS5tYXRjaGVyLCBtLnJlZHVjZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZWZhdWx0Q2FzZVJlZHVjZXIpIHtcclxuICAgICAgICAgICAgICAgIGJ1aWxkZXIuYWRkRGVmYXVsdENhc2UoZGVmYXVsdENhc2VSZWR1Y2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFyIF9yZWR1Y2VyO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgIHJlZHVjZXI6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICghX3JlZHVjZXIpXHJcbiAgICAgICAgICAgICAgICBfcmVkdWNlciA9IGJ1aWxkUmVkdWNlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gX3JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25zOiBhY3Rpb25DcmVhdG9ycyxcclxuICAgICAgICBjYXNlUmVkdWNlcnM6IHNsaWNlQ2FzZVJlZHVjZXJzQnlOYW1lLFxyXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV9yZWR1Y2VyKVxyXG4gICAgICAgICAgICAgICAgX3JlZHVjZXIgPSBidWlsZFJlZHVjZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIF9yZWR1Y2VyLmdldEluaXRpYWxTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL2VudGl0eV9zdGF0ZS50c1xyXG5mdW5jdGlvbiBnZXRJbml0aWFsRW50aXR5U3RhdGUoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkczogW10sXHJcbiAgICAgICAgZW50aXRpZXM6IHt9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxTdGF0ZUZhY3RvcnkoKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoYWRkaXRpb25hbFN0YXRlKSB7XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxTdGF0ZSA9PT0gdm9pZCAwKSB7IGFkZGl0aW9uYWxTdGF0ZSA9IHt9OyB9XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZ2V0SW5pdGlhbEVudGl0eVN0YXRlKCksIGFkZGl0aW9uYWxTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBnZXRJbml0aWFsU3RhdGU6IGdldEluaXRpYWxTdGF0ZSB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9zdGF0ZV9zZWxlY3RvcnMudHNcclxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JzRmFjdG9yeSgpIHtcclxuICAgIGZ1bmN0aW9uIGdldFNlbGVjdG9ycyhzZWxlY3RTdGF0ZSkge1xyXG4gICAgICAgIHZhciBzZWxlY3RJZHMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmlkczsgfTtcclxuICAgICAgICB2YXIgc2VsZWN0RW50aXRpZXMgPSBmdW5jdGlvbiAoc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmVudGl0aWVzOyB9O1xyXG4gICAgICAgIHZhciBzZWxlY3RBbGwgPSBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvcihzZWxlY3RJZHMsIHNlbGVjdEVudGl0aWVzLCBmdW5jdGlvbiAoaWRzLCBlbnRpdGllcykgeyByZXR1cm4gaWRzLm1hcChmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIGVudGl0aWVzW2lkXTsgfSk7IH0pO1xyXG4gICAgICAgIHZhciBzZWxlY3RJZCA9IGZ1bmN0aW9uIChfLCBpZCkgeyByZXR1cm4gaWQ7IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdEJ5SWQgPSBmdW5jdGlvbiAoZW50aXRpZXMsIGlkKSB7IHJldHVybiBlbnRpdGllc1tpZF07IH07XHJcbiAgICAgICAgdmFyIHNlbGVjdFRvdGFsID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0SWRzLCBmdW5jdGlvbiAoaWRzKSB7IHJldHVybiBpZHMubGVuZ3RoOyB9KTtcclxuICAgICAgICBpZiAoIXNlbGVjdFN0YXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RJZHM6IHNlbGVjdElkcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdEVudGl0aWVzOiBzZWxlY3RFbnRpdGllcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdEFsbDogc2VsZWN0QWxsLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VG90YWw6IHNlbGVjdFRvdGFsLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0QnlJZDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0RW50aXRpZXMsIHNlbGVjdElkLCBzZWxlY3RCeUlkKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzID0gY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdEVudGl0aWVzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzZWxlY3RJZHM6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RJZHMpLFxyXG4gICAgICAgICAgICBzZWxlY3RFbnRpdGllczogc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLFxyXG4gICAgICAgICAgICBzZWxlY3RBbGw6IGNyZWF0ZURyYWZ0U2FmZVNlbGVjdG9yKHNlbGVjdFN0YXRlLCBzZWxlY3RBbGwpLFxyXG4gICAgICAgICAgICBzZWxlY3RUb3RhbDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0U3RhdGUsIHNlbGVjdFRvdGFsKSxcclxuICAgICAgICAgICAgc2VsZWN0QnlJZDogY3JlYXRlRHJhZnRTYWZlU2VsZWN0b3Ioc2VsZWN0R2xvYmFsaXplZEVudGl0aWVzLCBzZWxlY3RJZCwgc2VsZWN0QnlJZClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgZ2V0U2VsZWN0b3JzOiBnZXRTZWxlY3RvcnMgfTtcclxufVxyXG4vLyBzcmMvZW50aXRpZXMvc3RhdGVfYWRhcHRlci50c1xyXG5pbXBvcnQgY3JlYXRlTmV4dFN0YXRlMywgeyBpc0RyYWZ0IGFzIGlzRHJhZnQzIH0gZnJvbSBcImltbWVyXCI7XHJcbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZUFyZ3VtZW50U3RhdGVPcGVyYXRvcihtdXRhdG9yKSB7XHJcbiAgICB2YXIgb3BlcmF0b3IgPSBjcmVhdGVTdGF0ZU9wZXJhdG9yKGZ1bmN0aW9uIChfLCBzdGF0ZSkgeyByZXR1cm4gbXV0YXRvcihzdGF0ZSk7IH0pO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9wZXJhdGlvbihzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBvcGVyYXRvcihzdGF0ZSwgdm9pZCAwKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlU3RhdGVPcGVyYXRvcihtdXRhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gb3BlcmF0aW9uKHN0YXRlLCBhcmcpIHtcclxuICAgICAgICBmdW5jdGlvbiBpc1BheWxvYWRBY3Rpb25Bcmd1bWVudChhcmcyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0ZTQShhcmcyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJ1bk11dGF0b3IgPSBmdW5jdGlvbiAoZHJhZnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzUGF5bG9hZEFjdGlvbkFyZ3VtZW50KGFyZykpIHtcclxuICAgICAgICAgICAgICAgIG11dGF0b3IoYXJnLnBheWxvYWQsIGRyYWZ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG11dGF0b3IoYXJnLCBkcmFmdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0RyYWZ0MyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgcnVuTXV0YXRvcihzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVOZXh0U3RhdGUzKHN0YXRlLCBydW5NdXRhdG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy91dGlscy50c1xyXG5mdW5jdGlvbiBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpIHtcclxuICAgIHZhciBrZXkgPSBzZWxlY3RJZChlbnRpdHkpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBrZXkgPT09IHZvaWQgMCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBlbnRpdHkgcGFzc2VkIHRvIHRoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uIHJldHVybmVkIHVuZGVmaW5lZC5cIiwgXCJZb3Ugc2hvdWxkIHByb2JhYmx5IHByb3ZpZGUgeW91ciBvd24gYHNlbGVjdElkYCBpbXBsZW1lbnRhdGlvbi5cIiwgXCJUaGUgZW50aXR5IHRoYXQgd2FzIHBhc3NlZDpcIiwgZW50aXR5LCBcIlRoZSBgc2VsZWN0SWRgIGltcGxlbWVudGF0aW9uOlwiLCBzZWxlY3RJZC50b1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBrZXk7XHJcbn1cclxuZnVuY3Rpb24gZW5zdXJlRW50aXRpZXNBcnJheShlbnRpdGllcykge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0aWVzKSkge1xyXG4gICAgICAgIGVudGl0aWVzID0gT2JqZWN0LnZhbHVlcyhlbnRpdGllcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50aXRpZXM7XHJcbn1cclxuZnVuY3Rpb24gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSB7XHJcbiAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgdmFyIGFkZGVkID0gW107XHJcbiAgICB2YXIgdXBkYXRlZCA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBuZXdFbnRpdGllc18xID0gbmV3RW50aXRpZXM7IF9pIDwgbmV3RW50aXRpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZW50aXR5ID0gbmV3RW50aXRpZXNfMVtfaV07XHJcbiAgICAgICAgdmFyIGlkID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcclxuICAgICAgICBpZiAoaWQgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgdXBkYXRlZC5wdXNoKHsgaWQ6IGlkLCBjaGFuZ2VzOiBlbnRpdHkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZC5wdXNoKGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFthZGRlZCwgdXBkYXRlZF07XHJcbn1cclxuLy8gc3JjL2VudGl0aWVzL3Vuc29ydGVkX3N0YXRlX2FkYXB0ZXIudHNcclxuZnVuY3Rpb24gY3JlYXRlVW5zb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQpIHtcclxuICAgIGZ1bmN0aW9uIGFkZE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBrZXkgPSBzZWxlY3RJZFZhbHVlKGVudGl0eSwgc2VsZWN0SWQpO1xyXG4gICAgICAgIGlmIChrZXkgaW4gc3RhdGUuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5pZHMucHVzaChrZXkpO1xyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbmV3RW50aXRpZXNfMiA9IG5ld0VudGl0aWVzOyBfaSA8IG5ld0VudGl0aWVzXzIubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBuZXdFbnRpdGllc18yW19pXTtcclxuICAgICAgICAgICAgYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRPbmVNdXRhYmx5KGVudGl0eSwgc3RhdGUpIHtcclxuICAgICAgICB2YXIga2V5ID0gc2VsZWN0SWRWYWx1ZShlbnRpdHksIHNlbGVjdElkKTtcclxuICAgICAgICBpZiAoIShrZXkgaW4gc3RhdGUuZW50aXRpZXMpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkcy5wdXNoKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzW2tleV0gPSBlbnRpdHk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgbmV3RW50aXRpZXNfMyA9IG5ld0VudGl0aWVzOyBfaSA8IG5ld0VudGl0aWVzXzMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnRpdHkgPSBuZXdFbnRpdGllc18zW19pXTtcclxuICAgICAgICAgICAgc2V0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRBbGxNdXRhYmx5KG5ld0VudGl0aWVzLCBzdGF0ZSkge1xyXG4gICAgICAgIG5ld0VudGl0aWVzID0gZW5zdXJlRW50aXRpZXNBcnJheShuZXdFbnRpdGllcyk7XHJcbiAgICAgICAgc3RhdGUuaWRzID0gW107XHJcbiAgICAgICAgc3RhdGUuZW50aXRpZXMgPSB7fTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlT25lTXV0YWJseShrZXksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZU1hbnlNdXRhYmx5KFtrZXldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZW1vdmVNYW55TXV0YWJseShrZXlzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBkaWRNdXRhdGUgPSBmYWxzZTtcclxuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNba2V5XTtcclxuICAgICAgICAgICAgICAgIGRpZE11dGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZGlkTXV0YXRlKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlkcyA9IHN0YXRlLmlkcy5maWx0ZXIoZnVuY3Rpb24gKGlkKSB7IHJldHVybiBpZCBpbiBzdGF0ZS5lbnRpdGllczsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTXV0YWJseShzdGF0ZSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcclxuICAgICAgICAgICAgaWRzOiBbXSxcclxuICAgICAgICAgICAgZW50aXRpZXM6IHt9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0YWtlTmV3S2V5KGtleXMsIHVwZGF0ZSwgc3RhdGUpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWwyID0gc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICB2YXIgdXBkYXRlZCA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsMiwgdXBkYXRlLmNoYW5nZXMpO1xyXG4gICAgICAgIHZhciBuZXdLZXkgPSBzZWxlY3RJZFZhbHVlKHVwZGF0ZWQsIHNlbGVjdElkKTtcclxuICAgICAgICB2YXIgaGFzTmV3S2V5ID0gbmV3S2V5ICE9PSB1cGRhdGUuaWQ7XHJcbiAgICAgICAgaWYgKGhhc05ld0tleSkge1xyXG4gICAgICAgICAgICBrZXlzW3VwZGF0ZS5pZF0gPSBuZXdLZXk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5lbnRpdGllc1t1cGRhdGUuaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5lbnRpdGllc1tuZXdLZXldID0gdXBkYXRlZDtcclxuICAgICAgICByZXR1cm4gaGFzTmV3S2V5O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlT25lTXV0YWJseSh1cGRhdGUsIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZU1hbnlNdXRhYmx5KFt1cGRhdGVdLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNYW55TXV0YWJseSh1cGRhdGVzLCBzdGF0ZSkge1xyXG4gICAgICAgIHZhciBuZXdLZXlzID0ge307XHJcbiAgICAgICAgdmFyIHVwZGF0ZXNQZXJFbnRpdHkgPSB7fTtcclxuICAgICAgICB1cGRhdGVzLmZvckVhY2goZnVuY3Rpb24gKHVwZGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlLmlkIGluIHN0YXRlLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVzUGVyRW50aXR5W3VwZGF0ZS5pZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVwZGF0ZS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzOiBfX3NwcmVhZFZhbHVlcyhfX3NwcmVhZFZhbHVlcyh7fSwgdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdID8gdXBkYXRlc1BlckVudGl0eVt1cGRhdGUuaWRdLmNoYW5nZXMgOiBudWxsKSwgdXBkYXRlLmNoYW5nZXMpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdXBkYXRlcyA9IE9iamVjdC52YWx1ZXModXBkYXRlc1BlckVudGl0eSk7XHJcbiAgICAgICAgdmFyIGRpZE11dGF0ZUVudGl0aWVzID0gdXBkYXRlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmIChkaWRNdXRhdGVFbnRpdGllcykge1xyXG4gICAgICAgICAgICB2YXIgZGlkTXV0YXRlSWRzID0gdXBkYXRlcy5maWx0ZXIoZnVuY3Rpb24gKHVwZGF0ZSkgeyByZXR1cm4gdGFrZU5ld0tleShuZXdLZXlzLCB1cGRhdGUsIHN0YXRlKTsgfSkubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgaWYgKGRpZE11dGF0ZUlkcykge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaWRzID0gT2JqZWN0LmtleXMoc3RhdGUuZW50aXRpZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0T25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVwc2VydE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cHNlcnRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgX2MgPSBzcGxpdEFkZGVkVXBkYXRlZEVudGl0aWVzKG5ld0VudGl0aWVzLCBzZWxlY3RJZCwgc3RhdGUpLCBhZGRlZCA9IF9jWzBdLCB1cGRhdGVkID0gX2NbMV07XHJcbiAgICAgICAgdXBkYXRlTWFueU11dGFibHkodXBkYXRlZCwgc3RhdGUpO1xyXG4gICAgICAgIGFkZE1hbnlNdXRhYmx5KGFkZGVkLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlbW92ZUFsbDogY3JlYXRlU2luZ2xlQXJndW1lbnRTdGF0ZU9wZXJhdG9yKHJlbW92ZUFsbE11dGFibHkpLFxyXG4gICAgICAgIGFkZE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcihhZGRPbmVNdXRhYmx5KSxcclxuICAgICAgICBhZGRNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKGFkZE1hbnlNdXRhYmx5KSxcclxuICAgICAgICBzZXRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0T25lTXV0YWJseSksXHJcbiAgICAgICAgc2V0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRNYW55TXV0YWJseSksXHJcbiAgICAgICAgc2V0QWxsOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldEFsbE11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cGRhdGVPbmVNdXRhYmx5KSxcclxuICAgICAgICB1cGRhdGVNYW55OiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU1hbnlNdXRhYmx5KSxcclxuICAgICAgICB1cHNlcnRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0T25lTXV0YWJseSksXHJcbiAgICAgICAgdXBzZXJ0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRNYW55TXV0YWJseSksXHJcbiAgICAgICAgcmVtb3ZlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHJlbW92ZU9uZU11dGFibHkpLFxyXG4gICAgICAgIHJlbW92ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IocmVtb3ZlTWFueU11dGFibHkpXHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9zb3J0ZWRfc3RhdGVfYWRhcHRlci50c1xyXG5mdW5jdGlvbiBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQsIHNvcnQpIHtcclxuICAgIHZhciBfYyA9IGNyZWF0ZVVuc29ydGVkU3RhdGVBZGFwdGVyKHNlbGVjdElkKSwgcmVtb3ZlT25lID0gX2MucmVtb3ZlT25lLCByZW1vdmVNYW55ID0gX2MucmVtb3ZlTWFueSwgcmVtb3ZlQWxsID0gX2MucmVtb3ZlQWxsO1xyXG4gICAgZnVuY3Rpb24gYWRkT25lTXV0YWJseShlbnRpdHksIHN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIGFkZE1hbnlNdXRhYmx5KFtlbnRpdHldLCBzdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhZGRNYW55TXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIHZhciBtb2RlbHMgPSBuZXdFbnRpdGllcy5maWx0ZXIoZnVuY3Rpb24gKG1vZGVsKSB7IHJldHVybiAhKHNlbGVjdElkVmFsdWUobW9kZWwsIHNlbGVjdElkKSBpbiBzdGF0ZS5lbnRpdGllcyk7IH0pO1xyXG4gICAgICAgIGlmIChtb2RlbHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG1lcmdlKG1vZGVscywgc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBzZXRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgbmV3RW50aXRpZXMgPSBlbnN1cmVFbnRpdGllc0FycmF5KG5ld0VudGl0aWVzKTtcclxuICAgICAgICBpZiAobmV3RW50aXRpZXMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIG1lcmdlKG5ld0VudGl0aWVzLCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0QWxsTXV0YWJseShuZXdFbnRpdGllcywgc3RhdGUpIHtcclxuICAgICAgICBuZXdFbnRpdGllcyA9IGVuc3VyZUVudGl0aWVzQXJyYXkobmV3RW50aXRpZXMpO1xyXG4gICAgICAgIHN0YXRlLmVudGl0aWVzID0ge307XHJcbiAgICAgICAgc3RhdGUuaWRzID0gW107XHJcbiAgICAgICAgYWRkTWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU9uZU11dGFibHkodXBkYXRlLCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cGRhdGVNYW55TXV0YWJseShbdXBkYXRlXSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlTWFueU11dGFibHkodXBkYXRlcywgc3RhdGUpIHtcclxuICAgICAgICB2YXIgYXBwbGllZFVwZGF0ZXMgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHVwZGF0ZXNfMSA9IHVwZGF0ZXM7IF9pIDwgdXBkYXRlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgdXBkYXRlID0gdXBkYXRlc18xW19pXTtcclxuICAgICAgICAgICAgdmFyIGVudGl0eSA9IHN0YXRlLmVudGl0aWVzW3VwZGF0ZS5pZF07XHJcbiAgICAgICAgICAgIGlmICghZW50aXR5KSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHBsaWVkVXBkYXRlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZW50aXR5LCB1cGRhdGUuY2hhbmdlcyk7XHJcbiAgICAgICAgICAgIHZhciBuZXdJZCA9IHNlbGVjdElkKGVudGl0eSk7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGUuaWQgIT09IG5ld0lkKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc3RhdGUuZW50aXRpZXNbdXBkYXRlLmlkXTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmVudGl0aWVzW25ld0lkXSA9IGVudGl0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXBwbGllZFVwZGF0ZXMpIHtcclxuICAgICAgICAgICAgcmVzb3J0RW50aXRpZXMoc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwc2VydE9uZU11dGFibHkoZW50aXR5LCBzdGF0ZSkge1xyXG4gICAgICAgIHJldHVybiB1cHNlcnRNYW55TXV0YWJseShbZW50aXR5XSwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBzZXJ0TWFueU11dGFibHkobmV3RW50aXRpZXMsIHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIF9jID0gc3BsaXRBZGRlZFVwZGF0ZWRFbnRpdGllcyhuZXdFbnRpdGllcywgc2VsZWN0SWQsIHN0YXRlKSwgYWRkZWQgPSBfY1swXSwgdXBkYXRlZCA9IF9jWzFdO1xyXG4gICAgICAgIHVwZGF0ZU1hbnlNdXRhYmx5KHVwZGF0ZWQsIHN0YXRlKTtcclxuICAgICAgICBhZGRNYW55TXV0YWJseShhZGRlZCwgc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXJlQXJyYXlzRXF1YWwoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoICYmIGkgPCBiLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldID09PSBiW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWVyZ2UobW9kZWxzLCBzdGF0ZSkge1xyXG4gICAgICAgIG1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xyXG4gICAgICAgICAgICBzdGF0ZS5lbnRpdGllc1tzZWxlY3RJZChtb2RlbCldID0gbW9kZWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzb3J0RW50aXRpZXMoc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzb3J0RW50aXRpZXMoc3RhdGUpIHtcclxuICAgICAgICB2YXIgYWxsRW50aXRpZXMgPSBPYmplY3QudmFsdWVzKHN0YXRlLmVudGl0aWVzKTtcclxuICAgICAgICBhbGxFbnRpdGllcy5zb3J0KHNvcnQpO1xyXG4gICAgICAgIHZhciBuZXdTb3J0ZWRJZHMgPSBhbGxFbnRpdGllcy5tYXAoc2VsZWN0SWQpO1xyXG4gICAgICAgIHZhciBpZHMgPSBzdGF0ZS5pZHM7XHJcbiAgICAgICAgaWYgKCFhcmVBcnJheXNFcXVhbChpZHMsIG5ld1NvcnRlZElkcykpIHtcclxuICAgICAgICAgICAgc3RhdGUuaWRzID0gbmV3U29ydGVkSWRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVtb3ZlT25lOiByZW1vdmVPbmUsXHJcbiAgICAgICAgcmVtb3ZlTWFueTogcmVtb3ZlTWFueSxcclxuICAgICAgICByZW1vdmVBbGw6IHJlbW92ZUFsbCxcclxuICAgICAgICBhZGRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkT25lTXV0YWJseSksXHJcbiAgICAgICAgdXBkYXRlT25lOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHVwZGF0ZU9uZU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE9uZTogY3JlYXRlU3RhdGVPcGVyYXRvcih1cHNlcnRPbmVNdXRhYmx5KSxcclxuICAgICAgICBzZXRPbmU6IGNyZWF0ZVN0YXRlT3BlcmF0b3Ioc2V0T25lTXV0YWJseSksXHJcbiAgICAgICAgc2V0TWFueTogY3JlYXRlU3RhdGVPcGVyYXRvcihzZXRNYW55TXV0YWJseSksXHJcbiAgICAgICAgc2V0QWxsOiBjcmVhdGVTdGF0ZU9wZXJhdG9yKHNldEFsbE11dGFibHkpLFxyXG4gICAgICAgIGFkZE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IoYWRkTWFueU11dGFibHkpLFxyXG4gICAgICAgIHVwZGF0ZU1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBkYXRlTWFueU11dGFibHkpLFxyXG4gICAgICAgIHVwc2VydE1hbnk6IGNyZWF0ZVN0YXRlT3BlcmF0b3IodXBzZXJ0TWFueU11dGFibHkpXHJcbiAgICB9O1xyXG59XHJcbi8vIHNyYy9lbnRpdGllcy9jcmVhdGVfYWRhcHRlci50c1xyXG5mdW5jdGlvbiBjcmVhdGVFbnRpdHlBZGFwdGVyKG9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgX2MgPSBfX3NwcmVhZFZhbHVlcyh7XHJcbiAgICAgICAgc29ydENvbXBhcmVyOiBmYWxzZSxcclxuICAgICAgICBzZWxlY3RJZDogZnVuY3Rpb24gKGluc3RhbmNlKSB7IHJldHVybiBpbnN0YW5jZS5pZDsgfVxyXG4gICAgfSwgb3B0aW9ucyksIHNlbGVjdElkID0gX2Muc2VsZWN0SWQsIHNvcnRDb21wYXJlciA9IF9jLnNvcnRDb21wYXJlcjtcclxuICAgIHZhciBzdGF0ZUZhY3RvcnkgPSBjcmVhdGVJbml0aWFsU3RhdGVGYWN0b3J5KCk7XHJcbiAgICB2YXIgc2VsZWN0b3JzRmFjdG9yeSA9IGNyZWF0ZVNlbGVjdG9yc0ZhY3RvcnkoKTtcclxuICAgIHZhciBzdGF0ZUFkYXB0ZXIgPSBzb3J0Q29tcGFyZXIgPyBjcmVhdGVTb3J0ZWRTdGF0ZUFkYXB0ZXIoc2VsZWN0SWQsIHNvcnRDb21wYXJlcikgOiBjcmVhdGVVbnNvcnRlZFN0YXRlQWRhcHRlcihzZWxlY3RJZCk7XHJcbiAgICByZXR1cm4gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe1xyXG4gICAgICAgIHNlbGVjdElkOiBzZWxlY3RJZCxcclxuICAgICAgICBzb3J0Q29tcGFyZXI6IHNvcnRDb21wYXJlclxyXG4gICAgfSwgc3RhdGVGYWN0b3J5KSwgc2VsZWN0b3JzRmFjdG9yeSksIHN0YXRlQWRhcHRlcik7XHJcbn1cclxuLy8gc3JjL25hbm9pZC50c1xyXG52YXIgdXJsQWxwaGFiZXQgPSBcIk1vZHVsZVN5bWJoYXNPd25Qci0wMTIzNDU2Nzg5QUJDREVGR0hOUlZmZ2N0aVV2el9LcVlUSmtMeHBaWElqUVdcIjtcclxudmFyIG5hbm9pZCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSA9PT0gdm9pZCAwKSB7IHNpemUgPSAyMTsgfVxyXG4gICAgdmFyIGlkID0gXCJcIjtcclxuICAgIHZhciBpID0gc2l6ZTtcclxuICAgIHdoaWxlIChpLS0pIHtcclxuICAgICAgICBpZCArPSB1cmxBbHBoYWJldFtNYXRoLnJhbmRvbSgpICogNjQgfCAwXTtcclxuICAgIH1cclxuICAgIHJldHVybiBpZDtcclxufTtcclxuLy8gc3JjL2NyZWF0ZUFzeW5jVGh1bmsudHNcclxudmFyIGNvbW1vblByb3BlcnRpZXMgPSBbXHJcbiAgICBcIm5hbWVcIixcclxuICAgIFwibWVzc2FnZVwiLFxyXG4gICAgXCJzdGFja1wiLFxyXG4gICAgXCJjb2RlXCJcclxuXTtcclxudmFyIFJlamVjdFdpdGhWYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlamVjdFdpdGhWYWx1ZShwYXlsb2FkLCBtZXRhKSB7XHJcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcclxuICAgICAgICB0aGlzLm1ldGEgPSBtZXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlamVjdFdpdGhWYWx1ZTtcclxufSgpKTtcclxudmFyIEZ1bGZpbGxXaXRoTWV0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEZ1bGZpbGxXaXRoTWV0YShwYXlsb2FkLCBtZXRhKSB7XHJcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcclxuICAgICAgICB0aGlzLm1ldGEgPSBtZXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEZ1bGZpbGxXaXRoTWV0YTtcclxufSgpKTtcclxudmFyIG1pbmlTZXJpYWxpemVFcnJvciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHZhciBzaW1wbGVFcnJvciA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgY29tbW9uUHJvcGVydGllc18xID0gY29tbW9uUHJvcGVydGllczsgX2kgPCBjb21tb25Qcm9wZXJ0aWVzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IGNvbW1vblByb3BlcnRpZXNfMVtfaV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWVbcHJvcGVydHldID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzaW1wbGVFcnJvcltwcm9wZXJ0eV0gPSB2YWx1ZVtwcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpbXBsZUVycm9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbWVzc2FnZTogU3RyaW5nKHZhbHVlKSB9O1xyXG59O1xyXG52YXIgY3JlYXRlQXN5bmNUaHVuayA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBc3luY1RodW5rMih0eXBlUHJlZml4LCBwYXlsb2FkQ3JlYXRvciwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciBmdWxmaWxsZWQgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL2Z1bGZpbGxlZFwiLCBmdW5jdGlvbiAocGF5bG9hZCwgcmVxdWVzdElkLCBhcmcsIG1ldGEpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgICAgIG1ldGE6IF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoe30sIG1ldGEgfHwge30pLCB7XHJcbiAgICAgICAgICAgICAgICBhcmc6IGFyZyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RJZDogcmVxdWVzdElkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFN0YXR1czogXCJmdWxmaWxsZWRcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICB2YXIgcGVuZGluZyA9IGNyZWF0ZUFjdGlvbih0eXBlUHJlZml4ICsgXCIvcGVuZGluZ1wiLCBmdW5jdGlvbiAocmVxdWVzdElkLCBhcmcsIG1ldGEpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHZvaWQgMCxcclxuICAgICAgICAgICAgbWV0YTogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWV0YSB8fCB7fSksIHtcclxuICAgICAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0U3RhdHVzOiBcInBlbmRpbmdcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjcmVhdGVBY3Rpb24odHlwZVByZWZpeCArIFwiL3JlamVjdGVkXCIsIGZ1bmN0aW9uIChlcnJvciwgcmVxdWVzdElkLCBhcmcsIHBheWxvYWQsIG1ldGEpIHsgcmV0dXJuICh7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXHJcbiAgICAgICAgICAgIGVycm9yOiAob3B0aW9ucyAmJiBvcHRpb25zLnNlcmlhbGl6ZUVycm9yIHx8IG1pbmlTZXJpYWxpemVFcnJvcikoZXJyb3IgfHwgXCJSZWplY3RlZFwiKSxcclxuICAgICAgICAgICAgbWV0YTogX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgbWV0YSB8fCB7fSksIHtcclxuICAgICAgICAgICAgICAgIGFyZzogYXJnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICByZWplY3RlZFdpdGhWYWx1ZTogISFwYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFN0YXR1czogXCJyZWplY3RlZFwiLFxyXG4gICAgICAgICAgICAgICAgYWJvcnRlZDogKGVycm9yID09IG51bGwgPyB2b2lkIDAgOiBlcnJvci5uYW1lKSA9PT0gXCJBYm9ydEVycm9yXCIsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IChlcnJvciA9PSBudWxsID8gdm9pZCAwIDogZXJyb3IubmFtZSkgPT09IFwiQ29uZGl0aW9uRXJyb3JcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICB2YXIgZGlzcGxheWVkV2FybmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBBQyA9IHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgIT09IFwidW5kZWZpbmVkXCIgPyBBYm9ydENvbnRyb2xsZXIgOiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25hbCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uYWJvcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogdm9pZCAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93SWZBYm9ydGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGFzc18xLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRpc3BsYXllZFdhcm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkV2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlRoaXMgcGxhdGZvcm0gZG9lcyBub3QgaW1wbGVtZW50IEFib3J0Q29udHJvbGxlci4gXFxuSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBBYm9ydENvbnRyb2xsZXIgdG8gcmVhY3QgdG8gYGFib3J0YCBldmVudHMsIHBsZWFzZSBjb25zaWRlciBpbXBvcnRpbmcgYSBwb2x5ZmlsbCBsaWtlICdhYm9ydGNvbnRyb2xsZXItcG9seWZpbGwvZGlzdC9hYm9ydGNvbnRyb2xsZXItcG9seWZpbGwtb25seScuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzXzE7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBmdW5jdGlvbiBhY3Rpb25DcmVhdG9yKGFyZykge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoLCBnZXRTdGF0ZSwgZXh0cmEpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0SWQgPSAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5pZEdlbmVyYXRvcikgPyBvcHRpb25zLmlkR2VuZXJhdG9yKGFyZykgOiBuYW5vaWQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQUMoKTtcclxuICAgICAgICAgICAgICAgIHZhciBhYm9ydFJlYXNvbjtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhYm9ydChyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydFJlYXNvbiA9IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlMiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3luYyh0aGlzLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgX2IsIGZpbmFsQWN0aW9uLCBjb25kaXRpb25SZXN1bHQsIGFib3J0ZWRQcm9taXNlLCBlcnJfMSwgc2tpcERpc3BhdGNoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzAsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25SZXN1bHQgPSAoX2EgPSBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmNvbmRpdGlvbikgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwob3B0aW9ucywgYXJnLCB7IGdldFN0YXRlOiBnZXRTdGF0ZSwgZXh0cmE6IGV4dHJhIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGhlbmFibGUoY29uZGl0aW9uUmVzdWx0KSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNvbmRpdGlvblJlc3VsdF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25SZXN1bHQgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb25SZXN1bHQgPT09IGZhbHNlIHx8IGFib3J0Q29udHJvbGxlci5zaWduYWwuYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29uZGl0aW9uRXJyb3JcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFib3J0ZWQgZHVlIHRvIGNvbmRpdGlvbiBjYWxsYmFjayByZXR1cm5pbmcgZmFsc2UuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0ZWRQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKF8sIHJlamVjdCkgeyByZXR1cm4gYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQWJvcnRFcnJvclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYWJvcnRSZWFzb24gfHwgXCJBYm9ydGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH0pOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocGVuZGluZyhyZXF1ZXN0SWQsIGFyZywgKF9iID0gb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5nZXRQZW5kaW5nTWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9iLmNhbGwob3B0aW9ucywgeyByZXF1ZXN0SWQ6IHJlcXVlc3RJZCwgYXJnOiBhcmcgfSwgeyBnZXRTdGF0ZTogZ2V0U3RhdGUsIGV4dHJhOiBleHRyYSB9KSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0ZWRQcm9taXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShwYXlsb2FkQ3JlYXRvcihhcmcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhOiBleHRyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogYWJvcnRDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnQ6IGFib3J0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RXaXRoVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgbWV0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWplY3RXaXRoVmFsdWUodmFsdWUsIG1ldGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxmaWxsV2l0aFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIG1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRnVsZmlsbFdpdGhNZXRhKHZhbHVlLCBtZXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFJlamVjdFdpdGhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBGdWxmaWxsV2l0aE1ldGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmdWxmaWxsZWQocmVzdWx0LnBheWxvYWQsIHJlcXVlc3RJZCwgYXJnLCByZXN1bHQubWV0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bGZpbGxlZChyZXN1bHQsIHJlcXVlc3RJZCwgYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxBY3Rpb24gPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQWN0aW9uID0gZXJyXzEgaW5zdGFuY2VvZiBSZWplY3RXaXRoVmFsdWUgPyByZWplY3RlZChudWxsLCByZXF1ZXN0SWQsIGFyZywgZXJyXzEucGF5bG9hZCwgZXJyXzEubWV0YSkgOiByZWplY3RlZChlcnJfMSwgcmVxdWVzdElkLCBhcmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraXBEaXNwYXRjaCA9IG9wdGlvbnMgJiYgIW9wdGlvbnMuZGlzcGF0Y2hDb25kaXRpb25SZWplY3Rpb24gJiYgcmVqZWN0ZWQubWF0Y2goZmluYWxBY3Rpb24pICYmIGZpbmFsQWN0aW9uLm1ldGEuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNraXBEaXNwYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goZmluYWxBY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmaW5hbEFjdGlvbl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvbWlzZTIsIHtcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydDogYWJvcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdElkOiByZXF1ZXN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJnOiBhcmcsXHJcbiAgICAgICAgICAgICAgICAgICAgdW53cmFwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlMi50aGVuKHVud3JhcFJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjdGlvbkNyZWF0b3IsIHtcclxuICAgICAgICAgICAgcGVuZGluZzogcGVuZGluZyxcclxuICAgICAgICAgICAgcmVqZWN0ZWQ6IHJlamVjdGVkLFxyXG4gICAgICAgICAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcclxuICAgICAgICAgICAgdHlwZVByZWZpeDogdHlwZVByZWZpeFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlQXN5bmNUaHVuazIud2l0aFR5cGVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlQXN5bmNUaHVuazI7IH07XHJcbiAgICByZXR1cm4gY3JlYXRlQXN5bmNUaHVuazI7XHJcbn0pKCk7XHJcbmZ1bmN0aW9uIHVud3JhcFJlc3VsdChhY3Rpb24pIHtcclxuICAgIGlmIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5yZWplY3RlZFdpdGhWYWx1ZSkge1xyXG4gICAgICAgIHRocm93IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi5lcnJvcikge1xyXG4gICAgICAgIHRocm93IGFjdGlvbi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxufVxyXG5mdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcImZ1bmN0aW9uXCI7XHJcbn1cclxuLy8gc3JjL3RzSGVscGVycy50c1xyXG52YXIgaGFzTWF0Y2hGdW5jdGlvbiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICByZXR1cm4gdiAmJiB0eXBlb2Ygdi5tYXRjaCA9PT0gXCJmdW5jdGlvblwiO1xyXG59O1xyXG4vLyBzcmMvbWF0Y2hlcnMudHNcclxudmFyIG1hdGNoZXMgPSBmdW5jdGlvbiAobWF0Y2hlciwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaGFzTWF0Y2hGdW5jdGlvbihtYXRjaGVyKSkge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVyLm1hdGNoKGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBpc0FueU9mKCkge1xyXG4gICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIG1hdGNoZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVycy5zb21lKGZ1bmN0aW9uIChtYXRjaGVyKSB7IHJldHVybiBtYXRjaGVzKG1hdGNoZXIsIGFjdGlvbik7IH0pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc0FsbE9mKCkge1xyXG4gICAgdmFyIG1hdGNoZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIG1hdGNoZXJzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBtYXRjaGVycy5ldmVyeShmdW5jdGlvbiAobWF0Y2hlcikgeyByZXR1cm4gbWF0Y2hlcyhtYXRjaGVyLCBhY3Rpb24pOyB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCB2YWxpZFN0YXR1cykge1xyXG4gICAgaWYgKCFhY3Rpb24gfHwgIWFjdGlvbi5tZXRhKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBoYXNWYWxpZFJlcXVlc3RJZCA9IHR5cGVvZiBhY3Rpb24ubWV0YS5yZXF1ZXN0SWQgPT09IFwic3RyaW5nXCI7XHJcbiAgICB2YXIgaGFzVmFsaWRSZXF1ZXN0U3RhdHVzID0gdmFsaWRTdGF0dXMuaW5kZXhPZihhY3Rpb24ubWV0YS5yZXF1ZXN0U3RhdHVzKSA+IC0xO1xyXG4gICAgcmV0dXJuIGhhc1ZhbGlkUmVxdWVzdElkICYmIGhhc1ZhbGlkUmVxdWVzdFN0YXR1cztcclxufVxyXG5mdW5jdGlvbiBpc0FzeW5jVGh1bmtBcnJheShhKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIGFbMF0gPT09IFwiZnVuY3Rpb25cIiAmJiBcInBlbmRpbmdcIiBpbiBhWzBdICYmIFwiZnVsZmlsbGVkXCIgaW4gYVswXSAmJiBcInJlamVjdGVkXCIgaW4gYVswXTtcclxufVxyXG5mdW5jdGlvbiBpc1BlbmRpbmcoKSB7XHJcbiAgICB2YXIgYXN5bmNUaHVua3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXN5bmNUaHVua3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgIH1cclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikgeyByZXR1cm4gaGFzRXhwZWN0ZWRSZXF1ZXN0TWV0YWRhdGEoYWN0aW9uLCBbXCJwZW5kaW5nXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUGVuZGluZygpKGFzeW5jVGh1bmtzWzBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXJzID0gYXN5bmNUaHVua3MubWFwKGZ1bmN0aW9uIChhc3luY1RodW5rKSB7IHJldHVybiBhc3luY1RodW5rLnBlbmRpbmc7IH0pO1xyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gaXNSZWplY3RlZCgpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInJlamVjdGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzUmVqZWN0ZWQoKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IGFzeW5jVGh1bmtzLm1hcChmdW5jdGlvbiAoYXN5bmNUaHVuaykgeyByZXR1cm4gYXN5bmNUaHVuay5yZWplY3RlZDsgfSk7XHJcbiAgICAgICAgdmFyIGNvbWJpbmVkTWF0Y2hlciA9IGlzQW55T2YuYXBwbHkodm9pZCAwLCBtYXRjaGVycyk7XHJcbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBpc1JlamVjdGVkV2l0aFZhbHVlKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgaGFzRmxhZyA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uICYmIGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLnJlamVjdGVkV2l0aFZhbHVlO1xyXG4gICAgfTtcclxuICAgIGlmIChhc3luY1RodW5rcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbGxPZihpc1JlamVjdGVkLmFwcGx5KHZvaWQgMCwgYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkTWF0Y2hlcihhY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc1JlamVjdGVkV2l0aFZhbHVlKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbGxPZihpc1JlamVjdGVkLmFwcGx5KHZvaWQgMCwgYXN5bmNUaHVua3MpLCBoYXNGbGFnKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzRnVsZmlsbGVkKCkge1xyXG4gICAgdmFyIGFzeW5jVGh1bmtzID0gW107XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIGFzeW5jVGh1bmtzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICBpZiAoYXN5bmNUaHVua3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHsgcmV0dXJuIGhhc0V4cGVjdGVkUmVxdWVzdE1ldGFkYXRhKGFjdGlvbiwgW1wiZnVsZmlsbGVkXCJdKTsgfTtcclxuICAgIH1cclxuICAgIGlmICghaXNBc3luY1RodW5rQXJyYXkoYXN5bmNUaHVua3MpKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRnVsZmlsbGVkKCkoYXN5bmNUaHVua3NbMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcnMgPSBhc3luY1RodW5rcy5tYXAoZnVuY3Rpb24gKGFzeW5jVGh1bmspIHsgcmV0dXJuIGFzeW5jVGh1bmsuZnVsZmlsbGVkOyB9KTtcclxuICAgICAgICB2YXIgY29tYmluZWRNYXRjaGVyID0gaXNBbnlPZi5hcHBseSh2b2lkIDAsIG1hdGNoZXJzKTtcclxuICAgICAgICByZXR1cm4gY29tYmluZWRNYXRjaGVyKGFjdGlvbik7XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGlzQXN5bmNUaHVua0FjdGlvbigpIHtcclxuICAgIHZhciBhc3luY1RodW5rcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhc3luY1RodW5rc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGFzeW5jVGh1bmtzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7IHJldHVybiBoYXNFeHBlY3RlZFJlcXVlc3RNZXRhZGF0YShhY3Rpb24sIFtcInBlbmRpbmdcIiwgXCJmdWxmaWxsZWRcIiwgXCJyZWplY3RlZFwiXSk7IH07XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQXN5bmNUaHVua0FycmF5KGFzeW5jVGh1bmtzKSkge1xyXG4gICAgICAgIHJldHVybiBpc0FzeW5jVGh1bmtBY3Rpb24oKShhc3luY1RodW5rc1swXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIHZhciBtYXRjaGVycyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgYXN5bmNUaHVua3NfMSA9IGFzeW5jVGh1bmtzOyBfaSA8IGFzeW5jVGh1bmtzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhc3luY1RodW5rID0gYXN5bmNUaHVua3NfMVtfaV07XHJcbiAgICAgICAgICAgIG1hdGNoZXJzLnB1c2goYXN5bmNUaHVuay5wZW5kaW5nLCBhc3luY1RodW5rLnJlamVjdGVkLCBhc3luY1RodW5rLmZ1bGZpbGxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21iaW5lZE1hdGNoZXIgPSBpc0FueU9mLmFwcGx5KHZvaWQgMCwgbWF0Y2hlcnMpO1xyXG4gICAgICAgIHJldHVybiBjb21iaW5lZE1hdGNoZXIoYWN0aW9uKTtcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2xpc3RlbmVyTWlkZGxld2FyZS91dGlscy50c1xyXG52YXIgYXNzZXJ0RnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYywgZXhwZWN0ZWQpIHtcclxuICAgIGlmICh0eXBlb2YgZnVuYyAhPT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihleHBlY3RlZCArIFwiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHtcclxufTtcclxudmFyIGNhdGNoUmVqZWN0aW9uID0gZnVuY3Rpb24gKHByb21pc2UyLCBvbkVycm9yKSB7XHJcbiAgICBpZiAob25FcnJvciA9PT0gdm9pZCAwKSB7IG9uRXJyb3IgPSBub29wOyB9XHJcbiAgICBwcm9taXNlMi5jYXRjaChvbkVycm9yKTtcclxuICAgIHJldHVybiBwcm9taXNlMjtcclxufTtcclxudmFyIGFkZEFib3J0U2lnbmFsTGlzdGVuZXIgPSBmdW5jdGlvbiAoYWJvcnRTaWduYWwsIGNhbGxiYWNrKSB7XHJcbiAgICBhYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2FsbGJhY2ssIHsgb25jZTogdHJ1ZSB9KTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBhYm9ydFNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2FsbGJhY2spOyB9O1xyXG59O1xyXG52YXIgYWJvcnRDb250cm9sbGVyV2l0aFJlYXNvbiA9IGZ1bmN0aW9uIChhYm9ydENvbnRyb2xsZXIsIHJlYXNvbikge1xyXG4gICAgdmFyIHNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7XHJcbiAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIShcInJlYXNvblwiIGluIHNpZ25hbCkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2lnbmFsLCBcInJlYXNvblwiLCB7XHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiByZWFzb24sXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIGFib3J0Q29udHJvbGxlci5hYm9ydChyZWFzb24pO1xyXG59O1xyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL2V4Y2VwdGlvbnMudHNcclxudmFyIHRhc2sgPSBcInRhc2tcIjtcclxudmFyIGxpc3RlbmVyID0gXCJsaXN0ZW5lclwiO1xyXG52YXIgY29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcclxudmFyIGNhbmNlbGxlZCA9IFwiY2FuY2VsbGVkXCI7XHJcbnZhciB0YXNrQ2FuY2VsbGVkID0gXCJ0YXNrLVwiICsgY2FuY2VsbGVkO1xyXG52YXIgdGFza0NvbXBsZXRlZCA9IFwidGFzay1cIiArIGNvbXBsZXRlZDtcclxudmFyIGxpc3RlbmVyQ2FuY2VsbGVkID0gbGlzdGVuZXIgKyBcIi1cIiArIGNhbmNlbGxlZDtcclxudmFyIGxpc3RlbmVyQ29tcGxldGVkID0gbGlzdGVuZXIgKyBcIi1cIiArIGNvbXBsZXRlZDtcclxudmFyIFRhc2tBYm9ydEVycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGFza0Fib3J0RXJyb3IoY29kZSkge1xyXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUYXNrQWJvcnRFcnJvclwiO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRhc2sgKyBcIiBcIiArIGNhbmNlbGxlZCArIFwiIChyZWFzb246IFwiICsgY29kZSArIFwiKVwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFRhc2tBYm9ydEVycm9yO1xyXG59KCkpO1xyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL3Rhc2sudHNcclxudmFyIHZhbGlkYXRlQWN0aXZlID0gZnVuY3Rpb24gKHNpZ25hbCkge1xyXG4gICAgaWYgKHNpZ25hbC5hYm9ydGVkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFRhc2tBYm9ydEVycm9yKHNpZ25hbC5yZWFzb24pO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiByYWNlV2l0aFNpZ25hbChzaWduYWwsIHByb21pc2UyKSB7XHJcbiAgICB2YXIgY2xlYW51cCA9IG5vb3A7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBub3RpZnlSZWplY3Rpb24gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZWplY3QobmV3IFRhc2tBYm9ydEVycm9yKHNpZ25hbC5yZWFzb24pKTsgfTtcclxuICAgICAgICBpZiAoc2lnbmFsLmFib3J0ZWQpIHtcclxuICAgICAgICAgICAgbm90aWZ5UmVqZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYW51cCA9IGFkZEFib3J0U2lnbmFsTGlzdGVuZXIoc2lnbmFsLCBub3RpZnlSZWplY3Rpb24pO1xyXG4gICAgICAgIHByb21pc2UyLmZpbmFsbHkoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xlYW51cCgpOyB9KS50aGVuKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgICB9KS5maW5hbGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhbnVwID0gbm9vcDtcclxuICAgIH0pO1xyXG59XHJcbnZhciBydW5UYXNrID0gZnVuY3Rpb24gKHRhc2syLCBjbGVhblVwKSB7IHJldHVybiBfX2FzeW5jKHZvaWQgMCwgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHZhbHVlLCBlcnJvcl8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFswLCAzLCA0LCA1XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRhc2syKCldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogXCJva1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9jLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZXJyb3JfMSBpbnN0YW5jZW9mIFRhc2tBYm9ydEVycm9yID8gXCJjYW5jZWxsZWRcIiA6IFwicmVqZWN0ZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzFcclxuICAgICAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgY2xlYW5VcCA9PSBudWxsID8gdm9pZCAwIDogY2xlYW5VcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcclxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG52YXIgY3JlYXRlUGF1c2UgPSBmdW5jdGlvbiAoc2lnbmFsKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb21pc2UyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGNoUmVqZWN0aW9uKHJhY2VXaXRoU2lnbmFsKHNpZ25hbCwgcHJvbWlzZTIpLnRoZW4oZnVuY3Rpb24gKG91dHB1dCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShzaWduYWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcbn07XHJcbnZhciBjcmVhdGVEZWxheSA9IGZ1bmN0aW9uIChzaWduYWwpIHtcclxuICAgIHZhciBwYXVzZSA9IGNyZWF0ZVBhdXNlKHNpZ25hbCk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRpbWVvdXRNcykge1xyXG4gICAgICAgIHJldHVybiBwYXVzZShuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lb3V0TXMpOyB9KSk7XHJcbiAgICB9O1xyXG59O1xyXG4vLyBzcmMvbGlzdGVuZXJNaWRkbGV3YXJlL2luZGV4LnRzXHJcbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xyXG52YXIgSU5URVJOQUxfTklMX1RPS0VOID0ge307XHJcbnZhciBhbG0gPSBcImxpc3RlbmVyTWlkZGxld2FyZVwiO1xyXG52YXIgY3JlYXRlRm9yayA9IGZ1bmN0aW9uIChwYXJlbnRBYm9ydFNpZ25hbCkge1xyXG4gICAgdmFyIGxpbmtDb250cm9sbGVycyA9IGZ1bmN0aW9uIChjb250cm9sbGVyKSB7IHJldHVybiBhZGRBYm9ydFNpZ25hbExpc3RlbmVyKHBhcmVudEFib3J0U2lnbmFsLCBmdW5jdGlvbiAoKSB7IHJldHVybiBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNvbnRyb2xsZXIsIHBhcmVudEFib3J0U2lnbmFsLnJlYXNvbik7IH0pOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXNrRXhlY3V0b3IpIHtcclxuICAgICAgICBhc3NlcnRGdW5jdGlvbih0YXNrRXhlY3V0b3IsIFwidGFza0V4ZWN1dG9yXCIpO1xyXG4gICAgICAgIHZhciBjaGlsZEFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgICAgICBsaW5rQ29udHJvbGxlcnMoY2hpbGRBYm9ydENvbnRyb2xsZXIpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBydW5UYXNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXN5bmModm9pZCAwLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQyO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFjdGl2ZShwYXJlbnRBYm9ydFNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRhc2tFeGVjdXRvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2U6IGNyZWF0ZVBhdXNlKGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGNyZWF0ZURlbGF5KGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBjaGlsZEFib3J0Q29udHJvbGxlci5zaWduYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDIgPSBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKGNoaWxkQWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHQyXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY2hpbGRBYm9ydENvbnRyb2xsZXIsIHRhc2tDb21wbGV0ZWQpOyB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN1bHQ6IGNyZWF0ZVBhdXNlKHBhcmVudEFib3J0U2lnbmFsKShyZXN1bHQpLFxyXG4gICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY2hpbGRBYm9ydENvbnRyb2xsZXIsIHRhc2tDYW5jZWxsZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbn07XHJcbnZhciBjcmVhdGVUYWtlUGF0dGVybiA9IGZ1bmN0aW9uIChzdGFydExpc3RlbmluZywgc2lnbmFsKSB7XHJcbiAgICB2YXIgdGFrZSA9IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRpbWVvdXQpIHsgcmV0dXJuIF9fYXN5bmModm9pZCAwLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlLCB0dXBsZVByb21pc2UsIHByb21pc2VzLCBvdXRwdXQ7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3RpdmUoc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHR1cGxlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3BMaXN0ZW5pbmcgPSBzdGFydExpc3RlbmluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVkaWNhdGU6IHByZWRpY2F0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVmZmVjdDogZnVuY3Rpb24gKGFjdGlvbiwgbGlzdGVuZXJBcGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lckFwaS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyQXBpLmdldFN0YXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyQXBpLmdldE9yaWdpbmFsU3RhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9wTGlzdGVuaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlcyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHVwbGVQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZW91dCwgbnVsbCk7IH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgLCAzLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmFjZVdpdGhTaWduYWwoc2lnbmFsLCBQcm9taXNlLnJhY2UocHJvbWlzZXMpKV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQWN0aXZlKHNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG91dHB1dF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRpbWVvdXQpIHsgcmV0dXJuIGNhdGNoUmVqZWN0aW9uKHRha2UocHJlZGljYXRlLCB0aW1lb3V0KSk7IH07XHJcbn07XHJcbnZhciBnZXRMaXN0ZW5lckVudHJ5UHJvcHNGcm9tID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIHZhciB0eXBlID0gb3B0aW9ucy50eXBlLCBhY3Rpb25DcmVhdG9yID0gb3B0aW9ucy5hY3Rpb25DcmVhdG9yLCBtYXRjaGVyID0gb3B0aW9ucy5tYXRjaGVyLCBwcmVkaWNhdGUgPSBvcHRpb25zLnByZWRpY2F0ZSwgZWZmZWN0ID0gb3B0aW9ucy5lZmZlY3Q7XHJcbiAgICBpZiAodHlwZSkge1xyXG4gICAgICAgIHByZWRpY2F0ZSA9IGNyZWF0ZUFjdGlvbih0eXBlKS5tYXRjaDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFjdGlvbkNyZWF0b3IpIHtcclxuICAgICAgICB0eXBlID0gYWN0aW9uQ3JlYXRvci50eXBlO1xyXG4gICAgICAgIHByZWRpY2F0ZSA9IGFjdGlvbkNyZWF0b3IubWF0Y2g7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChtYXRjaGVyKSB7XHJcbiAgICAgICAgcHJlZGljYXRlID0gbWF0Y2hlcjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByZWRpY2F0ZSkge1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3JlYXRpbmcgb3IgcmVtb3ZpbmcgYSBsaXN0ZW5lciByZXF1aXJlcyBvbmUgb2YgdGhlIGtub3duIGZpZWxkcyBmb3IgbWF0Y2hpbmcgYW4gYWN0aW9uXCIpO1xyXG4gICAgfVxyXG4gICAgYXNzZXJ0RnVuY3Rpb24oZWZmZWN0LCBcIm9wdGlvbnMubGlzdGVuZXJcIik7XHJcbiAgICByZXR1cm4geyBwcmVkaWNhdGU6IHByZWRpY2F0ZSwgdHlwZTogdHlwZSwgZWZmZWN0OiBlZmZlY3QgfTtcclxufTtcclxudmFyIGNyZWF0ZUxpc3RlbmVyRW50cnkgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgdmFyIF9jID0gZ2V0TGlzdGVuZXJFbnRyeVByb3BzRnJvbShvcHRpb25zKSwgdHlwZSA9IF9jLnR5cGUsIHByZWRpY2F0ZSA9IF9jLnByZWRpY2F0ZSwgZWZmZWN0ID0gX2MuZWZmZWN0O1xyXG4gICAgdmFyIGlkID0gbmFub2lkKCk7XHJcbiAgICB2YXIgZW50cnkgPSB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIGVmZmVjdDogZWZmZWN0LFxyXG4gICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgcHJlZGljYXRlOiBwcmVkaWNhdGUsXHJcbiAgICAgICAgcGVuZGluZzogbmV3IFNldCgpLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3Vic2NyaWJlIG5vdCBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGVudHJ5O1xyXG59O1xyXG52YXIgY2FuY2VsQWN0aXZlTGlzdGVuZXJzID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcbiAgICBlbnRyeS5wZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcclxuICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGNvbnRyb2xsZXIsIGxpc3RlbmVyQ2FuY2VsbGVkKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgY3JlYXRlQ2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUgPSBmdW5jdGlvbiAobGlzdGVuZXJNYXApIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGlzdGVuZXJNYXAuZm9yRWFjaChjYW5jZWxBY3RpdmVMaXN0ZW5lcnMpO1xyXG4gICAgICAgIGxpc3RlbmVyTWFwLmNsZWFyKCk7XHJcbiAgICB9O1xyXG59O1xyXG52YXIgc2FmZWx5Tm90aWZ5RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JIYW5kbGVyLCBlcnJvclRvTm90aWZ5LCBlcnJvckluZm8pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZXJyb3JIYW5kbGVyKGVycm9yVG9Ob3RpZnksIGVycm9ySW5mbyk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3JIYW5kbGVyRXJyb3IpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyb3JIYW5kbGVyRXJyb3I7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbn07XHJcbnZhciBhZGRMaXN0ZW5lciA9IGNyZWF0ZUFjdGlvbihhbG0gKyBcIi9hZGRcIik7XHJcbnZhciBjbGVhckFsbExpc3RlbmVycyA9IGNyZWF0ZUFjdGlvbihhbG0gKyBcIi9yZW1vdmVBbGxcIik7XHJcbnZhciByZW1vdmVMaXN0ZW5lciA9IGNyZWF0ZUFjdGlvbihhbG0gKyBcIi9yZW1vdmVcIik7XHJcbnZhciBkZWZhdWx0RXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBfX3NwcmVhZEFycmF5KFthbG0gKyBcIi9lcnJvclwiXSwgYXJncykpO1xyXG59O1xyXG5mdW5jdGlvbiBjcmVhdGVMaXN0ZW5lck1pZGRsZXdhcmUobWlkZGxld2FyZU9wdGlvbnMpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBpZiAobWlkZGxld2FyZU9wdGlvbnMgPT09IHZvaWQgMCkgeyBtaWRkbGV3YXJlT3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgbGlzdGVuZXJNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgZXh0cmEgPSBtaWRkbGV3YXJlT3B0aW9ucy5leHRyYSwgX2MgPSBtaWRkbGV3YXJlT3B0aW9ucy5vbkVycm9yLCBvbkVycm9yID0gX2MgPT09IHZvaWQgMCA/IGRlZmF1bHRFcnJvckhhbmRsZXIgOiBfYztcclxuICAgIGFzc2VydEZ1bmN0aW9uKG9uRXJyb3IsIFwib25FcnJvclwiKTtcclxuICAgIHZhciBpbnNlcnRFbnRyeSA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG4gICAgICAgIGVudHJ5LnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbGlzdGVuZXJNYXAuZGVsZXRlKGVudHJ5LmlkKTsgfTtcclxuICAgICAgICBsaXN0ZW5lck1hcC5zZXQoZW50cnkuaWQsIGVudHJ5KTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNhbmNlbE9wdGlvbnMpIHtcclxuICAgICAgICAgICAgZW50cnkudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgaWYgKGNhbmNlbE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGNhbmNlbE9wdGlvbnMuY2FuY2VsQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxBY3RpdmVMaXN0ZW5lcnMoZW50cnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICB2YXIgZmluZExpc3RlbmVyRW50cnkgPSBmdW5jdGlvbiAoY29tcGFyYXRvcikge1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2MgPSBBcnJheS5mcm9tKGxpc3RlbmVyTWFwLnZhbHVlcygpKTsgX2kgPCBfYy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIGVudHJ5ID0gX2NbX2ldO1xyXG4gICAgICAgICAgICBpZiAoY29tcGFyYXRvcihlbnRyeSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgfTtcclxuICAgIHZhciBzdGFydExpc3RlbmluZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIGVudHJ5ID0gZmluZExpc3RlbmVyRW50cnkoZnVuY3Rpb24gKGV4aXN0aW5nRW50cnkpIHsgcmV0dXJuIGV4aXN0aW5nRW50cnkuZWZmZWN0ID09PSBvcHRpb25zLmVmZmVjdDsgfSk7XHJcbiAgICAgICAgaWYgKCFlbnRyeSkge1xyXG4gICAgICAgICAgICBlbnRyeSA9IGNyZWF0ZUxpc3RlbmVyRW50cnkob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnNlcnRFbnRyeShlbnRyeSk7XHJcbiAgICB9O1xyXG4gICAgdmFyIHN0b3BMaXN0ZW5pbmcgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYyA9IGdldExpc3RlbmVyRW50cnlQcm9wc0Zyb20ob3B0aW9ucyksIHR5cGUgPSBfYy50eXBlLCBlZmZlY3QgPSBfYy5lZmZlY3QsIHByZWRpY2F0ZSA9IF9jLnByZWRpY2F0ZTtcclxuICAgICAgICB2YXIgZW50cnkgPSBmaW5kTGlzdGVuZXJFbnRyeShmdW5jdGlvbiAoZW50cnkyKSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaFByZWRpY2F0ZU9yVHlwZSA9IHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiID8gZW50cnkyLnR5cGUgPT09IHR5cGUgOiBlbnRyeTIucHJlZGljYXRlID09PSBwcmVkaWNhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFByZWRpY2F0ZU9yVHlwZSAmJiBlbnRyeTIuZWZmZWN0ID09PSBlZmZlY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgICAgIGVudHJ5LnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNhbmNlbEFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsQWN0aXZlTGlzdGVuZXJzKGVudHJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gISFlbnRyeTtcclxuICAgIH07XHJcbiAgICB2YXIgbm90aWZ5TGlzdGVuZXIgPSBmdW5jdGlvbiAoZW50cnksIGFjdGlvbiwgYXBpLCBnZXRPcmlnaW5hbFN0YXRlKSB7IHJldHVybiBfX2FzeW5jKF90aGlzLCBudWxsLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGludGVybmFsVGFza0NvbnRyb2xsZXIsIHRha2UsIGxpc3RlbmVyRXJyb3JfMTtcclxuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbFRhc2tDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRha2UgPSBjcmVhdGVUYWtlUGF0dGVybihzdGFydExpc3RlbmluZywgaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsIDMsIDQsIDVdKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wZW5kaW5nLmFkZChpbnRlcm5hbFRhc2tDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBQcm9taXNlLnJlc29sdmUoZW50cnkuZWZmZWN0KGFjdGlvbiwgYXNzaWduKHt9LCBhcGksIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9yaWdpbmFsU3RhdGU6IGdldE9yaWdpbmFsU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRpbWVvdXQpIHsgcmV0dXJuIHRha2UocHJlZGljYXRlLCB0aW1lb3V0KS50aGVuKEJvb2xlYW4pOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFrZTogdGFrZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBjcmVhdGVEZWxheShpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXVzZTogY3JlYXRlUGF1c2UoaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmE6IGV4dHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiBpbnRlcm5hbFRhc2tDb250cm9sbGVyLnNpZ25hbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcms6IGNyZWF0ZUZvcmsoaW50ZXJuYWxUYXNrQ29udHJvbGxlci5zaWduYWwpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGVudHJ5LnVuc3Vic2NyaWJlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJNYXAuc2V0KGVudHJ5LmlkLCBlbnRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQWN0aXZlTGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkucGVuZGluZy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sbGVyLCBfLCBzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIgIT09IGludGVybmFsVGFza0NvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0Q29udHJvbGxlcldpdGhSZWFzb24oY29udHJvbGxlciwgbGlzdGVuZXJDYW5jZWxsZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0LmRlbGV0ZShjb250cm9sbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJFcnJvcl8xID0gX2Muc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGxpc3RlbmVyRXJyb3JfMSBpbnN0YW5jZW9mIFRhc2tBYm9ydEVycm9yKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYWZlbHlOb3RpZnlFcnJvcihvbkVycm9yLCBsaXN0ZW5lckVycm9yXzEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaXNlZEJ5OiBcImVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICBhYm9ydENvbnRyb2xsZXJXaXRoUmVhc29uKGludGVybmFsVGFza0NvbnRyb2xsZXIsIGxpc3RlbmVyQ29tcGxldGVkKTtcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5wZW5kaW5nLmRlbGV0ZShpbnRlcm5hbFRhc2tDb250cm9sbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pOyB9O1xyXG4gICAgdmFyIGNsZWFyTGlzdGVuZXJNaWRkbGV3YXJlID0gY3JlYXRlQ2xlYXJMaXN0ZW5lck1pZGRsZXdhcmUobGlzdGVuZXJNYXApO1xyXG4gICAgdmFyIG1pZGRsZXdhcmUgPSBmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBmdW5jdGlvbiAobmV4dCkgeyByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgIGlmICghaXNBY3Rpb24oYWN0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkTGlzdGVuZXIubWF0Y2goYWN0aW9uKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhcnRMaXN0ZW5pbmcoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xlYXJBbGxMaXN0ZW5lcnMubWF0Y2goYWN0aW9uKSkge1xyXG4gICAgICAgICAgICBjbGVhckxpc3RlbmVyTWlkZGxld2FyZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZW1vdmVMaXN0ZW5lci5tYXRjaChhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wTGlzdGVuaW5nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsU3RhdGUgPSBhcGkuZ2V0U3RhdGUoKTtcclxuICAgICAgICB2YXIgZ2V0T3JpZ2luYWxTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsU3RhdGUgPT09IElOVEVSTkFMX05JTF9UT0tFTikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGFsbSArIFwiOiBnZXRPcmlnaW5hbFN0YXRlIGNhbiBvbmx5IGJlIGNhbGxlZCBzeW5jaHJvbm91c2x5XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbFN0YXRlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXh0KGFjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lck1hcC5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRTdGF0ZSA9IGFwaS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyRW50cmllcyA9IEFycmF5LmZyb20obGlzdGVuZXJNYXAudmFsdWVzKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBsaXN0ZW5lckVudHJpZXNfMSA9IGxpc3RlbmVyRW50cmllczsgX2kgPCBsaXN0ZW5lckVudHJpZXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBsaXN0ZW5lckVudHJpZXNfMVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bkxpc3RlbmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTGlzdGVuZXIgPSBlbnRyeS5wcmVkaWNhdGUoYWN0aW9uLCBjdXJyZW50U3RhdGUsIG9yaWdpbmFsU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAocHJlZGljYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTGlzdGVuZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FmZWx5Tm90aWZ5RXJyb3Iob25FcnJvciwgcHJlZGljYXRlRXJyb3IsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhaXNlZEJ5OiBcInByZWRpY2F0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJ1bkxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcihlbnRyeSwgYWN0aW9uLCBhcGksIGdldE9yaWdpbmFsU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFN0YXRlID0gSU5URVJOQUxfTklMX1RPS0VOO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTsgfTsgfTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWlkZGxld2FyZTogbWlkZGxld2FyZSxcclxuICAgICAgICBzdGFydExpc3RlbmluZzogc3RhcnRMaXN0ZW5pbmcsXHJcbiAgICAgICAgc3RvcExpc3RlbmluZzogc3RvcExpc3RlbmluZyxcclxuICAgICAgICBjbGVhckxpc3RlbmVyczogY2xlYXJMaXN0ZW5lck1pZGRsZXdhcmVcclxuICAgIH07XHJcbn1cclxuLy8gc3JjL2F1dG9CYXRjaEVuaGFuY2VyLnRzXHJcbnZhciBTSE9VTERfQVVUT0JBVENIID0gXCJSVEtfYXV0b0JhdGNoXCI7XHJcbnZhciBwcmVwYXJlQXV0b0JhdGNoZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAocGF5bG9hZCkge1xyXG4gICAgdmFyIF9jO1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcclxuICAgICAgICBtZXRhOiAoX2MgPSB7fSwgX2NbU0hPVUxEX0FVVE9CQVRDSF0gPSB0cnVlLCBfYylcclxuICAgIH0pO1xyXG59OyB9O1xyXG52YXIgcHJvbWlzZTtcclxudmFyIHF1ZXVlTWljcm90YXNrU2hpbSA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gXCJmdW5jdGlvblwiID8gcXVldWVNaWNyb3Rhc2suYmluZCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IGdsb2JhbFRoaXMpIDogZnVuY3Rpb24gKGNiKSB7IHJldHVybiAocHJvbWlzZSB8fCAocHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpKSkudGhlbihjYikuY2F0Y2goZnVuY3Rpb24gKGVycikgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICB0aHJvdyBlcnI7XHJcbn0sIDApOyB9KTsgfTtcclxudmFyIGNyZWF0ZVF1ZXVlV2l0aFRpbWVyID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAobm90aWZ5KSB7XHJcbiAgICAgICAgc2V0VGltZW91dChub3RpZnksIHRpbWVvdXQpO1xyXG4gICAgfTtcclxufTtcclxudmFyIHJBRiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiBjcmVhdGVRdWV1ZVdpdGhUaW1lcigxMCk7XHJcbnZhciBhdXRvQmF0Y2hFbmhhbmNlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7IHR5cGU6IFwicmFmXCIgfTsgfVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7IHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdG9yZSA9IG5leHQuYXBwbHkodm9pZCAwLCBhcmdzKTtcclxuICAgICAgICB2YXIgbm90aWZ5aW5nID0gdHJ1ZTtcclxuICAgICAgICB2YXIgc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2sgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbm90aWZpY2F0aW9uUXVldWVkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB2YXIgcXVldWVDYWxsYmFjayA9IG9wdGlvbnMudHlwZSA9PT0gXCJ0aWNrXCIgPyBxdWV1ZU1pY3JvdGFza1NoaW0gOiBvcHRpb25zLnR5cGUgPT09IFwicmFmXCIgPyByQUYgOiBvcHRpb25zLnR5cGUgPT09IFwiY2FsbGJhY2tcIiA/IG9wdGlvbnMucXVldWVOb3RpZmljYXRpb24gOiBjcmVhdGVRdWV1ZVdpdGhUaW1lcihvcHRpb25zLnRpbWVvdXQpO1xyXG4gICAgICAgIHZhciBub3RpZnlMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvblF1ZXVlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkTm90aWZ5QXRFbmRPZlRpY2spIHtcclxuICAgICAgICAgICAgICAgIHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobCkgeyByZXR1cm4gbCgpOyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0b3JlLCB7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKGxpc3RlbmVyMikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vdGlmeWluZyAmJiBsaXN0ZW5lcjIoKTsgfTtcclxuICAgICAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSh3cmFwcGVkTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcjIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIyKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeWluZyA9ICEoKF9hID0gYWN0aW9uID09IG51bGwgPyB2b2lkIDAgOiBhY3Rpb24ubWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hW1NIT1VMRF9BVVRPQkFUQ0hdKTtcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGROb3RpZnlBdEVuZE9mVGljayA9ICFub3RpZnlpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZE5vdGlmeUF0RW5kT2ZUaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm90aWZpY2F0aW9uUXVldWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25RdWV1ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVldWVDYWxsYmFjayhub3RpZnlMaXN0ZW5lcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTsgfTtcclxufTtcclxuLy8gc3JjL2luZGV4LnRzXHJcbmVuYWJsZUVTNSgpO1xyXG5leHBvcnQgeyBFbmhhbmNlckFycmF5LCBNaWRkbGV3YXJlQXJyYXksIFNIT1VMRF9BVVRPQkFUQ0gsIFRhc2tBYm9ydEVycm9yLCBhZGRMaXN0ZW5lciwgYXV0b0JhdGNoRW5oYW5jZXIsIGNsZWFyQWxsTGlzdGVuZXJzLCBjb25maWd1cmVTdG9yZSwgY3JlYXRlQWN0aW9uLCBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVEcmFmdFNhZmVTZWxlY3RvciwgY3JlYXRlRW50aXR5QWRhcHRlciwgY3JlYXRlSW1tdXRhYmxlU3RhdGVJbnZhcmlhbnRNaWRkbGV3YXJlLCBjcmVhdGVMaXN0ZW5lck1pZGRsZXdhcmUsIGRlZmF1bHQyIGFzIGNyZWF0ZU5leHRTdGF0ZSwgY3JlYXRlUmVkdWNlciwgY3JlYXRlU2VsZWN0b3IyIGFzIGNyZWF0ZVNlbGVjdG9yLCBjcmVhdGVTZXJpYWxpemFibGVTdGF0ZUludmFyaWFudE1pZGRsZXdhcmUsIGNyZWF0ZVNsaWNlLCBjdXJyZW50MiBhcyBjdXJyZW50LCBmaW5kTm9uU2VyaWFsaXphYmxlVmFsdWUsIGZyZWV6ZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUsIGdldFR5cGUsIGlzQWN0aW9uLCBpc0FsbE9mLCBpc0FueU9mLCBpc0FzeW5jVGh1bmtBY3Rpb24sIGlzRHJhZnQ0IGFzIGlzRHJhZnQsIGlzRlNBIGFzIGlzRmx1eFN0YW5kYXJkQWN0aW9uLCBpc0Z1bGZpbGxlZCwgaXNJbW11dGFibGVEZWZhdWx0LCBpc1BlbmRpbmcsIGlzUGxhaW4sIGlzUGxhaW5PYmplY3QsIGlzUmVqZWN0ZWQsIGlzUmVqZWN0ZWRXaXRoVmFsdWUsIG1pbmlTZXJpYWxpemVFcnJvciwgbmFub2lkLCBvcmlnaW5hbCwgcHJlcGFyZUF1dG9CYXRjaGVkLCByZW1vdmVMaXN0ZW5lciwgdW53cmFwUmVzdWx0IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlZHV4LXRvb2xraXQuZXNtLmpzLm1hcCIsIi8qKiBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHBvdGVudGlhbCBcImV4dHJhIGFyZ3VtZW50XCIgdmFsdWUgdG8gYmUgaW5qZWN0ZWQgbGF0ZXIsXHJcbiAqIGFuZCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSB0aHVuayBtaWRkbGV3YXJlIHRoYXQgdXNlcyB0aGF0IHZhbHVlXHJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKGV4dHJhQXJndW1lbnQpIHtcbiAgLy8gU3RhbmRhcmQgUmVkdXggbWlkZGxld2FyZSBkZWZpbml0aW9uIHBhdHRlcm46XG4gIC8vIFNlZTogaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjd3JpdGluZy1jdXN0b20tbWlkZGxld2FyZVxuICB2YXIgbWlkZGxld2FyZSA9IGZ1bmN0aW9uIG1pZGRsZXdhcmUoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIC8vIFRoZSB0aHVuayBtaWRkbGV3YXJlIGxvb2tzIGZvciBhbnkgZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgdG8gYHN0b3JlLmRpc3BhdGNoYC5cbiAgICAgICAgLy8gSWYgdGhpcyBcImFjdGlvblwiIGlzIHJlYWxseSBhIGZ1bmN0aW9uLCBjYWxsIGl0IGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBJbmplY3QgdGhlIHN0b3JlJ3MgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBtZXRob2RzLCBhcyB3ZWxsIGFzIGFueSBcImV4dHJhIGFyZ1wiXG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcGFzcyB0aGUgYWN0aW9uIGRvd24gdGhlIG1pZGRsZXdhcmUgY2hhaW4gYXMgdXN1YWxcblxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIG1pZGRsZXdhcmU7XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpOyAvLyBBdHRhY2ggdGhlIGZhY3RvcnkgZnVuY3Rpb24gc28gdXNlcnMgY2FuIGNyZWF0ZSBhIGN1c3RvbWl6ZWQgdmVyc2lvblxuLy8gd2l0aCB3aGF0ZXZlciBcImV4dHJhIGFyZ1wiIHRoZXkgd2FudCB0byBpbmplY3QgaW50byB0aGVpciB0aHVua3NcblxudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5leHBvcnQgZGVmYXVsdCB0aHVuazsiLCJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyJztcblxuLyoqXG4gKiBBZGFwdGVkIGZyb20gUmVhY3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvZm9ybWF0UHJvZEVycm9yTWVzc2FnZS5qc1xuICpcbiAqIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIHRocm93IGVycm9yIGNhbGxzLiBUaGVzZSBtZXNzYWdlcyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggZXJyb3IgY29kZXNcbiAqIGR1cmluZyBidWlsZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2RlXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICByZXR1cm4gXCJNaW5pZmllZCBSZWR1eCBlcnJvciAjXCIgKyBjb2RlICsgXCI7IHZpc2l0IGh0dHBzOi8vcmVkdXguanMub3JnL0Vycm9ycz9jb2RlPVwiICsgY29kZSArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMuICc7XG59XG5cbi8vIElubGluZWQgdmVyc2lvbiBvZiB0aGUgYHN5bWJvbC1vYnNlcnZhYmxlYCBwb2x5ZmlsbFxudmFyICQkb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnO1xufSkoKTtcblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiByYW5kb21TdHJpbmcoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbn07XG5cbnZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogXCJAQHJlZHV4L0lOSVRcIiArIHJhbmRvbVN0cmluZygpLFxuICBSRVBMQUNFOiBcIkBAcmVkdXgvUkVQTEFDRVwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFBST0JFX1VOS05PV05fQUNUSU9OOiBmdW5jdGlvbiBQUk9CRV9VTktOT1dOX0FDVElPTigpIHtcbiAgICByZXR1cm4gXCJAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXCIgKyByYW5kb21TdHJpbmcoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gb2JqIFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBhcmd1bWVudCBhcHBlYXJzIHRvIGJlIGEgcGxhaW4gb2JqZWN0LlxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IG9iajtcblxuICB3aGlsZSAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAhPT0gbnVsbCkge1xuICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gcHJvdG87XG59XG5cbi8vIElubGluZWQgLyBzaG9ydGVuZWQgdmVyc2lvbiBvZiBga2luZE9mYCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2tpbmQtb2ZcbmZ1bmN0aW9uIG1pbmlLaW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiAnYXJyYXknO1xuICBpZiAoaXNEYXRlKHZhbCkpIHJldHVybiAnZGF0ZSc7XG4gIGlmIChpc0Vycm9yKHZhbCkpIHJldHVybiAnZXJyb3InO1xuICB2YXIgY29uc3RydWN0b3JOYW1lID0gY3Rvck5hbWUodmFsKTtcblxuICBzd2l0Y2ggKGNvbnN0cnVjdG9yTmFtZSkge1xuICAgIGNhc2UgJ1N5bWJvbCc6XG4gICAgY2FzZSAnUHJvbWlzZSc6XG4gICAgY2FzZSAnV2Vha01hcCc6XG4gICAgY2FzZSAnV2Vha1NldCc6XG4gICAgY2FzZSAnTWFwJzpcbiAgICBjYXNlICdTZXQnOlxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcbiAgfSAvLyBvdGhlclxuXG5cbiAgcmV0dXJuIHR5cGUuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKTtcbn1cblxuZnVuY3Rpb24gY3Rvck5hbWUodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nID8gdmFsLmNvbnN0cnVjdG9yLm5hbWUgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKHZhbCkge1xuICByZXR1cm4gdmFsIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIHZhbC5tZXNzYWdlID09PSAnc3RyaW5nJyAmJiB2YWwuY29uc3RydWN0b3IgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5zdGFja1RyYWNlTGltaXQgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWwuZ2V0RGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsLnNldERhdGUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgdmFyIHR5cGVPZlZhbCA9IHR5cGVvZiB2YWw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB0eXBlT2ZWYWwgPSBtaW5pS2luZE9mKHZhbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZU9mVmFsO1xufVxuXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKlxuICogKipXZSByZWNvbW1lbmQgdXNpbmcgdGhlIGBjb25maWd1cmVTdG9yZWAgbWV0aG9kXG4gKiBvZiB0aGUgYEByZWR1eGpzL3Rvb2xraXRgIHBhY2thZ2UqKiwgd2hpY2ggcmVwbGFjZXMgYGNyZWF0ZVN0b3JlYC5cbiAqXG4gKiBSZWR1eCBUb29sa2l0IGlzIG91ciByZWNvbW1lbmRlZCBhcHByb2FjaCBmb3Igd3JpdGluZyBSZWR1eCBsb2dpYyB0b2RheSxcbiAqIGluY2x1ZGluZyBzdG9yZSBzZXR1cCwgcmVkdWNlcnMsIGRhdGEgZmV0Y2hpbmcsIGFuZCBtb3JlLlxuICpcbiAqICoqRm9yIG1vcmUgZGV0YWlscywgcGxlYXNlIHJlYWQgdGhpcyBSZWR1eCBkb2NzIHBhZ2U6KipcbiAqICoqaHR0cHM6Ly9yZWR1eC5qcy5vcmcvaW50cm9kdWN0aW9uL3doeS1ydGstaXMtcmVkdXgtdG9kYXkqKlxuICpcbiAqIGBjb25maWd1cmVTdG9yZWAgZnJvbSBSZWR1eCBUb29sa2l0IGlzIGFuIGltcHJvdmVkIHZlcnNpb24gb2YgYGNyZWF0ZVN0b3JlYCB0aGF0XG4gKiBzaW1wbGlmaWVzIHNldHVwIGFuZCBoZWxwcyBhdm9pZCBjb21tb24gYnVncy5cbiAqXG4gKiBZb3Ugc2hvdWxkIG5vdCBiZSB1c2luZyB0aGUgYHJlZHV4YCBjb3JlIHBhY2thZ2UgYnkgaXRzZWxmIHRvZGF5LCBleGNlcHQgZm9yIGxlYXJuaW5nIHB1cnBvc2VzLlxuICogVGhlIGBjcmVhdGVTdG9yZWAgbWV0aG9kIGZyb20gdGhlIGNvcmUgYHJlZHV4YCBwYWNrYWdlIHdpbGwgbm90IGJlIHJlbW92ZWQsIGJ1dCB3ZSBlbmNvdXJhZ2VcbiAqIGFsbCB1c2VycyB0byBtaWdyYXRlIHRvIHVzaW5nIFJlZHV4IFRvb2xraXQgZm9yIGFsbCBSZWR1eCBjb2RlLlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBgY3JlYXRlU3RvcmVgIHdpdGhvdXQgdGhpcyB2aXN1YWwgZGVwcmVjYXRpb24gd2FybmluZywgdXNlXG4gKiB0aGUgYGxlZ2FjeV9jcmVhdGVTdG9yZWAgaW1wb3J0IGluc3RlYWQ6XG4gKlxuICogYGltcG9ydCB7IGxlZ2FjeV9jcmVhdGVTdG9yZSBhcyBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnYFxuICpcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMCkgOiAnSXQgbG9va3MgbGlrZSB5b3UgYXJlIHBhc3Npbmcgc2V2ZXJhbCBzdG9yZSBlbmhhbmNlcnMgdG8gJyArICdjcmVhdGVTdG9yZSgpLiBUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEluc3RlYWQsIGNvbXBvc2UgdGhlbSAnICsgJ3RvZ2V0aGVyIHRvIGEgc2luZ2xlIGZ1bmN0aW9uLiBTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvdHV0b3JpYWxzL2Z1bmRhbWVudGFscy9wYXJ0LTQtc3RvcmUjY3JlYXRpbmctYS1zdG9yZS13aXRoLWVuaGFuY2VycyBmb3IgYW4gZXhhbXBsZS4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEpIDogXCJFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihlbmhhbmNlcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgyKSA6IFwiRXhwZWN0ZWQgdGhlIHJvb3QgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKHJlZHVjZXIpICsgXCInXCIpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzKSA6ICdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLmdldFN0YXRlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1RoZSByZWR1Y2VyIGhhcyBhbHJlYWR5IHJlY2VpdmVkIHRoZSBzdGF0ZSBhcyBhbiBhcmd1bWVudC4gJyArICdQYXNzIGl0IGRvd24gZnJvbSB0aGUgdG9wIHJlZHVjZXIgaW5zdGVhZCBvZiByZWFkaW5nIGl0IGZyb20gdGhlIHN0b3JlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDQpIDogXCJFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4gSW5zdGVhZCwgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihsaXN0ZW5lcikgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDUpIDogJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS9zdG9yZSNzdWJzY3JpYmVsaXN0ZW5lciBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNikgOiAnWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpL3N0b3JlI3N1YnNjcmliZWxpc3RlbmVyIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGN1cnJlbnRMaXN0ZW5lcnMgPSBudWxsO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoNykgOiBcIkFjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiBJbnN0ZWFkLCB0aGUgYWN0dWFsIHR5cGUgd2FzOiAnXCIgKyBraW5kT2YoYWN0aW9uKSArIFwiJy4gWW91IG1heSBuZWVkIHRvIGFkZCBtaWRkbGV3YXJlIHRvIHlvdXIgc3RvcmUgc2V0dXAgdG8gaGFuZGxlIGRpc3BhdGNoaW5nIG90aGVyIHZhbHVlcywgc3VjaCBhcyAncmVkdXgtdGh1bmsnIHRvIGhhbmRsZSBkaXNwYXRjaGluZyBmdW5jdGlvbnMuIFNlZSBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNC1zdG9yZSNtaWRkbGV3YXJlIGFuZCBodHRwczovL3JlZHV4LmpzLm9yZy90dXRvcmlhbHMvZnVuZGFtZW50YWxzL3BhcnQtNi1hc3luYy1sb2dpYyN1c2luZy10aGUtcmVkdXgtdGh1bmstbWlkZGxld2FyZSBmb3IgZXhhbXBsZXMuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSg4KSA6ICdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuIFlvdSBtYXkgaGF2ZSBtaXNzcGVsbGVkIGFuIGFjdGlvbiB0eXBlIHN0cmluZyBjb25zdGFudC4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoOSkgOiAnUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDEwKSA6IFwiRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uIEluc3RlYWQsIHJlY2VpdmVkOiAnXCIgKyBraW5kT2YobmV4dFJlZHVjZXIpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTEpIDogXCJFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LiBJbnN0ZWFkLCByZWNlaXZlZDogJ1wiICsga2luZE9mKG9ic2VydmVyKSArIFwiJ1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICpcbiAqICoqV2UgcmVjb21tZW5kIHVzaW5nIGBjb25maWd1cmVTdG9yZWAgZnJvbSB0aGVcbiAqIGBAcmVkdXhqcy90b29sa2l0YCBwYWNrYWdlKiosIHdoaWNoIHJlcGxhY2VzIGBjcmVhdGVTdG9yZWA6XG4gKiAqKmh0dHBzOi8vcmVkdXguanMub3JnL2ludHJvZHVjdGlvbi93aHktcnRrLWlzLXJlZHV4LXRvZGF5KipcbiAqXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtwcmVsb2FkZWRTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2VuaGFuY2VyXSBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cblxudmFyIGxlZ2FjeV9jcmVhdGVTdG9yZSA9IGNyZWF0ZVN0b3JlO1xuXG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cblxuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgaWYgeW91IGVuYWJsZVxuICAgIC8vIFwiYnJlYWsgb24gYWxsIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIGNvbnNvbGUsXG4gICAgLy8gaXQgd291bGQgcGF1c2UgdGhlIGV4ZWN1dGlvbiBhdCB0aGlzIGxpbmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyBraW5kT2YoaW5wdXRTdGF0ZSkgKyBcIlxcXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgXCIgKyAoXCJrZXlzOiBcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XTtcbiAgfSk7XG4gIHVuZXhwZWN0ZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIGlmIChhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLlJFUExBQ0UpIHJldHVybjtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBcIlVuZXhwZWN0ZWQgXCIgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArIFwiIFwiICsgKFwiXFxcIlwiICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIgZm91bmQgaW4gXCIgKyBhcmd1bWVudE5hbWUgKyBcIi4gXCIpICsgXCJFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6IFwiICsgKFwiXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTaGFwZShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwge1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuSU5JVFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMikgOiBcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxMykgOiBcIlRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSAnXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCInIG9yIG90aGVyIGFjdGlvbnMgaW4gXFxcInJlZHV4LypcXFwiIFwiKSArIFwibmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgXCIgKyBcImN1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsIFwiICsgXCJpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgXCIgKyBcImFjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLlwiKTtcbiAgICB9XG4gIH0pO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5cblxuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2FybmluZyhcIk5vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7IC8vIFRoaXMgaXMgdXNlZCB0byBtYWtlIHN1cmUgd2UgZG9uJ3Qgd2FybiBhYm91dCB0aGUgc2FtZVxuICAvLyBrZXlzIG11bHRpcGxlIHRpbWVzLlxuXG4gIHZhciB1bmV4cGVjdGVkS2V5Q2FjaGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yO1xuXG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNoYXBlKGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2hhcGVBc3NlcnRpb25FcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IHt9O1xuICAgIH1cblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG5cbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICB3YXJuaW5nKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDE0KSA6IFwiV2hlbiBjYWxsZWQgd2l0aCBhbiBhY3Rpb24gb2YgdHlwZSBcIiArIChhY3Rpb25UeXBlID8gXCJcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiA6ICcodW5rbm93biB0eXBlKScpICsgXCIsIHRoZSBzbGljZSByZWR1Y2VyIGZvciBrZXkgXFxcIlwiICsgX2tleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIik7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMoc3RhdGUpLmxlbmd0aDtcbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgxNikgOiBcImJpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgYnV0IGluc3RlYWQgcmVjZWl2ZWQ6ICdcIiArIGtpbmRPZihhY3Rpb25DcmVhdG9ycykgKyBcIicuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMTUpIDogJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0b3JlKSwge30sIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IHsgQWN0aW9uVHlwZXMgYXMgX19ET19OT1RfVVNFX19BY3Rpb25UeXBlcywgYXBwbHlNaWRkbGV3YXJlLCBiaW5kQWN0aW9uQ3JlYXRvcnMsIGNvbWJpbmVSZWR1Y2VycywgY29tcG9zZSwgY3JlYXRlU3RvcmUsIGxlZ2FjeV9jcmVhdGVTdG9yZSB9O1xuIiwiLy8gQ2FjaGUgaW1wbGVtZW50YXRpb24gYmFzZWQgb24gRXJpayBSYXNtdXNzZW4ncyBgbHJ1LW1lbW9pemVgOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2VyaWtyYXMvbHJ1LW1lbW9pemVcbnZhciBOT1RfRk9VTkQgPSAnTk9UX0ZPVU5EJztcblxuZnVuY3Rpb24gY3JlYXRlU2luZ2xldG9uQ2FjaGUoZXF1YWxzKSB7XG4gIHZhciBlbnRyeTtcbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICAgIGlmIChlbnRyeSAmJiBlcXVhbHMoZW50cnkua2V5LCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgICB9LFxuICAgIHB1dDogZnVuY3Rpb24gcHV0KGtleSwgdmFsdWUpIHtcbiAgICAgIGVudHJ5ID0ge1xuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0RW50cmllczogZnVuY3Rpb24gZ2V0RW50cmllcygpIHtcbiAgICAgIHJldHVybiBlbnRyeSA/IFtlbnRyeV0gOiBbXTtcbiAgICB9LFxuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGVudHJ5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTHJ1Q2FjaGUobWF4U2l6ZSwgZXF1YWxzKSB7XG4gIHZhciBlbnRyaWVzID0gW107XG5cbiAgZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBjYWNoZUluZGV4ID0gZW50cmllcy5maW5kSW5kZXgoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICByZXR1cm4gZXF1YWxzKGtleSwgZW50cnkua2V5KTtcbiAgICB9KTsgLy8gV2UgZm91bmQgYSBjYWNoZWQgZW50cnlcblxuICAgIGlmIChjYWNoZUluZGV4ID4gLTEpIHtcbiAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNbY2FjaGVJbmRleF07IC8vIENhY2hlZCBlbnRyeSBub3QgYXQgdG9wIG9mIGNhY2hlLCBtb3ZlIGl0IHRvIHRoZSB0b3BcblxuICAgICAgaWYgKGNhY2hlSW5kZXggPiAwKSB7XG4gICAgICAgIGVudHJpZXMuc3BsaWNlKGNhY2hlSW5kZXgsIDEpO1xuICAgICAgICBlbnRyaWVzLnVuc2hpZnQoZW50cnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW50cnkudmFsdWU7XG4gICAgfSAvLyBObyBlbnRyeSBmb3VuZCBpbiBjYWNoZSwgcmV0dXJuIHNlbnRpbmVsXG5cblxuICAgIHJldHVybiBOT1RfRk9VTkQ7XG4gIH1cblxuICBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmIChnZXQoa2V5KSA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAvLyBUT0RPIElzIHVuc2hpZnQgc2xvdz9cbiAgICAgIGVudHJpZXMudW5zaGlmdCh7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZW50cmllcy5sZW5ndGggPiBtYXhTaXplKSB7XG4gICAgICAgIGVudHJpZXMucG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgIGVudHJpZXMgPSBbXTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0OiBnZXQsXG4gICAgcHV0OiBwdXQsXG4gICAgZ2V0RW50cmllczogZ2V0RW50cmllcyxcbiAgICBjbGVhcjogY2xlYXJcbiAgfTtcbn1cblxuZXhwb3J0IHZhciBkZWZhdWx0RXF1YWxpdHlDaGVjayA9IGZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcihlcXVhbGl0eUNoZWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiBhcmVBcmd1bWVudHNTaGFsbG93bHlFcXVhbChwcmV2LCBuZXh0KSB7XG4gICAgaWYgKHByZXYgPT09IG51bGwgfHwgbmV4dCA9PT0gbnVsbCB8fCBwcmV2Lmxlbmd0aCAhPT0gbmV4dC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIERvIHRoaXMgaW4gYSBmb3IgbG9vcCAoYW5kIG5vdCBhIGBmb3JFYWNoYCBvciBhbiBgZXZlcnlgKSBzbyB3ZSBjYW4gZGV0ZXJtaW5lIGVxdWFsaXR5IGFzIGZhc3QgYXMgcG9zc2libGUuXG5cblxuICAgIHZhciBsZW5ndGggPSBwcmV2Lmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghZXF1YWxpdHlDaGVjayhwcmV2W2ldLCBuZXh0W2ldKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59XG4vLyBkZWZhdWx0TWVtb2l6ZSBub3cgc3VwcG9ydHMgYSBjb25maWd1cmFibGUgY2FjaGUgc2l6ZSB3aXRoIExSVSBiZWhhdmlvcixcbi8vIGFuZCBvcHRpb25hbCBjb21wYXJpc29uIG9mIHRoZSByZXN1bHQgdmFsdWUgd2l0aCBleGlzdGluZyB2YWx1ZXNcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVtb2l6ZShmdW5jLCBlcXVhbGl0eUNoZWNrT3JPcHRpb25zKSB7XG4gIHZhciBwcm92aWRlZE9wdGlvbnMgPSB0eXBlb2YgZXF1YWxpdHlDaGVja09yT3B0aW9ucyA9PT0gJ29iamVjdCcgPyBlcXVhbGl0eUNoZWNrT3JPcHRpb25zIDoge1xuICAgIGVxdWFsaXR5Q2hlY2s6IGVxdWFsaXR5Q2hlY2tPck9wdGlvbnNcbiAgfTtcbiAgdmFyIF9wcm92aWRlZE9wdGlvbnMkZXF1YSA9IHByb3ZpZGVkT3B0aW9ucy5lcXVhbGl0eUNoZWNrLFxuICAgICAgZXF1YWxpdHlDaGVjayA9IF9wcm92aWRlZE9wdGlvbnMkZXF1YSA9PT0gdm9pZCAwID8gZGVmYXVsdEVxdWFsaXR5Q2hlY2sgOiBfcHJvdmlkZWRPcHRpb25zJGVxdWEsXG4gICAgICBfcHJvdmlkZWRPcHRpb25zJG1heFMgPSBwcm92aWRlZE9wdGlvbnMubWF4U2l6ZSxcbiAgICAgIG1heFNpemUgPSBfcHJvdmlkZWRPcHRpb25zJG1heFMgPT09IHZvaWQgMCA/IDEgOiBfcHJvdmlkZWRPcHRpb25zJG1heFMsXG4gICAgICByZXN1bHRFcXVhbGl0eUNoZWNrID0gcHJvdmlkZWRPcHRpb25zLnJlc3VsdEVxdWFsaXR5Q2hlY2s7XG4gIHZhciBjb21wYXJhdG9yID0gY3JlYXRlQ2FjaGVLZXlDb21wYXJhdG9yKGVxdWFsaXR5Q2hlY2spO1xuICB2YXIgY2FjaGUgPSBtYXhTaXplID09PSAxID8gY3JlYXRlU2luZ2xldG9uQ2FjaGUoY29tcGFyYXRvcikgOiBjcmVhdGVMcnVDYWNoZShtYXhTaXplLCBjb21wYXJhdG9yKTsgLy8gd2UgcmVmZXJlbmNlIGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyB0aGVtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXG5cbiAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgdmFyIHZhbHVlID0gY2FjaGUuZ2V0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodmFsdWUgPT09IE5PVF9GT1VORCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdmFsdWUgPSBmdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICAgIGlmIChyZXN1bHRFcXVhbGl0eUNoZWNrKSB7XG4gICAgICAgIHZhciBlbnRyaWVzID0gY2FjaGUuZ2V0RW50cmllcygpO1xuICAgICAgICB2YXIgbWF0Y2hpbmdFbnRyeSA9IGVudHJpZXMuZmluZChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0RXF1YWxpdHlDaGVjayhlbnRyeS52YWx1ZSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdFbnRyeSkge1xuICAgICAgICAgIHZhbHVlID0gbWF0Y2hpbmdFbnRyeS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWNoZS5wdXQoYXJndW1lbnRzLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgbWVtb2l6ZWQuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FjaGUuY2xlYXIoKTtcbiAgfTtcblxuICByZXR1cm4gbWVtb2l6ZWQ7XG59IiwiaW1wb3J0IHsgZGVmYXVsdE1lbW9pemUsIGRlZmF1bHRFcXVhbGl0eUNoZWNrIH0gZnJvbSAnLi9kZWZhdWx0TWVtb2l6ZSc7XG5leHBvcnQgeyBkZWZhdWx0TWVtb2l6ZSwgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgfTtcblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nID8gXCJmdW5jdGlvbiBcIiArIChkZXAubmFtZSB8fCAndW5uYW1lZCcpICsgXCIoKVwiIDogdHlwZW9mIGRlcDtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZVNlbGVjdG9yIGV4cGVjdHMgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsIGJ1dCByZWNlaXZlZCB0aGUgZm9sbG93aW5nIHR5cGVzOiBbXCIgKyBkZXBlbmRlbmN5VHlwZXMgKyBcIl1cIik7XG4gIH1cblxuICByZXR1cm4gZGVwZW5kZW5jaWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lbW9pemVPcHRpb25zRnJvbUFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1lbW9pemVPcHRpb25zRnJvbUFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGNyZWF0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZnVuY3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgX3JlY29tcHV0YXRpb25zID0gMDtcblxuICAgIHZhciBfbGFzdFJlc3VsdDsgLy8gRHVlIHRvIHRoZSBpbnRyaWNhY2llcyBvZiByZXN0IHBhcmFtcywgd2UgY2FuJ3QgZG8gYW4gb3B0aW9uYWwgYXJnIGFmdGVyIGAuLi5mdW5jc2AuXG4gICAgLy8gU28sIHN0YXJ0IGJ5IGRlY2xhcmluZyB0aGUgZGVmYXVsdCB2YWx1ZSBoZXJlLlxuICAgIC8vIChBbmQgeWVzLCB0aGUgd29yZHMgJ21lbW9pemUnIGFuZCAnb3B0aW9ucycgYXBwZWFyIHRvbyBtYW55IHRpbWVzIGluIHRoaXMgbmV4dCBzZXF1ZW5jZS4pXG5cblxuICAgIHZhciBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSB7XG4gICAgICBtZW1vaXplT3B0aW9uczogdW5kZWZpbmVkXG4gICAgfTsgLy8gTm9ybWFsbHksIHRoZSByZXN1bHQgZnVuYyBvciBcIm91dHB1dCBzZWxlY3RvclwiIGlzIHRoZSBsYXN0IGFyZ1xuXG4gICAgdmFyIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTsgLy8gSWYgdGhlIHJlc3VsdCBmdW5jIGlzIGFjdHVhbGx5IGFuIF9vYmplY3RfLCBhc3N1bWUgaXQncyBvdXIgb3B0aW9ucyBvYmplY3RcblxuICAgIGlmICh0eXBlb2YgcmVzdWx0RnVuYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGRpcmVjdGx5UGFzc2VkT3B0aW9ucyA9IHJlc3VsdEZ1bmM7IC8vIGFuZCBwb3AgdGhlIHJlYWwgcmVzdWx0IGZ1bmMgb2ZmXG5cbiAgICAgIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZVNlbGVjdG9yIGV4cGVjdHMgYW4gb3V0cHV0IGZ1bmN0aW9uIGFmdGVyIHRoZSBpbnB1dHMsIGJ1dCByZWNlaXZlZDogW1wiICsgdHlwZW9mIHJlc3VsdEZ1bmMgKyBcIl1cIik7XG4gICAgfSAvLyBEZXRlcm1pbmUgd2hpY2ggc2V0IG9mIG9wdGlvbnMgd2UncmUgdXNpbmcuIFByZWZlciBvcHRpb25zIHBhc3NlZCBkaXJlY3RseSxcbiAgICAvLyBidXQgZmFsbCBiYWNrIHRvIG9wdGlvbnMgZ2l2ZW4gdG8gY3JlYXRlU2VsZWN0b3JDcmVhdG9yLlxuXG5cbiAgICB2YXIgX2RpcmVjdGx5UGFzc2VkT3B0aW9uID0gZGlyZWN0bHlQYXNzZWRPcHRpb25zLFxuICAgICAgICBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID0gX2RpcmVjdGx5UGFzc2VkT3B0aW9uLm1lbW9pemVPcHRpb25zLFxuICAgICAgICBtZW1vaXplT3B0aW9ucyA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbjIgPT09IHZvaWQgMCA/IG1lbW9pemVPcHRpb25zRnJvbUFyZ3MgOiBfZGlyZWN0bHlQYXNzZWRPcHRpb24yOyAvLyBTaW1wbGlmeWluZyBhc3N1bXB0aW9uOiBpdCdzIHVubGlrZWx5IHRoYXQgdGhlIGZpcnN0IG9wdGlvbnMgYXJnIG9mIHRoZSBwcm92aWRlZCBtZW1vaXplclxuICAgIC8vIGlzIGFuIGFycmF5LiBJbiBtb3N0IGxpYnMgSSd2ZSBsb29rZWQgYXQsIGl0J3MgYW4gZXF1YWxpdHkgZnVuY3Rpb24gb3Igb3B0aW9ucyBvYmplY3QuXG4gICAgLy8gQmFzZWQgb24gdGhhdCwgaWYgYG1lbW9pemVPcHRpb25zYCBfaXNfIGFuIGFycmF5LCB3ZSBhc3N1bWUgaXQncyBhIGZ1bGxcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGFycmF5IG9mIG9wdGlvbnMuIE90aGVyd2lzZSwgaXQgbXVzdCBiZSBqdXN0IHRoZSBfZmlyc3RfIGFyZywgYW5kIHNvXG4gICAgLy8gd2Ugd3JhcCBpdCBpbiBhbiBhcnJheSBzbyB3ZSBjYW4gYXBwbHkgaXQuXG5cbiAgICB2YXIgZmluYWxNZW1vaXplT3B0aW9ucyA9IEFycmF5LmlzQXJyYXkobWVtb2l6ZU9wdGlvbnMpID8gbWVtb2l6ZU9wdGlvbnMgOiBbbWVtb2l6ZU9wdGlvbnNdO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuICAgIHZhciBtZW1vaXplZFJlc3VsdEZ1bmMgPSBtZW1vaXplLmFwcGx5KHZvaWQgMCwgW2Z1bmN0aW9uIHJlY29tcHV0YXRpb25XcmFwcGVyKCkge1xuICAgICAgX3JlY29tcHV0YXRpb25zKys7IC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG5cbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KGZpbmFsTWVtb2l6ZU9wdGlvbnMpKTsgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuXG4gICAgdmFyIHNlbGVjdG9yID0gbWVtb2l6ZShmdW5jdGlvbiBkZXBlbmRlbmNpZXNDaGVja2VyKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFyYW1zLnB1c2goZGVwZW5kZW5jaWVzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgICAgfSAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG5cbiAgICAgIF9sYXN0UmVzdWx0ID0gbWVtb2l6ZWRSZXN1bHRGdW5jLmFwcGx5KG51bGwsIHBhcmFtcyk7XG4gICAgICByZXR1cm4gX2xhc3RSZXN1bHQ7XG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihzZWxlY3Rvciwge1xuICAgICAgcmVzdWx0RnVuYzogcmVzdWx0RnVuYyxcbiAgICAgIG1lbW9pemVkUmVzdWx0RnVuYzogbWVtb2l6ZWRSZXN1bHRGdW5jLFxuICAgICAgZGVwZW5kZW5jaWVzOiBkZXBlbmRlbmNpZXMsXG4gICAgICBsYXN0UmVzdWx0OiBmdW5jdGlvbiBsYXN0UmVzdWx0KCkge1xuICAgICAgICByZXR1cm4gX2xhc3RSZXN1bHQ7XG4gICAgICB9LFxuICAgICAgcmVjb21wdXRhdGlvbnM6IGZ1bmN0aW9uIHJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zO1xuICAgICAgfSxcbiAgICAgIHJlc2V0UmVjb21wdXRhdGlvbnM6IGZ1bmN0aW9uIHJlc2V0UmVjb21wdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTsgLy8gQHRzLWlnbm9yZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yO1xufVxuZXhwb3J0IHZhciBjcmVhdGVTZWxlY3RvciA9IC8qICNfX1BVUkVfXyAqL2NyZWF0ZVNlbGVjdG9yQ3JlYXRvcihkZWZhdWx0TWVtb2l6ZSk7XG4vLyBNYW51YWwgZGVmaW5pdGlvbiBvZiBzdGF0ZSBhbmQgb3V0cHV0IGFyZ3VtZW50c1xuZXhwb3J0IHZhciBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioc2VsZWN0b3JzLCBzZWxlY3RvckNyZWF0b3IpIHtcbiAgaWYgKHNlbGVjdG9yQ3JlYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgc2VsZWN0b3JDcmVhdG9yID0gY3JlYXRlU2VsZWN0b3I7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKFwid2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgXCIgKyB0eXBlb2Ygc2VsZWN0b3JzKSk7XG4gIH1cblxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHZhciByZXN1bHRTZWxlY3RvciA9IHNlbGVjdG9yQ3JlYXRvciggLy8gQHRzLWlnbm9yZVxuICBvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdFNlbGVjdG9yO1xufTsiLCJleHBvcnQgY29uc3QgSUNPTl9JTkZPID0ge1xuICAgIElOVEVSTkVUOiB7XG4gICAgICAgIHR5cGU6IFwiSU5URVJORVRcIixcbiAgICAgICAgZXh0ZW5zdGlvbjogXCJcIixcbiAgICAgICAgaW1nU3JjOiBcIi4vYXNzZXRzL2ljb25zL2ljb24taW50ZXJuZXQucG5nXCIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBcIuyduO2EsOuEtyDslYTsnbTsvZhcIixcbiAgICB9LFxuICAgIEZPTERFUjoge1xuICAgICAgICB0eXBlOiBcIkZPTERFUlwiLFxuICAgICAgICBleHRlbnN0aW9uOiBcIlwiLFxuICAgICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1mb2xkZXIucG5nXCIsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBcIu2PtOuNlCDslYTsnbTsvZhcIixcbiAgICB9LFxuICAgIFRYVDoge1xuICAgICAgICB0eXBlOiBcIlRYVFwiLFxuICAgICAgICBleHRlbnN0aW9uOiBcInR4dFwiLFxuICAgICAgICBpbWdTcmM6IFwiLi9hc3NldHMvaWNvbnMvaWNvbi1maWxlLWRvY3VtZW50LnBuZ1wiLFxuICAgICAgICBleHBsYW5hdGlvbjogXCLthY3siqTtirgg7YyM7J28IOyVhOydtOy9mFwiLFxuICAgIH0sXG59XG5cbi8qXG4qIOq4sOuzuCDslYTsnbTsvZgg7KCV67O0XG4qL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfSUNPTiA9IFtcbiAgICB7XG4gICAgICAgIGlkeDogMCxcbiAgICAgICAgbmFtZTogXCLsnbjthLDrhLcg7J217Iqk7ZSM66Gc65+sXCIsXG4gICAgICAgIGV4dGVuc3Rpb246IElDT05fSU5GTy5JTlRFUk5FVC5leHRlbnN0aW9uLFxuICAgICAgICB0eXBlOiBJQ09OX0lORk8uSU5URVJORVQudHlwZSxcbiAgICAgICAgaW1nU3JjOiBJQ09OX0lORk8uSU5URVJORVQuaW1nU3JjLFxuICAgICAgICBleHBsYW5hdGlvbjogSUNPTl9JTkZPLklOVEVSTkVULmV4cGxhbmF0aW9uLFxuICAgICAgICBzdHlsZTogeyBncmlkUm93U3RhcnQ6IDEsIGdyaWRDb2x1bW5TdGFydDogMSB9LFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgaWR4OiAxLFxuICAgICAgICBuYW1lOiBcIuuCtCDrrLjshJxcIixcbiAgICAgICAgZXh0ZW5zaW9uOiBJQ09OX0lORk8uRk9MREVSLmV4dGVuc3Rpb24sXG4gICAgICAgIHR5cGU6IElDT05fSU5GTy5GT0xERVIudHlwZSxcbiAgICAgICAgaW1nU3JjOiBJQ09OX0lORk8uRk9MREVSLmltZ1NyYyxcbiAgICAgICAgZXhwbGFuYXRpb246IElDT05fSU5GTy5GT0xERVIuZXhwbGFuYXRpb24sXG4gICAgICAgIHN0eWxlOiB7IGdyaWRSb3dTdGFydDogMiwgZ3JpZENvbHVtblN0YXJ0OiAxIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkeDogMixcbiAgICAgICAgbmFtZTogXCLtjIzsnbwudHh0XCIsXG4gICAgICAgIGV4dGVuc2lvbjogSUNPTl9JTkZPLlRYVC5leHRlbnN0aW9uLFxuICAgICAgICB0eXBlOiBJQ09OX0lORk8uVFhULnR5cGUsXG4gICAgICAgIGltZ1NyYzogSUNPTl9JTkZPLlRYVC5pbWdTcmMsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBJQ09OX0lORk8uVFhULmV4cGxhbmF0aW9uLFxuICAgICAgICBzdHlsZTogeyBncmlkUm93U3RhcnQ6IDMsIGdyaWRDb2x1bW5TdGFydDogMSB9LFxuICAgIH0sXG5dXG4iLCJpbXBvcnQgSWNvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9jb21tb24vSWNvbnNcIjtcblxuZnVuY3Rpb24gQ29udGFpbmVyKCkge1xuICAgIHJldHVybiAoYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAke0ljb25zKCl9XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwic3RhdHVzLWNvbnRhaW5lclwiIGFyaWEtbGFiZWw9XCLtlZjri6gg7IOB7YOcIOywvVwiPjwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7IiwiaW1wb3J0IHsgdXNlRXZlbnRzLCB1c2VTdGF0ZSB9IGZyb20gXCIuLi8uLi9jb3JlL0N1c3RvbVJlYWN0XCI7XG5pbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuaW1wb3J0IHsgSUNPTl9JTkZPLCBERUZBVUxUX0lDT04gfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL2NvbXBvbmVudHMvY29tbW9uL2ljb25cIjtcbmltcG9ydCBXaW5kb3dNb2RhbCBmcm9tIFwiLi9XaW5kb3dNb2RhbFwiO1xuaW1wb3J0IGljb25SZWR1Y2VyIGZyb20gXCIuLi8uLi9yZWR1Y2VyL2ljb25zL2ljb25zUmVkdWNlclwiO1xuaW1wb3J0IHsgZm9jdXNJY29uIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXIvaWNvbnMvYWN0aW9uXCI7XG5cbi8qXG4qIOyVhOydtOy9mCDsu7Ttj6zrhIztirhcbiovXG5mdW5jdGlvbiBJY29ucyAoKSB7XG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7IHJlZHVjZXI6IGljb25SZWR1Y2VyIH0pO1xuICAgIGNvbnN0IFtpY29ucywgc2V0SWNvbnNdID0gdXNlU3RhdGUoXCJJY29uc1wiLCBERUZBVUxUX0lDT04pO1xuICAgIGNvbnN0IFttb2RhbHMsIHNldE1vZGFsc10gPSB1c2VTdGF0ZShcIkljb25zXCIsIFtdKTtcblxuICAgIC8qXG4gICAgKiDsnbTrsqTtirgg65Ox66GdXG4gICAgKi9cbiAgICBjb25zdCBpY29uQ2xpY2tFdmVudCA9ICgpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIOydtOuypO2KuCDqtIDroKgg66mU7ISc65OcXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGljb25BcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuZGVmYXVsdC1pY29uXCIpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICog7JWE7J207L2YIOydtOumhCDqtIDroKggKOydtOumhOydtCDquLgg6rK97JqwIO2BtOumrSDsi5zsl5Ag7ZKA64Sk7J6EKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBhYmJyZXZpYXRlSWNvbk5hbWUgPSAodjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb25GaWdjYXB0aW9uID0gdi5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcblxuICAgICAgICAgICAgY29uc3QgZnVsbEljb25OYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IHNob3J0TmFtZSA9IGAke2Z1bGxJY29uTmFtZS5zdWJzdHJpbmcoMCwgOCl9Li4uYDtcblxuICAgICAgICAgICAgaWYgKGZ1bGxJY29uTmFtZS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gc2hvcnROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hvd0Z1bGxJY29uTmFtZSA9ICh2OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuICAgICAgICAgICAgY29uc3QgZnVsbEljb25OYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTDtcblxuICAgICAgICAgICAgaWYgKGZ1bGxJY29uTmFtZS5sZW5ndGggPiA4KSB7XG4gICAgICAgICAgICAgICAgaWNvbkZpZ2NhcHRpb24uaW5uZXJIVE1MID0gZnVsbEljb25OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiDslYTsnbTsvZgg7YG066atIO2BtOuemOyKpCDqtIDroKggKO2BtOumreuQmOyXiOydhCDrlYwgY2xpY2tlZCDtgbTrnpjsiqQg7LaU6rCAKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBpbkZvY3VzSWNvbiA9ICh2OiBFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB2LmNsYXNzTGlzdC5hZGQoJ2NsaWNrZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG91dEZvY3VzSWNvbnMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHYuY2xhc3NMaXN0LnZhbHVlLmluY2x1ZGVzKCdjbGlja2VkJykgKSB7XG4gICAgICAgICAgICAgICAgICAgIHYuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICBhYmJyZXZpYXRlSWNvbk5hbWUodik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIOyVhOydtOy9mCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGljb25BcmVhLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGZvY3VzSWNvbihpY29uc1swXSkpO1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgICAgICBpbkZvY3VzSWNvbih2KTtcbiAgICAgICAgICAgICAgICBzaG93RnVsbEljb25OYW1lKHYpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICAvLyAyLiDslYTsnbTsvZgg7Jm467aAIO2ZlOuptCDtgbTrpq3tlojsnYQg65WMXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG91dEZvY3VzSWNvbnMoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3JlLmdldFN0YXRlKClcIiwgc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMy4g7JWE7J207L2YIOuTnOuemOq3uCDsnbTrsqTtirggKC5kZWZhdWx0LWljb24gZHJhZ3N0YXJ0IC0+IGRvY3VtZW50IGRyYWdvdmVyICYgZHJvcClcbiAgICAgICAgLy8gVE9ETy4g7YyM7J28IOyVhOydtOy9mOydtCDtj7TrjZQg7JyE66GcIOydtOuPmeuQoCDqsr3smrAg7Y+0642UIOyViOycvOuhnCDsnbTrj5nrkJjrj4TroZ0g7IiY7KCVXG4gICAgICAgIC8vIFRPRE8uIOyVhOydtOy9mOuBvOumrCDqsrnsuZjsp4Ag7JWK64+E66GdIOyImOyglVxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChkcmFnc3RhcnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOyVhOydtOy9mCBpbmRleFxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25JZHggPSBOdW1iZXIucGFyc2VJbnQodi5nZXRBdHRyaWJ1dGUoXCJpZFwiKT8uc3BsaXQoXCItXCIpWzFdIHx8ICcwJyk7XG5cbiAgICAgICAgICAgICAgICAvLyDtlZjrgpjsnZggZ3JpZCBhcmVh7J2YIOqwgOuhnC/shLjroZxcbiAgICAgICAgICAgICAgICBjb25zdCBPTkVfR1JJRF9BUkVBX1dJRFRIID0gODA7XG4gICAgICAgICAgICAgICAgY29uc3QgT05FX0dSSURfQVJFQV9IRUlHSFQgPSAxMDA7XG5cbiAgICAgICAgICAgICAgICAvLyDquLDsobQg7JWE7J207L2YIOq3uOumrOuTnCBjb2x1bW4sIHJvdyDsi5zsnpHsoJBcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2R3JpZENvbHVtblN0YXJ0ID0gTnVtYmVyLnBhcnNlSW50KHYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2R3JpZFJvd1N0YXJ0ID0gTnVtYmVyLnBhcnNlSW50KHYuc3R5bGUuZ3JpZFJvd1N0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg7JyE7LmYXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkljb25Qb3MgPSBbZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WCwgZHJhZ3N0YXJ0RXZlbnQuY2xpZW50WV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIikgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uRGl2ID0gZ2V0RHJhZ0ljb25FbCh2KTtcblxuICAgICAgICAgICAgICAgIGxldCBzaGlmdFggPSBkcmFnc3RhcnRFdmVudC5jbGllbnRYIC0gdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgIGxldCBzaGlmdFkgPSBkcmFnc3RhcnRFdmVudC5jbGllbnRZIC0gdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgICAgICAgICAgICAgICBkcmFnc3RhcnRFdmVudC5kYXRhVHJhbnNmZXI/LnNldERyYWdJbWFnZShpY29uRGl2LCBzaGlmdFgsIHNoaWZ0WSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJhZ3N0YXJ0RXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdzdGFydEV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ292ZXJGbiA9IChkcmFnb3ZlckV2ZW50OiBEcmFnRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHJhZ292ZXJFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJGbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChkcm9wRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHJvcEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8g7YG066atKG1vdXNlZG93bikg7J2067Kk7Yq46rCAIOyggeyaqeuQnCDsl5jrpqzrqLztirjrp4wg7J2064+ZXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LmNsYXNzTGlzdC52YWx1ZS5pbmNsdWRlcygnY2xpY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrk5zrnpjqt7jqsIAg64Gd64KcIO2bhCDslYTsnbTsvZgg7JyE7LmYXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJJY29uUG9zID0gW2Ryb3BFdmVudC5jbGllbnRYLCBkcm9wRXZlbnQuY2xpZW50WV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDslYTsnbTsvZgg6re466as65OcIOyijO2RnOyXkOyEnCDrqocg66eM7YG8IOybgOyngeyYgOuKlOyngFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aW5nQ29vcmRpbmF0ZXNYID0gTnVtYmVyLnBhcnNlSW50KCgoY3VySWNvblBvc1swXSAtIHByZXZJY29uUG9zWzBdKSAvIE9ORV9HUklEX0FSRUFfV0lEVEgpLnRvRml4ZWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZpbmdDb29yZGluYXRlc1kgPSBOdW1iZXIucGFyc2VJbnQoKChjdXJJY29uUG9zWzFdIC0gcHJldkljb25Qb3NbMV0pIC8gT05FX0dSSURfQVJFQV9IRUlHSFQpLnRvRml4ZWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuTnOuemOq3uOqwgCDrgZ3rgpwg7ZuEIGNvbHVtbiwgcm93IOyLnOyekeygkFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JpZENvbHVtblN0YXJ0ID0gcHJldkdyaWRDb2x1bW5TdGFydCArIG1vdmluZ0Nvb3JkaW5hdGVzWDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRSb3dTdGFydCA9IHByZXZHcmlkUm93U3RhcnQgKyBtb3ZpbmdDb29yZGluYXRlc1k7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0geyBncmlkUm93U3RhcnQsIGdyaWRDb2x1bW5TdGFydCB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJY29ucyA9IFsuLi5pY29uc107XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJY29uc1tpY29uSWR4XSA9IHsuLi5pY29uc1tpY29uSWR4XSwgc3R5bGUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEljb25zKG5ld0ljb25zKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnb3ZlckZuKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGljb25EaXYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gNC4g7JWE7J207L2YIOuNlOu4lO2BtOumreydtOuypO2KuFxuICAgICAgICBpY29uQXJlYS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB2LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZNb2RhbHMgPSBtb2RhbHM7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxJZHggPSBwcmV2TW9kYWxzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGljb25JbWcgPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmF0dHJpYnV0ZXNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nU3JjID0gaWNvbkltZy5ub2RlVmFsdWUgfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHYuZGF0YXNldC5pY29uTmFtZSB8fCBpY29uRmlnY2FwdGlvbi5pbm5lckhUTUwgfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwbGFuYXRpb24gPSB2LmRhdGFzZXQuaWNvbkV4cGxhbmF0aW9uIHx8IG5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWR4OiBOdW1iZXIucGFyc2VJbnQodi5nZXRBdHRyaWJ1dGUoXCJpZFwiKT8uc3BsaXQoXCItXCIpWzFdIHx8ICcwJyksXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYyxcbiAgICAgICAgICAgICAgICAgICAgZXhwbGFuYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGdyaWRDb2x1bW5TdGFydDogTnVtYmVyLnBhcnNlSW50KHYuc3R5bGUuZ3JpZENvbHVtblN0YXJ0KSwgZ3JpZFJvd1N0YXJ0OiBOdW1iZXIucGFyc2VJbnQodi5zdHlsZS5ncmlkUm93U3RhcnQpIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2luZG93TW9kYWwgPSBXaW5kb3dNb2RhbCh7aWNvbiwgbW9kYWxJZHh9KTtcblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3dNb2RhbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdNb2RhbHMgPSBbLi4ucHJldk1vZGFscywgd2luZG93TW9kYWxdO1xuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbHMobmV3TW9kYWxzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGFkZEljb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZEljb25CdG5cIik7XG4gICAgICAgIGFkZEljb25CdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SWNvbiA9IHtcbiAgICAgICAgICAgICAgICBpZHg6IGljb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIu2MjOydvC50eHRcIixcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IElDT05fSU5GTy5UWFQuZXh0ZW5zdGlvbixcbiAgICAgICAgICAgICAgICB0eXBlOiBJQ09OX0lORk8uVFhULnR5cGUsXG4gICAgICAgICAgICAgICAgaW1nU3JjOiBJQ09OX0lORk8uVFhULmltZ1NyYyxcbiAgICAgICAgICAgICAgICBleHBsYW5hdGlvbjogSUNPTl9JTkZPLlRYVC5leHBsYW5hdGlvbixcbiAgICAgICAgICAgICAgICBzdHlsZToge2dyaWRSb3dTdGFydDogaWNvbnMubGVuZ3RoICsgMSwgZ3JpZENvbHVtblN0YXJ0OiAxfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZXRJY29ucyhbLi4uaWNvbnMsIG5ld0ljb25dKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgdXNlRXZlbnRzKFtpY29uQ2xpY2tFdmVudF0pO1xuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDrk5zrnpjqt7gg7ZWgIOuVjCDsnbTrr7jsp4BcbiAgICAqL1xuICAgIGNvbnN0IGdldERyYWdJY29uRWwgPSAodjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3Qgcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpIHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgICAgY29uc3QgaWNvbkltZyA9IHYuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uYXR0cmlidXRlc1swXTtcbiAgICAgICAgY29uc3QgaWNvbkZpZ2NhcHRpb24gPSB2LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdO1xuXG4gICAgICAgIGNvbnN0IGltZ1NyYyA9IGljb25JbWcubm9kZVZhbHVlIHx8ICcnO1xuICAgICAgICBjb25zdCBuYW1lID0gdi5kYXRhc2V0Lmljb25OYW1lIHx8IGljb25GaWdjYXB0aW9uLmlubmVySFRNTCB8fCAnJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGljb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBpY29uRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWZhdWx0LWljb25cIik7XG4gICAgICAgIGljb25EaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgIGljb25EaXYuc3R5bGUud2lkdGggPSBcIjgwcHhcIjtcbiAgICAgICAgaWNvbkRpdi5pbm5lckhUTUwgPSBnZXREcmFnSWNvbklubmVyRWxlbShuYW1lLCBpbWdTcmMpO1xuXG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChpY29uRGl2KTtcblxuICAgICAgICByZXR1cm4gaWNvbkRpdjtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREcmFnSWNvbklubmVyRWxlbSA9IChpY29uTmFtZTogc3RyaW5nLCBpY29uSW1hZ2VTcmM6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gKGBcbiAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ljb25JbWFnZVNyY31cIiBkcmFnZ2FibGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPiR7aWNvbk5hbWV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgICAgPC9idXR0b24+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLypcbiAgICAqIOyVhOydtOy9mCDsu7Ttj6zrhIztirggXG4gICAgKi9cbiAgICBjb25zdCBpY29uVGVtcGxhdGUgPSAoaWNvbjogSUljb25zLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIChgXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD1cImljb24tJHtpY29uLmlkeH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZGVmYXVsdC1pY29uXCJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBkYXRhLWljb24tbmFtZT1cIiR7aWNvbi5uYW1lfVwiXG4gICAgICAgICAgICAgICAgYXJpYS1pY29uLWV4cGxhbmF0aW9uPVwiJHtpY29uLmV4cGxhbmF0aW9ufVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7aWNvbi5leHBsYW5hdGlvbn1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZ3JpZC1jb2x1bW4tc3RhcnQ6ICR7aWNvbi5zdHlsZS5ncmlkQ29sdW1uU3RhcnR9O2dyaWQtcm93LXN0YXJ0OiAke2ljb24uc3R5bGUuZ3JpZFJvd1N0YXJ0fTtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aWNvbi5pbWdTcmN9XCIgZHJhZ2dhYmxlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUuc3Vic3RyaW5nKDAsIDgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpY29uLm5hbWUubGVuZ3RoID4gOCA/ICcuLi4nIDogJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgYDxvbFxuICAgICAgICAgICAgY2xhc3M9XCJtYWluLXNjcmVlbi1jb250YWluZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIuuwlO2Dle2ZlOuptFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICR7aWNvbnMubWFwKChpY29uOiBJSWNvbnMsIGk6IG51bWJlcikgPT4gaWNvblRlbXBsYXRlKGljb24sIGkpKS5qb2luKCcnKX1cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGRJY29uQnRuXCI+7LaU6rCAPC9idXR0b24+XG4gICAgICAgIDwvb2w+XG4gICAgICAgICR7bW9kYWxzLm1hcCgobW9kYWw6IHN0cmluZykgPT4gbW9kYWwpLmpvaW4oJycpfWBcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25zO1xuIiwiaW1wb3J0IHsgdXNlRXZlbnRzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcIi4uLy4uL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCB7IElJY29ucyB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29uc1wiO1xuXG5pbnRlcmZhY2UgSVdpbmRvd01vZGFsIHtcbiAgICBpY29uOiBJSWNvbnM7XG4gICAgbW9kYWxJZHg6IG51bWJlcjtcbiAgICBtYWluPzogRWxlbWVudDtcbiAgICBmb290ZXI/OiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBXaW5kb3dNb2RhbCAoe2ljb24sIG1vZGFsSWR4LCBtYWluLCBmb290ZXJ9OiBJV2luZG93TW9kYWwpIHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB0cnVlKTtcbiAgICBjb25zdCBbbW9kYWxJbmRleCwgc2V0TW9kYWxJbmRleF0gPSB1c2VTdGF0ZShcIldpbmRvd01vZGFsXCIsIG1vZGFsSWR4KTtcbiAgICBcbiAgICBjb25zdCBbbW9kYWxTaXplLCBzZXRNb2RhbFNpemVdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB7IHdpZHRoOiA0MDAsIGhlaWdodDogMzAwIH0pO1xuICAgIGNvbnN0IFttb2RhbFRyYW5zbGF0ZSwgc2V0TW9kYWxUcmFuc2xhdGVdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCB7IFg6IDQwMCwgWTogNDAwIH0pO1xuXG4gICAgY29uc3QgW2lzRnVsbFNpemUsIHNldElzRnVsbFNpemVdID0gdXNlU3RhdGUoXCJXaW5kb3dNb2RhbFwiLCBmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1vZGFsSWR4XCIsIG1vZGFsSWR4KTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFRyYW5zbGF0ZSA9IHsgWDogbW9kYWxUcmFuc2xhdGUuWCArIDIwICogbW9kYWxJZHgsIFk6IG1vZGFsVHJhbnNsYXRlLlkgKyAyMCAqIG1vZGFsSWR4IH07XG4gICAgICAgIHNldE1vZGFsVHJhbnNsYXRlKGRlZmF1bHRUcmFuc2xhdGUpO1xuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy9cbiAgICB9LCBbbW9kYWxTaXplLndpZHRoLCBtb2RhbFNpemUuaGVpZ2h0LCBtb2RhbFRyYW5zbGF0ZS5YLCBtb2RhbFRyYW5zbGF0ZS5ZXSlcblxuICAgIGNvbnN0IG1vZGFsQ29tbW9uRXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1pbmltaXplQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW5pbWl6ZUJ0blwiKTtcbiAgICAgICAgY29uc3QgbWF4aW1pemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21heGltaXplQnRuXCIpO1xuICAgICAgICBjb25zdCByZXN0b3JlRG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzdG9yZURvd25CdG5cIik7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZUJ0blwiKTtcblxuICAgICAgICBpZiAobWF4aW1pemVCdG4pIHtcbiAgICAgICAgICAgIG1heGltaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgICAgICAgICAgICAgIHNldElzRnVsbFNpemUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3RvcmVEb3duQnRuKSB7XG4gICAgICAgICAgICByZXN0b3JlRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICBzZXRJc0Z1bGxTaXplKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xvc2VCdG4pIHtcbiAgICAgICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2UgTW9kYWxJZHhcIiwgbW9kYWxJbmRleCk7XG4gICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgdXNlRXZlbnRzKFttb2RhbENvbW1vbkV2ZW50XSk7XG5cbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBgPGRpdlxuICAgICAgICAgICAgICAgIGlkPVwid2luZG93LW1vZGFsLSR7bW9kYWxJbmRleH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwid2luZG93LW1vZGFsXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAke21vZGFsU2l6ZS53aWR0aH1weDsgaGVpZ2h0OiAke21vZGFsU2l6ZS5oZWlnaHR9cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlKCR7bW9kYWxUcmFuc2xhdGUuWH1weCwgJHttb2RhbFRyYW5zbGF0ZS5ZfXB4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlciBzdG9wLWRyYWdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aWNvbi5pbWdTcmN9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXItbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2ljb24ubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwibWluaW1pemVCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndpbmRvdy1taW5pbWl6ZTwvdGl0bGU+PHBhdGggZD1cIk0yMCwxNEg0VjEwSDIwXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpc0Z1bGxTaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnPGJ1dHRvbiBpZD1cInJlc3RvcmVEb3duQnRuXCI+PHN2ZyBzdHlsZT1cIndpZHRoOiAxNnB4O2hlaWdodDogMTZweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5kb2NrLXdpbmRvdzwvdGl0bGU+PHBhdGggZD1cIk0xOCAxOFYyMEg0QTIgMiAwIDAgMSAyIDE4VjhINFYxOE0yMiA2VjE0QTIgMiAwIDAgMSAyMCAxNkg4QTIgMiAwIDAgMSA2IDE0VjZBMiAyIDAgMCAxIDggNEgyMEEyIDIgMCAwIDEgMjIgNk0yMCA2SDhWMTRIMjBaXCIgLz48L3N2Zz48L2J1dHRvbj4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnPGJ1dHRvbiBpZD1cIm1heGltaXplQnRuXCI+PHN2ZyBzdHlsZT1cIndpZHRoOiAxNnB4O2hlaWdodDogMTZweDtcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5zcXVhcmUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0zLDNIMjFWMjFIM1YzTTUsNVYxOUgxOVY1SDVaXCIgLz48L3N2Zz48L2J1dHRvbj4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2VCdG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6IDE2cHg7aGVpZ2h0OiAxNnB4O1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndpbmRvdy1jbG9zZTwvdGl0bGU+PHBhdGggZD1cIk0xMy40NiwxMkwxOSwxNy41NFYxOUgxNy41NEwxMiwxMy40Nkw2LjQ2LDE5SDVWMTcuNTRMMTAuNTQsMTJMNSw2LjQ2VjVINi40NkwxMiwxMC41NEwxNy41NCw1SDE5VjYuNDZMMTMuNDYsMTJaXCIgLz48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8bWFpbj48L21haW4+XG4gICAgICAgICAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PmBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGAke2lzT3BlbiA/IG1vZGFsQ29udGVudCgpIDogJyd9YFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2luZG93TW9kYWw7IiwiLypcbiog66as7JWh7Yq4IGhvb2tzIOqwhOuLqO2eiCDqtaztmIRcbiovXG5mdW5jdGlvbiBDdXN0b21SZWFjdCAoKSB7XG4gICAgbGV0IHJvb3Q6IEVsZW1lbnQgfCBhbnkgPSBudWxsO1xuICAgIGxldCByb290Q29tcG9uZW50OiBFbGVtZW50IHwgYW55ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBjdXJTdGF0ZXNJZHggPSBuZXcgTWFwKCk7XG5cbiAgICBsZXQgZXZlbnRzOiBBcnJheTxGdW5jdGlvbj4gPSBbXTtcblxuICAgIGxldCBtb3VudEVmZmVjdHM6IEFycmF5PEZ1bmN0aW9uPiA9IFtdO1xuXG4gICAgY29uc3QgZWZmZWN0RGVwZW5kZW5jaWVzOiBhbnlbXSA9IFtdO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgY3VyRWZmZWN0SWR4OiAwLFxuICAgICAgICByZW5kZXJDb3VudDogMCxcbiAgICB9XG5cbiAgICAvKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3NcbiAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDEuIHJlbmRlclxuICAgICogcmVuZGVyOiByb2906rCAIOuQmOuKlCDsl5jrpqzrqLztirjrpbwg66CM642U66eB7ZWY64qUIOuplOyEnOuTnFxuICAgICovXG4gICAgY29uc3QgcmVuZGVyID0gKHJvb3RFbDogRWxlbWVudCB8IGFueSwgcm9vdENvbXBvbmVudEVsOiBFbGVtZW50IHwgYW55KSA9PiB7XG4gICAgICAgIGlmIChyb290RWwpIHtcbiAgICAgICAgICAgIHJvb3QgPSByb290RWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdENvbXBvbmVudEVsKSB7XG4gICAgICAgICAgICByb290Q29tcG9uZW50ID0gcm9vdENvbXBvbmVudEVsO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBfcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAqIEN1c3RvbVJlYWN0IGhvb2tzIDIuIHVzZUV2ZW50c1xuICAgICogdXNlRXZlbnRzOiDsu7Ttj6zrhIztirjrpbwg66qo65GQIOugjOuNlOunge2VnCDtm4Qg7J2067Kk7Yq466W8IOuTseuhne2VoCDsiJgg7J6I64+E66GdIOuPhOyZgOyjvOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUV2ZW50cyA9IChldmVudEZuczogQXJyYXk8RnVuY3Rpb24+KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VFdmVudHMnLCBldmVudEZucyk7XG4gICAgICAgIGV2ZW50cyA9IFsuLi5ldmVudHMsIC4uLmV2ZW50Rm5zXTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICogQ3VzdG9tUmVhY3QgaG9va3MgMy4gdXNlU3RhdGVcbiAgICAqIHVzZVN0YXRlOiBzdGF0ZSDqtIDrpqztlZjrj4TroZ0g64+E7JmA7KO864qUIOuplOyEnOuTnFxuICAgICog7YG066Gc7KCAKO2VqOyImCDshKDslrjsi5zsnZgg7Iqk7L2U7ZSE66W8IOq4sOyWte2VmOuKlCDsnpDrsJTsiqTtgazrpr3tirjsnZgg7Yq57KeVKeulvCDtmZzsmqlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWxsZXIgdXNlU3RhdGXrpbwg7Zi47Lac7ZWcIOy7tO2PrOuEjO2KuCjtlajsiJgp66qFXG4gICAgKiBAcGFyYW0ge2FueX0gaW5pdFN0YXRlIOy0iOq4sO2ZlO2VoCBzdGF0ZVxuICAgICovXG4gICAgY29uc3QgdXNlU3RhdGUgPSAoY2FsbGVyOiBzdHJpbmcsIGluaXRTdGF0ZTogYW55KSA9PiB7XG4gICAgICAgIGlmICghc3RhdGVzLmdldChjYWxsZXIpKSB7XG4gICAgICAgICAgICBzdGF0ZXMuc2V0KGNhbGxlciwgW10pO1xuICAgICAgICAgICAgY3VyU3RhdGVzSWR4LnNldChjYWxsZXIsIDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1clN0YXRlSWR4ID0gY3VyU3RhdGVzSWR4LmdldChjYWxsZXIpO1xuXG4gICAgICAgIGlmICghc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSkge1xuICAgICAgICAgICAgc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSA9IGluaXRTdGF0ZTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlcy5nZXQoY2FsbGVyKVtjdXJTdGF0ZUlkeF07XG5cbiAgICAgICAgY29uc3Qgc2V0U3RhdGUgPSAobmV3U3RhdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RhdGVzLmdldChjYWxsZXIpW2N1clN0YXRlSWR4XSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldFN0YXRlJywgY2FsbGVyLCBjdXJTdGF0ZUlkeCwgbmV3U3RhdGUpO1xuXG4gICAgICAgICAgICBfcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJTdGF0ZXNJZHguc2V0KGNhbGxlciwgY3VyU3RhdGVJZHggKyAxKTtcbiAgICAgICAgcmV0dXJuIFsgc3RhdGUsIHNldFN0YXRlIF07XG4gICAgfVxuXG4gICAgLyogXG4gICAgKiBDdXN0b21SZWFjdCBob29rcyA0LiB1c2VFZmZlY3RcbiAgICAqIHVzZUVmZmVjdDogZGVwZW5kZW5jeSDrsLDsl7TsnZgg6rCS65Ok7JeQIOuzgOqyveydtCDsg53qsrzsnYQg6rK97JqwIGNhbGxiYWNr7J2EIOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IHVzZUVmZmVjdCA9IChjYWxsYmFjazogRnVuY3Rpb24sIGRlcGVuZGVuY2llczogQXJyYXk8YW55PikgPT4ge1xuICAgICAgICAvLyAxLiBkZXBlbmRlbmN56rCAIOyXhuydhCDqsr3smrAgY2FsbGJhY2sg67CU66GcIOyLpO2WiSAobW91bnQg65CY7JeI7J2EIOuVjCDsi6TtlokpXG4gICAgICAgIC8vIGV4LiB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxuICAgICAgICBpZiAoZGVwZW5kZW5jaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbW91bnRFZmZlY3RzLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyAyLiBkZXBlbmRlbmN56rCAIOyeiOydhCDqsr3smrAgZGVwZW5kZW5jeSDrs4Dqsr0g7Iuc7JeQ66eMIGNhbGxiYWNrIOyLpO2WiVxuICAgICAgICAvLyBleC4gdXNlRWZmZWN0KCgpID0+IHt9LCBbYSwgYiwgLi4uLCB6XSlcbiAgICAgICAgY29uc3QgeyBjdXJFZmZlY3RJZHggfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgaWYgKGVmZmVjdERlcGVuZGVuY2llcy5sZW5ndGggPT09IGN1ckVmZmVjdElkeCkge1xuICAgICAgICAgICAgZWZmZWN0RGVwZW5kZW5jaWVzLnB1c2goZGVwZW5kZW5jaWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImVmZmVjdERlcGVuZGVuY2llc1wiLCBlZmZlY3REZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XTtcblxuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIC8vIEFycmF5LnByb3RvdHlwZS5zb21lOiDtjJDrs4Qg7ZWo7IiYIOyggeyWtOuPhCDtlZjrgpjrnbzrj4Qg7Ya16rO87ZWY64qU7KeAIOyytO2BrFxuICAgICAgICAgICAgLy8gT2JqZWN0LmlzOiDrkZAg6rCc7J2YIO2MjOudvOuvuO2EsOqwgCDrj5nsnbztlZzsp4Ag7LK07YGsXG4gICAgICAgICAgICAvLyDspoksIOq4sOyhtCBkZXBlbmRlbmN57JmAIOyDiOuhnCDrsJvsnYAgZGVwZW5kZW5jeSDsgqzsnbTsl5Ag7LCo7J206rCAIO2VmOuCmOudvOuPhCDsnojripQg6rK97JqwIHRydWXrpbwg67CY7ZmYXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZGVwZW5kZW5jaWVzLnNvbWUoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIU9iamVjdC5pcyh2LCBkZXBlbmRlbmN5W2ldKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJoYXNDaGFuZ2VkXCIsIGhhc0NoYW5nZWQpO1xuXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICBlZmZlY3REZXBlbmRlbmNpZXNbY3VyRWZmZWN0SWR4XSA9IGRlcGVuZGVuY2llcztcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmN1ckVmZmVjdElkeCArPSAxO1xuICAgIH1cblxuICAgIC8qXG4gICAgKiBDdXN0b21SZWFjdCDrgrTrtoAg7ZWo7IiYXG4gICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKiBkZWJvdW5jZUZyYW1lOiAx7LSI64u5IOuUlOyKpO2UjOugiOydtCDso7zsgqzsnKjrp4ztgbwg7Iuk7ZaJ7ZWY6rKMIO2VmOyXrCDsp4DrgpjsuZwg66CM642U66eB7J2EIOuwqeyngO2VmOq4sCDsnITtlZwg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBkZWJvdW5jZUZyYW1lID0gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjaykgPT4ge1xuICAgICAgICBsZXQgbmV4dEZyYW1lQ2FsbGJhY2sgPSAtMTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShuZXh0RnJhbWVDYWxsYmFjayk7XG4gICAgICAgICAgbmV4dEZyYW1lQ2FsbGJhY2sgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICAvKlxuICAgICogcmVnaXN0ZXJFdmVudHM6IOydtOuypO2KuCDtlajsiJgg65Ox66Gd7J2EIOychO2VtCDsi6TtlontlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCByZWdpc3RlckV2ZW50cyA9ICgpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnRzJywgZXZlbnRzKTtcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudEZuKSA9PiBldmVudEZuKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAqIGV4ZWN1dGVNb3VudEVmZmVjdHM6IG1vdW50IOyLnCDsi6TtlontlaAg66mU7ISc65Oc65Ok7J2EIOyLpO2Wie2VmOuKlCDrqZTshJzrk5xcbiAgICAqL1xuICAgIGNvbnN0IGV4ZWN1dGVNb3VudEVmZmVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGlmIChtb3VudEVmZmVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWN1dGVNb3VudEVmZmVjdHMnLCBtb3VudEVmZmVjdHMpO1xuICAgICAgICAgICAgbW91bnRFZmZlY3RzLmZvckVhY2goKG1vdW50RWZGbikgPT4gbW91bnRFZkZuKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAqIF9yZW5kZXI6IOyLpOyniOyggeycvOuhnCDrpqzslaHtirgg64K067aA7JeQ7IScIOugjOuNlOungeydhCDri7Tri7ntlZjripQg66mU7ISc65OcXG4gICAgKi9cbiAgICBjb25zdCBfcmVuZGVyID0gZGVib3VuY2VGcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICghcm9vdCB8fCAhcm9vdENvbXBvbmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g7ZmU66m0IOugjOuNlOungVxuICAgICAgICByb290LmlubmVySFRNTCA9IHJvb3RDb21wb25lbnQoKTtcblxuICAgICAgICAvLyDsnbTrsqTtirgg65Ox66GdXG4gICAgICAgIHJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgICAgIC8vIOuniOyatO2KuCDsi5wg7Iuk7ZaJ7Iuc7YKsIOy9nOuwsSDtlajsiJgg7Iuk7ZaJXG4gICAgICAgIGV4ZWN1dGVNb3VudEVmZmVjdHMoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOuzgOyImCDstIjquLDtmZRcbiAgICAgICAgY29uc3QgY2FsbGVyc05hbWUgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCBfXSBvZiBzdGF0ZXMpIHtcbiAgICAgICAgICAgIGNhbGxlcnNOYW1lLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsZXJzTmFtZS5mb3JFYWNoKChjYWxsZXIpID0+IHtcbiAgICAgICAgICAgIGN1clN0YXRlc0lkeC5zZXQoY2FsbGVyLCAwKTtcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGVzLmVudHJpZXMoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1clN0YXRlc0lkeC5lbnRyaWVzKCkpO1xuXG4gICAgICAgIG9wdGlvbnMuY3VyRWZmZWN0SWR4ID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coJ19yZW5kZXIgY3VyRWZmZWN0SWR4Jywgb3B0aW9ucy5jdXJFZmZlY3RJZHgpO1xuXG4gICAgICAgIGV2ZW50cyA9IFtdO1xuICAgICAgICBtb3VudEVmZmVjdHMgPSBbXTtcblxuICAgICAgICAvLyDroIzrjZTrp4Eg7Zqf7IiYIO2ZleyduFxuICAgICAgICBvcHRpb25zLnJlbmRlckNvdW50ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKCdfcmVuZGVyIHJlbmRlckNvdW50Jywgb3B0aW9ucy5yZW5kZXJDb3VudCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xufVxuXG5cbmNvbnN0IHsgcmVuZGVyLCB1c2VFdmVudHMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IEN1c3RvbVJlYWN0KCk7XG5leHBvcnQgeyByZW5kZXIsIHVzZUV2ZW50cywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21SZWFjdDsiLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IEZPQ1VTX0lDT04gfSBmcm9tIFwiLi9hY3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXMvY29tcG9uZW50cy9jb21tb24vaWNvbnNcIjtcblxuZXhwb3J0IGNvbnN0IGZvY3VzSWNvbiA9IGNyZWF0ZUFjdGlvbjxJSWNvbnMsIHN0cmluZz4oRk9DVVNfSUNPTik7IiwiZXhwb3J0IGNvbnN0IEZPQ1VTX0lDT04gPSAnSUNPTi9GT0NVU19JQ09OJyBhcyBjb25zdDsiLCJpbXBvcnQge2NyZWF0ZVJlZHVjZXIsIFBheWxvYWRBY3Rpb259IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHtmb2N1c0ljb259IGZyb20gXCIuL2FjdGlvblwiO1xuaW1wb3J0IHtHbG9iYWxTdGF0ZSwgUm9vdFJlZHVjZXJTdGF0ZX0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcmVkdWNlcic7XG5pbXBvcnQgeyBJSWNvbnMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9jb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZm9jdXNlZEljb25zOiB7fSxcbn1cblxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0YXRlU2VsZWN0b3IgPSAoc3RhdGU6IFJvb3RSZWR1Y2VyU3RhdGUpOiBHbG9iYWxTdGF0ZSA9PiB7XG4gIHJldHVybiBzdGF0ZS5nbG9iYWxSZWR1Y2VyO1xufTtcblxuY29uc3QgaWNvbnNSZWR1Y2VyID0gY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIGJ1aWxkZXIgPT5cbiAgYnVpbGRlci5hZGRDYXNlKFxuICAgIGZvY3VzSWNvbixcbiAgICAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJSWNvbnM+KSA9PiB7XG4gICAgICBzdGF0ZS5mb2N1c2VkSWNvbnMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9XG4gIClcbilcblxuZXhwb3J0IGRlZmF1bHQgaWNvbnNSZWR1Y2VyO1xuXG4vLyB7XG4vLyAgIG5hbWU6ICdpY29ucycsXG4vLyAgIGluaXRpYWxTdGF0ZSxcbi8vICAgcmVkdWNlcnM6IHtcbi8vICAgICBmb2N1c0ljb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbi5wYXlsb2FkXCIsIGFjdGlvbi5wYXlsb2FkKTtcbi8vICAgICAgIHN0YXRlLmZvY3VzZWRJY29ucyA9IGFjdGlvbi5wYXlsb2FkO1xuLy8gICAgIH0sXG4vLyAgIH1cbi8vIH0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiZnVuY3Rpb24gbihuKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCx0PUFycmF5KHI+MT9yLTE6MCksZT0xO2U8cjtlKyspdFtlLTFdPWFyZ3VtZW50c1tlXTtpZihcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKXt2YXIgaT1ZW25dLG89aT9cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2kuYXBwbHkobnVsbCx0KTppOlwidW5rbm93biBlcnJvciBucjogXCIrbjt0aHJvdyBFcnJvcihcIltJbW1lcl0gXCIrbyl9dGhyb3cgRXJyb3IoXCJbSW1tZXJdIG1pbmlmaWVkIGVycm9yIG5yOiBcIituKyh0Lmxlbmd0aD9cIiBcIit0Lm1hcCgoZnVuY3Rpb24obil7cmV0dXJuXCInXCIrbitcIidcIn0pKS5qb2luKFwiLFwiKTpcIlwiKStcIi4gRmluZCB0aGUgZnVsbCBlcnJvciBhdDogaHR0cHM6Ly9iaXQubHkvM2NYRUtXZlwiKX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmISFuW1FdfWZ1bmN0aW9uIHQobil7dmFyIHI7cmV0dXJuISFuJiYoZnVuY3Rpb24obil7aWYoIW58fFwib2JqZWN0XCIhPXR5cGVvZiBuKXJldHVybiExO3ZhciByPU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTtpZihudWxsPT09cilyZXR1cm4hMDt2YXIgdD1PYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChyLFwiY29uc3RydWN0b3JcIikmJnIuY29uc3RydWN0b3I7cmV0dXJuIHQ9PT1PYmplY3R8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJkZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCk9PT1afShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIShudWxsPT09KHI9bi5jb25zdHJ1Y3Rvcil8fHZvaWQgMD09PXI/dm9pZCAwOnJbTF0pfHxzKG4pfHx2KG4pKX1mdW5jdGlvbiBlKHQpe3JldHVybiByKHQpfHxuKDIzLHQpLHRbUV0udH1mdW5jdGlvbiBpKG4scix0KXt2b2lkIDA9PT10JiYodD0hMSksMD09PW8obik/KHQ/T2JqZWN0LmtleXM6bm4pKG4pLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QmJlwic3ltYm9sXCI9PXR5cGVvZiBlfHxyKGUsbltlXSxuKX0pKTpuLmZvckVhY2goKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHIoZSx0LG4pfSkpfWZ1bmN0aW9uIG8obil7dmFyIHI9bltRXTtyZXR1cm4gcj9yLmk+Mz9yLmktNDpyLmk6QXJyYXkuaXNBcnJheShuKT8xOnMobik/Mjp2KG4pPzM6MH1mdW5jdGlvbiB1KG4scil7cmV0dXJuIDI9PT1vKG4pP24uaGFzKHIpOk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpfWZ1bmN0aW9uIGEobixyKXtyZXR1cm4gMj09PW8obik/bi5nZXQocik6bltyXX1mdW5jdGlvbiBmKG4scix0KXt2YXIgZT1vKG4pOzI9PT1lP24uc2V0KHIsdCk6Mz09PWU/bi5hZGQodCk6bltyXT10fWZ1bmN0aW9uIGMobixyKXtyZXR1cm4gbj09PXI/MCE9PW58fDEvbj09MS9yOm4hPW4mJnIhPXJ9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHI9cm4obik7ZGVsZXRlIHJbUV07Zm9yKHZhciB0PW5uKHIpLGU9MDtlPHQubGVuZ3RoO2UrKyl7dmFyIGk9dFtlXSxvPXJbaV07ITE9PT1vLndyaXRhYmxlJiYoby53cml0YWJsZT0hMCxvLmNvbmZpZ3VyYWJsZT0hMCksKG8uZ2V0fHxvLnNldCkmJihyW2ldPXtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsZW51bWVyYWJsZTpvLmVudW1lcmFibGUsdmFsdWU6bltpXX0pfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihuKSxyKX1mdW5jdGlvbiBkKG4sZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPSExKSx5KG4pfHxyKG4pfHwhdChuKXx8KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4scil7cmV0dXJuIGQociwhMCl9KSwhMCkpLG59ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHIpe3ZhciB0PXRuW3JdO3JldHVybiB0fHxuKDE4LHIpLHR9ZnVuY3Rpb24gbShuLHIpe3RuW25dfHwodG5bbl09cil9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4scil7ciYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXIpfWZ1bmN0aW9uIGcobil7TyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBPKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgcj1uW1FdOzA9PT1yLml8fDE9PT1yLmk/ci5qKCk6ci5nPSEwfWZ1bmN0aW9uIFAocixlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT1yJiZyIT09aTtyZXR1cm4gZS5oLk98fGIoXCJFUzVcIikuUyhlLHIsbyksbz8oaVtRXS5QJiYoZyhlKSxuKDQpKSx0KHIpJiYocj1NKGUsciksZS5sfHx4KGUscikpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLnQscixlLnUsZS5zKSk6cj1NKGUsaSxbXSksZyhlKSxlLnUmJmUudihlLnUsZS5zKSxyIT09SD9yOnZvaWQgMH1mdW5jdGlvbiBNKG4scix0KXtpZih5KHIpKXJldHVybiByO3ZhciBlPXJbUV07aWYoIWUpcmV0dXJuIGkociwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gQShuLGUscixpLG8sdCl9KSwhMCkscjtpZihlLkEhPT1uKXJldHVybiByO2lmKCFlLlApcmV0dXJuIHgobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1sKGUuayk6ZS5vLHU9byxhPSExOzM9PT1lLmkmJih1PW5ldyBTZXQobyksby5jbGVhcigpLGE9ITApLGkodSwoZnVuY3Rpb24ocixpKXtyZXR1cm4gQShuLGUsbyxyLGksdCxhKX0pKSx4KG4sbywhMSksdCYmbi51JiZiKFwiUGF0Y2hlc1wiKS5OKGUsdCxuLnUsbi5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMsdil7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmYz09PW8mJm4oNSkscihjKSl7dmFyIHA9TShlLGMscyYmaSYmMyE9PWkuaSYmIXUoaS5SLGEpP3MuY29uY2F0KGEpOnZvaWQgMCk7aWYoZihvLGEscCksIXIocCkpcmV0dXJuO2UubT0hMX1lbHNlIHYmJm8uYWRkKGMpO2lmKHQoYykmJiF5KGMpKXtpZighZS5oLkQmJmUuXzwxKXJldHVybjtNKGUsYyksaSYmaS5BLmx8fHgoZSxjKX19ZnVuY3Rpb24geChuLHIsdCl7dm9pZCAwPT09dCYmKHQ9ITEpLCFuLmwmJm4uaC5EJiZuLm0mJmQocix0KX1mdW5jdGlvbiB6KG4scil7dmFyIHQ9bltRXTtyZXR1cm4odD9wKHQpOm4pW3JdfWZ1bmN0aW9uIEkobixyKXtpZihyIGluIG4pZm9yKHZhciB0PU9iamVjdC5nZXRQcm90b3R5cGVPZihuKTt0Oyl7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHIpO2lmKGUpcmV0dXJuIGU7dD1PYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9fWZ1bmN0aW9uIGsobil7bi5QfHwobi5QPSEwLG4ubCYmayhuLmwpKX1mdW5jdGlvbiBFKG4pe24ub3x8KG4ubz1sKG4udCkpfWZ1bmN0aW9uIE4obixyLHQpe3ZhciBlPXMocik/YihcIk1hcFNldFwiKS5GKHIsdCk6dihyKT9iKFwiTWFwU2V0XCIpLlQocix0KTpuLk8/ZnVuY3Rpb24obixyKXt2YXIgdD1BcnJheS5pc0FycmF5KG4pLGU9e2k6dD8xOjAsQTpyP3IuQTpfKCksUDohMSxJOiExLFI6e30sbDpyLHQ6bixrOm51bGwsbzpudWxsLGo6bnVsbCxDOiExfSxpPWUsbz1lbjt0JiYoaT1bZV0sbz1vbik7dmFyIHU9UHJveHkucmV2b2NhYmxlKGksbyksYT11LnJldm9rZSxmPXUucHJveHk7cmV0dXJuIGUuaz1mLGUuaj1hLGZ9KHIsdCk6YihcIkVTNVwiKS5KKHIsdCk7cmV0dXJuKHQ/dC5BOl8oKSkucC5wdXNoKGUpLGV9ZnVuY3Rpb24gUihlKXtyZXR1cm4gcihlKXx8bigyMixlKSxmdW5jdGlvbiBuKHIpe2lmKCF0KHIpKXJldHVybiByO3ZhciBlLHU9cltRXSxjPW8ocik7aWYodSl7aWYoIXUuUCYmKHUuaTw0fHwhYihcIkVTNVwiKS5LKHUpKSlyZXR1cm4gdS50O3UuST0hMCxlPUQocixjKSx1Lkk9ITF9ZWxzZSBlPUQocixjKTtyZXR1cm4gaShlLChmdW5jdGlvbihyLHQpe3UmJmEodS50LHIpPT09dHx8ZihlLHIsbih0KSl9KSksMz09PWM/bmV3IFNldChlKTplfShlKX1mdW5jdGlvbiBEKG4scil7c3dpdGNoKHIpe2Nhc2UgMjpyZXR1cm4gbmV3IE1hcChuKTtjYXNlIDM6cmV0dXJuIEFycmF5LmZyb20obil9cmV0dXJuIGwobil9ZnVuY3Rpb24gRigpe2Z1bmN0aW9uIHQobixyKXt2YXIgdD1zW25dO3JldHVybiB0P3QuZW51bWVyYWJsZT1yOnNbbl09dD17Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6cixnZXQ6ZnVuY3Rpb24oKXt2YXIgcj10aGlzW1FdO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYociksZW4uZ2V0KHIsbil9LHNldDpmdW5jdGlvbihyKXt2YXIgdD10aGlzW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmYodCksZW4uc2V0KHQsbixyKX19LHR9ZnVuY3Rpb24gZShuKXtmb3IodmFyIHI9bi5sZW5ndGgtMTtyPj0wO3ItLSl7dmFyIHQ9bltyXVtRXTtpZighdC5QKXN3aXRjaCh0Lmkpe2Nhc2UgNTphKHQpJiZrKHQpO2JyZWFrO2Nhc2UgNDpvKHQpJiZrKHQpfX19ZnVuY3Rpb24gbyhuKXtmb3IodmFyIHI9bi50LHQ9bi5rLGU9bm4odCksaT1lLmxlbmd0aC0xO2k+PTA7aS0tKXt2YXIgbz1lW2ldO2lmKG8hPT1RKXt2YXIgYT1yW29dO2lmKHZvaWQgMD09PWEmJiF1KHIsbykpcmV0dXJuITA7dmFyIGY9dFtvXSxzPWYmJmZbUV07aWYocz9zLnQhPT1hOiFjKGYsYSkpcmV0dXJuITB9fXZhciB2PSEhcltRXTtyZXR1cm4gZS5sZW5ndGghPT1ubihyKS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciByPW4uaztpZihyLmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHQ9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHIubGVuZ3RoLTEpO2lmKHQmJiF0LmdldClyZXR1cm4hMDtmb3IodmFyIGU9MDtlPHIubGVuZ3RoO2UrKylpZighci5oYXNPd25Qcm9wZXJ0eShlKSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBmKHIpe3IuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAocikpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obixyKXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obixyKXtpZihuKXtmb3IodmFyIGU9QXJyYXkoci5sZW5ndGgpLGk9MDtpPHIubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2ksdChpLCEwKSk7cmV0dXJuIGV9dmFyIG89cm4ocik7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PW5uKG8pLGE9MDthPHUubGVuZ3RoO2ErKyl7dmFyIGY9dVthXTtvW2ZdPXQoZixufHwhIW9bZl0uZW51bWVyYWJsZSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHIpLG8pfShlLG4pLG89e2k6ZT81OjQsQTpyP3IuQTpfKCksUDohMSxJOiExLFI6e30sbDpyLHQ6bixrOmksbzpudWxsLGc6ITEsQzohMX07cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpLFEse3ZhbHVlOm8sd3JpdGFibGU6ITB9KSxpfSxTOmZ1bmN0aW9uKG4sdCxvKXtvP3IodCkmJnRbUV0uQT09PW4mJmUobi5wKToobi51JiZmdW5jdGlvbiBuKHIpe2lmKHImJlwib2JqZWN0XCI9PXR5cGVvZiByKXt2YXIgdD1yW1FdO2lmKHQpe3ZhciBlPXQudCxvPXQuayxmPXQuUixjPXQuaTtpZig0PT09YylpKG8sKGZ1bmN0aW9uKHIpe3IhPT1RJiYodm9pZCAwIT09ZVtyXXx8dShlLHIpP2Zbcl18fG4ob1tyXSk6KGZbcl09ITAsayh0KSkpfSkpLGkoZSwoZnVuY3Rpb24obil7dm9pZCAwIT09b1tuXXx8dShvLG4pfHwoZltuXT0hMSxrKHQpKX0pKTtlbHNlIGlmKDU9PT1jKXtpZihhKHQpJiYoayh0KSxmLmxlbmd0aD0hMCksby5sZW5ndGg8ZS5sZW5ndGgpZm9yKHZhciBzPW8ubGVuZ3RoO3M8ZS5sZW5ndGg7cysrKWZbc109ITE7ZWxzZSBmb3IodmFyIHY9ZS5sZW5ndGg7djxvLmxlbmd0aDt2KyspZlt2XT0hMDtmb3IodmFyIHA9TWF0aC5taW4oby5sZW5ndGgsZS5sZW5ndGgpLGw9MDtsPHA7bCsrKW8uaGFzT3duUHJvcGVydHkobCl8fChmW2xdPSEwKSx2b2lkIDA9PT1mW2xdJiZuKG9bbF0pfX19fShuLnBbMF0pLGUobi5wKSl9LEs6ZnVuY3Rpb24obil7cmV0dXJuIDQ9PT1uLmk/byhuKTphKG4pfX0pfWZ1bmN0aW9uIFQoKXtmdW5jdGlvbiBlKG4pe2lmKCF0KG4pKXJldHVybiBuO2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4ubWFwKGUpO2lmKHMobikpcmV0dXJuIG5ldyBNYXAoQXJyYXkuZnJvbShuLmVudHJpZXMoKSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bblswXSxlKG5bMV0pXX0pKSk7aWYodihuKSlyZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG4pLm1hcChlKSk7dmFyIHI9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpO2Zvcih2YXIgaSBpbiBuKXJbaV09ZShuW2ldKTtyZXR1cm4gdShuLEwpJiYocltMXT1uW0xdKSxyfWZ1bmN0aW9uIGYobil7cmV0dXJuIHIobik/ZShuKTpufXZhciBjPVwiYWRkXCI7bShcIlBhdGNoZXNcIix7JDpmdW5jdGlvbihyLHQpe3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe2Zvcih2YXIgaT10LnBhdGgsdT10Lm9wLGY9cixzPTA7czxpLmxlbmd0aC0xO3MrKyl7dmFyIHY9byhmKSxwPWlbc107XCJzdHJpbmdcIiE9dHlwZW9mIHAmJlwibnVtYmVyXCIhPXR5cGVvZiBwJiYocD1cIlwiK3ApLDAhPT12JiYxIT09dnx8XCJfX3Byb3RvX19cIiE9PXAmJlwiY29uc3RydWN0b3JcIiE9PXB8fG4oMjQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJlwicHJvdG90eXBlXCI9PT1wJiZuKDI0KSxcIm9iamVjdFwiIT10eXBlb2YoZj1hKGYscCkpJiZuKDE1LGkuam9pbihcIi9cIikpfXZhciBsPW8oZiksZD1lKHQudmFsdWUpLGg9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaChsKXtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlIGM6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm5cIi1cIj09PWg/Zi5wdXNoKGQpOmYuc3BsaWNlKGgsMCxkKTtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOnJldHVybiBmLmFkZChkKTtkZWZhdWx0OnJldHVybiBmW2hdPWR9Y2FzZVwicmVtb3ZlXCI6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwxKTtjYXNlIDI6cmV0dXJuIGYuZGVsZXRlKGgpO2Nhc2UgMzpyZXR1cm4gZi5kZWxldGUodC52YWx1ZSk7ZGVmYXVsdDpyZXR1cm4gZGVsZXRlIGZbaF19ZGVmYXVsdDpuKDE3LHUpfX0pKSxyfSxOOmZ1bmN0aW9uKG4scix0LGUpe3N3aXRjaChuLmkpe2Nhc2UgMDpjYXNlIDQ6Y2FzZSAyOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgbz1uLnQscz1uLm87aShuLlIsKGZ1bmN0aW9uKG4saSl7dmFyIHY9YShvLG4pLHA9YShzLG4pLGw9aT91KG8sbik/XCJyZXBsYWNlXCI6YzpcInJlbW92ZVwiO2lmKHYhPT1wfHxcInJlcGxhY2VcIiE9PWwpe3ZhciBkPXIuY29uY2F0KG4pO3QucHVzaChcInJlbW92ZVwiPT09bD97b3A6bCxwYXRoOmR9OntvcDpsLHBhdGg6ZCx2YWx1ZTpwfSksZS5wdXNoKGw9PT1jP3tvcDpcInJlbW92ZVwiLHBhdGg6ZH06XCJyZW1vdmVcIj09PWw/e29wOmMscGF0aDpkLHZhbHVlOmYodil9OntvcDpcInJlcGxhY2VcIixwYXRoOmQsdmFsdWU6Zih2KX0pfX0pKX0obixyLHQsZSk7Y2FzZSA1OmNhc2UgMTpyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIGk9bi50LG89bi5SLHU9bi5vO2lmKHUubGVuZ3RoPGkubGVuZ3RoKXt2YXIgYT1bdSxpXTtpPWFbMF0sdT1hWzFdO3ZhciBzPVtlLHRdO3Q9c1swXSxlPXNbMV19Zm9yKHZhciB2PTA7djxpLmxlbmd0aDt2KyspaWYob1t2XSYmdVt2XSE9PWlbdl0pe3ZhciBwPXIuY29uY2F0KFt2XSk7dC5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6Zih1W3ZdKX0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYoaVt2XSl9KX1mb3IodmFyIGw9aS5sZW5ndGg7bDx1Lmxlbmd0aDtsKyspe3ZhciBkPXIuY29uY2F0KFtsXSk7dC5wdXNoKHtvcDpjLHBhdGg6ZCx2YWx1ZTpmKHVbbF0pfSl9aS5sZW5ndGg8dS5sZW5ndGgmJmUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpyLmNvbmNhdChbXCJsZW5ndGhcIl0pLHZhbHVlOmkubGVuZ3RofSl9KG4scix0LGUpO2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24obixyLHQsZSl7dmFyIGk9bi50LG89bi5vLHU9MDtpLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFvLmhhcyhuKSl7dmFyIGk9ci5jb25jYXQoW3VdKTt0LnB1c2goe29wOlwicmVtb3ZlXCIscGF0aDppLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOmMscGF0aDppLHZhbHVlOm59KX11Kyt9KSksdT0wLG8uZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIWkuaGFzKG4pKXt2YXIgbz1yLmNvbmNhdChbdV0pO3QucHVzaCh7b3A6YyxwYXRoOm8sdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6XCJyZW1vdmVcIixwYXRoOm8sdmFsdWU6bn0pfXUrK30pKX0obixyLHQsZSl9fSxNOmZ1bmN0aW9uKG4scix0LGUpe3QucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpyPT09SD92b2lkIDA6cn0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpufSl9fSl9ZnVuY3Rpb24gQygpe2Z1bmN0aW9uIHIobixyKXtmdW5jdGlvbiB0KCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufWEobixyKSxuLnByb3RvdHlwZT0odC5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IHQpfWZ1bmN0aW9uIGUobil7bi5vfHwobi5SPW5ldyBNYXAsbi5vPW5ldyBNYXAobi50KSl9ZnVuY3Rpb24gbyhuKXtuLm98fChuLm89bmV3IFNldCxuLnQuZm9yRWFjaCgoZnVuY3Rpb24ocil7aWYodChyKSl7dmFyIGU9TihuLkEuaCxyLG4pO24ucC5zZXQocixlKSxuLm8uYWRkKGUpfWVsc2Ugbi5vLmFkZChyKX0pKSl9ZnVuY3Rpb24gdShyKXtyLmcmJm4oMyxKU09OLnN0cmluZ2lmeShwKHIpKSl9dmFyIGE9ZnVuY3Rpb24obixyKXtyZXR1cm4oYT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obixyKXtuLl9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24obixyKXtmb3IodmFyIHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoblt0XT1yW3RdKX0pKG4scil9LGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIHRoaXNbUV09e2k6MixsOnIsQTpyP3IuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLFI6dm9pZCAwLHQ6bixrOnRoaXMsQzohMSxnOiExfSx0aGlzfXIobixNYXApO3ZhciBvPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxvLmhhcz1mdW5jdGlvbihuKXtyZXR1cm4gcCh0aGlzW1FdKS5oYXMobil9LG8uc2V0PWZ1bmN0aW9uKG4scil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxwKHQpLmhhcyhuKSYmcCh0KS5nZXQobik9PT1yfHwoZSh0KSxrKHQpLHQuUi5zZXQobiwhMCksdC5vLnNldChuLHIpLHQuUi5zZXQobiwhMCkpLHRoaXN9LG8uZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLGUociksayhyKSxyLnQuaGFzKG4pP3IuUi5zZXQobiwhMSk6ci5SLmRlbGV0ZShuKSxyLm8uZGVsZXRlKG4pLCEwfSxvLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKGUobiksayhuKSxuLlI9bmV3IE1hcCxpKG4udCwoZnVuY3Rpb24ocil7bi5SLnNldChyLCExKX0pKSxuLm8uY2xlYXIoKSl9LG8uZm9yRWFjaD1mdW5jdGlvbihuLHIpe3ZhciB0PXRoaXM7cCh0aGlzW1FdKS5mb3JFYWNoKChmdW5jdGlvbihlLGkpe24uY2FsbChyLHQuZ2V0KGkpLGksdCl9KSl9LG8uZ2V0PWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07dShyKTt2YXIgaT1wKHIpLmdldChuKTtpZihyLkl8fCF0KGkpKXJldHVybiBpO2lmKGkhPT1yLnQuZ2V0KG4pKXJldHVybiBpO3ZhciBvPU4oci5BLmgsaSxyKTtyZXR1cm4gZShyKSxyLm8uc2V0KG4sbyksb30sby5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkua2V5cygpfSxvLnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuLHI9dGhpcyx0PXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiByLnZhbHVlcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj10Lm5leHQoKTtyZXR1cm4gbi5kb25lP246e2RvbmU6ITEsdmFsdWU6ci5nZXQobi52YWx1ZSl9fSxufSxvLmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbixyPXRoaXMsdD10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gci5lbnRyaWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXQubmV4dCgpO2lmKG4uZG9uZSlyZXR1cm4gbjt2YXIgZT1yLmdldChuLnZhbHVlKTtyZXR1cm57ZG9uZTohMSx2YWx1ZTpbbi52YWx1ZSxlXX19LG59LG9bVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9LG59KCksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obixyKXtyZXR1cm4gdGhpc1tRXT17aTozLGw6cixBOnI/ci5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsdDpuLGs6dGhpcyxwOm5ldyBNYXAsZzohMSxDOiExfSx0aGlzfXIobixTZXQpO3ZhciB0PW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSx0Lmhhcz1mdW5jdGlvbihuKXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHIubz8hIXIuby5oYXMobil8fCEoIXIucC5oYXMobil8fCFyLm8uaGFzKHIucC5nZXQobikpKTpyLnQuaGFzKG4pfSx0LmFkZD1mdW5jdGlvbihuKXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHRoaXMuaGFzKG4pfHwobyhyKSxrKHIpLHIuby5hZGQobikpLHRoaXN9LHQuZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLG8ociksayhyKSxyLm8uZGVsZXRlKG4pfHwhIXIucC5oYXMobikmJnIuby5kZWxldGUoci5wLmdldChuKSl9LHQuY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYobyhuKSxrKG4pLG4uby5jbGVhcigpKX0sdC52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLnZhbHVlcygpfSx0LmVudHJpZXM9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3JldHVybiB1KG4pLG8obiksbi5vLmVudHJpZXMoKX0sdC5rZXlzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHRbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sdC5mb3JFYWNoPWZ1bmN0aW9uKG4scil7Zm9yKHZhciB0PXRoaXMudmFsdWVzKCksZT10Lm5leHQoKTshZS5kb25lOyluLmNhbGwocixlLnZhbHVlLGUudmFsdWUsdGhpcyksZT10Lm5leHQoKX0sbn0oKTttKFwiTWFwU2V0XCIse0Y6ZnVuY3Rpb24obixyKXtyZXR1cm4gbmV3IGYobixyKX0sVDpmdW5jdGlvbihuLHIpe3JldHVybiBuZXcgYyhuLHIpfX0pfWZ1bmN0aW9uIEooKXtGKCksQygpLFQoKX1mdW5jdGlvbiBLKG4pe3JldHVybiBufWZ1bmN0aW9uICQobil7cmV0dXJuIG59dmFyIEcsVSxXPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woXCJ4XCIpLFg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQsQj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJveHkmJnZvaWQgMCE9PVByb3h5LnJldm9jYWJsZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QsSD1XP1N5bWJvbC5mb3IoXCJpbW1lci1ub3RoaW5nXCIpOigoRz17fSlbXCJpbW1lci1ub3RoaW5nXCJdPSEwLEcpLEw9Vz9TeW1ib2wuZm9yKFwiaW1tZXItZHJhZnRhYmxlXCIpOlwiX18kaW1tZXJfZHJhZnRhYmxlXCIsUT1XP1N5bWJvbC5mb3IoXCJpbW1lci1zdGF0ZVwiKTpcIl9fJGltbWVyX3N0YXRlXCIsVj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiLFk9ezA6XCJJbGxlZ2FsIHN0YXRlXCIsMTpcIkltbWVyIGRyYWZ0cyBjYW5ub3QgaGF2ZSBjb21wdXRlZCBwcm9wZXJ0aWVzXCIsMjpcIlRoaXMgb2JqZWN0IGhhcyBiZWVuIGZyb3plbiBhbmQgc2hvdWxkIG5vdCBiZSBtdXRhdGVkXCIsMzpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCB1c2UgYSBwcm94eSB0aGF0IGhhcyBiZWVuIHJldm9rZWQuIERpZCB5b3UgcGFzcyBhbiBvYmplY3QgZnJvbSBpbnNpZGUgYW4gaW1tZXIgZnVuY3Rpb24gdG8gYW4gYXN5bmMgcHJvY2Vzcz8gXCIrbn0sNDpcIkFuIGltbWVyIHByb2R1Y2VyIHJldHVybmVkIGEgbmV3IHZhbHVlICphbmQqIG1vZGlmaWVkIGl0cyBkcmFmdC4gRWl0aGVyIHJldHVybiBhIG5ldyB2YWx1ZSAqb3IqIG1vZGlmeSB0aGUgZHJhZnQuXCIsNTpcIkltbWVyIGZvcmJpZHMgY2lyY3VsYXIgcmVmZXJlbmNlc1wiLDY6XCJUaGUgZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb25cIiw3OlwiVGhlIHRoaXJkIGFyZ3VtZW50IHRvIGBwcm9kdWNlYCBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgdW5kZWZpbmVkXCIsODpcIkZpcnN0IGFyZ3VtZW50IHRvIGBjcmVhdGVEcmFmdGAgbXVzdCBiZSBhIHBsYWluIG9iamVjdCwgYW4gYXJyYXksIG9yIGFuIGltbWVyYWJsZSBvYmplY3RcIiw5OlwiRmlyc3QgYXJndW1lbnQgdG8gYGZpbmlzaERyYWZ0YCBtdXN0IGJlIGEgZHJhZnQgcmV0dXJuZWQgYnkgYGNyZWF0ZURyYWZ0YFwiLDEwOlwiVGhlIGdpdmVuIGRyYWZ0IGlzIGFscmVhZHkgZmluYWxpemVkXCIsMTE6XCJPYmplY3QuZGVmaW5lUHJvcGVydHkoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEyOlwiT2JqZWN0LnNldFByb3RvdHlwZU9mKCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMzpcIkltbWVyIG9ubHkgc3VwcG9ydHMgZGVsZXRpbmcgYXJyYXkgaW5kaWNlc1wiLDE0OlwiSW1tZXIgb25seSBzdXBwb3J0cyBzZXR0aW5nIGFycmF5IGluZGljZXMgYW5kIHRoZSAnbGVuZ3RoJyBwcm9wZXJ0eVwiLDE1OmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IGFwcGx5IHBhdGNoLCBwYXRoIGRvZXNuJ3QgcmVzb2x2ZTogXCIrbn0sMTY6J1NldHMgY2Fubm90IGhhdmUgXCJyZXBsYWNlXCIgcGF0Y2hlcy4nLDE3OmZ1bmN0aW9uKG4pe3JldHVyblwiVW5zdXBwb3J0ZWQgcGF0Y2ggb3BlcmF0aW9uOiBcIitufSwxODpmdW5jdGlvbihuKXtyZXR1cm5cIlRoZSBwbHVnaW4gZm9yICdcIituK1wiJyBoYXMgbm90IGJlZW4gbG9hZGVkIGludG8gSW1tZXIuIFRvIGVuYWJsZSB0aGUgcGx1Z2luLCBpbXBvcnQgYW5kIGNhbGwgYGVuYWJsZVwiK24rXCIoKWAgd2hlbiBpbml0aWFsaXppbmcgeW91ciBhcHBsaWNhdGlvbi5cIn0sMjA6XCJDYW5ub3QgdXNlIHByb3hpZXMgaWYgUHJveHksIFByb3h5LnJldm9jYWJsZSBvciBSZWZsZWN0IGFyZSBub3QgYXZhaWxhYmxlXCIsMjE6ZnVuY3Rpb24obil7cmV0dXJuXCJwcm9kdWNlIGNhbiBvbmx5IGJlIGNhbGxlZCBvbiB0aGluZ3MgdGhhdCBhcmUgZHJhZnRhYmxlOiBwbGFpbiBvYmplY3RzLCBhcnJheXMsIE1hcCwgU2V0IG9yIGNsYXNzZXMgdGhhdCBhcmUgbWFya2VkIHdpdGggJ1tpbW1lcmFibGVdOiB0cnVlJy4gR290ICdcIituK1wiJ1wifSwyMjpmdW5jdGlvbihuKXtyZXR1cm5cIidjdXJyZW50JyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn0sMjM6ZnVuY3Rpb24obil7cmV0dXJuXCInb3JpZ2luYWwnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyNDpcIlBhdGNoaW5nIHJlc2VydmVkIGF0dHJpYnV0ZXMgbGlrZSBfX3Byb3RvX18sIHByb3RvdHlwZSBhbmQgY29uc3RydWN0b3IgaXMgbm90IGFsbG93ZWRcIn0sWj1cIlwiK09iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3Isbm49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxybj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc3x8ZnVuY3Rpb24obil7dmFyIHI9e307cmV0dXJuIG5uKG4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JbdF09T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuLHQpfSkpLHJ9LHRuPXt9LGVuPXtnZXQ6ZnVuY3Rpb24obixyKXtpZihyPT09USlyZXR1cm4gbjt2YXIgZT1wKG4pO2lmKCF1KGUscikpcmV0dXJuIGZ1bmN0aW9uKG4scix0KXt2YXIgZSxpPUkocix0KTtyZXR1cm4gaT9cInZhbHVlXCJpbiBpP2kudmFsdWU6bnVsbD09PShlPWkuZ2V0KXx8dm9pZCAwPT09ZT92b2lkIDA6ZS5jYWxsKG4uayk6dm9pZCAwfShuLGUscik7dmFyIGk9ZVtyXTtyZXR1cm4gbi5JfHwhdChpKT9pOmk9PT16KG4udCxyKT8oRShuKSxuLm9bcl09TihuLkEuaCxpLG4pKTppfSxoYXM6ZnVuY3Rpb24obixyKXtyZXR1cm4gciBpbiBwKG4pfSxvd25LZXlzOmZ1bmN0aW9uKG4pe3JldHVybiBSZWZsZWN0Lm93bktleXMocChuKSl9LHNldDpmdW5jdGlvbihuLHIsdCl7dmFyIGU9SShwKG4pLHIpO2lmKG51bGw9PWU/dm9pZCAwOmUuc2V0KXJldHVybiBlLnNldC5jYWxsKG4uayx0KSwhMDtpZighbi5QKXt2YXIgaT16KHAobiksciksbz1udWxsPT1pP3ZvaWQgMDppW1FdO2lmKG8mJm8udD09PXQpcmV0dXJuIG4ub1tyXT10LG4uUltyXT0hMSwhMDtpZihjKHQsaSkmJih2b2lkIDAhPT10fHx1KG4udCxyKSkpcmV0dXJuITA7RShuKSxrKG4pfXJldHVybiBuLm9bcl09PT10JiYodm9pZCAwIT09dHx8ciBpbiBuLm8pfHxOdW1iZXIuaXNOYU4odCkmJk51bWJlci5pc05hTihuLm9bcl0pfHwobi5vW3JdPXQsbi5SW3JdPSEwKSwhMH0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obixyKXtyZXR1cm4gdm9pZCAwIT09eihuLnQscil8fHIgaW4gbi50PyhuLlJbcl09ITEsRShuKSxrKG4pKTpkZWxldGUgbi5SW3JdLG4ubyYmZGVsZXRlIG4ub1tyXSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4scil7dmFyIHQ9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQscik7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09cixlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTp0W3JdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxvbj17fTtpKGVuLChmdW5jdGlvbihuLHIpe29uW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLG9uLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHIsdCl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQodCkpJiZuKDEzKSxvbi5zZXQuY2FsbCh0aGlzLHIsdCx2b2lkIDApfSxvbi5zZXQ9ZnVuY3Rpb24ocix0LGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwibGVuZ3RoXCIhPT10JiZpc05hTihwYXJzZUludCh0KSkmJm4oMTQpLGVuLnNldC5jYWxsKHRoaXMsclswXSx0LGUsclswXSl9O3ZhciB1bj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUocil7dmFyIGU9dGhpczt0aGlzLk89Qix0aGlzLkQ9ITAsdGhpcy5wcm9kdWNlPWZ1bmN0aW9uKHIsaSxvKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBpKXt2YXIgdT1pO2k9cjt2YXIgYT1lO3JldHVybiBmdW5jdGlvbihuKXt2YXIgcj10aGlzO3ZvaWQgMD09PW4mJihuPXUpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBhLnByb2R1Y2UobiwoZnVuY3Rpb24obil7dmFyIHQ7cmV0dXJuKHQ9aSkuY2FsbC5hcHBseSh0LFtyLG5dLmNvbmNhdChlKSl9KSl9fXZhciBmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNiksdm9pZCAwIT09byYmXCJmdW5jdGlvblwiIT10eXBlb2YgbyYmbig3KSx0KHIpKXt2YXIgYz13KGUpLHM9TihlLHIsdm9pZCAwKSx2PSEwO3RyeXtmPWkocyksdj0hMX1maW5hbGx5e3Y/ZyhjKTpPKGMpfXJldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZmIGluc3RhbmNlb2YgUHJvbWlzZT9mLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBqKGMsbyksUChuLGMpfSksKGZ1bmN0aW9uKG4pe3Rocm93IGcoYyksbn0pKTooaihjLG8pLFAoZixjKSl9aWYoIXJ8fFwib2JqZWN0XCIhPXR5cGVvZiByKXtpZih2b2lkIDA9PT0oZj1pKHIpKSYmKGY9ciksZj09PUgmJihmPXZvaWQgMCksZS5EJiZkKGYsITApLG8pe3ZhciBwPVtdLGw9W107YihcIlBhdGNoZXNcIikuTShyLGYscCxsKSxvKHAsbCl9cmV0dXJuIGZ9bigyMSxyKX0sdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obixyKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKXJldHVybiBmdW5jdGlvbihyKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspaVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gZS5wcm9kdWNlV2l0aFBhdGNoZXMociwoZnVuY3Rpb24ocil7cmV0dXJuIG4uYXBwbHkodm9pZCAwLFtyXS5jb25jYXQoaSkpfSkpfTt2YXIgdCxpLG89ZS5wcm9kdWNlKG4sciwoZnVuY3Rpb24obixyKXt0PW4saT1yfSkpO3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZvIGluc3RhbmNlb2YgUHJvbWlzZT9vLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybltuLHQsaV19KSk6W28sdCxpXX0sXCJib29sZWFuXCI9PXR5cGVvZihudWxsPT1yP3ZvaWQgMDpyLnVzZVByb3hpZXMpJiZ0aGlzLnNldFVzZVByb3hpZXMoci51c2VQcm94aWVzKSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXI/dm9pZCAwOnIuYXV0b0ZyZWV6ZSkmJnRoaXMuc2V0QXV0b0ZyZWV6ZShyLmF1dG9GcmVlemUpfXZhciBpPWUucHJvdG90eXBlO3JldHVybiBpLmNyZWF0ZURyYWZ0PWZ1bmN0aW9uKGUpe3QoZSl8fG4oOCkscihlKSYmKGU9UihlKSk7dmFyIGk9dyh0aGlzKSxvPU4odGhpcyxlLHZvaWQgMCk7cmV0dXJuIG9bUV0uQz0hMCxPKGkpLG99LGkuZmluaXNoRHJhZnQ9ZnVuY3Rpb24ocix0KXt2YXIgZT1yJiZyW1FdO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihlJiZlLkN8fG4oOSksZS5JJiZuKDEwKSk7dmFyIGk9ZS5BO3JldHVybiBqKGksdCksUCh2b2lkIDAsaSl9LGkuc2V0QXV0b0ZyZWV6ZT1mdW5jdGlvbihuKXt0aGlzLkQ9bn0saS5zZXRVc2VQcm94aWVzPWZ1bmN0aW9uKHIpe3ImJiFCJiZuKDIwKSx0aGlzLk89cn0saS5hcHBseVBhdGNoZXM9ZnVuY3Rpb24obix0KXt2YXIgZTtmb3IoZT10Lmxlbmd0aC0xO2U+PTA7ZS0tKXt2YXIgaT10W2VdO2lmKDA9PT1pLnBhdGgubGVuZ3RoJiZcInJlcGxhY2VcIj09PWkub3Ape249aS52YWx1ZTticmVha319ZT4tMSYmKHQ9dC5zbGljZShlKzEpKTt2YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiByKG4pP28obix0KTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obix0KX0pKX0sZX0oKSxhbj1uZXcgdW4sZm49YW4ucHJvZHVjZSxjbj1hbi5wcm9kdWNlV2l0aFBhdGNoZXMuYmluZChhbiksc249YW4uc2V0QXV0b0ZyZWV6ZS5iaW5kKGFuKSx2bj1hbi5zZXRVc2VQcm94aWVzLmJpbmQoYW4pLHBuPWFuLmFwcGx5UGF0Y2hlcy5iaW5kKGFuKSxsbj1hbi5jcmVhdGVEcmFmdC5iaW5kKGFuKSxkbj1hbi5maW5pc2hEcmFmdC5iaW5kKGFuKTtleHBvcnQgZGVmYXVsdCBmbjtleHBvcnR7dW4gYXMgSW1tZXIscG4gYXMgYXBwbHlQYXRjaGVzLEsgYXMgY2FzdERyYWZ0LCQgYXMgY2FzdEltbXV0YWJsZSxsbiBhcyBjcmVhdGVEcmFmdCxSIGFzIGN1cnJlbnQsSiBhcyBlbmFibGVBbGxQbHVnaW5zLEYgYXMgZW5hYmxlRVM1LEMgYXMgZW5hYmxlTWFwU2V0LFQgYXMgZW5hYmxlUGF0Y2hlcyxkbiBhcyBmaW5pc2hEcmFmdCxkIGFzIGZyZWV6ZSxMIGFzIGltbWVyYWJsZSxyIGFzIGlzRHJhZnQsdCBhcyBpc0RyYWZ0YWJsZSxIIGFzIG5vdGhpbmcsZSBhcyBvcmlnaW5hbCxmbiBhcyBwcm9kdWNlLGNuIGFzIHByb2R1Y2VXaXRoUGF0Y2hlcyxzbiBhcyBzZXRBdXRvRnJlZXplLHZuIGFzIHNldFVzZVByb3hpZXN9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1tZXIuZXNtLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2NvcmUvQ3VzdG9tUmVhY3RcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5pZiAocm9vdCkge1xuICAgIHJlbmRlcihyb290LCBDb250YWluZXIpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=