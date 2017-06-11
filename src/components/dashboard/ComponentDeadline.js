import React, { Component }  from 'react';

export default class ComponentDeadline extends Component{
    render(){
        const { title, date } = this.props;

        return(
            <span>
                <div className="deadline" >
                    <span className="status"><img src={require('../../assets/Glyph/_misc/Uncheck.svg')} alt="NotDone"/></span>
                    <span className="title">{title}</span>
                    <span className="date">{date}</span>
                </div>
            </span>
        )
    }
};