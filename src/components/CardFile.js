import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CardFile extends Component{
    render(){
        const { title, type } = this.props;

        return(
            <li>
                <i className={`fa fa-file-${type}-o`} aria-hidden="true"> </i>
                <a href="">{title}</a>
            </li>
        )
    }
}