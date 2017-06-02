import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import LinkMain from './LinkMain';


export default class NavMain extends Component {
    render() {

        return (
            <nav>
                <ul>
                    <li>
                        <IndexLink to="/" activeClassName={"active"}>
                            <div className="nav-icon"><img src={require('./../../assets/icons/dashboard.svg')} alt="Dashboard"/></div>
                            Dashboard
                        </IndexLink>
                    </li>

                    <LinkMain url="/cursussen" imgSrc="course.svg" title="Cursussen"/>
                    <LinkMain url="/community" imgSrc="list.svg" title="Community"/>
                    <LinkMain url="/groepen" imgSrc="team.svg" title="Groepen"/>
                    <LinkMain url="/kalender" imgSrc="calendar.svg" title="Kalender"/>
                    <LinkMain url="/inbox" imgSrc="inbox.svg" title="Inbox"/>
                    <LinkMain url="/account" imgSrc="user.svg" title="Account"/>
                </ul>
            </nav>
        )
    }
}