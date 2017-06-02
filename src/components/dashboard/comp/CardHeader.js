import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DashboardCard extends Component {
    render() {
        const { title, src, more } = this.props;
        let moreLink;

        if(more !== ""){
            moreLink = (
                <Link to={more}>Bekijk meer</Link>
            );
        } else {moreLink = null}

        return (
            <div className="card-header">
                <img src={require(`../../../assets/icons/glyph/${src}`)} alt={title}/>
                <h3>{title}</h3>
                {moreLink}
            </div>
        );
    }
}