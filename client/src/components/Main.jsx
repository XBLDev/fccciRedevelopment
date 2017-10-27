import React from 'react';

import PropTypes from 'prop-types';


import { Switch, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Newsboard from './Newsboard.jsx'
import Roster from './Roster.jsx'
import Schedule from './Schedule.jsx'
import LoginPage from '../containers/LoginPage.jsx';
import SignUpPage from '../containers/SignUpPage.jsx';
import Auth from '../modules/Auth';
import LanguageSetting from '../modules/LanguageSetting';
import RightSideMenu from './RightSideMenu.jsx'



class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentLanguage: localStorage.getItem('currentLanguage'),
      // localStorage.
      
    };

  }
  
  render() {
    // var title = localStorage.getItem('currentLanguage') == 'Eng' ? 'Website title':'网站标题';
    // var subtitle = localStorage.getItem('currentLanguage') == 'Eng' ? 
    // 'This is the home page. Log in to see the hidden content':
    // '这里是主页，请登录查看更多内容';
    // console.log();

    // let homeRoute = <Home cardtitleP={localStorage.getItem('currentLanguage')} cardsubtitleP={localStorage.getItem('currentLanguage')}/>;
    // let homeRoute = <Route exact path='/' render={() => <Home cardtitleP={localStorage.getItem('currentLanguage')} cardsubtitleP={localStorage.getItem('currentLanguage')}/>}/>;   

    return (
          // <main>        <div className="centerArea">

          <div className="centerArea">
              {/* centerAreaLeft, news area  <br/>     
              centerAreaLeft, news area  <br/>          
      
              centerAreaLeft, news area  <br/>  */}
            {/* <div className="centerAreaLeft">   */}
              <Switch>
                <Route exact path='/' component={Home}/>
                {<Route exact path='/ch' component={Home}/>}
                {<Route exact path='/en' component={Home}/>}

                {/* <Route exact path='/' render={() => <Home contentStr="Home" />}/>    */}
                 <Route path='/login' component={LoginPage}/>
                {/*<Route path='/signup' component={SignUpPage}/> */}
                {/* <Route path='/Newboard/number' component={Newsboard} render={(props) => <Newsboard {...props} newsNum={this.props.location['pathname']}/>} /> */}
                {/* <Route exact path='/Newboard/' component={Home}/> */}
                <Route path='/Newsboard/' component={Newsboard}/>
                
                {/* {<Route path='/Newsboard/:number' render={() => <Newsboard newsNum={0}/>} />} */}

                {/* <Route path='/Newsboard/' render={() => <Home contentStr="Newsboard" />} /> */}


                {/* <Route path='/Newsboard/' component={Home} /> */}

              </Switch>
            {/* </div> */}
            {<RightSideMenu/>    }
          {/* </main> */}
          </div>    
    )


  }  



}


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
// const Main = () => (

  
//   <main>
//     <Switch>
//       {/* <Route exact path='/' component={Home}/> */}
//       <Route exact path='/' render={() => <Home cardtitleP="Website Title" cardsubtitleP="This is the home page. Log in to see the hidden content"/>}/>
// {/* <Router path="/somePath" render={() => <SomeComponent someProp={prop} />} />       */}
//       {/* <Route path='/roster' component={Roster}/>
//       <Route path='/schedule' component={Schedule}/> */}

//       {/* {Auth.isUserAuthenticated() ? (
//       <div>    
//       <Route path='/login' component={LoginPage}/>
//       </div>      
//       ):
//       (
//       <div>    
//       <Route path='/login' component={LoginPage}/>
//       <Route path='/signup' component={SignUpPage}/>
//       </div>      
//       )

//       } */}


//       <Route path='/login' component={LoginPage}/>
//       <Route path='/signup' component={SignUpPage}/>

//     </Switch>
//   </main>
// )

// Main.propTypes = {
//   langsetting: PropTypes.string.isRequired,
//   // cardsubtitleP: PropTypes.string.isRequired
//   // errors: PropTypes.object.isRequired,
//   // user: PropTypes.object.isRequired
// };


export default Main