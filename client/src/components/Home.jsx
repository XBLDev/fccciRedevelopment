// import React from 'react'

// const Home = () => (
//   <div>
//     <h1>Welcome to the Tornadoes Website!</h1>
//   </div>
// )

// export default Home



// import React from 'react';

import React from 'react';

import PropTypes from 'prop-types';


import { Card, CardTitle } from 'material-ui/Card';
import Auth from '../modules/Auth';
import DashboardPage from '../containers/DashboardPage.jsx';
// import LanguageSetting from '../modules/LanguageSetting';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import Newsboard from './Newsboard.jsx'
import RightSideMenu from './RightSideMenu.jsx'

class Home extends React.Component {

  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      currentLanguage: 'Eng',
      // cardtitle: "Website Title",
      // cardsubtitle: "This is the home page. Log in to see the hidden content",
      
    };

    //this.cardtitleP = "";

  }
  
   componentWillMount() {
      console.log('Home WILL MOUNT!');
   }

  componentDidMount() {


    document.title= 'Home';
    
    console.log('Home Did Mount');
    console.log('Home location prop: ',this.props.location['pathname']);
  }

  componentWillUnmount() {
    console.log('Home will unmount!');
  }

   componentWillReceiveProps(newProps) {    
      console.log('Home will receive props: ', newProps.location['pathname']);
   }

  //  shouldComponentUpdate(newProps, newState) {
  //     return true;
  //  }

  //  componentWillUpdate(nextProps, nextState) {
  //     console.log('Component WILL UPDATE!');
  //  }

  //  componentDidUpdate(prevProps, prevState) {
  //     console.log('Component DID UPDATE!')
  //  }

  //  componentWillUnmount() {
  //     console.log('Component WILL UNMOUNT!')
  //  }

  render() {

    // var maintitle = localStorage.getItem('currentLanguage') == 'Eng' ? 'Website title':'网站标题';
    // var subtitle = localStorage.getItem('currentLanguage') == 'Eng' ?  'This is the home page. Log in to see the hidden content':
    // '这里是主页，请登录查看更多内容';

    return (
      // <div className="centerAreaInner">
        <div className="centerAreaLeft">
            <h1>关于我们</h1><br/>
            <h2>堪培拉华联社简介</h2><br/>
            堪培拉华联社(Federation of Chinese Community of Canberra Inc.), 英语简称 FCCCI。 FCCCI成立于1994年，由堪培拉的资深大陆学人发起组成，是目前堪培拉最大的华人社团。<br/><br/>
            堪培拉华联社为非政治、非宗教、非盈利的堪培拉华人社团，宗旨是团结当地华人及其他华人团体，促进华人子弟学习中文，举办华人康乐联谊活动，关心澳大利亚社会发展，发扬优秀的中华文化，维护自身正当权益，促进澳中友好，加强澳中两国间的互惠交流。<br/><br/>
                    
        </div>
        // <RightSideMenu menupath={this.props.location['pathname']}/>    
      // </div>

      //   <div>
      //   {
      //     this.props.contentStr.includes("Newsboard") == false? (
      //     <div>
           
      //     <h1>关于我们</h1><br/>
      //     <h2>堪培拉华联社简介</h2><br/>
      //     堪培拉华联社(Federation of Chinese Community of Canberra Inc.), 英语简称 FCCCI。 FCCCI成立于1994年，由堪培拉的资深大陆学人发起组成，是目前堪培拉最大的华人社团。<br/><br/>
      //     堪培拉华联社为非政治、非宗教、非盈利的堪培拉华人社团，宗旨是团结当地华人及其他华人团体，促进华人子弟学习中文，举办华人康乐联谊活动，关心澳大利亚社会发展，发扬优秀的中华文化，维护自身正当权益，促进澳中友好，加强澳中两国间的互惠交流。<br/><br/>
           
      //     </div>
      //   ):(
      //     <div>

      //       <Newsboard newsNum={this.props.contentStr.concat(Math.random())}/>
      //     </div>  
      //   )
      //   }
      // </div> 



      // <div>
      //   {
      //     this.props.location['pathname'].startsWith("/Newsboard") == false? (
      //     <div>
           
      //     <h1>关于我们</h1><br/>
      //     <h2>堪培拉华联社简介</h2><br/>
      //     堪培拉华联社(Federation of Chinese Community of Canberra Inc.), 英语简称 FCCCI。 FCCCI成立于1994年，由堪培拉的资深大陆学人发起组成，是目前堪培拉最大的华人社团。<br/><br/>
      //     堪培拉华联社为非政治、非宗教、非盈利的堪培拉华人社团，宗旨是团结当地华人及其他华人团体，促进华人子弟学习中文，举办华人康乐联谊活动，关心澳大利亚社会发展，发扬优秀的中华文化，维护自身正当权益，促进澳中友好，加强澳中两国间的互惠交流。<br/><br/>
           
      //     </div>
      //   ):(
      //     <div>

      //       <Newsboard newsNum={this.props.location['pathname']}/>
      //     </div>  
      //   )
      //   }
      // </div> 
      
      


      // <div>

      //   {Auth.isUserAuthenticated() == false ? (
          
      // <Card className="container">

      //     <CardTitle title={this.props.cardtitleP} subtitle={this.props.cardsubtitleP} />  

        
      // </Card>):
      // (
      //   <DashboardPage/>
      // )}
      // </div>    
    
    )


  }  



}


// const Home = () => (

//   <div>
    
//     {Auth.isUserAuthenticated() == false ? (
      
//   <Card className="container">
//     <CardTitle title="React Application" subtitle="This is the home page. Log in to see the hidden content" />
//   </Card>):
//   (
//     <DashboardPage/>
//   )}
//   </div>
// );

Home.propTypes = {
  contentStr: PropTypes.string.isRequired,
  // cardtitleP: PropTypes.string.isRequired,
  // cardsubtitleP: PropTypes.string.isRequired
  // errors: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired
};
Home.defaultProps = {
  contentStr: 'Home',
};


export default Home;