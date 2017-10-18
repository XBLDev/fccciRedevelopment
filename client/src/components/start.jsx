import React from 'react'
import Header from './Header.jsx'
import Main from './Main.jsx'
import RightSideMenu from './RightSideMenu.jsx'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  // <MuiThemeProvider>

    <div className="outerMostContainer">
        <Header />  
        {/* <div className="headerElement">
            <div className="headerEng">
              headerEng
            </div>  
            <div className="headerCh">
              headerCh
            </div> 
            <div className="menuArea">
              menuArea
            </div> 
        </div> */}

        {/* <div className="centerArea"> */}
          {<Main />}
          {/* {<RightSideMenu/>} */}
          {/* centerArea */}
        {/* </div> */}
    </div>

  // </MuiThemeProvider>

)

export default App
