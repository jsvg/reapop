'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Notification = require('./Notification');

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsContainer = exports.NotificationsContainer = function (_Component) {
  _inherits(NotificationsContainer, _Component);

  function NotificationsContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NotificationsContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotificationsContainer.__proto__ || Object.getPrototypeOf(NotificationsContainer)).call.apply(_ref, [this].concat(args))), _this), _this._renderNotifications = function () {
      var _this$props = _this.props,
          position = _this$props.position,
          className = _this$props.theme.notification.className;
      var notifications = _this.props.notifications;

      // when notifications are displayed at the bottom,
      // we display notifications from bottom to top

      if (position.startsWith('b')) {
        notifications = [].concat(_toConsumableArray(notifications)).reverse();
      }

      return notifications.map(function (notification) {
        return _react2.default.createElement(_Notification2.default, {
          key: notification.id,
          notification: notification,
          className: className
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Render notifications
   * @private
   * @returns {XML}
   */


  _createClass(NotificationsContainer, [{
    key: 'render',


    /**
     * Render
     * @returns {XML}
     */
    value: function render() {
      var _props$theme$notifica = this.props.theme.notificationsContainer,
          className = _props$theme$notifica.className,
          _props$theme$notifica2 = _props$theme$notifica.transition,
          name = _props$theme$notifica2.name,
          enterTimeout = _props$theme$notifica2.enterTimeout,
          leaveTimeout = _props$theme$notifica2.leaveTimeout;
      var position = this.props.position;


      return _react2.default.createElement(
        'div',
        { className: className.main + ' ' + className.position(position) },
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          {
            transitionName: name,
            transitionEnterTimeout: enterTimeout,
            transitionLeaveTimeout: leaveTimeout
          },
          this._renderNotifications()
        )
      );
    }
  }]);

  return NotificationsContainer;
}(_react.Component);

NotificationsContainer.propTypes = {
  notifications: _react2.default.PropTypes.array.isRequired,
  position: _react2.default.PropTypes.string.isRequired,
  theme: _react2.default.PropTypes.shape({
    notificationsContainer: _react2.default.PropTypes.shape({
      className: _react2.default.PropTypes.shape({
        main: _react2.default.PropTypes.string.isRequired,
        position: _react2.default.PropTypes.func.isRequired
      }).isRequired,
      transition: _react2.default.PropTypes.shape({
        name: _react2.default.PropTypes.object.isRequired,
        enterTimeout: _react2.default.PropTypes.number.isRequired,
        leaveTimeout: _react2.default.PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    notification: _react2.default.PropTypes.shape({
      className: _react2.default.PropTypes.object.isRequired
    }).isRequired
  }).isRequired
};
NotificationsContainer.defaultProps = {
  notifications: []
};
exports.default = NotificationsContainer;