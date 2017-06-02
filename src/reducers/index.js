import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import announcements from './announcements';
import schedule from './schedule';

const rootReducer = combineReducers({courses, announcements, schedule, routing: routerReducer});

export default rootReducer;