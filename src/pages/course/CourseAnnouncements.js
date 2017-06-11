import React, { Component } from 'react';
import Announcements from '../../components/CardAnnouncement';

export default class CursusAankondigingen extends Component {
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

        if(announcements.length === 0){
            return (
                <span>Er zijn geen aankondigingen binnen deze cursus.</span>
            )
        } else{
            return (
                <div>
                    <div id="action-button">
                        <div id="switch-buttons">
                            <a href="#" id="unread" className="false active" onClick={CursusAankondigingen.handleChange.bind(this)}>Ongelezen</a>
                            <a href="#" id="read" className="true" onClick={CursusAankondigingen.handleChange.bind(this)}>Gelezen</a>
                        </div>
                    </div>
                    <Announcements courseAnnouncements={announcements} seen={this.state.seen}/>
                </div>
            );
        }
    }
}