import React, { Component } from 'react';
import _ from 'lodash';
import Cursus from "../components/CourseBlock";

// import * as CourseActions from '../actions/CourseActions';
import CourseStore from '../stores/CourseStore';

class Cursussen extends Component {
    constructor(){
        super();
        this.getStudent = this.getStudent.bind(this);
        this.getCourse = this.getCourse.bind(this);
        this.state = {
            studentId: "1",

            student: CourseStore.getStudent(),
            course: CourseStore.getCourse(),
        };
    }

    componentWillMount(){
        CourseStore.on("change", this.getStudent);
        CourseStore.on("change", this.getCourse);
    }

    getStudent(){
        this.setState({
            student: CourseStore.getStudent(),
        });
    }
    getCourse(){
        this.setState({
            course: CourseStore.getCourse().courses[0],
        });
    }


    render() {
        const {student} = this.state;
        const {course} = this.state;

        /*if(course.course_id = "0001"){
         console.log("THIS: " + course.name)
         }*/

        /*const CourseComponents = _.map(student.courses, (course, index) => {
         return <Cursus key={index} id={course.course_id} title={course.title} docent={course.docent} color={course.color} {...course}/>;
         });*/

        const CourseComponents = _.map(this.props.courses, (course, i) => {
            // return <Cursus key={i} id={course.course_id} title={course.title} docent={course.docent} color={course.color} {...course}/>;
            return <Cursus key={i} i={i} course={course} {...this.props}/>;
        });


        // console.log(CourseID);

        return (
            <div id="grid" className="row js-grid">

                {CourseComponents}

                {/*<button onClick={Cursussen.reloadCourses.bind(this)}>Reload</button>*/}
            </div>
        );
    }
}

export default Cursussen;