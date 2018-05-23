webpackHotUpdate(3,{

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/calendar/Switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/Switch.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Switch = function (_Component) {
	_inherits(Switch, _Component);

	function Switch(props) {
		_classCallCheck(this, Switch);

		var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

		_this.state = {
			isActive: props.isActive || false
		};
		return _this;
	}

	_createClass(Switch, [{
		key: "toggleSwitch",
		value: function toggleSwitch() {
			this.setState({ isActive: !this.state.isActive });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    disabled = _props.disabled,
			    activeLabel = _props.activeLabel,
			    inactiveLabel = _props.inactiveLabel,
			    activeBackgroundColor = _props.activeBackgroundColor,
			    inactiveBackgroundColor = _props.inactiveBackgroundColor,
			    activeLabelColor = _props.activeLabelColor,
			    inactiveLabelColor = _props.inactiveLabelColor;
			var isActive = this.state.isActive;

			var switchClass = "switch_container " + (isActive ? "switch_active " : "switch_inactive ") + (disabled ? "switch_disabled" : "");

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"div",
				{
					onClick: function onClick() {
						return !disabled ? _this2.toggleSwitch() : null;
					},
					className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4165125000", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + (switchClass || ""),
					__source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				},
				!inactiveLabel ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"div",
					{
						onClick: function onClick() {
							return !disabled ? _this2.toggleSwitch() : null;
						},
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4165125000", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + "inactive_label",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 35
						}
					},
					inactiveLabel
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
					onClick: function onClick() {
						return !disabled ? _this2.toggleSwitch() : null;
					},
					className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4165125000", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + "switch",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 42
					}
				}),
				!activeLabel ? null : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					"div",
					{
						onClick: function onClick() {
							return !disabled ? _this2.toggleSwitch() : null;
						},
						className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["4165125000", [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]]]) + " " + "active_label",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 47
						}
					},
					activeLabel
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
					styleId: "4165125000",
					css: ".switch_container.__jsx-style-dynamic-selector{position:relative;display:block;}.inactive_label.__jsx-style-dynamic-selector{padding-right:0.5rem;font-size:1rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_inactive.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector{color:" + (inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black") + ";}.active_label.__jsx-style-dynamic-selector{font-size:1rem;padding-left:0.5rem;font-weight:bold;cursor:pointer;position:relative;display:inline-block;color:grey;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.switch_active.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{color:" + (activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black") + ";}.switch.__jsx-style-dynamic-selector{vertical-align:middle;display:inline-block;width:50px;height:20px;border-radius:12px;position:relative;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;cursor:pointer;background:" + (inactiveBackgroundColor || "lightgrey") + ";border:2px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector{background:" + (activeBackgroundColor || "red") + ";border-color:" + (activeBackgroundColor || "red") + ";}.switch.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;background:#fff;top:0;bottom:0;margin:1px;width:16px;height:16px;border-radius:50%;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;left:0;right:calc(100% - 20px);border:1px solid " + (inactiveBackgroundColor || "lightgrey") + ";}.switch_active.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:after{right:0;left:calc(100% - 20px);border-color:" + (activeBackgroundColor || "red") + ";}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector{cursor:not-allowed;}.switch_disabled.__jsx-style-dynamic-selector .switch.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .active_label.__jsx-style-dynamic-selector:before,.switch_disabled.__jsx-style-dynamic-selector .inactive_label.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;border-radius:12px;top:-2px;bottom:-2px;left:-2px;right:-2px;width:calc(100% + 4px);height:calc(100% + 4px);background-color:rgba(255,255,255,0.3);z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbGVuZGFyL1N3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRGdCLEFBR3lCLEFBSUcsQUFVYyxBQUdwQixBQVVvQixBQUdiLEFBYWtCLEFBSTdCLEFBZ0JILEFBT1csQUFLUixRQVhZLEdBaEJMLEFBNEJBLElBMURFLEdBakJOLENBc0VmLEVBbEVnQixDQTBCTSxPQWtCTCxBQTRCRyxFQVp1QixDQS9EM0MsR0FhQSxBQUlrQixBQVNsQixDQXRCa0IsSUFzQ3lCLEdBWi9CLEVBa0JMLEdBNEJHLEdBM0JBLENBL0JNLENBYkEsQ0EwQkgsR0E4Q0EsR0EzQkQsTUFsQlEsQ0FiRCxDQWJBLENBd0VSLEVBM0JDLEVBYVosTUFlWSxHQXBDWixBQVNhLEdBaENTLEFBYUgsQ0ExQkcsSUF5RUUsSUEzQkwsU0FuQmMsR0FickIsQ0FiQSxLQThDcUIsQ0EyQlIsSUEzRFEsQ0FiQSxtQkF5RVUsc0NBL0MzQixDQWdETCxRQTVCSCxFQTZCUixHQTdEQSxDQWJBLEFBMEJ5QyxDQW9CaEIsd0JBRUssZUFwQkEsK0JBcUI5QixlQXBCQSIsImZpbGUiOiJwYWdlcy9jYWxlbmRhci9Td2l0Y2guanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VsZW5hL1Byb2plY3RzL3BsYXlncm91bmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc0FjdGl2ZTogcHJvcHMuaXNBY3RpdmUgfHwgZmFsc2UsXG5cdFx0fTtcblx0fVxuXHR0b2dnbGVTd2l0Y2goKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGlzQWN0aXZlOiAhdGhpcy5zdGF0ZS5pc0FjdGl2ZSB9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGlzYWJsZWQsXG5cdFx0XHRhY3RpdmVMYWJlbCxcblx0XHRcdGluYWN0aXZlTGFiZWwsXG5cdFx0XHRhY3RpdmVCYWNrZ3JvdW5kQ29sb3IsXG5cdFx0XHRpbmFjdGl2ZUJhY2tncm91bmRDb2xvcixcblx0XHRcdGFjdGl2ZUxhYmVsQ29sb3IsXG5cdFx0XHRpbmFjdGl2ZUxhYmVsQ29sb3IsXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBpc0FjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzd2l0Y2hDbGFzcyA9XG5cdFx0XHRcInN3aXRjaF9jb250YWluZXIgXCIgK1xuXHRcdFx0KGlzQWN0aXZlID8gXCJzd2l0Y2hfYWN0aXZlIFwiIDogXCJzd2l0Y2hfaW5hY3RpdmUgXCIpICtcblx0XHRcdChkaXNhYmxlZCA/IFwic3dpdGNoX2Rpc2FibGVkXCIgOiBcIlwiKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17c3dpdGNoQ2xhc3N9XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+ICghZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZVN3aXRjaCgpIDogbnVsbCl9XG5cdFx0XHQ+XG5cdFx0XHRcdHshaW5hY3RpdmVMYWJlbCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5hY3RpdmVfbGFiZWxcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7aW5hY3RpdmVMYWJlbH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInN3aXRjaFwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gKCFkaXNhYmxlZCA/IHRoaXMudG9nZ2xlU3dpdGNoKCkgOiBudWxsKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyFhY3RpdmVMYWJlbCA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWN0aXZlX2xhYmVsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+ICghZGlzYWJsZWQgPyB0aGlzLnRvZ2dsZVN3aXRjaCgpIDogbnVsbCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e2FjdGl2ZUxhYmVsfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0LnN3aXRjaF9jb250YWluZXIge1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pbmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdFx0XHRcdGNvbG9yOiBncmV5O1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfaW5hY3RpdmUgLmluYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGNvbG9yOiAke2luYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ/IGluYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ6IGluYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0PyBpbmFjdGl2ZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdDogXCJibGFja1wifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0Y29sb3I6IGdyZXk7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaF9hY3RpdmUgLmFjdGl2ZV9sYWJlbCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogJHthY3RpdmVMYWJlbENvbG9yXG5cdFx0XHRcdFx0XHRcdD8gYWN0aXZlTGFiZWxDb2xvclxuXHRcdFx0XHRcdFx0XHQ6IGFjdGl2ZUJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0XHRcdD8gYWN0aXZlQmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0OiBcImJsYWNrXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoIHtcblx0XHRcdFx0XHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDogMjBweDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7aW5hY3RpdmVCYWNrZ3JvdW5kQ29sb3IgfHwgXCJsaWdodGdyZXlcIn07XG5cdFx0XHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZFxuXHRcdFx0XHRcdFx0XHQke2luYWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwibGlnaHRncmV5XCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2FjdGl2ZSAuc3dpdGNoIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6ICR7YWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwicmVkXCJ9O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAke2FjdGl2ZUJhY2tncm91bmRDb2xvciB8fCBcInJlZFwifTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnN3aXRjaDphZnRlciB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMXB4O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZFxuXHRcdFx0XHRcdFx0XHQke2luYWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwibGlnaHRncmV5XCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2FjdGl2ZSAuc3dpdGNoOmFmdGVyIHtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogY2FsYygxMDAlIC0gMjBweCk7XG5cdFx0XHRcdFx0XHRib3JkZXItY29sb3I6ICR7YWN0aXZlQmFja2dyb3VuZENvbG9yIHx8IFwicmVkXCJ9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5zd2l0Y2gsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuaW5hY3RpdmVfbGFiZWwsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuYWN0aXZlX2xhYmVsIHtcblx0XHRcdFx0XHRcdGN1cnNvcjogbm90LWFsbG93ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5zd2l0Y2hfZGlzYWJsZWQgLnN3aXRjaDpiZWZvcmUsXG5cdFx0XHRcdFx0LnN3aXRjaF9kaXNhYmxlZCAuYWN0aXZlX2xhYmVsOmJlZm9yZSxcblx0XHRcdFx0XHQuc3dpdGNoX2Rpc2FibGVkIC5pbmFjdGl2ZV9sYWJlbDpiZWZvcmUge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0XHRcdFx0XHR0b3A6IC0ycHg7XG5cdFx0XHRcdFx0XHRib3R0b206IC0ycHg7XG5cdFx0XHRcdFx0XHRsZWZ0OiAtMnB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IC0ycHg7XG5cdFx0XHRcdFx0XHR3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcblx0XHRcdFx0XHRcdGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcblx0PGRpdj5cblx0XHQ8U3dpdGNoXG5cdFx0XHQvLyBkaXNhYmxlZFxuXHRcdFx0aXNBY3RpdmU9XCJ0cnVlXCJcblx0XHRcdGFjdGl2ZUxhYmVsPVwiQWN0aXZlXCJcblx0XHRcdGluYWN0aXZlTGFiZWw9XCJJbmFjdGl2ZVwiXG5cdFx0XHRhY3RpdmVCYWNrZ3JvdW5kQ29sb3I9XCJwaW5rXCJcblx0XHRcdGluYWN0aXZlQmFja2dyb3VuZENvbG9yPVwibGltZVwiXG5cdFx0Lz5cblx0PC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=pages/calendar/Switch.js */",
					dynamic: [inactiveLabelColor ? inactiveLabelColor : inactiveBackgroundColor ? inactiveBackgroundColor : "black", activeLabelColor ? activeLabelColor : activeBackgroundColor ? activeBackgroundColor : "black", inactiveBackgroundColor || "lightgrey", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red", activeBackgroundColor || "red", inactiveBackgroundColor || "lightgrey", activeBackgroundColor || "red"]
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Switch;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 158
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Switch
		// disabled
		, { isActive: "true",
			activeLabel: "Active",
			inactiveLabel: "Inactive",
			activeBackgroundColor: "pink",
			inactiveBackgroundColor: "lime",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 159
			}
		})
	);
};

/* unused harmony default export */ var _unused_webpack_default_export = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Switch, "Switch", "/Users/elena/Projects/playground/pages/calendar/Switch.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/Switch.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar/Switch")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/calendar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__ = __webpack_require__("./node_modules/date-fns/is_same_day/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__ = __webpack_require__("./node_modules/date-fns/is_weekend/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Head__ = __webpack_require__("./pages/calendar/Head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Switch__ = __webpack_require__("./pages/calendar/Switch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Calendar__ = __webpack_require__("./pages/calendar/Calendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__("./pages/calendar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = "/Users/elena/Projects/playground/pages/calendar/index.js";


(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var specialDates = [{
	type: "holiday",
	date: "2018-05-21",
	name: "elena"
}, {
	type: "holiday",
	date: "2018-06-21",
	name: "test"
}, {
	type: "event",
	date: "2018-05-29",
	name: "event"
}, {
	type: "event",
	date: "2018-05-21",
	name: "event"
}, {
	type: "reminder",
	date: "2018-05-21",
	name: "next"
}];

var SpecialDay = function SpecialDay(_ref) {
	var date = _ref.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 40
			}
		},
		specialDates.map(function (specialDate, key) {
			if (__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date))) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
					key: key,
					style: {
						width: "100%",
						marginTop: "0.25rem",
						border: "2px solid " + (specialDate.type == "holiday" ? "red" : specialDate.type == "event" ? "green" : specialDate.type == "reminder" ? "orange" : "transparent")
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 44
					}
				});
			}
		})
	);
};

var DisplaySpecialDay = function DisplaySpecialDay(_ref2) {
	var date = _ref2.date;
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		"div",
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 67
			}
		},
		specialDates.map(function (specialDate, key) {
			if (__WEBPACK_IMPORTED_MODULE_1_date_fns_is_same_day___default()(date, new Date(specialDate.date))) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{
						key: key,
						style: {
							color: "" + (specialDate.type == "holiday" ? "red" : specialDate.type == "event" ? "green" : specialDate.type == "reminder" ? "orange" : "transparent")
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 71
						}
					},
					specialDate.name
				);
			}
		})
	);
};

var Application = function (_Component) {
	_inherits(Application, _Component);

	function Application(props) {
		_classCallCheck(this, Application);

		var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));

		_this.state = {
			date: "2018-05-21"
		};
		return _this;
	}

	_createClass(Application, [{
		key: "onRender",
		value: function onRender(_ref3, cell) {
			var dayNumber = _ref3.dayNumber,
			    date = _ref3.date;

			var content = dayNumber === 12 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 104
					}
				},
				"dev"
			) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 106
					}
				},
				dayNumber,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 108
					}
				})
			);

			var isWeekendDay = __WEBPACK_IMPORTED_MODULE_2_date_fns_is_weekend___default()(date);

			var styles = {
				backgroundColor: isWeekendDay ? "rgba(0,0,0,0.1)" : "",
				padding: "0.75rem 0"
			};

			if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
				style: styles
			}, content);
			return content;
		}
	}, {
		key: "onSelect",
		value: function onSelect(_ref4, cell) {
			var date = _ref4.date,
			    dayNumber = _ref4.dayNumber;

			var styles = {
				borderColor: "yellow",
				padding: "0.75rem 0"
			};
			if (cell != null) return Object(__WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"])(cell, {
				style: styles
			}, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 141
					}
				},
				dayNumber,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 143
					}
				})
			));
			return content;
		}
	}, {
		key: "onChangeDate",
		value: function onChangeDate(date) {
			this.setState({ date: date });
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var date = this.state.date;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 156
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Head__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 157
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Calendar__["a" /* default */], {
					date: date,
					onChangeDate: function onChangeDate(date) {
						return _this2.onChangeDate(date);
					},
					onRender: this.onRender,
					selected: this.onSelect,
					view: view,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 158
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DisplaySpecialDay, { date: date, __source: {
						fileName: _jsxFileName,
						lineNumber: 165
					}
				})
			);
		}
	}, {
		key: "__reactstandin__regenerateByEval",
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Application;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = function _default() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Application, {
		__source: {
			fileName: _jsxFileName,
			lineNumber: 171
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(specialDates, "specialDates", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(SpecialDay, "SpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(DisplaySpecialDay, "DisplaySpecialDay", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(Application, "Application", "/Users/elena/Projects/playground/pages/calendar/index.js");
	reactHotLoader.register(_default, "default", "/Users/elena/Projects/playground/pages/calendar/index.js");
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/calendar")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.e5ba4c583f90bec5d6d2.hot-update.js.map