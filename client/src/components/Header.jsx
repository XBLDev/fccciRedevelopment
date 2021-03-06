import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../modules/Auth';
import LanguageSetting from '../modules/LanguageSetting';
import {Redirect} from 'react-router-dom';



class Header extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      LangBtnText: '中文版',
      SiteText: 'WebSite Name',
      loginText: 'Log In',
      signupText: 'Sign up',
      userWelcomeText: 'Hello ',
      redirect: false,
      // websiteTitle: 'React Application',
      // websit
      // redirect: false,
      // errors: {},
      // user: {
      //   email: '',
      //   name: '',
      //   password: ''
      // }
    };

    this.onLogOutClicked = this.onLogOutClicked.bind(this);
    this.onLanguageSettingClicked = this.onLanguageSettingClicked.bind(this);
    // LanguageSetting.setEng();
  }    

  onLogOutClicked()
  {
    if(Auth.isUserAuthenticated() == true)
    {
      // console.log('Current User is: ', localStorage.getItem('usrname'),', logging out');
      Auth.deauthenticateUser();
    }
  }

  onLanguageSettingClicked()
  {
    if(localStorage.getItem('currentLanguage') == 'Eng')
    {
      // console.log('CURRENT LANGUANGE IS ENG, CHANGING TO CH');
      
      localStorage.setItem('currentLanguage', 'Ch')
      //  LanguageSetting.setChi();
      //  this.setState({LangBtnText:'English'});

      //  this.setState({SiteText:'网站名称'});

      //  this.setState({loginText:'登录'});
      //  this.setState({singupText:'注册'});
      //  this.setState({userWelcomeText:'你好 '});
      //  this.setState({redirect: true});
    }
    else
    {
      // console.log('CURRENT LANGUANGE IS CH, CHANGING TO ENG');
      
      localStorage.setItem('currentLanguage', 'Eng');
      //  this.setState({LangBtnText:'中文版'});

      //  this.setState({SiteText:'WebSite Name'});

      //  this.setState({loginText:'Log in'});
      //  this.setState({singupText:'Sign up'});
      //  this.setState({userWelcomeText:'Hello '});
      //  this.setState({redirect: true});

    }

  }




  render() {
    return (
      
        <div className="headerElement">
            <div className="headerEng">
            FEDERATION OF CHINESE COMMUNITY OF CANBERRA INC.
            </div>
            <div className="headerCh">
            堪培拉华联社
            </div>
            <div className="menuArea">
              <div className="menuAreaLeft">
                {/* Menu Items */}
                
                <div className="menuItem">
                  {/* <a className="linkButton" href="">关于我们</a> */}
                  <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/en":"/ch"}>                    
                    {localStorage.getItem('currentLanguage') == 'Eng' ? "About Us":"关于我们"}
                  </Link>
                </div>
                
                <div className="menuItem">
                  <Link to={"/"}>                    
                    {localStorage.getItem('currentLanguage') == 'Eng' ? "Events":"活动看板"}
                  </Link>
                </div>

                <div className="menuItem">
                  <Link to={"/"}>                    
                    {localStorage.getItem('currentLanguage') == 'Eng' ? "Chinese School":"中文学校"}
                  </Link>                  
                </div>

                <div className="menuItem">
                  <Link to={"/"}>                    
                    {localStorage.getItem('currentLanguage') == 'Eng' ? "New Star Dance Group":"新星舞团"}
                  </Link>                   
                </div>

                {/* <div className="menuItem">
                  <Link to={"/"}>                    
                    {localStorage.getItem('currentLanguage') == 'Eng' ? "合唱团":"合唱团"}
                  </Link>                         
                  <a className="linkButton" href="">合唱团</a>
                </div> */}

                {/* <div className="menuItem">
                  <a className="linkButton" href="">联系我们</a>
                </div> */}
                
                <div className="menuItem">
                <Link to={localStorage.getItem('currentLanguage') == 'Eng' ? "/ch":"/en"} onClick={this.onLanguageSettingClicked}>
                    {localStorage.getItem('currentLanguage') == 'Eng' ?(
                      '中文版'
                    ):
                    (
                      'English'
                    )
                    }
                  </Link>
                </div>
                
                <div className="menuItem">
                  <Link to={Auth.isUserAuthenticated() == false ? "/login":"/myProfile"}>
                    {localStorage.getItem('currentLanguage') == 'Eng' ?(
                      'My Profile'
                    ):
                    (
                      '我的资料'
                    )
                    }
                  </Link>
                </div>   




                {/* <div className="menuItem">
                  {Auth.isUserAuthenticated() == false ? "_":"你好".concat(JSON.parse(localStorage.getItem('usrname')).name)}
                </div> */}
                {/* {Auth.isUserAuthenticated() == false ?(
                    <div>
                    </div>  
                ):
                (
                  <div>
                  </div>  
                )
                } */}


              </div>


              <div className="menuAreaRight">

                <div className={Auth.isUserAuthenticated() == false ? "menuItemHidden":"menuItem"}>
                    {Auth.isUserAuthenticated() == false ?(
                      '-'
                    ):
                    (
                      (JSON.parse(localStorage.getItem('usrname')).name)
                    )
                    }
                </div>   

                <div className="menuItem">  
                  {/* <a className="linkButton" href="">登录</a> */}
                  {/* <a className="linkButton" href="">新用户</a> */}
                  <Link to={Auth.isUserAuthenticated() == false ? "/login":"/"} onClick={this.onLogOutClicked}>
                    {Auth.isUserAuthenticated() == false ? ('登录'):('登出')}
                  </Link>
                </div>



              </div>                           
            </div>  


        </div>  
    //  <div className="top-bar">

        

    //     <div className="top-bar-left">
    //             <Link to="/">{this.state.SiteText}</Link>   
    //     </div>

        
    //     <div>
    //     {Auth.isUserAuthenticated() == true ? (

    //         <div className="top-bar-left">

    //               {this.state.userWelcomeText} {JSON.parse(localStorage.getItem('usrname')).name}!

    //         </div>  
    //         ):
    //         (

    //         <div>
    //         </div>  

    //         )}

    //     </div>

    //     <div className="top-bar-left">
    //           <Link to="/" onClick={this.onLanguageSettingClicked}>{this.state.LangBtnText}</Link>   


    //     </div>  




    //     {Auth.isUserAuthenticated() == false ? (
    //     <div className="top-bar-right">
    //              <Link to="/login">{this.state.loginText}</Link> 
    //             <Link to="/signup">{this.state.singupText}</Link>   
    //     </div>
    //     ):
    //     (
    //     <div className="top-bar-right">
    //              <Link to="/login" onClick={this.onLogOutClicked}>Log out</Link> 
    //     </div>
    //     )
    //     }



    // </div>
    




    );
  }


}


// The Header creates links that can be used to navigate
// between routes.
// const Header = () => (
//     <div className="top-bar">
//         <div className="top-bar-left">
//                 <Link to="/">React App</Link>   
//         </div>


//         {Auth.isUserAuthenticated() == false ? (
//         <div className="top-bar-right">
//                  <Link to="/login">Log in</Link> 
//                 <Link to="/signup">Sign up</Link>   
//         </div>
//         ):
//         (
//         <div className="top-bar-right">
//                  <Link to="/login">Log out</Link> 
//         </div>
//         )
//         }



//     </div>    
// //   <header>
// //     <nav>
// //       <ul>
// //         <li><Link to='/'>Home</Link></li>
// //         <li><Link to='/roster'>Roster</Link></li>
// //         <li><Link to='/schedule'>Schedule</Link></li>
// //       </ul>
// //     </nav>
// //   </header>
// )

export default Header