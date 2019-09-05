const CHANGE = 'app/CHANGE';
const SEARCH = 'app/SEARCH';

export const change = keyword => ({type: CHANGE, keyword});
export const search = results => ({type: SEARCH, results});

const initialState = {
    keyword: '',
    results: [],
}

export default function searcher(state = initialState, action){
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
        default:
            return state;

    }
}
