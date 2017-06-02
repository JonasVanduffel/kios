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
                            <img src={require('../../../assets/icons/glyph/News.svg')} alt="Aankondigingen" />
                            <img className="update" src={require('../../../assets/icons/glyph/_misc/Update.svg')} alt="" />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cursussen/" + course.id + "/cursusdocumenten"}>
                            <img src={require('../../../assets/icons/glyph/Document.svg')} alt="Cursusdocumenten" />
                            {/*<img className="update" src={require('../../assets/icons/glyph/_misc/Update.svg')} alt="" />*/}
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cursussen/" + course.id + "/opdrachten"}>
                            <img src={require('../../../assets/icons/glyph/Tasks/Dark.svg')} alt="Opdrachten" />
                            {/*<img className="update" src={require('../../assets/icons/glyph/_misc/Update.svg')} alt="" />*/}
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cursussen/" + course.id + "/resultaten"}>
                            <img src={require('../../../assets/icons/glyph/Score.svg')} alt="Resultaten" />
                            {/*<img className="update" src={require('../../assets/icons/glyph/_misc/Update.svg')} alt="" />*/}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}