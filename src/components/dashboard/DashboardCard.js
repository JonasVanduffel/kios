import React, { Component } from 'react';
import { Link } from 'react-router';

export default class DashboardCard extends Component {
    handleChange(e){
        let card = e.target.parentNode.parentNode;

        if(card.classList.contains('hid')){
            card.className = "panel";
            e.target.className = "delete"
        } else {
            card.className += " hid";
            e.target.className += " add"
        }
    }

    render() {
        const { id, title, src, hasMore, editable } = this.props;
        let moreLink, del, shake;

        if(editable){
            del = (
                <a href="javascript:" className="delete" onClick={this.handleChange.bind(this)}> </a>
            );
            shake = "shake";
        } else{
            del = null;
            shake = null;
        }

        if(hasMore){
            moreLink = (
                <Link to={hasMore}>Bekijk meer</Link>
            );
        } else moreLink = null;

        return(
            <div className={`card card-dashboard ${shake}`}>
                {del}
                <div className="card-header">
                    <img src={require(`../../assets/Glyph/Dark/${src}`)} alt={title}/>
                    <h3>{title}</h3>
                    {moreLink}
                </div>

                <div className="card-body" id={id}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}