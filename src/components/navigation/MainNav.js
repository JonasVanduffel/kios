import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import LinkMain from './LinkMain';


export default class NavMain extends Component {
    render() {
        const { type } = this.props;

        if(type === "Student"){
            return (
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName={"active"}>
                                <div className="nav-icon"><img src={require('./../../assets/Glyph/Light/Dashboard.svg')} alt="Dashboard"/></div>
                                Dashboard
                            </IndexLink>
                        </li>

                        <LinkMain url="/cursussen" imgSrc="Course.svg" title="Cursussen"/>
                        <LinkMain url="/inspiratie" imgSrc="Inspiration.svg" title="Inspiratie"/>
                        <LinkMain url="/groepen" imgSrc="Group.svg" title="Groepen"/>
                        <LinkMain url="/kalender" imgSrc="Calendar.svg" title="Kalender"/>
                        <LinkMain url="/inbox" imgSrc="Inbox.svg" title="Inbox"/>
                        <LinkMain url="/account" imgSrc="Account.svg" title="Account"/>
                    </ul>
                </nav>
            )
        } else{

            return (
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName={"active"}>
                                <div className="nav-icon"><img src={require('./../../assets/Glyph/Light/Dashboard.svg')} alt="Dashboard"/></div>
                                Dashboard
                            </IndexLink>
                        </li>

                        <LinkMain url="/cursussen" imgSrc="Course.svg" title="Cursussen"/>
                        <LinkMain url="/kalender" imgSrc="Calendar.svg" title="Kalender"/>
                        <LinkMain url="/inbox" imgSrc="Inbox.svg" title="Inbox"/>
                        <LinkMain url="/account" imgSrc="Account.svg" title="Account"/>
                    </ul>
                </nav>
            )
        }


    }
}