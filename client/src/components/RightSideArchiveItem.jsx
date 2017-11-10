import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
// import {Redirect} from 'react-router-dom';


class RightSideArchiveItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            URL: ''
        };

    }
    componentWillMount()
    {
        var year = this.props.archiveTitle.substring(this.props.archiveTitle.lastIndexOf('/')+1, this.props.archiveTitle.length);
        year = year.substring(0, year.lastIndexOf(' '));

        var month = this.props.archiveTitle.substring(0, this.props.archiveTitle.lastIndexOf('/'));
        var year_month = year.concat('_').concat(month);

        this.setState({URL: year_month});
    }

    componentDidMount() {
        // console.log('RightSideMenuItem DID MOUNT!')
        
    }
    

    componentWillReceiveProps(nextProps)
    {
        // console.log('RightSideMenuItem WILL RECEIVE PROPS!')
    }    

    componentWillUnmount() {
        // console.log('RightSideMenuItem WILL UNMOUNT!')
    }

    // onLinkClicked(){
    //     // this.setState({redirect: true});
    //     // this.props.history.push("/Newsboard/".concat(this.props.newsNumber.toString()));
        
    // }

    render() {

        
        return (




            <div className="centerAreaRightItem">

                    <Link to={"/".concat(localStorage.getItem('currentLanguage') == 'Eng'? 'en/Archive/' : 'ch/Archive/').concat(this.state.URL)}>
                        {this.props.archiveTitle}

                    </Link>

            </div>    
        )            
    }        

}    

RightSideArchiveItem.propTypes = {
  archiveTitle: PropTypes.string.isRequired,
//   newsTitleArr: PropTypes.array.isRequired,
//   newsNumber: PropTypes.number.isRequired,
//   currentLanguage: PropTypes.string.isRequired,
//   currentPath: PropTypes.string.isRequired,
//   cardsubtitleP: PropTypes.string.isRequired
  // errors: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired
};

export default RightSideArchiveItem;