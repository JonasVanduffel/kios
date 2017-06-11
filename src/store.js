import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import root reducer
import rootReducer from './reducers/index';

import courses from './data/courses';
import announcements from './data/announcements';
import schedule from './data/schedule';
import projects from './data/projects';

//Object for default data
const defaultState = {
    courses,
    announcements,
    schedule,
    projects,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;