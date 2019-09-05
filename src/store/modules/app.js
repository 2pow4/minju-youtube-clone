const PLAY = 'app/PLAY';
const STOP = 'app/STOP';

export const play = (videoId, playerEnable) => ({ type: PLAY, videoId, playerEnable})
export const stop = playerEnable => ({ type: STOP, playerEnable});

const initialState = {
    videoId: undefined,
    playerEnable: false
}

export default function app(state = initialState, action){
    switch (action.type){
        case PLAY:
            return {
                ...state,
                videoId : action.videoId,
                playerEnable : action.playerEnable,
            }
        case STOP: 
            return {
                ...state,
                playerEnable: action.playerEnable
            }
        default:
            return state;

    }
}