import React, { Component } from 'react';
import Sidebar from '../components/layout/Sidebar';

export default class EmptyPage extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <div id="main-wrapper">
                    <div id="empty-page">
                        <h1>Niet beschikbaar in deze versie.</h1>
                    </div>
                </div>
            </div>
        );
    }
}