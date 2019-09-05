import React from 'react'
import {connect} from 'react-redux'
import App from '../components/App'
import {stop} from '../../store/modules/app'

class AppContainer extends React.Component{
    constructor(props){
        super(props)
    }

    handleStop = (e) =>{
        this.props.stop(false)
    }

    render() {
        return(
            <App
            handleStop = {this.handleStop}
            playerEnable = {this.props.playerEnable}
            videoId = {this.props.videoId}
            />
        )
    }
}

const mapStateToProps = ({app}) => ({
    playerEnable : app.playerEnable,
    videoId: app.videoId
});

const mapDispatchToProps = (dispatch) => ({
    stop: playerEnable => dispatch(stop(playerEnable))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);