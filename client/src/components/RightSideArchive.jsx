import React from 'react';

import PropTypes from 'prop-types';
import RightSideArchiveItem from './RightSideArchiveItem.jsx'; 


class RightSideArchive extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SERVERMSG: '',
            numberOfEventsEachMonth: [],
            MonthlyEvents: []
        };
    }

    componentWillMount()
    {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/Events/archiveEvents');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            this.setState({
                SERVERMSG: xhr.response.message,
                numberOfEventsEachMonth: xhr.response.Events
            });

            // console.log('RightSideArchive: numberOfEvents: ', this.state.numberOfEventsEachMonth);
        }
        });
        xhr.send();   
    }

    componentWillUnmount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps)
    {

    }

    render() {

        var NumOfEvents = [];

        for (var i = 0; i < this.state.numberOfEventsEachMonth.length; i++) {
            // indents.push(<span className='indent' key={i}></span>);
            NumOfEvents.push
            (
              <RightSideArchiveItem
                key={i}
                archiveTitle={this.state.numberOfEventsEachMonth[i]}
              />
            );
          }        

        return (
            <div className="centerAreaArchive">
                {NumOfEvents}
                {/* Right Side FCCCI ARCHIVE, SERVERMSG: {this.state.SERVERMSG} */}
            </div>
        )
    }

  

}

export default RightSideArchive