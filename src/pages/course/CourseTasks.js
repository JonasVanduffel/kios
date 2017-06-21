import React, { Component } from 'react';

import Assignment from "../../components/CardAssignment";
import $ from 'jquery';

export default class CourseTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {switch: "type"};
    }

    static handleChange(){
        if(this.state.switch === "datum"){
            this.setState({switch: "type"});
        } else this.setState({switch: "datum"});
    }

    componentDidUpdate(){
        switch(this.state.switch){
            case "type":
                document.getElementById("read").classList.add('active');
                document.getElementById("unread").classList.remove('active');
                break;
            case "datum":
                document.getElementById("unread").classList.add('active');
                document.getElementById("read").classList.remove('active');
                break;
            default:
                break;
        }
    }

    _toggleDiv(e) {
        let thizz = $(e.target.parentNode.parentNode.nextSibling);
        console.log(thizz);
        thizz.slideToggle("fast");
    }

    render() {
        let actionButton;
        const {courseId} = this.props.params;

        switch(this.props.children.type){
            case "Student":
                actionButton = (
                    <div id="action-button">
                        <div id="switch-buttons">
                            <a href="#" id="unread" className="false active" onClick={CourseTasks.handleChange.bind(this)}>Datum</a>
                            <a href="#" id="read" className="true" onClick={CourseTasks.handleChange.bind(this)}>Type</a>
                        </div>
                    </div>
                );
                break;

            case "Docent":
                actionButton = (
                    <div id="action-button">
                        <a href="#" className="btn btn-primary btn-marginright">+ Opdrachtengroep</a>
                        <a href="#" className="btn btn-primary">+ Opdracht</a>
                    </div>
                );
                break;
        }

        switch(this.state.switch){
            case "type":
                return(
                    <div>
                        {actionButton}

                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="assignment-group">
                                    <div className="header">
                                        <a href="#" onClick={this._toggleDiv}>
                                            <h2>
                                                Algemeen
                                                <span className="percent">50%</span>
                                            </h2>
                                        </a>

                                    </div>

                                    <div className="body">
                                        <Assignment courseId={courseId} id="a-01" title="Indienen eerste digitale versie poster" date="19 september 2017" score="10" status="offline"/>
                                        <Assignment courseId={courseId} id="a-02" title="Blend 24/10/2016: onderzoeksplan" date="25 oktober 2016" score="10" status="online"/>
                                        <Assignment courseId={courseId} id="a-03" title="Indienen onderzoeksplan" date="20 oktober 2016" score="10" status="online"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

                break;

            case "datum":

                return(
                    <div>
                        {actionButton}

                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="assignment-group">
                                    <div className="header">
                                        <a href="#" onClick={this._toggleDiv}>
                                            <h2>
                                                Openstaande opdrachten
                                            </h2>
                                        </a>

                                    </div>

                                    <div className="body">
                                        <Assignment courseId={courseId} id="a-02" title="Indienen eerste digitale versie poster" date="19 september 2017" score="10" status="offline"/>
                                    </div>
                                </div>

                                <div className="assignment-group">
                                    <div className="header">
                                        <a href="#" onClick={this._toggleDiv}>
                                            <h2>
                                                Afgelopen opdrachten
                                            </h2>
                                        </a>

                                    </div>

                                    <div className="body">
                                        <Assignment courseId={courseId} id="a-03" title="Blend 24/10/2016: onderzoeksplan" date="25 oktober 2016" score="10" status="online"/>
                                        <Assignment courseId={courseId} id="a-04" title="Indienen onderzoeksplan" date="20 oktober 2016" score="10" status="online"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

                break;
        }
    }
}