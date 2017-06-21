import React, { Component } from 'react';

import Assignment from "../../components/CardAssignment";
import $ from 'jquery';
import { Link } from 'react-router';

export default class CourseTaskSubmit extends Component {
    render() {
        const { courseId, id, title, date, score, status } = this.props.params;


        return(
            <div>
                <div className="task-info">
                    <div className="status">Takeen</div>
                    <div className="titel">{title}</div>
                </div>
            </div>
        );
    }
}