import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AssignmentBlock extends Component{
    render(){
        const { title, date, score, status } = this.props;
        let actionButton, text;

        switch(status){
            case "online":
                actionButton = "Bekijk inzending";
                break;
            case "offline":
                actionButton = <i className='fa fa-upload' aria-hidden='true'> </i>;
                text = "Indienen";
                break;
        }

        return(
            <div className="card card-assignment">
                <span className={`status ${status}`}/>
                <div className="assignment-meta">
                    <h4><a href="#">{title}</a></h4>
                    <div className="extra">
                        <span className="datum">Einddatum: {date}</span>
                        <span className="score">{score} punten</span>
                    </div>
                </div>
                <a href="#" className="action">{actionButton} {text}</a>
            </div>
        )
    }
}