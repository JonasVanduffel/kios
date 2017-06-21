import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import * as firebase from 'firebase';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { type: null };
        this.onTypeChange = this.onTypeChange.bind(this);

        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref('/users/' + userId).once('value', this.onTypeChange);
    }

    componentDidMount(){

    }

    onTypeChange(data){
        this.setState({type: data.val().type});
        this.forceUpdate();
    }

    render() {
        const {courseId } = this.props.params;
        const {groupId} = this.props.params;
        const {type} = this.state;

        const i = this.props.courses.findIndex((course) => course.id === courseId);
        const j = this.props.groups.findIndex((group) => group.id === groupId);
        const course = this.props.courses[i];
        const group = this.props.groups[j];

        if(groupId != null){
            return (
                <div>
                    <Sidebar type={type} id={group.id} tit={group.title} title={this.props.children.props.route.title} groep={true}/>

                    <div id="main-wrapper">
                        <Header id={group.id} title={group.title} groep={true}/>
                        <main>
                            <div className="container-fluid">
                                {React.cloneElement(this.props.children, this.props, {type: type})}
                            </div>
                        </main>
                    </div>
                </div>
            );
        }

        if (courseId == null) {
            return (
                <div>
                    <Sidebar type={type} title={this.props.children.props.route.title}/>

                    <div id="main-wrapper">
                        <Header title={this.props.children.props.route.title}/>
                        <HeaderMobile title={this.props.children.props.route.title}/>
                        <main>
                            <div className="container-fluid">
                                {React.cloneElement(this.props.children, this.props, {type: type})}
                            </div>
                        </main>
                    </div>
                </div>
            );
        } else if(courseId) {
            return (
                <div>
                    <Sidebar type={type} id={course.id} tit={course.title} title={this.props.children.props.route.title} cursus={true}/>

                    <div id="main-wrapper">
                        <Header id={course.id} title={course.title} cursus={true}/>
                        <main>
                            <div className="container-fluid">
                                {React.cloneElement(this.props.children, this.props, {type: type})}
                            </div>
                        </main>
                    </div>
                </div>
            );
        }


    }
}