"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */,
/* 11 */
/*!************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/main.js?{"type":"appStyle"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 12).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 12 */
/*!************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 13);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "w-100": {
    "width": "750rpx"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "page": {
    "backgroundColor": "#EDEDED",
    "flex": 1
  },
  "main-bg-color": {
    "backgroundColor": "#08C060"
  },
  "main-bg-hover-color": {
    "backgroundColor": "#08d869"
  },
  "main-text-color": {
    "color": "#08C060"
  },
  "border-main": {
    "borderColor": "#08C060"
  },
  "bg-chat-item": {
    "backgroundColor": "#6BEE68"
  },
  "text-chat-item": {
    "color": "#6BEE68"
  }
}

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/*!**********************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/main.js?{"page":"pages%2Ftabbar%2Findex%2Findex"} ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 11);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_tabbar_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tabbar/index/index.nvue?mpType=page */ 32);

        
        
        
        _pages_tabbar_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_tabbar_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/tabbar/index/index'
        _pages_tabbar_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_tabbar_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),
/* 32 */
/*!**************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/pages/tabbar/index/index.nvue?mpType=page ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=0d734aa4&mpType=page */ 33);
/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 35);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "a048a3a0",
  false,
  _index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/chenli/artProgramming/uni-app/mock-wechat/pages/tabbar/index/index.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/*!********************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/pages/tabbar/index/index.nvue?vue&type=template&id=0d734aa4&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=0d734aa4&mpType=page */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_0d734aa4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/pages/tabbar/index/index.nvue?vue&type=template&id=0d734aa4&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: false,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c("freeNavBar", {
            attrs: { title: true, fixed: false, mockName: "仿微信(12)" }
          }),
          _vm._l(_vm.list, function(item, index) {
            return _c(
              "block",
              { key: index },
              [_c("freeMediaList", { attrs: { item: item, index: index } })],
              1
            )
          })
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 35 */
/*!**************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/pages/tabbar/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 36);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/pages/tabbar/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























var _freeNavBar = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 37));
var _freeMediaList = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-media-list.vue */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { freeNavBar: _freeNavBar.default, freeMediaList: _freeMediaList.default }, data: function data() {return { list: [{ avator: '/static/images/userpic.png', nickname: 'summer', update_time: 1590474002, data: '中午好哈~', noreadnum: 1 }, { avator: '/static/images/userpic.png', nickname: 'summer', update_time: 1590582238, data: '中午好哈~', noreadnum: 0 },
      {
        avator: '/static/images/userpic.png',
        nickname: 'summer',
        update_time: 1590582259,
        data: '中午好哈~',
        noreadnum: 0 }] };



  },
  filters: {
    formatTime: function formatTime(value) {
      return $Time.gettime(value);
    } },

  onLoad: function onLoad() {},
  methods: {} };exports.default = _default;

/***/ }),
/* 37 */
/*!********************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-nav-bar.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-nav-bar.vue?vue&type=template&id=037860b0& */ 38);
/* harmony import */ var _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-nav-bar.vue?vue&type=script&lang=js& */ 40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "26a55d3c",
  false,
  _free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-nav-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/*!***************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-nav-bar.vue?vue&type=template&id=037860b0& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-nav-bar.vue?vue&type=template&id=037860b0& */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_037860b0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 39 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-nav-bar.vue?vue&type=template&id=037860b0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: ["bg-light"], class: _vm.fixed ? "fixed-top" : "" },
      [
        _c("view", { style: _vm.statusBHeight }),
        _c(
          "view",
          {
            staticClass: [
              "w-100",
              "flex",
              "flex-row",
              "align-center",
              "justify-between"
            ],
            staticStyle: { height: "90rpx" }
          },
          [
            _c("view", { staticClass: ["flex", "align-center"] }, [
              _vm.title
                ? _c("u-text", { staticClass: ["font-md", "ml-3"] }, [
                    _vm._v(_vm._s(_vm.mockName))
                  ])
                : _vm._e()
            ]),
            _c(
              "view",
              { staticClass: ["flex", "flex-row", "align-center"] },
              [
                _c(
                  "view",
                  {
                    staticClass: ["flex", "align-center", "justify-center"],
                    staticStyle: { height: "90rpx", width: "90rpx" },
                    attrs: { hoverClass: "bg-hover-light" },
                    on: {
                      click: function($event) {
                        _vm.$emit("click")
                      }
                    }
                  },
                  [
                    _c("u-text", { staticClass: ["iconfont", "font-md"] }, [
                      _vm._v("")
                    ])
                  ]
                ),
                _c(
                  "view",
                  {
                    staticClass: ["flex", "align-center", "justify-center"],
                    staticStyle: { height: "90rpx", width: "90rpx" },
                    attrs: { hoverClass: "bg-hover-light" },
                    on: {
                      click: function($event) {
                        _vm.$emit("click")
                      }
                    }
                  },
                  [
                    _c("u-text", { staticClass: ["iconfont", "font-md"] }, [
                      _vm._v("")
                    ])
                  ]
                ),
                _c("free-icon-button", { on: { click: _vm.xxx } }, [
                  _c("u-text", [_vm._v("")])
                ])
              ],
              1
            )
          ]
        )
      ]
    ),
    _vm.fixed ? _c("view", { style: _vm.fixedStyle }) : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 40 */
/*!*********************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-nav-bar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-nav-bar.vue?vue&type=script&lang=js& */ 41);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-nav-bar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
































var _freeIconButton = _interopRequireDefault(__webpack_require__(/*! ./free-icon-button.vue */ 42));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { props: { title: { type: Boolean, default: false }, fixed: { type: Boolean, default: true }, mockName: { type: String, default: '' } }, components: { freeIconButton: _freeIconButton.default }, data: function data() {return { statusBarHeight: 0, navBarHeight: 0 };}, mounted: function mounted() {this.statusBarHeight = plus.navigator.getStatusbarHeight();__f__("log", 'statusBarHeight', this.statusBarHeight, " at components/free-ui/free-nav-bar.vue:62");this.navBarHeight = this.statusBarHeight + uni.upx2px(90);}, methods: {},
  computed: {
    statusBHeight: function statusBHeight() {
      return "height: ".concat(this.statusBarHeight, "px");
    },
    fixedStyle: function fixedStyle() {
      return "height: ".concat(this.navBarHeight, "px");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 6)["default"]))

/***/ }),
/* 42 */
/*!************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-icon-button.vue ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-icon-button.vue?vue&type=template&id=1cccd54d& */ 43);
/* harmony import */ var _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-icon-button.vue?vue&type=script&lang=js& */ 45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "9e5ea84e",
  false,
  _free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-icon-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 43 */
/*!*******************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-icon-button.vue?vue&type=template&id=1cccd54d& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-icon-button.vue?vue&type=template&id=1cccd54d& */ 44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_1cccd54d___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 44 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-icon-button.vue?vue&type=template&id=1cccd54d& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["flex", "align-center", "justify-center"],
      staticStyle: { height: "90rpx", width: "90rpx" },
      attrs: { hoverClass: "bg-hover-light" },
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "u-text",
        { staticClass: ["iconfont", "font-md"] },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 45 */
/*!*************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-icon-button.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-icon-button.vue?vue&type=script&lang=js& */ 46);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-icon-button.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//

/***/ }),
/* 47 */
/*!********************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/common/free-lib/time.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  // 计算当前日期星座
  getHoroscope: function getHoroscope(date) {
    var c = ['摩羯', '水瓶', '双鱼', '白羊', '金牛', '双子', '巨蟹', '狮子', '处女', '天秤', '天蝎', '射手', '摩羯'];
    date = new Date(date);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var startMonth = month - (day - 14 < '865778999988'.charAt(month));
    return c[startMonth] + '座';
  },
  // 计算指定时间与当前的时间差
  sumAge: function sumAge(data) {
    var dateBegin = new Date(data.replace(/-/g, "/"));
    var dateEnd = new Date(); //获取当前时间
    var dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    return dayDiff + "天 " + hours + "小时 ";
  },
  // 获取聊天时间（相差300s内的信息不会显示时间）
  getChatTime: function getChatTime(v1, v2) {
    v1 = v1.toString().length < 13 ? v1 * 1000 : v1;
    v2 = v2.toString().length < 13 ? v2 * 1000 : v2;
    if ((parseInt(v1) - parseInt(v2)) / 1000 > 300) {
      return this.gettime(v1);
    }
  },
  // 人性化时间格式
  gettime: function gettime(shorttime) {
    shorttime = shorttime.toString().length < 13 ? shorttime * 1000 : shorttime;
    var now = new Date().getTime();
    var cha = (now - parseInt(shorttime)) / 1000;

    if (cha < 43200) {
      // 当天
      return this.dateFormat(new Date(shorttime), "{A} {t}:{ii}");
    } else if (cha < 518400) {
      // 隔天 显示日期+时间
      return this.dateFormat(new Date(shorttime), "{Mon}月{DD}日 {A} {t}:{ii}");
    } else {
      // 隔年 显示完整日期+时间
      return this.dateFormat(new Date(shorttime), "{Y}-{MM}-{DD} {A} {t}:{ii}");
    }
  },

  parseNumber: function parseNumber(num) {
    return num < 10 ? "0" + num : num;
  },

  dateFormat: function dateFormat(date, formatStr) {
    var dateObj = {},
    rStr = /\{([^}]+)\}/,
    mons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    dateObj["Y"] = date.getFullYear();
    dateObj["M"] = date.getMonth() + 1;
    dateObj["MM"] = this.parseNumber(dateObj["M"]);
    dateObj["Mon"] = mons[dateObj['M'] - 1];
    dateObj["D"] = date.getDate();
    dateObj["DD"] = this.parseNumber(dateObj["D"]);
    dateObj["h"] = date.getHours();
    dateObj["hh"] = this.parseNumber(dateObj["h"]);
    dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
    dateObj["tt"] = this.parseNumber(dateObj["t"]);
    dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
    dateObj["i"] = date.getMinutes();
    dateObj["ii"] = this.parseNumber(dateObj["i"]);
    dateObj["s"] = date.getSeconds();
    dateObj["ss"] = this.parseNumber(dateObj["s"]);

    while (rStr.test(formatStr)) {
      formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
    }
    return formatStr;
  },
  // 获取年龄
  getAgeByBirthday: function getAgeByBirthday(data) {
    var birthday = new Date(data.replace(/-/g, "\/"));
    var d = new Date();
    return d.getFullYear() - birthday.getFullYear() - (d.getMonth() < birthday.getMonth() || d.getMonth() == birthday.getMonth() && d.getDate() < birthday.getDate() ? 1 : 0);
  } };exports.default = _default;

/***/ }),
/* 48 */
/*!*******************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-avator.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-avator.vue?vue&type=template&id=2069bc14& */ 49);
/* harmony import */ var _free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-avator.vue?vue&type=script&lang=js& */ 51);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "f6b603f0",
  false,
  _free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-avator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 49 */
/*!**************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-avator.vue?vue&type=template&id=2069bc14& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-avator.vue?vue&type=template&id=2069bc14& */ 50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_template_id_2069bc14___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 50 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-avator.vue?vue&type=template&id=2069bc14& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["flex", "align-center", "justify-center"],
      staticStyle: { width: "145rpx" }
    },
    [
      _c("u-image", {
        class: _vm.type,
        style: _vm.getStyle,
        attrs: { src: _vm.src, mode: "widthFix" }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 51 */
/*!********************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-avator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-avator.vue?vue&type=script&lang=js& */ 52);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_avator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-avator.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  props: {
    size: {
      type: [String, Number],
      default: 90 },

    src: {
      type: String,
      default: '' },

    type: {
      type: String,
      default: 'rounded' } },


  computed: {
    getStyle: function getStyle() {
      return "width: ".concat(this.size, "rpx; height: ").concat(this.size, "rpx");
    } } };exports.default = _default;

/***/ }),
/* 53 */
/*!******************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-badge.vue?vue&type=template&id=0b4d3eaa&scoped=true& */ 54);
/* harmony import */ var _free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-badge.vue?vue&type=script&lang=js& */ 56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./free-badge.vue?vue&type=style&index=0&id=0b4d3eaa&scoped=true&lang=css& */ 58).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./free-badge.vue?vue&type=style&index=0&id=0b4d3eaa&scoped=true&lang=css& */ 58).default)
            }

}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b4d3eaa",
  "eb302394",
  false,
  _free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 54 */
/*!*************************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue?vue&type=template&id=0b4d3eaa&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-badge.vue?vue&type=template&id=0b4d3eaa&scoped=true& */ 55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_template_id_0b4d3eaa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 55 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue?vue&type=template&id=0b4d3eaa&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "u-text",
    {
      staticClass: [
        "free-badge",
        "bg-danger",
        "text-white",
        "rounded-circle",
        "font-sm"
      ],
      class: _vm.badgeClass,
      style: _vm.badgeStyle
    },
    [_vm._v(_vm._s(_vm.badgeNum))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 56 */
/*!*******************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-badge.vue?vue&type=script&lang=js& */ 57);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
var _default =
{
  props: {
    badgeClass: {
      type: String,
      default: '' },

    badgeStyle: {
      type: String,
      default: '' },

    badgeNum: {
      type: [Number, String],
      default: '' } },


  data: function data() {
    return {};


  } };exports.default = _default;

/***/ }),
/* 58 */
/*!***************************************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue?vue&type=style&index=0&id=0b4d3eaa&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_style_index_0_id_0b4d3eaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-badge.vue?vue&type=style&index=0&id=0b4d3eaa&scoped=true&lang=css& */ 59);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_style_index_0_id_0b4d3eaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_style_index_0_id_0b4d3eaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_style_index_0_id_0b4d3eaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_style_index_0_id_0b4d3eaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_badge_vue_vue_type_style_index_0_id_0b4d3eaa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-badge.vue?vue&type=style&index=0&id=0b4d3eaa&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "free-badge": {
    "paddingLeft": "14rpx",
    "paddingRight": "14rpx",
    "paddingBottom": "6rpx",
    "paddingTop": "6rpx"
  }
}

/***/ }),
/* 60 */
/*!***********************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-media-list.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-media-list.vue?vue&type=template&id=99ca0920& */ 61);
/* harmony import */ var _free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-media-list.vue?vue&type=script&lang=js& */ 63);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 9);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "233c2364",
  false,
  _free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-media-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 61 */
/*!******************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-media-list.vue?vue&type=template&id=99ca0920& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-media-list.vue?vue&type=template&id=99ca0920& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_template_id_99ca0920___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 62 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-media-list.vue?vue&type=template&id=99ca0920& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { attrs: { hoverClass: "bg-hover-light" } }, [
    _c(
      "div",
      {
        staticClass: ["flex", "flex-row", "align-stretch"],
        attrs: { hoverClass: "bg-hover-light" },
        on: { click: _vm.onClick, longpress: _vm.long }
      },
      [
        _c(
          "view",
          {
            staticClass: [
              "flex",
              "flex-row",
              "align-center",
              "justify-center",
              "position-relative"
            ],
            staticStyle: { width: "145rpx" }
          },
          [
            _c("free-avator", { attrs: { src: _vm.item.avator, size: 92 } }),
            _vm.item.noreadnum
              ? _c("free-badge", {
                  attrs: {
                    badgeClass: "position-absolute",
                    badgeStyle: "right:15rpx; top:15rpx",
                    badgeNum: _vm.item.noreadnum
                  }
                })
              : _vm._e()
          ],
          1
        ),
        _c(
          "view",
          {
            staticClass: [
              "flex",
              "flex-column",
              "border-bottom",
              "flex-1",
              "py-3",
              "pr-3",
              "border-light-secondary"
            ]
          },
          [
            _c(
              "view",
              {
                staticClass: [
                  "flex",
                  "flex-row",
                  "align-center",
                  "justify-between",
                  "mb-1"
                ]
              },
              [
                _c("u-text", { staticClass: ["font-md"] }, [
                  _vm._v(_vm._s(_vm.item.nickname))
                ]),
                _c("u-text", { staticClass: ["font-sm", "text-light-muted"] }, [
                  _vm._v(_vm._s(_vm._f("formatTime")(_vm.item.update_time)))
                ])
              ]
            ),
            _c(
              "u-text",
              { staticClass: ["font", "text-ellipsis", "text-light-muted"] },
              [_vm._v(_vm._s(_vm.item.data))]
            )
          ]
        )
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 63 */
/*!************************************************************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-media-list.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-media-list.vue?vue&type=script&lang=js& */ 64);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_media_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 64 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/chenli/artProgramming/uni-app/mock-wechat/components/free-ui/free-media-list.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























var _freeBase = _interopRequireDefault(__webpack_require__(/*! @/common/mixin/free-base.js */ 65));
var _freeAvator = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-avator.vue */ 48));
var _freeBadge = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-badge.vue */ 53));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { mixins: [_freeBase.default], props: { item: Object, index: Number }, components: { freeAvator: _freeAvator.default, freeBadge: _freeBadge.default }, methods: { onClick: function onClick(e) {this.$emit('click');__f__("log", '点击事件', e, " at components/free-ui/free-media-list.vue:41");}, long: function long(e) {__f__("log", '长按事件', e, " at components/free-ui/free-media-list.vue:44");} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 6)["default"]))

/***/ }),
/* 65 */
/*!**********************************************************************************!*\
  !*** /Users/chenli/artProgramming/uni-app/mock-wechat/common/mixin/free-base.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _time = _interopRequireDefault(__webpack_require__(/*! @/common/free-lib/time.js */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  filters: {
    formatTime: function formatTime(value) {
      return _time.default.gettime(value);
    } } };exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXA/N2Y4MCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvbWFpbi5qcz9hNzkwIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvQXBwLnZ1ZT84ZTAxIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvQXBwLnZ1ZT8xYTgwIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvbWFpbi5qcz81NzdlIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvcGFnZXMvdGFiYmFyL2luZGV4L2luZGV4Lm52dWU/YjM4YyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L3BhZ2VzL3RhYmJhci9pbmRleC9pbmRleC5udnVlPzNhY2IiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9wYWdlcy90YWJiYXIvaW5kZXgvaW5kZXgubnZ1ZT81NTYxIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvcGFnZXMvdGFiYmFyL2luZGV4L2luZGV4Lm52dWU/YmIwOSIsInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2luZGV4L2luZGV4Lm52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZT82OTQ5Iiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWU/Y2ZhOCIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlPzRmYmQiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZT8zYzU5IiwidW5pLWFwcDovLy9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT83MmMzIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtaWNvbi1idXR0b24udnVlPzdhNGIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1pY29uLWJ1dHRvbi52dWU/OWFmNyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT8xZGI4IiwidW5pLWFwcDovLy9jb21tb24vZnJlZS1saWIvdGltZS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWF2YXRvci52dWU/NTM1MSIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWF2YXRvci52dWU/Nzc3MyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWF2YXRvci52dWU/MTgyOSIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWF2YXRvci52dWU/YzVmYyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtYXZhdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWJhZGdlLnZ1ZT9lZmI2Iiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtYmFkZ2UudnVlPzFiZTYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1iYWRnZS52dWU/YzdmMyIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWJhZGdlLnZ1ZT8wZmRmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1iYWRnZS52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1iYWRnZS52dWU/ZGYxOSIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWJhZGdlLnZ1ZT9hMjk1Iiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbWVkaWEtbGlzdC52dWU/YTQwOSIsIndlYnBhY2s6Ly8vL1VzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW1lZGlhLWxpc3QudnVlP2MxNTUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1tZWRpYS1saXN0LnZ1ZT9mNjlkIiwid2VicGFjazovLy8vVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbWVkaWEtbGlzdC52dWU/NDM2OCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbWVkaWEtbGlzdC52dWUiLCJ1bmktYXBwOi8vL2NvbW1vbi9taXhpbi9mcmVlLWJhc2UuanMiXSwibmFtZXMiOlsidHlwb2YiLCJ2IiwicyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsInR5cGUiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicHVzaCIsInBvcCIsInJlcGxhY2UiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJnZXRIb3Jvc2NvcGUiLCJkYXRlIiwiYyIsIkRhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInN0YXJ0TW9udGgiLCJjaGFyQXQiLCJzdW1BZ2UiLCJkYXRhIiwiZGF0ZUJlZ2luIiwiZGF0ZUVuZCIsImRhdGVEaWZmIiwiZ2V0VGltZSIsImRheURpZmYiLCJNYXRoIiwiZmxvb3IiLCJsZWF2ZTEiLCJob3VycyIsImxlYXZlMiIsIm1pbnV0ZXMiLCJsZWF2ZTMiLCJzZWNvbmRzIiwicm91bmQiLCJnZXRDaGF0VGltZSIsInYxIiwidjIiLCJwYXJzZUludCIsImdldHRpbWUiLCJzaG9ydHRpbWUiLCJub3ciLCJjaGEiLCJkYXRlRm9ybWF0IiwicGFyc2VOdW1iZXIiLCJudW0iLCJmb3JtYXRTdHIiLCJkYXRlT2JqIiwiclN0ciIsIm1vbnMiLCJnZXRGdWxsWWVhciIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJ0ZXN0IiwiUmVnRXhwIiwiJDEiLCJnZXRBZ2VCeUJpcnRoZGF5IiwiYmlydGhkYXkiLCJkIiwiZmlsdGVycyIsImZvcm1hdFRpbWUiLCJ2YWx1ZSIsIiRUaW1lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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UEEsRUFWQSxFOzs7Ozs7Ozs7Ozs7dUZDM0JBLDZGO0FBQ2U7QUFDZDRDLFNBQU8sRUFBRTtBQUNSQyxjQURRLHNCQUNHQyxLQURILEVBQ1U7QUFDakIsYUFBT0MsY0FBTXhCLE9BQU4sQ0FBY3VCLEtBQWQsQ0FBUDtBQUNBLEtBSE8sRUFESyxFIiwiZmlsZSI6InBhZ2VzL3RhYmJhci9pbmRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMSk7XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxufVxuXG5mdW5jdGlvbiBpc0RlYnVnTW9kZSAoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gIHJldHVybiB0eXBlb2YgX19jaGFubmVsSWRfXyA9PT0gJ3N0cmluZycgJiYgX19jaGFubmVsSWRfX1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9nICh0eXBlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxuICB9XG4gIHZhciB0eXBlID0gYXJncy5zaGlmdCgpXG4gIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgYXJncy5wdXNoKGFyZ3MucG9wKCkucmVwbGFjZSgnYXQgJywgJ3VuaS1hcHA6Ly8vJykpXG4gICAgcmV0dXJuIGNvbnNvbGVbdHlwZV0uYXBwbHkoY29uc29sZSwgYXJncylcbiAgfVxuXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KS50b0xvd2VyQ2FzZSgpXG5cbiAgICBpZiAodHlwZSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScgfHwgdHlwZSA9PT0gJ1tvYmplY3QgYXJyYXldJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZcbiAgfSlcbiAgdmFyIG1zZyA9ICcnXG5cbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxuXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XG4gICAgICBtc2cgKz0gbGFzdE1zZ1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbXNnID0gbXNnc1swXVxuICB9XG5cbiAgY29uc29sZVt0eXBlXShtc2cpXG59XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwidmlld1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOCxcbiAgICBcImNvbG9yXCI6IFwiIzBFMTUxRFwiXG4gIH0sXG4gIFwidGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOCxcbiAgICBcImNvbG9yXCI6IFwiIzBFMTUxRFwiXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIi0yMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIi0yMHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJjb2wtMVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE4Ny41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyNTBycHhcIlxuICB9LFxuICBcImNvbC01XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIzNzVycHhcIlxuICB9LFxuICBcImNvbC03XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQzNy41cnB4XCJcbiAgfSxcbiAgXCJjb2wtOFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjU2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtMTBcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjI1cnB4XCJcbiAgfSxcbiAgXCJjb2wtMTFcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0xMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYyNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC05XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1NjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC04XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtN1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDM3LjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtNlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzc1cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxODcuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcImZsZXhcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcImZsZXgtY29sdW1uLXJldmVyc2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtbi1yZXZlcnNlXCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJmbGV4LW5vd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwianVzdGlmeS1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImp1c3RpZnktZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImp1c3RpZnktYmV0d2VlblwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYWxpZ24tc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYWxpZ24tc3RhcnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImFsaWduLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LTJcIjoge1xuICAgIFwiZmxleFwiOiAyXG4gIH0sXG4gIFwiZmxleC0zXCI6IHtcbiAgICBcImZsZXhcIjogM1xuICB9LFxuICBcImZsZXgtNFwiOiB7XG4gICAgXCJmbGV4XCI6IDRcbiAgfSxcbiAgXCJmbGV4LTVcIjoge1xuICAgIFwiZmxleFwiOiA1XG4gIH0sXG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJtLTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm0tMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtLTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm0tNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtbC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWwtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1sLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXItMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXgtMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwLTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicC0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHQtMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDBcbiAgfSxcbiAgXCJwdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHQtMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInB0LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwdC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHQtNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB0LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwYi0wXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInBiLTFcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicGItMlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBiLTNcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwYi00XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGItNVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBsLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInBsXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicGwtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwbC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBsLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGwtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwbC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInByLTBcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJwclwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweS0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInB5XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHktMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHktMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHktM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHktNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHktNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHgtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJweC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVycHhcIlxuICB9LFxuICBcInB4LTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB4LTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInB4LTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB4LTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcImZvbnQtc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cnB4XCJcbiAgfSxcbiAgXCJmb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXJweFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJoMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImgyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0NXJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJoNFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImg1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJ0ZXh0LXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInRleHQtbGVmdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0ZXh0LXJpZ2h0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJ0ZXh0LWNlbnRlclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRleHQtZWxsaXBzaXNcIjoge1xuICAgIFwibGluZXNcIjogMVxuICB9LFxuICBcImZvbnQtd2VpZ2h0LWxpZ2h0XCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCIzMDBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LWxpZ2h0ZXJcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjEwMFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHQtbm9ybWFsXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI0MDBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LWJvbGRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjcwMFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHQtYm9sZGVyXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJmb250LWl0YWxpY1wiOiB7XG4gICAgXCJmb250U3R5bGVcIjogXCJpdGFsaWNcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJ0ZXh0LXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJ0ZXh0LWhvdmVyLXByaW1hcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA1NmIzXCJcbiAgfSxcbiAgXCJ0ZXh0LXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcInRleHQtaG92ZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzQ5NGY1NFwiXG4gIH0sXG4gIFwidGV4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzE5NjkyY1wiXG4gIH0sXG4gIFwidGV4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzBmNjY3NFwiXG4gIH0sXG4gIFwidGV4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2JhOGIwMFwiXG4gIH0sXG4gIFwidGV4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJ0ZXh0LWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNhNzFkMmFcIlxuICB9LFxuICBcInRleHQtbGlnaHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJ0ZXh0LWhvdmVyLWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2NiZDNkYVwiXG4gIH0sXG4gIFwidGV4dC1kYXJrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1kYXJrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzEyMTQxNlwiXG4gIH0sXG4gIFwidGV4dC1ib2R5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzIxMjUyOVwiXG4gIH0sXG4gIFwidGV4dC1tdXRlZFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcInRleHQtbGlnaHQtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjQTlBNUEwXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0LWJsYWNrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjUpXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0LXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjUpXCJcbiAgfSxcbiAgXCJiZy1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDdiZmZcIlxuICB9LFxuICBcImJnLWhvdmVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzAwNjJjY1wiXG4gIH0sXG4gIFwiYmctc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJnLWhvdmVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6aG92ZXJcIjogXCIjNTQ1YjYyXCJcbiAgfSxcbiAgXCJiZy1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFlN2UzNFwiXG4gIH0sXG4gIFwiYmctaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxMTdhOGJcIlxuICB9LFxuICBcImJnLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmYzEwN1wiXG4gIH0sXG4gIFwiYmctaG92ZXItd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDM5ZTAwXCJcbiAgfSxcbiAgXCJiZy1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYmctaG92ZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNiZDIxMzBcIlxuICB9LFxuICBcImJnLWxpZ2h0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY5ZmFcIlxuICB9LFxuICBcImJnLWhvdmVyLWxpZ2h0XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYWUwZTVcIlxuICB9LFxuICBcImJnLWRhcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzM0M2E0MFwiXG4gIH0sXG4gIFwiYmctaG92ZXItZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMWQyMTI0XCJcbiAgfSxcbiAgXCJiZy13aGl0ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy10cmFuc3BhcmVudFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCJib3JkZXJcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci10b3BcIjoge1xuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJUb3BTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLWxlZnRcIjoge1xuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkZWUyZTZcIlxuICB9LFxuICBcImJvcmRlci0wXCI6IHtcbiAgICBcImJvcmRlcldpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItdG9wLTBcIjoge1xuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1yaWdodC0wXCI6IHtcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1ib3R0b20tMFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLWxlZnQtMFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwiYm9yZGVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiM2Yzc1N2RcIlxuICB9LFxuICBcImJvcmRlci1saWdodC1zZWNvbmRhcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjRTlFOEU1XCJcbiAgfSxcbiAgXCJib3JkZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcImJvcmRlci1pbmZvXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYm9yZGVyLXdhcm5pbmdcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmZjMTA3XCJcbiAgfSxcbiAgXCJib3JkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYm9yZGVyLWRhcmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJib3JkZXItd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJyb3VuZGVkXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjhycHhcIlxuICB9LFxuICBcInJvdW5kZWQtdG9wXCI6IHtcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjhycHhcIlxuICB9LFxuICBcInJvdW5kZWQtcmlnaHRcIjoge1xuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21SaWdodFJhZGl1c1wiOiBcIjhycHhcIlxuICB9LFxuICBcInJvdW5kZWQtYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiBcIjhycHhcIlxuICB9LFxuICBcInJvdW5kZWQtbGVmdFwiOiB7XG4gICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCI6IFwiOHJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tTGVmdFJhZGl1c1wiOiBcIjhycHhcIlxuICB9LFxuICBcInJvdW5kZWQtY2lyY2xlXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC0wXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwib3ZlcmZsb3ctaGlkZGVuXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJwb3NpdGlvbi1yZWxhdGl2ZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJwb3NpdGlvbi1hYnNvbHV0ZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCJcbiAgfSxcbiAgXCJwb3NpdGlvbi1maXhlZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCJcbiAgfSxcbiAgXCJmaXhlZC10b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwiekluZGV4XCI6IDEwMzBcbiAgfSxcbiAgXCJmaXhlZC1ib3R0b21cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwiekluZGV4XCI6IDEwMzBcbiAgfSxcbiAgXCJ0b3AtMFwiOiB7XG4gICAgXCJ0b3BcIjogMFxuICB9LFxuICBcImxlZnQtMFwiOiB7XG4gICAgXCJsZWZ0XCI6IDBcbiAgfSxcbiAgXCJyaWdodC0wXCI6IHtcbiAgICBcInJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJib3R0b20tMFwiOiB7XG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcInBhZ2VcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VERURFRFwiLFxuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwibWFpbi1iZy1jb2xvclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDhDMDYwXCJcbiAgfSxcbiAgXCJtYWluLWJnLWhvdmVyLWNvbG9yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwOGQ4NjlcIlxuICB9LFxuICBcIm1haW4tdGV4dC1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwOEMwNjBcIlxuICB9LFxuICBcImJvcmRlci1tYWluXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzA4QzA2MFwiXG4gIH0sXG4gIFwiYmctY2hhdC1pdGVtXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2QkVFNjhcIlxuICB9LFxuICBcInRleHQtY2hhdC1pdGVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZCRUU2OFwiXG4gIH1cbn0iLCJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3RhYmJhci9pbmRleC9pbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy90YWJiYXIvaW5kZXgvaW5kZXgnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDczNGFhNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiYTA0OGEzYTBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvcGFnZXMvdGFiYmFyL2luZGV4L2luZGV4Lm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDczNGFhNCZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHNjcm9sbFk6IHRydWUsXG4gICAgICAgIHNob3dTY3JvbGxiYXI6IGZhbHNlLFxuICAgICAgICBlbmFibGVCYWNrVG9Ub3A6IHRydWUsXG4gICAgICAgIGJ1YmJsZTogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnJlZU5hdkJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0aXRsZTogdHJ1ZSwgZml4ZWQ6IGZhbHNlLCBtb2NrTmFtZTogXCLku7/lvq7kv6EoMTIpXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJibG9ja1wiLFxuICAgICAgICAgICAgICB7IGtleTogaW5kZXggfSxcbiAgICAgICAgICAgICAgW19jKFwiZnJlZU1lZGlhTGlzdFwiLCB7IGF0dHJzOiB7IGl0ZW06IGl0ZW0sIGluZGV4OiBpbmRleCB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PCEtLSA8dmlldyBjbGFzcz1cImZsZXhcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgbWFpbi1iZy1jb2xvciByb3VuZGVkLWNpcmNsZSBib3JkZXJcIiBzdHlsZT1cImhlaWdodDogMjAwcnB4O1wiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgcm91bmRlZC1jaXJjbGUgYm9yZGVyXCIgc3R5bGU9XCJoZWlnaHQ6IDIwMHJweDtcIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+IC0tPlxyXG5cdFx0PCEtLSBcdDx2aWV3IGNsYXNzPVwicHQtNVwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IGZvbnQtbGdcIj4mI3hlNmRjOzwvdGV4dD5cclxuXHRcdDwvdmlldz4gLS0+XHJcblx0XHQ8IS0tIOWvvOiIquagjyAtLT5cclxuXHRcdDxmcmVlTmF2QmFyIDp0aXRsZT1cInRydWVcIiA6Zml4ZWQ9XCJmYWxzZVwiIG1vY2stbmFtZT1cIuS7v+W+ruS/oSgxMilcIj5cclxuXHRcdFx0PCEtLSA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+XHJcblx0XHRcdFx05Lu/5b6u5L+hKDEyKVxyXG5cdFx0XHQ8L3RlbXBsYXRlPiAtLT5cclxuXHRcdDwvZnJlZU5hdkJhcj5cclxuXHJcblx0XHQ8IS0tIOWIl+ihqCAtLT5cclxuXHRcdDxibG9jayB2LWZvcj1cIihpdGVtLCBpbmRleCkgb2YgbGlzdFwiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0PGZyZWVNZWRpYUxpc3QgOml0ZW09XCJpdGVtXCIgOmluZGV4PVwiaW5kZXhcIj48L2ZyZWVNZWRpYUxpc3Q+XHJcblx0XHQ8L2Jsb2NrPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBmcmVlTmF2QmFyIGZyb20gJ0AvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWUnO1xyXG5pbXBvcnQgZnJlZU1lZGlhTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW1lZGlhLWxpc3QudnVlJztcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0ZnJlZU5hdkJhcixcblx0XHRmcmVlTWVkaWFMaXN0XHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bGlzdDogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGF2YXRvcjogJy9zdGF0aWMvaW1hZ2VzL3VzZXJwaWMucG5nJyxcclxuXHRcdFx0XHRcdG5pY2tuYW1lOiAnc3VtbWVyJyxcclxuXHRcdFx0XHRcdHVwZGF0ZV90aW1lOiAxNTkwNDc0MDAyLFxyXG5cdFx0XHRcdFx0ZGF0YTogJ+S4reWNiOWlveWTiH4nLFxuXHRcdFx0XHRcdG5vcmVhZG51bTogMVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0YXZhdG9yOiAnL3N0YXRpYy9pbWFnZXMvdXNlcnBpYy5wbmcnLFxyXG5cdFx0XHRcdFx0bmlja25hbWU6ICdzdW1tZXInLFxyXG5cdFx0XHRcdFx0dXBkYXRlX3RpbWU6IDE1OTA1ODIyMzgsXHJcblx0XHRcdFx0XHRkYXRhOiAn5Lit5Y2I5aW95ZOIficsXG5cdFx0XHRcdFx0bm9yZWFkbnVtOiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhdmF0b3I6ICcvc3RhdGljL2ltYWdlcy91c2VycGljLnBuZycsXHJcblx0XHRcdFx0XHRuaWNrbmFtZTogJ3N1bW1lcicsXHJcblx0XHRcdFx0XHR1cGRhdGVfdGltZTogMTU5MDU4MjI1OSxcclxuXHRcdFx0XHRcdGRhdGE6ICfkuK3ljYjlpb3lk4h+Jyxcblx0XHRcdFx0XHRub3JlYWRudW06IDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fSxcclxuXHRmaWx0ZXJzOiB7XHJcblx0XHRmb3JtYXRUaW1lKHZhbHVlKSB7XHJcblx0XHRcdHJldHVybiAkVGltZS5nZXR0aW1lKHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uTG9hZCgpIHt9LFxyXG5cdG1ldGhvZHM6IHt9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM3ODYwYjAmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjI2YTU1ZDNjXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIlVzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM3ODYwYjAmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZpZXdcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ2aWV3XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBbXCJiZy1saWdodFwiXSwgY2xhc3M6IF92bS5maXhlZCA/IFwiZml4ZWQtdG9wXCIgOiBcIlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwidmlld1wiLCB7IHN0eWxlOiBfdm0uc3RhdHVzQkhlaWdodCB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICBcImZsZXhcIixcbiAgICAgICAgICAgICAgXCJmbGV4LXJvd1wiLFxuICAgICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICBcImp1c3RpZnktYmV0d2VlblwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjkwcnB4XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZsZXhcIiwgXCJhbGlnbi1jZW50ZXJcIl0gfSwgW1xuICAgICAgICAgICAgICBfdm0udGl0bGVcbiAgICAgICAgICAgICAgICA/IF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIiwgXCJtbC0zXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubW9ja05hbWUpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImZsZXgtcm93XCIsIFwiYWxpZ24tY2VudGVyXCJdIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCJdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiOTBycHhcIiwgd2lkdGg6IFwiOTBycHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBob3ZlckNsYXNzOiBcImJnLWhvdmVyLWxpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIiwgXCJmb250LW1kXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLum6NcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmbGV4XCIsIFwiYWxpZ24tY2VudGVyXCIsIFwianVzdGlmeS1jZW50ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiLCB3aWR0aDogXCI5MHJweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhvdmVyQ2xhc3M6IFwiYmctaG92ZXItbGlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJpY29uZm9udFwiLCBcImZvbnQtbWRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIu6aglwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS54eHggfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCBbX3ZtLl92KFwi7pujXCIpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uZml4ZWQgPyBfYyhcInZpZXdcIiwgeyBzdHlsZTogX3ZtLmZpeGVkU3R5bGUgfSkgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0PHZpZXcgY2xhc3M9XCJiZy1saWdodFwiIDpjbGFzcz1cImZpeGVkID8gJ2ZpeGVkLXRvcCcgOiAnJyBcIj5cblx0XHRcdDwhLS0g54q25oCB5qCPIC0tPlxuXHRcdFx0PHZpZXcgOnN0eWxlPVwic3RhdHVzQkhlaWdodFwiPjwvdmlldz5cblx0XHRcdDwhLS0g5a+86IiqIC0tPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3LTEwMCBmbGV4IGZsZXgtcm93IGFsaWduLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiBzdHlsZT1cImhlaWdodDo5MHJweFwiPlxuXHRcdFx0XHQ8IS0tIOW3pui+uSAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxuXHRcdFx0XHRcdDwhLS0g5qCH6aKYIC0tPlxuXHRcdFx0XHRcdDwhLS0gPHRleHQgdi1pZj1cInRpdGxlXCIgY2xhc3M9XCJmb250LW1kIG1sLTNcIj48c2xvdCBuYW1lPVwidGl0bGVcIj48L3Nsb3Q+PC90ZXh0PiAtLT5cblx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwidGl0bGVcIiBjbGFzcz1cImZvbnQtbWQgbWwtM1wiPnt7bW9ja05hbWV9fTwvdGV4dD5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8IS0tIOWPs+i+uSAtLT5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGFsaWduLWNlbnRlclwiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBob3Zlci1jbGFzcz1cImJnLWhvdmVyLWxpZ2h0XCIgc3R5bGU9XCJoZWlnaHQ6IDkwcnB4OyB3aWR0aDo5MHJweDtcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snKVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBmb250LW1kXCI+JiN4ZTZlMzs8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBob3Zlci1jbGFzcz1cImJnLWhvdmVyLWxpZ2h0XCIgc3R5bGU9XCJoZWlnaHQ6IDkwcnB4OyB3aWR0aDo5MHJweDtcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snKVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBmb250LW1kXCI+JiN4ZTY4Mjs8L3RleHQ+XG5cdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDxmcmVlLWljb24tYnV0dG9uIEBjbGljaz1cInh4eFwiPiYjeGU2ZTM7PC9mcmVlLWljb24tYnV0dG9uPlxuXHRcdFx0XHRcdDwhLS0gPGZyZWUtaWNvbi1idXR0b24+JiN4ZTY4Mjs8L2ZyZWUtaWNvbi1idXR0b24+IC0tPlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDwhLS0g5Y2g5L2NIC0tPlxuXHRcdDwhLS0gPHZpZXcgOnN0eWxlPVwiJ2hlaWdodDonICsgdGhpcy5uYXZCYXJIZWlnaHQgKyAncHgnXCI+PC92aWV3PiAtLT5cblx0XHQ8dmlldyB2LWlmPVwiZml4ZWRcIiA6c3R5bGU9XCJmaXhlZFN0eWxlXCI+PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGZyZWVJY29uQnV0dG9uIGZyb20gJy4vZnJlZS1pY29uLWJ1dHRvbi52dWUnO1xuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuXHRcdHRpdGxlOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHR9LFxuXHRcdGZpeGVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdH0sXG5cdFx0bW9ja05hbWU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0fVxuXHR9LFxuXHRjb21wb25lbnRzOiB7XG5cdFx0ZnJlZUljb25CdXR0b25cblx0fSxcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzQmFySGVpZ2h0OiAwLFxuXHRcdFx0bmF2QmFySGVpZ2h0OiAwXG5cdFx0fTtcblx0fSxcblx0bW91bnRlZCgpIHtcblx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxuXHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gcGx1cy5uYXZpZ2F0b3IuZ2V0U3RhdHVzYmFySGVpZ2h0KCk7XG5cdFx0Y29uc29sZS5sb2coJ3N0YXR1c0JhckhlaWdodCcsIHRoaXMuc3RhdHVzQmFySGVpZ2h0KTtcblx0XHR0aGlzLm5hdkJhckhlaWdodCA9IHRoaXMuc3RhdHVzQmFySGVpZ2h0ICsgdW5pLnVweDJweCg5MCk7XG5cdFx0Ly8gI2VuZGlmXG5cdH0sXG5cdG1ldGhvZHM6IHt9LFxuXHRjb21wdXRlZDoge1xuXHRcdHN0YXR1c0JIZWlnaHQoKSB7XG5cdFx0XHRyZXR1cm4gYGhlaWdodDogJHt0aGlzLnN0YXR1c0JhckhlaWdodH1weGA7XG5cdFx0fSxcblx0XHRmaXhlZFN0eWxlKCkge1xuXHRcdFx0cmV0dXJuIGBoZWlnaHQ6ICR7dGhpcy5uYXZCYXJIZWlnaHR9cHhgO1xuXHRcdH1cblx0fVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+PC9zdHlsZT5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZnJlZS1pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWNjY2Q1NGQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJlZS1pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOWU1ZWE4NGVcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtaWNvbi1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjY2NkNTRkJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXhcIiwgXCJhbGlnbi1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiXSxcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiLCB3aWR0aDogXCI5MHJweFwiIH0sXG4gICAgICBhdHRyczogeyBob3ZlckNsYXNzOiBcImJnLWhvdmVyLWxpZ2h0XCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIiwgXCJmb250LW1kXCJdIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0IGRlZmF1bHR7XHJcblx0Ly8g6K6h566X5b2T5YmN5pel5pyf5pif5bqnXHJcblx0Z2V0SG9yb3Njb3BlKGRhdGUpIHtcclxuXHQgIGxldCBjID0gWyfmkannvq8nLCfmsLTnk7YnLCflj4zpsbwnLCfnmb3nvoonLCfph5HniZsnLCflj4zlrZAnLCflt6jon7knLCfni67lrZAnLCflpITlpbMnLCflpKnnp6QnLCflpKnonY4nLCflsITmiYsnLCfmkannvq8nXVxyXG5cdCAgZGF0ZT1uZXcgRGF0ZShkYXRlKTtcclxuXHQgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0ICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0ICBsZXQgc3RhcnRNb250aCA9IG1vbnRoIC0gKGRheSAtIDE0IDwgJzg2NTc3ODk5OTk4OCcuY2hhckF0KG1vbnRoKSk7XHJcblx0ICByZXR1cm4gY1tzdGFydE1vbnRoXSsn5bqnJztcclxuXHR9LFxyXG5cdC8vIOiuoeeul+aMh+WumuaXtumXtOS4juW9k+WJjeeahOaXtumXtOW3rlxyXG5cdHN1bUFnZShkYXRhKXtcclxuXHRcdGxldCBkYXRlQmVnaW4gPSBuZXcgRGF0ZShkYXRhLnJlcGxhY2UoLy0vZywgXCIvXCIpKTtcclxuXHRcdGxldCBkYXRlRW5kID0gbmV3IERhdGUoKTsvL+iOt+WPluW9k+WJjeaXtumXtFxyXG5cdFx0bGV0IGRhdGVEaWZmID0gZGF0ZUVuZC5nZXRUaW1lKCkgLSBkYXRlQmVnaW4uZ2V0VGltZSgpOy8v5pe26Ze05beu55qE5q+r56eS5pWwXHJcblx0XHRsZXQgZGF5RGlmZiA9IE1hdGguZmxvb3IoZGF0ZURpZmYgLyAoMjQgKiAzNjAwICogMTAwMCkpOy8v6K6h566X5Ye655u45beu5aSp5pWwXHJcblx0XHRsZXQgbGVhdmUxPWRhdGVEaWZmJSgyNCozNjAwKjEwMDApICAgIC8v6K6h566X5aSp5pWw5ZCO5Ymp5L2Z55qE5q+r56eS5pWwXHJcblx0XHRsZXQgaG91cnM9TWF0aC5mbG9vcihsZWF2ZTEvKDM2MDAqMTAwMCkpLy/orqHnrpflh7rlsI/ml7bmlbBcclxuXHRcdC8v6K6h566X55u45beu5YiG6ZKf5pWwXHJcblx0XHRsZXQgbGVhdmUyPWxlYXZlMSUoMzYwMCoxMDAwKSAgICAvL+iuoeeul+Wwj+aXtuaVsOWQjuWJqeS9meeahOavq+enkuaVsFxyXG5cdFx0bGV0IG1pbnV0ZXM9TWF0aC5mbG9vcihsZWF2ZTIvKDYwKjEwMDApKS8v6K6h566X55u45beu5YiG6ZKf5pWwXHJcblx0XHQvL+iuoeeul+ebuOW3ruenkuaVsFxyXG5cdFx0bGV0IGxlYXZlMz1sZWF2ZTIlKDYwKjEwMDApICAgICAgLy/orqHnrpfliIbpkp/mlbDlkI7liankvZnnmoTmr6vnp5LmlbBcclxuXHRcdGxldCBzZWNvbmRzPU1hdGgucm91bmQobGVhdmUzLzEwMDApXHJcblx0XHRyZXR1cm4gZGF5RGlmZitcIuWkqSBcIitob3VycytcIuWwj+aXtiBcIjtcclxuXHR9LFxyXG5cdC8vIOiOt+WPluiBiuWkqeaXtumXtO+8iOebuOW3rjMwMHPlhoXnmoTkv6Hmga/kuI3kvJrmmL7npLrml7bpl7TvvIlcclxuXHRnZXRDaGF0VGltZSh2MSx2Mil7XHJcblx0XHR2MT12MS50b1N0cmluZygpLmxlbmd0aDwxMyA/IHYxKjEwMDAgOiB2MTtcclxuXHRcdHYyPXYyLnRvU3RyaW5nKCkubGVuZ3RoPDEzID8gdjIqMTAwMCA6IHYyO1xyXG5cdFx0aWYoKChwYXJzZUludCh2MSktcGFyc2VJbnQodjIpKS8xMDAwKSA+IDMwMCl7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldHRpbWUodjEpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Ly8g5Lq65oCn5YyW5pe26Ze05qC85byPXHJcblx0Z2V0dGltZShzaG9ydHRpbWUpe1xyXG5cdFx0c2hvcnR0aW1lPXNob3J0dGltZS50b1N0cmluZygpLmxlbmd0aDwxMyA/IHNob3J0dGltZSoxMDAwIDogc2hvcnR0aW1lO1xyXG5cdFx0bGV0IG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcblx0XHRsZXQgY2hhID0gKG5vdy1wYXJzZUludChzaG9ydHRpbWUpKS8xMDAwO1xyXG5cdFx0XHJcblx0XHRpZiAoY2hhIDwgNDMyMDApIHtcclxuXHRcdFx0Ly8g5b2T5aSpXHJcblx0XHRcdHJldHVybiB0aGlzLmRhdGVGb3JtYXQobmV3IERhdGUoc2hvcnR0aW1lKSxcIntBfSB7dH06e2lpfVwiKTtcclxuXHRcdH0gZWxzZSBpZihjaGEgPCA1MTg0MDApe1xyXG5cdFx0XHQvLyDpmpTlpKkg5pi+56S65pel5pyfK+aXtumXtFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5kYXRlRm9ybWF0KG5ldyBEYXRlKHNob3J0dGltZSksXCJ7TW9ufeaciHtERH3ml6Uge0F9IHt0fTp7aWl9XCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8g6ZqU5bm0IOaYvuekuuWujOaVtOaXpeacnyvml7bpl7RcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGF0ZUZvcm1hdChuZXcgRGF0ZShzaG9ydHRpbWUpLFwie1l9LXtNTX0te0REfSB7QX0ge3R9OntpaX1cIik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRwYXJzZU51bWJlcihudW0pIHtcclxuXHRcdHJldHVybiBudW0gPCAxMCA/IFwiMFwiICsgbnVtIDogbnVtO1xyXG5cdH0sXHJcblx0IFxyXG5cdGRhdGVGb3JtYXQoZGF0ZSwgZm9ybWF0U3RyKSB7XHJcblx0XHRsZXQgZGF0ZU9iaiA9IHt9LFxyXG5cdFx0XHRyU3RyID0gL1xceyhbXn1dKylcXH0vLFxyXG5cdFx0XHRtb25zID0gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xyXG5cdFx0IFxyXG5cdFx0ZGF0ZU9ialtcIllcIl0gPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRkYXRlT2JqW1wiTVwiXSA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0XHRkYXRlT2JqW1wiTU1cIl0gPSB0aGlzLnBhcnNlTnVtYmVyKGRhdGVPYmpbXCJNXCJdKTtcclxuXHRcdGRhdGVPYmpbXCJNb25cIl0gPSBtb25zW2RhdGVPYmpbJ00nXSAtIDFdO1xyXG5cdFx0ZGF0ZU9ialtcIkRcIl0gPSBkYXRlLmdldERhdGUoKTtcclxuXHRcdGRhdGVPYmpbXCJERFwiXSA9IHRoaXMucGFyc2VOdW1iZXIoZGF0ZU9ialtcIkRcIl0pO1xyXG5cdFx0ZGF0ZU9ialtcImhcIl0gPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0XHRkYXRlT2JqW1wiaGhcIl0gPSB0aGlzLnBhcnNlTnVtYmVyKGRhdGVPYmpbXCJoXCJdKTtcclxuXHRcdGRhdGVPYmpbXCJ0XCJdID0gZGF0ZU9ialtcImhcIl0gPiAxMiA/IGRhdGVPYmpbXCJoXCJdIC0gMTIgOiBkYXRlT2JqW1wiaFwiXTtcclxuXHRcdGRhdGVPYmpbXCJ0dFwiXSA9IHRoaXMucGFyc2VOdW1iZXIoZGF0ZU9ialtcInRcIl0pO1xyXG5cdFx0ZGF0ZU9ialtcIkFcIl0gPSBkYXRlT2JqW1wiaFwiXSA+IDEyID8gJ+S4i+WNiCcgOiAn5LiK5Y2IJztcclxuXHRcdGRhdGVPYmpbXCJpXCJdID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcblx0XHRkYXRlT2JqW1wiaWlcIl0gPSB0aGlzLnBhcnNlTnVtYmVyKGRhdGVPYmpbXCJpXCJdKTtcclxuXHRcdGRhdGVPYmpbXCJzXCJdID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRkYXRlT2JqW1wic3NcIl0gPSB0aGlzLnBhcnNlTnVtYmVyKGRhdGVPYmpbXCJzXCJdKTtcclxuXHQgXHJcblx0XHR3aGlsZShyU3RyLnRlc3QoZm9ybWF0U3RyKSkge1xyXG5cdFx0XHRmb3JtYXRTdHIgPSBmb3JtYXRTdHIucmVwbGFjZShyU3RyLCBkYXRlT2JqW1JlZ0V4cC4kMV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZvcm1hdFN0cjtcclxuXHR9LFxyXG5cdC8vIOiOt+WPluW5tOm+hFxyXG5cdGdldEFnZUJ5QmlydGhkYXkoZGF0YSl7XHJcblx0XHRsZXQgYmlydGhkYXk9bmV3IERhdGUoZGF0YS5yZXBsYWNlKC8tL2csIFwiXFwvXCIpKTsgXHJcblx0XHRsZXQgZD1uZXcgRGF0ZSgpOyBcclxuXHRcdHJldHVybiBkLmdldEZ1bGxZZWFyKCktYmlydGhkYXkuZ2V0RnVsbFllYXIoKS0oKGQuZ2V0TW9udGgoKTxiaXJ0aGRheS5nZXRNb250aCgpfHwgZC5nZXRNb250aCgpPT1iaXJ0aGRheS5nZXRNb250aCgpICYmIGQuZ2V0RGF0ZSgpPGJpcnRoZGF5LmdldERhdGUoKSk/MTowKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ZyZWUtYXZhdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDY5YmMxNCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtYXZhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJlZS1hdmF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcImY2YjYwM2YwXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIlVzZXJzL2NoZW5saS9hcnRQcm9ncmFtbWluZy91bmktYXBwL21vY2std2VjaGF0L2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWF2YXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1hdmF0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwNjliYzE0JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXhcIiwgXCJhbGlnbi1jZW50ZXJcIiwgXCJqdXN0aWZ5LWNlbnRlclwiXSxcbiAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE0NXJweFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidS1pbWFnZVwiLCB7XG4gICAgICAgIGNsYXNzOiBfdm0udHlwZSxcbiAgICAgICAgc3R5bGU6IF92bS5nZXRTdHlsZSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3JjLCBtb2RlOiBcIndpZHRoRml4XCIgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWF2YXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWF2YXRvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOjE0NXJweDtcIj5cblx0XHQ8aW1hZ2UgOnNyYz1cInNyY1wiIG1vZGU9XCJ3aWR0aEZpeFwiIDpjbGFzcz1cInR5cGVcIiA6c3R5bGU9XCJnZXRTdHlsZVwiPjwvaW1hZ2U+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0c2l6ZToge1xuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuXHRcdFx0XHRkZWZhdWx0OiA5MFxuXHRcdFx0fSxcblx0XHRcdHNyYzoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0dHlwZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdyb3VuZGVkJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGdldFN0eWxlICgpIHtcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDogJHt0aGlzLnNpemV9cnB4OyBoZWlnaHQ6ICR7dGhpcy5zaXplfXJweGBcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mcmVlLWJhZGdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYjRkM2VhYSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLWJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2ZyZWUtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGI0ZDNlYWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2ZyZWUtYmFkZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGI0ZDNlYWEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGI0ZDNlYWFcIixcbiAgXCJlYjMwMjM5NFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJVc2Vycy9jaGVubGkvYXJ0UHJvZ3JhbW1pbmcvdW5pLWFwcC9tb2NrLXdlY2hhdC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1iYWRnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1iYWRnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGI0ZDNlYWEmc2NvcGVkPXRydWUmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInUtdGV4dFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgIFwiZnJlZS1iYWRnZVwiLFxuICAgICAgICBcImJnLWRhbmdlclwiLFxuICAgICAgICBcInRleHQtd2hpdGVcIixcbiAgICAgICAgXCJyb3VuZGVkLWNpcmNsZVwiLFxuICAgICAgICBcImZvbnQtc21cIlxuICAgICAgXSxcbiAgICAgIGNsYXNzOiBfdm0uYmFkZ2VDbGFzcyxcbiAgICAgIHN0eWxlOiBfdm0uYmFkZ2VTdHlsZVxuICAgIH0sXG4gICAgW192bS5fdihfdm0uX3MoX3ZtLmJhZGdlTnVtKSldXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1iYWRnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWJhZGdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cblx0PCEtLSA8dGV4dCBjbGFzcz1cImZyZWUtYmFkZ2UgYmctZGFuZ2VyIHRleHQtd2hpdGUgcm91bmRlZC1jaXJjbGUgZm9udC1zbSBwb3NpdGlvbi1hYnNvbHV0ZVwiXG5cdFx0c3R5bGU9XCJyaWdodDoxNXJweDsgdG9wOjE1cnB4XCJcblx0PjxzbG90Pjwvc2xvdD48L3RleHQ+IC0tPlxuXHQ8dGV4dCBjbGFzcz1cImZyZWUtYmFkZ2UgYmctZGFuZ2VyIHRleHQtd2hpdGUgcm91bmRlZC1jaXJjbGUgZm9udC1zbVwiIDpjbGFzcz1cImJhZGdlQ2xhc3NcIiA6c3R5bGU9XCJiYWRnZVN0eWxlXCJcblx0Pnt7YmFkZ2VOdW19fTwvdGV4dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczoge1xuXHRcdFx0YmFkZ2VDbGFzczoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0YmFkZ2VTdHlsZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0YmFkZ2VOdW06IHtcblx0XHRcdFx0dHlwZTogW051bWJlcixTdHJpbmddLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQuZnJlZS1iYWRnZSB7XG5cdFx0cGFkZGluZy1sZWZ0OiAxNHJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNHJweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNnJweDtcblx0XHRwYWRkaW5nLXRvcDogNnJweDtcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1iYWRnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjRkM2VhYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWJhZGdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiNGQzZWFhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZnJlZS1iYWRnZVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE0cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjZycHhcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI2cnB4XCJcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZnJlZS1tZWRpYS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05OWNhMDkyMCZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtbWVkaWEtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZyZWUtbWVkaWEtbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMjMzYzIzNjRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiVXNlcnMvY2hlbmxpL2FydFByb2dyYW1taW5nL3VuaS1hcHAvbW9jay13ZWNoYXQvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbWVkaWEtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1tZWRpYS1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05OWNhMDkyMCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCB7IGF0dHJzOiB7IGhvdmVyQ2xhc3M6IFwiYmctaG92ZXItbGlnaHRcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmbGV4XCIsIFwiZmxleC1yb3dcIiwgXCJhbGlnbi1zdHJldGNoXCJdLFxuICAgICAgICBhdHRyczogeyBob3ZlckNsYXNzOiBcImJnLWhvdmVyLWxpZ2h0XCIgfSxcbiAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNsaWNrLCBsb25ncHJlc3M6IF92bS5sb25nIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgICAgICAgXCJwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTQ1cnB4XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmcmVlLWF2YXRvclwiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLml0ZW0uYXZhdG9yLCBzaXplOiA5MiB9IH0pLFxuICAgICAgICAgICAgX3ZtLml0ZW0ubm9yZWFkbnVtXG4gICAgICAgICAgICAgID8gX2MoXCJmcmVlLWJhZGdlXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlQ2xhc3M6IFwicG9zaXRpb24tYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VTdHlsZTogXCJyaWdodDoxNXJweDsgdG9wOjE1cnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhZGdlTnVtOiBfdm0uaXRlbS5ub3JlYWRudW1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICBcImZsZXgtY29sdW1uXCIsXG4gICAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiLFxuICAgICAgICAgICAgICBcImZsZXgtMVwiLFxuICAgICAgICAgICAgICBcInB5LTNcIixcbiAgICAgICAgICAgICAgXCJwci0zXCIsXG4gICAgICAgICAgICAgIFwiYm9yZGVyLWxpZ2h0LXNlY29uZGFyeVwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBcImZsZXgtcm93XCIsXG4gICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgIFwibWItMVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udC1tZFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pdGVtLm5pY2tuYW1lKSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LXNtXCIsIFwidGV4dC1saWdodC1tdXRlZFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcImZvcm1hdFRpbWVcIikoX3ZtLml0ZW0udXBkYXRlX3RpbWUpKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZvbnRcIiwgXCJ0ZXh0LWVsbGlwc2lzXCIsIFwidGV4dC1saWdodC1tdXRlZFwiXSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaXRlbS5kYXRhKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLW1lZGlhLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1tZWRpYS1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cbiAgPHZpZXcgaG92ZXItY2xhc3M9XCJiZy1ob3Zlci1saWdodFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGFsaWduLXN0cmV0Y2hcIiBob3Zlci1jbGFzcz1cImJnLWhvdmVyLWxpZ2h0XCIgQGNsaWNrPVwib25DbGlja1wiIEBsb25ncHJlc3M9XCJsb25nXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImZsZXggZmxleC1yb3cgYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCIgc3R5bGU9XCJ3aWR0aDoxNDVycHg7XCI+XG4gICAgICAgIDwhLS0gPGltYWdlIDpzcmM9XCJpdGVtLmF2YXRvclwiIG1vZGU9XCJ3aWR0aEZpeFwiIGNsYXNzPVwicm91bmRlZFwiIHN0eWxlPVwid2lkdGg6OTJycHg7IGhlaWdodDo5MnJweFwiPjwvaW1hZ2U+IC0tPlxuICAgICAgICA8ZnJlZS1hdmF0b3IgOnNyYz1cIml0ZW0uYXZhdG9yXCIgOnNpemU9XCI5MlwiPjwvZnJlZS1hdmF0b3I+XG4gICAgICAgIDwhLS0gPHRleHQgY2xhc3M9XCJiZy1kYW5nZXIgdGV4dC13aGl0ZSByb3VuZGVkLWNpcmNsZSBmb250LXNtIHBvc2l0aW9uLWFic29sdXRlXCJcbiAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nLWxlZnQ6MTRycHg7IHBhZGRpbmctcmlnaHQ6MTRycHg7IHBhZGRpbmctYm90dG9tOjZycHg7IHBhZGRpbmctdG9wOjZycHg7IHJpZ2h0OjE1cnB4OyB0b3A6N3JweFwiXG4gICAgICAgID4xPC90ZXh0PiAtLT5cbiAgICAgICAgPCEtLSA8ZnJlZS1iYWRnZSBiYWRnZS1jbGFzcz1cInBvc2l0aW9uLWFic29sdXRlXCIgYmFkZ2Utc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcmlnaHQ6MTVycHg7IHRvcDo3cnB4XCI+MTE8L2ZyZWUtYmFkZ2U+IC0tPlxuICAgICAgICA8ZnJlZS1iYWRnZSBiYWRnZS1jbGFzcz1cInBvc2l0aW9uLWFic29sdXRlXCIgYmFkZ2Utc3R5bGU9XCJyaWdodDoxNXJweDsgdG9wOjE1cnB4XCIgOmJhZGdlLW51bT1cIml0ZW0ubm9yZWFkbnVtXCIgdi1pZj1cIml0ZW0ubm9yZWFkbnVtXCI+PC9mcmVlLWJhZGdlPlxuICAgICAgPC92aWV3PlxuICAgICAgPHZpZXcgY2xhc3M9XCJmbGV4IGZsZXgtY29sdW1uIGJvcmRlci1ib3R0b20gZmxleC0xIHB5LTMgcHItMyBib3JkZXItbGlnaHQtc2Vjb25kYXJ5XCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBhbGlnbi1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1iLTFcIj5cbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImZvbnQtbWRcIj57eyBpdGVtLm5pY2tuYW1lIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiZm9udC1zbSB0ZXh0LWxpZ2h0LW11dGVkXCI+e3sgaXRlbS51cGRhdGVfdGltZSB8IGZvcm1hdFRpbWUgfX08L3RleHQ+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJmb250IHRleHQtZWxsaXBzaXMgdGV4dC1saWdodC1tdXRlZFwiPnt7IGl0ZW0uZGF0YSB9fTwvdGV4dD5cbiAgICAgIDwvdmlldz5cbiAgICA8L2Rpdj5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IGZyZWVCYXNlIGZyb20gJ0AvY29tbW9uL21peGluL2ZyZWUtYmFzZS5qcyc7XG5cdGltcG9ydCBmcmVlQXZhdG9yIGZyb20gJ0AvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtYXZhdG9yLnZ1ZSc7XG5cdGltcG9ydCBmcmVlQmFkZ2UgZnJvbSAnQC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1iYWRnZS52dWUnO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bWl4aW5zOiBbZnJlZUJhc2VdLFxuXHRcdHByb3BzOiB7XG5cdFx0XHRpdGVtOiBPYmplY3QsXG5cdFx0XHRpbmRleDogTnVtYmVyXG5cdFx0fSxcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHRmcmVlQXZhdG9yLFxuXHRcdFx0ZnJlZUJhZGdlXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRvbkNsaWNrIChlKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcblx0XHRcdFx0Y29uc29sZS5sb2coJ+eCueWHu+S6i+S7ticsIGUpXG5cdFx0XHR9LFxuXHRcdFx0bG9uZyAoZSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygn6ZW/5oyJ5LqL5Lu2JywgZSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuXG4iLCJpbXBvcnQgJFRpbWUgZnJvbSBcIkAvY29tbW9uL2ZyZWUtbGliL3RpbWUuanNcIlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZmlsdGVyczoge1xyXG5cdFx0Zm9ybWF0VGltZSh2YWx1ZSkge1xyXG5cdFx0XHRyZXR1cm4gJFRpbWUuZ2V0dGltZSh2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxufSJdLCJzb3VyY2VSb290IjoiIn0=