webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _header = __webpack_require__(172);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(173);

	var _footer2 = _interopRequireDefault(_footer);

	var _main = __webpack_require__(174);

	var _main2 = _interopRequireDefault(_main);

	var _left = __webpack_require__(175);

	var _left2 = _interopRequireDefault(_left);

	var _right = __webpack_require__(176);

	var _right2 = _interopRequireDefault(_right);

	var _test = __webpack_require__(179);

	var _test2 = _interopRequireDefault(_test);

	var _test3 = __webpack_require__(177);

	var _test4 = _interopRequireDefault(_test3);

	var _test5 = __webpack_require__(180);

	var _test6 = _interopRequireDefault(_test5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_main2.default, null),
	    _react2.default.createElement(_header2.default, null),
	    _react2.default.createElement(_footer2.default, null),
	    _react2.default.createElement(_left2.default, null),
	    _react2.default.createElement(_right2.default, null),
	    _react2.default.createElement(_test4.default, null),
	    _react2.default.createElement(_test2.default, null),
	    _react2.default.createElement(_test6.default, null)
	), document.getElementById("test"));

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Test4 = function (_Component) {
		_inherits(Test4, _Component);

		function Test4() {
			_classCallCheck(this, Test4);

			return _possibleConstructorReturn(this, (Test4.__proto__ || Object.getPrototypeOf(Test4)).apply(this, arguments));
		}

		_createClass(Test4, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'h1',
					null,
					'This is Test4 Component'
				);
			}
		}]);

		return Test4;
	}(_react.Component);

	exports.default = Test4;

/***/ }

});