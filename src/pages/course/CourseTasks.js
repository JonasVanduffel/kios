import React, { Component } from 'react';

import Assignment from "../../components/CardAssignment";

export default class CursusOpdrachten extends Component {
    render() {
        if(this.props.children.type === "Student"){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="assignment-group">
                                <div className="header">
                                    <h2><i className="fa fa-caret-down" aria-hidden="true"> </i>Taken</h2>
                                    <span className="percent">50%</span>
                                </div>

                                <div className="body">
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                </div>
                            </div>

                            <div className="assignment-group">
                                <div className="header">
                                    <h2><i className="fa fa-caret-down" aria-hidden="true"> </i>Testen</h2>
                                    <span className="percent">50%</span>
                                </div>

                                <div className="body">
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else{
            return (
                <div>
                    <div id="action-button">
                        {/*<a href="#" id="unread" className="unread active" onClick={CursusAankondigingen.handleChange.bind(this)}>Ongelezen</a>
                         <a href="#" id="read" className="read" onClick={CursusAankondigingen.handleChange.bind(this)}>Gelezen</a>*/}
                        <a href="#" className="btn btn-primary btn-marginright">+ Opdrachtengroep</a>
                        <a href="#" className="btn btn-primary">+ Opdracht</a>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="assignment-group">
                                <div className="header">
                                    <h2><i className="fa fa-caret-down" aria-hidden="true"> </i>Taken</h2>
                                    <span className="percent">50%</span>
                                </div>

                                <div className="body">
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                </div>
                            </div>

                            <div className="assignment-group">
                                <div className="header">
                                    <h2><i className="fa fa-caret-down" aria-hidden="true"> </i>Testen</h2>
                                    <span className="percent">50%</span>
                                </div>

                                <div className="body">
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="online"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                    <Assignment title="Opdracht 1: Persona Profiel" date="" score="" status="offline"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }


    }
}