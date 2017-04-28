(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _Tree = __webpack_require__(3);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	module.exports = _Tree2['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _NodeJs = __webpack_require__(5);
	
	var _NodeJs2 = _interopRequireDefault(_NodeJs);
	
	var _default = (function (_Component) {
	    _inherits(_default, _Component);
	
	    _createClass(_default, null, [{
	        key: 'defaultProps',
	        value: {
	            idKey: 'typeId',
	            contentKey: 'typeName',
	            expandNodes: ''
	        },
	        enumerable: true
	    }]);
	
	    function _default(props, context) {
	        _classCallCheck(this, _default);
	
	        _Component.call(this, props, context);
	        var expandNodes = props.expandNodes || {},
	            data = props.data || [];
	        this.state = {
	            expandNodes: expandNodes
	        };
	        this.pathMap = {};
	        this.climbTree(data, null, this.pathMap);
	    }
	
	    _default.prototype.getExpandNodes = function getExpandNodes() {
	        return this.state.expandNodes;
	    };
	
	    _default.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var expandNodes = nextProps.expandNodes || {};
	        var data = nextProps.data || [];
	        var pathMap = this.pathMap;
	
	        this.climbTree(data, null, pathMap);
	        this.state = {
	            expandNodes: expandNodes
	        };
	    };
	
	    _default.prototype.climbTree = function climbTree(nodes, parent, pathMap) {
	        var _this = this;
	        var idKey = this.props.idKey;
	
	        nodes.forEach(function (node) {
	            var nodeId = node[idKey],
	                children = node.children;
	            if (parent) {
	                pathMap[nodeId] = parent[idKey];
	            }
	            if (children && children.length) {
	                _this.climbTree(children, node, pathMap);
	            }
	        });
	    };
	
	    _default.prototype.renderTree = function renderTree() {
	        var data = this.props.data,
	            expandNodes = this.recalculateExpands(this.state.expandNodes || {});
	        return this.renderNode(data, expandNodes);
	    };
	
	    _default.prototype.nodeClickCallback = function nodeClickCallback(nodeId, type, node) {
	        var clickCallback = this.props.clickCallback;
	
	        clickCallback && clickCallback(nodeId, type, node);
	    };
	
	    _default.prototype.getIds = function getIds(list, idArray) {
	        var idKey = this.props.idKey;
	        var _this = this;
	        list.forEach(function (item) {
	            idArray.push(item[idKey]);
	            item.children && item.children.length && _this.getIds(item.children, idArray);
	        });
	    };
	
	    _default.prototype.getChild = function getChild(node) {
	        var children = node.children || [],
	            idArray = [];
	        this.getIds(children, idArray);
	        return idArray;
	    };
	
	    _default.prototype.toggleCallback = function toggleCallback(nodeId, node) {
	        var expandNodes = this.state.expandNodes;
	
	        if (expandNodes[nodeId]) {
	            var childIds = this.getChild(node);
	            delete expandNodes[nodeId];
	            // 同时删除该节点children的nodeId对应元素
	            for (var item in expandNodes) {
	                childIds.indexOf(parseInt(item)) >= 0 && delete expandNodes[item];
	            }
	        } else {
	            expandNodes[nodeId] = true;
	        }
	        this.setState({
	            expandNodes: expandNodes
	        });
	    };
	
	    _default.prototype.recalculateExpands = function recalculateExpands(expandNodes) {
	        var result = {};
	        var pathMap = this.pathMap;
	
	        for (var key in expandNodes) {
	            var curKey = key;
	            do {
	                result[curKey] = true;
	                curKey = pathMap[curKey];
	            } while (curKey != undefined);
	        }
	        return result;
	    };
	
	    _default.prototype.renderNode = function renderNode(data, expandNodes) {
	        var self = this;
	        var _self$props = self.props;
	        var idKey = _self$props.idKey;
	        var contentKey = _self$props.contentKey;
	
	        return data.map(function (item, index) {
	            var children = null,
	                itemKey = item[idKey];
	            if (item.children && item.children.length) {
	                children = self.renderNode(item.children, expandNodes);
	            }
	            return _react2['default'].createElement(
	                'div',
	                { key: 'level-' + itemKey },
	                _react2['default'].createElement(_NodeJs2['default'], { toggleCallback: self.toggleCallback.bind(self),
	                    clickCallback: self.nodeClickCallback.bind(self),
	                    type: children ? 'branch' : 'leaf',
	                    nodeId: itemKey,
	                    node: item,
	                    expand: expandNodes[itemKey],
	                    nodeContent: item[contentKey],
	                    selected: self.props.selected == itemKey }),
	                expandNodes[itemKey] ? _react2['default'].createElement(
	                    'div',
	                    { className: 'node-container', key: 'container-' + itemKey },
	                    children
	                ) : null
	            );
	        });
	    };
	
	    _default.prototype.render = function render() {
	        var tree = this.renderTree();
	        return _react2['default'].createElement(
	            'div',
	            null,
	            tree
	        );
	    };
	
	    return _default;
	})(_react.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Node = (function (_Component) {
	    _inherits(Node, _Component);
	
	    function Node() {
	        _classCallCheck(this, Node);
	
	        _Component.apply(this, arguments);
	    }
	
	    Node.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(this.props.nodeContent == nextProps.nodeContent && this.props.type == nextProps.type && this.props.expand == nextProps.expand && this.props.selected == nextProps.selected);
	    };
	
	    Node.prototype.clickCallback = function clickCallback() {
	        this.props.clickCallback && this.props.clickCallback(this.props.nodeId, this.props.type, this.props.node);
	    };
	
	    Node.prototype.toggleCallback = function toggleCallback() {
	        if (this.props.type == 'branch') {
	            this.props.toggleCallback(this.props.nodeId, this.props.node);
	        }
	    };
	
	    //nodeId,nodeContent
	
	    Node.prototype.render = function render() {
	        var _props = this.props;
	        var type = _props.type;
	        var expand = _props.expand;
	        var selected = _props.selected;
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'tree-node ' + type },
	            _react2['default'].createElement(
	                'div',
	                { className: 'content ' + (selected ? 'selected' : '') },
	                _react2['default'].createElement(
	                    'span',
	                    { onClick: this.toggleCallback.bind(this) },
	                    _react2['default'].createElement('i', { className: (expand ? 'expand' : '') + ' pre-i' })
	                ),
	                _react2['default'].createElement(
	                    'span',
	                    { title: this.props.nodeContent, onClick: this.clickCallback.bind(this) },
	                    this.props.nodeContent
	                )
	            )
	        );
	    };
	
	    return Node;
	})(_react.Component);
	
	exports['default'] = Node;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;