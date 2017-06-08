import React, { Component } from 'react';

import Nav from '../navigation/MainNav';
import SubNav from "../navigation/SubNav";
import MobileNav from '../navigation/MobileNav';

import * as firebase from 'firebase';
import { browserHistory } from 'react-router';


export default class Sidebar extends Component {
    logOut(){
        firebase.auth().signOut();
        browserHistory.push('/login');
    }

    render() {
        let user = firebase.auth().currentUser;
        const { type, cursus, tit } = this.props;


        return (
            <div>
                <aside id="sidebar">
                    <div id="sidebar-header">
                        <div id="avatar">
                            <img src={user.photoURL} alt={user.displayName} />
                            <span id="status"> </span>
                        </div>
                        <div id="name">{user.displayName}</div>
                        <div id="type">{type}</div>
                    </div>

                    <Nav location={location} type={type}/>

                    <div id="logo">
                        <img id="btnLogout" src={require('./../../assets/Glyph/_misc/Power.svg')} alt="Logo" onClick={this.logOut.bind(this)}/>
                    </div>
                </aside>

                <header id="mobile-header">
                    <MobileNav location={location} type={type} cursus={cursus} tit={tit}/>

                    <nav id="mobile-nav-sub">
                        <SubNav {... this.props}/>
                    </nav>
                </header>
            </div>
        );
    }
}