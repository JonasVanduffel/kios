import React from 'react';
import { render } from 'react-dom';

//Import react router deps
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//Import CSS
import './css/style.css';
import './../node_modules/react-grid-layout/css/styles.css';
import './../node_modules/react-resizable/css/styles.css';

//Import Components
import App from './components/App';

//Import Pages
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';

import Dashboard from './pages/Dashboard';

import Courses from './pages/Courses';
import CoursesGeneral from './pages/CoursesGeneral';
import CoursesArchive from './pages/CoursesArchive';
import CourseAnnouncements from './pages/course/CourseAnnouncements';
import CourseDocuments from './pages/course/CourseDocuments';
import CourseTasks from './pages/course/CourseTasks';
import CourseTaskDetail from './pages/course/CourseTaskDetail';
import CourseTaskSubmit from './pages/course/CourseTaskSubmit';
import CourseResults from './pages/course/CourseResults';
import CourseECTS from './pages/course/CourseECTS';

import Inspiration from './pages/Inspiration';
import ProjectDetail from './pages/ProjectDetail';

import Groups from './pages/Groups';
import GroupsGeneral from './pages/GroupsGeneral';
import GroupsArchive from './pages/GroupsArchive';
import GroupsNewsFeed from './pages/group/GroupNewsFeed';

import EmptyPage from './pages/EmptyPage';
import Account from './pages/Account';

//Import Firebase
import * as firebase from 'firebase';

//Configure Firebase
const config = {
    apiKey: "AIzaSyAjXWvSamajv35PYiAbKByqa2idD1PcUv0",
    authDomain: "kios-34122.firebaseapp.com",
    databaseURL: "https://kios-34122.firebaseio.com",
    projectId: "kios-34122",
    storageBucket: "kios-34122.appspot.com",
    messagingSenderId: "830792625648"
};
firebase.initializeApp(config);

//Check if authentication needed
function loggedIn() {
    var user = firebase.auth().currentUser;

    if (user) {
        return true;
    } else {
        return false;
    }
}
function requireAuth(nextState, replace) {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    } else{
    }
}

//Route configuration
const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} title={"Dashboard"}>
                <IndexRoute component={Dashboard} title={"Dashboard"} onEnter={requireAuth}> </IndexRoute>
                <Route path="cursussen" component={Courses} title={"Cursussen"} onEnter={requireAuth}> </Route>
                <Route path="cursussen/algemeen" component={CoursesGeneral} title={"Cursussen"} onEnter={requireAuth}> </Route>
                <Route path="cursussen/archief" component={CoursesArchive} title={"Cursussen"} onEnter={requireAuth}> </Route>

                <Route path="cursussen/:courseId/aankondigingen" component={CourseAnnouncements} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/cursusdocumenten" component={CourseDocuments} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/opdrachten" component={CourseTasks} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/opdrachten/:opdracht" component={CourseTaskDetail} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/opdrachten/:opdracht/indienen" component={CourseTaskSubmit} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/resultaten" component={CourseResults} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/ects" component={CourseECTS} onEnter={requireAuth}> </Route>

                <Route path="inspiratie" component={Inspiration} title={"Community / inspiratie"} onEnter={requireAuth}> </Route>
                <Route path="inspiratie/:projectId" component={ProjectDetail} title={"Community / inspiratie"} onEnter={requireAuth}> </Route>

                <Route path="groepen" component={Groups} title={"Groepen"} onEnter={requireAuth}> </Route>
                <Route path="groepen/algemeen" component={GroupsGeneral} title={"Groepen"} onEnter={requireAuth}> </Route>
                <Route path="groepen/archief" component={GroupsArchive} title={"Groepen"} onEnter={requireAuth}> </Route>
                <Route path="groepen/:groupId/nieuwsfeed" component={GroupsNewsFeed} title={"Groepen"} onEnter={requireAuth}> </Route>

                <Route path="kalender" component={EmptyPage} onEnter={requireAuth} title={"Kalender"}> </Route>
                <Route path="inbox" component={EmptyPage} onEnter={requireAuth} title={"Inbox"}> </Route>
                <Route path="account" component={Account} onEnter={requireAuth} title={"Account"}> </Route>
            </Route>

            <Route path="login" component={Login} title={"Login"}> </Route>
            <Route path="registreer" component={Signup}> </Route>

        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));