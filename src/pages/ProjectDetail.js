import React, { Component } from 'react';
import _ from 'lodash';

import Project from "../components/CardProject";

class ProjectDetail extends Component {


    render() {
        const ProjectComponents = _.map(this.props.projects, (project, i) => {
            return <Project key={i} id={project.id} title={project.title} author={project.author} likes={project.likes} imgSrc={project.imgSrc}/>;
        });


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

                <div className="row projects-hidden">

                    <div className="modal-overlay2"> </div>
                    <div className="modal-overlay"> </div>
                </div>
            </div>


        );
    }
}

export default ProjectDetail;