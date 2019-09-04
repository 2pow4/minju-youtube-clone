const CHANGE = 'app/CHANGE';
const SEARCH = 'app/SEARCH';
const PLAY = 'app/PLAY';
const STOP = 'app/STOP';

export const change = keyword => ({type: CHANGE, keyword});
export const search = results => ({type: SEARCH, results})
export const play = (videoId, playerEnable) => ({ type: PLAY, videoId, playerEnable})
export const stop = playerEnable => ({ type: STOP, playerEnable});

const initialState = {
    keyword: '',
    results: [],
    videoId: undefined,
    playerEnable: false
}

export default function app(state = initialState, action){
    switch (action.type){
        case CHANGE:
            return {
                ...state,
                keyword : action.keyword,
            };
        case SEARCH:
            return {
                ...state,
                results : action.results
            }
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