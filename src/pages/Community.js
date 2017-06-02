import React, { Component } from 'react';

import CourseStore from '../stores/CourseStore';

class Cursussen extends Component {
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

    render() {


        return (
            <div>
                Community
            </div>
        );
    }
}

export default Cursussen;