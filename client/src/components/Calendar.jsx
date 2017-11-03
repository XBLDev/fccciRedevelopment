import React from 'react';

import PropTypes from 'prop-types';

// import EventCalendar from 'react-event-calendar';
// const EventCalendar = require('react-event-calendar');
import { Calendar } from 'react-calendar-component';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { Link } from 'react-router-dom'
import 'moment/locale/nb';
// import Dayz from 'dayz';
// import PureDayZCalendar from './PureDayZCalendar.jsx'; 

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const fakeevents = [
    {
      'title': 'All Day Event',
    //   'allDay': true,
      'start': new Date(2017, 10, 3),
      'end': new Date(2017, 10, 4)
    },
    {
      'title': 'Long Event',
      'start': new Date(2017, 9, 15),
      'end': new Date(2017, 9, 18)
    },
  
    {
      'title': 'DTS STARTS',
      'start': new Date(2016, 2, 13, 0, 0, 0),
      'end': new Date(2016, 2, 20, 0, 0, 0)
    },
  
    {
      'title': 'DTS ENDS',
      'start': new Date(2016, 10, 6, 0, 0, 0),
      'end': new Date(2016, 10, 13, 0, 0, 0)
    },
  
    {
      'title': 'Some Event',
      'start': new Date(2015, 3, 9, 0, 0, 0),
      'end': new Date(2015, 3, 9, 0, 0, 0)
    },
    {
      'title': 'Conference',
      'start': new Date(2015, 3, 11),
      'end': new Date(2015, 3, 13),
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': new Date(2015, 3, 12, 10, 30, 0, 0),
      'end': new Date(2015, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start':new Date(2015, 3, 12, 12, 0, 0, 0),
      'end': new Date(2015, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch'
    },
    {
      'title': 'Meeting',
      'start':new Date(2015, 3, 12,14, 0, 0, 0),
      'end': new Date(2015, 3, 12,15, 0, 0, 0)
    },
    {
      'title': 'Happy Hour',
      'start':new Date(2015, 3, 12, 17, 0, 0, 0),
      'end': new Date(2015, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day'
    },
    {
      'title': 'Dinner',
      'start':new Date(2015, 3, 12, 20, 0, 0, 0),
      'end': new Date(2015, 3, 12, 21, 0, 0, 0)
    },
    {
      'title': 'Birthday Party',
      'start':new Date(2015, 3, 13, 7, 0, 0),
      'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
      'title': 'Late Night Event',
      'start':new Date(2015, 3, 17, 19, 30, 0),
      'end': new Date(2015, 3, 18, 2, 0, 0)
    },
    {
      'title': 'Multi-day Event',
      'start':new Date(2015, 3, 20, 19, 30, 0),
      'end': new Date(2015, 3, 22, 2, 0, 0)
    }
  ];


// would come from a network request in a "real" app
// const EVENTS = new Dayz.EventsCollection([
//     { content: 'A short event',
//       range: moment.range( date.clone(),
//                            date.clone().add(1, 'day') ) },
//     { content: 'Two Hours ~ 8-10',
//       range: moment.range( date.clone().hour(8),
//                            date.clone().hour(10) ) },
//     { content: "A Longer Event",
//       range: moment.range( date.clone().subtract(2,'days'),
//                            date.clone().add(8,'days') ) }
// ]);

class RightSideCalendar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          date: moment(),
          loading: true,
          calendarEvents: []
        };

        this.myevents = [
            {
                'title': 'All Day Event',
                'allDay': true,
                'start': new Date(2017, 10, 30),
                'end': new Date(2017, 10, 31)
            },
            {
                'title': 'Long Event',
                'start': new Date(2017, 11, 1),
                'end': new Date(2017, 11, 10)
            },
        ]

        this.onNextMonth = this.onNextMonth.bind(this);
        this.onPreviousMonth = this.onPreviousMonth.bind(this);

    }

    componentWillMount()
    {
      console.log('RightSideCalendar will mount');

      console.log('RightSideCalendar: on mounting, load data from backend');
      // var prevMonthFirstDay = moment().subtract(1, 'months').startOf('month')
      // var nextMonthFirstDay = moment().add(1, 'months').startOf('month');
      // console.log('Next month first day: year: ', this.state.date.year(), ', month: ', (this.state.date.month()+1));
      //moment("25/04/2012","DD/MM/YYYY").year()
      const xhr = new XMLHttpRequest();
      xhr.open('get', '/Events/calendarEvents?year='+encodeURIComponent(this.state.date.year())+'&month='+encodeURIComponent(this.state.date.month()+1));
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          // this.setState({
          //   numberOfNews: xhr.response.message
          //   });
          console.log('RightSideCalendar: GOT RESPONSE FROM SERVER: ', xhr.response.message);
          console.log('RightSideCalendar: GOT ARRAY OF EVENTS FOR CURRENT MONTH: '.concat(this.state.date.month()+1).concat(': ').concat(xhr.response.Events));
          // console.log('RightSideCalendar: GOT ARRAY OF EVENTS: CH: '.concat(xhr.response.CH_Str).concat(', EN: ').concat(xhr.response.EN_Str).concat(', DATE: ').concat(xhr.response.DATE_Str));
          
          this.setState({loading: false, calendarEvents: xhr.response.Events});
        }            
      
      });          

      xhr.send();   
    }

    componentWillUnmount() 
    {
        console.log('RightSideCalendar WILL UNMOUNT!');
    }

    componentDidMount() {
        console.log('RightSideCalendar DID UNMOUNT!');
    }        

    componentWillUpdate(nextProps, nextState)
    {
      console.log('RightSideCalendar will update, nextProps: ', nextProps, ', nextState: ', nextState);

    }

    componentDidUpdate(prevProps, prevState){
      console.log('RightSideCalendar did updated, prevProps: ', prevProps, ', prevState: ', prevState);

      if(this.state.loading == true)
      {
        console.log('RightSideCalendar: month changed, should load the event from backend');
        // var prevMonthFirstDay = moment().subtract(1, 'months').startOf('month')
        // var nextMonthFirstDay = moment().add(1, 'months').startOf('month');
        console.log('Next month first day: year: ', this.state.date.year(), ', month: ', (this.state.date.month()+1));
        //moment("25/04/2012","DD/MM/YYYY").year()
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/Events/calendarEvents?year='+encodeURIComponent(this.state.date.year())+'&month='+encodeURIComponent(this.state.date.month()+1));
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            // this.setState({
            //   numberOfNews: xhr.response.message
            //   });
            console.log('RightSideCalendar: GOT RESPONSE FROM SERVER: ', xhr.response.message);
            console.log('RightSideCalendar: GOT ARRAY OF EVENTS FOR CURRENT MONTH: '.concat(this.state.date.month()+1).concat(': ').concat(xhr.response.Events));
            // console.log('RightSideCalendar: GOT ARRAY OF EVENTS: CH: '.concat(xhr.response.CH_Str).concat(', EN: ').concat(xhr.response.EN_Str).concat(', DATE: ').concat(xhr.response.DATE_Str));
            this.setState({loading: false, calendarEvents: xhr.response.Events});
            
            // this.setState({loading: false});
          }            
        
        });          

        xhr.send();    
        
      } 
      // console.log('Calendar: loading iss: ',this.state.loading);
    }

    componentWillReceiveProps(nextProps)
    {
        console.log('RightSideCalendar will receive props, nextProps: ',nextProps);
    }   

    onNextMonth()
    {
      this.setState({loading: true, date: this.state.date.add(1, 'months').startOf('month')});
    }

    onPreviousMonth()
    {
      this.setState({loading: true, date: this.state.date.subtract(1, 'months').startOf('month')});
    }
    
    render() {
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
        
        return (
        <div className="centerAreaRightCalendar">
            {/* <PureDayZCalendar date={moment()}/> */}

            {/* <BigCalendar
             events={fakeevents} 
             views={allViews}
             selectable={true}
             onSelectSlot={() => console.log('a date is selected')}
             toolbar={true}
            /> */}

            {this.state.loading == false ?(
            <Calendar
              /* onChangeMonth={(date) => this.setState({ date })}   */
              CurrentLanguage={localStorage.getItem('currentLanguage').toString()}
              Events={this.state.calendarEvents.toString()}
              date={this.state.date}
              /* onPickDate={(date) => console.log(date)} */
              renderDay={day => day.format('D')}
              onNextMonth={this.onNextMonth} 
              onPrevMonth={this.onPreviousMonth} 
            />
            ):
            (
              'loading....'
            //   <Calendar
            //   /* onChangeMonth={(date) => this.setState({ date })}  */
            //   date={moment()}
            //   /* onPickDate={(date) => console.log(date)} */
            //   renderDay={day => day.format('D')}
            //    onNextMonth={this.onNextMonth} 
            //   /* onPrevMonth={this.onPreviousMonth} */
            // />            
            )
            }

              {/* <Dayz
                   display='month'
                   date={this.props.date}
                   events={EVENTS}
               /> */}

        </div>
        )            
    
    }        


}

// RightSideMenuItem.propTypes = {
//   date: PropTypes.any.isRequired
// //   newsTitleArr: PropTypes.array.isRequired,
// //   currentLanguage: PropTypes.string.isRequired,
// //   currentPath: PropTypes.string.isRequired,
// //   cardsubtitleP: PropTypes.string.isRequired
//   // errors: PropTypes.object.isRequired,
//   // user: PropTypes.object.isRequired
// };

export default RightSideCalendar