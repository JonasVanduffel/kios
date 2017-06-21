import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Project from "../components/CardProject";
import CardProjectDetail from "../components/CardProjectDetail";

class ProjectDetail extends Component {

    static close() {
        browserHistory.push('/inspiratie');
    }


    render() {
        const projectsArray = this.props.projects;

        const Projects = <Project projects={projectsArray}/>;

        return (
            <div>
                {/*<div id="action-button">
                 Sorteren op:
                 <div>
                 <a href="" className="btn btn-primary btn-small btn-left btn-marginright">Alle jaren</a>
                 <a href="" className="btn btn-primary btn-small btn-left">Alle jaren</a>
                 </div>
                 <div id="switch-buttons">
                 <a href="#" id="unread" className="unread active">Datum</a>
                 <a href="#" id="read" className="read">Favorieten</a>
                 </div>
                 </div>*/}

               {/* <div id="overlay-inspi" onClick={ProjectDetail.close.bind(this)}>*/}
                <CardProjectDetail id={this.props.params.projectId} projects={projectsArray}/>
                <div id="overlay-inspi" onClick={ProjectDetail.close.bind(this)}>
                </div>


                <div className="row">
                    {Projects}
                </div>
            </div>


        );
    }
}

export default ProjectDetail;
