import React, { Component } from 'react';
import _ from 'lodash';
import Cursus from "../components/CourseBlock";

class Cursussen extends Component {
    constructor(){
        super();

        this.state = {
            studentId: "1",
        };
    }

    render() {
        const CourseComponents = _.map(this.props.courses, (course, i) => {
            if(course.group === "2016/2017") {
                return <Cursus key={i} i={i} course={course} {...this.props}/>;
            }
        });

        return (
            <div id="grid" className="row js-grid">
                {CourseComponents}
                {/*<button onClick={Cursussen.reloadCourses.bind(this)}>Reload</button>*/}
            </div>
        );
    }
}

export default Cursussen;