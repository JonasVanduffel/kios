import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import LinkMobile from './LinkMobile';
import { Link } from 'react-router';


export default class MobileNav extends Component {
    render() {
        const { type, cursus, tit } = this.props;

        if(type === "Student"){
            if(cursus){
                return (
                    <nav id="mobile-nav-main">
                        <Link to={"/cursussen"}>
                            <img src={require('./../../assets/Glyph/Light/Back.svg')} alt="Terug"/>
                        </Link>
                        <h3>{tit}</h3>
                    </nav>
                )
            }
            return (
                <nav id="mobile-nav-main">
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName={"active"}>
                                <div className="nav-icon"><img src={require('./../../assets/Glyph/Light/Dashboard.svg')} alt="Dashboard"/></div>
                            </IndexLink>
                        </li>

                        <LinkMobile url="/cursussen" imgSrc="Course.svg"/>
                        <LinkMobile url="/inspiratie" imgSrc="Inspiration.svg"/>
                        <LinkMobile url="/groepen" imgSrc="Group.svg"/>
                        <LinkMobile url="/kalender" imgSrc="Calendar.svg"/>
                        <LinkMobile url="/inbox" imgSrc="Inbox.svg"/>
                        <LinkMobile url="/account" imgSrc="Account.svg"/>
                    </ul>
                </nav>
            )
        } else{

            return (
                <nav id="mobile-nav-main">
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName={"active"}>
                                <div className="nav-icon"><img src={require('./../../assets/Glyph/Light/Dashboard.svg')} alt="Dashboard"/></div>
                            </IndexLink>
                        </li>

                        <LinkMobile url="/cursussen" imgSrc="Course.svg"/>
                        <LinkMobile url="/kalender" imgSrc="Calendar.svg"/>
                        <LinkMobile url="/inbox" imgSrc="Inbox.svg"/>
                        <LinkMobile url="/account" imgSrc="Account.svg"/>
                    </ul>
                </nav>
            )
        }


    }
}