import React from 'react';
import PropTypes from 'prop-types';

class NewsboardParagraphLinkElement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paragraphElements: [],
            parsedText: ''
        };
    }

    componentDidMount() {
        var items = [];
        // console.log('linkText: ', this.props.linkText)
        var text = this.props.linkText;

        while(text.lastIndexOf('<a href=') != -1)
        {

            var replacedText = text.substring(text.lastIndexOf('</a>'), text.lastIndexOf('</a>')+4);
            var replacedWith = "";
            text = text.replace(replacedText, replacedWith);

            replacedText = text.substring(text.lastIndexOf('<a href='), text.lastIndexOf('">'));
            replacedWith = text.substring(text.lastIndexOf('<a href=')+9, text.lastIndexOf('">'));
            text = text.replace(replacedText, replacedWith);


        }

        this.setState({parsedText: text});
        // var 
        this.setState({paragraphElements: text.split(" ")});
        console.log('parsed text: ',text.split(" "));

    }

    render() {

        var items=[];
        for (var i = 0; i < this.state.paragraphElements.length; i++) 
        {
            var currElement = this.state.paragraphElements[i];
            var space = " ";
            if(i == 0)
            {
                space = "";
            }
            else
            {
                space = " ";
            }

            if(currElement.lastIndexOf('">') != -1)
            {
                items.push(
                <span key={i}>
                    <a href={currElement.substring(0, currElement.lastIndexOf('">'))} className="NewsboardParaLink">
                        {space.concat(currElement.substring(currElement.lastIndexOf('">')+2, currElement.length))}
                    </a>
                </span>
                );
            }
            else
            {
                items.push(
                <span key={i}>
                    {space.concat(currElement)}
                </span>
                );
            }
        }        

        return (
            <span>
                {items}
                {/*this.state.parsedText*/}
                {/*this.props.linkText*/}
            </span>            
        )                
    }        

}

NewsboardParagraphLinkElement.propTypes = {
    linkText: PropTypes.string.isRequired,
};


export default NewsboardParagraphLinkElement;
