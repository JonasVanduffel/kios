import React, { Component } from 'react';
import { Link } from 'react-router';

const ComponentFavCourse = React.createClass({
    renderCourse(course, i){
        let courseId = course.id;

        if(course.favorite === true){
            return(
                <div key={i} className={"course-fav border-" + course.color}>
                    <div className="title">
                        <span>{course.title}</span>
                    </div>
                    <div className="shortcuts">
                        <Link to={"/cursussen/" + courseId + "/aankondigingen"}>
                            <img src={require('../../assets/Glyph/Dark/News.svg')} alt="Aankondigingen" />
                            <img className="update" src={require('../../assets/Glyph/_misc/Update.svg')} alt="Update" />
                        </Link>

                        <Link to={"/cursussen/" + courseId + "/cursusdocumenten"}>
                            <img src={require('../../assets/Glyph/Dark/Document.svg')} alt="Cursusdocumenten" />
                        </Link>

                        <Link to={"/cursussen/" + courseId + "/opdrachten"}>
                            <img src={require('../../assets/Glyph/Dark/Tasks.svg')} alt="Opdrachten" />
                            <img className="update" src={require('../../assets/Glyph/_misc/Update.svg')} alt="Update" />
                        </Link>

                        <Link to={"/cursussen/" + courseId + "/resultaten"}>
                            <img src={require('../../assets/Glyph/Dark/Score.svg')} alt="Resultaten" />
                        </Link>
                    </div>
                </div>
            )
        }

    },

    render(){
        return(
            <span>
                {this.props.courses.map(this.renderCourse)}
            </span>
        )
    }
});

export default ComponentFavCourse;