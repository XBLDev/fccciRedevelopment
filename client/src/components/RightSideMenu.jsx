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


class RightSideMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        listOfLatestNews: [],
        numberOfNews: "0",
    };
  }
  

  componentWillMount()
  {



    var currentLanguage = localStorage.getItem('currentLanguage').toString();
    console.log('RightSideMenu: currentLanguage: ',currentLanguage);

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


    console.log('RightSideMenu: mounted, pathname: ',this.props);

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

    this.setState({
      listOfLatestNews: []
    });

    console.log('RightSideMenu will receive props: ',nextProps);
    var currentLanguage = localStorage.getItem('currentLanguage').toString();
    // console.log('RightSideMenu: currentLanguage: ',currentLanguage);

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
        console.log('RightSideMenu will receive props:, listOfLatestNews: ',this.state.listOfLatestNews)

    }
    });
    xhr.send();   
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


    // console.log('RightSideMenu will receive props! pathname: ' ,nextProps)
    //   console.log(this.props.location['pathname'])
    // console.log(nextProps.location['pathname'])
  }  




  render() {

    var items = [];
    var title = localStorage.getItem('currentLanguage') == 'Eng'? 'titleEng' : 'titleCh';
    for (var i = 0; i < this.state.listOfLatestNews.length; i++) {
      // indents.push(<span className='indent' key={i}></span>);
      items.push
      (
        <RightSideMenuItem
          key={i}
          newsTitle={this.state.listOfLatestNews[i][title]}           
          newsNumber={i}
          currentPath={this.props.menupath}
        />
      );
    }

    return (
          <div className="centerAreaRight">
              {items}
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


RightSideMenu.propTypes = {
  menupath: PropTypes.string.isRequired,
  // newsNumber: PropTypes.number.isRequired,
//   cardsubtitleP: PropTypes.string.isRequired
  // errors: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired
};

export default RightSideMenu