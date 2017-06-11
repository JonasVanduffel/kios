import React, { Component } from 'react';
import { Link } from 'react-router';

const CardProject = React.createClass({
    renderProject(project){
        return(
            <div className="col-md-3 col-sm-6">
                <Link to={`/inspiratie/${project.id}`}>

                    <div className="card card-project">
                        <div className="hover">
                            <div className="meta">
                                <div className="title">{project.title}</div>
                                <div className="author">{project.author}</div>
                            </div>
                            <div className="likes">
                                {project.likes}
                            </div>
                        </div>
                        <div className="thumbnail">
                            <img src={require('../assets/projects/' + project.imgSrc)} alt={project.title}/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    },

    render(){
        return(
            <span>
                {this.props.projects.map(this.renderProject)}
            </span>
        )
    }
});

export default CardProject;