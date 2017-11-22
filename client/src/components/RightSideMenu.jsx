import React from 'react';

import PropTypes from 'prop-types';


import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Roster from './Roster.jsx'
import Schedule from './Schedule.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';
// import LanguageSetting from '../modules/LanguageSetting';
import RightSideMenuItem from './RightSideMenuItem.jsx'; 

import RightSideCalendar from './Calendar.jsx'; 
import RightSideEventPhotos from './RightSideEventPhotos.jsx'; 
import RightSideSearch from './RightSideSearch.jsx'; 
import RightSideArchive from './RightSideArchive.jsx'; 

import { Provider } from 'react-redux'
import store, { history } from './store'

import moment from 'moment';

class RightSideMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        listOfLatestNews: [],
        numberOfNews: "0",
        currentLanguage: 'Eng'
    };
  }
  

  componentWillMount()
  {



    var currentLanguage = localStorage.getItem('currentLanguage').toString();
    console.log('RightSideMenu will mountm, currentLanguage: ',currentLanguage);

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/news/news?language='+encodeURIComponent(currentLanguage));
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        // console.log('Right Side Menu Got GET /NEWS');
        this.setState({
        numberOfNews: xhr.response.message
        });
        this.setState({
          listOfLatestNews: xhr.response.listOfTitles
        });
        // console.log('RightSideMenu, recieved list of news upon Mounting:')
        // console.log(this.state.listOfLatestNews)
    }
    });
    xhr.send();    
  }

  componentWillUnmount() {
    console.log('RightSideMenu WILL UNMOUNT!');
  }

  componentDidMount() {


    console.log('RightSideMenu: mounted, props: ',this.props);

    // var currentLanguage = localStorage.getItem('currentLanguage').toString();
    // console.log('RightSideMenu: currentLanguage: ',currentLanguage);

    // const xhr = new XMLHttpRequest();
    // xhr.open('get', '/news/news?language='+encodeURIComponent(currentLanguage));
    // // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // // set the authorization HTTP header
    // // xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    // xhr.responseType = 'json';
    // xhr.addEventListener('load', () => {
    // if (xhr.status === 200) {
    //     // console.log('Right Side Menu Got GET /NEWS');
    //     this.setState({
    //     numberOfNews: xhr.response.message
    //     });
    //     this.setState({
    //       listOfLatestNews: xhr.response.listOfTitles
    //     });
    //     // console.log('RightSideMenu, recieved list of news upon Mounting:')
    //     // console.log(this.state.listOfLatestNews)
    // }
    // });
    // xhr.send();    

  }    

  componentWillReceiveProps(nextProps)
  {


    // console.log('RightSideMenu will receive props of length: ', nextProps.length);
    // if (typeof myVar != 'undefined')
    
    var nextPropsLength = nextProps.length;
    console.log('nextProps length: ', nextPropsLength, ', current props: ', this.state.listOfLatestNews);
    console.log('RightSideMenu will receive props: ',nextProps);
    
    // var prevListOfLatestNews = this.state.listOfLatestNews;

    // this.setState({
    //   listOfLatestNews: prevListOfLatestNews
    // });
    // this.setState({
    //   listOfLatestNews: []
    // });

    var currentLanguageSetting = localStorage.getItem('currentLanguage').toString();
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/news/news?language='+encodeURIComponent(currentLanguageSetting));
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        this.setState({
        numberOfNews: xhr.response.message
        });
        this.setState({
          listOfLatestNews: xhr.response.listOfTitles,
          currentLanguage: currentLanguageSetting
        });



        // console.log('RightSideMenu will receive props:, listOfLatestNews: ',this.state.listOfLatestNews)
    }
    });
    xhr.send();   

  }  




  render() {

    var Events = [];
    // var title = localStorage.getItem('currentLanguage') == 'Eng'? 'titleEng' : 'titleCh';
    var title = this.state.currentLanguage == 'Eng'? 'titleEng' : 'titleCh';
    
    for (var i = 0; i < this.state.listOfLatestNews.length; i++) {
      // indents.push(<span className='indent' key={i}></span>);
      Events.push
      (
        <RightSideMenuItem
          key={i}
          newsTitle={this.state.listOfLatestNews[i][title]}
          newsNumber={i}
          /* currentPath={this.props.menupath} */
        />
      );
    }

    return (
          <div className="centerAreaRight">
              {/* <div className="centerAreaRightItem">LATEST NEWS</div> */}

              <div className="centerAreaRightSectionName">
                  {this.state.currentLanguage == 'Ch'?
                  ( 
                    '最新活动'
                  ):
                  (
                    'LATEST NEWS'          
                  )
                  }
              </div>


              {Events}

              <div className="centerAreaRightSectionName">
                  {this.state.currentLanguage == 'Ch'?
                  ( 
                    '华联社活动日历'
                  ):
                  (
                    'FCCCI EVENTS CALENDAR'          
                  )
                  }
              </div>
              {<RightSideCalendar />}

              {/* <div className="centerAreaRightSectionName">EVENT PHOTOS</div> */}

              <div className="centerAreaRightSectionName">
                  {this.state.currentLanguage == 'Ch'?
                  ( 
                    '华联社活动照片'
                  ):
                  (
                    'EVENT PHOTOS'          
                  )
                  }
              </div>

              <Provider store={store}>
                  <RightSideEventPhotos/>
              </Provider>
              

              <div className="centerAreaRightSectionName">
                  {this.state.currentLanguage == 'Ch'?
                  ( 
                    '活动搜索'
                  ):
                  (
                    'EVENT SEARCH'          
                  )
                  }
              </div>
              {/* <div className="centerAreaRightSectionName">EVENT SEARCH</div> */}
              <RightSideSearch />
              


              <div className="centerAreaRightSectionName">
                  {this.state.currentLanguage == 'Ch'?
                  ( 
                    '华联社档案'
                  ):
                  (
                    'FCCCI ARCHIVES'          
                  )
                  }
              </div>
              {/* <div className="centerAreaRightSectionName">FCCCI ARCHIVES</div> */}
              <RightSideArchive/>
              {/* {this.state.listOfLatestNews.length == 0?(
                <RightSideMenuItem newsTitle={'loading...'} newsNumber={-1}/>
              ):
              (
                <RightSideMenuItem newsTitle={this.state.listOfLatestNews[0]['titleCh']} newsNumber={0}/>

              ) 
              }

              {this.state.listOfLatestNews.length == 0?(
                <RightSideMenuItem newsTitle={'loading...'} newsNumber={-1}/>
              ):
              (
                <RightSideMenuItem newsTitle={this.state.listOfLatestNews[1]['titleCh']} newsNumber={1}/>

              ) 
              }             */}

          </div>    
    )


  }  



}


// RightSideMenu.propTypes = {
//   menupath: PropTypes.string.isRequired,
//   // newsNumber: PropTypes.number.isRequired,
// //   cardsubtitleP: PropTypes.string.isRequired
//   // errors: PropTypes.object.isRequired,
//   // user: PropTypes.object.isRequired
// };

export default RightSideMenu