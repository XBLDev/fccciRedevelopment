import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import NewsboardParagraph from './NewsboardParagraph.jsx';
import LanguageSetting from '../modules/LanguageSetting';
import RightSideMenu from './RightSideMenu.jsx'

class Newsboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listOfParagraphs: [],
            currentURL: this.props.location['pathname'],
            currentContent: '',
            loadingContent: false
        };
    }

    componentDidMount() {
        // localStorage.setItem('currentLanguage', 'Eng');
        
        // localStorage.setItem('currentLanguage', 'Ch');
        // console.log('currentLanguage: ', localStorage.getItem('currentLanguage'));

        document.title= this.props.location['pathname'].substring(this.props.location['pathname'].lastIndexOf('/')+1, this.props.location['pathname'].length);
        console.log('Newsboard Did Mount');
        // console.log('newsNum: ',this.props.newsNum)
        console.log(this.props.location['pathname'])



        this.setState({
            currentURL: this.props.location['pathname']
        });    
        this.setState({
            loadingContent: true
        });            

        const xhr = new XMLHttpRequest();

        var currentLanguage = localStorage.getItem('currentLanguage').toString();
        console.log(currentLanguage);

        xhr.open('get', '/news/requestNews?news='+encodeURI(this.state.currentURL)+'&language='+encodeURIComponent(currentLanguage), true);
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            // console.log(xhr.response.message);
            // console.log('Right Side Menu Got GET /NEWS');
            this.setState({
            // numberOfNews: xhr.response.message,
               currentContent: xhr.response.message
                
            });
            this.setState({
              loadingContent: false
            });

            var paragraphs = this.state.currentContent.split("\n");
            this.setState({
                listOfParagraphs: paragraphs                    
            });
            // console.log(this.state.listOfParagraphs);

        }
        });
        // xhr.send(this.props.location['pathname']);    
        xhr.send();    
        

    }

   componentWillUnmount() {
      console.log('Newsboard WILL UNMOUNT!')
   }

   componentWillReceiveProps(nextProps)
   {
     document.title= nextProps.location['pathname'].substring(nextProps.location['pathname'].lastIndexOf('/')+1, nextProps.location['pathname'].length);
    
      console.log('Newsboard receive props!')
    //   console.log(this.props.location['pathname'])
      console.log(nextProps.location['pathname'])

      this.setState({listOfParagraphs: []});
      this.setState({
        currentURL: nextProps.location['pathname']
      });
      this.setState({
        loadingContent: true
      });


      const xhr = new XMLHttpRequest();

      var currentLanguage = localStorage.getItem('currentLanguage');

      xhr.open('get', '/news/requestNews?news='+encodeURIComponent(nextProps.location['pathname'])+'&language='+encodeURIComponent(currentLanguage), true);
      
    //   xhr.open('get', '/news/requestNews?news='+encodeURI(nextProps.location['pathname'])+'&language='+encodeURI(currentLanguage));
    //   xhr.open('get', '/news/requestNews?news='+encodeURI(nextProps.location['pathname']));
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        //   console.log('GOT MESSAGE BACK FROM SERVER: ',xhr.response.message);
          // console.log('Right Side Menu Got GET /NEWS');
          this.setState({
          // numberOfNews: xhr.response.message,
             currentContent: xhr.response.message
          
          });
          this.setState({
            loadingContent: false
          });

          var paragraphs = this.state.currentContent.split("\n");
          this.setState({
              listOfParagraphs: paragraphs                    
          });


      }
      });
      // xhr.send(this.props.location['pathname']);    
      xhr.send();    

   }   

    // this.props.location
    render() {


        var items = [];
        for (var i = 0; i < this.state.listOfParagraphs.length; i++) 
        {
          items.push
          (       
            <NewsboardParagraph
              key={i}
              paragraphText={this.state.listOfParagraphs[i]}
            />
          );
        }


        return (

            // <div className="centerAreaInner">
                <div className='centerAreaLeft'>
                    {this.state.listOfParagraphs.length == 0 ?
                    (
                        <NewsboardParagraph paragraphText='loading...' />
                    ):
                    (
                        items
                    )
                    }
                </div>
                // <RightSideMenu menupath={this.props.location['pathname']}/>                        
            // </div>    
        // <div className='centerAreaLeft'>
        //      {this.state.listOfParagraphs.length == 0 ?
        //      (
        //         <NewsboardParagraph paragraphText='loading...' />

        //      ):
        //      (
        //         items
     
        //      )
        //      }
        // </div>    
        
        )            
    
    
    }        



}    

// Newsboard.propTypes = {
//     newsNum: PropTypes.string.isRequired,
//     // newsContentTitle: PropTypes.string.isRequired,
    
//     // newsContentURL: PropTypes.string.isRequired,
//   //   cardsubtitleP: PropTypes.string.isRequired
//     // errors: PropTypes.object.isRequired,
//     // user: PropTypes.object.isRequired
// };
  
export default Newsboard;

