import {combineReducers} from 'redux';

import books from './books/';
import chapters from './chapters';

export default combineReducers({books, chapters});
