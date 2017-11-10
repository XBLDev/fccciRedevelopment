import moment from 'moment';

export default function createDateObjects(date, weekOffset = 0, monthlyEvents, currentLanguage) {


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

  while(parsedEvents.indexOf('date') != -1)
  {
    // console.log('createDateObjects.js: string that contains date: ', parsedEvents.substring(0, parsedEvents.length));
    var currentDatesWithEvents = parsedEvents.substring(parsedEvents.indexOf('date')+6, parsedEvents.indexOf('}')-1);
    currentDatesWithEvents = currentDatesWithEvents.substring(
      currentDatesWithEvents.lastIndexOf('-')+1, currentDatesWithEvents.lastIndexOf('T'));
    currentDatesWithEvents = parseInt(currentDatesWithEvents);
    datesWithEvents.push(currentDatesWithEvents);

    var currentEventEN = parsedEvents.substring(parsedEvents.indexOf('eventEN')+10, parsedEvents.indexOf('eventCH')-5);
    EventsENNames.push(currentEventEN);

    var currentEventCH = parsedEvents.substring(parsedEvents.indexOf('eventCH')+10, parsedEvents.indexOf('date')-5);
    EventsCHNames.push(currentEventCH);

    parsedEvents = parsedEvents.substring(parsedEvents.indexOf('}')+1, parsedEvents.length);

  }

  // console.log('createDateObjects.js: dates with events: ', datesWithEvents);
  console.log('createDateObjects.js: events CH: ', EventsENNames);
  console.log('createDateObjects.js: events EN: ', EventsCHNames);


  const startOfMonth = date.startOf('month');

  let diff = startOfMonth.weekday() - weekOffset;
  if (diff < 0) diff += 7;

  const prevMonthDays = [];
  for (let i = 0; i < diff; i++) {
    prevMonthDays.push({
      day: startOfMonth.clone().subtract(diff - i, 'days'),
      classNames: 'prevMonth',
      linkName: ''
    });
  }

  const currentMonthDays = [];
  for (let i = 1; i < date.daysInMonth() + 1; i++) {

    var eventClassName = datesWithEvents.includes(i) ? 'hasEvent' : 'hasNoEvent';
    // var indexOfCurrentEvent = datesWithEvents.indexOf(i);
    var CurrentEventName = datesWithEvents.includes(i) ? currentLanguage == 'Eng' ? EventsENNames[datesWithEvents.indexOf(i)]:EventsCHNames[datesWithEvents.indexOf(i)]
    : '';
    
    currentMonthDays.push({
      day: moment([date.year(), date.month(), i]),
      classNames: eventClassName,
      linkName: CurrentEventName
    });
    
  }

  const daysAdded = prevMonthDays.length + currentMonthDays.length - 1;

  const nextMonthDays = [];
  let i = 1;
  while ((daysAdded + i) % 7 !== 0) {
    nextMonthDays.push({
      day: currentMonthDays[currentMonthDays.length - 1].day
        .clone()
        .add(i, 'days'),
      classNames: 'nextMonth',
      linkName: ''
    });

    i = i + 1;
  }

  return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
}
