import React from 'react';
import { Link } from 'react-router';

const Announcements = React.createClass({

    renderAnnouncement(announcement, i){
        if(announcement.seen){
            return(
                <div className="col-md-12 col-sm-12" key={i}>
                    <div className="card card-message">
                        <div className="avatar">
                            <img src={require('../assets/avatar-lien.jpg')} alt="Lien" />
                        </div>

                        <div className="content">
                            <h3>{announcement.title}</h3>
                            <span className="date">{announcement.date}</span>
                            <p>
                                {announcement.description}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

    },
    renderAnnouncementUnread(announcement, i){
        if(!announcement.seen){
            return(
                <div className="col-md-12 col-sm-12" key={i}>
                    <div className="card card-message">
                        <div className="avatar">
                            <img src={require('../assets/avatar-lien.jpg')} alt="Lien" />
                        </div>

                        <div className="content">
                            <h3>{announcement.title}</h3>
                            <span className="date">{announcement.date}</span>
                            <p>
                                {announcement.description}
                            </p>
                            <Link to=" ">Lees meer</Link>
                        </div>
                    </div>
                </div>
            )
        }

    },

    render(){
        const { seen } = this.props;

        if(seen === "unread"){
            return(
                <div className="row">
                    {this.props.courseAnnouncements.map(this.renderAnnouncementUnread)}
                </div>
            )

        } else if(seen === "read"){
            return(
                <div className="row">
                    {this.props.courseAnnouncements.map(this.renderAnnouncement)}
                </div>
            )
        }
    }

});

export default Announcements;