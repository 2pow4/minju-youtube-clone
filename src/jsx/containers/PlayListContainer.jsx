import React from 'react';

import {connect} from 'react-redux';
import {play} from '../../store/modules/app';
import PlayList from '../components/PlayList';

class PlayListContainer extends React.Component{
    constructor(props){
        super(props)
    }
    
    handlePlay = (videoId) => {
        this.props.play(videoId, true)
    }

    render(){
        const playlist = this.props.results.map((result, index) => {
            const snippet = result.snippet
            return (
                <PlayList key={index} videoId={result.id.videoId} title={snippet.title} thumbnail = {snippet.thumbnails.default.url} 
                channelTitle = {snippet.channelTitle} handleClick={this.handlePlay} />
            )
        })

        return (<div>{playlist}</div>)
    }
}

const mapStateToProps = ({searcher, app}) => ({
    videoId: app.videoId,
    results: searcher.results
})

const mapDispatchToProps = dispatch => ({
    play: (videoId, playerEnable) => dispatch(play(videoId, playerEnable)),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PlayListContainer)
