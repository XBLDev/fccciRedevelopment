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


    return (
          <div className="centerAreaRight">
            
            {this.state.listOfLatestNews.length == 0?(
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
            }            

            {/* <div className="centerAreaRightItem">  
                <a href="">母亲节爱心慈善跑</a>           
            </div>

            <div className="centerAreaRightItem">  
                <a href="">风雨的无阻，我们的无悔</a>           
            </div>     */}


          </div>    
    )


  }  



}

export default RightSideMenu