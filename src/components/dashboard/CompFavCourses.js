import React, { Component } from 'react';
import { Link } from 'react-router';

export default class FavLessons extends Component{
    render(){
        const { course, i } = this.props;

        return(
            <div className={"course-fav border-" + course.color} key={i}>
                <div>
                    <span className="title">{course.title}</span>
                </div>
                <div className="icons">
                    <div>
                        <Link to={"/cursussen/" + course.id + "/aankondigingen"}>
                            <img src={require('../../assets/Glyph/Dark/News.svg')} alt="Aankondigingen" />
                            <img className="update" src={require('../../assets/Glyph/_misc/Update.svg')} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cursussen/" + course.id + "/cursusdocumenten"}>
                            <img src={require('../../assets/Glyph/Dark/Document.svg')} alt="Cursusdocumenten" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cursussen/" + course.id + "/opdrachten"}>
                            <img src={require('../../assets/Glyph/Dark/Tasks.svg')} alt="Opdrachten" />
                            <img className="update" src={require('../../assets/Glyph/_misc/Update.svg')} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cursussen/" + course.id + "/resultaten"}>
                            <img src={require('../../assets/Glyph/Dark/Score.svg')} alt="Resultaten" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}