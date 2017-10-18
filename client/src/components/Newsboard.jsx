import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';


class Newsboard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Newsboard Did Mount');
        // console.log(this.props.location['pathname'])
    }

   componentWillUnmount() {
      console.log('Newsboard WILL UNMOUNT!')
   }

    // this.props.location
    render() {
        return (
        <div>
            {/* newsboard */}
            {this.props.newsNum}
        </div>    
        
        )            
    
    
    }        



}    

Newsboard.propTypes = {
    newsNum: PropTypes.string.isRequired,
    // newsContentTitle: PropTypes.string.isRequired,
    
    // newsContentURL: PropTypes.string.isRequired,
  //   cardsubtitleP: PropTypes.string.isRequired
    // errors: PropTypes.object.isRequired,
    // user: PropTypes.object.isRequired
};
  
export default Newsboard;

