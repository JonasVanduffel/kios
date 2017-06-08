import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LinkMobile extends Component {
    render() {
        const { url, imgSrc } = this.props;

        return (
            <li>
                <Link to={url} activeClassName={"active"}>
                    <div className="nav-icon"><img src={require('./../../assets/Glyph/Light/' + imgSrc)} alt="Nav"/></div>
                </Link>
            </li>
        )
    }
}

