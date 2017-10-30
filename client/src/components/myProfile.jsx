import React from 'react';

import PropTypes from 'prop-types';

class myProfile extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
    };

  }

  componentDidMount() {
    document.title= localStorage.getItem('currentLanguage') == 'Eng' ? "My Profile":"我的资料";
    

  }    

  render() {
    return (
    <div className='centerAreaLeft'>
        my profile, my name is: {JSON.parse(localStorage.getItem('usrname')).name}  
    </div>
   )}  
}

export default myProfile;
