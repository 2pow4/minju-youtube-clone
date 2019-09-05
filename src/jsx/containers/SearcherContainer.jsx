import React from "react";
import axios from 'axios';

import {connect} from 'react-redux';
import {search, change} from '../../store/modules/searcher';
import Searcher from "../components/Searcher";

class SearcherContainer extends React.Component {
    constructor(props){
        super(props)
    }
    handleChange = (e) => {
        this.props.change(e.target.value)
    }

    handleSearch = (e) => {
        if(this.props.keyword === "")
            return alert("검색어를 입력하세요!")

        else{
            axios.get('https://www.googleapis.com/youtube/v3/search',
            {
                params:{
                    key: config.YOUTUBE_API_KEY,
                    part: 'snippet',
                    type: 'video',
                    q: this.props.keyword
                }
            
            }).then((response) => {
                    console.log(response.data.items)
                    this.props.search(response.data.items)
                })
        }  

    }

    render(){
        return (
            <Searcher
                handleChange={(e) => this.handleChange(e)}
                handleSearch={(e) => this.handleSearch(e)}
                keyword={this.props.keyword}
            />
        )
    }
}

const mapStateToProps = ({ searcher }) => ({
    keyword: searcher.keyword
  })
  
  const mapDispatchToProps = dispatch => ({
    change: keyword => dispatch(change(keyword)),
    search: data => dispatch(search(data))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearcherContainer)