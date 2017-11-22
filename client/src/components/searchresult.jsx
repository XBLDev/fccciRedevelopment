import React from 'react';
import SearchInput, {createFilter} from 'react-search-input';

import PropTypes from 'prop-types';
import emails from './mail.js';
// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name']
import Search from 'react-search';
import { Link } from 'react-router-dom';


const KEYS_TO_FILTERS = ['user.name']


class SearchResult extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            searchKeyWord: '',
            searchTerm: '',
            serverMsg: '',
            news: [],
            filter: ''
        // currentLanguage: 'Eng',      
        };
        this.searchUpdated = this.searchUpdated.bind(this)

    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }

    HiItems(items) {
        console.log(items)
    }

    componentWillMount() {
        console.log('SearchResult WILL MOUNT!');
    }

    componentDidMount() {

        document.title= 'SearchResult';
        
        console.log('SearchResult Did Mount');
        console.log('SearchResult location prop: ',this.props.location['pathname']);

        var currentLanguageSetting = localStorage.getItem('currentLanguage').toString();
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/news/search?language='+encodeURIComponent(currentLanguageSetting));
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {

            this.setState({filter: xhr.response.filter});

            this.setState({
                // filter: xhr.response.filter,
                serverMsg: xhr.response.allnews[0][this.state.filter].toString(),
                news: xhr.response.allnews,
            });
            // this.setState({
            // listOfLatestNews: xhr.response.listOfTitles,
            // currentLanguage: currentLanguageSetting
            // });
        }
        });
        xhr.send();   

        

        var keyword = this.props.location['pathname'].substring(
            this.props.location['pathname'].lastIndexOf('/')+1, 
            this.props.location['pathname'].length);

        this.setState({searchKeyWord: keyword});




    } 

    componentWillUnmount() {
        console.log('SearchResult will unmount!');
    }

    componentWillReceiveProps(newProps) {    
        console.log('SearchResult will receive props: ', newProps.location['pathname']);

        var currentLanguageSetting = localStorage.getItem('currentLanguage').toString();
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/news/search?language='+encodeURIComponent(currentLanguageSetting));
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            this.setState({filter: xhr.response.filter});


            this.setState({
                serverMsg: xhr.response.allnews[0][this.state.filter].toString(),
                news: xhr.response.allnews,
            });
        }
        });
        xhr.send();   



        var keyword = newProps.location['pathname'].substring(
            newProps.location['pathname'].lastIndexOf('/')+1, 
            newProps.location['pathname'].length);

        this.setState({searchKeyWord: keyword});
    
    }

    render() {
        // let items = [
        // { id: 0, value: 'ruby' },
        // { id: 1, value: 'javascript' },
        // { id: 2, value: 'lua' },
        // { id: 3, value: 'go' },
        // { id: 4, value: 'julia' }
        // ]

        // const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        // const filteredEmails = emails.filter(createFilter(this.state.searchKeyWord, KEYS_TO_FILTERS))
        // const filteredEmails = this.state.news.filter(createFilter(this.state.searchKeyWord, KEYS_TO_FILTERS))
        const filteredNews = this.state.news.filter(createFilter(this.state.searchKeyWord, [this.state.filter]))

        return (
            <div className="centerAreaLeft">

                {/* <div>
                    filter: {this.state.filter}
                </div><br/>

                <div>
                    Server Msg: {this.state.serverMsg}
                </div><br/> */}

                <div>
                    SearchResult page, search keyword is: {this.state.searchKeyWord}
                </div><br/>

                {/* <SearchInput className="search-input" onChange={this.searchUpdated} /> */}
                                        {/* <div className="from">News Name: {currentnews.titleEng}</div><br/> */}
                        {/* <div className="subject">email: {email.subject}</div><br/> */}
                {filteredNews.map(currentnews => {
                return (
                    <div className="mail" key={currentnews[this.state.filter]}>
                        {/* <div className="from">News Name: {currentnews[this.state.filter]}</div><br/> */}
                        <div>
                            <Link to={"/Newsboard/".concat(currentnews[this.state.filter].toString())}>
                                {currentnews[this.state.filter]}                        
                            </Link>
                        </div><br/>
                    </div>
                )
                })}

                {/* <Search items={items}
                placeholder='Pick your language'
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} 
                /> */}


                {/* <Search items={items}
                /> */}

            </div>
        )
    
    
    }    
  
}

export default SearchResult;