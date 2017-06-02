import React, { Component } from 'react';

import Nav from '../navigation/MainNav';

import CourseStore from '../../stores/CourseStore';
import * as firebase from 'firebase';
import { browserHistory } from 'react-router';

export default class Sidebar extends Component {
    constructor(){
        super();
        this.getStudent = this.getStudent.bind(this);

        this.state = {
            studentId: "1",
            student: CourseStore.getStudent(),
        };
    }

    componentDidMount(){
        CourseStore.on("change", this.getStudent);

        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser.displayName);

                this.setState({
                    name: firebaseUser.displayName,
                    pic: firebaseUser.photoURL,
                });

            }
            else {
                console.log("not logged in");
            }
        });

    }

    getStudent() {
        this.setState({
            student: CourseStore.getStudent(),
        });
    }

    logOut(){
        firebase.auth().signOut();
        browserHistory.push('/login');
    }

    render() {

        return (


            <div>
            <aside id="sidebar">
                <div id="sidebar-header">
                    <div id="avatar">
                        <img src={this.state.pic} alt={this.state.name} />
                        <span id="status"> </span>
                    </div>
                    <div id="name">{this.state.name}</div>
                    <div id="type">Student</div>
                </div>

                <Nav location={location}/>
                {/*<Navigation navigation={this.props.route.config.navigation}/>*/}

                <div id="logo">

                    <button id="btnLogout" onClick={this.logOut.bind(this)}>Log out</button>
                    <img src={require('./../../assets/logo.svg')} alt="Logo"/>

                </div>
            </aside>

                <header id="mobile-header">
                    <nav id="mobile-nav-main">
                        <ul>
                            <li>
                                <a href="#" className="icon-dashboard active"> </a>
                            </li>
                            <li>
                                <a href="cursussen.html" className="icon-course"> </a>
                            </li>
                            <li>
                                <a href="opdrachten.html" className="icon-list"> </a>
                            </li>
                            <li>
                                <a href="groepen.html" className="icon-team"> </a>
                            </li>
                            <li>
                                <a href="kalender.html" className="icon-calendar"> </a>
                            </li>
                            <li>
                                <a href="inbox.html" className="icon-inbox"> </a>
                            </li>
                            <li>
                                <a href="account.html" className="icon-user"> </a>
                            </li>
                        </ul>
                    </nav>
                    <nav id="mobile-nav-sub">
                        Placeholder
                    </nav>
                </header>

            </div>
        );
    }
}