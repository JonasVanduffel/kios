import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AssignmentBlock extends Component{
    render(){
        const { title, date, score, status } = this.props;

        if(status === "online"){
            return(
                <div className="card card-assignment">
                    <span className={`status ${status}`}/>
                    <div className="assignment-meta">
                        <h3><a href="#">Opdracht 1: Persona Profiel</a></h3>
                        <div className="extra">
                            <span className="datum">Inleverdatum: 1 Maart 2017</span>
                            <span className="score">7/10 punten</span>
                        </div>
                    </div>
                    <a href="tid-opdracht-1.html"><i className="fa fa-upload" aria-hidden="true"> </i></a>
                </div>
            )
        } else if(status === "offline"){
            return(
                <div className="card card-assignment">
                    <span className={`status ${status}`}/>
                    <div className="assignment-meta">
                        <h3><a href="#">Opdracht 1: Persona Profiel</a></h3>
                        <div className="extra">
                            <span className="datum">Inleverdatum: 1 Maart 2017</span>
                            <span className="score">7/10 punten</span>
                        </div>
                    </div>
                </div>
            )
        }


    }
}