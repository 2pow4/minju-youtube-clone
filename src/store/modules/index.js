import {combineReducers} from 'redux';
import app from './app.js';
import searcher from './searcher.js';

export default combineReducers({
    app,
    searcher
})