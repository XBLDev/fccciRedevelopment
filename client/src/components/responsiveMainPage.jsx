import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LanguageSetting from '../modules/LanguageSetting';
import Auth from '../modules/Auth';
import Home from './Home.jsx';
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import myProfile from './myProfile.jsx';
import RightSideMenu from './RightSideMenu.jsx';
import Newsboard from './Newsboard.jsx';
import SearchResult from './searchresult.jsx';
import ArchivedEvents from './ArchivedEventsPage.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ResponsiveMainPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.onLanguageSettingClicked = this.onLanguageSettingClicked.bind(this);
        this.onclickLinkHindCollpaseMenu = this.onclickLinkHindCollpaseMenu.bind(this);
    }

    onLanguageSettingClicked()
    {
      if(localStorage.getItem('currentLanguage') == 'Eng')
      {
        localStorage.setItem('currentLanguage', 'Ch')
      }
      else
      {
        localStorage.setItem('currentLanguage', 'Eng');
      }
      var navMain = $(".navbar-collapse"); // avoid dependency on #id
    //   console.log(navMain);
      navMain.collapse('hide');
      window.scrollTo(0, 0);
      
    }
    
    onLogOutClicked()
    {

      var navMain = $(".navbar-collapse"); // avoid dependency on #id
    //   console.log(navMain);
      navMain.collapse('hide');
      window.scrollTo(0, 0);
      
      if(Auth.isUserAuthenticated() == true)
      {
        // console.log('Current User is: ', localStorage.getItem('usrname'),', logging out');
        Auth.deauthenticateUser();
      }
    }

    onclickLinkHindCollpaseMenu()
    {
        // console.log('onclickLinkHindCollpaseMenu called');
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
        // console.log(navMain);
        // "a:not([data-toggle])" - to avoid issues caused
        // when you have dropdown inside navbar
        navMain.collapse('hide');
        // navMain.on("click", "a:not([data-toggle])", null, function () {
        //     navMain.collapse('hide');
        // });
        // console.log(this._div);
        // this._div.scrollTo(0,0);
        window.scrollTo(0,0);
    }

    // scrollWindowToTop()
    // {
    //     navMain.collapse('hide');
    //     window.scrollTo(0,0);
        
    // }


    componentDidMount()
    {
        // window.scrollTo(0, 0);
        // this._div.scrollTop = 0 
        // this._div.scrollTo(0,0);
    }
    componentWillUpdate(nextProps, nextState)
    {
        // window.scrollTo(0, 0);
      // console.log('RightSideCalendar will update, nextProps: ', nextProps, ', nextState: ', nextState);

    }
    componentDidUpdate(prevProps, prevState){
        window.scrollTo(0, 0);
    }        
    componentWillReceiveProps(nextProps)
    {
        // window.scrollTo(0, 0);
        // this._div.scrollTop = 0
        // this._div.scrollTo(0,0);
    }    

    render() {
    
        return (
            <MuiThemeProvider>
            
            <div className="container"  >
                <nav className="navbar navbar-inverse navbar-fixed-top bg-inverse">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                         
                        </button>
                        {/* <a className="navbar-brand" href={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>FCCCI</a> */}
                        <Link className="navbar-brand" to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}
                        >                    
                            {localStorage.getItem('currentLanguage') == 'Eng' ? "FCCCI":"华联社"}
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="nav navbar-nav">
                            <li>
                            {/* className="active" */}
                                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}
                                onClick={this.onclickLinkHindCollpaseMenu}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "ABOUT US":"关于我们"}
                                </Link>
                            </li>
                            <li>
                                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "EVENTS":"活动看板"}
                                </Link>
                            </li>
                            <li>
                                <a href="http://www.fcccichineseschool.act.edu.au/chinese">
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "CHINESE SCHOOL":"中文学校"}
                                </a>
                                {/* <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "CHINESE SCHOOL":"中文学校"}
                                </Link> */}
                            </li>
                            <li>
                                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "NEW STAR DANCE GROUP":"新星舞团"}
                                </Link>
                            </li>       
                            <li>
                                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "FCCCI CHOIR":"合唱团"}
                                </Link>
                            </li>
                            <li>
                                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "CONTACT US":"联系我们"}
                                </Link>
                            </li>
                            <li>
                                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/ch":"/en"} 
                                onClick={this.onLanguageSettingClicked}>                    
                                    {localStorage.getItem('currentLanguage') == 'Eng' ? "中文网页":"English"}
                                </Link>
                            </li>                                                                                                                     
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                {/* <a href="#">
                                <span className="glyphicon glyphicon-log-in"></span> 
                                {' '.concat('Login')}
                                </a> */}
                                <Link to={Auth.isUserAuthenticated() == false ? "/login":"/"} onClick={this.onLogOutClicked}>
                                    {Auth.isUserAuthenticated() == false ? 
                                        (
                                        <div>
                                            <span className="glyphicon glyphicon-log-in">
                                            </span>
                                            {localStorage.getItem('currentLanguage') == 'Eng' ? " LOG IN":" 登录"}
                                        </div>
                                        )
                                        :
                                        (
                                        <div>    
                                            <span className="glyphicon glyphicon-log-in">
                                            </span>
                                            {localStorage.getItem('currentLanguage') == 'Eng' ? " LOG OUT":" 登出"}
                                        </div>
                                        )
                                    }
                                </Link>
                            </li>
                            <li>
                                <Link to={Auth.isUserAuthenticated() == false ? "/login":"/myProfile"}
                                onClick={this.onclickLinkHindCollpaseMenu}>
                                    {Auth.isUserAuthenticated() == false ? 
                                        (
                                        <div>    
                                            <span className="glyphicon glyphicon-user">
                                            </span>
                                            {localStorage.getItem('currentLanguage') == 'Eng' ? " User Profile":" 用户资料"}
                                        </div>    
                                        )
                                        :
                                        (
                                        <div>    
                                            <span className="glyphicon glyphicon-user">
                                            </span>
                                            {' '.concat(JSON.parse(localStorage.getItem('usrname')).name)}
                                        </div>    
                                        )
                                    }
                                </Link>
                                {/* <a href="#"><span className="glyphicon glyphicon-user"></span> 
                                {' '.concat('User profile')}
                                </a> */}
                            </li>
                        </ul>


                    </div>
                </nav>

                <div className="container" id="middlepart" ref={(ref) => this._div = ref}>
                    {/* <div className="jumbotron">
                        <h1>Navbar example</h1>
                        <p className="lead">
                            This example is a quick exercise to illustrate how fixed 
                            to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.
                        </p>
                        <a className="btn btn-lg btn-primary" href="../../components/navbar/" role="button">
                            View navbar docs &raquo;
                        </a>
                    </div> */}
                    <div className="row content" >

                        <div className="col-sm-9 text-left"> 
                            {/* <h1>Welcome</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/ch' component={Home} />
                                <Route exact path='/en' component={Home}  />
                                <Route path='/login' component={LoginPage} />
                                <Route path='/signup' component={SignUpPage} />
                                <Route path='/myProfile' component={myProfile}  />

                                <Route path='/Newsboard/' component={Newsboard} />
                                <Route path='/en/search/:s?' component={SearchResult} ignoreScrollBehavior/>
                                <Route path='/ch/search/:s?' component={SearchResult} ignoreScrollBehavior/>
                                <Route path='/en/Archive/:yearmonth?' component={ArchivedEvents} ignoreScrollBehavior/>
                                <Route path='/ch/Archive/:yearmonth?' component={ArchivedEvents} ignoreScrollBehavior/>

                            </Switch>
                        </div>
                        <div className="col-sm-3 sidenav">
                            <div className="well">
                                {<RightSideMenu/>}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="footer">
                    <div className="container text-center">
                        Footer Text
                    </div> 
                </div>        */}

                {/* <footer class="container-fluid text-center">
                    <p>Footer Text</p>
                </footer>  */}



            </div>
            </MuiThemeProvider>

        )            
    }        



}    

export default ResponsiveMainPage