import React, { Component } from 'react';
import Announcements from '../../components/CardAnnouncement';

export default class CourseAnnouncements extends Component {
    constructor(props) {
        super(props);
        this.state = {seen: false};
    }

    render() {
        return (
            <h3 id="not-available">Niet beschikbaar in dit prototype.</h3>
        )
    }
}