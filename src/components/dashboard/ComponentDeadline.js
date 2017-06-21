import React, { Component }  from 'react';
import { Link } from 'react-router';

export default class ComponentDeadline extends Component{
    render(){
        const { title, date, icon } = this.props;

        return(
            <span>
                <div className="deadline" >
                    <span className="status"><img src={require(`../../assets/Glyph/_misc/${icon}.svg`)} alt="NotDone"/></span>
                    <Link to=""><span className="title">{title}</span></Link>
                    <span className="date">{date}</span>
                </div>
            </span>
        )
    }
};