import React, { Component } from 'react';
import Announcements from '../../components/AnnouncementBlock';

export default class CursusAankondigingen extends Component {
    constructor(props) {
        super(props);
        this.state = {read: "unread"};
    }

    static handleChange(e){
        const query = e.target.className;
        this.setState({read: query});
    }

    render() {
        const { courseId } = this.props.params;

        const courseAnnouncements = this.props.announcements[courseId] || [];

        if(courseAnnouncements.length === 0){
            return(<span>Er zijn geen aankondigingen voor deze cursus.</span>)
        } else{
            return (
                <div>
                    <div id="read">
                        <a href="#" className="unread" onClick={CursusAankondigingen.handleChange.bind(this)}>Ongelezen</a>
                        <a href="#" className="read" onClick={CursusAankondigingen.handleChange.bind(this)}>Gelezen</a>
                    </div>

                    <Announcements courseAnnouncements={courseAnnouncements} seen={this.state.read}/>
                </div>
            );
        }


    }
}