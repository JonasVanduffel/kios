import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LinkMain extends Component {
    render() {
        const { url, imgSrc, title } = this.props;

        return (
            <li>
                <Link to={url} activeClassName={"active"}>
                    <div className="nav-icon"><img src={require('./../../assets/Glyph/Light/' + imgSrc)} alt={title}/></div>
                    {title}
                </Link>
            </li>
        )
    }
}

