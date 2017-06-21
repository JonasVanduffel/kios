import React, { Component } from 'react';
import { Link } from 'react-router';

export default class GroupBlock extends Component{
    render(){
        const { group } = this.props;

        return(
            <div className="col-md-3 col-sm-6">
                <div className={"card card-course border-none" }>
                    <h3><Link to={`/groepen/${group.id}/nieuwsfeed`}>{group.title}</Link></h3>
                    <span>{group.course}</span>
                    <br/><br/>
                    <Link className="visit" to={`/groepen/${group.id}/nieuwsfeed`}>Bezoek groep</Link>
                </div>
            </div>
        )
    }
}