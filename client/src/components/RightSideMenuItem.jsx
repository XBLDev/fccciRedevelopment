import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';


class RightSideMenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };

        this.onLinkClicked = this.onLinkClicked.bind(this);
    }

    componentDidMount() {
    }
    
    onLinkClicked(){
        // this.setState({redirect: true});
        // this.props.history.push("/Newsboard/".concat(this.props.newsNumber.toString()));
        
    }

    render() {
        // "/Newsboard/".concat(this.props.newsNumber.toString())
        return (




            <div className="centerAreaRightItem">
                    {/* <div onClick={this.onLinkClicked}>
                        {this.props.newsTitle}
                    </div> */}
                    <Link to={"/Newsboard/".concat(this.props.newsTitle.toString())}>
                        {this.props.newsTitle}
                    </Link>
                {/* 
                   { this.state.redirect == false ? (

                        <a onClick={this.onLinkClicked}>  {this.props.newsTitle} </a>
                   ):(

                    <Redirect to={"/Newsboard/".concat(this.props.newsNumber.toString())} />

                   )
                   } */}
            </div>    
        )            
    }        

}    

RightSideMenuItem.propTypes = {
  newsTitle: PropTypes.string.isRequired,
  newsNumber: PropTypes.number.isRequired,
//   cardsubtitleP: PropTypes.string.isRequired
  // errors: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired
};

export default RightSideMenuItem;