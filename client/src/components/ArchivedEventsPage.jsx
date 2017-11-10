import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class ArchivedEvents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Events: [],
            loading: true
            
        };
    }

    componentWillMount() {
        var path = this.props.location['pathname'];
        var year = path.substring(path.lastIndexOf('/')+1, path.lastIndexOf('_'));
        var month = path.substring(path.lastIndexOf('_')+1, path.length);

        const xhr = new XMLHttpRequest();
        xhr.open('get', '/Events/calendarEvents?year='+encodeURIComponent(year)+'&month='+encodeURIComponent(month));
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {


                var EventsArrays = [];
                var field = localStorage.getItem('currentLanguage') == 'Eng' ? 'eventEN':'eventCH';
                var nextfield = localStorage.getItem('currentLanguage') == 'Eng' ? 'eventCH':'date';
                
                for(var i = 0; i < xhr.response.Events.length; i++)
                {
                    var currentEvent = xhr.response.Events[i];
                    // console.log('ARCHIVEDEVENTSPAGE.JSX AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH: ', currentEvent);
                    
                    var eventTitle = currentEvent.substring(currentEvent.lastIndexOf(field)+ 10, currentEvent.lastIndexOf(nextfield)-5);
                    EventsArrays.push(eventTitle);
                }
                // console.log('ARCHIVEDEVENTSPAGE.JSX AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH: ', EventsArrays);
    
                // this.setState({loading: false, Events: xhr.response.Events});
                this.setState({loading: false, Events: EventsArrays});

            // console.log('ARCHIVEDEVENTSPAGE.JSX AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH: ', xhr.response.Events);
                

            // this.setState({loading: false, Events: xhr.response.Events});
            }            
        
        });          
        xhr.send();   
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentWillReceiveProps(newProps) {  

        this.setState({loading: true});
        var path = newProps.location['pathname'];
        var year = path.substring(path.lastIndexOf('/')+1, path.lastIndexOf('_'));
        var month = path.substring(path.lastIndexOf('_')+1, path.length);

        const xhr = new XMLHttpRequest();
        xhr.open('get', '/Events/calendarEvents?year='+encodeURIComponent(year)+'&month='+encodeURIComponent(month));
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {

                //            console.log('ARCHIVEDEVENTSPAGE.JSX AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH: ', xhr.response.Events);
                //"{ eventEN: 'Rain and rain unimpeded, we regret',↵  eventCH: '风雨的无阻, 我们的无悔',↵  date: 2017-12-07T13:00:00.000Z }"

                var EventsArrays = [];
                var field = localStorage.getItem('currentLanguage') == 'Eng' ? 'eventEN':'eventCH';
                var nextfield = localStorage.getItem('currentLanguage') == 'Eng' ? 'eventCH':'date';

                for(var i = 0; i < xhr.response.Events.length; i++)
                {
                    var currentEvent = xhr.response.Events[i];
                    // console.log('ARCHIVEDEVENTSPAGE.JSX AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH: ', currentEvent);
                    
                    var eventTitle = currentEvent.substring(currentEvent.lastIndexOf(field)+ 10, currentEvent.lastIndexOf(nextfield)-5);
                    EventsArrays.push(eventTitle);
                }
                // console.log('ARCHIVEDEVENTSPAGE.JSX AAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH: ', EventsArrays);

                // this.setState({loading: false, Events: xhr.response.Events});
                this.setState({loading: false, Events: EventsArrays});
            
            }            
        
        });          
        xhr.send();   


    }

    render() {

        var AllEvents = [];
        var field = localStorage.getItem('currentLanguage') == 'Eng' ? 'eventEN':'eventCH';

        // for (var i in this.state.Events[0]) {
        //     AllEvents.push
        //     (
        //         <div key={i}>
        //             <Link to={"/Newsboard/".concat(i.toString())}>
        //                 {i.toString()}                        
        //             </Link><br/>
        //         </div>
        //     );
        // }    

        for (var i = 0; i < this.state.Events.length; i++) {
            AllEvents.push
            (
                // <div key={i}>
                //     {this.state.Events[i][field]}
                // </div> 
                <div key={i}>
                    <div>
                        <Link to={"/Newsboard/".concat(this.state.Events[i])}>
                            {this.state.Events[i]}                        
                        </Link>
                    </div><br/>
                </div>
                
                // <RightSideArchiveItem
                // key={i}
                // archiveTitle={this.state.Events[i][field]}
                // />
            );
        }        


        return (
            <div className="centerAreaLeft">
                <div className="">
                    Archived Events from: {this.props.location['pathname'].substring(this.props.location['pathname'].lastIndexOf('/')+1, this.props.location['pathname'].length)}
                    
                </div><br/>
                
                {this.state.loading == false ? 
                (
                    <div>
                        {AllEvents}
                        {/* {this.state.Events[0]['eventEN'].toString()} */}
                        {/* {this.props.location['pathname']} */}
                    </div>
                ):
                (
                    <div>
                        loading...
                    </div>
                )
                }
            </div>
        )
    }


}

export default ArchivedEvents;