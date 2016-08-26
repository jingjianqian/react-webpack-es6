'use strict';

var _liveRoomCfg = require('../../component/liveRoom/roomConfig/liveRoomCfg');

var _liveRoomCfg2 = _interopRequireDefault(_liveRoomCfg);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(React.createElement(_liveRoomCfg2.default, null), document.getElementById('test'));