import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courses from './courses';
import announcements from './announcements';
import schedule from './schedule';
import projects from './projects';
import groups from './groups';

const rootReducer = combineReducers({courses, announcements, schedule, projects, groups, routing: routerReducer});

export default rootReducer;