'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDateObjects;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createDateObjects(date) {
  var weekOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var monthlyEvents = arguments[2];
  var currentLanguage = arguments[3];


  // console.log('createDateObjects.js: monthlyEvents passed in as parameter: ', monthlyEvents);
  // { 
  // eventEN: 'Rain and rain unimpeded, we regret',
  // eventCH: '风雨的无阻, 我们的无悔',
  // date: 2017-11-04T13:00:00.000Z 
  //},
  //{ 
  // eventEN: 'Hualian Chinese School 2017 Seeking Tour of Heilongjiang Winter Camp Summary Conference',
  // eventCH: '华联社中文学校2017年寻根之旅黑龙江冬令营总结大会',
  // date: 2017-11-14T13:00:00.000Z 
  //}
  //<Link to={"/Newsboard/".concat(this.props.newsTitle.toString())}>

  var parsedEvents = monthlyEvents;
  var datesWithEvents = [];
  var EventsCHNames = [];
  var EventsENNames = [];

  while (parsedEvents.indexOf('date') != -1) {
    // console.log('createDateObjects.js: string that contains date: ', parsedEvents.substring(0, parsedEvents.length));
    var currentDatesWithEvents = parsedEvents.substring(parsedEvents.indexOf('date') + 6, parsedEvents.indexOf('}') - 1);
    currentDatesWithEvents = currentDatesWithEvents.substring(currentDatesWithEvents.lastIndexOf('-') + 1, currentDatesWithEvents.lastIndexOf('T'));
    currentDatesWithEvents = parseInt(currentDatesWithEvents);
    datesWithEvents.push(currentDatesWithEvents);

    var currentEventEN = parsedEvents.substring(parsedEvents.indexOf('eventEN') + 10, parsedEvents.indexOf('eventCH') - 5);
    EventsENNames.push(currentEventEN);

    var currentEventCH = parsedEvents.substring(parsedEvents.indexOf('eventCH') + 10, parsedEvents.indexOf('date') - 5);
    EventsCHNames.push(currentEventCH);

    parsedEvents = parsedEvents.substring(parsedEvents.indexOf('}') + 1, parsedEvents.length);
  }

  // console.log('createDateObjects.js: dates with events: ', datesWithEvents);
  console.log('createDateObjects.js: events CH: ', EventsENNames);
  console.log('createDateObjects.js: events EN: ', EventsCHNames);

  var startOfMonth = date.startOf('month');

  var diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  var prevMonthDays = [];
  for (var _i = 0; _i < diff; _i++) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - _i, 'days'),
      classNames: 'prevMonth',
      linkName: ''
    });
  }

  var currentMonthDays = [];
  for (var _i2 = 1; _i2 < date.daysInMonth() + 1; _i2++) {

    var eventClassName = datesWithEvents.includes(_i2) ? 'hasEvent' : 'hasNoEvent';
    // var indexOfCurrentEvent = datesWithEvents.indexOf(i);
    var CurrentEventName = datesWithEvents.includes(_i2) ? currentLanguage == 'Eng' ? EventsENNames[datesWithEvents.indexOf(_i2)] : EventsCHNames[datesWithEvents.indexOf(_i2)] : '';

    currentMonthDays.push({
      day: (0, _moment2.default)([date.year(), date.month(), _i2]),
      classNames: eventClassName,
      linkName: CurrentEventName
    });
  }

  var daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

  var nextMonthDays = [];
  var i = 1;
  while ((daysAdded + i) % 7 !== 0) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day.clone().add(i, 'days'),
      classNames: 'nextMonth',
      linkName: ''
    });

    i = i + 1;
  }

  return [].concat(prevMonthDays, currentMonthDays, nextMonthDays);
}