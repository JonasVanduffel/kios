import React, { Component } from 'react';

import Nav from '../navigation/MainNav';

import CourseStore from '../../stores/CourseStore';

export default class Sidebar extends Component {
    constructor(){
        super();
        this.getStudent = this.getStudent.bind(this);
        this.state = {
            studentId: "1",
            student: CourseStore.getStudent(),
        };
    }

    componentWillMount(){
        CourseStore.on("change", this.getStudent);
    }

    getStudent(){
        this.setState({
            student: CourseStore.getStudent(),
        });
    }

    switchAccounts(){
        this.setState({
            studentId: "2",
        });
        console.log(this.studentId);
    }

    render() {
        const {student} = this.state;

        return (


            <div>
                <aside id="sidebar">
                    <div id="sidebar-header">
                        <div id="avatar">
                            <img src={student.avatar_url} alt="Femke Somers" />
                            <span id="status"> </span>
                        </div>
                        <div id="name">{student.first_name} {student.name}</div>
                        <div id="type">Student</div>
                    </div>

                    <Nav location={location}/>
                    {/*<Navigation navigation={this.props.route.config.navigation}/>*/}

                    <div id="logo">

                        {/*<img src={require('./../../assets/logo.svg')} alt="Logo" onClick={this.switchAccounts.bind(this)}/>*/}

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