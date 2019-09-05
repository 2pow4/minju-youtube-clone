import React from "react";
import SearcherContainer from "../containers/SearcherContainer";
import PlayListContainer from "../containers/PlayListContainer";
import Player from "./Player"

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const showView =  this.props.playerEnable ? <Player videoId={this.props.videoId}/> : <PlayListContainer/>
        
        return(
            <div>
                <div>
                    <span onClick={this.props.handleStop} style={{visibility : this.props.playerEnable ? 'visible': 'hidden'}}> 뒤로가기</span>
                    <div onClick={()=>{window.location.reload()}}id="banner"> Youtube Search & Play </div>                  
                </div>
                <SearcherContainer/>
                {showView}    
            </div>
        )
    }
}

export default App;