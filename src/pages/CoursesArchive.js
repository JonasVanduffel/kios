import React, { Component } from 'react';
import _ from 'lodash';
import Cursus from "../components/CourseBlock";

class CursussenArchive extends Component {
    constructor(){
        super();

        this.state = {
            studentId: "1",
        };
    }

    render() {
        const CourseComponents = _.map(this.props.courses, (course, i) => {
            if(course.group === "2015/2016") {
                return <Cursus key={i} i={i} course={course} color="gray" {...this.props}/>;
            }
        });

        return (
            <div id="grid" className="row js-grid">
                {CourseComponents}
            </div>
        );
    }
}

export default CursussenArchive;