import React, { Component } from 'react';
import Announcements from '../../components/CardAnnouncement';

export default class CourseAnnouncements extends Component {
    constructor(props) {
        super(props);
        this.state = {seen: false};
    }

    static handleChange(){
        if(this.state.seen === false){
            this.setState({seen: true});
        } else this.setState({seen: false});
    }

    componentDidUpdate(){
        switch(this.state.seen){
            case true:
                document.getElementById("read").classList.add('active');
                document.getElementById("unread").classList.remove('active');
                break;
            case false:
                document.getElementById("unread").classList.add('active');
                document.getElementById("read").classList.remove('active');
                break;
            default:
                break;
        }
    }

    render() {
        const { courseId } = this.props.params;
        const announcements = this.props.announcements[courseId] || [];

        let actionButton, actionButtonFirst, noAnnouncement;




        switch(this.props.children.type){
            case "Student":
                noAnnouncement = "Nog geen aankondigingen binnen deze cursus.";
                actionButton = (
                    <div id="action-button">
                        <div id="switch-buttons">
                            <a href="#" id="unread" className="false active" onClick={CourseAnnouncements.handleChange.bind(this)}>Ongelezen</a>
                            <a href="#" id="read" className="true" onClick={CourseAnnouncements.handleChange.bind(this)}>Gelezen</a>
                        </div>
                    </div>
                );
                break;

            case "Docent":
                actionButton = (
                    <div id="action-button" className="">
                        <a href="#" className="btn btn-primary">+ Aankondiging</a>
                    </div>
                );
                actionButtonFirst = (
                    <div id="action-button" className="no-mobile">
                        <a href="#" className="btn btn-primary btn-left">+ Plaats je eerste aankondiging</a>
                    </div>
                );
                break;
        }

        if(announcements.length === 0){
            return (
                <div>
                    <span>{noAnnouncement}</span>
                    {actionButtonFirst}
                </div>
            )
        } else{
            return (
                <div>
                    {actionButton}

                    <Announcements courseAnnouncements={announcements} seen={this.state.seen}/>
                </div>
            );
        }
    }
}