import React from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    incrementTimer,
    stopTimer,
    loadingfinished,
    setTotalPhotos,
    setAllPhotos
} from './counter'



class RightSideEventPhotos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfEventImgURLs: []
        };

    }

    componentWillMount()
    {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/GalaryPhotos/getGalaryPhotos');
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // console.log(xhr.response.URLS);
                var photos = [];
                for(var i = 0; i < xhr.response.URLS.length; i++)
                {
                    console.log(xhr.response.URLS[i]['URL']);
                    photos.push(xhr.response.URLS[i]['URL']);
                }

                this.props.setAllPhotos(photos);
                this.props.setTotalPhotos(xhr.response.message);
                this.props.loadingfinished();
                this.props.incrementTimer();
                
            }
        });        

        xhr.send();    
        
        // this.props.incrementTimer();
        
    }

    componentWillUnmount() 
    {

    }

    componentDidMount() {
    
    }

    componentWillUpdate(nextProps, nextState)
    {

    }

    componentDidUpdate(prevProps, prevState){
    }

    componentWillReceiveProps(nextProps)
    {

    }

    render() {
        return (
        <div className="centerAreaEventPhotos">

            <div className="currenteventPhoto">
                {this.props.loading == true?
                (
                    'loading...'
                ):
                (
                    // this.props.allGalaryPhotos[this.props.timer]

                    <img className="currenteventPhoto" src={this.props.allGalaryPhotos[this.props.timer]}/>
                
                )
                }
                {/* <img className="currenteventPhoto" 
                src="http://4vector.com/i/free-vector-rubik-s-cube-random-clip-art_106251_Rubiks_Cube_Random_clip_art_medium.png"/> */}
            </div>    
        </div>    
        )
    }
}

const mapStateToProps = state => ({
    timer: state.counter.timer,
    loading: state.counter.loading,
    allGalaryPhotos: state.counter.allGalaryPhotos
})

const mapDispatchToProps = dispatch => bindActionCreators({
    incrementTimer,
    stopTimer,
    loadingfinished,
    setTotalPhotos,
    setAllPhotos
}, dispatch)


// export default RightSideEventPhotos

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RightSideEventPhotos)