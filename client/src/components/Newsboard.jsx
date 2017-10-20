import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';


class Newsboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentURL: this.props.location['pathname'],
            currentContent: '',
            loadingContent: false
        };
    }

    componentDidMount() {
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
        xhr.open('get', '/news/requestNews?news='+encodeURI(this.state.currentURL));
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            console.log(xhr.response.message);
            // console.log('Right Side Menu Got GET /NEWS');
            this.setState({
            // numberOfNews: xhr.response.message,
               currentContent: xhr.response.message
            
            });
            this.setState({
              loadingContent: false
            });

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
      console.log('Newsboard receive props!')
    //   console.log(this.props.location['pathname'])
      console.log(nextProps.location['pathname'])

      this.setState({
        currentURL: nextProps.location['pathname']
      });
      this.setState({
        loadingContent: true
      });


      const xhr = new XMLHttpRequest();
      xhr.open('get', '/news/requestNews?news='+encodeURI(nextProps.location['pathname']));
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
          console.log('GOT MESSAGE BACK FROM SERVER: ',xhr.response.message);
          // console.log('Right Side Menu Got GET /NEWS');
          this.setState({
          // numberOfNews: xhr.response.message,
             currentContent: xhr.response.message
          
          });
          this.setState({
            loadingContent: false
          });

      }
      });
      // xhr.send(this.props.location['pathname']);    
      xhr.send();    

   }   

    // this.props.location
    render() {
        return (
        <div>
            {/* this is news board */}

                {
                    this.state.currentContent
                }
        </div>    
        
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

