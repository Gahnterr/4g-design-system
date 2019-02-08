(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.uxpin-merge/presets-6c425cb8-bb2c-487d-a87c-4d5da55545d7.js":
/*!**********************************************************************!*\
  !*** ./.uxpin-merge/presets-6c425cb8-bb2c-487d-a87c-4d5da55545d7.js ***!
  \**********************************************************************/
/*! exports provided: Preset1695cb0c86dd52789895dccff0c48c26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/Button/presets/0-default.jsx */ "./src/Button/presets/0-default.jsx");
/* harmony import */ var _src_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Preset1695cb0c86dd52789895dccff0c48c26", function() { return _src_Button_presets_0_default_jsx__WEBPACK_IMPORTED_MODULE_0___default.a; });



/***/ }),

/***/ "./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
}); // tslint:disable-next-line:function-name

function __uxpinParsePreset(type, props, ...children) {
  const displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
  return {
    children,
    name: displayName,
    props: JSON.parse(JSON.stringify(props)) || {},
    uxpinPresetElementType: 'CodeComponent',
    warnings: getPropertySerializationWarnings(props)
  };
}

function getPropertySerializationWarnings(props) {
  if (!props) {
    return [];
  }

  return Object.keys(props).reduce((warnings, propName) => {
    const propValue = props[propName];

    if (typeof propValue === 'function') {
      warnings.push({
        message: `Unsupported property \`${propName}\` of a type \`${typeof propValue}\``
      });
    }

    return warnings;
  }, []);
}

global.__uxpinParsePreset = __uxpinParsePreset;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/Button/presets/0-default.jsx":
/*!******************************************!*\
  !*** ./src/Button/presets/0-default.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@uxpin/merge-cli/node_modules/babel-loader/lib/index.js):\nSyntaxError: /mnt/c/Users/aoliva/Documents/4g-design-system/src/Button/presets/0-default.jsx: Unterminated JSX contents (4:34)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[33mButtonM\u001b[39m from \u001b[32m'../Button'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[33m<\u001b[39m\u001b[33mButtonM\u001b[39m uxpId\u001b[33m=\u001b[39m\u001b[32m\"1\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33mMergettonM\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[0m\n    at Object.raise (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Object.jsxReadToken (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3185:14)\n    at Object.getTokenFromCode (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3561:19)\n    at Object.getTokenFromCode (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:2261:20)\n    at Object.nextToken (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:4034:12)\n    at Object.next (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3974:10)\n    at Object.eat (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3979:12)\n    at Object.expect (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:5135:10)\n    at Object.jsxParseOpeningElementAfterName (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3451:10)\n    at Object.jsxParseOpeningElementAt (/mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@babel/parser/lib/index.js:3439:17)");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js ./.uxpin-merge/presets-6c425cb8-bb2c-487d-a87c-4d5da55545d7.js ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/c/Users/aoliva/Documents/4g-design-system/node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js */"./node_modules/@uxpin/merge-cli/src/steps/serialization/component/presets/jsx/compile/globals/__uxpinParsePreset.js");
module.exports = __webpack_require__(/*! /mnt/c/Users/aoliva/Documents/4g-design-system/.uxpin-merge/presets-6c425cb8-bb2c-487d-a87c-4d5da55545d7.js */"./.uxpin-merge/presets-6c425cb8-bb2c-487d-a87c-4d5da55545d7.js");


/***/ })

/******/ })));
//# sourceMappingURL=__bundle__presets-6c425cb8-bb2c-487d-a87c-4d5da55545d7.js.map