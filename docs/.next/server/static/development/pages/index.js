module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../src/CircularInput.tsx":
/*!********************************!*\
  !*** ../src/CircularInput.tsx ***!
  \********************************/
/*! exports provided: CircularInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularInput", function() { return CircularInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../src/utils.ts");
/* harmony import */ var _CircularInputContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CircularInputContext */ "../src/CircularInputContext.ts");
/* harmony import */ var _CircularTrack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CircularTrack */ "../src/CircularTrack.tsx");
/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CircularProgress */ "../src/CircularProgress.tsx");
/* harmony import */ var _CircularThumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CircularThumb */ "../src/CircularThumb.tsx");









function CircularInput(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? 0.25 : _ref$value,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 100 : _ref$radius,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "radius", "onChange", "children"]);

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var size = radius * 2;
  var center = {
    x: radius,
    y: radius
  };
  var getPointFromValue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (v) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["polarToCartesian"])({
      center: center,
      angle: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["valueToAngle"])(v || value),
      radius: radius
    });
  }, [value, center, radius]);
  var getValueFromPointerEvent = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["calculateNearestValueToPoint"])({
      point: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["absPos"])(e),
      container: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getElementPosition"])(containerRef.current),
      value: value,
      center: center,
      radius: radius
    });
  }, [containerRef.current, value, center, radius]);
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      value: value,
      radius: radius,
      center: center,
      onChange: onChange,
      getPointFromValue: getPointFromValue,
      getValueFromPointerEvent: getValueFromPointerEvent
    };
  }, [value, radius, center, onChange]);
  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    if (!onChange) return;
    var nearestValue = getValueFromPointerEvent(e);
    onChange(nearestValue);
  }, [onChange, getValueFromPointerEvent]);

  var style = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    overflow: 'visible'
  }, props.style || {}, {
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)'
  });

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CircularInputContext__WEBPACK_IMPORTED_MODULE_5__["CircularInputProvider"], {
    value: context
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: containerRef,
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    style: style,
    onClick: handleClick
  }), children || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CircularTrack__WEBPACK_IMPORTED_MODULE_6__["CircularTrack"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["CircularProgress"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CircularThumb__WEBPACK_IMPORTED_MODULE_8__["CircularThumb"], null))));
}

/***/ }),

/***/ "../src/CircularInputContext.ts":
/*!**************************************!*\
  !*** ../src/CircularInputContext.ts ***!
  \**************************************/
/*! exports provided: CircularInputProvider, useCircularInputContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularInputProvider", function() { return CircularInputProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCircularInputContext", function() { return useCircularInputContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
var CircularInputProvider = Context.Provider;
function useCircularInputContext() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Context);

  if (!context) {
    throw new Error("CircularInput components cannot be rendered outside the CircularInput component");
  }

  return context;
}

/***/ }),

/***/ "../src/CircularProgress.tsx":
/*!***********************************!*\
  !*** ../src/CircularProgress.tsx ***!
  \***********************************/
/*! exports provided: CircularProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgress", function() { return CircularProgress; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "../src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../src/utils.ts");




var defaultProps = {
  stroke: '#3D99FF'
};
var CircularProgress = function CircularProgress(props) {
  var _useCircularInputCont = Object(___WEBPACK_IMPORTED_MODULE_2__["useCircularInputContext"])(),
      value = _useCircularInputCont.value,
      radius = _useCircularInputCont.radius,
      center = _useCircularInputCont.center;

  var innerCircumference = _utils__WEBPACK_IMPORTED_MODULE_3__["DEG_360_IN_RAD"] * radius;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["CircularTrack"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    strokeDasharray: innerCircumference,
    strokeDashoffset: innerCircumference * (1 - value),
    transform: "rotate(-90 ".concat(center.x, " ").concat(center.y, ")")
  }));
};
CircularProgress.defaultProps = defaultProps;

/***/ }),

/***/ "../src/CircularThumb.tsx":
/*!********************************!*\
  !*** ../src/CircularThumb.tsx ***!
  \********************************/
/*! exports provided: CircularThumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularThumb", function() { return CircularThumb; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "../src/index.ts");



var CircularThumb = function CircularThumb(props) {
  var _useCircularInputCont = Object(___WEBPACK_IMPORTED_MODULE_2__["useCircularInputContext"])(),
      getPointFromValue = _useCircularInputCont.getPointFromValue;

  var point = getPointFromValue();
  if (!point) return null;
  var x = point.x,
      y = point.y;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(___WEBPACK_IMPORTED_MODULE_2__["useCircularDrag"])(ref);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    r: 20,
    fill: "#0045e5"
  }, props, {
    ref: ref,
    cx: x,
    cy: y
  }));
};

/***/ }),

/***/ "../src/CircularTrack.tsx":
/*!********************************!*\
  !*** ../src/CircularTrack.tsx ***!
  \********************************/
/*! exports provided: defaultProps, CircularTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularTrack", function() { return CircularTrack; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "../src/index.ts");
/* harmony import */ var _useCircularDrag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCircularDrag */ "../src/useCircularDrag.ts");





var defaultProps = {
  stroke: '#CEE0F5',
  fill: 'none',
  strokeWidth: 20,
  strokeLinecap: 'round'
};
var CircularTrack = function CircularTrack(_ref) {
  var strokeWidth = _ref.strokeWidth,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["strokeWidth"]);

  var _useCircularInputCont = Object(___WEBPACK_IMPORTED_MODULE_3__["useCircularInputContext"])(),
      radius = _useCircularInputCont.radius,
      center = _useCircularInputCont.center;

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(_useCircularDrag__WEBPACK_IMPORTED_MODULE_4__["useCircularDrag"])(ref);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("circle", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    strokeWidth: strokeWidth
  }, props, {
    ref: ref,
    cx: center.x,
    cy: center.y,
    r: radius
  }));
};
CircularTrack.defaultProps = defaultProps;

/***/ }),

/***/ "../src/index.ts":
/*!***********************!*\
  !*** ../src/index.ts ***!
  \***********************/
/*! exports provided: CircularInput, useCircularInputContext, CircularInputProvider, useCircularDrag, CircularProgress, CircularThumb, CircularTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircularInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircularInput */ "../src/CircularInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircularInput", function() { return _CircularInput__WEBPACK_IMPORTED_MODULE_0__["CircularInput"]; });

/* harmony import */ var _CircularInputContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircularInputContext */ "../src/CircularInputContext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCircularInputContext", function() { return _CircularInputContext__WEBPACK_IMPORTED_MODULE_1__["useCircularInputContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircularInputProvider", function() { return _CircularInputContext__WEBPACK_IMPORTED_MODULE_1__["CircularInputProvider"]; });

/* harmony import */ var _useCircularDrag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCircularDrag */ "../src/useCircularDrag.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCircularDrag", function() { return _useCircularDrag__WEBPACK_IMPORTED_MODULE_2__["useCircularDrag"]; });

/* harmony import */ var _CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CircularProgress */ "../src/CircularProgress.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircularProgress", function() { return _CircularProgress__WEBPACK_IMPORTED_MODULE_3__["CircularProgress"]; });

/* harmony import */ var _CircularThumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CircularThumb */ "../src/CircularThumb.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircularThumb", function() { return _CircularThumb__WEBPACK_IMPORTED_MODULE_4__["CircularThumb"]; });

/* harmony import */ var _CircularTrack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CircularTrack */ "../src/CircularTrack.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircularTrack", function() { return _CircularTrack__WEBPACK_IMPORTED_MODULE_5__["CircularTrack"]; });








/***/ }),

/***/ "../src/useCircularDrag.ts":
/*!*********************************!*\
  !*** ../src/useCircularDrag.ts ***!
  \*********************************/
/*! exports provided: useCircularDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCircularDrag", function() { return useCircularDrag; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "../src/index.ts");



function useCircularDrag(ref) {
  var _useCircularInputCont = Object(___WEBPACK_IMPORTED_MODULE_2__["useCircularInputContext"])(),
      onChange = _useCircularInputCont.onChange,
      getValueFromPointerEvent = _useCircularInputCont.getValueFromPointerEvent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isDragging = _useState2[0],
      setDragging = _useState2[1];

  var handleStart = function handleStart(e) {
    if (!onChange) return;
    stopEvent(e);
    setDragging(true);
    var nearestValue = getValueFromPointerEvent(e);
    onChange(nearestValue);
  };

  var handleMove = function handleMove(e) {
    stopEvent(e);
    var nearestValue = getValueFromPointerEvent(e);
    onChange(nearestValue);
  };

  var handleEnd = function handleEnd(e) {
    stopEvent(e);
    setDragging(false);
  }; // we can't just use React for this due to needing { passive: false } to prevent touch devices scrolling


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!ref.current) return;
    addStartListeners(ref.current, handleStart);
    return function () {
      if (!ref.current) return;
      removeStartListeners(ref.current, handleStart);
    };
  }, [ref]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!isDragging) return;
    addListeners(handleMove, handleEnd);
    return function () {
      removeListeners(handleMove, handleEnd);
    };
  }, [isDragging]);
  return;
}

function addStartListeners(element, onStart) {
  element.addEventListener('mousedown', onStart, {
    passive: false
  });
  element.addEventListener('touchstart', onStart, {
    passive: false
  });
}

function removeStartListeners(element, onStart) {
  element.removeEventListener('mousedown', onStart);
  element.removeEventListener('touchstart', onStart);
}

function addListeners(onMove, onEnd) {
  document.addEventListener('mousemove', onMove, {
    passive: false
  });
  document.addEventListener('touchmove', onMove, {
    passive: false
  });
  document.addEventListener('mouseup', onEnd, {
    passive: false
  });
  document.addEventListener('touchend', onEnd, {
    passive: false
  });
}

function removeListeners(onMove, onEnd) {
  document.removeEventListener('mousemove', onMove);
  document.removeEventListener('touchmove', onMove);
  document.removeEventListener('mouseup', onEnd);
  document.removeEventListener('touchend', onEnd);
}

function stopEvent(e) {
  e.stopPropagation();

  if (e.cancelable) {
    e.preventDefault();
  }
}

/***/ }),

/***/ "../src/utils.ts":
/*!***********************!*\
  !*** ../src/utils.ts ***!
  \***********************/
/*! exports provided: DEG_360_IN_RAD, ANGLE_OFFSET, polarToCartesian, radians, degrees, matrixScale, clamp, calculateNearestValueToPoint, calcAngleDiff, valueToAngle, absPos, stopEvent, getElementPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEG_360_IN_RAD", function() { return DEG_360_IN_RAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_OFFSET", function() { return ANGLE_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polarToCartesian", function() { return polarToCartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrixScale", function() { return matrixScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNearestValueToPoint", function() { return calculateNearestValueToPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcAngleDiff", function() { return calcAngleDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToAngle", function() { return valueToAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absPos", function() { return absPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopEvent", function() { return stopEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementPosition", function() { return getElementPosition; });
var DEG_360_IN_RAD = radians(360);
var ANGLE_OFFSET = Math.PI;
function polarToCartesian(_ref) {
  var center = _ref.center,
      angle = _ref.angle,
      radius = _ref.radius;
  return {
    x: center.x + Math.sin(angle) * radius,
    y: center.y + Math.cos(angle) * radius
  };
}
function radians(deg) {
  return deg * Math.PI / 180;
}
function degrees(rad) {
  return rad * 180 / Math.PI;
}
function matrixScale(scale, x, y) {
  return "matrix(".concat(scale, ", 0, 0, ").concat(scale, ", ").concat(x - scale * x, ", ").concat(y - scale * y, ")");
}
function clamp(min, max, value) {
  return Math.min(Math.max(value, min), max);
}
function calculateNearestValueToPoint(_ref2) {
  var _ref2$center = _ref2.center,
      centerX = _ref2$center.x,
      centerY = _ref2$center.y,
      _ref2$container = _ref2.container,
      containerX = _ref2$container.x,
      containerY = _ref2$container.y,
      _ref2$point = _ref2.point,
      pointX = _ref2$point.x,
      pointY = _ref2$point.y,
      radius = _ref2.radius,
      value = _ref2.value;
  var radialPosition = {
    x: pointX - containerX - centerX,
    y: -(pointY - containerY - centerY)
  };
  var valuePosition = polarToCartesian({
    center: {
      x: 0,
      y: 0
    },
    angle: valueToAngle(value),
    radius: radius
  });
  var deltaTheta = calcAngleDiff(radialPosition.x, radialPosition.y, valuePosition.x, -valuePosition.y);
  var deltaValue = value + deltaTheta / 360;
  var nearestValue = deltaValue > 1 ? deltaValue - 1 : deltaValue;
  return nearestValue;
}
function calcAngleDiff(x1, y1, x2, y2) {
  var arcTangent = Math.atan2(x1 * y2 - y1 * x2, x1 * x2 + y1 * y2);

  if (arcTangent < 0) {
    arcTangent += 2 * Math.PI;
  }

  return arcTangent * 180 / Math.PI;
}
function valueToAngle(value) {
  return -value * DEG_360_IN_RAD + ANGLE_OFFSET;
}
function absPos(e) {
  var touchEvent = e.touches && e;

  if (touchEvent) {
    return {
      x: touchEvent.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: touchEvent.touches[0].pageY - (window.scrollY || window.pageYOffset)
    };
  }

  var mouseEvent = e.pageX && e;

  if (mouseEvent) {
    return {
      x: mouseEvent.pageX - (window.scrollX || window.pageXOffset),
      y: mouseEvent.pageY - (window.scrollY || window.pageYOffset)
    };
  }

  throw new Error('Unknown event type received (expected: MouseEvent | TouchEvent)');
}
function stopEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function getElementPosition(el) {
  if (!el) return;

  var _el$getBoundingClient = el.getBoundingClientRect(),
      x = _el$getBoundingClient.left,
      y = _el$getBoundingClient.top;

  return {
    x: x,
    y: y
  };
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tsx_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tsx-docs */ "tsx-docs");
/* harmony import */ var tsx_docs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tsx_docs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src */ "../src/index.ts");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tsx_docs__WEBPACK_IMPORTED_MODULE_1__["Lead"], null, "Welcome to your Docs", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "party"
  }, "\uD83C\uDF89")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__["CircularInput"], {
    value: 0.5
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We recommend following our", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://tsx-docs.now.sh/guide"
  }, "Guide"), " if you're not already doing it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You should also have a look at all the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://tsx-docs.now.sh/configuration"
  }, "configuration options"), ' ', "and the provided", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://tsx-docs.now.sh/components"
  }, "components"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tsx_docs__WEBPACK_IMPORTED_MODULE_1__["CodeHighlight"], {
    code: "\n\t\t\t\tnpm run dev\n\t\t\t\tnpm run build\n\t\t\t\tnpm run typecheck\n\t\t\t",
    language: "bash"
  }));
});

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/petecorreia/Work/react-circular-input/docs/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "tsx-docs":
/*!***************************!*\
  !*** external "tsx-docs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tsx-docs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map