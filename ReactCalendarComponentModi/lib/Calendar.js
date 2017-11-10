'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _createDateObjects = require('./createDateObjects');

var _createDateObjects2 = _interopRequireDefault(_createDateObjects);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, { Component } from 'react';


// import './style.css';
// export default class Calendar extends Component {
var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.handleNextMonth = function () {
      if (_this.props.onNextMonth) {
        return _this.props.onNextMonth();
      }

      // this.props.onChangeMonth(this.props.date.clone().add(1, 'months'));
    }, _this.handlePrevMonth = function () {
      if (_this.props.onPrevMonth) {
        return _this.props.onPrevMonth();
      }

      // this.props.onChangeMonth(this.props.date.clone().subtract(1, 'months'));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('CALENDAR MOUNTED, PROPS', this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('CALENDAR WIIL RECEIVE PROPS, nextProps:', nextProps);
    }
    //华联社活动日历
    //FCCCI EVENTS CALENDAR


  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          CurrentLanguage = _props.CurrentLanguage,
          Events = _props.Events,
          weekOffset = _props.weekOffset,
          date = _props.date,
          renderDay = _props.renderDay,
          onNextMonth = _props.onNextMonth,
          onPrevMonth = _props.onPrevMonth,
          onChange = _props.onChange,
          onPickDate = _props.onPickDate;


      return _react2.default.createElement(
        'div',
        { className: 'Calendar' },
        _react2.default.createElement(
          'div',
          { className: 'centerAreaRightItem' },
          CurrentLanguage == 'Ch' ? '华联社活动日历' : 'FCCCI EVENTS CALENDAR'
        ),
        _react2.default.createElement(
          'div',
          { className: 'Calendar-header' },
          _react2.default.createElement(
            'button',
            { onClick: this.handlePrevMonth },
            '\xAB'
          ),
          _react2.default.createElement(
            'div',
            { className: 'Calendar-header-currentDate' },
            date.format('MMMM').toString().toUpperCase()
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleNextMonth },
            '\xBB'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'Calendar-grid' },
          (0, _createDateObjects2.default)(date, weekOffset, Events, CurrentLanguage).map(function (day, i) {
            return _react2.default.createElement(
              'div',
              {
                key: 'day-' + i,
                className: 'Calendar-grid-item ' + (day.classNames || '')
                /* onClick={e => onPickDate(day.day)} */
              },
              day.linkName == '' ? renderDay(day.day) : _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/Newsboard/'.concat(day.linkName) },
                renderDay(day.day)
              )
            )

            // <div
            // key={`day-${i}`}
            // className={`Calendar-grid-item ${day.classNames || ''}`}
            // >
            //    <Link to="/" >
            //      {renderDay(day.day)}
            //    </Link>            
            // </div>

            ;
          })
        )
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

Calendar.propTypes = {
  CurrentLanguage: _propTypes2.default.string,
  Events: _propTypes2.default.string,
  /** Week offset*/
  weekOffset: _propTypes2.default.number.isRequired,
  /** The current date as a moment objecct */
  date: _propTypes2.default.object.isRequired,
  // date: PropTypes.string.isRequired,

  /** Function to render a day cell */
  renderDay: _propTypes2.default.func,
  /** Called on next month click */
  onNextMonth: _propTypes2.default.func,
  /** Called on prev month click */
  onPrevMonth: _propTypes2.default.func,
  /** Called when some of the navigation controls are clicked */
  onChangeMonth: _propTypes2.default.func,
  /** Called when a date is clicked */
  onPickDate: _propTypes2.default.func
};
Calendar.defaultProps = {
  weekOffset: 0,
  renderDay: function renderDay(day) {
    return day.format('YYYY-MM-D');
  }
  // renderDay: day => day.format('MM-D')

};
exports.default = Calendar;