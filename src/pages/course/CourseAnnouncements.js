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

    componentDidUpdate(){
        switch(this.state.read){
            case "read":
                document.getElementById("read").classList.add('active');
                document.getElementById("unread").classList.remove('active');
                break;
            case "unread":
                document.getElementById("unread").classList.add('active');
                document.getElementById("read").classList.remove('active');
                break;
            default:
                break;
        }
    }

    render() {
        const { courseId } = this.props.params;
        const { type } = this.props;

        console.log("typeee: " + type);

        const courseAnnouncements = this.props.announcements[courseId] || [];


        if(courseAnnouncements.length === 0){
            return (
                <span>Er zijn geen aankondigingen voor deze cursus.</span>
            )
        } else{
            return (
                <div>
                    {/*<div id="read">
                        <a href="#" className="unread" onClick={CursusAankondigingen.handleChange.bind(this)}>Ongelezen</a>
                        <a href="#" className="read" onClick={CursusAankondigingen.handleChange.bind(this)}>Gelezen</a>
                    </div>*/}

                    <div id="action-button">
                        <div id="switch-buttons">
                            <a href="#" id="unread" className="unread active" onClick={CursusAankondigingen.handleChange.bind(this)}>Ongelezen</a>
                            <a href="#" id="read" className="read" onClick={CursusAankondigingen.handleChange.bind(this)}>Gelezen</a>
                        </div>
                    </div>

                    <Announcements courseAnnouncements={courseAnnouncements} seen={this.state.read}/>
                </div>
            );
        }


    }
}