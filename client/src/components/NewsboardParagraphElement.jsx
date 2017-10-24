import React from 'react';
import PropTypes from 'prop-types';

class NewsboardParagraphElement extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {

        // };
    }

    componentDidMount() {
    }

    render() {
        return (
            <span>
                    {this.props.ElementContent}
            </span>            
        )                
    }        

}

NewsboardParagraphElement.propTypes = {
    ElementContent: PropTypes.string.isRequired,
};


export default NewsboardParagraphElement;
