import React from 'react';
import { render } from 'react-dom';

//Import CSS
import './css/style.css';

//Import Components
import App from './components/App';

//Import Pages
import Cursussen from './pages/Cursussen';
import CursussenGeneral from './pages/CursussenGeneral';
import CursussenArchive from './pages/CursussenArchive';
import Dashboard from './pages/Dashboard';
import CursusAankondigingen from './pages/cursus/CursusAankondigingen';
import CursusDocumenten from './pages/cursus/CursusDocumenten';
import CursusOpdrachten from './pages/cursus/CursusOpdrachten';
import CursusResultaten from './pages/cursus/CursusResultaten';
import CursusECTS from './pages/cursus/CursusECTS';
import Community from './pages/Community';
import Groepen from './pages/Groepen';
import Empty from './pages/EmptyPage';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';

//Import react router deps
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

//Import Firebase
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAjXWvSamajv35PYiAbKByqa2idD1PcUv0",
    authDomain: "kios-34122.firebaseapp.com",
    databaseURL: "https://kios-34122.firebaseio.com",
    projectId: "kios-34122",
    storageBucket: "kios-34122.appspot.com",
    messagingSenderId: "830792625648"
};
firebase.initializeApp(config);

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
        console.log("sdf");
    }
}

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} title={"Dashboard"}>
                <IndexRoute component={Dashboard} title={"Dashboard"} onEnter={requireAuth}> </IndexRoute>
                <Route path="cursussen" component={Cursussen} title={"Cursussen"} onEnter={requireAuth}> </Route>
                <Route path="cursussen/algemeen" component={CursussenGeneral} title={"Cursussen"} onEnter={requireAuth}> </Route>
                <Route path="cursussen/archief" component={CursussenArchive} title={"Cursussen"} onEnter={requireAuth}> </Route>
                {/*<Route path="cursussen/:cursus/:cursusdetail" component={CursusDetails} title={"Cursus"}> </Route>*/}
                <Route path="cursussen/:courseId/aankondigingen" component={CursusAankondigingen} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/cursusdocumenten" component={CursusDocumenten} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/opdrachten" component={CursusOpdrachten} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/opdrachten/:opdracht" component={CursusOpdrachten} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/resultaten" component={CursusResultaten} onEnter={requireAuth}> </Route>
                <Route path="cursussen/:courseId/ects" component={CursusECTS} onEnter={requireAuth}> </Route>
                <Route path="community" component={Community} title={"Community / inspiratie"} onEnter={requireAuth}> </Route>
                <Route path="groepen" component={Groepen} title={"Groepen"} onEnter={requireAuth}> </Route>
                <Route path="groepen/:groupId" component={Groepen} title={"Groepen"} onEnter={requireAuth}> </Route>
            </Route>


            <Route path="login" component={Login} title={"Login"}> </Route>
            <Route path="registreer" component={Signup}> </Route>
            <Route path="kalender" component={Empty} onEnter={requireAuth}> </Route>
            <Route path="inbox" component={Empty} onEnter={requireAuth}> </Route>
            <Route path="account" component={Empty} onEnter={requireAuth}> </Route>
        </Router>
    </Provider>
);



render(routes, document.getElementById('app'));