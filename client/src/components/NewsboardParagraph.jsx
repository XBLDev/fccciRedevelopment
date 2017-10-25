import React from 'react';
import PropTypes from 'prop-types';
import NewsboardParagraphElement from './NewsboardParagraphElement.jsx';
import NewsboardParagraphLinkElement from './NewsboardParagraphLinkElement.jsx';

class NewsboardParagraph extends React.Component {

    constructor(props) {
        super(props);

        // this.state = {

        // };
    }

    componentDidMount() {



    }


    render() {

        // var items = [];
        // var elements = this.props.paragraphText.split(" ");
        // for (var i = 0; i < elements.length; i++) 
        // {
        //   items.push
        //   (       
        //     <NewsboardParagraphElement
        //       key={i}
        //       ElementContent={elements[i]}
        //     />
        //   );
        // }

        return (
            <div className='centerAreaLeftItem'>
                    {this.props.paragraphText.lastIndexOf('<h1>') != -1 ?
                    (    
                        <h1> 
                            {this.props.paragraphText.substring(4, this.props.paragraphText.length-6)}
                        </h1>
                    )    
                    :
                    (
                        this.props.paragraphText.lastIndexOf('<img src=') != -1 ?
                        (
                            <img src={this.props.paragraphText.substring
                                (this.props.paragraphText.lastIndexOf('<img src=')+'<img src='.length+7, 
                                this.props.paragraphText.length-5)} />
                        )
                        :
                        (
                            this.props.paragraphText.lastIndexOf('<a href=') != -1 ?
                            (
                                <NewsboardParagraphLinkElement linkText={this.props.paragraphText}/>
                            ):
                            (
                                this.props.paragraphText
                            )
                        )
                    )    
                        
                    }
            </div>            
        )                
    }        


}


NewsboardParagraph.propTypes = {
    paragraphText: PropTypes.string.isRequired,

};


export default NewsboardParagraph;
