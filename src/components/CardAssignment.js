import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AssignmentBlock extends Component{
    render(){
        const { courseId, id, title, date, score, status } = this.props;
        let actionButton, text;

        switch(status){
            case "online":
                actionButton = <Link className="action" to="/">Bekijk inzending</Link>;
                break;
            case "offline":
                actionButton = <Link className="action" to="/"><i className='fa fa-upload' aria-hidden='true'> </i> Indienen</Link>;
                text = "Indienen";
                break;
        }



        return(
            <div className="card card-assignment">
                <span className={`status ${status}`}/>
                <div className="assignment-meta">
                    <h4><Link to="/">{title}</Link></h4>
                    <div className="extra">
                        <span className="datum">Einddatum: {date}</span>
                        <span className="score">{score} punten</span>
                    </div>
                </div>
                {actionButton}
            </div>
        )
    }
}