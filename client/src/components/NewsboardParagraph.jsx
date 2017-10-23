import React from 'react';
import PropTypes from 'prop-types';


class NewsboardParagraph extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {

        // };
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className='centerAreaLeftItem'>
                    {/* new paragraph here */}
                    {this.props.paragraphText}
            </div>            
        )                
    }        


}


NewsboardParagraph.propTypes = {
    paragraphText: PropTypes.string.isRequired,

};


export default NewsboardParagraph;
