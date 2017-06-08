import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CourseBlock extends Component{
    render(){
        const { course } = this.props;

        return(
            <div className="col-md-3 col-sm-6">
                <div className={"card card-course border-" + course.color }>
                    <h3><Link to={`/cursussen/${course.id}/aankondigingen`}>{course.title}</Link></h3>
                    <span>{course.docent}</span>
                    <div className="course-icons">
                        <Link to={`/cursussen/${course.id}/aankondigingen`}><img src={require('../assets/Glyph/Dark/News.svg')} alt="Aankondigingen" /></Link>
                        <Link to={`/cursussen/${course.id}/cursusdocumenten`}><img src={require('../assets/Glyph/Dark/Document.svg')} alt="Documenten" /></Link>
                        <Link to={`/cursussen/${course.id}/opdrachten`}><img src={require('../assets/Glyph/Dark/Tasks.svg')} alt="Opdrachten" /></Link>
                        <Link to={`/cursussen/${course.id}/resultaten`}><img src={require('../assets/Glyph/Dark/Score.svg')} alt="Resultaten" /></Link>
                    </div>
                </div>
            </div>
        )
    }
}