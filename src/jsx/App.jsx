import React from "react";
import axios from "axios";
import Search from "./Search";
import PlayList from "./PlayList";
import Player from "./Player"

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            keyword: '',
            results: [],
            videoId: undefined,
            playerEnable: false
        }
    }

    // componentDidUpdate(PrevProps, PrevState){
    //     if (PrevState.keyword === this.state.keyword){
    //         return
    //     }
    //     else{
    //         this.searchByKeyWord()
    //     }
    // }

    searchByKeyWord = () => {
        console.log("did updated")
        axios.get('https://www.googleapis.com/youtube/v3/search',
        {
            params:{
                key: config.YOUTUBE_API_KEY,
                part: 'snippet',
                type: 'video',
                q: this.state.keyword
            }
        
        }).then(
            response => {
                console.log(response.data.items)
                this.setState({results: response.data.items})}
        )
    }

    handleSearch = (value) => {
        console.log("change keyword to " + value)
        this.setState({keyword : value}, this.searchByKeyWord)
    }

    handlePlay = (videoId) => {
        this.setState({videoId: videoId, playerEnable: true})
    }

    handleStop = () =>{
        this.setState({playerEnable: false})
    }
    // or just redirect


    render(){
        const playlist = this.state.results.map((result, index) => {
            const snippet = result.snippet
            return (
                <PlayList key={index} videoId={result.id.videoId} title={snippet.title} thumbnail = {snippet.thumbnails.default.url} 
                channelTitle = {snippet.channelTitle} handleClick={this.handlePlay} />
            )
        })

        const showView =  this.state.playerEnable ? <Player videoId={this.state.videoId}/> : playlist
        
        return(
            <div>
                <div>
                    <span onClick={this.handleStop} style={{visibility : this.state.playerEnable ? 'visible': 'hidden'}}> 뒤로가기</span>
                    <div onClick={()=>{window.location.reload()}}id="banner"> Youtube Search & Play </div>                  
                </div>
                <Search handleSearch={this.handleSearch}/>
                {showView}    
            </div>
        )
    }
}

export default App;