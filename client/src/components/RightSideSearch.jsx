import React from 'react';
import Search from 'react-search';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class RightSideSearch extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
        //   date: moment(),
        //   loading: true,
        //   calendarEvents: []
        //http://www.fccci.org.au/cn/?s=%E6%AF%8D%E4%BA%B2%E8%8A%82
            searchKeyword: ''
        };

    }

    setKeywords(event)
    {
        this.setState({searchKeyword: event.target.value});
        // console.log('RIGHTSIDESEARCH: searchKeyword: ', this.state.searchKeyword);
    }

    onSearchClicked()
    {
        // console.log('RIGHTSIDESEARCH: search button/link clicked');
    }

    HiItems(items) {
        // console.log(items)
    }

    render() {

        let items = [
        { id: 0, value: 'ruby' },
        { id: 1, value: 'javascript' },
        { id: 2, value: 'lua' },
        { id: 3, value: 'go' },
        { id: 4, value: 'julia' }
        ]


        return (
            <div className="centerAreaRightSearch">

                {/* <Search items={items}
                placeholder='Pick your language'
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} 
                /> */}

                <div className="SBox">
                    <input onChange={this.setKeywords.bind(this)}/>
                </div>

                {/* <div className="SBtn">
                    <button onClick={this.onSearchClicked.bind(this)}>
                    SEARCH
                    </button>
                </div> */}

                {/* <Link to={"/".concat(localStorage.getItem('currentLanguage') == 'Eng' ? "en/?s=":"ch/?s=").concat(this.state.searchKeyword)}>
                        SEARCH
                </Link> */}

                <Link to={"/".concat(localStorage.getItem('currentLanguage') == 'Eng' ? "en/search/":"ch/search/").concat(this.state.searchKeyword)}>
                        SEARCH
                </Link>

            </div>    
        )
    }

}

export default RightSideSearch