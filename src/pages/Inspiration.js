import React, { Component } from 'react';
import _ from 'lodash';

import Project from "../components/CardProject";

class Inspiration extends Component {
    constructor(props) {
        super(props);
        this.state = {switch: "datum"};
    }

    static handleChange(){
        if(this.state.switch === "datum"){
            this.setState({switch: "type"});
        } else this.setState({switch: "datum"});
    }


    render() {
        const projectsArray = this.props.projects;
        const Projects = <Project projects={projectsArray}/>;

        return (
            <div>
                {/*<div id="action-button-left">
                    <a href="" className="btn btn-primary btn-marginright btn-select">Alle jaren</a>
                    <a href="" className="btn btn-primary">Alle jaren</a>
                </div>*/}


                <div className="row">
                    {Projects}
                </div>
            </div>


        );
    }
}

export default Inspiration;