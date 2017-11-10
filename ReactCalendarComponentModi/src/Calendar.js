// import React, { Component } from 'react';
import React from 'react';


import PropTypes from 'prop-types';
import moment from 'moment';
import createDateObjects from './createDateObjects';
import { Link } from 'react-router-dom';


// import './style.css';
// export default class Calendar extends Component {
export default class Calendar extends React.Component {
    
  static propTypes = {
    CurrentLanguage: PropTypes.string,
    Events: PropTypes.string,
    /** Week offset*/
    weekOffset: PropTypes.number.isRequired,
    /** The current date as a moment objecct */
    date: PropTypes.object.isRequired,
    // date: PropTypes.string.isRequired,
    
    /** Function to render a day cell */
    renderDay: PropTypes.func,
    /** Called on next month click */
    onNextMonth: PropTypes.func,
    /** Called on prev month click */
    onPrevMonth: PropTypes.func,
    /** Called when some of the navigation controls are clicked */
    onChangeMonth: PropTypes.func,
    /** Called when a date is clicked */
    onPickDate: PropTypes.func
  };

  static defaultProps = {
    weekOffset: 0,
    renderDay: day => day.format('YYYY-MM-D')
    // renderDay: day => day.format('MM-D')
    
  };

  handleNextMonth = () => {
    if (this.props.onNextMonth) {
      return this.props.onNextMonth();
    }

    // this.props.onChangeMonth(this.props.date.clone().add(1, 'months'));
  };

  handlePrevMonth = () => {
    if (this.props.onPrevMonth) {
      return this.props.onPrevMonth();
    }

    // this.props.onChangeMonth(this.props.date.clone().subtract(1, 'months'));
  };

  componentDidMount() {
    console.log('CALENDAR MOUNTED, PROPS', this.props);
  }        

  componentWillReceiveProps(nextProps)
  {
    console.log('CALENDAR WIIL RECEIVE PROPS, nextProps:',nextProps);
    
  }  
//华联社活动日历
//FCCCI EVENTS CALENDAR


  render() {


    const {
      CurrentLanguage,
      Events,
      weekOffset,    
      date,
      renderDay,
      onNextMonth,
      onPrevMonth,
      onChange,      
      onPickDate,
    } = this.props;


    return (
      <div className="Calendar">
        <div className="centerAreaRightItem">
        {CurrentLanguage == 'Ch'?
        ( 
          '华联社活动日历'
        ):
        (
          'FCCCI EVENTS CALENDAR'          
        )
        }
        </div>
        <div className="Calendar-header">
          <button onClick={this.handlePrevMonth}>«</button>
          <div className="Calendar-header-currentDate">
            {date.format('MMMM').toString().toUpperCase()}
            {/*date.format('MM')*/}
            {/*date*/}
          </div>
          <button onClick={this.handleNextMonth}>»</button>
        </div>
        <div className="Calendar-grid">
          {createDateObjects(date, weekOffset, Events, CurrentLanguage).map((day, i) => (
            <div
              key={`day-${i}`}
              className={`Calendar-grid-item ${day.classNames || ''}`}
              /* onClick={e => onPickDate(day.day)} */
            >
                {day.linkName == '' ?
                ( 
                  renderDay(day.day)
                ):
                (
                  <Link to={'/Newsboard/'.concat(day.linkName)} >
                    {renderDay(day.day)}
                  </Link>                          
                )
                }
            </div>

            // <div
            // key={`day-${i}`}
            // className={`Calendar-grid-item ${day.classNames || ''}`}
            // >
            //    <Link to="/" >
            //      {renderDay(day.day)}
            //    </Link>            
            // </div>

          ))}
        </div>
      </div>
    );
  }
}
