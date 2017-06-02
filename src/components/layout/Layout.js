import React, { Component } from 'react';

import Sidebar from './Sidebar';
import Header from './Header';

import CourseStore from '../../stores/CourseStore';

export default class Layout extends Component {
    constructor(){
        super();
        this.getStudent = this.getStudent.bind(this);
        this.state = {
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

    render() {
        const { student } = this.state;
        const { courseId } = this.props.params;

        const i = this.props.courses.findIndex((course) => course.id === courseId );
        const course = this.props.courses[i];


        if (this.props.params.courseId == null) {
            return (

                <div>
                    <Sidebar/>

                    <div id="main-wrapper">
                        <Header title={this.props.children.props.route.title} name={student.first_name}/>
                        <main>
                            <div className="container-fluid">
                                {React.cloneElement(this.props.children, this.props)}
                            </div>
                        </main>
                    </div>
                </div>
            );
        } else {
            return (

                <div>
                    <Sidebar/>

                    <div id="main-wrapper">
                        <Header id={course.id} title={course.title} name={student.first_name} cursus={true}/>
                        <main>
                            <div className="container-fluid">

                                {React.cloneElement(this.props.children, this.props)}
                            </div>
                        </main>
                    </div>
                </div>
            );
        }
    }
}