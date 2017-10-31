import React from 'react';

import PropTypes from 'prop-types';

// import EventCalendar from 'react-event-calendar';
// const EventCalendar = require('react-event-calendar');
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

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


class RightSideCalendar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        };

    this.myevents =  [
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
    }

    componentWillMount()
    {

    }

    componentWillUnmount() 
    {
        console.log('RightSideCalendar WILL UNMOUNT!');
    }

    componentDidMount() {
        console.log('RightSideCalendar DID UNMOUNT!');
    }        

    componentWillReceiveProps(nextProps)
    {
        console.log('RightSideCalendar will receive props');
        
    }   
    
    render() {
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
        
        return (
        <div className="centerAreaRightCalendar">
            <BigCalendar
             events={fakeevents} 
             views={allViews}
             selectable={true}
             onSelectSlot={() => console.log('a date is selected')}
             toolbar={false}
            />
        </div>
        )            
    
    }        


}

export default RightSideCalendar