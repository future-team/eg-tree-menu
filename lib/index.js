'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../css/index.less');

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _MultiTree = require('./MultiTree');

var _MultiTree2 = _interopRequireDefault(_MultiTree);

var _react = require('react');

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