import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import announcements from './announcements';
import schedule from './schedule';
import projects from './projects';

const rootReducer = combineReducers({courses, announcements, schedule, projects, routing: routerReducer});

export default rootReducer;