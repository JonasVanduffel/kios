import React, { Component } from 'react';
import { Link } from 'react-router';



const CardProjectDetail = React.createClass({


    renderProject(project){
        const { id } = this.props;



        if(id === project.id){
            return(
                <div className="modal-overlay2">
                    <div className="meta">
                        <div className="avatar"><img src={require('./../assets/avatar-vincent.jpg')}/></div>
                        <div className="info"><h2>{project.title}</h2><span className="extra-info">door {project.author} voor {project.course}</span></div>
                        <div className="like"><img src={require('./../assets/Glyph/_misc/Like.svg')}/></div>
                    </div>
                    <img className="project-image" src={require('./../assets/projects/' + project.imgSrc)}/>
                </div>
            )
        }

    },

    render(){
        const { id, projects } = this.props;

        return(
            <span>
                {projects.map(this.renderProject)}
            </span>
        )
    }



    /*render(){
        const { id, projects } = this.props;

        // console.log(projects[0].id);


        const Test = projects.map(console.log("sdfsdf"));


        return(
            <div className="modal-overlay2">
                {Test}
            </div>
        )
    }*/






});

export default CardProjectDetail;