import React, { Component } from 'react';

import Assignment from "../../components/CardAssignment";
import $ from 'jquery';
import { Link } from 'react-router';

export default class CourseTasks extends Component {
    render() {
        const {testvalue} = this.props.params;

        console.log(testvalue);

        return(
            <div>
                <div className="task-info">
                    <div className="status"><img src={require('./../../assets/Glyph/_misc/Uncheck.svg')} alt="" /></div>
                    <div className="title"><h2>Eindpresentatie</h2></div>
                    <Link to="/" className="btn btn-small btn-primary btn-icon"><img src={require('./../../assets/Glyph/Light/Upload.svg')} alt="" /> Opdracht indienen</Link>
                </div>
                <div className="task-extra-info">
                    <div className="deadline"><h3>Deadline:</h3> 25 juni 2017</div>
                    <div className="deadline"><h3>Deadline:</h3> 25 juni 2017</div>
                </div>
            </div>
        );
    }
}