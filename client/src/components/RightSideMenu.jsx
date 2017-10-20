import React from 'react';

import PropTypes from 'prop-types';


import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Roster from './Roster.jsx'
import Schedule from './Schedule.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';
import LanguageSetting from '../modules/LanguageSetting';
import RightSideMenuItem from './RightSideMenuItem.jsx'; 


class RightSideMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        listOfLatestNews: [],
        numberOfNews: "0",
    };
  }
  
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/news/news');
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

  render() {

    var items = [];
    for (var i = 0; i < this.state.listOfLatestNews.length; i++) {
      // indents.push(<span className='indent' key={i}></span>);
      items.push
      (
        <RightSideMenuItem
          key={i}
          newsTitle={this.state.listOfLatestNews[i]['titleCh']}           
          newsNumber={i}
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

export default RightSideMenu