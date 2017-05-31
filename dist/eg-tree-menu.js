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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(2);
	
	var _Tree = __webpack_require__(3);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _MultiTree = __webpack_require__(6);
	
	var _MultiTree2 = _interopRequireDefault(_MultiTree);
	
	var _react = __webpack_require__(4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TreeMenu = (function (_Component) {
	    _inherits(TreeMenu, _Component);
	
	    function TreeMenu() {
	        _classCallCheck(this, TreeMenu);
	
	        _Component.apply(this, arguments);
	    }
	
	    TreeMenu.prototype.getSelectedNodes = function getSelectedNodes() {
	        var _refs$treeMenu;
	
	        return (_refs$treeMenu = this.refs.treeMenu).getSelectedNodes.apply(_refs$treeMenu, arguments);
	    };
	
	    TreeMenu.prototype.getExpandNodes = function getExpandNodes() {
	        var _refs$treeMenu2;
	
	        return (_refs$treeMenu2 = this.refs.treeMenu).getExpandNodes.apply(_refs$treeMenu2, arguments);
	    };
	
	    TreeMenu.prototype.render = function render() {
	        var multiSelect = this.props.multiSelect;
	
	        if (multiSelect) {
	            return _react2['default'].createElement(_MultiTree2['default'], _extends({ ref: 'treeMenu' }, this.props));
	        } else {
	            return _react2['default'].createElement(_Tree2['default'], _extends({ ref: 'treeMenu' }, this.props));
	        }
	    };
	
	    _createClass(TreeMenu, null, [{
	        key: 'defaultProps',
	        value: {
	            multiSelect: false
	        },
	        enumerable: true
	    }]);
	
	    return TreeMenu;
	})(_react.Component);
	
	module.exports = TreeMenu;

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
	        return !(this.props.nodeContent == nextProps.nodeContent && this.props.type == nextProps.type && this.props.expand == nextProps.expand && this.props.selected == nextProps.selected && this.props.multiSelectStatus == nextProps.multiSelectStatus);
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
	        var multiSelectStatus = _props.multiSelectStatus;
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'tree-node ' + type },
	            _react2['default'].createElement(
	                'div',
	                { className: 'content ' + (selected ? 'selected' : '') },
	                multiSelectStatus !== undefined ? _react2['default'].createElement(
	                    'div',
	                    { className: 'multi-list-checkbox', onClick: this.clickCallback.bind(this) },
	                    _react2['default'].createElement('b', { className: multiSelectStatus })
	                ) : null,
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

/***/ },
/* 6 */
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
	
	    _default.prototype.reassign = function reassign(children, resetValue) {
	        var treeWeightMap = this.treeWeightMap;
	        var curTreeWeightMap = this.curTreeWeightMap;
	        var idKey = this.props.idKey;
	        var _this = this;
	        if (children && children.length) {
	            children.forEach(function (node) {
	                var nodeId = node[idKey];
	                if (resetValue !== undefined) {
	                    curTreeWeightMap[nodeId] = resetValue;
	                } else {
	                    curTreeWeightMap[nodeId] = treeWeightMap[nodeId];
	                }
	                if (node.children && node.children.length) {
	                    _this.reassign(node.children, resetValue);
	                }
	            });
	        }
	    };
	
	    _default.prototype.recalculateWeightMap = function recalculateWeightMap(nodeId, node) {
	        var pathMap = this.pathMap;
	        var treeWeightMap = this.treeWeightMap;
	        var curTreeWeightMap = this.curTreeWeightMap;
	        var isAdded = false;
	        if (treeWeightMap[nodeId] > curTreeWeightMap[nodeId]) {
	            isAdded = true;
	        }
	        if (isAdded) {
	            //计算出增加值
	            var origiWeight = curTreeWeightMap[nodeId],
	                fullWeight = treeWeightMap[nodeId],
	                increment = fullWeight - origiWeight,
	                curKey = nodeId;
	            //所有父节点加上increment
	            do {
	                curTreeWeightMap[curKey] += increment;
	                curKey = pathMap[curKey];
	            } while (curKey != undefined);
	
	            //当前节点和子节点直接copy treeWeightMap上的原始值
	            this.reassign(node.children);
	            //console.log(curTreeWeightMap)
	        } else {
	                //计算出减少值
	                var origiWeight = curTreeWeightMap[nodeId],
	                    decrement = origiWeight,
	                    curKey = nodeId;
	                //所有父节点减去decrement
	                do {
	                    curTreeWeightMap[curKey] -= decrement;
	                    curKey = pathMap[curKey];
	                } while (curKey != undefined);
	
	                //子节点为0
	                this.reassign(node.children, 0);
	                //console.log(curTreeWeightMap)
	            }
	    };
	
	    _default.prototype.calculateTreeWeight = function calculateTreeWeight(node, treeWeightMap) {
	        var children = node.children;
	        var _this = this;
	        var idKey = this.props.idKey;
	
	        this.curTreeWeightMap[node[idKey]] = 0;
	        if (children && children.length) {
	            var total = 0;
	            children.forEach(function (node) {
	                total += _this.calculateTreeWeight(node, treeWeightMap);
	            });
	            treeWeightMap[node[idKey]] = total;
	            return total;
	        } else {
	            treeWeightMap[node[idKey]] = 1;
	            return 1;
	        }
	    };
	
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
	        var expandNodes = props.expandNodes || {};
	        var data = props.data || [];
	        var _this = this;
	        var idKey = this.props.idKey;
	
	        this.state = {
	            expandNodes: expandNodes,
	            clickNodeId: -1
	        };
	        this.pathMap = {};
	        this.leafMap = {};
	        this.treeWeightMap = {};
	        this.curTreeWeightMap = {};
	        this.climbTree(data, null, this.pathMap, this.leafMap);
	        data.forEach(function (node) {
	            _this.treeWeightMap[node[idKey]] = _this.calculateTreeWeight(node, _this.treeWeightMap);
	        });
	    }
	
	    _default.prototype.getExpandNodes = function getExpandNodes() {
	        return this.state.expandNodes;
	    };
	
	    _default.prototype.getSelectedNodes = function getSelectedNodes() {
	        var leafMap = this.leafMap;
	        var curTreeWeightMap = this.curTreeWeightMap;
	        var idArray = [];
	        for (var key in curTreeWeightMap) {
	            if (curTreeWeightMap[key] == 1 && leafMap[key]) {
	                idArray.push(key);
	            }
	        }
	        return idArray;
	    };
	
	    _default.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        this.leafMap = {};
	        this.pathMap = {};
	        var expandNodes = nextProps.expandNodes || {};
	        var data = nextProps.data || [];
	        var pathMap = this.pathMap;
	        var leafMap = this.leafMap;
	        var _this = this;
	        var idKey = this.props.idKey;
	
	        this.climbTree(data, null, pathMap, leafMap);
	        data.forEach(function (node) {
	            _this.treeWeightMap[node[idKey]] = _this.calculateTreeWeight(node, _this.treeWeightMap);
	        });
	
	        //console.log(this.treeWeightMap)
	        this.setState({
	            expandNodes: expandNodes
	        });
	    };
	
	    _default.prototype.climbTree = function climbTree(nodes, parent, pathMap, leafMap) {
	        var _this = this;
	        var idKey = this.props.idKey;
	
	        nodes.forEach(function (node) {
	            var nodeId = node[idKey],
	                children = node.children;
	            if (parent) {
	                pathMap[nodeId] = parent[idKey];
	            }
	            if (children && children.length) {
	                _this.climbTree(children, node, pathMap, leafMap);
	            } else {
	                leafMap[nodeId] = true;
	            }
	        });
	    };
	
	    _default.prototype.renderTree = function renderTree() {
	        var data = this.props.data,
	            expandNodes = this.recalculateExpands(this.state.expandNodes || {});
	        return this.renderNode(data, expandNodes);
	    };
	
	    _default.prototype.nodeClickCallback = function nodeClickCallback(nodeId, type, node) {
	        this.recalculateWeightMap(nodeId, node, false);
	        this.setState({
	            clickNodeId: nodeId
	        });
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
	        var treeWeightMap = this.treeWeightMap;
	        var curTreeWeightMap = this.curTreeWeightMap;
	
	        return data.map(function (item, index) {
	            var children = null,
	                itemKey = item[idKey],
	                multiSelectStatus = '';
	            if (item.children && item.children.length) {
	                children = self.renderNode(item.children, expandNodes);
	            }
	            if (treeWeightMap[itemKey] > curTreeWeightMap[itemKey]) {
	                if (curTreeWeightMap[itemKey] > 0) {
	                    multiSelectStatus = 'part-select';
	                }
	            } else {
	                multiSelectStatus = 'active';
	            }
	            return _react2['default'].createElement(
	                'div',
	                { key: 'level-' + itemKey },
	                _react2['default'].createElement(_NodeJs2['default'], { toggleCallback: self.toggleCallback.bind(self),
	                    clickCallback: self.nodeClickCallback.bind(self),
	                    type: children ? 'branch' : 'leaf',
	                    nodeId: itemKey,
	                    node: item,
	                    multiSelectStatus: multiSelectStatus,
	                    expand: expandNodes[itemKey],
	                    nodeContent: item[contentKey] }),
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
	            { className: 'multi-select-tree' },
	            tree
	        );
	    };
	
	    return _default;
	})(_react.Component);

	exports['default'] = _default;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;