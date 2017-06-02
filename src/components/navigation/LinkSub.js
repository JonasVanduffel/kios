import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LinkSub extends Component {
    render() {
        const { url, title } = this.props;

        return (
            <li>
                <Link to={url} activeClassName={"active"}>{title}</Link>
            </li>
        )
    }
}